const querystring = require("query-string");
const url = require('url');
const aws = require('aws-sdk');

require("env2")("./config.env");

aws.config.region = 'eu-west-2';
const S3_BUCKET = process.env.S3_BUCKET;

const generateAWSSignature = (req, endpoint, res) => {

  const s3 = new aws.S3();

  const parsedUrl = url.parse(endpoint);
  const fileName = querystring.parse(parsedUrl.query)['file-name'];
  const fileType = querystring.parse(parsedUrl.query)['file-type'];

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    // console.log(returnData);
    res.write(JSON.stringify(returnData));
    res.end();
  })
}

module.exports = generateAWSSignature;
