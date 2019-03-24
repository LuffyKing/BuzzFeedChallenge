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
        .get('/api/v1/getAllArticles')
        .end((err, responseArticles) => {
          responseArticles.should.have.status(200);
          responseArticles.body.should.have.property('articles');
          responseArticles.body.articles.should.be.an('array');
          responseArticles.body.articles.should.have.lengthOf(50);
          done();
        });
    });
  });
  /**
   * Testing get request on the getTopArticles API section -success case
   */
  describe('/GET articles for a section', () => {
    it('should GET all articles on the application for the tech section', (done) => {
      chai.request(server)
        .get('/api/v1/getAllArticles?section=tech')
        .end((err, responseArticles) => {
          responseArticles.should.have.status(200);
          responseArticles.body.should.have.property('articles');
          responseArticles.body.articles.should.be.an('array');
          responseArticles.body.articles[0].section.should.eql('Tech');
          done();
        });
    });
  });
  /**
   * Testing get request on the getTopArticles API section - failure case
   */
  describe('/GET all articles for a section', () => {
    it('should try to GET all articles on the application for a section that does not exist and fail', (done) => {
      chai.request(server)
        .get('/api/v1/getAllArticles?section=NotARealSection')
        .end((err, responseArticles) => {
          responseArticles.should.have.status(404);
          responseArticles.body.should.have.property('message');
          responseArticles.body.message.should.be.a('string');
          responseArticles.body.message.should.include('Notarealsection');
          done();
        });
    });
  });
});
