express = require('express');
router = express.Router();

router.get('/', (req, res) => {
   res.send('api works!');
});

router.get('/auth', (req, res) => {
    res.send({token: '45jh3@g34!525exx=', name: 'Otto Normal'});
});

module.exports = router;
