import bcrypt from 'bcryptjs'

const users = [
    {
        first_name :"User1", 
        user_name: "u1",
        password: bcrypt.hashSync("123456", 10),
        email: "gauravjain0781@gmail.com",
        contact_no : 9610078190
    }, 
    {
        first_name :"User2", 
        user_name: "u2",
        password: bcrypt.hashSync("123456", 10),
        email: "gauravjain071@gmail.com",
        contact_no : 9610078190
    }, 
    {
        first_name :"User3", 
        user_name: "u3",
        password: bcrypt.hashSync("123456", 10),
        email: "gauravjain781@gmail.com",
        contact_no : 9610078190
    }
]

export default users
