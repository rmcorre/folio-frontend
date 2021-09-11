(function () {
  var shuffleInstance; //n
  var activeFilter; //
  var value; //r
  var init; //t
  var element = document.querySelectorAll('.masonry-grid'); //o
  if (element !== null)
    for (var i = 0; i < element.length; i++) {
      init = (function (element) {
        shuffleInstance = new Shuffle(element[i], {
          itemSelector: '.masonry-grid-item',
          sizer: '.masonry-grid-item',
        });

        imagesLoaded(element[i]).on('progress', function () {
          shuffleInstance.layout();
        });

        var filter = element[i].closest('.masonry-filterable');
        if (filter === null)
          return {
            v: void 0,
          };

        var filterButton = a.querySelectorAll('.masonry-filters [data-group]'); //t
        for (i = 0; i < filterButton.length; i++)
          filterButton[i].addEventListener('click', function (event) {
            activeFilter = filter.querySelector('.masonry-filters .active');
            value = this.dataset.group;
            activeFilter !== null && activeFilter.classList.remove('active');
            this.classList.add('active');
            shuffleInstance.filter(value);
            event.preventDefault();
          });
      })(e);
      if ('object' === _typeof(init)) return init.v;
    }
})();
