import express from 'express';
import cors from 'cors';
const fileUpload = require('express-fileupload');
import bodyParser from 'body-parser';

import { serverPort } from '../etc/config.json';

import * as db from './utils/DataBaseUtils';
import * as dbF from './utils/DataBaseUtilsFloor';
import * as dbR from './utils/DataBaseUtilsClassroom';

// Initialization of express application
const app = express();

// Set up connection of database
db.setUpConnection();
dbF.setUpConnection();
dbR.setUpConnection();

// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));
app.use(fileUpload());
// RESTful api handlers
app.get('/housing', (req, res) => {
    db.listHousings().then(data => res.send(data));
});

app.post('/housing', (req, res) => {
    db.createHousing(req.body).then(data => res.send(data));
});

app.delete('/housing/:id', (req, res) => {
    db.deleteHousing(req.params.id).then(data => res.send(data));
});

app.put('/housing/:id', (req, res) => {
    db.updateHousing(req.body).then(data => res.send(data));
});

///floor
app.get('/floor', (req, res) => {
    dbF.listFloors().then(data => res.send(data));
});

app.post('/floor', (req, res) => {
    dbF.createFloor(req.body).then(data => res.send(data));
});

app.delete('/floor/:id', (req, res) => {
    dbF.deleteFloor(req.params.id).then(data => res.send(data));
});

app.put('/floor/:id', (req, res) => {
    dbF.updateFloor(req.body).then(data => res.send(data));
});

///Classroom
app.get('/classroom', (req, res) => {
    dbR.listClassrooms().then(data => res.send(data));
});

app.post('/classroom', (req, res) => {
    dbR.createClassroom(req.body).then(data => res.send(data));
});

app.delete('/classroom/:id', (req, res) => {
    dbR.deleteClassroom(req.params.id).then(data => res.send(data));
});

app.put('/classroom/:id', (req, res) => {
    dbR.updateClassroom(req.body).then(data => res.send(data));
});

app.post('/upload', (req, res, next) => {
    console.log(req);
    let imageFile = req.files.file;

    imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
        if (err) {
            return res.status(500).send(err);
        }

        res.json({file: `public/${req.body.filename}.jpg`});
    });

})

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});
