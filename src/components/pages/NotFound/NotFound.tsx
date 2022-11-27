import { Container } from 'react-bootstrap';

const NotFound = () => (
  <Container
    className="d-flex justify-content-center align-items-center"
    id="main"
    style={{ width: '100vw', height: '90vh' }}
  >
    <h1
      className="align-top border-right inline-block align-content-center"
      style={{ marginRight: '24px' }}
    >
      404
    </h1>
    <div className="inline-block align-middle">
      <h2 className="font-weight-normal lead" id="desc">
        The page you requested was not found.
      </h2>
    </div>
  </Container>
);

export default NotFound;
