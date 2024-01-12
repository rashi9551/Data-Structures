let arr=[1,2,3,4,5,6,43,2,1]
let set=new Set(arr)
let set2=new Set([67,56,46,75])

let set3=new Set([...set,...set2])

console.log(set3);
