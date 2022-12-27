const express = require("express");
const Drone = require("../models/Drone.model");
const router = require('express').Router();


// require the Drone model here

router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((dronesFromDB) => {
      console.log("retrieved the drones from database", dronesFromDB);
      res.render("views/drones/list", {drones: dronesFromDB});
    })
    .catch((error) => {
      console.log("error getting drones from db", error);
    })
    .next();
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
