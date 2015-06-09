// Only enable if the document has a long scroll bar
// Note the window height + offset
if ( ($(window).height() + 50) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:50}
    });
}

 $('#backToTopBtn').click(function(){
        $('html,body').animate({scrollTop:0},'slow');return false;
    });