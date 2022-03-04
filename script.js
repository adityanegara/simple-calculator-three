const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');
const addButton = document.getElementById('addButton');
const result = document.getElementById('result');

addButton.addEventListener('click', ()=>{
    //mengambil nilai dari input
    const inputOneValue = parseInt(inputOne.value);
    const inputTwoValue = parseInt(inputTwo.value);
    const addedResults = inputOneValue + inputTwoValue;
    result.innerHTML = addedResults;
});
