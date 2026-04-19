# Design System Document

## 1. Overview & Creative North Star: "The Obsidian Architect"

The design system is engineered to position the brand as a premier, high-tech authority in IT consulting. Moving away from the generic "SaaS Blue" aesthetic, we embrace **"The Obsidian Architect"** as our Creative North Star. This vision combines the deep, impenetrable mystery of advanced technology with the crystalline clarity of expert consulting.

The experience is defined by a "dark-mode first" philosophy, utilizing heavy tonal depth, glassmorphism, and intentional asymmetry. We break the standard grid by overlapping containers and using "light leaks" that mimic the glow of high-end hardware. The goal is to make the user feel they are interacting with a secure, futuristic terminal rather than a standard website.

---

## 2. Colors

Our palette is high-contrast and atmospheric. We use deep neutrals to establish ground, while vibrant accents act as navigational beacons.

### Brand Accents & Core
*   **Primary (#ffb68d):** A warm, high-energy glow used for critical interactions and brand highlights.
*   **Secondary (#e7b3ff):** A tech-forward purple for secondary CTAs and logic-based UI elements.
*   **Tertiary (#e0c384):** A sophisticated cream for subtle accents and refined detail.
*   **Background (#1a1203):** An ultra-dark charcoal with a slight warmth to prevent "monitor fatigue."

### The "No-Line" Rule
Standard 1px solid borders are strictly prohibited for defining sections. Layout boundaries must be established through **background color shifts** (e.g., transitioning from `surface` to `surface-container-low`) or subtle tonal transitions. This creates a more organic, expensive-feeling UI.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-transparent layers. 
*   **Base:** `surface-dim` (#1a1203)
*   **Layer 1:** `surface-container` (#271e0b) for large content areas.
*   **Layer 2 (Floating):** `surface-bright` (#423823) with 60-80% opacity and a 20px backdrop-blur.

### Signature Textures: The "Glow Logic"
Use gradients sparingly but intentionally. Hero backgrounds should utilize a radial gradient from `primary_container` (#f67300) at 15% opacity to `background` (#1a1203) at 0%, creating a "light leak" effect that suggests a light source just off-screen.

---

## 3. Typography

The typography system uses a high-contrast scale to mirror the brand's expertise and precision.

*   **Display & Headline (Plus Jakarta Sans):** Chosen for its geometric precision. Use `Bold` or `ExtraBold` weights. Large display sizes should use tight letter-spacing (-2%) to feel "editorial."
*   **Title & Body (Inter):** Chosen for maximum readability at small scales. Inter’s neutral character balances the aggressive personality of the display face.
*   **The Narrative Scale:** Use `display-lg` (3.5rem) for hero statements and `label-sm` (0.6875rem) for technical meta-data. This massive jump in scale creates an "architectural" feel, emphasizing the most important information while keeping technical details discreet.

---

## 4. Elevation & Depth

We eschew traditional drop shadows in favor of **Tonal Layering** and **Ambient Light**.

### The Layering Principle
Depth is achieved by "stacking" surface tiers. To make a card pop, place a `surface-container-highest` element on a `surface-container-low` background. The contrast in value provides all the separation needed.

### Ambient Shadows
If a floating element requires a shadow (e.g., a modal), it must be an "Ambient Shadow":
*   **Blur:** 40px - 80px.
*   **Opacity:** 4%-8%.
*   **Color:** Use a tinted version of `on-surface` (#f2e0c2) rather than pure black.

### The "Ghost Border" Fallback
Where containment is essential for accessibility, use a **Ghost Border**. Apply `outline-variant` (#584236) at 15% opacity. This provides a "suggestion" of a boundary without cluttering the visual field with hard lines.

---

## 5. Components

### Buttons: The Pill Command
All buttons are pill-shaped (`rounded-full`) to contrast against the sharp, rectangular grid of the background.
*   **Primary:** Solid `primary_container` (#f67300) with `on-primary` text. Use a subtle inner-glow (1px white at 10% opacity) on the top edge.
*   **Secondary:** Ghost-style buttons with a `secondary` (#e7b3ff) Ghost Border.

### Glassmorphic Cards
Cards must not have solid backgrounds. Use `surface-variant` (#3e331f) at 40% opacity with a `backdrop-filter: blur(12px)`. This allows the "light leaks" in the background to bleed through, making the card feel part of the environment.

### Checkboxes & Radios
In keeping with the tech aesthetic, these should feel like "status indicators." When checked, they should emit a soft outer glow using the `primary` color.

### Input Fields
Inputs should be "Underlined" or "Minimal Framed." Use `surface-container-lowest` as the field background to create a "recessed" look, making the field feel like it’s carved into the interface.

### Chips
Use `tertiary_container` for selection chips. They should be small, all-caps, and use `label-md` typography to mimic code tags or terminal labels.

---

## 6. Do's and Don'ts

### Do:
*   **Overlap Elements:** Let a glassmorphic card sit slightly over a headline to create depth.
*   **Use Asymmetry:** Balance a large headline on the left with a smaller, high-detail code-snippet or terminal window on the right.
*   **Respect the "Glow":** Treat accent colors like light sources. They should illuminate the dark surfaces around them.

### Don't:
*   **Don't use 100% white backgrounds:** This design system lives in the shadows. Pure white should only be used for primary text.
*   **Don't use hard borders:** Avoid the "bootstrap" look. If you see a hard 1px line that isn't a Ghost Border, delete it.
*   **Don't crowd the content:** Use the high end of the Spacing Scale (`20` or `24`) for section margins. Space is the ultimate luxury in UI.
*   **Don't use standard shadows:** If the shadow looks like a "drop shadow" from 2005, it is too heavy. It should be felt, not seen.