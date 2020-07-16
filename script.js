var hideElement = (elm) => {
  $(elm).css("display", "none");
};

$(document).ready(function () {
  $(".icon-lock").mouseover(function () {
    $(this).next().css("display", "block");
    $(this).attr("src", "./assets/info-hover.svg");
  });
  $(".icon-lock").mouseout(function () {
    $(this).next().css("display", "none");
    $(this).attr("src", "./assets/info.svg");
  });
  $(".icon-lock").on("click", function () {
    if ($(this).next().css("display", "block")) {
      $(this).next().css("display", "none");
      $(this).attr("src", "./assets/info.svg");
    } else {
      $(this).next().css("display", "block");
      $(this).attr("src", "./assets/info-hover.svg");
      setTimeout(function () {
        $(this).next().css("display", "none");
        $(this).attr("src", "./assets/info.svg");
      }, 5000);
    }
  });
  if ($(window).scrollTop() > 100) {
    $(".shadow-box").addClass("active");
  } else if ($(window).scrollTop() > 2000) {
    $(".shadow-box").removeClass("active");
  } else {
    $(".shadow-box").removeClass("active");
  }
});
