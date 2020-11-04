import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { newErrorMiddleware } from "@/middlewares/erros";

interface props {
  router: any;
}
export function newApp({ router }) {
  const app = express();

  app.use(
    cors({
      credentials: true,
    })
  );
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  // app.use(newErrorMiddleware());
  app.use(router);
  return app;
}
