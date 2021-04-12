$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".nav-bar").addClass("sticky");
    } else {
      $(".nav-bar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".to-top").addClass("active");
    } else {
      $(".to-top").removeClass("active");
    }
  });
});

//TYPING EFFECT
var typed3 = new Typed(".typed-text", {
  strings: ["Student", "Freelancer", "Photographer"],
  typeSpeed: 80,
  backSpeed: 60,
  smartBackspace: true, // this is a default
  loop: true,
});

var typed4 = new Typed(".typed-text-2", {
  strings: ["Student", "Freelancer", "Photographer"],
  typeSpeed: 80,
  backSpeed: 60,
  smartBackspace: true, // this is a default
  loop: true,
});
