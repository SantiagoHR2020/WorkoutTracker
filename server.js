const express = require("express")
const mongoose = require("mongoose")
const logger = require("morgan");
const router = require("./Routes/api");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true, 
    useFindAndModify: false,
    useUnifiedTopology: true

})

app.use(require("./Routes/view"))
app.use("/api", router)




app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  