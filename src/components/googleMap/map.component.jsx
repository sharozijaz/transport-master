import React from "react";
import "./google.map.scss";
// const mapStyles = {
//   width: "100%",
//   height: "100%",
// };
class GoogleMap extends React.Component {
  render() {
    return (
      <div class="mapouter row">
        <div class="gmap_canvas col-md-6 col-sm-12 mobile-map map">
          <iframe
            width="600"
            height="150"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.365059427624!2d150.79250205052807!3d-33.88025082698919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12923c392638eb%3A0x193e45e119982353!2s1413%20Elizabeth%20Dr%2C%20Kemps%20Creek%20NSW%202178%2C%20Australia!5e0!3m2!1sen!2s!4v1664623908472!5m2!1sen!2s"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          <a href="https://putlocker-is.org"></a>
          <br />
        </div>
      </div>
    );
  }
}

export default GoogleMap;
