const db = require ('../database/models');
/* const Op = db.Sequelize.Op; */
module.exports = {
    list: function (req,res) {
        db.Genero.findAll()
            .then (function(generos){
                
                res.render ("genresList", {genres:generos})
            })
            .catch (error => {
                res.send ("ERROR!")
            })
    },
    detail: function (req,res) {
        db.Genero.findByPk(req.params.id)
            .then (function(generos){
                res.render ('genresDetail', {genre:generos})
            })
            .catch (error => {
                res.send ("ERROR!")
            })
    }
};    