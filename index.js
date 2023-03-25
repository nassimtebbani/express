import express from "express";
const app = express();

const isWorkingHours = () => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  return day >= 0 && day <= 6 && hour >= 9 && hour <= 17;
};

app.get("/", (req, res) => {
  if (isWorkingHours()) {
    res.send("Welcome!");
  } else {
    res.send("not available , out of workingHours");
  }
});

app.get("/services", (req, res) => {
  if (isWorkingHours()) {
    res.send("Here are our services.");
  } else {
    res.send("not available , out of workingHours");
  }
});

app.get("/contact", (req, res) => {
  if (isWorkingHours()) {
    res.send("Contact us");
  } else {
    res.send("not available , out of workingHours");
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
