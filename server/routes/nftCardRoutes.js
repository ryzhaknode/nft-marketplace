const Router = require("express");
const nftCardController = require("../controllers/nftCardController");
const router = new Router();

router.post("/", nftCardController.create);
router.get("/", nftCardController.getAll);
router.get("/:id", nftCardController.getOne);
router.get("/user/:id", nftCardController.getAllUsersNft);

module.exports = router;
