import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server/server';

chai.should();
chai.use(chaiHttp);
describe('getAllArticles API Tests', () => {
  /**
   * Testing get request on the getAllRequests API -success case
   */
  describe('/GET all articles', () => {
    it('should GET all articles on the application', (done) => {
      chai.request(server)
        .get('/api/v1/getRandomArticle')
        .end((err, responseArticles) => {
          responseArticles.should.have.status(200);
          responseArticles.body.should.have.property('article');
          responseArticles.body.article.should.be.an('object');
          responseArticles.body.article.should.have.property('section');
          responseArticles.body.article.should.have.property('url');
          done();
        });
    });
  });
});
