const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>
{
    res.json({message: 'Users'});
});

router.get(`/username`, (req, res) =>
{
    res.json({message: 'User'});
});

module.exports = router;