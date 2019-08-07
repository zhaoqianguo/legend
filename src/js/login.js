;
$(function () {
  $('.submit').on('click', function () {
    console.log(this);
    $.ajax({
      type: "GET",
      url: "../php/login.php",
      data: {
        'name': $('#name').val(),
        'password': $('#password').val()
      },
      dataType: "json",
      success: function (response) {
        if (response == 1) {
          location.href = '../html/samsung.html';
        } else {
          alert('登陆失败，请输入正确的用户名');
        }
      }
    });

  })
});