module.exports.shukritwo = async (event) => {
  console.log('GET method')
  console.log(event)
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

module.exports.shukriposttwo = async (event) => {
  console.log('POST method')
  console.log(event)

  let body;
  try {
      body = JSON.parse(event.body);
  } catch (error) {
      console.error('Failed to parse JSON: ', error)
  }
  
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
