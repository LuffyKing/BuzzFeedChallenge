import pool from '../db/index';
import messageResponse from '../helperFunctions/messageResponse';
import pluralSingular from '../helperFunctions/pluralSingluar';
/**
 * An  object that handles Articles api requests
 */
const Articles = {
  /**
  * It gets all the articles on the application
  * @param {Object} request - request object containing params and body
  * @param {Object} response - response object that conveys the result of the request
  * @returns {Object} - response object that has a status code of 200 and 404 error if no
  * articles are found.
  */
  getAllArticles: (request, response) => {
    pool.query('SELECT * FROM ARTICLES;', [])
      .then((result) => {
        if (result.rows.length > 0) {
          const pluSig = pluralSingular(result.rows.length, 'article');
          return messageResponse(response, 200, {
            message: `${result.rows.length} ${pluSig} found`,
            articles: result.rows
          });
        }
        return messageResponse(response, 404, {
          message: 'No Articles were found'
        });
      })
      .catch(error => setImmediate(() => messageResponse(response, 500, {
        message: error.stack
      })));
  }, 
  /**
  * It gets all the top x articles on buzzfeed
  * @param {Object} request - request object containing params and body
  * @param {Object} response - response object that conveys the result of the request
  * @returns {Object} - response object that has a status code of 200 and 404 error if no
  * articles are found.
  */
  getTopArticles: (request, response) => {
    const { topLimit } = request.params;
    pool.query('SELECT * FROM ARTICLES ORDER BY VIEWS DESC LIMIT $1;', [topLimit])
      .then((result) => {
        if (result.rows.length > 0) {
          const pluSig = pluralSingular(result.rows.length, 'article');
          return messageResponse(response, 200, {
            message: `The top ${result.rows.length} ${pluSig} found`,
            articles: result.rows
          });
        }
        return messageResponse(response, 404, {
          message: 'No Articles were found'
        });
      })
      .catch(error => setImmediate(() => messageResponse(response, 500, {
        message: error.stack
      })));
  }
};

export default Articles;
