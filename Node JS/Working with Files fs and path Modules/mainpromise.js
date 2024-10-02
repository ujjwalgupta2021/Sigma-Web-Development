import fs from "fs/promises"

let a = await fs.readFile("test.txt")

let b = await fs.appendFile("test.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)