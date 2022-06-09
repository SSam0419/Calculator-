class cal{
    constructor(current,history){        
        this.current=current
        this.history=history
    }

    compute(){
        if (this.current.value == '') return
        if (operationList.includes(this.current.value[this.current.value.length-1])) {return } 
        this.history.innerText = this.current.value
        let total = eval(this.current.value)
        this.current.value = total  

    }
    

        
    del(){
        this.current.value = this.current.value.toString().slice(0, -1)
    }

    clear(){this.current.value =''}

    append(number){
        if ((number === '*'||number === '/' )&& (this.current.value[this.current.value.length-1]=== '*'||this.current.value[this.current.value.length-1]=== '/')) return
        if (number === '.' && this.current.value.includes('.')) return
        if (number === '0' && this.current.value[this.current.value.length-1]=== '0') return
        if ((number === "*" || number ==="/") && (this.current.value.length===0)) return
        this.current.value = this.current.value.toString() + number.toString()
    }
}

const operationList = ['+' , '-' , '*' , '/']
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
  })
})

operationButton.forEach(button =>{
button.addEventListener('click',() => {
    calculator.append(button.innerText)
})})

delButton.addEventListener('click',() => {calculator.del()})

clearButton.addEventListener('click',() => {calculator.clear()})

answerButton.addEventListener('click',() => {calculator.compute()})

current.addEventListener("keyup",() => {calculator.compute()})