# Lesson Hub Website

[![Circle CI](https://circleci.com/gh/chairseven/lessonhub.svg?style=svg&circle-token=f30e5fb287a794e5f870a1bca87e19e6813d71de)](https://circleci.com/gh/chairseven/lessonhub) [![Code Climate](https://codeclimate.com/repos/54be453269568010d4002e93/badges/cf9e72d7b6a2ddc0a993/gpa.svg)](https://codeclimate.com/repos/54be453269568010d4002e93/feed)

Main website for Lesson Hub.

## Links

* [Lesson Hub Staging](https://lessonhub-staging.herokuapp.com/)
* [Lesson Hub @ Pivotal Tracker](https://www.pivotaltracker.com/n/projects/1244856)
* [Chairseven @ Slack](https://chairseven.slack.com)

## Prerequisites

You will need the following things properly installed on your machine.

Backend:

* [Git](http://git-scm.com/)
* [Ruby](https://www.ruby-lang.org/)
* [Ruby on Rails](http://rubyonrails.org/)
* [PostgreSQL](http://www.postgresql.org/)

Frontend:

* [Node.js](http://nodejs.org/) (with NPM)
* [PhantomJS](http://phantomjs.org/)
* [Bower](http://bower.io/) (`npm install -g bower`)
* [Ember CLI](http://www.ember-cli.com/) (`npm install -g ember-cli`)

## Organization

Lesson Hub Website consists of two major parts, divided in folders:

* Ruby on Rails API
* Ember.js Browser Application

## Development

Use these top-level commands

```shell
rake     # runs both frontend and backend tests
rake run # starts both frontend and backend server
```

After that, visiting [localhost:4200](http://localhost:4200) should show you the Lessonhub index page.

Check [Development Guide](DEVELOPMENT.md) for more info about setting up your local machine for development.
