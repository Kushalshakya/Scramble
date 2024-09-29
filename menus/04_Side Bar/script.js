$(document).ready(function() {
    $('.btn-toggle').on('click', function() {
        $('.sidebar').toggleClass('active');
    })

    $('.btn-fixed').on('click', function(){
        $('.sidebar').toggleClass('fixed')
        $('.sidebar-modes').toggleClass('alignment')
    })

    $('.btn-autoFit-height').on('click', function(){
        $('.sidebar').toggleClass('fit-height');
        $('.sidebar').toggleClass('bg-info');
        $('.sidebar-container').toggleClass('bg-info');
    })
})
