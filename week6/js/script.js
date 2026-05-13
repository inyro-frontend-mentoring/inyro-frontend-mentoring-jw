const form = document.querySelector('#resolve-form');
const input = document.querySelector('#resolve-input');
const board = document.querySelector('#board');
/*새로고침 막기위해*/
form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const value = input.value;
    console.log("api 요청을 시작합니다.")


    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const quote = data.slip.advice;

    console.log(`명언 : ${data.slip.advice}`)

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3> 다짐 : ${value}</h3>
        <p> 조언 : ${quote} </p>
    `;
    board.appendChild(card);

    input.value = '';
});
