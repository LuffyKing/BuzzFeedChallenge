import pool from '../db';
import messageResponse from './messageResponse';
import pluralSingular from './pluralSingluar';

const queryHelper = (
  response,
  query,
  valueArray,
  messageStart,
  sectionPhrase,
  word = 'Article',
  operation = 'get multiple articles'
) => {
  let message = '';
  let articlePropertyName = '';
  let getRowValue;
  switch (operation) {
    case 'get multiple articles':
      message = `${messageStart} rowLength pluSig found ${sectionPhrase}`;
      articlePropertyName = 'articles';
      getRowValue = result => result.rows;
      break;
    case 'get single article':
      message = `Here is a random article ${sectionPhrase}`;
      articlePropertyName = 'article';
      getRowValue = result => result.rows[0];
      break;

    default:
      break;
  }
  pool.query(query, valueArray)
    .then((result) => {
      if (result.rows.length > 0) {
        message.replace('rowLength', result.rows.length);
        message.replace('pluSig', pluralSingular(result.rows.length, word));
        return messageResponse(response, 200, {
          message,
          [articlePropertyName]: getRowValue(result)
        });
      }
      return messageResponse(response, 404, {
        message: 'No articles were found'
      });
    })
    .catch(error => setImmediate(() => messageResponse(response, 500, {
      message: error.stack
    })));
};
export default queryHelper;
