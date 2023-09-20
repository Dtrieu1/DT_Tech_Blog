const router = require('express').Router();

const posts = [
    {
        post_title: 'Is this the new apple?',
        post_description: 'Just curious if anyone who can be the next tech company like apple'
    },
    {
        post_title: 'Why do you think Yahoo got purchased?',
        post_description: 'Just curious if anyone still uses Yahoo or is that just old technology'
    }
]

router.get('/', async (req, res) =>{
    res.render();
})

router.get('/login', async (req,res) => {
    res.render();
})

router.get('/signup', async(req, res) => {
    res.render();
})

module.exports = router;