import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TodaysWeatherCard from "./TodaysWeatherCard";
import NextDaysCard from "./NextDaysCard";

const ResultPage = () => {
  const [coordinates, setCoordinates] = useState("");
  const [todaysForecast, setTodaysForecast] = useState("");
  const [nextDaysForecast, setNextDaysForecast] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const location = useParams();
  const cityName = location.cityName;
  console.log(cityName);

  const fetchCoordinates = async () => {
    // setIsLoading(true);
    try {
      console.log("fetching your data...");
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=74edd4f81109361aa3b9b9f20b577e89`
      );

      if (!response.ok) {
        throw new Error("Error during fetching");
      }

      console.log("fetch successful");
      const coordinatesFetched = await response.json();
      const lat = coordinatesFetched[0].lat;
      const lon = coordinatesFetched[0].lon;
      console.log(lat, lon);
      setCoordinates(`lat=${lat}&lon=${lon}`);
      console.log(coordinates);
    } catch (err) {
      console.log(err);
      // setIsError(true);
    } finally {
      // setIsLoading(false);
    }
  };

  const fetchTodaysForecast = async () => {
    // setIsLoading(true);
    try {
      console.log("fetching your data...");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?${coordinates}&units=metric&appid=74edd4f81109361aa3b9b9f20b577e89`
      );

      if (!response.ok) {
        throw new Error("Error during fetching");
      }

      console.log("fetch successful");
      const fetchedForecast = await response.json();
      console.log(fetchedForecast);
      setTodaysForecast(fetchedForecast);
    } catch (err) {
      console.log(err);
      // setIsError(true);
    } finally {
      // setIsLoading(false);
    }
  };

  const fetchNextDaysForecast = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?${coordinates}&units=metric&appid=74edd4f81109361aa3b9b9f20b577e89`
      );

      if (!response.ok) {
        throw new Error("Error during fetching");
      }

      const fetchedNextDaysForecast = await response.json();
      console.log(fetchedNextDaysForecast);
      setNextDaysForecast(fetchedNextDaysForecast);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchTodaysForecast();
      fetchNextDaysForecast();
    }
  }, [coordinates]);

  return (
    <div className="main-div">
      <Row className="mt-5">
        <Col xs={12} lg={3} className="left-side-results-container">
          {todaysForecast && <TodaysWeatherCard todaysForecast={todaysForecast} />}
        </Col>
        <Col xs={12} lg={9}>
          <Row>
            {nextDaysForecast &&
              nextDaysForecast.list
                .filter((day, index, self) => {
                  const currentDate = day.dt_txt.split(" ")[0];
                  return index === self.findIndex((d) => d.dt_txt.split(" ")[0] === currentDate);
                })
                .map((day, index) => (
                  <NextDaysCard
                    key={index}
                    nextDaysForecast={day}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                  />
                ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ResultPage;
