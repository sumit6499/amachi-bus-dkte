const PostDestination = require("../Model/destinationModel.js");

const postDest = async (req, res) => {
  const body = req.body;
  try {
    const newDest = new PostDestination(body);
    await newDest.save();
    res.status(200).json({ message: "success post" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getPrice = async (req, res) => {
  const { destination, subDestination } = req.query;
  try {
    const destData = await PostDestination.find({
      dest: destination,
      subDest: subDestination,
    });

    res.status(200).json(destData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  postDest,
  getPrice,
};
