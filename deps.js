//Manage password
const argon2 = require('argon2');
//Deal with jwt
const jwt = require('jsonwebtoken');
const express = require('express');
let bodyParser = require('body-parser');

module.exports = { argon2, jwt, express, bodyParser };