import server from "./server";

server.listen(process.env["APP_PORT"], () =>
  console.log(`Server is running on port: ${process.env["APP_PORT"]}`)
);
