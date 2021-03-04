import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Tom Tomo',
        email: 'Tom@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Big Mike',
        email: 'Mike@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;