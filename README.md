# Project Name

> Server-Monitoring-APP

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [How to run the app](#How-to-run-the-app)
- [Status](#staus)
- [Contact](#contact)

## General info

Server-Monitoring-APP was built using NodeJS and Prompt library. The server to be monitored was written in Python and it fails about 25% of the time.
Users can run this program on their terminal to see the output of every check done to the Server. Users can enter number of seconds as a parameter and in return get a message on the terminal telling them if the server has failed or not.

## Technologies

- NodeJS
- prompt- version 1.0.0

## How to run the app

Start the server and keep it running on the background by creating a virtual environment in the project directory and installing the dependencies in "requirements.txt". 1) Open a bash terminal or any other type of terminal and navigate to the project directory (Be sure there is no instance of the server already running) 2) Run:
python -m venv env
source env/Scripts/activate
pip install -r requirements.txt
python server.py 3) The sever is now running.

- Next we need to open a new terminal to start a node server that will run app.js in order to start the HealthCheck on the server
  1. Open a new bash terminal or any other type of terminal and navigate to the project directory
  2. Run:
     node app.js
  3. Then follow the instructions in terminal to start the HealthCheck
  4. To stop the HealthCheck at any time, enter "CTRL+C"
  5. To restart the HealthCheck, enter "CTRL+C" followed by "node app.js"

## Status

Project is:completed

## Contact

Created by [@ogbeche77](https://github.com/ogbeche77)
