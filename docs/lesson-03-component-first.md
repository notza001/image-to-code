# Lesson 03: Component First — แยกก่อน ประกอบทีหลัง

**Date**: 2026-02-03
**Context**: ทำ Inno Hub Dashboard แล้วรวบทำทีเดียว

---

## หลักการ

> **"แยก component ก่อน แล้วค่อยประกอบกัน"**

---

## สิ่งที่พลาด

| พลาดอะไร | เพราะ |
|---------|-------|
| ทำ full dashboard ทีเดียว | ไม่แยก component |
| สีตัวอักษรเพี้ยน | ไม่ดูละเอียดพอ |
| ข้าม iteration | rush ไปเลย |

---

## วิธีที่ถูก: Component-by-Component

```
Dashboard ซับซ้อน?

1. แยก components:
   - StatCard
   - InfoBanner
   - ToolBadge
   - QuickMenuCard
   - Navbar

2. ทำทีละตัว:
   - สร้าง component.html
   - Playwright screenshot
   - เปรียบเทียบ
   - แก้จน 95%+

3. ประกอบกัน:
   - รวม components
   - ดู spacing ระหว่าง sections
   - Fine-tune
```

---

## เรื่องสี: ง่ายกว่าที่คิด vs ยากกว่าที่คิด

### Design สีง่าย (เช่น Inno Hub)
- Grayscale เป็นหลัก
- Accent สีเดียว (purple)
- ปุ่มสีพื้นฐาน (green, yellow)

### Design สียาก (ระวัง!)
- Gradient ซับซ้อน
- Brand colors หลายเฉด
- สีใกล้เคียงกันมาก (blue-400 vs blue-500)
- Shadow สี (colored shadows)
- Overlay / transparency
- Dark mode with subtle variations

---

## Color Matching Tips

```
1. ถ้าไม่ชัด → ขอ design tokens / color codes
2. ใช้ color picker tool (browser devtools, Figma)
3. เทียบ side-by-side ก่อน commit
4. ระวัง gray shades:
   - gray-400 vs gray-500 vs gray-600
   - ดูต่างกันนิดเดียว แต่ผิดก็ผิด
```

---

## Checklist ก่อนทำ Dashboard

- [ ] แยก components ที่เห็นในรูป
- [ ] ทำ component ทีละตัว
- [ ] เทียบสีให้ตรง (โดยเฉพาะ text colors)
- [ ] ประกอบกันแล้ว check spacing
- [ ] ไม่ rush — ใช้เวลาดูละเอียด

---

## ระดับความยากของ Design

| ระดับ | ลักษณะ | ตัวอย่าง |
|-------|--------|---------|
| ง่าย | Grayscale + 1 accent | Inno Hub Dashboard |
| กลาง | 2-3 accent colors | Marketing pages |
| ยาก | Gradient + brand palette | SaaS dashboards |
| ยากมาก | Dark mode + colored shadows | Modern apps |

---

## สรุป

**Component First**
> แยกก่อน ทำทีละชิ้น แล้วค่อยประกอบ

**Color Awareness**
> Design ง่ายไม่ได้แปลว่าสีง่าย — ต้องดูละเอียดเสมอ

**Don't Rush**
> Dashboard ซับซ้อน ต้องใช้เวลา ไม่ใช่ทำรวดเดียวจบ

---

*Lesson 03 — Image to Code Workshop*
