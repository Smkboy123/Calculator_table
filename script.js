const input = document.getElementById('affiche');

function ajoutValeur(value) {
    input.value += value;
}

function effacer() {
    input.value = '';
}

function supprimer() {
    input.value = input.value.slice(0,-1)
}
function carre(value){
    input.value*=input.value;
}
function racine(value){
    input.value= Math.sqrt(input.value);
}

function calcul() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Erreur';
    }
}
