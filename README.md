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

## Feature Flags

The application now supports feature flags to control which sections are displayed. This is useful for A/B testing, gradual rollouts, or creating different versions of the landing page.

### How to Use Feature Flags

1. **Using Environment Variables**
   
   Create a `.env.local` file (or add to your existing `.env` file) and set any of these variables to `false` to hide sections:
   
   ```bash
   # Hide individual sections
   NEXT_PUBLIC_SHOW_AI_AGENT=false
   NEXT_PUBLIC_SHOW_SERVICES=false
   NEXT_PUBLIC_SHOW_GUARANTEES=false
   
   # All available flags (default is true if not specified)
   NEXT_PUBLIC_SHOW_NAVIGATION=true
   NEXT_PUBLIC_SHOW_HERO=true
   NEXT_PUBLIC_SHOW_AI_AGENT=true
   NEXT_PUBLIC_SHOW_SERVICES=true
   NEXT_PUBLIC_SHOW_GUARANTEES=true
   NEXT_PUBLIC_SHOW_HOW_WE_WORK=true
   NEXT_PUBLIC_SHOW_WHY_US=true
   NEXT_PUBLIC_SHOW_CASE_STUDY=true
   NEXT_PUBLIC_SHOW_TECH_CREDIBILITY=true
   NEXT_PUBLIC_SHOW_FAQ=true
   NEXT_PUBLIC_SHOW_FINAL_CTA=true
   NEXT_PUBLIC_SHOW_FOOTER=true
   ```

2. **Restart Development Server**
   
   After changing environment variables, restart your development server:
   ```bash
   npm run dev
   ```

### A/B Testing Support

The feature flag system includes built-in support for A/B testing variants. You can find predefined variants in `app/lib/feature-flags.ts`:

- **Control**: All features enabled
- **Variant A - No AI Agent**: Hides the AI agent interface
- **Variant B - Minimal**: Shows only essential sections

To implement A/B testing, you can modify `app/page.tsx` to use `getFeatureFlagsWithABTest()` and pass a variant ID based on user segmentation.

### Special Behavior: AI Agent Interface

The AI Agent Interface has special positioning logic:
- When both Hero and AI Agent are enabled, the AI Agent appears inside the Hero section (original design)
- When Hero is disabled but AI Agent is enabled, the AI Agent appears as a standalone section
- This maintains the visual hierarchy while providing flexibility

### Examples

**Hide AI Agent for some users:**
```bash
NEXT_PUBLIC_SHOW_AI_AGENT=false
```

**Create a minimal landing page:**
```bash
NEXT_PUBLIC_SHOW_AI_AGENT=false
NEXT_PUBLIC_SHOW_GUARANTEES=false
NEXT_PUBLIC_SHOW_WHY_US=false
NEXT_PUBLIC_SHOW_TECH_CREDIBILITY=false
NEXT_PUBLIC_SHOW_CASE_STUDY=false
```

**Show only Hero and CTA:**
```bash
NEXT_PUBLIC_SHOW_NAVIGATION=true
NEXT_PUBLIC_SHOW_HERO=true
NEXT_PUBLIC_SHOW_AI_AGENT=false
NEXT_PUBLIC_SHOW_SERVICES=false
NEXT_PUBLIC_SHOW_GUARANTEES=false
NEXT_PUBLIC_SHOW_HOW_WE_WORK=false
NEXT_PUBLIC_SHOW_WHY_US=false
NEXT_PUBLIC_SHOW_CASE_STUDY=false
NEXT_PUBLIC_SHOW_TECH_CREDIBILITY=false
NEXT_PUBLIC_SHOW_FAQ=false
NEXT_PUBLIC_SHOW_FINAL_CTA=true
NEXT_PUBLIC_SHOW_FOOTER=true
```

## Project Structure

- `app/page.tsx` - Main landing page with feature flag integration
- `app/layout.tsx` - Root layout component
- `app/globals.css` - Global styles (converted from inline styles)
- `app/components/sections/` - Modular section components
  - `Navigation.tsx` - Navigation bar
  - `Hero.tsx` - Hero section with word carousel
  - `AIAgentInterface.tsx` - AI chat interface
  - `Services.tsx` - Service offerings
  - `Guarantees.tsx` - Guarantees grid
  - `HowWeWork.tsx` - Timeline section
  - `WhyUs.tsx` - Benefits section
  - `CaseStudy.tsx` - Case study showcase
  - `TechCredibility.tsx` - Technology stack
  - `FAQ.tsx` - Frequently asked questions
  - `FinalCTA.tsx` - Final call-to-action
  - `Footer.tsx` - Footer with theme toggle
- `app/lib/feature-flags.ts` - Feature flag configuration and utilities
- `package.json` - Dependencies and scripts

