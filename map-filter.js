/*const numbers = [3,5,6,7,8,];
const output =[];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
    
}
console.log(output);*/

/*const numbers = [3,5,6,7,8,];
function square(element){
    return element * element;
}
numbers.map(function(element, index,array){
    console.log(element, index, array);
})*/

//map use korle output hishabe array dibe
/*const numbers = [3,5,6,7,8,];
function square(element){
    return element * element;
}


const result = numbers.map(function (element) {
    return element * element;
})
    
console.log(result);*/

/*const numbers = [3,5,6,7,8,];
function square(element){
    return element * element;
}

const square = element => element*element;
const square = x => x * x;

const result = numbers.map(function (element) {
    return element * element;
})*/

//map is very important for react
/*const numbers = [3,5,6,7,8,];
const result = numbers.map(x => x * x);
    
console.log(result);*/

// use filter 
/*const numbers = [3,5,6,7,8,];
const bigger = numbers.filter(x => x < 5);
console.log(bigger);*/

//use find
/*const numbers = [3,5,6,7,8,];
const isThere = numbers.find(x => x > 5);
console.log(isThere);*/

const students = [
    {id:34, name:'omor suny'},
    {id:67 , name:'mannaa'},
    {id:46, name:'moyori'},
    {id:87,name:'deepjol'}
]
const names = students.map(s=>s.name);
const ids = students.map(s=>s.id);

const Snames = students.filter(s=>s.name);
const Sids = students.find(s=>s.id);
console.log(Sids);


