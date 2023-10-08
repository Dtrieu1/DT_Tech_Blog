const router = require('express').Router();
const loginRoutes = require('./loginRoute');
const projectRoutes = require('./postRoute')

router.use('/users', userRoutes);
router.use('/posts', projectRoutes);

module.exports = router;
