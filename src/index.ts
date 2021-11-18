const len: number = 10000000;
const toto: Array<number> | number[]
    = Array(len)
for(let i = 0;i<len;i++){
    toto[i] = Math.round(Math.random() * 10)
}

const logiqueDeTri = (a: number,b:number)=>{
    return a-b
}

function bench(): number{
    const debut: number = Date.now()
    const ret: Array<number> = toto.sort(logiqueDeTri)
    return Date.now() - debut
}

console.log(bench())