const FORM = document.querySelector("#myForm");
const LIST_INPUTS = document.querySelectorAll("input");

let check = {};


function getTooltip(elemHTML) { // cherche la classe tooltip, classList retourne la liste des classes de l'élément, nextElementSibling le tag suivant l'élément sélectionné

    let next = elemHTML.nextElementSibling;

    while (next) {
        if (next.classList.contains('tooltip')) {
            return next;
        }

        next = next.nextElementSibling;
    }

}
// on ajoute des fonctions à l'objet check
check.sexe = function(){

    console.log("sexe");

}

check.lastName = function (id) {

    let elemHTML = document.getElementById(id),
        tooltip = getTooltip(elemHTML);

    if (elemHTML.value.length >= 2) {
        elemHTML.classList.add("correct");
        elemHTML.classList.remove("incorrect");
        tooltip.style.display = "none";
        return true;
    } else {
        elemHTML.classList.add("incorrect");
        elemHTML.classList.remove("correct");
        tooltip.style.display = "inline";
        return false;

    }

    console.log("lastName");

}

check.firstName = function(id){
    let elemHTML = document.getElementById(id),
    tooltip = getTooltip(elemHTML);

if (elemHTML.value.length >= 2) {
    elemHTML.classList.add("correct");
    elemHTML.classList.remove("incorrect");
    tooltip.style.display = "none";
    return true;
} else {
    elemHTML.classList.add("incorrect");
    elemHTML.classList.remove("correct");
    tooltip.style.display = "inline";
    return false;

}
    console.log("firstName");
    
}

check.login = function(id){
    let elemHTML = document.getElementById(id),
    tooltip = getTooltip(elemHTML);

if (elemHTML.value.length >= 4) {
    elemHTML.classList.add("correct");
    elemHTML.classList.remove("incorrect");
    tooltip.style.display = "none";
    return true;
} else {
    elemHTML.classList.add("incorrect");
    elemHTML.classList.remove("correct");
    tooltip.style.display = "inline";
    return false;

}
    console.log("login");
    
}

check.age = function(id){
    let elemHTML = document.getElementById(id),
    tooltip = getTooltip(elemHTML);

if (elemHTML.value >= 5 && elemHTML.value <=140 ) {
    elemHTML.classList.add("correct");
    elemHTML.classList.remove("incorrect");
    tooltip.style.display = "none";
    return true;
} else {
    elemHTML.classList.add("incorrect");
    elemHTML.classList.remove("correct");
    tooltip.style.display = "inline";
    return false;

}
    console.log("age");
    
}

check.pwd1 = function(id){
    let elemHTML = document.getElementById(id),
    tooltip = getTooltip(elemHTML);

if (elemHTML.value.length >= 6) {
    elemHTML.classList.add("correct");
    elemHTML.classList.remove("incorrect");
    tooltip.style.display = "none";
    
    return true;
} else {
    elemHTML.classList.add("incorrect");
    elemHTML.classList.remove("correct");
    tooltip.style.display = "inline";
    return false;}
    console.log("age");
    
}

check.pwd2 = function(id){
    let elemHTML = document.getElementById(id),
    tooltip = getTooltip(elemHTML);

if (elemHTML.value == document.getElementById("pwd1").value) {
    elemHTML.classList.add("correct");
    elemHTML.classList.remove("incorrect");
    tooltip.style.display = "none";
    return true;
} else {
    elemHTML.classList.add("incorrect");
    elemHTML.classList.remove("correct");
    tooltip.style.display = "inline";
    return false;}
    console.log("pwd2");
    
}

check.country = function(id){
    let elemHTML = document.getElementById(id),
    tooltip = getTooltip(elemHTML);
console.log(elemHTML.value)
if (elemHTML.value != "none") {
    elemHTML.classList.add("correct");
    elemHTML.classList.remove("incorrect");
    tooltip.style.display = "none";
    return true;
} else {
    elemHTML.classList.add("incorrect");
    elemHTML.classList.remove("correct");
    tooltip.style.display = "inline";
    return false;}


    console.log("country");
    
}

FORM.addEventListener("submit", function(event) {

    event.preventDefault();

    for(let i in check) {
        // check.toto() est la manière normale d'appeler une méthode de check; ici, on parcours toutes les méthodes grâce à i qui va prendre les différentes valeur (check.lastName, firstName etc, donc ici check.lastname(lastName))
        check[i](i);
    }

});

for(let i = 0; i<LIST_INPUTS.length; i++) {
    LIST_INPUTS[i].addEventListener("keyup", function() {
        console.log(this.selected)

        if(this.type == "text" || this.type == "password") {
            check[this.id](this.id); 
        }
    });
}
