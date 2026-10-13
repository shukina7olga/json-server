import { render } from "./render"

export const editUsers = () => {
    const tbody = document.getElementById('table-body')
    const form = document.querySelector('form')
    const nameInput = document.getElementById('form-name')
    const emailInput = document.getElementById('form-email')
    const childrenInput = document.getElementById('form-children')

    tbody.addEventListener('click', e => {
        if (e.target.closest('.btn-edit')) {
            const tr = e.target.closest('tr')
            const id = tr.dataset.key
            
            userService.getUser(id).then(user => {
                nameInput.value = user.name
                emailInput.value = user.email
                childrenInput.checked = user.children

                form.dataset.method = id// было form.dataset.method = 'edit'
            })
        }
    })

    form.addEventListener('submit', e => {
        e.preventDefault()

        if (form.dataset.method) {
            const id = form.dataset.method
            const user = {
                name: nameInput.value,
                email: emailInput.value,
                children: childrenInput.checked,
                permissions: false 
            }

            userService.editUser(id, user).then(() => {
                userService.getUsers().then(users => { //после успешного ответа получим всех юзеров
                    render(users) // и отправим в функцию рендер
                    form.reset()
                    form.removeAttribute('data-method')
                });
            })
        }

    })
}