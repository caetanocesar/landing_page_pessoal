---
name: Lumina Developer Portfolio
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#52424b'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#84727c'
  outline-variant: '#d6c1cb'
  surface-tint: '#973c7f'
  primary: '#4e0040'
  on-primary: '#ffffff'
  primary-container: '#6d165a'
  on-primary-container: '#ec84cb'
  inverse-primary: '#ffade2'
  secondary: '#5c5f60'
  on-secondary: '#ffffff'
  secondary-container: '#e1e3e4'
  on-secondary-container: '#626566'
  tertiary: '#162c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#254400'
  on-tertiary-container: '#8cb263'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd8ee'
  primary-fixed-dim: '#ffade2'
  on-primary-fixed: '#3b002f'
  on-primary-fixed-variant: '#7a2265'
  secondary-fixed: '#e1e3e4'
  secondary-fixed-dim: '#c5c7c8'
  on-secondary-fixed: '#191c1d'
  on-secondary-fixed-variant: '#454748'
  tertiary-fixed: '#c6ef99'
  tertiary-fixed-dim: '#abd380'
  on-tertiary-fixed: '#0f2000'
  on-tertiary-fixed-variant: '#2f4f0a'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
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

- **Primary (#6D165A):** A deep, regal magenta used exclusively for interactive elements, progress indicators, and key brand highlights. It should be used sparingly to maintain its impact.
- **Secondary/Surface (#F8F9FA):** A very light gray used for section backgrounds and container fills to subtly separate content modules without introducing heavy borders.
- **Neutral/Text (#1A1A1A):** A near-black for maximum readability. Avoid pure black to keep the aesthetic "premium" and softer on the eyes.
- **Accents:** Use light gray tints of the primary magenta (5-10% opacity) for hover states and subtle background washes.

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

- **Tonal Tiers:** Use the Secondary Color (#F8F9FA) for the background and White (#FFFFFF) for cards or foreground elements. This "inverse" elevation (white on gray) feels fresh and modern.
- **Ambient Shadows:** Shadows should be almost imperceptible. Use a large blur radius (20px-40px) with very low opacity (3-5%) tinted with a hint of the primary magenta or a neutral cool gray.
- **Refined Borders:** Use 1px solid borders in a very light gray (#E9ECEF) to define card boundaries. Only use the Primary color for borders on active input states or selected chips.

## Shapes

The shape language is **Rounded**, striking a balance between the friendliness of Plus Jakarta Sans and the professional rigor of a developer portfolio.

- **Base Radius (8px):** Applied to standard buttons, input fields, and small cards.
- **Large Radius (16px):** Applied to project preview cards and main container sections.
- **Pill Radius:** Use for tags, chips, and status indicators to provide a distinct shape contrast against rectangular content blocks.

## Components

- **Buttons:** Primary buttons feature a solid #6D165A fill with white text. Secondary buttons use a ghost style (1px border or transparent background) with #6D165A text. All buttons should have a subtle 2px vertical lift on hover.
- **Project Cards:** Large white surfaces with a 1px #E9ECEF border. On hover, the border transitions to a 10% opacity primary color and the shadow deepens slightly.
- **Chips/Tags:** Small, pill-shaped elements. Use #F8F9FA background with #1A1A1A text for technical skills (e.g., "React", "TypeScript").
- **Input Fields:** Minimalist style with only a bottom border or a very light 4-sided border. On focus, the border becomes 2px thick and changes to the primary magenta.
- **Lists:** Use custom bullet points (small 4px squares in #6D165A) instead of standard browser dots to maintain the brand aesthetic.
- **Code Blocks:** Syntax highlighting should use a custom theme that incorporates the primary magenta for keywords, set against a very light gray (#F8F9FA) or dark navy background for contrast.