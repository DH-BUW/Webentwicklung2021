// FP CSS

function greetMe(yourName) {
    console.log(document.querySelector('div'));
    alert("Hello " + yourName + "!");
}

greetMe("World");

//document.querySelector('#highBtn').onclick = function(){

//    let elem = document.getElementById("entitaet");

//    elem.classList.toggle('high');}

document.querySelector('#highBtn').onclick = function () {
    let elem = Array.from(document.getElementsByClassName("rs"));
    elem.forEach(el => {
        console.log(el);
        el.classList.toggle('high');
    }
    );
}

document.querySelector('#hideBtn').onclick = function () {
    let facs = Array.from(document.getElementsByClassName("fac"));
    facs.forEach(fac => {
        fac.classList.toggle('hidden');
    }
    );
}

document.querySelector('#nmBtn').onclick = function () {
    let elem = document.getElementById("article");
    elem.classList.toggle('nightmode');
    let facs = Array.from(document.getElementsByClassName("fac"));
    facs.forEach(fac => {
        fac.classList.toggle('invertimg');
    }
    );
}

//const person = {
//    firstName: "John",
//    lastName: "Doe",
//    fullName: function () {
//        return this.firstName + " " + this.lastName;
//    }
//}
//console.log(person.firstName);
//console.log(person.fullName());