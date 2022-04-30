
import User from "../models/user.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const singUp = async (req, res) =>{

    //encriptando la contraseña
    let password = bcrypt.hashSync(req.body.contraseña, 10)

    await User.create({
        //creando usuario
        dni: req.body.dni,
        nombre: req.body.nombre,
        primer_apellido: req.body.primer_apellido,
        segundo_apellido: req.body.segundo_apellido,
        email: req.body.email,
        contraseña: password
    }).then(user => {
        //generando token 
        let token = jwt.sign({ user: user}, "secret", {
            expiresIn: "24h"
        });
        //devolviendo data en json
        res.status(200).json({
            user: user,
            token: token
        });
    }).catch(err => {
        res.status(500).json(err);
    });
};

export default {
    singUp,
}