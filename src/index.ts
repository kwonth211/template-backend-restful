import { newApp } from "./app";
import { newRouter } from "./routers";
async function main() {
  const router = await newRouter();
  const app = newApp({ router });

  const port = process.env["PORT"] || 8000;
  app.listen(port, () => {
    console.log(`-backend server start ${port}`);
  });
}

main();
