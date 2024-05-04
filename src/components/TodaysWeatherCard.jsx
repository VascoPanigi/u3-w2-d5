import { Card } from "react-bootstrap";

const TodaysWeatherCard = ({ todaysForecast }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{todaysForecast.name}</Card.Title>
          <Card.Img
            src={`https://openweathermap.org/img/wn/${todaysForecast.weather[0].icon}@4x.png`}
            alt="temperature icon"
          />
          <Card.Text>{todaysForecast.main.temp}°C</Card.Text>
          <Card.Text>{todaysForecast.main.humidity}%</Card.Text>
        </Card.Body>
        <Card.Text>{todaysForecast.wind.speed}km/h</Card.Text>
      </Card>
    </>
  );
};

export default TodaysWeatherCard;
