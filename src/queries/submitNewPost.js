const { dbConnection } = require("../database/db_connection.js");

const submitNewPost = async (obj, timestamp) => {
  return await dbConnection.none(
    "INSERT INTO posts(pub_timestamp, pub_date, title, subtitle, reading_mins, main_image_caption, main_image_alt_text, filename, filepath, category, tags, main_image_id, thumbnail_id, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, (SELECT pk_image_id FROM main_images WHERE name = $12), (SELECT pk_thumbnail_id FROM thumbnails WHERE name = $13), (SELECT pk_user_id FROM users WHERE username = $14))",
    [
      timestamp.toString(),
      obj.date,
      obj.title,
      obj.subtitle,
      obj.readingminutes,
      obj.mainImageCaption,
      obj.mainImageAltText,
      obj.filename,
      obj.filepath,
      obj.contentType,
      obj.tagString,
      obj.mainImage.name,
      obj.thumbnail.name,
      obj.authorName
    ],
  )
  // .then(res => {
  //   console.log("Successfully written to DB");
  //   resolve("Successfully written to DB");
  // })
  .catch(err => {
    throw new Error (`There was an error inserting the post into the db: ${err}`)
  })
};

module.exports = submitNewPost;
