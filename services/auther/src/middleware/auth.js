import jwt from 'jsonwebtoken';

export const verifyToken = (role = null) => {
  return (req, res, next) => {
    try {
      let token = req.cookies?.token;

      if (!token && req.headers.authorization?.startsWith('Bearer ')) {
        token = req.headers.authorization.split(' ')[1];
      }

      if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      // If a role is required, check it
      if (role && decoded.role !== role) {
        return res.status(403).json({ message: 'Forbidden: Access denied' });
      }

      next();
    } catch (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
  };
};
