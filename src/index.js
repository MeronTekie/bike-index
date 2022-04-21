import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Bikeslost from "./bike-report.js";

$(document).ready(function () {
  $("#bike-index").submit(function (event) {
    event.preventDefault();
    const make = $("#manufacturer").val();
    const color = $("#color").val();
    const location = $("#location").val();
    const distance = $("#distance").val();
    let promise = Bikeslost.numberOfBikes(make, color, location, distance);

    promise
      .then(function (response) {
        let newFile = JSON.parse(response);
        $("#bike-index").hide();
        $("#output").text(
          `The total stolen bikes in your area are ${newFile.stolen} 
           and the proximity is ${newFile.proximity} `
        );
      })
      .catch(function (response) {
        console.log(`this is ${response}`);
      });
  });
});
