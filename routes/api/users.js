const router = require('express').Router();
const usersCtrl = require('../../controllers/api/users');
const auth = require('../../config/ensureLoggedIn');


router.post('/', usersCtrl.create);
router.post('/login',usersCtrl.login);
router.get('/check-token', auth, usersCtrl.checkToken)

module.exports = router;