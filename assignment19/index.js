function divBy2(tanu){
    let x = tanu/2
    return x
}
const x = [11,21,31,41,51] 
const y = [1,2,3,4,5] 
const z = [8,7,6,5,3]

function divEachElementBy2(arr){
    let y = []
    for (let i = 0; i < arr.length ; i++) {
        const answer = divBy2(arr[i])
        y.push(answer)
    }
    return y
}

const result1 = divEachElementBy2(x)
const result2 = divEachElementBy2(y)
const result3 = divEachElementBy2(z)

console.log(result1)
console.log(result2)
console.log(result3)
