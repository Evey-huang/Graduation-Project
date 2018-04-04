/**
 * @file token验证
 */

const config = require("../config");
const jwt = require("jsonwebtoken");
export default async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).send("No token detected.");
  }
  let tokenContent;
  try {
    tokenContent = await jwt.verify(token, config.token);
  } catch (err) {
    // Token 过期
    if (err.name === "TokenExpiredError") {
      res.status(401).send("Token expried");
    }
    // Token 验证失败
    res.status(401).send("Invalid Token");
  }
  return await next();
};
