const db = require("../models");
const Profile = db.Profile;
const jwt = require("jsonwebtoken");
const secretKey = "counselling-site";

const createProfile = async (data) => {
  try {
    const message = await Profile.create(data);
    return message;
  } catch (error) {
    throw new Error("Error creating message: " + error.message);
  }
};

const loginUser = async (data) => {
  try {
    console.log("Login_Service");
    const profile = await Profile.findOne({ where: { email: data.email } });
    if (profile && profile.password === data.password) {
      const token = jwt.sign({ email: data.email }, secretKey, {
        expiresIn: "1h",
      });
      return { success: true, message: "Login successful", token: token };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  } catch (error) {
    throw new Error("Error creating message: " + error.message);
  }
};

module.exports = {
  createProfile,
  loginUser,
};
