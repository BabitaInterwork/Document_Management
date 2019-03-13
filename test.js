const md5File = require('md5-file/promise')
 const request=require('request');
const fs=require('fs');


const express = require('express');
const path = require('path');
const app= express();
//...
//set static path to serve static files
app.use(express.static(path.join(__dirname, "public")));
app.get('/download', (req, res) => {
res.attachment(path.join(__dirname, "uploads/Babita (2).pdf/2019-3-12 10:39:58.pdf"));
});
