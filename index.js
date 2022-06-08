class cal{
    constructor(current,history){        
        this.current=current
        this.history=history
    }
    compute(){        
        step.push(numberStr)
        numberStr = ''
        let total = 0 
        while (step.length >= 2){
            switch (step[1]){
                case "+" : 
                total += step[0] + step[2]
                break
                case "-" :
                total += step[0] - step[2] 
                break
                case "X" : 
                total += step[0] * step[2]
                break
                case "/" : 
                total += step[0] / step[2]
                break
                default:
                return
            }
            step.shift();
            step.shift();
            step.shift();
        }
        this.current.value = total
        step = []
    }
    
    steps(operation){
        if (operationList.includes(operation)){
            step.push(numberStr)
            step.push(operation.toString())
            numberStr = ''
        } else {
            numberStr += operation.innerText
        }
        }
        


    del(){
        this.current.value = this.current.value.toString().slice(0, -1)
    }

    clear(){this.current.value =''}

    append(number){
        if (number === '.' && this.current.value.includes('.')) return
        if ((operationList.includes(number)) && operationList.includes(this.current.value[this.current.value.length-1])) return
        this.current.value = this.current.value.toString() + number.toString()
    }




}

numberStr = ''
step = []
const operationList = ['+' , '-' , 'X' , '/']
const numberButton = document.querySelectorAll(".number")
const operationButton = document.querySelectorAll(".operation")
const answerButton = document.querySelector(".answer")
const clearButton = document.querySelector(".clear")
const delButton = document.querySelector(".del")
const current = document.querySelector("#current")
const history = document.querySelector("#history") 

const calculator = new cal(current,history)

numberButton.forEach(button => {
  button.addEventListener('click', () => {
    calculator.append(button.innerText)
    calculator.steps(button)
  })
})

operationButton.forEach(button =>{
button.addEventListener('click',() => {
    calculator.steps(button.innerText)
    calculator.append(button.innerText)
})})

delButton.addEventListener('click',() => {calculator.del()})

clearButton.addEventListener('click',() => {calculator.clear()})

answerButton.addEventListener('click',() => {calculator.compute()})