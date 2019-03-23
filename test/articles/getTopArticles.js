import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server/server';

chai.should();
chai.use(chaiHttp);
describe('getTopArticles API Tests', () => {
  /**
   * Testing get request on the getTopArticles API -success case
   */
  describe('/GET top x articles', () => {
    it('should GET top x articles on the application', (done) => {
      chai.request(server)
        .get('/api/v1/getTopArticles/1')
        .end((err, responseArticles) => {
          responseArticles.body.should.have.property('articles');
          responseArticles.body.articles.should.be.an('array');
          responseArticles.body.articles.should.have.lengthOf(1);
          done();
        });
    });
  });
  /**
   * Testing get request on the getTopArticles API -failure case
   */
  describe('/GET top x articles', () => {
    it('should GET top x articles on the application', (done) => {
      chai.request(server)
        .get('/api/v1/getTopArticles/cat')
        .end((err, responseArticles) => {
          responseArticles.body.should.have.property('message');
          responseArticles.body.message.should.be.a('string');
          responseArticles.body.message.should.eql('The value cat is not an integer');
          done();
        });
    });
  });
});
