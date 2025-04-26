const { registerUserService, loginUserService } = require('../services/authService');

const register = async (req, res) => {
    console.log('controller');
    try{
        const { email, password, name } = req.body;
        await registerUserService(email, password, name);
        res.status(201).json({message: 'User created successfully!'});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const token = await loginUserService(email, password);
        return res.json({ token });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = { register, login };