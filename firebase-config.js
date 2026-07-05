/*
  Baan-Map Firebase Config
  1) ไป Firebase Console > Project settings > General > Your apps > Web app
  2) คัดลอก firebaseConfig มาแทนค่าด้านล่าง
  3) ถ้ายังไม่กรอก ระบบจะทำงานแบบ Offline/Local ก่อน
*/
window.BAAN_MAP_FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// path เก็บข้อมูลใน Firestore
window.BAAN_MAP_COLLECTION_PATH = "municipalities/bangraknoi/houses";
