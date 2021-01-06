const mark = document.querySelector('.marks')
const countBtn = document.querySelector('.countAverage')
const input = document.querySelector('.addMark')
const quantityMarks = document.querySelector('.quantity-marks')

let marksArr = [];
let count;

const addMarks = () => {

    let number = parseInt(input.value)
    marksArr.push(number);

    count = marksArr.reduce((a, b) => a + b)

    mark.innerHTML = `Suma ocen: <span>${count}</span>`;
    input.value = ''
    input.focus()

    // for (let i = 0; i < marksArr.length; i++) {
        quantityMarks.innerHTML = `Ilość ocen: ${marksArr.length}`;
    // }

}
const showAverage = () => {
    if (marksArr.length !== 0) {
        let score = count / marksArr.length;
        mark.innerHTML = `Twoja średnia: <span>${score}</span>`;
        marksArr = []
    }else{
        mark.innerHTML = 'Musisz podać ocene!'
        input.focus()
    }
}

input.addEventListener("keyup", addMarks)
countBtn.addEventListener("click", showAverage)

//można też zrobić to wszystko za pomocą REST OPERATORA