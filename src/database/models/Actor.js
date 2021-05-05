module.exports = (sequelize,dataTypes) => {
    let alias = "Actor";
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        actor_id : {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        movie_id : {
            type: dataTypes.INTEGER,
            allowNull: true
        }
    
    };
    let config = {
        tableName: "actor_movie",
        timestamps: false
    };
    const Actor = sequelize.define (alias,cols,config)


    return Actor;
}