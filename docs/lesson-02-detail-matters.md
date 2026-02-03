# Lesson 02: Detail Matters — รายละเอียดสำคัญ

**Date**: 2026-02-03
**Context**: สร้าง Car Cards แล้วต้องแก้หลายรอบ

---

## หลักการ

> **"จุดที่ละเอียด ต้องเจาะจงมากๆ"**

---

## สิ่งที่พลาด

| รอบ | พลาดอะไร | เพราะ |
|-----|---------|-------|
| 1 | Icons ไม่ตรง | ใช้ generic icons |
| 2 | Specs section ไม่มี bg | ไม่ได้ดูละเอียด |
| 3 | Specs เต็มขอบ | คิดว่าเต็มขอบ แต่จริงๆเป็นกล่องแยก |
| 4 | Layout พัง | ขาด closing tags |
| 5 | Specs box ไม่มี border | ไม่เห็น border บางๆ |

---

## สิ่งที่ต้องดู (Checklist)

### Card Component
- [ ] มุมโค้งของ card (rounded-lg? rounded-2xl? rounded-3xl?)
- [ ] Shadow (shadow-sm? shadow? shadow-md?)
- [ ] แต่ละ section มีพื้นหลังสีอะไร?
- [ ] มี border หรือไม่?
- [ ] Padding/margin แต่ละส่วน

### Nested Elements
- [ ] กล่องซ้อนกล่อง — เต็มขอบหรือมี margin?
- [ ] มี border รอบกล่องข้างในไหม?
- [ ] มุมโค้งของกล่องข้างใน

### Icons
- [ ] Icon style (filled? outline? stroke-width?)
- [ ] Icon size
- [ ] Icon color

---

## วิธีดูรายละเอียด

```
1. ขอรูปขยาย (zoom) ถ้าไม่ชัด
2. ดูแต่ละ element แยกกัน:
   - พื้นหลังสีอะไร?
   - มีขอบไหม?
   - มุมโค้งแค่ไหน?
   - padding/margin เท่าไหร่?
3. ดู nested structure:
   - กล่องในกล่อง เต็มขอบหรือมี gap?
4. เปรียบเทียบ pixel-by-pixel
```

---

## ความยากของ Car Cards

| ระดับ | เหตุผล |
|-------|--------|
| กลาง | มี nested structure (specs box inside card) |
| | ต้องหา icons ที่ตรง |
| | มีหลาย section (image, title, specs) |
| | มี border บางๆ ที่มองข้ามง่าย |

---

## สรุป

**Detail > Speed**

ใช้เวลาดูละเอียดตั้งแต่แรก ดีกว่าแก้หลายรอบ

**Zoom In**

ถ้าไม่แน่ใจ → ขอรูปขยาย

**Check Borders**

Border บางๆ มองข้ามง่าย → ต้องหาให้เจอ

---

*Lesson 02 — Image to Code Workshop*
