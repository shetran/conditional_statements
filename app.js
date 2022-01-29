let question = prompt("Enter in a number: ")

let result;

if(!isNaN(question)){
    let question2 = prompt("Choose an operation: ")
        
    if(question2==="+"||question2==="-"||question2==="/"||question2==="*"){

        let question3 = prompt("Enter another number")
        if(!isNaN(question3)){
            num1 = parseInt(question)
            num2 = parseInt(question3)
           if(question2==="+"){
               result=num1+num2
           } 
           else if(question2==="-"){
               result=num1-num2
           }
           else if(question2==="/"){
               result=num1/num2
           }
           else if(question2==="*"){
               result=num1*num2
           }

        }else{
            result="You did not enter in a number."
        }
        

    }else{
        result="You did not enter in an operation."
    }
    
}else{
    result="You did not enter in a number."
}

document.body.innerHTML=result;

