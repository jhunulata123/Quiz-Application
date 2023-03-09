let index = 0;
let attempt = 0;
let score = 0;
let wrong = 0;
let question = quiz.sort(function () {
    return 0.5 - Math.random();
});
let totalQuestion = question.length;

$(function () {
    //timer code start from here
    let totalTime = 200;          //200 sec for timer
    let min = 0;
    let sec = 0;
    let counter = 0;
    let timer = setInterval(function () {
        counter++;
        min = Math.floor((totalTime - counter) / 60); //calculating min
        sec = totalTime - min * 60 - counter;

        $(".timerBox span").text(min + ":" + sec);
        if (counter == totalTime) {
            alert("Time's up.press ok to show the result.");
            result();
            clearInterval(timer);
        }
    }, 1000);    //timer set for 2 seconds interval
    //timer code end  here

    //print questions
    printQuestion(index);

});
//function to print question start

function printQuestion(i) {
    $(".questionBox").text(question[i].question);

    $(".optionBox span").eq(0).text(question[i].option[0]);
    $(".optionBox span").eq(1).text(question[i].option[1]);
    $(".optionBox span").eq(2).text(question[i].option[2]);
    $(".optionBox span").eq(3).text(question[i].option[3]);
}

//function to print question end
//function to check answer start
function checkAnswer(option) {
    attempt++;

    let optionClicked = $(option).data("opt");

    console.log(optionClicked);
   // console.log(question[index]);

    if (optionClicked == question[index].answer) {
        $(option).addClass("right");
         score++;
    }
    else {
        $(option).addClass("wrong");
        wrong++;
    }

    $(".scoreBox span").text(score);
   $(".optionBox span").attr("onclick", " ");

}

//function to check answer end
//function for the next question start

function showNext() {
    if (index >= question.length - 1) {
        showResult(0);
        return;
    }

    index++;

    $(".optionBox span").removeClass();
    $(".optionBox span").attr("onclick", "checkAnswer(this)");
    printQuestion(index);
}

//function for the next question end



//function for result start

function showResult(j) {
    if (
        j == 1 &&
        index < question.length - 1 &&
        !confirm("Quiz has not finished yet.Press of to skip quiz & get you final result")
    )
    {
        return;
    }

    $("#questionScreen").hide();
    $("#resultScreen").show();
 
     $("#totalQuestion").text(totalQuestion);
     $("#attemptQuestion").text(attempt);
     $("#correctAnswers").text(score);
     $("#wrongAnswers").text(wrong);
 
  
   
}

//function for result end

//Result function start
function result(){
    
    $("#questionScreen").hide();
    $("#resultScreen").show();
 
     $("#totalQuestion").text(totalQuestion);
     $("#attemptQuestion").text(attempt);
     $("#correctAnswers").text(score);
     $("#wrongAnswers").text(wrong);
 
 }
//Result function end




