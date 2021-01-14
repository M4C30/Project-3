function klik(){
    let knop = document.getElementById("knop")
    

    knop.style.visibility="hidden";

    knop.className = "knop_klik";

}
function buildQuiz(){
    // variable to store HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            //variable to store the list of all possible answers
            const answers = [];

            // and for each available answer...
            for(letter in currentQuestion.answers){

                //add an HTML radio button
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    <label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results

submitButton.addEventListener('click', showResults);




let vragen = [
    {
        question: "Hoe oud is Eminem?",
        answers: {
            A: "44",
            B: "48",
            C: "39"
        },
        correctAnswer: "C"
    },
    {
        question: "Wanneer is Stevie Wonder geboren?",
        answers: {
            A: "1950",
            B: "1964",
            C: "1949"
        },
        correctAnswer: "A"
    },
    {
        question: "Hoe kwam Childish Gambino aan zijn naam?",
        answers: {
            A: "Een naam generator",
            B: "Hij hoorde het op straat",
            C: "Het was een bijnaam gegeven door zijn broer"
        },
        correctAnswer: "A"
    },
    {
        question: "Om welk liedje staat Louis Armstrong bekend?",
        answers: {
            A: "On The Sunny Side Of The Street",
            B: "Dream A Little Dream Of Me",
            C: "What A Wonderful World"
        },
        correctAnswer: "C"
    },
    {
        question: "Wanneer kwam Nicki Minaj's eerste liedje uit?",
        answers:{
            A: "2003",
            B: "2007",
            C: "2010"
        },
        correctAnswer: "C"
    }
];