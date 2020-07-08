import axios from "axios";

const loginApi = async (data) => {
  const apiEndpoint = "http://localhost:3000/login";
  const headers = { "cache-control": "no-cache" };
  return await axios({
    method: "POST",
    url: apiEndpoint,
    data: data
  })
    .then((resp) => {
      return resp;
    })
    .catch((err) => {
      //   console.log(err);
      return err;
    });
};

export default loginApi;
