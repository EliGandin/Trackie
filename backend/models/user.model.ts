export class User {
  // id: number; //TODO: FIX
  name: string;
  email: string; //TODO: email validation
  password: string;

  constructor(name: string, email: string, password: string) {
    // this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
