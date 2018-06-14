$(document).ready(function(){
    $(".hover1").mouseover(function(){
    $(".sub_head1").css("color", "#0EC0C0");
      $(".buy1, .head").css("background-color", "#0EC0C0");
   });

   $(".product_feature").mouseout(function(){
      $(".sub_head1").css("color", "#555");
      $(".buy1, .head").css("background-color", "#323a45");
  });

   $(".hover2").mouseover(function(){
    $(".sub_head2").css("color", "#0EC0C0");
      $(".buy2, .head2").css("background-color", "#0EC0C0");
   });

   $(".product_feature").mouseout(function(){
      $(".sub_head2").css("color", "#555");
      $(".buy2, .head2").css("background-color", "#323a45");
  });


   $(".hover3").mouseover(function(){
    $(".sub_head3").css("color", "#0EC0C0");
      $(".buy3, .head3").css("background-color", "#0EC0C0");
   });

   $(".product_feature").mouseout(function(){
      $(".sub_head3").css("color", "#555");
      $(".buy3, .head3").css("background-color", "#323a45");
  });


});


$(document).ready(function(){
    function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('fal fa-plus fal fa-minus');
        }
        $('.panel-group').on('hidden.bs.collapse', toggleIcon);
        $('.panel-group').on('shown.bs.collapse', toggleIcon);


        $("li").click(function () {
            alert("hello");
        $(this).toggleClass("down");
    })



    });