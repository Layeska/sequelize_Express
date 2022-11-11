const AuthService = require("../services/auth.service");

const userLogin = async (req, res, next) => {
    try {
        const {email, password } = req.body;
        const result = await AuthService.login(email, password);
        result ? res.status(200).json({message: "Logeado!!!"}) : res.status(401).json({message: "Contraseña incorrecta!"});
    } catch(error) { 
        next({
            message: "Upps, algo salio mal con la auntenticación",
            status: 401,
            errorContent: error
        });
    }
}

module.exports = userLogin;
