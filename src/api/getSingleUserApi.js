import axios from "axios";

const getUsersApi = async (id, data) => {
  const apiEndpoint = "http://localhost:3000/users/post";
  const headers = { "cache-control": "no-cache" };
  return await axios({
    method: "POST",
    url: apiEndpoint,
    data: data
  })
    .then((resp) => {
      //   console.log(resp);
      return resp;
    })
    .catch((err) => {
      //   console.log(err);
      return err;
    });
};

export default getUsersApi;
