const form = document.getElementById('loginForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === '' || password === '') {
    alert('Please enter both username and password');
  } else {
    // Gửi yêu cầu đăng nhập đến server ở đây
  }
});