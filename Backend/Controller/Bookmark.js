const bookmarkModel = require("../Models/Bookmark");

const createBookmark = async (req, res) => {
  try {
    const data = await bookmarkModel.create(req.body);
    res.status(200).json({ message: data, success: true });
  } catch (err) {
    res.status(403).json({ message: err.message, success: false });
  }
};
const getBookmark = async (req, res) => {
  try {
    const data = await bookmarkModel.find({ ...req.query });
    res.status(200).json({ message: data, success: true });
  } catch (err) {
    res.status(403).json({ message: err.message, success: false });
  }
};

const deleteBookmark = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await bookmarkModel.findByIdAndDelete(id);
      if (data) {
        res.status(200).json({ message: "Successfully deleted", success: true });
      } else {
        res.status(404).json({ message: "Bookmark not found", success: false });
      }
    } catch (err) {
      res.status(403).json({ message: err.message, success: false });
    }
  };
  
module.exports = {
  createBookmark,
  getBookmark,
  deleteBookmark,
};
