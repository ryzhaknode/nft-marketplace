const Router = require("express");
const router = new Router();

const userRouter = require("./userRoutes");
const nftCardRoutes = require("./nftCardRoutes");
const ratingRoutes = require("./ratingRoutes");

router.use("/user", userRouter);
router.use("/nftcard", nftCardRoutes);
router.use("/rating", ratingRoutes);

module.exports = router;
