var currentIndex = 0,
    items = $('.container div'),
    itemAmt = items.length;

function cycleItems() {
    var item = $('.container div').eq(currentIndex);
    items.hide();
    item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
    }
    cycleItems();
}, 3000);

$('.next').click(function() {
    clearInterval(autoSlide);
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
    }
    cycleItems();
});

$('.prev').click(function() {
    clearInterval(autoSlide);
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = itemAmt - 1;
    }
    cycleItems();
});
$('#upload').click(function(){
    $.mobile.changePage('view/upload.html', {transition: "flip"});
        }).mouseover(function () {
    $(this).css({ 'width': '70px'})
        }).mouseout(function () {
    $(this).css({'width': '40px' });
});
$('#google').click(function(){
    $.mobile.changePage('view/google.html', {transition: "flip"});
}).mouseover(function () {
    $(this).css({ 'width': '70px'})
}).mouseout(function () {
    $(this).css({'width': '40px' });
});