function toggle(elem){
    elem.classList.toggle('active');
}

$('.animated-bar').on('click', function() {
    toggle(this);
})