import { render } from "./render"

export const addUsers = () => {
    const form = document.querySelector('form')
    const nameInput = document.getElementById('form-name')
    const emailInput = document.getElementById('form-email')
    const childrenInput = document.getElementById('form-children')

    form.addEventListener('submit', e => {
        e.preventDefault()

         //получаем всех юзеров, чтобы вычислить следующий id
        //  const users = userService.getUsers()
        //  const maxId = users.reduce((max, u) => {
        //      const n = parseInt(u.id, 10)
        //      return isNaN(n) ? max : Math.max(max, n)
        //  }, 0)

        if (!form.dataset.method) {
            const user = {
                // id: String(maxId + 1), //у меня генерировались некорректные id
                name: nameInput.value,
                email: emailInput.value,
                children: childrenInput.checked,
                permissions: false 
            }

            userService.addUser(user).then(() => { // сперва сохраним пользователя. получим ответ от сервера
                userService.getUsers().then(users => { //после успешного ответа получим всех юзеров
                    render(users) // и отправим в функцию рендер
                    form.reset()
                });
            })
        }

    })
}