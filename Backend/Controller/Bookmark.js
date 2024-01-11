const bookmarkModel = require("./../Models/Bookmark");

const createBookmark = (req, res) => {
  const data = bookmarkModel.create(req.body);
  try {
    res.status(200).json({ message: data, success: true });
  } catch (err) {
    res.status(403).json({ message: err.message, success: false });
  }
};
const getBookmark = (req, res) => {
  const data = bookmarkModel.find({ ...req.query });
  try {
    res.status(200).json({ message: data, success: false });
  } catch (err) {
    res.status(403).json({ message: err.message, success: false });
  }
};
const deleteBookmark = (req, res) => {
  const { id } = req.params;
  const data = bookmarkModel.findByIdAndDelete(id);
  try {
    res.status(200).json({ message: "successfully deleted", success: true });
  } catch (err) {
    res.status(403).json({ message: err.message, success: false });
  }
};


module.exports = {
  createBookmark,
  getBookmark,
  deleteBookmark,
=};
