const quizData = [
    {
            question:'Wie is de hoofdrol speler van The Fresh Prince of Bel-Air?',
            a: 'Carlton',
            b: 'Ashley',
            c: 'Will',
            d: 'Uncle Phill',
            correct: 'c'
    },{
            question: 'Hoeveel seizoenen zijn er?',
            a: '3',
            b: '5',
            c: '7',
            d: '6',
            correct: 'd'
    }, {
            question: 'Waar komt Will vandaan?',
            a: 'Philladelphia',
            b: 'Chicago',
            c: 'Florida',
            d: 'Brooklyn',
            correct: 'a'
    },{
            question: 'Waar speelt het zich af?',
            a: 'Philadelphia',
            b: 'Bel-air',
            c: 'Los Angeles',
            d: 'Las Vegas',
            correct: 'b'
    },{
            question: 'Hoe heet hun butler?',
            a: 'Jeffrey',
            b: 'Jazz',
            c: 'Carlton',
            d: 'Tony',
            correct: 'a'
    },{
            question: 'Wat voor werk doet Uncle Phill?',
            a: 'Advocaat',
            b: 'Rechter',
            c: 'Werkloos',
            d: 'Hotel eigenaar',
            correct: 'b'
    },{
            question: 'Op welke leeftijd kreeg Ashley haar eerste kusje?',
            a: '13',
            b: '14',
            c: '15',
            d: '12',
            correct: 'b'
    },{
            question: 'Hoezo ging de familie verhuizen?',
            a: 'Ze kregen nog een kind',
            b: 'ze konden het huis niet meer betalen',
            c: 'Ze voelden zich niet meer veilig',
            d: 'De kinderen gingen het huis uit, en het huis was te groot voor met zn 2en',
            correct: 'a'
    }
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");


const questionEL = document.getElementById('question');
const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text'); 
const submitBtn = document.getElementById('knop')


let currentQuiz = 0;
let score = 0;

loadQuiz();
 
function loadQuiz(){
        deselectAnswers()
        const currentQuizData = quizData[currentQuiz];

         questionEL.innerText = currentQuizData.question;

         a_text.innerText = currentQuizData.a;
         b_text.innerText = currentQuizData.b;
         c_text.innerText = currentQuizData.c;
         d_text.innerText = currentQuizData.d;
}

function getSelected() {
        let answer = undefined

         answersEls.forEach((answerEl) => {
                if(answerEl .checked) {
                        answer = answerEl.id;
                }
         });
         return answer;
}

function deselectAnswers() {
        answersEls.forEach((answerEl) => {
               answerEl.checked = false;
         });
}

submitBtn.addEventListener("click", () => {
        const answer = getSelected();

        if(answer){
                if(answer === quizData[currentQuiz].correct) {
                        score++;
                }
         {
                currentQuiz++;
                if (currentQuiz < quizData.length){
                        loadQuiz();
                        } else (
                      quiz.innerHTML = `<h2>Je hebt ${score}/${quizData.length} vragen goed beantwoord! </h2> 
                      <button onclick = "location.reload()">Opnieuw spelen?</button>` 
                              )
                      }
                }
        })      
        