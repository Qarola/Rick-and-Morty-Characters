const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("episode", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    episode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    airDate: {
      type: DataTypes.STRING,
    },
    charactrs: {
      type: DataTypes.STRING,
    },
  },  {timestamps: false});
};
