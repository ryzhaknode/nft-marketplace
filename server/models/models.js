const sequelize = require("../db");

const { v4: uuidv4 } = require("uuid");

const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  name: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  interests: {
    type: DataTypes.ARRAY(DataTypes.JSON),
  },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

// const BasketNft = sequelize.define("basket_device ", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
// });

const NftCard = sequelize.define("nft_card", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  nftCodeNumber8: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: function () {
      return uuidv4().replace(/-/g, "").slice(0, 8);
    },
    unique: true,
  },

  interests: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,
  },

  images: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,
  },

  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  authorName: { type: DataTypes.STRING, allowNull: false },
  companyName: { type: DataTypes.STRING, allowNull: false },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

User.hasMany(Rating);
Rating.belongsTo(User);

User.hasMany(NftCard);
NftCard.belongsTo(User);

NftCard.hasOne(User);
User.belongsTo(NftCard);

NftCard.hasMany(Rating);
Rating.belongsTo(NftCard);

module.exports = { User, Rating, NftCard };
