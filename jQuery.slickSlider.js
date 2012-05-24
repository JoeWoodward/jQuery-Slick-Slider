$.fn.initSlickSlider = function(){
  // $(this) should be a group of li's
  var menu = $(this);

  // fade content-area away and new one in
  $(menu).live('click', function(event) {

    var transitionSpeed = 800;

    // get the parent div incase there are multiple tabbed sliders on one page
    var parent = $(this).closest('div');

    // get the ID of the current slide
    var currentId = parseInt($(this).siblings('.active').data('index'));

    // get the ID of the div that will be positioned in view
    var newId = parseInt($(this).data('index'));

    // get the div currently in view
    var currentSlide = $(parent).find('#' + currentId);

    // get the #slides div
    var slides = $(parent).find('#slides');

    //  get the current slide
    var newSlide = $(slides).find('#' + newId);

    $(slides).children().stop().css('opacity', 1);

    if(true === true) {
      if(currentId > newId) {
        var range = currentId - newId;
        var time = transitionSpeed / range;
        for(var i = currentId; i > newId; i--) {
          $('#' + i).delay(time * (range - (i - newId)) + 100).animate({opacity:0}, time * 0.33, 'linear');
        }
      } else {
        var range = newId - currentId;
        var time = transitionSpeed / range;
        for(var i = currentId; i < newId; i++) {
          $('#' + i).delay(time * (range - (newId - i)) + 100).animate({opacity:0}, time * 0.33, 'linear');
        }
      }
    }

    // slide the #slides div to the correct posisiton and change the height
    $(slides).stop().animate({height: $(newSlide).height(), marginLeft: -(newId * 160) + '%'}, transitionSpeed, 'linear', function(){
      $(slides).children().css('opacity', 1);
    });

    // deactivate the current slide
    $(currentSlide).removeClass('active');

    // activate the new slide
    $(newSlide).addClass('active');

    // set the menu button to active
    $(this).addClass('active').siblings().removeClass('active');
  });
};

