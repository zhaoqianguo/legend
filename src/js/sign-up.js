$(function () {
  //用户名验证
  $('#name').on('keyup', function () {
    $.ajax({
      type: "GET",
      url: "../php/sign-up.php",
      data: {
        'name': $(this).val(),
        'password': $('#password').val(),
        'card': $('#card').val()
      },
      dataType: "json",
      success: function (res) {
        var data = res;
        $('.error').html(data.msg)
        if (data.has == "true") {
          $('.error').css('color', 'red');
        } else {
          $('.error').css('color', 'green');
        }
      },
    });
  });
  //身份证验证
  $('#card').on('keyup', function () {
    var regExp = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (regExp.test($(this).val())) {
      $('.regexp').html('身份证有效').css('color', 'green');
    } else {
      $('.regexp').html('身份证无效，请输入正确的身份证号').css('color', 'red');
    }
  });
  //提交数据
  $('.submit').on('click', function () {
    $.ajax({
      type: "GET",
      url: "../php/sign-up-2.php",
      data: {
        'name': $('#name').val(),
        'password': $('#password').val(),
        'card': $('#card').val(),
      },
      dataType: "json",
      success: function (response) {
        if (response === 1) {
          alert('注册成功');
          location.href = '../html/login.html';
          // console.log(response);
        }
      }
    });
  })
})