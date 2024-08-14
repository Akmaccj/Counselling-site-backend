const userService = require("../services/userService");

const createUser = async (req, res) => {
  const { firstName, lastName, email, phoneNumber } = req.body;
  try {
    if (!firstName) {
      return res.status(400).json({ error: "First name is a mandatory field" });
    } else if (!lastName) {
      return res.status(400).json({ error: "Last name is a mandatory field" });
    } else if (!email) {
      return res.status(400).json({ error: "Email is a mandatory field" });
    }

    const newMessage = await userService.createProfile({
      firstName,
      lastName,
      email,
      phoneNumber,
    });
    return res.status(201).json(newMessage);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!password) {
      return res.status(400).json({ error: "Password is a mandatory field" });
    } else if (!email) {
      return res.status(400).json({ error: "Email is a mandatory field" });
    }

    const login = await userService.loginUser({
      email,
      password,
    });
    console.log("login", login);
    return res.status(201).json(login);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  loginUser,
};
