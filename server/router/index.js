import express from 'express';
import messageResponse from '../helperFunctions/messageResponse';
import Articles from '../contollers/Articles';
import getTopArticlesValidator from '../validator/getTopArticlesValidator';
import sectionValidator from '../validator/sectionValidator';

const router = express.Router();

router.get('/', (request, response) => messageResponse(response, 200, {
  message: "Welcome to BuzzFeed's Challenge API! Read the docs at /api-docs/ to get started"
}));

router.get('/getAllArticles', sectionValidator, Articles.getAllArticles);

router.get('/getTopArticles/:topLimit', getTopArticlesValidator, sectionValidator, Articles.getTopArticles);

export default router;
