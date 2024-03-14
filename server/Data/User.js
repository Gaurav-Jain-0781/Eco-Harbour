import bcrypt from 'bcryptjs'

const users = [
    {
        first_name :"User1", 
        user_name: "u1",
        password: bcrypt.hashSync("123456", 10),
        email: "gauravjain0781@gmail.com",
        contact_no : 9610078193
    }, 
    {
        first_name :"User2", 
        user_name: "u2",
        password: bcrypt.hashSync("123456", 10),
        email: "gauravjain071@gmail.com",
        contact_no : 9610078191
    }, 
    {
        first_name :"User3", 
        user_name: "u3",
        password: bcrypt.hashSync("123456", 10),
        email: "gauravjain781@gmail.com",
        contact_no : 9610078192
    }, 
    {
        first_name: "Gaurav", 
        user_name: "gaurav2241129", 
        password: bcrypt.hashSync("gaurav@0781", 10),
        email: "gauravjain81@gmail.com",
        contact_no: 9610078190,
        isAdmin: true
    },
    {
        first_name: "Greesham", 
        user_name: "greeshma2241130", 
        password: bcrypt.hashSync("greeshma@030", 10),
        email: "greeshamgirish@gmail.com",
        contact_no: 8921172793, 
        status: "Active", 
        isAdmin: true
    },
    {
        first_name: "Navaneeth", 
        user_name: "navaneeth2241144", 
        password: bcrypt.hashSync("navaneeth@44", 10),
        email: "navaneeth23@gmail.com",
        contact_no: 9633914128, 
        status: "Active", 
        isAdmin: true
    }
]

export default users
