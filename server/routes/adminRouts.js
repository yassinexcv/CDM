const express = require('express');
const router = express.Router();
const { getAdmin,
    addAdmin,
    updateAdmin,
    deletAdmin
} = require('../controllers/adminController');


router.get('/', getAdmin)

router.post('/add', (addAdmin))

router.put('/update/:id', (updateAdmin))

router.delete('/delete/:id', (deletAdmin))










module.exports = router;