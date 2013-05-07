Locomotive HTML Boilerplate
===========================

[![Build Status](https://travis-ci.org/bacongobbler/lootninja.png?branch=master)](https://travis-ci.org/bacongobbler/lootninja)

A Node.js MVC boilerplate using Locomotive as the framework, Passport-local for user authentication, mongoose for the DB connection adapter, and Linkedin's Dustjs as the templating engine.

# Deploying

To deploy this boilerplate, clone this repository and run

    npm install
    lcm server

This will install all dependencies, and start the server. A small note, you may need to install dependencies for [bcrypt](https://github.com/TooTallNate/node.bcrypt.js) and
[node-gyp](https://github.com/TooTallNate/node-gyp). Also, please make sure that mongoDB is running in the background.
