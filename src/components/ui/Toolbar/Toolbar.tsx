import { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { IoMdMenu, IoMdSettings } from 'react-icons/io';

type PropsType = {
  title?: string;
  isMobile: boolean;
};

const Toolbar: FC<PropsType> = ({ title, isMobile }) => {
  if (isMobile) {
    return (
      <Container fluid>
        <Nav className="justify-content-between align-items-center">
          <Nav.Item>
            <Nav.Link>
              <IoMdMenu color="black" size="1.2em" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <span
              className="text--black"
              style={{ fontSize: '1.2em', fontWeight: 'bold' }}
            >
              {title}
            </span>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <IoMdSettings color="black" size="1.2em" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    );
  }

  return (
    <Navbar bg="primary" fixed="top">
      <Container fluid>
        <Navbar.Brand className="text-white">ENDEAVOR</Navbar.Brand>
        <Nav className="justify-content-end">
          <IoMdSettings color="white" size="1.5em" />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Toolbar;
