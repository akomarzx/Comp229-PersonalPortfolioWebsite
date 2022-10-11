/*
Student Name: Ronald JR Ombao
ID#: 301213219
Date: October 9, 2022
*/
'use strict';
class ApiError extends Error {
  constructor(message = 'Unexpected Error Occured',
      statusCode = 500, isOperational) {
    super();
    this.message = message;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
  }
}

module.exports = ApiError;