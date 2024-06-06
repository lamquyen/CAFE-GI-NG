document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Hiển thị thông báo đăng nhập thành công
    alert('Đăng nhập thành công');

    // Chuyển hướng về trang chính
    window.location.href = 'Trangchu.html';
});
