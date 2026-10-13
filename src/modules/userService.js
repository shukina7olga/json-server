export class UserService {
    _fetchData(url) {
        return fetch(url).then(response => {
            if (!response.ok) {
                throw new Error('Ошибка запроса')
            }
            return response.json()
        })
    }

    _sendData(url, method = 'POST', data = {}) {
        const options = {
            method: method,
            headers: {
                "Content-Type": "application/json",
            }
        }

        if (method !== 'GET' && method !== 'DELETE') {
            options.body = JSON.stringify(data)
        }

        return fetch(url, options).then(response => {
            if (!response.ok) {
                throw new Error('Ошибка запроса')
            }
            return response.json()
        })
    }

    getUsers() {
        return this._fetchData('http://localhost:7571/users')
    }

    addUser(user) {
        return this._sendData('http://localhost:7571/users', 'POST', user)
    }

    removeUser(id) {
        return this._sendData(`http://localhost:7571/users/${id}`, 'DELETE')
    }

    changeUser(id, data) {
        return this._sendData(`http://localhost:7571/users/${id}`, 'PATCH', data)
    }

    getUser(id) {
        return this._fetchData(`http://localhost:7571/users/${id}`)
    }

    editUser(id, user) {
        return this._sendData(`http://localhost:7571/users/${id}`, 'PUT', user)
    }

    filterUsers(filterOption) {
        return this._fetchData(`http://localhost:7571/users?${filterOption}=true`)
    }

    getSortUsers(sortOption) {
        return this._fetchData(`http://localhost:7571/users?_sort=${sortOption.name}&_order=${sortOption.value}`)
    }

    getSearchUsers(str) {
        return this._fetchData(`http://localhost:7571/users?name_like=${str}`)
    }
}