import User from "../db/model/User.js";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const page = async (req, res) => {
  res.render("login");
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const login = (req, res) => {
  res.send("login");
};

export default { page, login };
