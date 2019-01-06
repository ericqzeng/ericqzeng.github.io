var nPics = 8; // will load images [0.jpg, 1.jpg, ... nPics.jpg]

$(document).ready(function() {
    $('#header').load('header.html');

    var grid = $('.grid').masonry({
        gutter: '.gutter-sizer',
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        horizontalOrder: true,
        percentPosition: true,
        hiddenStyle: {
            transform: 'translateY(100px)',
            opacity: 0
        },
        visibleStyle: {
            transform: 'translateY(0px)',
            opacity: 1
        }
    });

    $.fn.masonryImagesReveal = function($items) {
        var msnry = this.data('masonry');
        var itemSelector = msnry.options.itemSelector;
        // hide by default
        $items.hide();
        // append to container
        this.append($items);
        $items.imagesLoaded().progress(function(imgLoad, image) {
            // get item
            // image is imagesLoaded class, not <img>, <img> is image.img
            var $item = $(image.img).parents(itemSelector);
            // un-hide item
            $item.show();
            // masonry does its thing
            msnry.appended($item);
        });

        return this;
    };

    var items = '';
    for (var i = 0; i < nPics; i++) {
        items += "<div class='grid-item'><img src='img/portfolio/" + i + ".jpg' /></div>";
    }

    grid.masonryImagesReveal($(items));

});

// $(window).on('load', function() {
//     $('.container').css({
//         'display': 'block'
//     });
// });
