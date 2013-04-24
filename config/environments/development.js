var express = require('express');

module.exports = function() {
    this.use(express.errorHandler());
    this.set('mongodb uri', 'mongodb://localhost/test');
}
