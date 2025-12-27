const user: (string | number)[] = [123, "Priyank"]

let tUser: [string, number, boolean];
tUser = ['pr', 123, true];

let rgb: [number, number, number] = [255, 123, 112]

type User2 = [number, string]

const newUser: User2 = [112, "priyank@google.com"]

newUser[1] = 'pr.com'
