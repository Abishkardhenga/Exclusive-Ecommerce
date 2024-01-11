const bookmarkModel = require("./../Models/Bookmark");

const createBookmark = (req, res) => {
  const data = bookmarkModel.create(req.body);
  try {
    res.status(200).json({ message: data, success: true });
  } catch (err) {
    res.status(403).json({ messge: err.message, success: false });
  }
};
const getBookmark = (req, res) => {
  try {
  } catch (err) {
    res.status(403).json({ messge: err.message, success: false });
  }
};
const deleteBookmark = (req, res) => {
  try {
  } catch (err) {
    res.status(403).json({ messge: err.message, success: false });
  }
};
const updateBookmark = (req, res) => {
  try {
  } catch (err) {
    res.status(403).json({ messge: err.message, success: false });
  }
};

module.exports = {
  createBookmark,
  getBookmark,
  deleteBookmark,
  updateBookmark,
};
