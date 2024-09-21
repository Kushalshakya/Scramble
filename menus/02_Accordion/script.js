$('.accordion-section').on('click', function() {
    let panel = this.nextElementSibling;
    let panelContentHeight = panel.scrollHeight;

    if($(panel).height() > 0){
        $(panel).css({
            height: 0,
            overflow: 'hidden',
            transition: 'height .5s ease-in-out',
        })
        $(this).find('.icon-add').show();
        $(this).find('.icon-remove').hide();
    } else{
        $(panel).css({
            height: panelContentHeight + 'px',
            overflow: 'hidden',
            transition: 'height .5s ease-in-out',
        })
        $(this).find('.icon-add').hide();
        $(this).find('.icon-remove').show();
    }
})