import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../App.tsx";
import { indexTemplate } from "./indexTemplate";
import Axios from "axios";
import { Header } from "../shared/Header/Header.js";
const app = express();

app.use("/static", express.static("./dist/client"));

app.get("/auth", (req, res) => {
  Axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth:{username:process.env.CLIENT_ID,password:'fiwlazCZlh3L9yy5ys6uQJABXnsqaw'},
      headers:{'Content-type':'application/x-www-form-urlencoded'}
    }
  )
  .then(({data})=>{
    res.send(
      indexTemplate(ReactDOM.renderToString(App()),data['access_token'])
    )
  })
  .catch(console.log);
  // req.query.code
  // res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.get("/", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(3000, () => {
  console.log("server started on port http://localhost:3000");
});