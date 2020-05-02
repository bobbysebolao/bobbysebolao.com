const calculateTokenAge = timeOfCreation => {
    return Date.now() - timeOfCreation;
  };

  module.exports = calculateTokenAge;