let score: number | string | boolean = 33
score = 44
score = "55"
score = true

type User2 = {
    name: string;
    id: number;
}
type Admin2 = {
    username: string;
    id: number;
}

let priyank2: User2 | Admin2 = {
    name: "Priynk",
    id: 1234
}

priyank2 = {
    username: "pr",
    id: 1234
}

function getDbId(id: number | string){
    // making some api calls
    console.log("Db id is: ", id)
}

getDbId(3)
getDbId("3")

function getNewId(id: number | string) {
    if(typeof id === "string") {
        id.toLowerCase();
    } else {
        id + 2
    }
}

// Arrays
const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]

// either be all number or all things
const data3: number[] | string[] = ["1", "2", "3"]

// can be both number or string
const data4: (number | string | boolean)[] = ["1", "2", "3", 4, 5, 6, true]

// Fix assignment
let pi:3.14 = 3.14
// pi = 3.15

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew"
