export class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    this.id = crypto.randomUUID();

    }

    getRole() {
        return 'User'
    }
}