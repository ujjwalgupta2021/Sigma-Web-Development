
const fs = require("fs")
// const fs = require("fs/promises")
 
console.log("starting")
// fs.writeFileSync("test.txt", "He is a good boy")

fs.writeFile("test2.txt", "He is a good boy 2", ()=>{
    console.log("done")
    fs.readFile("test2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("test.txt", " new", (e, d)=>{
    console.log(d)
})

console.log("ending")
