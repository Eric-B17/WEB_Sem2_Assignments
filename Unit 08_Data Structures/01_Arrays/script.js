const numbers = []

for(let i = 0; i < 10; i++){
    let num = Math.floor(Math.random() * 10) + 1;
    if(num % 2 !== 0){
        numbers.push(num);
    }

}


document.getElementById("unsorted").innerHTML = numbers;
numbers.sort(function(a, b){return b - a});
const numbers = [10 + 1];
document.getElementById("sorted").innerHTML = numbers;




//YOUDO:  finish the sort and print to the sorted id

