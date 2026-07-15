---
name: Lumina Developer Portfolio
colors:
  surface: '#F8FAFC'
  surface-dim: '#e2e8f0'
  surface-bright: '#ffffff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f5f9'
  surface-container: '#e2e8f0'
  surface-container-high: '#cbd5e1'
  surface-container-highest: '#94a3b8'
  on-surface: '#1F2937'
  on-surface-variant: '#475569'
  inverse-surface: '#0F1737'
  inverse-on-surface: '#F8FAFC'
  outline: '#94a3b8'
  outline-variant: '#cbd5e1'
  surface-tint: '#5E81F4'
  primary: '#5E81F4'
  on-primary: '#ffffff'
  primary-container: '#0F1737'
  on-primary-container: '#ffffff'
  inverse-primary: '#5E81F4'
  secondary: '#1F2937'
  on-secondary: '#ffffff'
  secondary-container: '#e2e8f0'
  on-secondary-container: '#1F2937'
  tertiary: '#0F1737'
  on-tertiary: '#ffffff'
  tertiary-container: '#1F2937'
  on-tertiary-container: '#ffffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbeafe'
  primary-fixed-dim: '#bfdbfe'
  on-primary-fixed: '#0F1737'
  on-primary-fixed-variant: '#1F2937'
  secondary-fixed: '#e2e8f0'
  secondary-fixed-dim: '#cbd5e1'
  on-secondary-fixed: '#0F1737'
  on-secondary-fixed-variant: '#1F2937'
  tertiary-fixed: '#e0e7ff'
  tertiary-fixed-dim: '#c7d2fe'
  on-tertiary-fixed: '#0F1737'
  on-tertiary-fixed-variant: '#1F2937'
  background: '#F8FAFC'
  on-background: '#1F2937'
  surface-variant: '#e2e8f0'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is engineered for high-end software developer portfolios where technical precision meets editorial elegance. The brand personality is sophisticated, confident, and meticulously organized. It targets a high-value audience of hiring managers, tech founders, and open-source collaborators who appreciate clarity and craft.

The design style is a blend of **Minimalism** and **High-Contrast Modernism**. It prioritizes extreme white space to allow code snippets and project case studies to breathe. Visual interest is generated through purposeful typographic scale and a singular, high-energy accent color that directs the user’s eye to critical calls to action. The emotional response should be one of "effortless competence"—a UI that feels as clean and optimized as the code it showcases.

## Colors

The palette is rooted in a "Paper & Ink" philosophy. The primary background is a crisp white to maximize contrast and perceived speed. 

- **Primary (#5E81F4):** A vibrant light blue used exclusively for interactive elements, progress indicators, and key brand highlights.
- **Secondary/Surface (#F8FAFC):** A very light gray/off-white used for section backgrounds and container fills to subtly separate content modules without introducing heavy borders.
- **Neutral/Text (#1F2937):** A dark gray slate for maximum readability. Avoid pure black to keep the aesthetic "premium" and softer on the eyes.
- **Accents:** Use the Dark Blue (#0F1737) for strong containers and contrasts, or light blue (#5E81F4) tints for hover states and subtle background washes.

## Typography

The typography system leverages **Plus Jakarta Sans** across all roles to maintain a cohesive, modern geometric look. 

- **Display & Headlines:** Utilize the "ExtraBold" (800) weight for large display text. Tighten the letter spacing on larger sizes to create a dense, editorial impact.
- **Body Text:** Use "Regular" (400) weight. Ensure line heights are generous (1.5x - 1.6x) to promote long-form reading of project descriptions.
- **Labels:** Small labels and tags should use "Bold" (700) with increased letter spacing and uppercase styling to provide a clear functional distinction from body copy.
- **Monospace:** While not the primary font, integrate a monospaced font like JetBrains Mono for code blocks and technical metadata to reinforce the software engineering context.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop, centered with a maximum width of 1200px. This ensures code snippets and text columns remain at optimal reading lengths.

- **Grid:** A 12-column system for desktop, shifting to a 4-column system for mobile. 
- **Rhythm:** Use a 4px/8px base unit. Section vertical spacing is intentionally large (120px+) to create a sense of premium "breathing room."
- **Mobile:** On mobile devices, reduce section gaps to 64px and horizontal margins to 20px. Ensure interactive targets (buttons/links) maintain a minimum height of 48px.

## Elevation & Depth

This design system uses a "Flat Plus" approach. Depth is created through subtle tonal shifts and very soft ambient shadows rather than heavy layering.

- **Tonal Tiers:** Use the Secondary Color (#F8FAFC) for the background and White (#FFFFFF) for cards or foreground elements. This "inverse" elevation (white on gray) feels fresh and modern.
- **Ambient Shadows:** Shadows should be almost imperceptible. Use a large blur radius (20px-40px) with very low opacity (3-5%) tinted with a hint of the primary blue or a neutral cool gray.
- **Refined Borders:** Use 1px solid borders in a very light gray (#E2E8F0) to define card boundaries. Only use the Primary color for borders on active input states or selected chips.

## Shapes

The shape language is **Rounded**, striking a balance between the friendliness of Plus Jakarta Sans and the professional rigor of a developer portfolio.

- **Base Radius (8px):** Applied to standard buttons, input fields, and small cards.
- **Large Radius (16px):** Applied to project preview cards and main container sections.
- **Pill Radius:** Use for tags, chips, and status indicators to provide a distinct shape contrast against rectangular content blocks.

## Components

- **Buttons:** Primary buttons feature a solid #5E81F4 fill with white text. Secondary buttons use a ghost style (1px border or transparent background) with #5E81F4 text. All buttons should have a subtle 2px vertical lift on hover.
- **Project Cards:** Large white surfaces with a 1px #E2E8F0 border. On hover, the border transitions to a 10% opacity primary color and the shadow deepens slightly.
- **Chips/Tags:** Small, pill-shaped elements. Use #F8FAFC background with #1F2937 text for technical skills (e.g., "React", "TypeScript").
- **Input Fields:** Minimalist style with only a bottom border or a very light 4-sided border. On focus, the border becomes 2px thick and changes to the primary blue.
- **Lists:** Use custom bullet points (small 4px squares in #5E81F4) instead of standard browser dots to maintain the brand aesthetic.
- **Code Blocks:** Syntax highlighting should use a custom theme that incorporates the primary blue for keywords, set against a very light gray (#F8FAFC) or dark navy (#0F1737) background for contrast.