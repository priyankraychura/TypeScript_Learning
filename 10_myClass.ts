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
    constructor(
        public email: String, 
        public name: String,
        private userId: string
    ) {
        this.email = email
        this.name = name
        // this.city = "New City"
    }
}

const priyank = new User3("priyank@gamil.com", "Priyank", "abc")