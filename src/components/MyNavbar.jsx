import { Container, Nav, Navbar } from "react-bootstrap";
import SearchPage from "./SearchPage";
import { useLocation } from "react-router-dom";

const MyNavbar = () => {
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  console.log(isSearchPage);

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* non voglio avere la search bar sull navbar se sono nella searchpage */}
          {!isSearchPage && <SearchPage className="mt-0" />}

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
