/**
 * ----------------------------------------------------------------------------------------
 * Main JS functionality.
 * ----------------------------------------------------------------------------------------
 */

//Fade In/Out page

// $(document).ready(function() {

//     $("html").css("display", "none");
//       $("html").fadeIn(800);

//     $(".fadeout").click(function(event){
//       event.preventDefault();
//       linkLocation = this.href;
//       $("html").fadeOut(900, redirectPage);
//     });

//     function redirectPage() {
//       window.location = linkLocation;
//     }

// });



//Login popup

document.addEventListener("DOMContentLoaded", function() {
    function n(a) {
        var b = a.charAt(0);
        a = a.split(b);
        this.clickSelector = a[1];
        this.classBehavior = a[2].trim().split(" ")[0];
        this.classValue = a[3];
        this.targetSelector = a[5]
    }

    function f(a, b, c, d) {
        this.clickSelector = a;
        this.classBehavior = "s" == b.charAt(b.length - 1) ? b.substring(0, b.length - 1) : b;
        this.classValue = "." == c.charAt(0) ? c.substring(1, c.length) : c;
        this.targetSelector = d;
        this.createEventListener()
    }
    for (var g = document.getElementsByTagName("code"), h = g.length, e, k; h--;) {
        var l =
            g[h],
            m = l.textContent.trim();
        if (0 === m.lastIndexOf("clicking on", 0)) {
            e = l;
            k = m;
            break
        }
    }
    e && (e.parentNode.removeChild(e), f.prototype.createEventListener = function() {
        function a(a) {
            switch (b.targetSelector) {
                case "target":
                case "this":
                case "it":
                case "itself":
                case void 0:
                    a.target.classList[b.classBehavior](b.classValue);
                    break;
                default:
                    for (var c = document.querySelectorAll(b.targetSelector), d = c.length; d--;) c.item(d).classList[b.classBehavior](b.classValue)
            }
            "a" == a.target.nodeName.toLowerCase() && a.preventDefault()
        }
        var b =
            this,
            c = document.querySelectorAll(b.clickSelector),
            d = c.length;
        if (1 > d) throw Error("There's no element matching your \"" + b.clickSelector + '" CSS selector.');
        for (; d--;) c.item(d).addEventListener("click", a)
    }, k.split("clicking on").forEach(function(a) {
        a && (a = new n(a.trim()), new f(a.clickSelector, a.classBehavior, a.classValue, a.targetSelector))
    }))
});


//Main menu

(function() {

  $(function() {
    (function() {
      var menu, updateMenuHeight;
      if (!$('#sub-nav').length) {
        return;
      }
      menu = $('.dropdown-menu');
      updateMenuHeight = function() {
        return menu.css({
          height: $(window).height() - menu.offset().top + $(window).scrollTop()
        });
      };
      $('li.dropdown.dropdown-custom > button').bind('click', function() {
        $(this).parent().addClass("open");
        $("body").addClass("modal-open");
        $(".overlay").show();
        updateMenuHeight();
        return false;
      });


      $('body').on('click', function(e) {
        var _target;
        _target = $(e.target);
        if (!_target.hasClass('dropdown-toggle') && _target.parents('li.dropdown').length === 0) {
          $('li.dropdown.dropdown-custom').removeClass('open');
          $('li.dropdown.dropdown-custom button').removeClass('active');
          $(".overlay").hide(200);
          return $("body").removeClass("modal-open");
        }
      });
      return $(window).on('resize', updateMenuHeight).trigger('resize');
    })();
    return (function() {
      var lessonSelectorsWrapper, levelGradesOptions;
      levelGradesOptions = {
        primary: ["K-2", "3-5"],
        middle: ["6-8"],
        high: ["9-10", "11-12"]
      };
      lessonSelectorsWrapper = $('#lesson-selectors-row');
      return lessonSelectorsWrapper.find('> :nth-child(2) select').bind('change', function() {
        lessonSelectorsWrapper.find('> :nth-child(3) select option').remove();
        return $.each(levelGradesOptions[$(this).val()], function() {
          return lessonSelectorsWrapper.find('> :nth-child(3) select').append($("<option />").text(this));
        });
      }).trigger('change');
    })();
  });

}).call(this);

document.querySelector( "#dropdownMenu2" )
.addEventListener( "click", function() {
  this.classList.toggle( "active" );
});


$('.dropdown-custom').click(function(e) {
    e.stopPropagation();
});

//Main menu - Switcher

  (function(){
    var menu = $('.dropdown-menu');
    var switchLinks = menu.find('#lessons-sort-switcher-row a');
    switchLinks.bind('click', function(e){
      switchLinks.removeClass('active')
      var clickedLink = $(this);
      clickedLink.addClass('active');
      menu.find('> ul, > ol').hide()

      if(clickedLink.hasClass('skills'))
        menu.find('#skills-list').show()
      if(clickedLink.hasClass('lessons'))
        menu.find('#lessons-list').show()

      return false;
    })
    switchLinks.first().click()
  }).call(this)


  //Controls

  $(function() {
    var HubNav;
    HubNav = {
      sectionLinks: $('#section-selectors a'),
      init: function() {
        var _this;
        _this = this;
        return _this.sectionLinks.on('click', function() {
          var newSelectedTab, _link;
          _link = $(this);
          if (_link.hasClass('active')) {
            return false;
          }
          _this.sectionLinks.removeClass('active');
          _link.addClass('active');
          newSelectedTab = $('#hub-sections-row').find(_link.attr('href'));
          if (newSelectedTab.length) {
            $('#hub-sections-row > .active').fadeOut(450, function() {
              $('#hub-sections-row > div').removeClass('active');
              newSelectedTab.show().addClass('fadeIn');
              return newSelectedTab.addClass('active');
            });
          }
          return false;
        });
      },
      moveNext: function() {
        var active;
        active = $('#sub-nav .lesson-descr .active');
        if (active.next().length) {
          return active.removeClass('active').next().addClass('active');
        }
      },
      movePrev: function() {
        var active;
        active = $('#sub-nav .lesson-descr .active');
        if (active.prev().length) {
          return active.removeClass('active').prev().addClass('active');
        }
      }
    };
    HubNav.init();
    $('#hub-sections-next-prev-controls a.left').bind('click', HubNav.movePrev);
    return $('#hub-sections-next-prev-controls a.right').bind('click', HubNav.moveNext);
  });

