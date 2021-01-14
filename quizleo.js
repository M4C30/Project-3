function functie1(){

const startKnop = document.getElementById("klik")
document.getElementById("quizvraag1").className = "quizvraagtoon";
}


function checkAwnser(){
    
    document.getElementById("antwoordKnop1a").value;
    document.getElementById("antwoordKnop1b").value;
    document.getElementById("antwoordKnop1c").value;  
    document.getElementById("antwoordKnop1d").value; 

    let antwoord1 = false;
    let antwoord2 = true;

    const vraag1 = document.getElementById("antwoordKnop1a") == false;
    const vraag2 = document.getElementById("antwoordKnop1b") == false;
    const vraag3 = document.getElementById("antwoordKnop1c") == true;
    const vraag4 = document.getElementById("antwoordKnop1d") == false;


    if(vraag3 == true){
         let  check = document.getElementById("antwoordKnop1c").innerHTML == "True"
    } 

    
   }





    
 
