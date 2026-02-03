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

## Workflow

```
รูปต้นฉบับ → Claude Vision → React code → Screenshot → Compare → Iterate
```

## Tech Stack

- React (TypeScript)
- Tailwind CSS
- Lucide React (icons)
- placehold.co (placeholder images)

## Related

- Figma MCP: ใช้เมื่อลูกค้าส่ง Figma
- screenshot-to-code: Reference project (71K+ stars)
