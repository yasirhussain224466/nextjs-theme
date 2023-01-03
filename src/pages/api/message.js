// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { API_URL } from "./constant";

export default function handler(req, res) {
  console.log(req.body);
  try {
    // if (req.method === "POST") {
    //   fetch(`${API_URL}messages`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: { data: req.body.obj },
    //   })
    //     .then((resp) => {
    //       console.log(resp);
    //       res.json(resp);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  } catch (error) {
    console.log(error);
  }
}
