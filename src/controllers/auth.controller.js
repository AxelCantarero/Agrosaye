import { registerUser, loginUser } from "../services/user.service.js";

export const register = async (req, res) => {
  try {
    const { nombreUsuario, contrasena } = req.body;

    if (!nombreUsuario || !contrasena) {
      return res.status(400).json({ error: "Faltan datos requeridos" });
    }

    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(" Error en register:", error);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { nombreUsuario, contrasena } = req.body;

    if (!nombreUsuario || !contrasena) {
      return res.status(400).json({ error: "Faltan datos requeridos" });
    }

    const { user, token } = await loginUser({ nombreUsuario, contrasena });

    res.json({
      message: "Login exitoso",
      token,
      user: {
        id: user.id,
        nombreUsuario: user.nombreUsuario
        
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};