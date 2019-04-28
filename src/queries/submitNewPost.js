const dbConnection = require("../database/db_connection.js");

const submitNewPost = (obj, timestamp) => {
  dbConnection.query(
    "INSERT INTO posts(pub_timestamp, pub_date, title, subtitle, reading_mins, main_image_caption, main_image_alt_text, filename, category_id, main_image_id, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, (SELECT pk_category_id FROM post_categories WHERE category_name = $9), (SELECT pk_image_id FROM main_images WHERE name = $10), (SELECT pk_user_id FROM users WHERE username = $11))",
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
      obj.mainImage.name,
      obj.authorName
    ],
  );
  console.log("Successfully written to DB");
};

module.exports = submitNewPost;
