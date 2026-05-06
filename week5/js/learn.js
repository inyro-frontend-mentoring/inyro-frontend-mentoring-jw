/*let apple = null;
let banana


if(apple === banana){
    console.log(123);
}

let name = `철수`
let intro = `저는 ${name}입니다.`
print(intro);

// 리턴 이후 코드는 실행되지않음.
//funtion f() =  {}*/

const name = prompt('이름을 입력해주세요');
const mbti = prompt('mbti를 입력해주세요')

let addtionText = "";

if (mbti.toUpperCase()[0] === "E" ){
    addtionText = "외향형"

}else if (mbti.toUpperCase()[0] === "I"){
    addtionText = "내향형"   
}else {
    isSuccese = false;
}
const resultBox = document.querySelector("#result");
resultBox.textContent = `${UserName}님의 성격은? ${addtionText}`;