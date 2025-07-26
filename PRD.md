Create a complete, maintainable, and optimized Next.js App Router project. The design should be unique and avoid generic AI-generated looks, with custom-designed components that reflect the brand's personality.

## IMPORTANT: Complete Multi-Page Website Required
**CRITICAL**: This is a 2-page website. You MUST create ALL 2 pages, not just the first one.
**Required Pages**: "創意設計工作室", "科技部落格"
**Navigation**: Implement a complete navigation system that links to all pages.
**File Structure**: Create separate page files for each page (e.g., app/about/page.tsx, app/contact/page.tsx, etc.)
**Routing**: Use Next.js App Router conventions for all pages.

## Project Structure & Maintainability:
- **Next.js App Router**: Use the latest App Router conventions with proper file-based routing.
- **Multi-Page Structure**: Create individual page files for each of the 2 pages.
- **Modular Components**: Each major section (Hero, Features, Testimonials, etc.) should be its own reusable React component file (e.g., `components/sections/HeroSection.tsx`).
- **Shared Layout**: Implement a global layout in `app/layout.tsx` with navigation to all pages.
- **Page Assembly**: Each page should assemble its specific sections in its respective page.tsx file.
- **UI Components**: Create custom UI components (e.g., custom cards, buttons) in `components/ui/` if they deviate significantly from shadcn/ui defaults.
- **Utilities**: Use `lib/utils.ts` for helper functions.
- **Clean Code**: Ensure code is well-organized, readable, and follows best practices for a scalable project.
- **Assets**: Place images and other static assets in the `public/` directory.

## Brand DNA & Custom Component Style:
**Overall Style**: 奢華高端
**Color Scheme**: 綠、白
**Typography**: 專業
**Spacing & Layout**: 寬鬆
**Additional Requirements**: 展現出專業網站設計師的風範，設計出絕世無雙的精緻網站

**Custom Component Design Rules (Crucial for Uniqueness)**:
- **NO standard shadcn/ui component look**: Design custom variants for cards, buttons, inputs, etc.
- **Containers**: Use unique shapes (e.g., floating panels, tilted boxes, layered elements), creative borders, custom shadows, and non-rectangular forms.
- **Buttons**: Implement distinct designs (e.g., pill shapes, custom hover states, gradient borders, morphing effects).
- **Typography**: Create a custom hierarchy with varied font weights, sizes, and line heights that reflect the brand.
- **Spacing**: Break traditional grid patterns; use innovative whitespace and visual rhythm.
- **Imagery**: Apply unique image treatments (e.g., custom masks, creative overlays, asymmetric crops).
- **Asymmetry**: Embrace offset elements, varied heights, and creative alignments to avoid a generic feel.
- **Backgrounds**: Utilize subtle patterns, gradient meshes, or geometric shapes instead of flat colors.

## Navigation System:
Create a comprehensive navigation system that includes:
- **Header Navigation**: Main navigation bar with links to all 2 pages
- **Mobile Navigation**: Responsive mobile menu for all pages
- **Footer Navigation**: Footer links to key pages
- **Active States**: Highlight the current page in navigation
- **Smooth Transitions**: Add hover and transition effects

## Page 1: 創意設計工作室
**File**: app/創意設計工作室/page.tsx (or app/page.tsx for home)
### Section 1: 創意導航 (navigation)
Nav: creative menu design, custom hover states, unique mobile menu
Background: #FFFFFF with creative treatment

### Section 2: 創意主視覺 (hero)
Creative hero: asymmetric layout, custom button with gradient border, floating elements
Title: "創意無界限"
Subtitle: "我們用設計改變世界"
Background: #FBBF24 with creative treatment

### Section 3: 作品展示 (gallery)
Gallery: creative grid breaks, custom image masks, floating hover effects
Title: "精選作品"
Gallery: 3 images, creative grid layout
Background: #F9FAFB with creative treatment

### Section 4: 創意團隊 (team)
Team cards: creative photo treatments, asymmetric info layouts, custom social icons
Title: "創意大師們"
Team (3): Alex Chen, Sarah Lin
Background: #FFFFFF with creative treatment

## Page 2: 科技部落格
**File**: app/科技部落格/page.tsx (or app/page.tsx for home)
### Section 1: 科技導航 (navigation)
Nav: creative menu design, custom hover states, unique mobile menu
Background: #1F2937 with creative treatment

### Section 2: 科技標題 (hero)
Creative hero: asymmetric layout, custom button with gradient border, floating elements
Title: "探索科技前沿"
Subtitle: "最新科技趨勢、深度技術分析"
Background: #111827 with creative treatment

### Section 3: 最新文章 (blog)
Blog: creative post cards, custom meta layouts, unique image treatments
Title: "最新科技資訊"
Blog: 3 posts, creative card layouts
Background: #F9FAFB with creative treatment

## Final Creative & Technical Requirements:
**Multi-Page Completion**: ENSURE ALL 2 PAGES ARE FULLY IMPLEMENTED with their respective sections and content.
**Technical**: Use shadcn/ui components as a base, but heavily customize their appearance with Tailwind CSS to achieve the unique design. Ensure full responsiveness (mobile-first).
**Routing**: Implement proper Next.js App Router file structure with working navigation between all pages.
**Creative Mandate**: Every single component and section must feel hand-crafted and uniquely tailored to the brand, not like a standard template. Focus on innovative visual patterns and interactions.
**Brand Integration**: Components should embody the brand's personality, story, and style in their design, shapes, and animations.
**Consistency**: Maintain design consistency across all 2 pages while allowing each page to have its unique character.
**Avoid**: Generic, off-the-shelf shadcn/ui looks, predictable layouts, and designs that scream 'AI-generated'.
**Embrace**: Bold creative interpretation, strong brand identity expression, memorable visual moments, and storytelling through design.

## Delivery Checklist:
□ All 2 pages created with proper file structure
□ Working navigation system linking all pages
□ Responsive design across all pages
□ Custom-styled components (not generic shadcn/ui)
□ Brand-consistent design across all pages
□ Proper Next.js App Router implementation
