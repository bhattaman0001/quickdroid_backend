const mongoose = require("mongoose");
const fileSchema = mongoose.Schema(
  {
    file_type: {
      type: String,
      required: true,
    },
    file_name: {
      type: String,
      required: true,
      unique: true,
    },
    file_link: {
      type: String,
      required: true,
      unique: true,
    },
    date_added: {
      type: String,
      required: true,
    },
    time_ago: {
      type: String,
      required: true,
    },
    file_size: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const File = mongoose.model("files", fileSchema);
module.exports = File;
