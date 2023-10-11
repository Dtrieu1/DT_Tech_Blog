const router = require('express').Router();
const userRoutes = require('./userRoute');
const projectRoutes = require('./postRoute')

router.use('/users', userRoutes);
router.use('/posts', projectRoutes);

module.exports = router;
