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
            b: 'rechter',
            c: 'werkloos',
            d: 'Hotel eigenaar',
            correct: 'b'
    },{
            question: 'Op welke leeftijd kreeg Ashley haar eerste kusje?',
            a: '13',
            b: '14',
            c: '15',
            d: '12',
            correct: 'b'

    }


];

const quistionEL = document.getElementById('vraag');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submitKnop = document.getElementById('knop');

let huidigeVraag = 0;

loadQuiz();

function loadQuiz()  {
        const huidigeVraagData = quizData[huidigeVraag]
        quistionEL.innerText = huidigeVraagData.question;

        a_text.innerText = huidigeVraagData.a;
        b_text.innerText = huidigeVraagData.b;
        c_text.innerText = huidigeVraagData.c;
        d_text.innerText = huidigeVraagData.d;

}

submitKnop.addEventListener('click',() =>{
        huidigeVraag++;

        if(huidigeVraag < quizData.length){
                loadQuiz();
        } else {
                alert('je hebt alle vragen beantwoord')
        }
   
}

)