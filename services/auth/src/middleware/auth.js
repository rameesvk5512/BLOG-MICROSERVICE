import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  try {
    // Try getting token from cookie first
    let token = req.cookies?.token;

    // If not in cookie, try Authorization header
    if (!token && req.headers.authorization) {
      const parts = req.headers.authorization.split(' ');
      if (parts.length === 2 && parts[0] === 'Bearer') {
        token = parts[1];
      }
    }

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (err) {
    console.error('JWT verification failed:', err.message);
    
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Unauthorized: Token expired' });
    } else if (err.name === 'JsonWebTokenError') {
      return res.status(403).json({ message: 'Forbidden: Invalid token' });
    } else {
      return res.status(500).json({ message: 'Internal Server Error: Token validation failed' });
    }
  }
};
