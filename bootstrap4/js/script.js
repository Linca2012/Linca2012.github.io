$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop:true,/*чтоб кртинки перемещались по кругу*/
      /*center: true,*/

      responsive: {/*чтоб карусель уменьшалась под разный экран, колво картинок*/
          0: {
          items:1,
      },
      750: {
          items:2,
      },
          980: {
              items:3,
          }
      }
  })
});


