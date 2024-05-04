import { useEffect, useState } from "react";
import { Form, FormControl, Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const isSearchPage = location.pathname === "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetchCoordinates();
    navigate(`/results/${searchValue}`);
  };

  return (
    <>
      {/* searchbar for SearchPage */}
      {isSearchPage && (
        <Container>
          <Form onSubmit={handleSubmit}>
            <FormControl
              type="text"
              placeholder="Search a city"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
          </Form>
        </Container>
      )}

      {/* searchbar for Navbar */}

      {!isSearchPage && (
        <Container>
          <Form onSubmit={handleSubmit}>
            <FormControl
              type="text"
              placeholder="Search a city"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
          </Form>
        </Container>
      )}
    </>
  );
};

export default SearchPage;
