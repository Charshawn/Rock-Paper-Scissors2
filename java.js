var rps = ["rock","paper","scissors"];

function getComputerChoice(){
    var randomIndex = (Math.round(Math.random() * rps.length));
    var randomChoice = rps[randomIndex];
    //the random class generates numbers randomly//
    console.log(randomChoice);
}

getComputerChoice();

