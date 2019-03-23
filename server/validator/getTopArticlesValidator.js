import validator from 'validator';
/**
* It gets all the top articles on the application
* @param {Object} request - request object containing params and body
* @param {Object} response - response object that conveys the result of the request
* @param{Object} next - middleware that calls the net middleware in the stack
* @returns {Object} - response object that has a status code of 400 may returned if the
* topLimit is in valid
*/
const getTopArticlesValidator = (request, response, next) => {
  if (validator.isInt(request.params.topLimit.trim())) {
    request.params.topLimit = request.params.topLimit.trim();
    next();
  } else {
    return response.status(400).send({ message: `The value ${request.params.topLimit} is not an integer` });
  }
};
export default getTopArticlesValidator;
