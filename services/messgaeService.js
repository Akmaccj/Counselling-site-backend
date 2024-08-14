const db = require("../models");
const Users = db.Users;

const createMessage = async (data) => {
  try {
    const message = await Users.create(data);
    return message;
  } catch (error) {
    throw new Error("Error creating message: " + error.message);
  }
};

const getMessage = async (data) => {
  try {
    // const details = await Users.findAll();
    const details = await Users.findAll({
      attributes: ["name", "email", "message"],
    });
    return details;
  } catch (error) {
    throw new Error("Error creating message: " + error.message);
  }
};
module.exports = {
  createMessage,
  getMessage,
};
