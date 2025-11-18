// Feature flag configuration
// Can be extended to use environment variables, external services, or A/B testing platforms

export interface FeatureFlags {
  showNavigation: boolean;
  showHero: boolean;
  showAIAgentInterface: boolean;
  showProblem: boolean;
  showSolution: boolean;
  showUpgrade: boolean;
  showServices: boolean;
  showGuarantees: boolean;
  showHowWeWork: boolean;
  showWhyUs: boolean;
  showCaseStudy: boolean;
  showTechCredibility: boolean;
  showTrustAnchor: boolean;
  showFAQ: boolean;
  showFinalCTA: boolean;
  showFooter: boolean;
}

// Default feature flags - all sections enabled
const defaultFlags: FeatureFlags = {
  showNavigation: true,
  showHero: true,
  showAIAgentInterface: true,
  showProblem: true,
  showSolution: true,
  showUpgrade: true,
  showServices: true,
  showGuarantees: true,
  showHowWeWork: true,
  showWhyUs: true,
  showCaseStudy: true,
  showTechCredibility: true,
  showTrustAnchor: true,
  showFAQ: true,
  showFinalCTA: true,
  showFooter: true,
};

// Get feature flags from environment variables or use defaults
export function getFeatureFlags(): FeatureFlags {
  // You can override flags using environment variables
  // Example: process.env.NEXT_PUBLIC_SHOW_AI_AGENT === 'false'
  
  return {
    showNavigation: process.env.NEXT_PUBLIC_SHOW_NAVIGATION !== 'false',
    showHero: process.env.NEXT_PUBLIC_SHOW_HERO !== 'false',
    showAIAgentInterface: process.env.NEXT_PUBLIC_SHOW_AI_AGENT !== 'false',
    showProblem: process.env.NEXT_PUBLIC_SHOW_PROBLEM !== 'false',
    showSolution: process.env.NEXT_PUBLIC_SHOW_SOLUTION !== 'false',
    showUpgrade: process.env.NEXT_PUBLIC_SHOW_UPGRADE !== 'false',
    showServices: process.env.NEXT_PUBLIC_SHOW_SERVICES !== 'false',
    showGuarantees: process.env.NEXT_PUBLIC_SHOW_GUARANTEES !== 'false',
    showHowWeWork: process.env.NEXT_PUBLIC_SHOW_HOW_WE_WORK !== 'false',
    showWhyUs: process.env.NEXT_PUBLIC_SHOW_WHY_US !== 'false',
    showCaseStudy: process.env.NEXT_PUBLIC_SHOW_CASE_STUDY !== 'false',
    showTechCredibility: process.env.NEXT_PUBLIC_SHOW_TECH_CREDIBILITY !== 'false',
    showTrustAnchor: process.env.NEXT_PUBLIC_SHOW_TRUST_ANCHOR !== 'false',
    showFAQ: process.env.NEXT_PUBLIC_SHOW_FAQ !== 'false',
    showFinalCTA: process.env.NEXT_PUBLIC_SHOW_FINAL_CTA !== 'false',
    showFooter: process.env.NEXT_PUBLIC_SHOW_FOOTER !== 'false',
  };
}

// Hook for client components
export function useFeatureFlags(): FeatureFlags {
  return getFeatureFlags();
}

// A/B Testing support - can be extended with actual A/B testing logic
export interface ABTestVariant {
  id: string;
  name: string;
  flags: Partial<FeatureFlags>;
}

export const abTestVariants: ABTestVariant[] = [
  {
    id: 'control',
    name: 'Control - All Features',
    flags: {},
  },
  {
    id: 'no-ai-agent',
    name: 'Variant A - No AI Agent',
    flags: {
      showAIAgentInterface: false,
    },
  },
  {
    id: 'minimal',
    name: 'Variant B - Minimal',
    flags: {
      showAIAgentInterface: false,
      showGuarantees: false,
      showWhyUs: false,
      showTechCredibility: false,
    },
  },
];

// Get variant flags - in production, this would be determined by user assignment
export function getABTestFlags(variantId?: string): Partial<FeatureFlags> {
  if (!variantId) return {};
  
  const variant = abTestVariants.find(v => v.id === variantId);
  return variant?.flags || {};
}

// Combine default flags with A/B test overrides
export function getFeatureFlagsWithABTest(variantId?: string): FeatureFlags {
  const baseFlags = getFeatureFlags();
  const abTestOverrides = getABTestFlags(variantId);
  
  return {
    ...baseFlags,
    ...abTestOverrides,
  };
}
