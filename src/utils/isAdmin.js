
 module.exports = function isAdmin(req, res, next) {
    /*if (req.isAuthenticated() && req.user.role === 'admin') {
      return next();
    }
    return res.status(403).json({ message: 'Access denied' });
    */
   console.loh('isAdmin middleware passed');
   next();
  };

