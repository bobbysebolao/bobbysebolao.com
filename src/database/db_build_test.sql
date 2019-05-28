-- Follow these instructions to build the DB on Heroku:
-- https://stackoverflow.com/questions/48180282/how-to-populate-a-heroku-postgresql-database-with-a-sql-file

-- COMMAND 1: heroku pg:info --app rocky-plains-29996
-- COMMAND 2: heroku pg:psql postgresql-adjacent-89548 --app rocky-plains-29996 < src/database/db_build.sql

BEGIN;

DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS post_tags CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS main_images CASCADE;
DROP TABLE IF EXISTS thumbnails CASCADE;
DROP TABLE IF EXISTS email_verification_tokens CASCADE;
DROP TABLE IF EXISTS post_categories CASCADE;

CREATE TABLE posts (
  pk_post_id SERIAL PRIMARY KEY,
  pub_timestamp VARCHAR(100) NOT NULL,
  pub_date VARCHAR(100) NOT NULL,
  title VARCHAR(100) NOT NULL,
  subtitle VARCHAR(500) NOT NULL,
  reading_mins INTEGER NOT NULL,
  main_image_caption VARCHAR(100) NOT NULL,
  main_image_alt_text VARCHAR(500) NOT NULL,
  filename VARCHAR(500) NOT NULL,
  filepath TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  tags VARCHAR(200)
);

CREATE TABLE post_tags (
  pk_tag_id SERIAL PRIMARY KEY,
  tag_name VARCHAR(100) UNIQUE
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
  username VARCHAR(100) NOT NULL,
  avatar_name VARCHAR(200) NOT NULL,
  avatar_filepath VARCHAR(200) NOT NULL
);

CREATE TABLE main_images (
  pk_image_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  size INTEGER NOT NULL,
  filepath VARCHAR(200) NOT NULL,
  type VARCHAR(100) NOT NULL
);

CREATE TABLE thumbnails (
  pk_thumbnail_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  size INTEGER NOT NULL,
  filepath VARCHAR(200) NOT NULL,
  type VARCHAR(100) NOT NULL
);

CREATE TABLE email_verification_tokens (
  pk_token_id SERIAL PRIMARY KEY,
  token VARCHAR(200) NOT NULL,
  user_id INTEGER REFERENCES users (pk_user_id),
  created_at VARCHAR(100)
);

ALTER TABLE posts ADD COLUMN main_image_id INTEGER;

ALTER TABLE posts ADD CONSTRAINT fk_main_image_id FOREIGN KEY(main_image_id) REFERENCES main_images (pk_image_id);

ALTER TABLE posts ADD COLUMN thumbnail_id INTEGER;

ALTER TABLE posts ADD CONSTRAINT fk_thumbnail_id FOREIGN KEY(thumbnail_id) REFERENCES thumbnails (pk_thumbnail_id);

ALTER TABLE posts ADD COLUMN user_id INTEGER;

ALTER TABLE posts ADD CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users (pk_user_id);

ALTER TABLE main_images ADD CONSTRAINT unique_image_name UNIQUE (name);

ALTER TABLE thumbnails ADD CONSTRAINT unique_thumbnail_name UNIQUE (name);

ALTER TABLE users ADD is_verified BOOLEAN DEFAULT false;

-- INSERT INTO posts (pub_timestamp, pub_date, title, subtitle, reading_mins, main_image_caption, main_image_alt_text, filename, category, tags)
-- VALUES (12345, '12 March 2019', 'The first blog post', 'Will it work?', 4, 'The main image', 'Main image alt text', 'image.jpeg', 'friends', 'random food drink entertainment');

INSERT INTO post_tags (tag_name)
VALUES
('html'),
('css'),
('javascript'),
('java'),
('c#'),
('php'),
('android'),
('python'),
('c++'),
('ios'),
('mysql'),
('sql'),
('asp.net'),
('ruby-on-rails'),
('c'),
('arrays'),
('objective-c'),
('r'),
('.net'),
('node.js'),
('json'),
('sql-server'),
('angularjs'),
('swift'),
('iphone'),
('regex'),
('ruby'),
('ajax'),
('django'),
('excel'),
('xml'),
('svg'),
('d3.js'),
('asp.net-mvc'),
('linux'),
('angular'),
('database'),
('wordpress'),
('drupal'),
('methode'),
('reactjs'),
('postgresql'),
('es6'),
('mongodb'),
('multithreading'),
('xcode'),
('bash'),
('git'),
('forms'),
('visual-studio'),
('atom'),
('sublime'),
('algorithm'),
('css3'),
('amazon-web-services'),
('heroku'),
('function'),
('rest'),
('api'),
('docker'),
('express'),
('handlebars'),
('tape'),
('supertest'),
('react-native'),
('istanbul'),
('macos'),
('authentication'),
('encryption'),
('cookie'),
('jsonwebtoken'),
('for-loop'),
('debugging'),
('if-statement'),
('haskell'),
('hadoop'),
('session'),
('ssl'),
('https'),
('devtools'),
('plugins'),
('testing'),
('vue.js'),
('recursion'),
('github'),
('dom'),
('caching'),
('canvas'),
('design-patterns'),
('figma'),
('illustrator'),
('gimp'),
('photoshop'),
('jquery'),
('mobile-first'),
('typography'),
('accessibility'),
('colour-scheme'),
('seo'),
('cro'),
('cta'),
('carousel'),
('link-architecture'),
('css-grid'),
('flexbox'),
('monochrome'),
('web-hosting'),
('cms'),
('kubernetes');

-- INSERT INTO main_images (name, size, filepath, type)
-- VALUES ('cat.jpeg', 1305, '/users/images', 'image/jpeg');
--
-- INSERT INTO users (first_name, last_name, username, email, password, role, avatar_name, avatar_size, avatar_filepath, avatar_type)
-- VALUES ('Jeff', 'Summ', 'mistapepper', 'qwerty@gmail.com', 'qwertY101!', 'minion', 'bobby.jpeg', 33439, '/users/images/bobby.jpeg', 'image/png');
--
-- INSERT INTO comments (body, com_timestamp, com_date, post_id, user_id, username, avatar_name, avatar_filepath)
-- VALUES ('it wasnt good', '12345', '10 Sept 1993', 1, 1, 'leroy_jenkins', 'leroy.jpeg', '/users/images/leroy.jpeg');

COMMIT;
