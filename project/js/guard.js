// guard.js
// ==== 必要に応じて変更 ====
const KEY = "portfolio2025_auth_ok";
const BASE = "/portfolio2025/project/";
// ===========================
if (localStorage.getItem(KEY) !== "1") {
  // 未認証ならトップへ
  location.replace(BASE);
}
