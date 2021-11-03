import { dbConnection } from "../database/db_connection.js";

export const submitNewPost = async (postObj) => {
  return await dbConnection.result(
    "INSERT INTO posts(pub_timestamp, pub_date, title, subtitle, reading_mins, main_image_caption, main_image_alt_text, filename, filepath, category, tags, main_image_id, thumbnail_id, user_id) VALUES (${pub_timestamp}, ${pub_date}, ${title}, ${subtitle}, ${reading_mins}, ${main_image_caption}, ${main_image_alt_text}, ${filename}, ${filepath}, ${category}, ${tags}, (SELECT pk_image_id FROM main_images WHERE name = ${main_image_name}), (SELECT pk_thumbnail_id FROM thumbnails WHERE name = ${thumbnail_name}), (SELECT pk_user_id FROM users WHERE username = ${author_name}))", {
      pub_timestamp: postObj.pub_timestamp,
      pub_date: postObj.pub_date,
      title: postObj.title,
      subtitle: postObj.subtitle,
      reading_mins: postObj.reading_mins,
      main_image_caption: postObj.main_image_caption,
      main_image_alt_text: postObj.main_image_alt_text,
      filename: postObj.filename,
      filepath: postObj.filepath,
      category: postObj.category,
      tags: postObj.tags,
      main_image_name: postObj.main_image.name,
      thumbnail_name: postObj.thumbnail.name,
      author_name: postObj.author_name
    }
  )
  .catch(err => {
    throw new Error (`There was an error inserting the post into the db: ${err}`)
  })
};
