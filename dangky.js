document.addEventListener("DOMContentLoaded", function () {
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPassword");
    var passwordHelp = document.getElementById("passwordHelp");
    var registerBtn = document.getElementById("registerBtn");
    var form = document.getElementById("registrationForm");

    passwordInput.addEventListener("input", function () {
        if (passwordInput.value.length < 8) {
            passwordHelp.style.display = "block";
            registerBtn.disabled = true;
        } else {
            passwordHelp.style.display = "none";
            registerBtn.disabled = false;
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert("Xác nhận mật khẩu phải giống với mật khẩu");
            return;
        }
        alert("ĐĂNG KÝ THÀNH CÔNG!");
        window.location.href = "Trangchu.html";
    });
});
