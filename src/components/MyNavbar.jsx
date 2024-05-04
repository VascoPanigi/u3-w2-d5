import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import SearchPage from "./SearchPage";
import { useLocation, NavLink } from "react-router-dom";
import { BiGridAlt, BiBell } from "react-icons/bi";
import profilePic from "../assets/icons/pofilepic.jpg";

const MyNavbar = () => {
  const location = useLocation();
  const isSearchPage = location.pathname === "/";
  console.log(isSearchPage);

  return (
    <>
      <Navbar expand="lg">
        <Container className="mx-auto justify-content-between" style={{ maxWidth: "95%" }}>
          <div className="d-flex">
            <Nav href="#home" className="text-white me-4">
              <div className="icon-container d-flex justify-content-center align-items-center">
                <BiGridAlt className="icons" style={{ color: "#f5f5f1", width: "20px", height: "20px" }} />
              </div>
            </Nav>
            <Nav href="#home" className="text-white">
              <div className="icon-container d-flex justify-content-center align-items-center">
                <BiBell className="icons" style={{ color: "#f5f5f1", width: "20px", height: "20px" }} />
              </div>
            </Nav>
            {/* non voglio avere la search bar sull navbar se sono nella searchpage */}
            {!isSearchPage && <SearchPage className="mt-0" />}
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="text-thite">
            <Nav className="ms-auto ">
              <NavLink to="/" className="nav-link text-white">
                Home
              </NavLink>
              <NavLink to="/gabibbo" className="nav-link text-white">
                About
              </NavLink>
              <NavLink to="/gabibbo" className="nav-link text-white">
                <img src={profilePic} alt="profile pic" className="profile-picture" />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
