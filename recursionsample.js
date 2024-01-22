


function recursion(i){
    if(i==5){
        return ""
    }
    return recursion(i+1)+i

}

let result=recursion(0)
console.log(result);