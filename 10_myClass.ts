// class User3 {
//     public email: String
//     private name: String
//     readonly city: String = "Jaipur"
//     constructor(email: String, name: String) {
//         this.email = email
//         this.name = name
//         // this.city = "New City"
//     }
// }

class User3 {
    private _courseCount = 1

    readonly city: String = "Jaipur"
    constructor(
        public email: String, 
        public name: String,
        private userId: string
    ) {
        this.email = email
        this.name = name
        this.userId = userId
        // this.city = "New City"
    }

    private deleteToken() {
        console.log("Token deleted")
    }

    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if(courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const priyank = new User3("priyank@gamil.com", "Priyank", "abc")