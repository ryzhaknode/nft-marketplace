const ApiError = require("../error/ApiError");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

const { User } = require("../models/models");

class UserController {
  async registration(req, res, next) {
    const { name, email, password, interests, role } = req.body;

    if (!email || !password) {
      return next(ApiError.badRequest("Dont correct email or password"));
    }

    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return next(ApiError.badRequest("User with this email is exist"));
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const user = await User.create({ email,name, role, interests, password: hashPassword });

    const token = generateJwt(user.id, user.email, user.role);

    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return next(ApiError.internal("User is not found"));
    }

    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("This is not correct password"));
    }

    const token = generateJwt(user.id, user.email, user.role);

    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
}

module.exports = new UserController();
