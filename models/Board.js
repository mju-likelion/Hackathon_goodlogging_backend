const Sequelize = require('sequelize');

module.exports = class Board extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        owner: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        memo: {
          type: Sequelize.STRING(500),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: 'Board',
        tableName: 'boards',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
  static associate(db) {
    db.Board.hasOne(db.File, {
      foreignKey: 'target',
      sourceKey: 'id',
    });
    db.Board.belongsTo(db.User, {
      foreignKey: 'owner',
      targetKey: 'id',
    });
  }
};
