# Iterate Prompt

ใช้สำหรับแก้ไขโค้ดให้ตรงกับต้นฉบับมากขึ้น

---

## วิธีใช้

1. Screenshot ผลลัพธ์ที่ render แล้ว
2. ส่งทั้งรูปต้นฉบับ + รูปผลลัพธ์
3. ใช้ prompt ด้านล่าง

---

## Prompt (Thai)

```
รูปแรก = ต้นฉบับที่ต้องการ
รูปสอง = ผลลัพธ์ปัจจุบัน

แก้ไขโค้ดให้:
- สีตรงกับต้นฉบับ
- spacing (padding, margin) ถูกต้อง
- font size และ weight ตรง
- ไม่ขาด element ใดๆ
- layout เหมือนต้นฉบับ

บอกด้วยว่าแก้ไขอะไรบ้าง
```

---

## Prompt (English)

```
Image 1 = Original design (target)
Image 2 = Current result

Fix the code to match the original:
- Correct colors
- Correct spacing (padding, margin)
- Correct font size and weight
- No missing elements
- Layout matches original

List what you changed.
```

---

## Prompt with Specific Feedback

```
รูปแรก = ต้นฉบับ
รูปสอง = ผลลัพธ์

ปัญหาที่เห็น:
- [ระบุปัญหา เช่น "ปุ่มควรเป็นสีน้ำเงิน ไม่ใช่เขียว"]
- [ระบุปัญหา เช่น "spacing ระหว่าง cards แคบเกินไป"]

แก้ไขให้หน่อย
```

---

## Tips

1. **ยิ่งเฉพาะเจาะจงยิ่งดี** — บอกว่าอะไรผิดแทนที่จะบอกว่า "แก้ให้เหมือน"
2. **ทีละจุด** — ถ้ามีหลายจุดผิด อาจแก้ทีละ 2-3 จุด
3. **2-3 รอบพอ** — ถ้าเกิน 3 รอบแล้วยังไม่ได้ อาจต้อง manual fix
