const querystring = require("query-string");
const url = require('url');
const aws = require('aws-sdk');

require("env2")("./config.env");

aws.config.region = 'eu-west-2';
const S3_BUCKET = process.env.S3_BUCKET;

const generateAWSSignature2 = (endpoint) => {
  return new Promise((resolve, reject) => {

  const s3 = new aws.S3();

  const parsedUrl = url.parse(endpoint);
  const fileName = querystring.parse(parsedUrl.query)['file-name'];
  const fileType = querystring.parse(parsedUrl.query)['file-type'];
  console.log("a", parsedUrl);
  console.log("b", fileName);
  console.log("c", fileType);
  // return;

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err) {
      reject(err);
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    console.log("AYOOOOOOO", returnData);
    resolve(returnData);
    // res.write(JSON.stringify(returnData));
    // res.end();
  })
    })
}

module.exports = generateAWSSignature2;
