# Component-First Approach for Image-to-Code

**Date**: 2026-02-03
**Context**: Inno Hub Dashboard conversion
**Confidence**: High (พิสูจน์แล้วด้วยตัวเลข)

## Key Learning

เมื่อแปลง design ที่ซับซ้อน (เช่น full dashboard) เป็นโค้ด การทำทั้งหน้าทีเดียวจะได้ผลลัพธ์ที่แย่กว่าการแยก component ออกมาทำทีละตัว แล้วค่อยประกอบกัน

ทดลองกับ Inno Hub Dashboard:
- **v1 (ทำรวดเดียว)**: ~85% accuracy
- **v2 (component-first)**: ~92% accuracy
- **Improvement**: +7%

สาเหตุที่ดีกว่า:
1. แต่ละ component ทดสอบแยก — หา bug ง่าย
2. ปรับแก้ได้ละเอียดกว่า — focus ทีละชิ้น
3. ถ้าชิ้นไหนผิด ไม่กระทบชิ้นอื่น
4. Reusable — ใช้ซ้ำได้ในอนาคต

## The Pattern

```
❌ Wrong: Full page → ทีเดียว → เพี้ยนเยอะ

✅ Right:
1. Identify components (StatCard, InfoBanner, etc.)
2. Build each component separately
3. Screenshot + compare each one
4. Fix until 90%+
5. Assemble into full page
6. Final comparison
```

## Why This Matters

- **Time saving**: แก้ทีละ component เร็วกว่าแก้ทั้งหน้า
- **Quality**: ผลลัพธ์ดีกว่า 7%
- **Maintainability**: components แยกกัน ง่ายต่อการ debug
- **Confidence**: รู้ว่าแต่ละชิ้นถูกแล้วก่อนประกอบ

## Related Lessons

- Lesson 01: Evidence > Assumption
- Lesson 02: Detail > Speed
- **Lesson 03: Component First > Full Page**

## Tags

`image-to-code`, `component-first`, `workflow`, `accuracy`, `best-practice`
