;
$(function () {
  var shop = cookie.get('shop')
  if (shop) {
    shop = JSON.parse(shop);
    console.log(shop);
    // var id = shop.id;
    var idList = shop.map(elm => elm.id).join();
    console.log(idList);
    $.ajax({
      type: "get",
      url: "../php/shop.php",
      data: {
        'id': idList
      },
      dataType: "json",
      success: function (response) {
        console.log(response);
        var template = '';
        response.forEach((elm, i) => {
          var pic = JSON.parse(elm.pic)

          template += `
              <div class="shopcart-list" ">
                <i class="icon-checked"></i>
                <div class="shopcart-list-right">
                  <div class="shopcart-goods">
                    <div class="shopcart-list-leftimg">
                      <a href="#">
                        <img src=".${pic[0].src}" alt="">
                      </a><i class="icon"></i>
                    </div>
                    <a href="#">
                      <div class="title">${elm.title}</div>
                      <p>鎏砂金&nbsp;10.5英寸&nbsp;4GB RAM<br> 64GB ROM&nbsp;</p>
                    </a>
                  </div>
                  <div class="shopcart-unit-price">
                    <p style="color:#363d4c;font-weight: normal;">¥${elm.price}</p>
                  </div>
                  <div class="shopcart-jifen"><p>${elm.price}</p></div>
                  <div class="shopcart-qty">
                    <div class="calculate-num">
                      <a class="qty-btn-left events-minus off">
                        <i class="icon icon-left-minus"></i>
                      </a>
                      <input class="qty-input events-input" type="text" origindata="1" value="1">
                      <a class="qty-btn-right events-plus">
                        <i class="icon icon-left-plus"></i>
                      </a>
                    </div><a class="shopcart-remove" data-id="${elm.id}">删除</a>
                  </div>
                  <div class="shopcart-sum shopcart-sum-discount">
                    <p style="color:#363d4c;font-weight: normal;">¥${elm.price}</p>
                  </div>
                </div>
              </div>`
        })
        $('.shopcart-list-content').append(template)

        // 刪除单行4

        $('.shopcart-list').find('.shopcart-remove').on('click', function () {
          $('.shopcart-list').has(this).remove();
          var shop = cookie.get('shop');
          shop = JSON.parse(shop);
          var id = $(this).data('id');
          console.log(id);
          shop.forEach((elm, i) => {
            if (elm.id == id) {
              return shop.splice(i, 1)
            }
          })
          cookie.set('shop', JSON.stringify(shop), 3);
          add();
        });


        //数量增加
        $('.events-plus').on('click', $('.events-input'), function () {
          var value = +($(this).siblings('.events-input').val());
          value += 1;
          $(this).siblings('.events-input').val(value);
          // console.log(value);
          var danjia = $('.shopcart-qty').has(this).siblings('.shopcart-jifen').children('p').text();
          var zongjia = +danjia * value;
          var addzongjia = $('.shopcart-qty').has(this).siblings('.shopcart-sum').children('p')
            .text();
          addzongjia = zongjia;
          $('.shopcart-qty').has(this).siblings('.shopcart-sum').children('p')
            .text('¥' + (addzongjia).toFixed(2));

          //计算价格
          // var add = 0;
          // var arr = $('.shopcart-sum p').text().split('¥');
          // arr.forEach((elm, i) => {
          //   add += +elm;
          //   console.log(add);
          //   if (i == i) {
          //     add = add;
          //   }
          // });
          // console.log(add);

          // $('.shopcost-sum-num').html('').append('¥' + add);
          add();
        });

        //数量减
        $('.events-minus').on('click', $('.events-input'), function () {
          var value = +($(this).siblings('.events-input').val());
          if (value == 1) {
            $(this).siblings('.events-input').val(1)
          } else {
            value -= 1;
          }
          $(this).siblings('.events-input').val(value);
          // console.log(value);
          var danjia = $('.shopcart-qty').has(this).siblings('.shopcart-jifen').children('p').text();
          var zongjia = +danjia * value;
          var addzongjia = $('.shopcart-qty').has(this).siblings('.shopcart-sum').children('p')
            .text();
          addzongjia = zongjia;
          $('.shopcart-qty').has(this).siblings('.shopcart-sum').children('p')
            .text('¥' + (addzongjia).toFixed(2));

          //计算价格
          // var add = 0;
          // var arr = $('.shopcart-sum p').text().split('¥');
          // arr.forEach((elm, i) => {
          //   add += +elm;
          //   console.log(add);
          //   if (i == i) {
          //     add = add;
          //   }
          // });
          // console.log(add);

          // $('.shopcost-sum-num').html('').append('¥' + add);  
          add();
        });

        //封装的总价变动函数add()
        function add() {
          var add = 0;
          var arr = $('.shopcart-sum p').text().split('¥');
          arr.forEach((elm, i) => {
            add += +elm;
            console.log(arr);
            if (i == i) {
              add = add;
            }
          });
          console.log(add);

          $('.shopcost-sum-num').html('').append('¥' + add.toFixed(2));
        }


        //页面加载时显示的价格
        var addprice = 0;
        response.forEach((elm, i) => {
          var price = +elm.price;
          addprice += price;
          if (i = i) {
            addprice = addprice;
            return addprice;
          }
        })
        $('.shopcost-sum-num').append(addprice.toFixed(2));



        // var res = response[0];
        // var pic = JSON.parse(res.pic);
        // console.log(res);
        // $('.shopcart-goods .title').append(res.title);
        // $('.shopcart-list-leftimg img').attr({
        //   src: `.${pic[0].src}`
        // });
        // $('.shopcart-unit-price p').append(res.price);
        // $('.shopcart-jifen').append(res.price);
        // $('.shopcart-sum-discount p').append(res.price)
        // $('.shopcost-sum-num').append(res.price)


      }
    });
  }

});