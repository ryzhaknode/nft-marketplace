const ApiError = require("../error/ApiError");
const { NftCard } = require("../models/models");
const jwt = require("jsonwebtoken");

class NftCardController {
  async create(req, res, next) {
    try {
      const {
        userId,
        name,
        description,
        interests,
        images,
        price,
        authorName,
        companyName,
      } = req.body;

      const nftCard = await NftCard.create({
        userId,
        name,
        description,
        interests,
        price,
        authorName,
        companyName,
        images,
      });

      return res.json(nftCard);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let nftCatds = await NftCard.findAll();
    return res.json(nftCatds);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const nftCard = await NftCard.findOne({
      where: { id },
    });
    return res.json(nftCard);
  }
  async getAllUsersNft(req, res) {
    const { id } = req.params;
    const nftCards = await NftCard.findAll({
      where: { userId: id },
    });
    return res.json(nftCards);
  }
}

module.exports = new NftCardController();
