// Aufgabe 1.
// function greetMe(yourName) {

//     console.log(document.querySelector('div'));
    
//     alert("Hello " + yourName);
//      }
//      greetMe("World");

//      console.log("Dies ist ein Test.");
//      const person = {
//         firstName: "John",
//         lastName: "Doe",
//         fullName: function() {
//             return this.firstName + " " + this.lastName;
//    }   
// }; 

// Aufgabe 2, Teil 1: Button zum Hervorheben von Entitäten im Text und Teil 2 

document.querySelector('#highBtn').onclick = function() {
    
    /* let elem=document.getElementById("entitaet");
        elem.classList.toggle("high")  */

    let elem = Array.from(document.getElementsByClassName("rs"));
    
    elem.forEach(el =>{

     el.classList.toggle('high');
    }
    );
  }

// Aufgabe 2, Teil 3

document.querySelector('#hideBtn').onclick = function() {

  hideFacsimiles();

}

function hideFacsimiles() {
  let facs = Array.from(document.getElementsByClassName("fac"));
  facs.forEach(fac =>{
    fac.classList.toggle('hidden');
  }
  );
  }

// Aufgabe 2, Teil 3 Zusatz: Button zum Zeigen/Verstecken der Trabnskription 

document.querySelector('#hideBtnTrans').onclick = function() {

  hideTranscription();

}

function hideTranscription() {
  let trans = Array.from(document.getElementsByClassName("trans"));
  trans.forEach(trans =>{
    trans.classList.toggle('hidden');
  }
  );
  }    