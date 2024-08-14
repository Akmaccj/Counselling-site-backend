const messageService = require("../services/messgaeService");

const createMessage = async (req, res) => {
  const { name, message, email } = req.body;
  try {
    if (!name || !message || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = await messageService.createMessage({
      name,
      message,
      email,
    });
    return res.status(201).json(newMessage);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getMessage = async (req, res) => {
  try {
    console.log("Controller");
    const getMessage = await messageService.getMessage();
    return res.status(201).json(getMessage);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMessage,
  getMessage,
};
