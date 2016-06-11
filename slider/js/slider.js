var options = {};

$(function(){
    options.slider = $('.slider');
    options.buttonNext = $('.next__btn');
    options.buttonPrev = $('.prev__btn');
    options.item = $('.slider__item');
    options.pos = 0;
    options.size = options.item.length;

    init();
});

function init(){
    getSize();
    activateButtons();
    console.log(options);
}

function activateButtons(){
    options.buttonNext.on('click', function(){
        if(options.pos < options.size - 1){
            options.pos += 1;

            options.slider.css({
                left: -(options.slideWidth * options.pos)
            });
        }
    });

    options.buttonPrev.on('click', function(){
        if(options.pos >= 1){
            options.pos -= 1;

            options.slider.css({
                left: -(options.slideWidth * options.pos)
            });
        }
    });
}

function getSize(){
    options.slideWidth = options.slider.outerWidth();
    options.slider.width(options.slideWidth * options.size);
    options.item.width(options.slideWidth);
}