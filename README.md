# Vibelifting Wireframe

This is a Next.js application converted from the original HTML wireframe.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, set up your environment variables:

1. Create a `.env` file in the root directory
2. Add your Hugging Face API key:
   ```
   HUGGINGFACE_API_KEY=your_huggingface_api_key_here
   ```
3. Get your API key from [Hugging Face Settings](https://huggingface.co/settings/tokens)

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## AI Agent Feature

The hero section includes an AI agent powered by Hugging Face's Inference API. The agent uses the `meta-llama/Llama-3.1-8B-Instruct` model to provide instant responses to questions about your project.

### Enabling Providers

If you encounter an error that a model is not supported, you need to enable providers:

1. Visit [Hugging Face Provider Settings](https://huggingface.co/settings/providers)
2. Enable the providers you want to use (e.g., Together AI, Anyscale, etc.)
3. Check available models by calling: `GET https://router.huggingface.co/v1/models` with your API key

### Available Models

You can change the model in `app/api/chat/route.ts`. Some commonly available models:
- `meta-llama/Llama-3.1-8B-Instruct` (default)
- `meta-llama/Llama-3.3-70B-Instruct`
- `Qwen/Qwen2.5-Coder-32B-Instruct`
- `google/gemma-2-9b-it`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Once deployed, you can use the Vercel Toolbar for commenting and collaboration.

## Project Structure

- `app/page.tsx` - Main landing page (converted from index.html)
- `app/layout.tsx` - Root layout component
- `app/globals.css` - Global styles (converted from inline styles)
- `package.json` - Dependencies and scripts

