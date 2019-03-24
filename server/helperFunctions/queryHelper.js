import pool from '../db';
import messageResponse from './messageResponse';
import pluralSingular from './pluralSingluar';

const queryHelper = (response, query, valueArray, message, sectionPhrase, word = 'Article') => {
  pool.query(query, valueArray)
    .then((result) => {
      if (result.rows.length > 0) {
        const pluSig = pluralSingular(result.rows.length, word);
        return messageResponse(response, 200, {
          message: `${message} ${result.rows.length} ${pluSig} found ${sectionPhrase}`,
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
};
export default queryHelper;
