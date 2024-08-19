let maxNo = 100
let minNo = 1
let ans = Math.floor(Math.random() * (maxNo - minNo) + minNo)


const subbtn=document.getElementById("subbtn")
const userinput=document.getElementById("guessField")
const previousguess=document.getElementById("guesses")
const remaingattemps=document.getElementById("Attemps")
const lowOrHigh=document.getElementById("lowOrHigh")
const form=document.getElementById("form")

let guess = 0
let allguess = []
let running = true
let attemps = 10

subbtn.addEventListener("click",(e)=>  {

    e.preventDefault()
    guess = userinput.value
    guess = Number(guess)
   
    if (isNaN(guess)) {
        window.alert("Please Guess a Number")
    }
    else if (guess > maxNo || guess < minNo) {
        window.alert(`Please Guess a Number Between ${minNo}-${maxNo}`)
    }
    else {
        allguess.push(guess)
        previousguess.innerText=allguess.join(", ")
        attemps--
        remaingattemps.textContent=attemps
        if (attemps < 1 && guess != ans ) {

            window.alert(`Game Over! Your are unable to Guess in 10 Attepms The Ans was ${ans}`)
            endgame();
            
        }
        else {
            if (guess > ans) {
                lowOrHigh.innerText="Too High Try Again"
            }
            else if(guess < ans)
            {
                lowOrHigh.innerText="Too Low Try Again"
            }
            else{

                window.alert(`Correct! The Ans was ${ans}. Your are Good` )
              
                endgame();
                
            }
           
            form.reset();
            

        }
    }

})


function endgame(){

    attemps = 10
    running=false
    allguess=[]
    remaingattemps.textContent=" "
    previousguess.innerText=" "
    form.reset();
    ans = Math.floor(Math.random() * (maxNo - minNo) + minNo)

}
