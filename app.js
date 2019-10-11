const userListNode = document.querySelector('user-list');
let users = [
    { id: 1, name: 'Mike', department: 'Marketing' },
    { id: 2, name: 'Alex', department: 'Development' },
    { id: 3, name: 'Juan', department: 'Sales' },
    { id: 4, name: 'Juan', department: 'Sales' },
];


class UserListItem {
    constructor({name, department, onClick}) {
        this.el = document.createElement('div');
        this.el.className = 'user-list-item';
        this.el.addEventListener('click', onClick);

        const nameNode = document.createElement('div');
        nameNode.className = 'user-list-item__info';
        nameNode.innerText = 'Name: ' + name;

        const departmentNode = document.createElement('div');
        departmentNode.className = 'user-list-item__info';
        departmentNode.innerText = 'Department: ' + department;

        this.el.appendChild(nameNode);
        this.el.appendChild(departmentNode);
    }

    render() {
        return this.el;
    }
}

class UserList {
    constructor() {
        this.el = document.createElement('div');
        this.el.className = 'user-list';
    }

    render(users = []) {
        this.el.innerHTML = '';

        users
            .map(({id, name, department}) => new UserListItem({name, department, onClick: () => removeUser(id)}))
            .forEach(uli => this.el.appendChild(uli.render()));
        console.log(this.el);
        return this.el;
    }
}


function removeUser(id) {
    users = users.filter(u => u.id !== id);
    console.log(users);
    render(users);
}

const userList = new UserList();
document.body.appendChild(userList.render());


function render(users) {
    userList.render(users);
}
console.log(users);
render(users);
