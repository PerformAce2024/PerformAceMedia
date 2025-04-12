// // server.ts or index.ts
// import express from "express";
// import contactRouter from "./routes/contact.ts";

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Use the router - this is the key part!
// app.use(contactRouter);
// // DON'T do this: app.use(contactRouter())  - that would call it as a function

// // Start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
