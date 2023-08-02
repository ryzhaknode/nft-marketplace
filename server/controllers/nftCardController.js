const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");
const { NftCard } = require("../models/models");

class NftCardController {
  async create(req, res, next) {
    try {
      const {
        name,
        description,
        interests,
        images,
        price,
        authorName,
        companyName,
      } = req.body;

      const nftCard = await NftCard.create({
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
  async getOne(req, res) {}
}

module.exports = new NftCardController();
