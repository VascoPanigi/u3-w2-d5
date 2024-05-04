import { useEffect, useState } from "react";
import { Form, FormControl, Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const isSearchPage = location.pathname === "/search";

  // const fetchCoordinates = async () => {
  //   // setIsLoading(true);
  //   try {
  //     console.log("fetching your data...");
  //     const response = await fetch(
  //       `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&appid=74edd4f81109361aa3b9b9f20b577e89`
  //     );

  //     if (!response.ok) {
  //       throw new Error("Error during fetching");
  //     }

  //     console.log("fetch successful");
  //     const coordinatesFetched = await response.json();
  //     const lat = coordinatesFetched[0].lat;
  //     const lon = coordinatesFetched[0].lon;
  //     console.log(lat, lon);
  //     setCoordinates(`lat=${lat}&lon=${lon}`);
  //     console.log(coordinates);

  //     // const moviesFetched = await response.json();
  //     // console.log(moviesFetched);
  //     // setMovies(moviesFetched.Search || []);
  //   } catch (err) {
  //     console.log(err);
  //     // setIsError(true);
  //   } finally {
  //     // setIsLoading(false);
  //   }
  // };

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
          <Form>
            <FormControl
              type="text"
              placeholder="Search a city"
              onChange={(e) => setSearchValue(e.target.value)}
              onSubmit={(e) => e.preventDefault()}
              value={searchValue}
            />
          </Form>
        </Container>
      )}
    </>
  );
};

export default SearchPage;
