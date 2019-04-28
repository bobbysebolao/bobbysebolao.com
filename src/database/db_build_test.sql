BEGIN;

DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS post_categories CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS main_images CASCADE;

CREATE TABLE posts (
  pk_post_id SERIAL PRIMARY KEY,
  pub_timestamp VARCHAR(100) NOT NULL,
  pub_date VARCHAR(100) NOT NULL,
  title VARCHAR(100) NOT NULL,
  subtitle VARCHAR(500) NOT NULL,
  reading_mins INTEGER NOT NULL,
  main_image_caption VARCHAR(100) NOT NULL,
  main_image_alt_text VARCHAR(500) NOT NULL,
  filename VARCHAR(500) NOT NULL
);

CREATE TABLE post_categories (
  pk_category_id SERIAL PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL,
  post_id INTEGER REFERENCES posts (pk_post_id)
);

CREATE TABLE users (
  pk_user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(200) NOT NULL,
  password TEXT NOT NULL,
  role VARCHAR(100) NOT NULL,
  avatar_name VARCHAR(200) NOT NULL,
  avatar_size INTEGER NOT NULL,
  avatar_filepath VARCHAR(200) NOT NULL,
  avatar_type VARCHAR(100) NOT NULL
);

CREATE TABLE comments (
  pk_comment_id SERIAL PRIMARY KEY,
  com_timestamp VARCHAR(100),
  com_date VARCHAR(100),
  body VARCHAR(10000) NOT NULL,
  post_id INTEGER REFERENCES posts (pk_post_id),
  user_id INTEGER REFERENCES users (pk_user_id),
  username VARCHAR(100) NOT NULL
);

CREATE TABLE main_images (
  pk_image_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  size INTEGER NOT NULL,
  filepath VARCHAR(200) NOT NULL,
  type VARCHAR(100) NOT NULL
);

ALTER TABLE posts ADD COLUMN category_id INTEGER;

ALTER TABLE posts ADD CONSTRAINT fk_category_id FOREIGN KEY(category_id)
REFERENCES post_categories (pk_category_id);

ALTER TABLE posts ADD COLUMN main_image_id INTEGER;

ALTER TABLE posts ADD CONSTRAINT fk_main_image_id FOREIGN KEY(main_image_id)
REFERENCES main_images (pk_image_id);

ALTER TABLE posts ADD COLUMN user_id INTEGER;

ALTER TABLE posts ADD CONSTRAINT fk_user_id FOREIGN KEY(user_id)
REFERENCES users (pk_user_id);

ALTER TABLE main_images ADD CONSTRAINT unique_image_name UNIQUE (name);

INSERT INTO posts (pub_timestamp, pub_date, title, subtitle, reading_mins, main_image_caption, main_image_alt_text, filename)
VALUES (12345, '12 March 2019', 'The first blog post', 'Will it work?', 4, 'The main image', 'Main image alt text', 'image.jpeg');

INSERT INTO post_categories (category_name)
VALUES ('interview');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('cat.jpeg', 1305, '/users/images', 'image/jpeg');

INSERT INTO users (first_name, last_name, username, email, password, role, avatar_name, avatar_size, avatar_filepath, avatar_type)
VALUES ('Jeff', 'Summ', 'mistapepper', 'qwerty@gmail.com', 'qwertY101!', 'minion', 'bobby.jpeg', 33439, '/users/images/bobby.jpeg', 'image/png');

INSERT INTO comments (body, com_timestamp, com_date, post_id, user_id, username)
VALUES ('it wasnt good', '12345', '10 Sept 1993', 1, 1, 'leroy_jenkins');

COMMIT;
