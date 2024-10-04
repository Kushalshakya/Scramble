$(document).ready(function() {
    let isDragging = false;
    
    $('.guesser-title-bar').on('mousedown', function() {
        $('#guesser').draggable({
            disabled: false
        });
        isDragging = true;
    });

    $(document).on('mouseup', function() {
        if (isDragging) {
            $('#guesser').draggable({
                disabled: true
            });
            isDragging = false;
        }
    });
});
