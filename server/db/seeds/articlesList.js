import fs from 'fs';

const rawdata = fs.readFileSync('articles.json');

const articlesArr = JSON.parse(rawdata).results;

const articlesList = articlesArr.reduce((values, current, index, arr) => {
  values += index === arr.length - 1
    ? `($$${current.title}$$,
      $$${current.description}$$,
      '${current.thumbnail_url}',
      '${current.section}', 
      ${current.views},
      '${current.url}')`
    : `(
        $$${current.title}$$,
        $$${current.description}$$,
        '${current.thumbnail_url}' ,
        '${current.section}',
        ${current.views},
        '${current.url}'),`;
  return values;
}, '');

export { articlesList as default };
