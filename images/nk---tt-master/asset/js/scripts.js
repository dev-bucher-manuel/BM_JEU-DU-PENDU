//fonction qui évalue le chiffre et renvoie la sortie
function calculer() 
{ 
    var numero1 = document.getElementById("output2").value 
    var numero2 = eval(numero1) 
    document.getElementById("output").value = numero2 
    console.log('first');
}

//fonction qui affiche la valeur
function afficher(val) 
{ 
    document.getElementById("output2").value+=val 
    console.log('deux');
} 
//fonction qui efface l'écran 
function effacer() 
{ 
    document.getElementById("output").value = "" 
    document.getElementById("output2").value = ""
} 