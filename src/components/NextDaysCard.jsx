import { useState } from "react";
import { Card, Col } from "react-bootstrap";

const NextDaysCard = ({ nextDaysForecast, selectedCard, setSelectedCard }) => {
  // const [isBigger, setIsBigger] = useState(false);

  function getDayOfWeek(timestamp) {
    const day = new Date(timestamp * 1000);
    return day.toDateString().split(" ")[0];
  }

  const handleCardClick = () => {
    setSelectedCard((prevSelectedCard) => (prevSelectedCard === nextDaysForecast ? null : nextDaysForecast));
  };

  return (
    <Col
      xs={selectedCard === nextDaysForecast ? 8 : 4}
      md={selectedCard === nextDaysForecast ? 6 : 3}
      xl={selectedCard === nextDaysForecast ? 4 : 2}
      className="next-days-card"
    >
      <Card onClick={handleCardClick}>
        <Card.Body className="d-flex flex-column align-items-center">
          <div className="next-day-card-title">
            <Card.Title>{getDayOfWeek(nextDaysForecast.dt)}</Card.Title>
          </div>
          <div className="next-day-card-line"></div>
          <Card.Img
            src={`https://openweathermap.org/img/wn/${nextDaysForecast.weather[0].icon}@4x.png`}
            alt="temperature icon"
          />
          <Card.Text>{nextDaysForecast.main.temp}°C</Card.Text>
          {/*<Card.Text>{nextDaysForecast.description}</Card.Text>
          <Card.Text>{nextDaysForecast.humidity}</Card.Text>
          <Card.Text>{nextDaysForecast.windSpeed}</Card.Text> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NextDaysCard;
