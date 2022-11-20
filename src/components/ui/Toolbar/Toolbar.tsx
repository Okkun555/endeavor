import { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { IoMdSettings } from 'react-icons/io';

type PropsType = {
  isMobile: boolean;
};

const Toolbar: FC<PropsType> = ({ isMobile }) => {
  if (isMobile) {
    return (
      <>
        <div>SP版</div>
      </>
    );
  }

  return (
    <Navbar bg="primary" fixed="top">
      <Container fluid>
        <Navbar.Brand className="text-white">ENDEAVOR</Navbar.Brand>
        <Nav className="justify-content-end">
          <IoMdSettings color="white" />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Toolbar;
