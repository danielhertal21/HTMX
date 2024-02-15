import jwt from "jsonwebtoken";
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export default function Auth(req, res, next) {
  if (!req.cookies.auth) {
    // return res.redirect("/login");
  }
  next();
}
