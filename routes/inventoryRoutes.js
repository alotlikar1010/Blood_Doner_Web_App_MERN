const express = require('express')
const authMiddle = require('../controllers/authMiddleware')
 const {  createInventoryController , getInventoryController} = require('../controllers/inventoryController');
// const authMiddle = require('../controllers/authMiddleware');
const router = express.Router()


// routes

//Add Inventory 

router.post('/create-inventory', authMiddle,   createInventoryController );

router.get('/get-inventory', authMiddle,   getInventoryController );


module.exports = router;