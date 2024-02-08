const File = require("../models/modelJS");

async function handleGetAllFilesByName(req, res) {
  const fileName = req.params.fileName;
  const regexQuery = new RegExp(fileName, "i");
  try {
    const fileArr = await File.find({ file_name: regexQuery });
    fileArr.forEach((element) => {
      element.time_ago =
        Math.round((new Date() - element.updatedAt) / (1000 * 60 * 60 * 24)) +
        ` days`;
    });
    return res.json(fileArr);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function handleAddNewFile(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.file_type ||
    !body.file_name ||
    !body.file_link ||
    !body.date_added ||
    !body.time_ago ||
    !body.file_size
  ) {
    return res.status(400).json({ msg: "all fields are req..." });
  }
  const result = await File.create({
    file_type: body.file_type,
    file_name: body.file_name,
    file_link: body.file_link,
    date_added: body.date_added,
    time_ago: body.time_ago,
    file_size: body.file_size,
  });
  return res.status(201).json({ msg: "Success", id: result._id });
}

module.exports = {
  handleGetAllFilesByName,
  handleAddNewFile,
};
