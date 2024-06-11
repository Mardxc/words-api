import app from "./app";

app.listen(app.get("port"));

console.log(`Server On Port ${app.get("port")}`);
