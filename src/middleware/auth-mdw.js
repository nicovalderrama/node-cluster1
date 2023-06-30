const SERVER_SECRET = "wj8DZ4yG8XawFtA83C5jnUQsv8V7xN9h";

const passport = require("passport");
const passportJwt = require("passport-jwt");
const JWTstrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

passport.use(
  new JWTstrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SERVER_SECRET,
  }, (jwtPayload, done) => {
    const user = jwtPayload;
    return done(null, user);
  })
);

const jwtValidToken = passport.authenticate("jwt", { session: false });

const isAdmin = (req, res, next) => {
  if (req.user.role === "Admin") {
    next();
  } else {
    res.status(401).json({ action: "isAdmin", message: "Unauthorized" });
  }
};
module.exports = { SERVER_SECRET, jwtValidToken, isAdmin };
