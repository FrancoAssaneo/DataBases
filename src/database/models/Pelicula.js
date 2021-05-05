module.exports = (sequelize,dataTypes) => {
    let alias = "Pelicula";
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        title : {
            type: dataTypes.STRING,
            allowNull: true
        },
        rating : {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        awards : {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: true
        },
        length : {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        genre_id : {
            type: dataTypes.INTEGER,
            allowNull: true
        }
    };
    let config = {
        tableName: "movies",
        timestamps: false
    };
    const Pelicula = sequelize.define (alias,cols,config);


    return Pelicula;
};