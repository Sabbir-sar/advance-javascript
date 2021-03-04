//falsy:
// 0 , "" ,undefined, null, NaN, 
//Truthy: others, '0', ' ', [],{}   

// let name = ' ';
/*let name = 12;
if (name || name == 0) {
    console.log('condition is true');
}
else{
    console.log('condition is false');
}*/
const nums = 15;
if (nums == 13 || nums) {
    console.log('coondition is true');
}
else{
    console.log('condition is false');
}