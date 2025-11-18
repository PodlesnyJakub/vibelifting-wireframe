'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface AIAgentInterfaceProps {
  maxCharacters?: number;
  maxApiCallsPerSession?: number;
  suggestions?: string[];
}

export function AIAgentInterface({ 
  maxCharacters = 500, 
  maxApiCallsPerSession = 3,
  suggestions = [
    'Audit my prototype for security issues',
    'Estimate cost to make my app production-ready',
    'Review my codebase architecture',
    'Plan migration from prototype to MVP'
  ]
}: AIAgentInterfaceProps) {
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [apiCallsRemaining, setApiCallsRemaining] = useState(maxApiCallsPerSession);

  // Initialize session tracking
  useEffect(() => {
    const storedCalls = sessionStorage.getItem('ai_agent_api_calls');
    if (storedCalls) {
      const calls = parseInt(storedCalls, 10);
      setApiCallsRemaining(Math.max(0, maxApiCallsPerSession - calls));
    } else {
      sessionStorage.setItem('ai_agent_api_calls', '0');
      setApiCallsRemaining(maxApiCallsPerSession);
    }
  }, [maxApiCallsPerSession]);

  const handleSubmit = async () => {
    if (!prompt.trim() || isProcessing) return;
    
    // Check character limit
    if (prompt.length > maxCharacters) {
      setError(`Prompt exceeds maximum length of ${maxCharacters} characters.`);
      return;
    }
    
    // Check API call limit
    const storedCalls = sessionStorage.getItem('ai_agent_api_calls');
    const currentCalls = storedCalls ? parseInt(storedCalls, 10) : 0;
    
    if (currentCalls >= maxApiCallsPerSession) {
      setError(`You've reached the limit of ${maxApiCallsPerSession} API calls per session. Please refresh the page to start a new session.`);
      return;
    }
    
    setIsProcessing(true);
    setError(null);
    setResponse(null);
    
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to get response from AI');
      }

      // Increment API call counter
      const storedCalls = sessionStorage.getItem('ai_agent_api_calls');
      const currentCalls = storedCalls ? parseInt(storedCalls, 10) : 0;
      const newCallCount = currentCalls + 1;
      sessionStorage.setItem('ai_agent_api_calls', newCallCount.toString());
      setApiCallsRemaining(maxApiCallsPerSession - newCallCount);

      setResponse(data.response);
      setPrompt(''); // Clear input after successful submission
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="ai-agent-interface">
      <div className="ai-agent-card">
        <div className="ai-agent-header">
          <div className="ai-agent-icon">🤖</div>
          <div className="ai-agent-title">AI Agent for Instant Results</div>
        </div>
        <div className="ai-agent-input-wrapper">
          <input
            type="text"
            className="ai-agent-input"
            placeholder="Ask me anything about your project..."
            value={prompt}
            onChange={(e) => {
              if (e.target.value.length <= maxCharacters) {
                setPrompt(e.target.value);
              }
            }}
            maxLength={maxCharacters}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && prompt.trim() && !isProcessing && apiCallsRemaining > 0) {
                handleSubmit();
              }
            }}
            disabled={isProcessing || apiCallsRemaining === 0}
          />
          <button
            className="ai-agent-submit"
            onClick={handleSubmit}
            disabled={!prompt.trim() || isProcessing || apiCallsRemaining === 0}
          >
            {isProcessing ? (
              <span className="ai-agent-loading">⏳</span>
            ) : (
              <span>→</span>
            )}
          </button>
        </div>
        <div className="ai-agent-limits">
          <div className="ai-agent-limit-item">
            <span className="ai-agent-limit-label">Characters:</span>
            <span className={`ai-agent-limit-value ${prompt.length > maxCharacters * 0.9 ? 'ai-agent-limit-warning' : ''}`}>
              {prompt.length} / {maxCharacters}
            </span>
          </div>
          <div className="ai-agent-limit-item">
            <span className="ai-agent-limit-label">API Calls Remaining:</span>
            <span className={`ai-agent-limit-value ${apiCallsRemaining <= 2 ? 'ai-agent-limit-warning' : ''} ${apiCallsRemaining === 0 ? 'ai-agent-limit-error' : ''}`}>
              {apiCallsRemaining} / {maxApiCallsPerSession}
            </span>
          </div>
        </div>
        {error && (
          <div className="ai-agent-error">
            <span className="ai-agent-error-icon">⚠️</span>
            <span>{error}</span>
          </div>
        )}
        {response && (
          <div className="ai-agent-response">
            <div className="ai-agent-response-header">
              <span className="ai-agent-response-icon">✨</span>
              <span className="ai-agent-response-title">AI Response</span>
            </div>
            <div className="ai-agent-response-content">
              <ReactMarkdown>{response}</ReactMarkdown>
            </div>
            <button
              className="ai-agent-clear"
              onClick={() => {
                setResponse(null);
                setError(null);
              }}
            >
              Clear
            </button>
          </div>
        )}
        <div className="ai-agent-suggestions">
          <div className="ai-agent-suggestions-label">Try asking:</div>
          <div className="ai-agent-suggestions-list">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="ai-agent-suggestion-chip"
                onClick={() => {
                  setPrompt(suggestion);
                }}
                disabled={isProcessing}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
