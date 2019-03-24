import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server/server';

chai.should();
chai.use(chaiHttp);
describe('getRandomArticles API Tests', () => {
  /**
   * Testing get request on the getRandomRequests API -success case
   */
  describe('/GET a random article', () => {
    it('should GET a random article on the application', (done) => {
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
  /**
   * Testing get request on the getRandomRequests by section API -success case
   */
  describe('/GET a random article from a section', () => {
    it('should GET a random article from a Tech section on the application', (done) => {
      chai.request(server)
        .get('/api/v1/getRandomArticle?section=Tech')
        .end((err, responseArticles) => {
          responseArticles.should.have.status(200);
          responseArticles.body.should.have.property('article');
          responseArticles.body.article.should.be.an('object');
          responseArticles.body.article.should.have.property('section');
          responseArticles.body.article.section.should.eql('Tech');
          responseArticles.body.article.should.have.property('url');
          done();
        });
    });
  });
});
