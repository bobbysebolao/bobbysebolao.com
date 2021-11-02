require("dotenv").config();

const querystring = require("query-string");
const url = require('url');
const aws = require('aws-sdk');

aws.config.region = 'eu-west-2';
const S3_BUCKET = process.env.S3_BUCKET;

const s3 = new aws.S3();

const generateAWSSignature = (endpoint, res) => {
  return new Promise((resolve, reject) => {

  const parsedUrl = url.parse(endpoint);
  const fileName = querystring.parse(parsedUrl.query)['file-name'];
  const fileType = querystring.parse(parsedUrl.query)['file-type'];

  let key = "";

  if (fileName.includes("-main-image") && !endpoint.includes("text/html")) {
    if (process.env.NODE_ENV === "start") {
    key = "blog-images/" + fileName;
  } else if (process.env.NODE_ENV === "local") {
    key = "local-uploads/practice-images/" + fileName;
  }
  }
  else if (fileName.includes("-thumbnail-image") && !endpoint.includes("text/html")) {
    if (process.env.NODE_ENV === "start") {
    key = "blog-thumbnails/" + fileName;
  } else if (process.env.NODE_ENV === "local") {
    key = "local-uploads/practice-thumbnails/" + fileName;
  }
  }
  else if (fileName.includes("-user-image") && !endpoint.includes("text/html")) {
    if (process.env.NODE_ENV === "start") {
    key = "user-avatars/" + fileName;
  } else if (process.env.NODE_ENV === "local") {
    key = "local-uploads/practice-avatars/" + fileName;
  }
  }
  else if (fileType === "text/html") {
    if (process.env.NODE_ENV === "start") {
    key = "blog-posts/" + fileName;
  }
    else if (process.env.NODE_ENV === "local") {
      key = "local-uploads/practice-posts/" + fileName;
    }
  }

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: `${key}`,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err) {
      console.log(err);
      reject(err);
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${key}`
    };
    if (!endpoint.includes("text/html")) {
    res.write(JSON.stringify(returnData));
    res.end();
  } else {
    resolve(returnData);
  }
  })
    })
}

const getAwsFile = (filename) => {
  return new Promise((resolve, reject) => {

    let key = "";

    if (process.env.NODE_ENV === "start") {
      key = "blog-posts/" + filename
    } else if (process.env.NODE_ENV === "local") {
      key = "local-uploads/practice-posts/" + filename
    }

  const s3Params = {
  Bucket: S3_BUCKET,
  Key: key,
  // Range: "bytes=0-9"
 };

  s3.getObject(s3Params, function(err, data) {
    if (err) {
      console.log(err)
      reject(err)
    } 
    else {
      resolve(data)
    };
  })
})
}

module.exports = {
  generateAWSSignature,
  getAwsFile
};
