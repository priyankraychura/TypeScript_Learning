interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string,
    startTrial(): string
    getCoupon(couponname: string, value: number): number

}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const priyank: Admin = {
    dbId: 1234,
    email: "priyank@gmail.com",
    userId: 12345,
    githubToken: "github",
    role: "admin",
    startTrial: () => {
        return "trial started"
    },
    getCoupon:(name: "priyank", off: 10) => {
        return 10
    }
}

priyank.email = "pvr@gmail.com"
// priyank.dbId = 12345



