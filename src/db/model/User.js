import { DataTypes, Model, Sequelize } from "sequelize";

export default class User extends Model {
  /**
   * @param {Sequelize} sequelize
   */
  static init(sequelize) {
    super.init(
      {
        id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
        },
        login: DataTypes.STRING,
      },
      { sequelize, tableName: "User" }
    );
  }
}
