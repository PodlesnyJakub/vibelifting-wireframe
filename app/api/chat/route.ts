import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.HUGGINGFACE_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Hugging Face API key not configured' },
        { status: 500 }
      );
    }

    // Use Hugging Face router endpoint with OpenAI-compatible chat completions API
    // Using meta-llama/Llama-3.1-8B-Instruct which is commonly available
    // To check available models, call: GET https://router.huggingface.co/v1/models
    // To enable providers, visit: https://huggingface.co/settings/providers
    // Alternative models you can try:
    // - meta-llama/Llama-3.3-70B-Instruct
    // - Qwen/Qwen2.5-Coder-32B-Instruct
    // - google/gemma-2-9b-it
    const model = 'meta-llama/Llama-3.1-8B-Instruct';
    
    // Use the OpenAI-compatible endpoint format
    const response = await fetch(
      'https://router.huggingface.co/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: model,
          messages: [
            {
              role: 'system',
              content: 'You are a helpful AI assistant specializing in software development and code quality. You help developers improve their prototypes and make them production-ready. Be concise and practical.',
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
          max_tokens: 500,
          temperature: 0.7,
          top_p: 0.9,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      let errorMessage = 'Failed to get response from AI model';
      
      try {
        const errorJson = JSON.parse(errorData);
        errorMessage = errorJson.error?.message || errorJson.error || errorMessage;
      } catch {
        errorMessage = errorData || errorMessage;
      }
      
      console.error('Hugging Face API error:', errorMessage);
      
      // Handle rate limiting or model loading
      if (response.status === 503) {
        return NextResponse.json(
          { error: 'Model is loading, please try again in a few seconds' },
          { status: 503 }
        );
      }
      
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Extract the generated text from OpenAI-compatible response format
    let generatedText = '';
    
    if (data.choices && data.choices.length > 0) {
      generatedText = data.choices[0].message?.content || '';
    } else if (data.generated_text) {
      generatedText = data.generated_text;
    } else if (typeof data === 'string') {
      generatedText = data;
    }

    return NextResponse.json({
      response: generatedText || 'I apologize, but I couldn\'t generate a response. Please try again.',
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

