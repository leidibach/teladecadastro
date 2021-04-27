export class Usuario{

    id?: number;
    username: String;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    userStatus?: number;

    constructor(){
        this.username = "";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
        this.phone = "";
    }
}
