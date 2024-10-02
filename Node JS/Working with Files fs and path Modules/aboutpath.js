import path from "path"

let myPath = "C:\\Users\\Dell\\Downloads\\Sigma Web Development Course\\Sigma-Web-Dev-Course\\test.txt"
console.log(path.extname(myPath))

console.log(path.dirname(myPath))
console.log(path.basename(myPath))

console.log(path.join("c:/", "programs\\test.txt"))