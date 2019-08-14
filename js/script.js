var inp = document.querySelector('.rounds');
var error = document.querySelector('.error');
var start = document.querySelector('.start');
var startButton = document.querySelector('.start button');

startButton.disabled = true;

inp.addEventListener('input', function () {
    var rounds = inp.value.replace(/[^0-9]/g, "");
    if(rounds[0] == 0) rounds = rounds.substr(1);
    rt = +rounds;
    inp.value = rounds;

    if ((rounds[0] != undefined) && (rounds[3] == undefined) && (rounds[0] != 0)) {
        error.style.color = "#2ecc71";
        error.innerHTML = "Вы ввели: " + rounds + " раунд(ов)";
        startButton.disabled = false;
        startButton.style.background = "#2ecc71";
    }
    else {
        error.style.color = "#ff0000";
        error.innerHTML = "Вы ничего не ввели или ввели неправильно!!!";
        startButton.disabled = true;
        startButton.style.background = "#808080";
    }

});

startButton.addEventListener('click', function () {
    start.style.display = "none";
    start.style.display = "none";
});


/* +++++++++++++++++++++++++++++++++++++++++ */

var choice = document.querySelectorAll('.choice');
var chosen;
var choiceText = document.querySelector('.chosen h5');
var choiceButton = document.querySelector('.chosen button');
choiceButton.disabled = true;


var myScore = document.querySelector('.my-score');
var pcScore = document.querySelector('.your-score');
var round = document.querySelector('.round span');
var nextButton = document.querySelector('.pc-game button');
nextButton.disabled = false;
game(1, 0, 0);


function game(currentRound, mySc, pcSc) {
    round.innerHTML = currentRound;
    
    myScore.innerHTML = mySc;
    pcScore.innerHTML = pcSc;

    document.querySelector('.loading').style.display = "flex";
    document.querySelector('.pc-game').style.display = "none";
    for (var k = 0; k < choice.length; k++) {
        choice[k].style.background = "#95e1d3";
        choice[k].style.color = "#ffffff";
        choice[k].disabled = false;
        
    }
    choiceText.innerHTML = "Ничего";


    choice[0].addEventListener('click', function () {
        chosen = 0;
        for (var k = 0; k < choice.length; k++) {
            choice[k].style.background = "#95e1d3";
            choice[k].style.color = "#ffffff";
        }

        this.style.background = "#ffffff";
        this.style.color = "#95e1d3";
        choiceButton.disabled = false;
        choiceButton.style.background = "#2ecc71";

        choiceText.innerHTML = "Ножницы";
    });

    choice[1].addEventListener('click', function () {
        chosen = 1;
        for (var k = 0; k < choice.length; k++) {
            choice[k].style.background = "#95e1d3";
            choice[k].style.color = "#ffffff";
        }

        this.style.background = "#ffffff";
        this.style.color = "#95e1d3";
        choiceButton.disabled = false;
        choiceButton.style.background = "#2ecc71";


        choiceText.innerHTML = "Бумагу";
    });

    choice[2].addEventListener('click', function () {
        chosen = 2;
        for (var k = 0; k < choice.length; k++) {
            choice[k].style.background = "#95e1d3";
            choice[k].style.color = "#ffffff";
        }

        this.style.background = "#ffffff";
        this.style.color = "#95e1d3";
        choiceButton.disabled = false;
        choiceButton.style.background = "#2ecc71";

        choiceText.innerHTML = "Камень";
    });

    choiceButton.addEventListener('click', function () {
        for (var k = 0; k < choice.length; k++) {
            choice[k].disabled = true;
        }
        this.style.background = "#808080";
        this.disabled = true;

        document.querySelector('.loading').style.display = "none";
        document.querySelector('.pc-game').style.display = "flex";

        var pcChosen = Math.floor(Math.random() * 3);

        if (pcChosen == 0) {
            document.querySelector('.pc-choice').innerHTML = "<i class=\"fas fa-hand-scissors\">";
        }
        if (pcChosen == 1) {
            document.querySelector('.pc-choice').innerHTML = "<i class=\"fas fa-hand-paper\">";
        }
        if (pcChosen == 2) {
            document.querySelector('.pc-choice').innerHTML = "<i class=\"fas fa-hand-rock\">";
        }

        if (pcChosen == chosen) {
            document.querySelector('.pc-result').innerHTML = "Ничья!";
        }
        if ((chosen == 0) && (pcChosen == 1)) {
            document.querySelector('.pc-result').innerHTML = "Вы выиграли!";
            mySc += 1;
        }
        if ((chosen == 1) && (pcChosen == 2)) {
            document.querySelector('.pc-result').innerHTML = "Вы выиграли!";
            mySc += 1;
        }
        if ((chosen == 2) && (pcChosen == 0)) {
            document.querySelector('.pc-result').innerHTML = "Вы выиграли!";
            mySc += 1;
        }
        if ((chosen == 0) && (pcChosen == 2)) {
            document.querySelector('.pc-result').innerHTML = "Вы проиграли!";
            pcSc += 1;
        }
        if ((chosen == 1) && (pcChosen == 0)) {
            document.querySelector('.pc-result').innerHTML = "Вы проиграли!";
            pcSc += 1;
        }
        if ((chosen == 2) && (pcChosen == 1)) {
            document.querySelector('.pc-result').innerHTML = "Вы проиграли!";
            pcSc += 1;
        }
    });

    nextButton.addEventListener('click', function () {
        if (rt > currentRound){
            game(currentRound + 1, mySc, pcSc);
        } 
        else {
            document.querySelector('.end').style.display = "flex";

            document.querySelector('.ms').innerHTML = mySc;
            document.querySelector('.ps').innerHTML = pcSc;
            if ((mySc - pcSc) > 0) {
                document.querySelector('.win').style.display = "block";
            }
            else {
                document.querySelector('.lose').style.display = "block";
            }
            document.querySelector('.end button').onclick = function () {
                window.location.reload();
            }
        }
    });
}






/* +++++++++++++++++++++++++++++++++++++++++ */



/* +++++++++++++++++++++++++++++++++++++++++ */

var text = document.querySelector('.type-it');
text.innerHTML = '';
var i = 0;

function write() {
    text.innerHTML += '.';
    i++;
    setTimeout(write, 500);
    if (i == 4) {
        i = 0;
        text.innerHTML = '';
    }
};

write();