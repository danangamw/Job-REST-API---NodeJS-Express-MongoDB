const CustomAPIError = require('./custom-api');
const UnauthenticatedError = require('./unauthenticated');
const NotFound = require('./not-found');
const BadRequestError = require('./bad-request');
const notFoundError = require('../middleware/not-found');

module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  notFoundError,
  BadRequestError,
};
