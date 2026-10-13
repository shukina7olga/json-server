export class UserService {
    getUsers() {
        return fetch('http://localhost:7571/users').then(res => res.json())
    }

    addUser(user) {
        return fetch('http://localhost:7571/users',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
    }

    removeUser(id) {
        return fetch(`http://localhost:7571/users/${id}`, {
            method: 'DELETE'
        }).then(response => response.json())
    }

    changeUser(id, data) {
        return fetch(`http://localhost:7571/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
    }

    getUser(id) {
        return fetch(`http://localhost:7571/users/${id}`).then(response => response.json())
    }

    editUser(id, user) {
        return fetch(`http://localhost:7571/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
    }

    filterUsers(filterOption) {
        return fetch(`http://localhost:7571/users?${filterOption}=true`).then(response => response.json())
    }

    getSortUsers(sortOption) {
        return fetch(`http://localhost:7571/users?_sort=${sortOption.name}&_order=${sortOption.value}`).then(response => response.json())
    }

    getSearchUsers(str) {
        return fetch(`http://localhost:7571/users?name_like=${str}`).then(response => response.json())
    }
}
