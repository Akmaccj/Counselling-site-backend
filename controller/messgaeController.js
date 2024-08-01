const messageService = require("../services/messgaeService");

const createMessage = async (req, res) => {
  console.log(req.body);
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

module.exports = {
  createMessage,
};
