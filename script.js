document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll("[data-subscribe]");

  buttons.forEach(function (button) {

    button.addEventListener("click", function () {

      if (typeof window.fbq === "function") {
        window.fbq("track", "Subscribe");
      }

    });

  });

});
