# Component Development Rules

## Code Style and Conventions

### TypeScript
- ALWAYS use TypeScript, never plain JavaScript
- Enable strict mode in tsconfig.json
- Prefer `interface` over `type` for component props
- Use `const` assertions for literals
- Avoid `any` - use `unknown` if type is truly unknown
- Define return types explicitly for functions
- Use optional chaining (?.) and nullish coalescing (??)

### React/Next.js Patterns
- Use Server Components by default (no "use client" directive)
- Only use Client Components when needed (interactivity, browser APIs)
- Place "use client" directive at the top of the file when needed
- Prefer named exports for components
- Use async/await for data fetching in Server Components
- Implement proper error boundaries with error.tsx files
- Use loading.tsx for loading states
- Always use Next.js Image component for images
- Always use Next.js Link component for navigation

### Component Structure
```tsx
// Example component structure
interface ComponentNameProps {
  // Props with JSDoc comments
  /** The main data object to display */
  data: DataType;
  /** Optional className for styling */
  className?: string;
}

export function ComponentName({ data, className }: ComponentNameProps) {
  // Component logic here
  return (
    // JSX here
  );
}
```

### File Organization
- Use `src/` directory for source code
- Components: `src/components/[domain]/ComponentName.tsx`
- Utilities: `src/lib/[feature]/function-name.ts`
- Types: `src/types/[domain].ts`
- Hooks: `src/hooks/use-[feature].ts`
- Use kebab-case for file names
- Use PascalCase for component files

### Tailwind CSS
- Use Tailwind classes exclusively (no CSS modules or styled-components)
- Mobile-first responsive design (use sm:, md:, lg:, xl: prefixes)
- Create semantic color variables in tailwind.config.ts
- Use consistent spacing scale (4, 8, 12, 16, 24, 32, 48, 64)
- Group related classes (layout, spacing, typography, colors)
- Use cn() utility from lib/utils for conditional classes

### shadcn/ui Components
- Import components into components/ui/ directory
- Customize default styles to match brand design
- Always maintain accessibility features
- Use compound component patterns when appropriate

## Specific Patterns
## DO NOT
- Don't use var keyword
- Don't use CSS-in-JS libraries
- Don't store sensitive data in localStorage
- Don't use !important in CSS
- Don't ignore TypeScript errors
- Don't use inline styles
- Don't fetch data in useEffect when avoidable
- Don't create files unless necessary
- Don't use absolute imports without @ alias
- Don't commit console.log statements
