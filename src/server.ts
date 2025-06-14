import { app } from './app';

const port = process.env.PORT || 9632;

app.listen({ port: Number(port) }, (err, address) => {
  console.log(`Server is running at port: ${port}`);
})