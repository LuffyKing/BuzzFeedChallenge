import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server/server';

chai.should();
chai.use(chaiHttp);
describe('Article API Tests', () => {
  /**
   * Testing get request on the Requests API -success case
   */
  describe('/GET all articles', () => {
    it('should GET all articles on the application', (done) => {
      chai.request(server)
        .get('/api/v1/getAllArticles')
        .end((err, responseArticles) => {
          responseArticles.body.should.have.property('articles');
          responseArticles.body.articles.should.be.an('array');
          responseArticles.body.articles.should.have.lengthOf(50);
          done();
        });
    });
  });
});
