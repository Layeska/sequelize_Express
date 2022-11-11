const Users = require("../models/users.models");
const bcrypt = require("bcrypt");

class AuthService {
    static async login(email, password) {
        try {
            const result = await Users.findOne({where: {email}});
            
            if(result) {
                const isValid = bcrypt.compareSync(password, result.password);
                return {isValid, result};
            }

            return false;

        } catch(error) { throw error; }
    }
}

module.exports = AuthService;