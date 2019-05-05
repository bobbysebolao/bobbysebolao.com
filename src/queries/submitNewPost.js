const dbConnection = require("../database/db_connection.js");

const submitNewPost = (obj, timestamp) => {
  return new Promise((resolve, reject) => {
  // console.log("There's the post: ", obj)
  // return;
  dbConnection.query(
    "INSERT INTO posts(pub_timestamp, pub_date, title, subtitle, reading_mins, main_image_caption, main_image_alt_text, filename, category, tags, main_image_id, thumbnail_id, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, (SELECT pk_image_id FROM main_images WHERE name = $11), (SELECT pk_thumbnail_id FROM thumbnails WHERE name = $12), (SELECT pk_user_id FROM users WHERE username = $13))",
    [
      timestamp.toString(),
      obj.date,
      obj.title,
      obj.subtitle,
      obj.readingminutes,
      obj.mainImageCaption,
      obj.mainImageAltText,
      obj.filename,
      obj.contentType,
      obj.tagString,
      obj.mainImage.name,
      obj.thumbnail.name,
      obj.authorName
    ],
  )
  .then(res => {
    console.log("Successfully written to DB");
    resolve("Successfully written to DB");
  })
  .catch(err => reject(err));
})
};

module.exports = submitNewPost;
