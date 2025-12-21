const User = {
    name: "Priyank",
    email: "priyank@gmail.com",
    isActive: true
}

function createUser({name, isPaid}: {name: string, isPaid: boolean}) {}

let newUser = {name: "Priyank", isPaid: false, email: "priyank@gmail.com"}

createUser(newUser)

function createCourse(): {name: string, price: number} {
    return {name: "reactjs", price: 399}
}

// type
type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser1(user: User): User {
    return {name: "", email: "", isActive: true}
}
createUser1({name: "", email: "", isActive: true})

// 
type newUser = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number
}

let myUser: newUser = {
    _id: "1234",
    name: "Priyank",
    email: "priyank@gmail.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "pvr@gmail.com"