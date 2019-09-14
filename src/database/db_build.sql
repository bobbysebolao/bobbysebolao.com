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

-- ALTER TABLE posts ADD CONSTRAINT fk_main_image_id FOREIGN KEY(main_image_id) REFERENCES main_images (pk_image_id);

ALTER TABLE posts ADD COLUMN thumbnail_id INTEGER;

-- ALTER TABLE posts ADD CONSTRAINT fk_thumbnail_id FOREIGN KEY(thumbnail_id) REFERENCES thumbnails (pk_thumbnail_id);

ALTER TABLE posts ADD COLUMN user_id INTEGER;

-- ALTER TABLE posts ADD CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users (pk_user_id);

ALTER TABLE main_images ADD CONSTRAINT unique_image_name UNIQUE (name);

ALTER TABLE thumbnails ADD CONSTRAINT unique_thumbnail_name UNIQUE (name);

ALTER TABLE users ADD is_verified BOOLEAN DEFAULT false;

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
('kubernetes'),
('markup'),
('markdown'),
('jamstack'),
('music'),
('hip-hop'),
('mentors'),
('update'),
('rap');

INSERT INTO posts (pub_timestamp, pub_date, title, subtitle, reading_mins, main_image_caption, main_image_alt_text, filename, filepath, category, tags, main_image_id, thumbnail_id, user_id)
VALUES ('1562943885875', 'Fri Jul 12 2019 15:04:45 GMT+0000 (Coordinated Universal Time)', 'JAMstack Conf 2019 Recap', 'Jam packed with reasons to come back', 4, 'Image © 2019 Markus Schork', 'A snapshot of the main breakout area at JAMstack Conf 2019', 'jamstack-conf-2019-recap.html', 'https://s3.eu-west-2.amazonaws.com/console-blog/blog-posts/jamstack-conf-2019-recap.html', 'life', 'javascript api markup cms', 1, 1, 1);

INSERT INTO posts (pub_timestamp, pub_date, title, subtitle, reading_mins, main_image_caption, main_image_alt_text, filename, filepath, category, tags, main_image_id, thumbnail_id, user_id)
VALUES ('1563745544349', 'Sun Jul 21 2019 21:45:44 GMT+0000 (Coordinated Universal Time)', 'How to Use Emojis in CSS', 'Maybe the most useless thing you’ll learn this week', 1, 'Image © 2019 Bobby Sebolao', 'Happy World Emoji Day message', 'how-to-use-emojis-in-css.html', 'https://s3.eu-west-2.amazonaws.com/console-blog/blog-posts/how-to-use-emojis-in-css.html', 'learn', 'css', 8, 2, 1);

INSERT INTO posts (pub_timestamp, pub_date, title, subtitle, reading_mins, main_image_caption, main_image_alt_text, filename, filepath, category, tags, main_image_id, thumbnail_id, user_id)
VALUES ('1564416672495', 'Mon Jul 29 2019 17:11:12 GMT+0000 (Coordinated Universal Time)', 'Raps About “The Coding Struggle”', 'Me, Myself & UI', 4, 'Images © 2019 Def Jam Records', 'Pictured: A Tribe Called Quest (top left), Joey Badass (top right), Pitbull (bottom left), LL Cool J (bottom middle), Faith Evans (bottom right)', 'raps-about-coding.html', 'https://s3.eu-west-2.amazonaws.com/console-blog/blog-posts/raps-about-coding.html', 'fun', 'hip-hop rap music', 13, 3, 1);

INSERT INTO posts (pub_timestamp, pub_date, title, subtitle, reading_mins, main_image_caption, main_image_alt_text, filename, filepath, category, tags, main_image_id, thumbnail_id, user_id)
VALUES ('1565938630239', 'Fri Aug 16 2019 06:57:10 GMT+0000 (Coordinated Universal Time)', 'I''m off to Israel!', 'In search of falafel, and to mentor at a coding bootcamp (but, mainly the falafel...)', 1, 'Image © 2019 Olga Samorodova', 'A bowl of falafel containing an Israeli flag', 'off-to-israel.html', 'https://s3.eu-west-2.amazonaws.com/console-blog/blog-posts/off-to-israel.html', 'life', 'mentors', 16, 4, 1);

INSERT INTO posts (pub_timestamp, pub_date, title, subtitle, reading_mins, main_image_caption, main_image_alt_text, filename, filepath, category, tags, main_image_id, thumbnail_id, user_id)
VALUES ('1566643456873', 'Sat Aug 24 2019 10:44:16 GMT+0000 (Coordinated Universal Time)', 'My Blogging Anniversary', 'Ten years of writing on the web!', 5, 'Image © 2019 Vectorstory', 'A speech bubble with the word "Blog", surrounded by icons representing creativity', 'my-blogging-story.html', 'https://s3.eu-west-2.amazonaws.com/console-blog/blog-posts/my-blogging-story.html', 'life', 'update', 17, 5, 1);

INSERT INTO posts (pub_timestamp, pub_date, title, subtitle, reading_mins, main_image_caption, main_image_alt_text, filename, filepath, category, tags, main_image_id, thumbnail_id, user_id)
VALUES ('1568294838231', 'Thu Sep 12 2019 13:27:18 GMT+0000 (Coordinated Universal Time)', '3 Reasons to Build in Black and White', 'There is a method to the monochrome...', 3, 'Image © 2019 Disney', 'Old black and white Mickey Mouse cartoon', 'why-build-in-black-and-white.html', 'https://s3.eu-west-2.amazonaws.com/console-blog/blog-posts/why-build-in-black-and-white.html', 'learn', 'design-patterns', 19, 6, 1);

INSERT INTO posts (pub_timestamp, pub_date, title, subtitle, reading_mins, main_image_caption, main_image_alt_text, filename, filepath, category, tags, main_image_id, thumbnail_id, user_id)
VALUES ('1568911721876', 'Thu Sep 19 2019 16:48:42 GMT+0000 (Coordinated Universal Time)', 'Making Sense of ‘Serverless’', 'The reports of the server’s death have been greatly exaggerated', 2, 'Image © 2019 Bobby Sebolao', 'The Serverless framework logo juxtaposed with a thinking face emoji', 'making-sense-of-serverless.html', 'https://s3.eu-west-2.amazonaws.com/console-blog/blog-posts/making-sense-of-serverless.html ', 'learn', 'jamstack', 21, 7, 1);

INSERT INTO main_images (name, size, filepath, type)
VALUES ('jamstack-2019-640x360px.jpg', 83722, 'https://console-blog.s3.amazonaws.com/blog-images/jamstack-2019-640x360px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('derp-link-640x360px.jpg', 37243, 'https://console-blog.s3.amazonaws.com/blog-images/derp-link-640x360px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('puppy-love-original-640x360px.jpg', 57689, 'https://console-blog.s3.amazonaws.com/blog-images/puppy-love-original-640x360px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('puppy-love-my-replica-640x360px.jpg', 52004, 'https://console-blog.s3.amazonaws.com/blog-images/puppy-love-my-replica-640x360px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('winner-winner-tv-dinner-640x853px.jpg', 63441, 'https://console-blog.s3.amazonaws.com/blog-images/winner-winner-tv-dinner-640x853px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('world-emoji-day-banner-640x360px.jpg', 44296, 'https://console-blog.s3.amazonaws.com/blog-images/world-emoji-day-banner-640x360px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('css-variables-example-640x360px.jpg', 25119, 'https://console-blog.s3.amazonaws.com/blog-images/css-variables-example-640x360px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('emojis-in-css-640x360px.png', 25801, 'https://console-blog.s3.amazonaws.com/blog-images/emojis-in-css-640x360px-main-image.png', 'image/png');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('radio-ll-cool-j-360x360px.jpg', 38487, 'https://console-blog.s3.amazonaws.com/blog-images/radio-ll-cool-j-360x360px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('beats-rhymes-and-life-atcq-360x360px.jpg', 43904, 'https://console-blog.s3.amazonaws.com/blog-images/beats-rhymes-and-life-atcq-360x360px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('miami-pitbull-366x360px.jpg', 40743, 'https://console-blog.s3.amazonaws.com/blog-images/miami-pitbull-366x360px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('b4dass-joey-badass-360x360px.jpg', 51148, 'https://console-blog.s3.amazonaws.com/blog-images/b4dass-joey-badass-360x360px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('raps-about-coding-640x360px.jpg', 47154, 'https://console-blog.s3.amazonaws.com/blog-images/raps-about-coding-640x360px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('first-medium-post-640x360px.png', 23363, 'https://console-blog.s3.amazonaws.com/blog-images/first-medium-post-640x360px-main-image.png', 'image/png');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('falafel-640x360px.jpg', 27250, 'https://console-blog.s3.amazonaws.com/blog-images/falafel-640x360px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('blogging-story-640x360px.jpg', 51409, 'https://console-blog.s3.amazonaws.com/blog-images/blogging-story-640x360px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('color-in-data-viz-640x360px.jpg', 32399, 'https://console-blog.s3.amazonaws.com/blog-images/color-in-data-viz-640x360px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('mango-metrics-monochrome-327x596px.png', 12139, 'https://console-blog.s3.eu-west-2.amazonaws.com/blog-images/mango-metrics-monochrome-327x596px-main-image.png', 'image/png');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('mickey-mouse-black-and-white-640x360px.jpg', 55044, 'https://console-blog.s3.eu-west-2.amazonaws.com/blog-images/mickey-mouse-black-and-white-640x360px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('serverless-snape-640x360px.jpg', 40873, 'https://console-blog.s3.eu-west-2.amazonaws.com/blog-images/serverless-snape-640x360px-main-image.jpg', 'image/jpeg');

INSERT INTO main_images (name, size, filepath, type)
VALUES ('serverless-really-640x360px.jpg', 16744, 'https://console-blog.s3.eu-west-2.amazonaws.com/blog-images/serverless-really-640x360px-main-image.jpg', 'image/jpeg');

INSERT INTO thumbnails (name, size, filepath, type)
VALUES ('jamstack-2019-210x118px.jpg', 6341, 'https://console-blog.s3.amazonaws.com/blog-thumbnails/jamstack-2019-210x118px-thumbnail-image.jpg', 'image/jpeg');

INSERT INTO thumbnails (name, size, filepath, type)
VALUES ('emojis-in-css-210x118px.jpg', 9035, 'https://console-blog.s3.amazonaws.com/blog-thumbnails/emojis-in-css-210x118px-thumbnail-image.jpg', 'image/jpeg');

INSERT INTO thumbnails (name, size, filepath, type)
VALUES ('raps-about-coding-210x118px.jpg', 5472, 'https://console-blog.s3.amazonaws.com/blog-thumbnails/raps-about-coding-210x118px-thumbnail-image.jpg', 'image/jpeg');

INSERT INTO thumbnails (name, size, filepath, type)
VALUES ('falafel-210x118px.jpg', 5012, 'https://console-blog.s3.amazonaws.com/blog-thumbnails/falafel-210x118px-thumbnail-image.jpg', 'image/jpeg');

INSERT INTO thumbnails (name, size, filepath, type)
VALUES ('blogging-story-210x118px.jpg', 10172, 'https://console-blog.s3.amazonaws.com/blog-thumbnails/blogging-story-210x118px-thumbnail-image.jpg', 'image/jpeg');

INSERT INTO thumbnails (name, size, filepath, type)
VALUES ('mickey-mouse-black-and-white-210x118px.jpg', 10181, 'https://console-blog.s3.amazonaws.com/blog-thumbnails/mickey-mouse-black-and-white-210x118px-thumbnail-image.jpg', 'image/jpeg');

INSERT INTO thumbnails (name, size, filepath, type)
VALUES ('serverless-icon-210x118px.jpg', 3396, 'https://console-blog.s3.amazonaws.com/blog-thumbnails/serverless-icon-210x118px-thumbnail-image.jpg', 'image/jpeg');

INSERT INTO users (first_name, last_name, username, email, password, role, avatar_name, avatar_size, avatar_filepath, avatar_type, is_verified)
VALUES ('Bobby', 'Sebolao', 'mistapepper', 'bobbysebolao@gmail.com', '$2a$10$6ASiU.Ue2fmKtzD5QLaNfOH4D6J3sP/EIRF1/UhO/NsDODJQLGp7G', 'admin', 'bobby-250x250px-user-image.jpg', 22052, 'https://console-blog.s3.amazonaws.com/user-avatars/bobby-250x250px-user-image.jpg', 'image/jpeg', 'True');

COMMIT;
