let container = document.getElementById("container")
let buttonResult = document.getElementById("buttonResult")
let rightAnswers = 0
let buttonResultContainer =document.getElementById("buttonResultContainer")
ques_num = document.getElementById('ques_num')
let v = 0
let answer1 = document.getElementById("ans_1")
let answer2 = document.getElementById("ans_2")
let submit = document.getElementById("submit")
let trueAnswer = document.getElementById("trueAnswer")
let ques_1 = document.getElementById('ques_1')
let ques_2 = document.getElementById('ques_2')
let ques_3 = document.getElementById('ques_3')
let ques_4 = document.getElementById('ques_4')
let ques_5 = document.getElementById('ques_5')
let list_questions = [ques_1,ques_2,ques_3,ques_4,ques_5]
let result_rate = document.getElementById('rate')
let span = document.getElementById('span')
span.style.display = 'none'
submit.onclick = () => {
    if(ques_1.style.display == 'block' || span.style.display =='none'){
        if(answer1.checked){
            if(submit.innerHTML == 'Submit'){
                rightAnswers++
            }
        }
        span.style.display = 'inline'
    }
    if(ques_2.style.display == 'block'){
        if(answer1.checked){
            if(submit.innerHTML == 'Submit'){
                rightAnswers++
            }
        }
    }
    else if(ques_3.style.display == 'block'){
        if(answer2.checked){
            if(submit.innerHTML == 'Submit'){
                rightAnswers++
            }
        }
    }
    else if(ques_4.style.display == 'block'){
        if(answer1.checked){
            if(submit.innerHTML == 'Submit'){
                rightAnswers++
            }
        }
    }
    else if(ques_5.style.display == 'block'){
        if(answer2.checked){
            if(submit.innerHTML == 'Submit'){
                rightAnswers++
            }
        }
    }
    if(submit.innerHTML == 'Submit'){
        console.log(rightAnswers)
    }
    change()
    end()
}
function end(){
    if(submit.innerHTML == 'Next' &&  ques_5.style.display == 'block'){
        seeResult()
        buttonResultContainer.style.display = 'flex'
        container.style.display = 'none'
        
    }
}
function seeResult(){
    buttonResult.onclick = () =>{
        let Result = document.getElementById("seeingResults")
        Result.innerHTML = `you answered ${rightAnswers} from ${list_questions.length}`
        if(rightAnswers >= 3 && rightAnswers < 5){
            result_rate.innerHTML = '<h3>Rate: good you usually talk to me</h3>'
        }else if(rightAnswers >= 1 && rightAnswers < 3){
            result_rate.innerHTML = "<h3>Rate: you don't know me well</h3>"
        }else if(rightAnswers < 1){
            result_rate.innerHTML = "<h3>Rate: you don't know me and who I am</h3>"
        }else{
            result_rate.innerHTML = "<h3>Rate: perfect! you know me well and we always talk</h3>"
        }
        buttonResultContainer.style.display = 'none'
    }
}
function change(){

    if(submit.innerHTML == 'Submit'){
        submit.innerHTML = 'Next'
        submit.style.backgroundColor = 'green'
    }else{
        submit.innerHTML = 'Submit'
        submit.style.backgroundColor = ''
    }
    
    if(submit.innerHTML == 'Submit'){
        v++
        
        for(let i = v;i < list_questions.length;i++){
            list_questions[i].style.display = 'block'
            list_questions[i - 1].style.display = 'none'
            ques_num.innerHTML = `Question number: ${i + 1} / 5`
            break;
        }
        
    }
}


