# XO Game
สร้างไฟล์ .env และแก้ไข password DB

ไฟล์ .env extends .env.example

# use command

composer require laravel/ui


# ข้อแนะนำ
- ลงฐานข้อมูลจาก Folder sql เท่านั้น เพราะตารางใน Migration Laravel ไม่ตรงกับ sql
	
	
# ความสามารถของโปรแกรม
- สามารถกำหนดขนาดกระดานเป็นขนาดใดๆ ก็ได้
- เช็คผลลัพธ์ Win และ Tie
- ระบบฐานข้อมูลเก็บประวัติการเล่น
- หน้า list ประวัติการเล่นทั้งหมด
- มีระบบเล่น Replay จากประวัติในฐานข้อมูล
