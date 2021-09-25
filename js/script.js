// formの入力判定
$("#js_form input, #js_form textarea").on("change", function () {
  if (
    $('#js_form input[type="text"]').val() !== "" &&
    $('#js_form input[type="email"]').val() !== "" &&
    $("#js_form textarea").val() !== "" &&
    $('#js_form input[type="checkbox"]').prop("checked") === true
  ) {
    $("#js_submit").prop("disabled", false);
  } else {
    $("#js_submit").prop("disabled", true);
  }
});

// modal開く
$("#js_modalshow").on("click", function (e) {
  e.preventDefault();
  $("#js_modal, #js_modal_bg").show();
  return false;
});

// modal閉じる
$("#js_modalhide").on("click", function (e) {
  e.preventDefault();
  $("#js_modal, #js_modal_bg").hide();
  return false;
});

// pagetopの表示非表示
$(window).on("scroll", function () {
  if (748 < $(this).scrollTop()) {
    $("#js_pagetop").show();
  } else {
    $("#js_pagetop").hide();
  }
});

// スムーススクロール
jQuery('a[href^="#"]').click(function () {
  let header = jQuery(".header").innerHeight();
  let speed = 300;
  let id = jQuery(this).attr("href");
  let position = 0;
  if ("#" != id) {
    position = jQuery(id).offset().top - header;
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed
  );
  return false;
});
