/**  
*      Teil 1
*
**/

      document.querySelector('#highBtn').onclick = function() {
        alert("Hello World!");


        let elem = document.getElementById("entitaet");
      
            elem.classList.toggle('high');

            // Teil 3 s.u.
            // hideFacsimiles();
        
      }
      

/**  
*      Teil 2
*
**/
      // function greetMe(yourName) {
      //   alert("Hello " + yourName);
      // }
      
      // greetMe("World");
      
      

      // document.querySelector('#highBtn').onclick = function() {
      //   alert("Hello World!");


      //   let elem = Array.from(document.getElementsByClassName("rs"));
        
      //   elem.forEach(el =>{
      //       console.log(el);
      //       el.classList.toggle('high');
      //   }
      //   );
     
      
/**  
*      Teil 3
*
**/
     
      function hideFacsimiles() {


        // Vereinfachen!!
          let facs = Array.from(document.getElementsByClassName("fac"));
          
          facs.forEach(fac =>{
              fac.classList.toggle('hidden');
          }
          );
        }
  
  