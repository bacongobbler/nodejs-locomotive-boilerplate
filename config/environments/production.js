var express = require('express');

module.exports = function() {
    this.set('mongodb uri', process.env.MONGODB_URL);
}
