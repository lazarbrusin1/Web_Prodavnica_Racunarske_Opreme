import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "admin@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Lazar Brusin",
        email: "lazar@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "Kupac Test",
        email: "kupac@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    }
];

export default users;
