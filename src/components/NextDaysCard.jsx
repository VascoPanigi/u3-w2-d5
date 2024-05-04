import { Card, Col } from "react-bootstrap";

const nextDaysCard = ({ nextDaysForecast, index }) => {
  console.log(nextDaysForecast);

  function getDayOfWeek(timestamp) {
    const day = new Date(timestamp * 1000);
    return day.toDateString().split(" ")[0];
  }

  return (
    <Col xs={2}>
      <Card>
        <Card.Body>
          <Card.Title>{getDayOfWeek(nextDaysForecast.dt)}</Card.Title>
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

export default nextDaysCard;
