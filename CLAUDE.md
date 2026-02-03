# Image to Code

> PNG/JPG to React + Tailwind — เป้าหมาย 90% accuracy

## Purpose

แปลงรูปภาพดีไซน์ (PNG/JPG/Screenshot) เป็น React component ด้วย Tailwind CSS
สำหรับกรณีที่ลูกค้าไม่ได้ส่ง Figma มาให้

## Quick Start

1. ลาก/วางรูปเข้า Claude Code
2. ใช้ prompt จาก `prompts/` folder
3. Iterate 2-3 รอบจนได้ 90%

## Golden Rules

- **ห้าม lazy code** — ไม่มี `// TODO`, `<!-- repeat -->`, `// ... more items`
- **ครบทุก element** — ถ้ารูปมี 15 cards โค้ดต้องมี 15 cards
- **Reusable components** — สร้าง component แล้ว map แทน copy-paste
- **Exact match** — สี, spacing, font ต้องตรงกับรูป

## Folder Structure

```
image-to-code/
├── prompts/          # Prompt templates
│   ├── component.md  # Single component
│   ├── page.md       # Full page
│   └── iterate.md    # Iteration/fix
├── examples/         # Before/after examples
├── docs/             # Documentation
└── src/              # Generated code (if needed)
```

## Workflow (ทำทุกครั้ง)

### Step 1: วิเคราะห์รูป (Evidence-Based)
```
1. ดูรูป 3 รอบ
2. ระบุ components ที่เห็น (Button, Card, Input, etc.)
3. บันทึกเฉพาะสิ่งที่เห็น — ไม่คิดเอง
4. ถ้าไม่ชัด → ขอรูปขยาย
```

### Step 2: เขียนโค้ด
```
1. สร้าง folder: examples/XX-name/
2. สร้าง preview.html
3. ใช้ Tailwind CSS classes ตามที่เห็นในรูป
```

### Step 3: เปรียบเทียบ (ทำทุกครั้ง!)
```
1. copy รูปต้นฉบับ → original.png
2. ใช้ Playwright screenshot → generated.png
3. Compare ด้วยตัวเองก่อน (ดู generated.png เทียบกับ original.png)
4. ถ้ายังไม่ถึง 95% → แก้ก่อนจะให้ user ดู
5. สร้าง compare.html (side-by-side, overlay, toggle)
6. เปิด compare.html ให้ user ดู
```

**Playwright Screenshot:**
```bash
npx playwright screenshot --viewport-size="1440,900" file://path/to/preview.html generated.png
```

### Step 4: Iterate
```
1. User บอกจุดผิด
2. แก้ไข preview.html
3. เปิด compare.html ดูอีกครั้ง
4. วนจนกว่าจะ 90%+
```

### Checklist ก่อนส่งงาน
- [ ] มี original.png
- [ ] มี preview.html
- [ ] มี compare.html
- [ ] เปิด compare.html ให้ user ดูแล้ว

## Tech Stack

- React (TypeScript)
- Tailwind CSS
- Lucide React (icons)
- placehold.co (placeholder images)

## Lessons Learned

### Evidence > Assumption
> "อย่าคิดไปเอง หลักฐานมันชัด ให้เอาหลักฐานเป็นหลัก"

- ดูรูปให้ชัด ไม่เดา
- ไม่เพิ่มสิ่งที่ไม่มีในรูป
- ถ้ารูปเล็ก/ไม่ชัด → ขอรูปขยาย

### Vision Limitations
- รูปเล็ก = อาจเห็นสีผิด
- ถ้าไม่แน่ใจ → ขอ crop ส่วนนั้นขยาย

## Related

- Figma MCP: ใช้เมื่อลูกค้าส่ง Figma
- screenshot-to-code: Reference project (71K+ stars)
- docs/flowbite-component-deep-dive.md: Component patterns KM
- docs/component-patterns.md: พื้นฐาน component
- docs/lesson-01-evidence-based.md: Evidence > Assumption
- docs/lesson-02-detail-matters.md: Detail > Speed
- docs/lesson-03-component-first.md: Component First > Full Page
