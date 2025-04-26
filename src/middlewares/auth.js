const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.header('Authorization').split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access Denied, no token provided' });

    console.log(token);
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: err.message });
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;