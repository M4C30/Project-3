


(function () {
    // Functions
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

                    // ...add an HTML radio button
                    answers.push(
                        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
                );
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.visibility = 'hidden';
        }
        if (currentSlide === 0) {
            img.src = "images/eminem.jpg";
        }
        if (currentSlide === 1) {
            img.src = "images/steviewonder.jpg";
            previousButton.style.visibility = 'visible';
        }
        if (currentSlide === 2) {
            img.src = "images/childish gambino.jpg";
        }
        if (currentSlide === 3) {
            img.src = "images/louisarmstrong.jpg";
        }
        if (currentSlide === 4) {
            img.src = "images/nickiminaj.jpg";
        }
        if (currentSlide === 5) {
            img.src = "images/michaeljackson.jpg";
        }
        if (currentSlide === 6) {
            img.src = "images/freddie.jpg";
        }
        if (currentSlide === 7) {
            img.src = "images/wap.jpg";
        }

        else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }

    }






    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    // Variables
    let img = document.createElement("img");
    let src = document.getElementById("picture");
    src.appendChild(img);
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "<label>Hoe oud is Eminem?</label>",
            answers: {
                A: "44",
                B: "48",
                C: "39"
            },
            correctAnswer: "B"
        },
        {
            question: "<label>Wanneer is Stevie Wonder geboren?</label>",
            answers: {
                A: "1950",
                B: "1964",
                C: "1949"
            },
            correctAnswer: "A"
        },
        {
            question: "<label>Hoe kwam Childish Gambino aan zijn naam?</label>",
            answers: {
                A: "Een naam generator",
                B: "Hij hoorde het op straat",
                C: "Het was een bijnaam gegeven door zijn broer"
            },
            correctAnswer: "A"
        },
        {
            question: "<label>Om welk liedje staat Louis Armstrong bekend?</label>",
            answers: {
                A: "On The Sunny Side Of The Street",
                B: "Dream A Little Dream Of Me",
                C: "What A Wonderful World"
            },
            correctAnswer: "C"
        },
        {
            question: "<label>Wanneer kwam Nicki Minaj's eerste liedje uit?</label>",
            answers: {
                A: "2003",
                B: "2007",
                C: "2010"
            },
            correctAnswer: "C"
        },
        {
            question: "<label>Maak af: 'She says I am the one...'</label>",
            answers: {
                A: "'...but the kid is not my son.'",
                B: "'...but they don't think I won.'",
                C: "'...but I had already begun.'"
            },
            correctAnswer: "A"
        },
        {
            question: "<label>Maak af: 'Put a gun against his head...'</label>",
            answers: {
                A: "'...I said I'm sorry but you're dead.'",
                B: "'...pulled my trigger, now he's dead.'",
                C: "'...pushed him away from my bed.'"
            },
            correctAnswer: "B"
        },
        {
            question: "<label>Waar staat 'WAP' voor?</label>",
            answers: {
                A: "Weaponized Assault Penguin",
                B: "Wanking At Pussy",
                C: "Wet Ass Pussy"
            },
            correctAnswer: "C"
        }
    ];












    // Kick things off
    buildQuiz();

    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();

