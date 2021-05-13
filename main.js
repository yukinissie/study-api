import axios from "axios";

axios
  .get("http://localhost:3000/data")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

const callAxios = async () => {
  try {
    let res = await axios.get("http://localhost:3000/data");
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
callAxios();
