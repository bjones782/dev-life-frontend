
// not functional (it's in REACT) but could be a good guide to some JS functionality
  $('.clue').on('click', function () {
    var elem = $(this);
    var position = elem.position();
    var answer = $('<div class="answer"><div>WORDS WORDS WORDS</div></div>');
    answer.css(position);
    answer.css({
      height: elem.outerHeight(),
      width: elem.outerWidth()
    });
    $('body').append(answer);
    answer.animate({
      height: '100vh',
      width: '100vw',
      top: 0,
      left: 0
    }, 0.5);
  
    answer.on('click', function () {
      $(this).remove();
    });
  });