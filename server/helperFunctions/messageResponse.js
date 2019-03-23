const messageResponse = (response, statusCode, message) => response
  .status(statusCode)
  .send(message);
export default messageResponse;
