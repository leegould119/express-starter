import axios from "axios";

const getUsersApi = async () => {
  const apiEndpoint = "http://localhost:3000/users";
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

export default getUsersApi;
