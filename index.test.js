const { shukritwo, shukriposttwo } = require('./index')

describe('shukritwo', () => {
    it('should return status code 200 and the correct message', async () => {
      const event = {};
      const expectedResponse = {
        statusCode: 200,
        body: JSON.stringify({
          message: "Your function executed successfully!",
        }, null, 2),
      };
      const result = await shukritwo(event);
      expect(result).toEqual(expectedResponse);
    });
  });

  describe('shukriposttwo', () => {
    it('should return status code 200 and the correct message', async () => {
      const event = {};
      const expectedResponse = {
        statusCode: 200,
        body: JSON.stringify({
          message: "This is post function!",
          input: event,
        }, null, 2),
      };
      const result = await shukriposttwo(event);
      expect(result).toEqual(expectedResponse);
    });
  });
