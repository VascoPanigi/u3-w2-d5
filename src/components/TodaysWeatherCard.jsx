import { Card } from "react-bootstrap";

const TodaysWeatherCard = ({ todaysForecast }) => {
  return (
    <>
      <div className="d-flex">
        <Card style={{ maxWidth: "17rem" }} className="mb-5">
          <Card.Body className="p-3">
            <Card.Title>{todaysForecast.name}</Card.Title>
            <Card.Img
              src={`https://openweathermap.org/img/wn/${todaysForecast.weather[0].icon}@4x.png`}
              alt="temperature icon"
            />
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="degrees-section">
                <Card.Text>{todaysForecast.main.temp}°C</Card.Text>
              </div>
              <div className="weather-description-container">
                <Card.Text>{todaysForecast.weather[0].description}</Card.Text>
              </div>
            </div>
            <Card.Text>
              Humidity: <span className="ms-2">{todaysForecast.main.humidity}%</span>
            </Card.Text>
            <Card.Text>
              Wind speed:<span className="ms-2">{todaysForecast.wind.speed}km/h</span>
            </Card.Text>
          </Card.Body>
        </Card>
        <div className="vertical-rule ms-3 d-none d-lg-block"></div>
      </div>
    </>
  );
};

export default TodaysWeatherCard;
