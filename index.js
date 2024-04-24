module.exports.shukri = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your function executed successfully!",
      },
      null,
      2
    ),
  };
};

module.exports.shukripost = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "This is post function",
        input: event,
      },
      null,
      2
    ),
  };
};
