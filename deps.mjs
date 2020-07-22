//Manage password
import argon2 from'argon2';
//Deal with jwt
import jwt from  'jsonwebtoken';
import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();

export { argon2, jwt, express, bodyParser, router };