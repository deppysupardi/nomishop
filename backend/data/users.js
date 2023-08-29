import bcrypt from 'bcryptjs';

const users =[
    {
        name:'Admin DS',
        email: 'teikoku.alexander@gmail.com',
        password: bcrypt.hashSync('@Admin123', 10),
        isAdmin: true,
    },
    {
        name:'Johndoe',
        email: 'john@email.com',
        password: bcrypt.hashSync('@Admin123', 10),
        isAdmin: true,
    },
    {
        name:'Jane DS',
        email: 'jane@email.com',
        password: bcrypt.hashSync('@Admin123', 10),
        isAdmin: true,
    }
]

export default users;