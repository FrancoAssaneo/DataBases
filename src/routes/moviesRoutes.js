const express = require('express');
const { route } = require('.');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
//CREACION NUEVA PELICULA
router.get ('/movies/add',moviesController.add);
router.post ('/movies/create',moviesController.create);
//EDITAR PELICULA
router.get ('/movies/edit/:id', moviesController.edit);
router.post ('/movies/update/:id', moviesController.update);

//ELIMINAR PELICULA
router.get ('/movies/delete/:id', moviesController.delete);
router.post ('/movies/destroy/:id', moviesController.destroy);

router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);


module.exports = router;


