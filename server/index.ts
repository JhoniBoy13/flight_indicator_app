import express from "express";
import flightIndicatorRoutes from "./src/routes/flightIndicatorRoutes";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

// Routes
app.use("/", flightIndicatorRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
