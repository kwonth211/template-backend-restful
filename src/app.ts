import express from "express";

const startServer = () => {
  const app = express();

  app
    .listen(8000, () => {
      console.log("server start on port : 8000");
    })
    .on("error", (error) => {
      console.log("에러 발생");
    });
};

startServer();
