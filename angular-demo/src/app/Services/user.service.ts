import { Injectable } from "@angular/core"
import { loggerService } from "./logger.service"


@Injectable()

export class UserService{

    constructor (private newUser: loggerService) {

    }

    users = [
        {name: 'John', status: 'active'},
        {name: 'Mark', status: 'inactive'},
        {name: 'Steve', status: 'active'},
    ]

    addNewUser(name: string, status: string) {
        this.users.push({name: name, status: status})
        this.newUser.LogMessage(name, status);
    }
}