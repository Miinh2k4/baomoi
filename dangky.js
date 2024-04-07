window.onload = function() {
    document.querySelector('.submitBtn').onclick = function(event) {
      // Ngăn chặn hành động mặc định của nút submit
      event.preventDefault();

      // Lấy giá trị của các trường input
      var email = document.querySelector('.emailInput').value;
      var username = document.querySelector('.usernameInput').value;
      var password = document.querySelector('.passwordInput').value;
      var confirmPassword = document.querySelector('.confirmPasswordInput').value;

      // Kiểm tra định dạng của email
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Vui lòng nhập địa chỉ email hợp lệ!');
        return;
      }

      // Kiểm tra chiều dài của tên đăng nhập
      if (username.length < 6) {
        alert('Tên đăng nhập phải chứa ít nhất 6 ký tự!');
        return;
      }

      // Kiểm tra chiều dài của mật khẩu
      if (password.length < 8) {
        alert('Mật khẩu phải chứa ít nhất 8 ký tự!');
        return;
      }

      // Kiểm tra xác nhận mật khẩu
      if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
      }

      // Nếu tất cả các điều kiện đều thỏa mãn, có thể thực hiện hành động đăng ký ở đây
      alert('Đăng ký thành công!');
      // Thêm code để thực hiện đăng ký (ví dụ: gửi dữ liệu đến máy chủ, chuyển hướng đến trang khác, vv...)
    };
  };