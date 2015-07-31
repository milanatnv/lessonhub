(function() {

  function hasParentClass( e, classname ) {
    if(e === document) return false;
    if( classie.has( e, classname ) ) {
      return true;
    }
    return e.parentNode && hasParentClass( e.parentNode, classname );
  }

  // http://coveroverflow.com/a/11381730/989439
  function mobilecheck() {
    var check = false;
    (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }

  function enterEditMode(event){
    var $head = $( '#menubar' );
    $head.attr('class', 'l-header hidden-xs ha-header ha-header-rotate');

    $(".skills-edit-menu").fadeIn(400, function(){
      $(".skill p").attr('contenteditable', true).addClass('edit');
    });

    var addPreAssessmentButton = $("#section-selectors > li:hidden");
    addPreAssessmentButton.fadeIn(400);
  };
  $('.edit-toggle').click(enterEditMode);

  function exitEditMode(event){
    var $head = $( '#menubar' );
    $head.attr('class', 'l-header hidden-xs ha-header ha-header-rotateBack');
    $(".ha-header-front .header-message").show();

    setTimeout(function(){
      $(".header-message").hide();
    }, 1000);

    $(".skills-edit-menu").fadeOut(400, function(){
      $(".skill p").attr('contenteditable', false).removeClass('edit');
    });

    var addPreAssessmentButton = $("#section-selectors > li:nth-child(2)");
    addPreAssessmentButton.fadeOut(400);
  };
  $('.close-toggle').click(exitEditMode);

  function showAddLessonMenu(event){
    var skill = $(this).data("skill");
    var outerHeight = $(".skill." + skill).outerHeight();
    var panel = $('.al-panel');
    var panel_wrapper = $('.al-panel-wrapper');
    var bottom = $('.al-panel-bottom');
    var top   = $('.al-panel-top');
    var skill_wrapper = $("#hub-sections-row .skill." + skill);
    var scrollbar = $('.scrollbar-inner2');
    var overlay = $(".al-panel-overlay");

    panel.css("border-left", "1px solid #dbdbdb");
    panel.css("border-right", "1px solid #dbdbdb");
    if (skill == "pre-requisite") panel.css("border-left", "none");
    else if (skill == "growth") panel.css("border-right", "none");

    panel_wrapper.appendTo(skill_wrapper.parent());
    panel_wrapper.css("height", outerHeight);
    bottom.css("height", outerHeight - 197);

    skill_wrapper.fadeOut(200, function() {
      panel_wrapper.show();
      overlay.fadeIn(300);
      panel.fadeIn(300, function() {
        $('.scrollbar-inner2').perfectScrollbar();
      });
    });
  };
  $('.sem-btn.al-btn').click(showAddLessonMenu);

  function showAddPerformanceTaskMenu(event){
    var skill = $(this).data("skill");
    var panel_height = $(".skill." + skill).outerHeight();
    var panel_width = $(".skill." + skill).outerWidth();

    $(".apt-panel").css("border-left", "1px solid #dbdbdb");
    $(".apt-panel").css("border-right", "1px solid #dbdbdb");
    if (skill == "pre-requisite") $(".apt-panel").css("border-left", "none");
    else if (skill == "growth") $(".apt-panel").css("border-right", "none");

    $(".apt-panel-wrapper").appendTo($("#hub-sections-row .skill." + skill).parent());
    $(".apt-panel-wrapper").css("height", panel_height);
    $(".apt-panel-bottom").css("height", panel_height - 197);

    $("#hub-sections-row .skill." + skill).fadeOut(200, function() {
      $(".apt-panel-wrapper").show();
      $(".apt-panel-overlay").fadeIn(300);
      $(".apt-panel").fadeIn(300, function() {
        $('.scrollbar-inner3').perfectScrollbar();
      });
    });
  };
  $('.sem-btn.apt-btn').click(showAddPerformanceTaskMenu);

  function closeAddLessonMenu(event){
    $('.al-panel').fadeOut(200);
    $('.al-panel-overlay').fadeOut(200, function() {
      $(".al-panel-wrapper").hide();
      $('#hub-sections-row .skills-section .skill.' + skill).fadeIn(300, function() {
      });
    });
  };
  $('.al-close').click(closeAddLessonMenu);

  function closeAddPerformanceTaskMenu(event){
    $('.apt-panel').fadeOut(200);
    $('.apt-panel-overlay').fadeOut(200, function() {
      $(".apt-panel-wrapper").hide();
      $('#hub-sections-row .skills-section .skill.' + skill).fadeIn(300, function() {
      });
    });
  };
  $('.apt-close').click(closeAddPerformanceTaskMenu);

  var sidebar = $('.sidebar-menu');
  var sidebarTabs = sidebar.find('#lessons-sort-switcher-row a');

  function switchSidebarTab(e){
    sidebarTabs.removeClass('active');
    var clickedLink = $(this);
    clickedLink.addClass('active');
    sidebar.find('ul, ol').hide();

    if(clickedLink.hasClass('skills')){
      sidebar.find('#skills-list').show();
      $('#skills-list').perfectScrollbar();
    }

    if(clickedLink.hasClass('lessons')){
      sidebar.find('#lessons-list').show();
      $('#lessons-list').perfectScrollbar();
    }

    return false;
  };

  sidebarTabs.bind('click', switchSidebarTab);
  sidebarTabs.first().click();

  function init() {

    var container = document.getElementById( 'st-container' ),
    buttons = Array.prototype.slice.call( document.querySelectorAll( '#st-trigger-effects > button' ) ),
    // event type (if mobile use touch events)
    eventtype = mobilecheck() ? 'touchstart' : 'click',
    resetMenu = function() {
      classie.remove( container, 'st-menu-open' );
      $(".hamburger").fadeIn(600);
    },
    bodyClickFn = function(evt) {
      
      if (evt.target.id == "tooltip" || $(evt.target).parents('div#tooltip').length) return;
      if( !hasParentClass( evt.target, 'st-menu' ) ) {
        resetMenu();
        document.removeEventListener( "mouseover", bodyClickFn );
      }
    };

    buttons.forEach( function( el, i ) {
      var effect = el.getAttribute( 'data-effect' );

      el.addEventListener( eventtype, function( ev ) {
        ev.stopPropagation();
        ev.preventDefault();
        classie.add( container, effect );
        $(".hamburger").fadeOut(600);
        classie.add( container, 'st-menu-open' );
        setTimeout( function() {
          document.addEventListener( "mouseover", bodyClickFn );          
        }, 600 );
      });
    } );

  }

  init();

  $(document).ready(function() {
    $("html").css("display", "none");
    $("html").fadeIn(800);
    $('.header-message').hide();
  });
  
  
  /*  TOOLTIP  */
  $( function()
  {
    var targets = $( '[rel~=tooltip]' ),
      target  = false,
      tooltip = false,
      title  = false,
      delay = true;


    targets.bind( 'mouseenter', function()
    { 
      target  = $( this );
      tip    = target.attr( 'title' );
      
      title = target.text();
      content = '<div class="lesson-tag-title">' + title + '</div><div class="lesson-tag-text">' + tip + '</div>';
      tooltip  = $( '<div id="tooltip"></div>' );

      if( !tip || tip == '' )
        return false;

      target.removeAttr( 'title' );
      tooltip.css( 'opacity', 0 )
           .html( content )
           .appendTo( 'body' );
  
      var init_tooltip = function()
      {
        if( $( window ).width() < tooltip.outerWidth() * 1.5 )
          tooltip.css( 'max-width', $( window ).width() / 2 );
        else
          tooltip.css( 'max-width', 440 );

        var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
          pos_top   = target.offset().top - tooltip.outerHeight() - 20;

        if( pos_left < 0 )
        {
          pos_left = target.offset().left + target.outerWidth() / 2 - 20;
          tooltip.addClass( 'left' );
        }
        else
          tooltip.removeClass( 'left' );

        if( pos_left + tooltip.outerWidth() > $( window ).width() )
        {
          pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
          tooltip.addClass( 'right' );
        }
        else
          tooltip.removeClass( 'right' );

        if( pos_top < 0 )
        {
          var pos_top   = target.offset().top + target.outerHeight();
          tooltip.addClass( 'top' );
        }
        else
          tooltip.removeClass( 'top' );

        tooltip.css( { left: pos_left, top: pos_top } ).delay(400)
             .stop(true, false).animate( { top: '+=0', opacity: 1 }, 200 );
      };

      init_tooltip();
      $( window ).resize( init_tooltip );
      
      
      var remove_tooltip = function()
      {
        if (tooltip == false) {
          return;
        }
        
        tooltip.animate( { top: '-=0', opacity: 0 }, 100, function()
        {
          $( this ).remove();
        });
        tooltip = false;       
        target.attr( 'title', tip );
      };
      
      tooltip.bind( 'click', remove_tooltip );  
      targets.bind( 'mouseleave', remove_tooltip );

    });
      
  });


})();
/*
// Set pixelRatio to 1 if the browser doesn't offer it up.
var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
 
// Rather than waiting for document ready, where the images
// have already loaded, we'll jump in as soon as possible.
$(window).on("load", function() {
    if (pixelRatio > 1) {
        $('img.retina').each(function() {   
            // Very naive replacement that assumes no dots in file names.
            $(this).attr('src', $(this).attr('src').replace("./img/","./img/@2x/"));
            $(this).attr('src', $(this).attr('src').replace(".png","@2x.png"));
            $(this).attr('src', $(this).attr('src').replace(".jpg","@2x.jpg"));              
        });
    }
});
*/