const express = require('express')
const router = express.Router()
const obraController = require('../controllers/obraController');

router.get('', obraController.getAll);
router.post('', obraController.create);
router.get('/:nome', obraController.getByName); 
router.put('/:nome', obraController.update); 
router.delete('/:nome', obraController.delete); 

module.exports = router