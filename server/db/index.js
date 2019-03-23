import { Pool } from 'pg';
import configJs from '../config/config';
import articlesList from './seeds/articlesList';

const env = process.env.NODE_ENV || 'development';
const config = configJs[env];
const connectionString = config.DATABASE_URL || process.env.DATABASE_URL;
const pool = new Pool({
  connectionString
});
if (process.env.SETUP === 'SETUP') {
  pool.query(`INSERT INTO ARTICLES(TITLE,DESCRIPTION,THUMBNAIL_URL, SECTION, VIEWS, URL) VALUES ${articlesList};`, [], (err,) => {
    if (err) {
      throw err;
    }
  });
}

export { pool, connectionString };
