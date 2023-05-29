const {Router} = require('express');
const router = Router();
const {drinksController} = require('../controllers/drinks.controller')

router.get('/drinks',drinksController.getDrinks);
router.get('/drinks/in-stock',drinksController.getRemainigDrinks)
router.get('/drinks/:id', drinksController.getDrinksById)
router.post('/drinks',drinksController.postDrinks)
router.delete('/drinks/:id',drinksController.deleteDrinks)
router.patch('drinks/:id',drinksController.patchDrinks)
module.exports = router