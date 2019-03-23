import express from 'express';
import messageResponse from '../helperFunctions/messageResponse';
import Articles from '../contollers/Articles';

const router = express.Router();

router.get('/', (request, response) => messageResponse(response, 200, {
  message: 'Welcome to BuzzFeed Challenge API! Read the docs at /api-docs/ to get started'
}));

router.get('/getAllArticles', Articles.getAllArticles);

export default router;
