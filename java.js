
//Universal vars for r,p,s values
var rvalue = "R";
var pvalue = "P";
var svalue = "S";
var win = 0;
var loss = 0;
var tie = 0;

//function to get computer random input
function computerans(){
    let x = Math.floor(Math.random()* 4); 
    if (x==1) {
        ranswer = rvalue;
    } else if (x==2){
        ranswer = pvalue;
    } else {
        ranswer = svalue
    }
    console.log(ranswer)
    return ranswer;
}

//function to get user answer
function userans(){
    //Prompt user to get 
    var userinput = prompt ("Please input a 'R' for Rock, 'P' for Paper, and 'S' and Scissors")
    userinput = userinput.toUpperCase();
    if (userinput== 'R'){
        userinput = rvalue;
    } else if (userinput== 'P'){
        userinput = pvalue;
    } else if (userinput == 'S') {
        userinput = svalue;
    } else {
       userinput = prompt ("Try again. Please select a 'R' for Rock, 'P' for Paper, and 'S' and Scissors")
    }
    console.log(userinput)
    return userinput
}
function showdown(){
    //Store 
    let useranswer = userans();
    let computeranswer = computerans();
    //Tie conditions
    if (useranswer == computeranswer){
        alert("It was a close fight but you tied the computer!")
        tie++;
    } 
    //User win conditions
    else if (useranswer == "R" && computeranswer == "S") {
        alert("After a long faught battle, your rock beat the computer's scissors!")
        win ++;
    } else if (useranswer == "S" && computeranswer == "P"){
        alert("Your scissors cut right through the computer's paper easily to give you the win!")
        win ++;
    } else if (useranswer == "P" && computeranswer=="R"){
        alert("Your paper smothered the computer's rock for an impressive win!")
        win ++;
    //Computer win conditions
    }else if (computeranswer == "R" && useranswer == "S"){
        alert("Your scissors were no match for the computer's rock. You lose :(")
        loss++;
    } else if (computeranswer == "S" && useranswer == "P"){
        alert("Your paper was sliced through by the computer's scissors. You lose :(")
        loss++
    } else if (computeranswer == "P" && useranswer=="R"){
    alert("Your rock couldn't breathe after the computer's paper covered it. You lose :(")
    loss++
    }
    //Play again?
    let playagain = confirm("Do you want to play again??") 
    if (playagain){
        showdown();
    } else {
        alert("You won " + win + " times." + " You loss " + loss + " times." + " You tied " + tie + " times.")
    }
}

showdown()
