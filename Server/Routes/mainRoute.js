const express=require('express');
const router=express.Router();
const mainController = require('../controller/mainController')
router.post('/country',mainController.addCountry)
router.get('/getcountry',mainController.getCountry)    
router.post('/state',mainController.addState)
router.post('/getstate',mainController.getState)
router.post('/city',mainController.addCity)
router.post('/display',mainController.display)
router.post("/delete",mainController.deletebutton)
router.get("/getdata",mainController.getdata)
module.exports=router;