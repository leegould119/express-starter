import axios from "axios";

const getUserProfileApi = async () => {
  const apiEndpoint = "http://localhost:3000/user-data";
  const headers = { "cache-control": "no-cache" };

  return await axios({
    method: "GET",
    url: apiEndpoint,
    headers: headers
  })
    .then((resp) => {
      console.log(resp);
      return resp.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export default getUserProfileApi;
