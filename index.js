// Đảm bảo các biến này chỉ định nghĩa 1 lần
const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

document.addEventListener("DOMContentLoaded", function () {
  // Sử dụng đúng selector cho từng nút đăng nhập và đăng ký
  const loginFormButton = document.querySelector(".btn-mobile.login"); // Nút chuyển đến trang đăng nhập từ form đăng ký
  const registerFormButton = document.querySelector(".btn-mobile.register"); // Nút chuyển đến trang đăng ký từ form đăng nhập

  // Form container
  const loginContainer = document.querySelector(".login-container");
  const registerContainer = document.querySelector(".register-container");

  // Khi nhấn nút đăng ký trong form đăng nhập
  loginFormButton.addEventListener("click", function (e) {
    e.preventDefault(); // Ngừng hành động mặc định của nút
    loginContainer.style.transform = "translateY(100%)"; // Ẩn form đăng nhập
    registerContainer.style.transform = "translateY(0)"; // Hiển thị form đăng ký
  });

  // Khi nhấn nút đăng nhập trong form đăng ký
  registerFormButton.addEventListener("click", function (e) {
    e.preventDefault(); // Ngừng hành động mặc định của nút
    registerContainer.style.transform = "translateY(100%)"; // Ẩn form đăng ký
    loginContainer.style.transform = "translateY(0)"; // Hiển thị form đăng nhập
  });
});
