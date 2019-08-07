$(function () {
  $.ajax({
    type: "get",
    url: "../php/getall.php",
    data: "data",
    dataType: "json",
    success: function (response) {
      var template = '';
      var template2 = '';
      response.forEach((elm, i) => {
        var pic = JSON.parse(elm.pic);
        console.log(pic);
        if (i < 4) {
          template += `
        <li class="img-list">
          <div class="main">
            <a href="./product.html?id=${elm.id}">
              <img src=".${pic[0].src}" alt="">
            </a>
            <h3>${elm.title}</h3>
            <p>好礼三选一 享12期免息</p>
            <b>¥${elm.price}</b>
            <span class="glyphicon glyphicon-bookmark"><i>热销</i></span>
            </a>
          </div>
        </li>`;
        }
        if (i >= 4) {
          template2 += `
            <li>
              <div class="peijian-1">
                <div class="main">
                  <a href="../html/product.html?id=${elm.id}" style="color: #333333;">
                    <img src=".${pic[0].src}" alt="">
                    <h3>${elm.title}</h3>
                    <p>¥${elm.price}</p>
                  </a>
                </div>
              </div>
            </li>
           `
        }
      });
      $('.content-4 .next ul').append(template);
      $('.content-2 .next .foryou').append(template2);
    }
  });
})