//routeing for different pages.
const router = require('express').Router();
const path = require('path');

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

router.get('/stats', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

router.get('/exercise', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

module.exports = router;