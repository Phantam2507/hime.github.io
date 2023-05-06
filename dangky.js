const form = document.getElementById('registerForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill out all fields');
  } else if (password !== confirmPassword) {
    alert('Passwords do not match');
  } else {
    // Gửi yêu cầu đăng ký đến server ở đây
  }
});