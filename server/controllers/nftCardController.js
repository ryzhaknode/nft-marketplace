const ApiError = require("../error/ApiError");
const { NftCard } = require("../models/models");
const jwt = require("jsonwebtoken");

class NftCardController {
  async create(req, res, next) {
    try {
      const {
        token,
        name,
        description,
        interests,
        images,
        price,
        authorName,
        companyName,
      } = req.body;

      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      console.log(decoded);
      const nftCard = await NftCard.create({
        userId: decoded.id,
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
    console.log(req.headers);
    const nftCard = await NftCard.findOne({
      where: { id },
    });
    return res.json(nftCard);
  }
}

module.exports = new NftCardController();
