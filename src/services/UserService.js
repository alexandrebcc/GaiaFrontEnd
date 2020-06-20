 import { HttpService } from "./HttpService"; 

class UserService extends HttpService {
    constructor() {
        super("/users");
    }
}

export const user = new UserService();