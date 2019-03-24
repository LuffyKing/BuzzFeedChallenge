import queryHelper from '../helperFunctions/queryHelper';
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
    const { hasQuery } = request.params;
    let valueArray = [];
    let where = '';
    let sectionPhrase = '';
    if (hasQuery) {
      const { section } = request.query;
      where = 'where section = $1';
      valueArray = [section];
      sectionPhrase = `for the ${section} section`;
    }
    queryHelper(
      response,
      `SELECT * FROM ARTICLES ${where};`,
      valueArray,
      '',
      sectionPhrase
    );
  },
  /**
  * It gets all the top x articles on buzzfeed and can be filtered
  * @param {Object} request - request object containing params and body
  * @param {Object} response - response object that conveys the result of the request
  * @returns {Object} - response object that has a status code of 200 and 404 error if no
  * articles are found.
  */
  getTopArticles: (request, response) => {
    const { topLimit, hasQuery } = request.params;
    let valueArray = [topLimit];
    let where = '';
    let sectionPhrase = '';
    if (hasQuery) {
      const { section } = request.query;
      where = 'where section = $2';
      valueArray = [topLimit, section];
      sectionPhrase = `for the ${section} section`;
    }
    queryHelper(
      response,
      `SELECT * FROM ARTICLES ${where} ORDER BY VIEWS DESC LIMIT $1;`,
      valueArray,
      'The top',
      sectionPhrase
    );
  }
};

export default Articles;
