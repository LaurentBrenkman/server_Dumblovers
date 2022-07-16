'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userProfile.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "idUser",
        }
      })
    }
  };
  userProfile.init({
    phoneNumber: DataTypes.STRING,
    user_profile: DataTypes.STRING,
    following: DataTypes.STRING,
    followers: DataTypes.STRING,
    idUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userProfile',
  });
  return userProfile;
};