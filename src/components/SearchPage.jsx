import { useEffect, useState } from "react";
import { Form, FormControl, Container, Card } from "react-bootstrap";
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
        <Card style={{ maxWidth: "60rem" }} className="mx-auto mt-5">
          <Card.Body>
            <div className="d-flex flex-column align-items-center">
              <Card.Title>
                <h1>Head on the clouds?</h1>
              </Card.Title>
              <Card.Text className="mb-5">
                <h2>Search and discover the weather forecast for your city!</h2>
              </Card.Text>
            </div>

            <Form onSubmit={handleSubmit}>
              <FormControl
                type="text"
                placeholder="Search for a city..."
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
            </Form>
          </Card.Body>
        </Card>
        // <Container>
        //
        //
        //
        // </Container>
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
