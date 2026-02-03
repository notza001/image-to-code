# Page Prompt

ใช้สำหรับสร้าง full page จากรูป

---

## Prompt (Thai)

```
ดูรูปนี้และสร้าง React page ด้วย Tailwind CSS

กฎ:
- แบ่งเป็น components ย่อยๆ ที่เหมาะสม
- ใส่ทุก element ห้ามข้าม
- Responsive design (mobile-first)
- ใช้สีและขนาดที่ตรงกับรูป
- ห้ามใส่ comment แบบ "// TODO"
- สร้าง reusable components สำหรับส่วนที่ซ้ำ

โครงสร้าง:
- Page component หลัก
- แยก sub-components (Header, Hero, Features, etc.)
- Export default
```

---

## Prompt (English)

```
Look at this image and create a React page with Tailwind CSS.

Rules:
- Split into appropriate sub-components
- Include EVERY element, do not skip any
- Responsive design (mobile-first)
- Match colors and sizes exactly
- Do NOT add "// TODO" comments
- Create reusable components for repeated sections

Structure:
- Main Page component
- Separate sub-components (Header, Hero, Features, etc.)
- Export default
```

---

## Example Output Structure

```tsx
// components/Header.tsx
export const Header = () => { ... }

// components/Hero.tsx
export const Hero = () => { ... }

// components/Features.tsx
export const Features = () => { ... }

// pages/LandingPage.tsx
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
    </div>
  )
}
```
