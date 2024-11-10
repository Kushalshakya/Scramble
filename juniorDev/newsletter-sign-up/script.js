$('form').on('submit', (e) => {
    e.preventDefault();
    $('.newsletter').removeClass('active');
    $('.subscription').addClass('active');
    $('.userEmail').html($('.formEmail').val())
    $('.formEmail').val("")
})

$('.dismissBtn').on('click', () => {
    $('.newsletter').addClass('active');
    $('.subscription').removeClass('active');
})