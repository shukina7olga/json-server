import { render } from "./render"

export const sortUsers = () => {
    const sortChildren = document.getElementById('sort-is-children')
    let isSort = false
    sortChildren.style.cursor = "pointer"

    sortChildren.addEventListener('click', () => {
        userService.getSortUsers({
            name: 'children',
            value: isSort ? 'asc' : 'desc'
        }).then(users => {
            render(users)
        })
        isSort = !isSort
    })
}