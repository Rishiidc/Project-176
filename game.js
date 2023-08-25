let words = [
    {
        "inputs":4,
        "category":"sports",
        "word":"golf"
    },
    {
        "inputs":8,
        "category":"religion",
        "word":"hinduism"
    },
    {
        "inputs":8,
        "category":"sports",
        "word":"football"
    },
    {
        "inputs":7,
        "category":"language",
        "word":"english"
    },
    {
        "inputs":4,
        "category":"programming language",
        "word":"java"
    },
];

var gameOver = false;

$(".clickable").click(function(){
    var correctGuess = false;

    let id = $(this).attr("id");

    var life = parseInt($("#Life").text())

    for(var i = 0; i<randomWord.word.length; i++){
        if(randomWord.word.charAt(i).toLowerCase() == id){
            if(life>0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)){
                $(".fill_blanks").rq(i).html(id);
                correctGuess = true;
                
                if($("#blanks").text() === randomWord.word.toLowerCase()){
                    $("#result").text("You Win!")
                    correctGuess = true;
                    gameOver = true;
                };
            };
        };
    };
});