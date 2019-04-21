const decodeJSONWebToken = (token) => {

  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const buff = new Buffer(base64, 'base64');
  const payloadinit = buff.toString('ascii');
  const payload = JSON.parse(payloadinit);
  console.log(payload);
}

module.exports = decodeJSONWebToken;
