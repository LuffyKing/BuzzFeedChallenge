
import pool from '../db/index';
import messageResponse from '../helperFunctions/messageResponse';

/**
* It gets all the top articles on the application
* @param {Object} request - request object containing params and body
* @param {Object} response - response object that conveys the result of the request
* @param{Object} next - middleware that calls the net middleware in the stack
* @returns {Object} - response object that has a status code of 400 may returned if the
* topLimit is in valid
*/
const sectionValidator = (request, response, next) => {
  let { section } = request.query;
  if (!section) {
    request.params.hasQuery = false;
    next();
    return;
  }
  if (/[^a-zA-Z0-9-]/.test(section)) {
    return messageResponse(response, 422, {
      message: `The value ${section} contains a non-alphanumeric or - character, please try again without that character.`,
    });
  }
  const query = {
    text: 'select distinct section from articles;',
    values: [],
    rowMode: 'array'
  };
  pool.query(query, [])
    .then((result) => {
      section = section.toLowerCase().replace(/^\w/, firstLetter => firstLetter.toUpperCase());
      if (result.rows.length > 0) {
        const sectionsAvailable = result.rows.map(el => el[0]);
        if (sectionsAvailable.includes(section)) {
          request.params.hasQuery = true;
          request.query.section = section;
          next();
          return;
        }
        return messageResponse(response, 404, {
          message: `The section ${section} was not found on BuzzFeed, try again with one of the following sections ${sectionsAvailable.join(',')}.`
        });
      }
      return messageResponse(response, 404, {
        message: 'Currently there are no sections available, please try again without a section.'
      });
    })
    .catch(error => setImmediate(() => messageResponse(response, 500, {
      message: error.stack
    })));
};
export default sectionValidator;
