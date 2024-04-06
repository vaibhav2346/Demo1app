const rout = require('../control/controls')
const exp = require('express')
const router = exp.Router();

router.post('/adddata/', rout.adddata)
router.get('/fetchdata/',rout.fetchdata)
router.delete('/deletdata/:idk', rout.delete)
router.put('/updatedata/:idk', rout.update)

module.exports = router;