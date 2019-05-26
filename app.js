function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // mostrar pregunta
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // mostrar opciones
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Pregunta " + currentQuestionNumber + " de " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Resultados</h1>";
    gameOverHTML += "<h2 id='score'> tus aciertos: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// crear preguntas
var questions = [
    new Question("¿Cual de las siguientes culturas precolombinas sembraban en terrazas de cultivo?", ["Mayas", "Muiscas","Quimbayas", "Mongoles"], "Quimbayas"),
    new Question("¿En que año funda pedro de heredia cartagena de indias?", ["1533", "1453", "1511", "1538"], "1533"),
    new Question("¿Quien fue el organismo o persona que le coloco el nombre 'nuevo reino de granada'", ["La corona española", "Gonzalo jimenez de quesada","La real audiencia de bogota", "la compañia de indias occidentales"], "Gonzalo jimenez de quesada"),
    new Question("¿Cual fue el primer presidente de colombia bajo una constitucion?", ["Francisco de paula santander", "Simon Bolivar", "Jose maria obando", "Thomas cipriano de mosquera"], "Francisco de paula santander"),
    new Question("¿En cual de las siguientes guerras colombia participo formalmente?", ["Las guerras mundiales", "La guerra de vietnam", "La guerra de corea", "Todas"], "La guerra de corea")
]; 


// crear quiz
var quiz = new Quiz(questions);

// display quiz
populate();





