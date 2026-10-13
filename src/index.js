import { render } from "./modules/render";
import { addUsers } from "./modules/addUsers";
import { UserService } from "./modules/userService";
import { removeUsers } from "./modules/removeUsers";
import { changePermissions } from "./modules/changePermissions";
import { editUsers } from "./modules/editUsers";
import { filterUsers } from "./modules/filterUsers";
import { sortUsers } from "./modules/sortUsers";
import { searchUsers } from "./modules/searchUsers";

window.userService = new UserService()

const errorBlock = document.getElementById('error-block')

userService.getUsers()
    .then(data => {
        render(data)
    })
    .catch(error => {
        console.error(error)
        errorBlock.textContent = 'Произошла ошибка, данных нет!'
    })

addUsers()
removeUsers()
changePermissions()
editUsers()
filterUsers()
sortUsers()
searchUsers()