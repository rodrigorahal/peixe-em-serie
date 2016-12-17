function pageFoward() {
  var currentPage = $('.active').first();
  if (currentPage.next().is('section')) {
    currentPage.next().addClass('active');
    currentPage.removeClass('active')
  }
};

function pageBackward() {
  var currentPage = $('.active').first();
  if (currentPage.prev().is('section')) {
    currentPage.prev().addClass('active');
    currentPage.removeClass('active')
  }
};
