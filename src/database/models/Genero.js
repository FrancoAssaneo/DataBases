module.exports = (sequelize,dataTypes) => {
    let alias = "Genero";
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        name : {
            type: dataTypes.STRING,
            allowNull: true
        },
        ranking : {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        active : {
            type: dataTypes.INTEGER,
            autoIncrement: false,
            allowNull: true
        }
    };
    let config = {
        tableName: "genres",
        timestamps: false
    };
    const Pelicula = sequelize.define (alias,cols,config)


    return Pelicula;
}