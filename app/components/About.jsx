var React = require('react');

var About = (props) => {
  return (
    <div>
    <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather application build on React built for 'The Complete React Web App Developer Course'
      </p>
      <p>
        Here is the list of tools used to built the app:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - This was used to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
