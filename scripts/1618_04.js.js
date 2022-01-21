/**
 * Anm: 
 * 
 * zum einkommentieren des Codes die doppelten Slashes am Zeilenanfang löschen
 * 
 * und die nicht benötigten Funktionen aus den anderen Aufgaben mit zwei Slashes auskommentieren
 * 
 * Achtet auf Kommentare, die auskommentiert bleiben müssen, da sonst das Dokument nicht validiert
 * 
 * 
 * 
 */






/**  
*      Aufgabe 1: einfache alert-Funktion mit Konsolen-Ausgabe zum Debuggen
*
**/
     


function greetMe(yourName) {

      

    alert("Hello " + yourName);

    console.log("Dies ist ein Test.");
  }
 
  greetMe("World");
 

 // "greifen" des ersten divs im HTML und ausgeben seiner Kind-Elemente in der Kosole
  console.log(document.querySelector('div').childNodes);









/**  
*      Aufgabe 2 Teil 1: Button-Funktion, die eine Entität farblich unterlegt
*
**/

// document.querySelector('#highBtn').onclick = function() {
 

 // lege eine Variable an und speichere das HTML-Element mit der ID "entitaet" dort ab
 //let elem = document.getElementById("entitaet");

 // greife mittels .classList auf die Klassen des in elem abgespeicherten HTML-Elements zu 
 // und ändere mittels .toggle() den "Zustand" der Klasse 'high' (füge sie also hinzu oder lösche sie)
 //    elem.classList.toggle('high');

 
}


/**  
*      Aufgabe 2 Teil 2: 
     Es soll nicht nur ein, sondern mehrere Elemente farblich hinterlegt werden
     Dazu wird statt der einmalig vergebenen ID 'entitaet' die Klasse 'rs' zu mehreren Elementen hinzugefügt (s. HTML)

     
*
**/

  document.querySelector('#highBtn').onclick = function() {
 

 //  // lege eine Variable an und speichere ALLE HTML-Elemente ab, die eine Klasse 'rs' besitzen
 //  // IN EINEM ARRAY, dh. einer Liste von Elementen

    let elem = Array.from(document.getElementsByClassName("rs"));
   
 // //  Das Array beinhaltet mehrere einzelne Elemente, die per forEach-Schleife abgearbeitet werden
 // //  im Schleifen-Körper werden zwei Operationen auf dem Element ausgeführt:

    elem.forEach(el =>{

 // //      1. gib das Element in der Konsole aus -> dies könnt ihr in der Browserkonsole prüfen
        console.log(el);

 //  //     selbe Funktion wie oben: Liste der KLassen des Elements wird auf 'high' überprüft und 
 //  //     diese hinzugefügt oder entfernt
 
        el.classList.toggle('high');
    }
    );
  }


 
/**  
*      Aufgabe 2 Teil 3
*
**/




/**  
*      Aufgabe 2 Teil 3
*
**/



   // // Ergänzung zur Funktion wie Aufgabe 2 Teil 1, 
   // // ruft lediglich zweite, "externe" Funktion hideFacsimiles() auf
    document.querySelector('#hideBtn').onclick = function() {

       
   //   // Aufruf der "exteren" Funktion hideFacsimiles() (s.u.)
        hideFacsimiles();
     
    }

   // // Deklaration der hideFacsimiles() Funktion
    function hideFacsimiles() {


   //   // Lege eine neue Variable als Array an und speichere dort sämtliche Elemente ab, die die Klasse 'fac' besitzen (s. HTML)
        let facs = Array.from(document.getElementsByClassName("fac"));
       
   //     // Array wird mit forEach-Schleife durchlaufen
   //     // der Schleifenkörper wird eine andere Klasse "getogglet", findet heraus, was diese tut (s. CSS)
   
        facs.forEach(fac =>{
            fac.classList.toggle('hidden');
        }
        );
      }

