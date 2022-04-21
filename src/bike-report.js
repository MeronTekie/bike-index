export default class Bikeslost {
  static numberOfBikes(make, color, location, distance) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://bikeindex.org:443/api/v3/search/count?manufacturer=${make}&colors=${color}&location=${location}&distance=${distance}&stolenness=stolen`;
      request.open("GET", url, true);
      request.send();
      request.onload = function () {
        if (this.status === 200) {
          resolve(this.responseText);
        } else {
          reject("error");
        }
      };
    });
  }
}
