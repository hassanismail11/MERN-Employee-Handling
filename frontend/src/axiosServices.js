import axios from "axios";

const serverURL = "http://localhost:5555";

export function axiosGet(_callback) {
  axios
    .get("http://localhost:5555/emp")
    .then((response) => {
      _callback(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
}