import {test as myTest} from "@playwright/test";

// type koushik = {
//     age : number,
//     email : string
// }

// const myFixture = myTest.extend<koushik>({
//     age: 27,
//     email: "koushik350@gmail.com"

// })

const myFixture = myTest.extend<{
    age : number,
    email : string
}> ({
    age: 27,
    email: "koushik350@gmail.com"

})



export const test = myFixture