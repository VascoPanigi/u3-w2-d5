import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";

const NextDaysCard = ({ nextDaysForecast, selectedCard, setSelectedCard, isBigger, setIsBigger }) => {
  const [cardStates, setCardStates] = useState([]);

  function getDayOfWeek(timestamp) {
    const day = new Date(timestamp * 1000);
    return day.toDateString().split(" ")[0];
  }

  const handleCardClick = (index) => {
    setSelectedCard((prevSelectedCard) => (prevSelectedCard === nextDaysForecast ? null : nextDaysForecast));

    const updatedCardStates = cardStates.map((state, i) => (i === index ? !state : false));
    setCardStates(updatedCardStates);
    setIsBigger(!isBigger);
  };

  useEffect(() => {
    console.log("isBigger:", isBigger);
    console.log("selectedCard:", selectedCard);
  }, [isBigger, selectedCard]);

  return (
    <Col
      xs={selectedCard === nextDaysForecast ? 8 : 4}
      md={selectedCard === nextDaysForecast ? 6 : 3}
      xl={selectedCard === nextDaysForecast ? 4 : 2}
      className="next-days-card"
    >
      <Card onClick={handleCardClick} className="mb-2">
        <Card.Body className="d-flex flex-column align-items-center">
          <div className="next-day-card-title">
            <Card.Title>{getDayOfWeek(nextDaysForecast.dt)}</Card.Title>
          </div>
          <div className="next-day-card-line"></div>
          {nextDaysForecast === selectedCard ? (
            <>
              <Row className="d-flex">
                <Col xs={6}>
                  <Card.Text className="big-temp">{Math.floor(nextDaysForecast.main.temp)}°C</Card.Text>
                  <Card.Text>{nextDaysForecast.weather[0].description}</Card.Text>
                  <Card.Text>
                    Feels like: <span className="weather-data">{nextDaysForecast.main.feels_like}°C</span>
                  </Card.Text>
                  <Card.Text>
                    Humidity: <span className="weather-data">{nextDaysForecast.main.humidity}%</span>
                  </Card.Text>
                </Col>
                <Col xs={6}>
                  <Card.Img
                    src={`https://openweathermap.org/img/wn/${nextDaysForecast.weather[0].icon}@4x.png`}
                    alt="temperature icon"
                    style={{ width: "90%" }}
                  />
                </Col>
              </Row>
              <Card.Text>{}</Card.Text>
            </>
          ) : (
            <>
              <Card.Img
                src={`https://openweathermap.org/img/wn/${nextDaysForecast.weather[0].icon}@4x.png`}
                alt="temperature icon"
              />
              <Card.Text>{nextDaysForecast.main.temp}°C</Card.Text>
            </>
          )}
          {/*<Card.Text>{nextDaysForecast.description}</Card.Text>
          <Card.Text>{nextDaysForecast.humidity}</Card.Text>
          <Card.Text>{nextDaysForecast.windSpeed}</Card.Text> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NextDaysCard;
