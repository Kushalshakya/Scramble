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

    function popupModalAnalysis(){
        let temp = -1;
        let count = 0;
        let staticText = ["Analysing the probability","AI mode activated.","Determining The Complexity"];
        let randomInterval = 0;

        $('.progress-loader').css("display", "block");
        $('.dynamic-text').css("display", "block");
        $('.guess-number-container').css("display", "none");
        
        function getRandomText(){
            do{
                randomInterval = Math.floor(Math.random() * staticText.length);
            }while(randomInterval == temp)
    
            $('.dynamic-text').html(staticText[randomInterval])
            temp = randomInterval;
            count++;
        }
        getRandomText();
        let intervalTimeout = setInterval(() => {
            getRandomText();
            if (count > 3) {
                clearInterval(intervalTimeout);
                $('.guess-number-container').css("display", "block");
                $('.progress-loader').css("display","none");
                $('.dynamic-text').css("display","none");
    
                let userNumber = $('.guesser-input').val();
                console.log(userNumber);
                $('.guessedNumber').html(`The Guess is number: ${userNumber}`);
            }
        }, 3000); 
    }

    $('.closeBtn').on('click', () => {
        $('.dropback-effect').toggleClass('active')
        $('.popup-modal').toggleClass('active')
    })
    $('.submitBtn').on('click', () => {
        popupModalAnalysis()
        $('.dropback-effect').toggleClass('active')
        $('.popup-modal').toggleClass('active')
    })
});
