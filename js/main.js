$(document).ready(function () {
  $("#form").bootstrapValidator({
    container: "popover",
    message: "Pole wymagane!",
    //live: 'submitted',
    feedbackIcons: {
      valid: "glyphicon glyphicon-ok",
      invalid: "glyphicon glyphicon-remove",
      validating: "glyphicon glyphicon-refresh"
    },
    err: {
      container: "tooltip"
    },
    fields: {
      firstname: {
        message: "Pole wymagane!",
        validators: {
          notEmpty: {
            message: "Pole wymagane!"
          }
        }
      },
      lastname: {
        message: "Pole wymagane!",
        validators: {
          notEmpty: {
            message: "Pole wymagane!"
          }
        }
      },
      zgoda: {
        message: "Pole wymagane!",
        validators: {
          notEmpty: {
            message: "Pole wymagane!"
          }
        }
      },
      zgoda2: {
        message: "Pole wymagane!",
        validators: {
          notEmpty: {
            message: "Pole wymagane!"
          }
        }
      },
      zgoda3: {
        message: "Pole wymagane!",
        validators: {
          notEmpty: {
            message: "Pole wymagane!"
          }
        }
      },
      zgoda4: {
        message: "Pole wymagane!",
        validators: {
          notEmpty: {
            message: "Pole wymagane!"
          }
        }
      },
      telefon: {
        message: "Pole wymagane!",
        validators: {
          notEmpty: {
            message: "Pole wymagane!"
          },
          digits: {
            message: "Nieprawidłowy nr telefonu"
          },
          stringLength: {
            min: 9,
            max: 9,
            message: "Wprowadź 9 cyfrowy nr telefonu"
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: "Pole wymagane!"
          },
          emailAddress: {
            message: "Nieprawidłowy adres e-mail"
          }
        }
      }
    }
  });
});

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

$(document).ready(function () {
  if (window.matchMedia("(max-width: 767px)").matches) {
    $(".navbar-collapse a").click(function (e) {
      $(".navbar-collapse").collapse("toggle");
    });
  }
});
