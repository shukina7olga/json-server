import { UserService } from "./userService"
import { render } from "./render"

export const removeUsers = () => {
    const tbody = document.getElementById('table-body')

    tbody.addEventListener('click', e => {
        if (e.target.closest('.btn-remove')) {
            const tr = e.target.closest('tr')
            const id = tr.dataset.key
            
            userService.removeUser(id).then(res => {
                userService.getUsers().then(users => { //после успешного ответа получим всех юзеров
                    render(users) // и отправим в функцию рендер
                });
            })
        }
    })
}