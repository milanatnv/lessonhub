# Development Guide

## Prerequisites

* To set up development environment on your machine, start by cloning this repo


        git clone git@github.com:chairseven/lessonhub.git
        cd lessonhub

* Install PostgreSQL and start the DB server with one of the following commands

  **OSX**

      brew install postgres

  **GNU/Linux (Debian)**

      apt-get install postgresql postgresql-contrib

* Initialize the database and start the database server with

  **OSX**

      shell initdb /usr/local/var/postgres -E utf8 pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start

  **GNU/Linux (Debian)**

      initdb /usr/local/var/postgres -E utf8 pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start

* Make sure you have Ruby installed

        ruby -v

* Make sure you have Node with NPM installed and that you have Bower

        node -v
        npm -v
        bower -v

    Optionally, you could install `ember-cli` globally which will give you
    `ember` command. (`npm install -g ember-cli`)

* Install backend dependencies with the setup script

        cd backend/
        rake db:setup

    It will configure the database to work with Rails, wipe out logs, install bundler if it's not already installed and install Ruby dependencies. It will also completely reload the database and prepare it for tests.

* Install frontend dependencies with NPM and Bower

         cd frontend/
         npm install
         bower install

## Running servers

There is a top-level Rakefile accessible, which provides common tasks for both
frontend and backend.

To start both, frontend and backend server at the same time, run

    rake server

The [Rails API](http://localhost:3000) is set up on port 3000 and
the [Ember app](http://localhost:4200) is set up on port 4200 by default.

Both options are overridable with setting either `ENV['EMBER_PORT']` or
`ENV['RAILS_PORT']` when running `rake server`.

---

If you need only the frontend server, instead of the above command, run

    cd frontend/
    npm start

This will start the Ember server and use fixtures instead of making real API calls.
This option is configurable via `ENV['FIXTURES']` boolean.

---

If you need only the backend server, instead of the above command, run

    cd backend/
    rails s

## Running tests

To run both backend and frontend tests, use

    rake test

To run only frontend tests, use

    cd frontend/
    npm test

This will build the app and run tests. If you're developing, using

    ember test --server

is a better option, since it's faster.

If you need help with Ember CLI, run

    ember --help

Additional information can be found on its [homepage](http://www.ember-cli.com/).

## Documentation

We use [RSpec API Doc Generator](https://github.com/zipmark/rspec_api_documentation#readme) in combination with [Raddocs](https://github.com/smartlogic/raddocs#readme) to document our API. You can explore the current API at [/api/docs](https://lessonhub-staging.herokuapp.com/api/docs).

## Deployment

Manual deployments are not recommended. We use [continuous deployments](http://guide.agilealliance.org/guide/cd.html) with our CircleCI server so every push to master branch is automatically deployed to staging.

## Contributing

Contributions to this guide are strongly encouraged. If you find an issue with this guide or have an idea on how to improve it, please [open up a new issue](https://github.com/chairseven/lessonhub/issues/new).
