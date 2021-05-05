const db = require ('../database/models');
const Op = db.Sequelize.Op;
const moment = require ('moment');

module.exports = {
    list: function (req,res) {
        db.Pelicula.findAll()
            .then (function(peliculas){
                
                res.render ("moviesList", {movies:peliculas})
            })
            .catch (error => {
                res.send ("ERROR!")
            })
    },
    detail: function (req,res) {
        db.Pelicula.findByPk(req.params.id)
            .then (function(peliculas){
                res.render ('moviesDetail', {movie:peliculas})
            })
            .catch (error => {
                res.send ("ERROR!")
            })
    },
    new: function(req,res) {
        db.Pelicula.findAll({
            order: [
                ['id', 'DESC']
            ]
        })
            .then (function(peliculas){
                res.render ('newestMovies', {movies:peliculas})
            })
            .catch (error => {
                res.send ("ERROR!")
            })
    },
    recomended: function(req,res) {
        db.Pelicula.findAll({
            where: {
                release_date: {[Op.between]: ['2008-03-04 00:00:00' , '2012-05-04 00:00:00']}
            }
        })
            .then (function(peliculas){
                res.render ('recommendedMovies', {movies:peliculas})
            })
            .catch (error => {
                res.send ("ERROR!")
            })
    },
    add: function (req,res) {
        res.render ('crearPelicula');
    },
    create: function (req,res) {
        db.Pelicula.create ({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        })
            .then (function (peliculas){
                res.redirect ('/movies');
            })

            .catch (error => {
                res.send ("ERROR!" + error)
            })
        
    },
    edit: function (req,res) {
        db.Pelicula.findByPk (req.params.id)
        .then (function(peliculas){
            /* return  console.log(peliculas.release_date); */ 
            /* new Date(peliculas.release_date).toLocaleDateString(); */
            /* moment(new Date (peliculas.release_date)).locale('es-us').format('YYYY-MM-DD'); */
           /*  return res.send (peliculas); */
            res.render ('editMovie', {movie:peliculas})
        })
        .catch (error => {
            res.send ("ERROR!" + error)
        })
    },
    update: function (req,res) {
        db.Pelicula.update (
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length
            },
            {
                where :{
                    id: req.params.id
                }
            }
        )
            .then (function (peliculas){
                res.redirect ('/movies');
            })

            .catch (error => {
                res.send ("ERROR!" + error)
            })
    },
    destroy: function (req,res) {
        db.Pelicula.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect ('/movies');
    },
    delete: function (req,res) {
        db.Pelicula.findByPk (req.params.id)
        .then (function(peliculas){
            res.render ('eliminarPelicula', {movie:peliculas})
        })
        .catch (error => {
            res.send ("ERROR!" + error)
        })
    }
};

