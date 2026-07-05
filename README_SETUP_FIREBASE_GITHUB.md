# Baan-Map V2 Firebase — เว็บแอปสำหรับฝ่ายปกครอง

## ไฟล์สำคัญ
- `index.html` — เว็บแอปหลัก
- `firebase-config.js` — ใส่ค่า Firebase config ที่นี่
- `firestore.rules` — กฎความปลอดภัย Firestore
- `manifest.webmanifest` + `sw.js` — สำหรับ PWA / ติดตั้งเป็นแอป
- `assets/logo-baan-map.svg` — โลโก้ Baan-Map

## วิธีตั้งค่า Firebase แบบเร็ว
1. เข้า Firebase Console แล้วสร้าง Project ใหม่
2. Project settings > General > Your apps > Web app `</>` แล้ว Register app
3. Copy ค่า `firebaseConfig` มาใส่ใน `firebase-config.js`
4. Authentication > Sign-in method > เปิด Email/Password
5. Firestore Database > Create database
6. Firestore > Rules > วางโค้ดจาก `firestore.rules` แล้ว Publish
7. Authentication > Users > Add user สร้างบัญชีเจ้าหน้าที่
8. ถ้าใช้ GitHub Pages ให้เพิ่ม Authorized domain เป็น `ชื่อผู้ใช้.github.io` ใน Authentication > Settings > Authorized domains

## วิธีอัป GitHub Pages
1. สร้าง repository เช่น `baan-map`
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้น repo
3. ไปที่ Settings > Pages
4. Source: Deploy from a branch
5. Branch: `main` / folder: `/root`
6. Save แล้วรอสักครู่
7. เว็บจะอยู่ที่ `https://ชื่อผู้ใช้.github.io/baan-map/`

## หมายเหตุแผนที่
- ศูนย์กลางตั้งเป็นพื้นที่บางรักน้อยแล้ว: lat `13.8685313`, lng `100.4562128`
- แนวเขต 6 หมู่เป็นค่าเริ่มต้นโดยประมาณ เพื่อให้เริ่มใช้งานได้ก่อน
- ถ้ามี GeoJSON ทางการ สามารถเปลี่ยนข้อมูล `zones` ใน `index.html` ได้
