$(document).ready(function(){
    $('.show-answer-btn').on('click', function () {
        $(this).text(function(i, v){
            return v === 'View Answer' ? 'Hide Answer' : 'View Answer';
        });
        $('.show-answer').animate({
                height: 'toggle'
            }, 1000
        );
        $('.show-explaination').animate({
                height: 'toggle'
            }, 1000
        );
    });
});