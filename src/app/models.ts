export class Person {

    constructor(
        public name: string,
        public vorname: string,
        public adress: Adress,
        public password: string,
        public email: string,
        public shirtSize: string,
        public payment: string
    ) { }
}

export class Adress {
    constructor(
        public street?: string,
        public postCode?: string,
        public location?: string
    ) { }
}