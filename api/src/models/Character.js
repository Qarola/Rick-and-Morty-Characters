const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     specie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
    },
    episode: {
      type: DataTypes.STRING,

    },
    image: {
      type: DataTypes.STRING
    }
  },  {timestamps: false});
};
