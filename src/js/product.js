;
$(function () {
  var id = location.search.split('=')[1]
  console.log(id);

  $.ajax({
    type: "get",
    url: "../php/getitem.php",
    data: {
      "id": id,
    },
    dataType: "json",
    success: function (response) {
      console.log(response);
      var pic = JSON.parse(response.pic)
      console.log(pic);

      var h1 = `<h1>${response.title}</h1>`;
      var img = `<img src=".${pic[1].src}" alt="">`;
      var price = `<span myattrid="salePrice">${response.price}</span>`;

      var imgbox = $('.img'),
        bigimgbox = $('.bigimgbox'),
        movebox = $('.movebox');

      $('.main-mid-right>.title').append(h1);
      $('.main-mid-left .img').append(img);
      $('.phone-price').append(price);
      $('.bigimgbox').append(img);
      var bigimg = $('.bigimgbox>img');
      var mainmidleft = $('.main-mid-left');
      console.log(bigimg);
      bigimg.css({
        "width": 570 + "px",
        "height": 570 + "px"
      })

      imgbox.on('mouseover', function () {
        movebox.addClass('show')
        bigimgbox.addClass('show')
      });
      imgbox.on('mouseout', function () {
        movebox.removeClass('show').addClass('hide');
        bigimgbox.removeClass('show').addClass('hide');
      })
      console.log(bigimg);
      movebox.css({
        'width': imgbox.outerWidth() * bigimgbox.outerWidth() / bigimg.outerWidth() + 'px',
        'height': imgbox.outerHeight() * bigimgbox.outerHeight() / bigimg.outerHeight() + 'px'
      });
      imgbox.on('mousemove', function (ev) {
        ev = ev || event;
        var left = ev.pageX - imgbox.offset().left - movebox.offset().left / 4;
        var top = ev.pageY - imgbox.offset().top - movebox.offset().top / 2;
        // console.log(left);
        var ratio = bigimg.outerWidth() / imgbox.outerWidth()

        if (left < 0) {
          left = 0
        } else if (left > imgbox.outerWidth() + imgbox.offset().left - movebox.offset().left) {
          left = imgbox.outerWidth() + imgbox.offset().left - movebox.offset().left;
        }
        if (top < 0) {
          top = 0
        } else if (top > imgbox.outerHeight() - movebox.offset().top) {
          top = imgbox.outerHeight() - movebox.offset().top;
        }

        movebox.css({
          left: left + 'px',
          top: top + 'px'
        })

        bigimg.css({
          position: 'absolute',
          left: -left * ratio + 'px',
          top: -top * ratio + 'px'
        })
      })
      $('.submit').on('click', function () {
        additem(response.id, response.price)
        location.href = '../html/shopcar.html';
      })
    }
  });

  function additem(id, price) {
    var shop = cookie.get('shop'); //获取cookie
    var product = {
      'id': id,
      'price': price
    };
    if (shop) {
      shop = JSON.parse(shop);
      console.log(shop);
      if (shop.some(elm => elm.id == id)) {
        shop.forEach((elm, i) => {
          elm.id == id ? null : null;
        });
      } else {
        shop.push(product);
      }
      cookie.set('shop', JSON.stringify(shop), 3);
    } else {
      shop = [];
      shop.push(product);
      cookie.set('shop', JSON.stringify(shop), 3)
    }
    // var str = JSON.stringify(product);
    // cookie.set('shop', str, 3)
  }
})