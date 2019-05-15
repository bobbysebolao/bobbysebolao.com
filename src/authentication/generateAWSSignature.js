require("env2")("./config.env");

const querystring = require("query-string");
const url = require('url');
const aws = require('aws-sdk');

aws.config.region = 'eu-west-2';
const S3_BUCKET = process.env.S3_BUCKET;

const generateAWSSignature = (endpoint, res) => {
  return new Promise((resolve, reject) => {
    console.log("CHECK OUT DA ENDPOINT", endpoint)

  const s3 = new aws.S3();

  const parsedUrl = url.parse(endpoint);
  const fileName = querystring.parse(parsedUrl.query)['file-name'];
  const fileType = querystring.parse(parsedUrl.query)['file-type'];
  console.log("a", parsedUrl);
  console.log("b", fileName);
  console.log("c", fileType);
  // return;

  let key = "";

  if (fileName.includes("-main-image") && !endpoint.includes("text/html")) {
    key = "blog-images/" + fileName;
  }
  else if (fileName.includes("-thumbnail-image") && !endpoint.includes("text/html")) {
    key = "blog-thumbnails/" + fileName;
  }
  else if (fileName.includes("-avatar-image") && !endpoint.includes("text/html")) {
    key = "user-avatars/" + fileName;
  }
  else if (fileType === "text/html") {
    key = "blog-posts/" + fileName;
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
    console.log("AYOOOOOOO", returnData);
    if (!endpoint.includes("text/html")) {
    res.write(JSON.stringify(returnData));
    res.end();
  } else {
    resolve(returnData);
  }
    // res.write(JSON.stringify(returnData));
    // res.end();
  })
    })
}

module.exports = generateAWSSignature;
