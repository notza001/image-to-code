# Image to Code

แปลงรูปภาพดีไซน์เป็น React + Tailwind code ด้วย Claude Vision

## Why?

ลูกค้าส่ง PNG/JPG มาให้แปลงเป็นโค้ด ไม่ได้ส่ง Figma

## Goal

**90% accuracy** ด้วย iterative workflow

## Usage

### 1. Basic

```
ลากรูปเข้า Claude Code แล้วพิมพ์:

"สร้าง React component จากรูปนี้ ใช้ Tailwind CSS
ห้ามข้าม element ใดๆ ห้ามใส่ TODO comment"
```

### 2. With Template

ใช้ prompt จาก `prompts/` folder สำหรับผลลัพธ์ที่ดีกว่า

### 3. Iterate

ถ้าไม่ตรง → screenshot ผลลัพธ์ → ส่งกลับพร้อม feedback

## Accuracy Breakdown

| Step | Accuracy |
|------|----------|
| Initial | 60% |
| + Detailed prompt | 75% |
| + Iteration 1 | 85% |
| + Iteration 2 | **90%** |

## Inspiration

- [abi/screenshot-to-code](https://github.com/abi/screenshot-to-code) (71K+ stars)
- Claude Vision best practices from Anthropic

## License

MIT
