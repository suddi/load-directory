#!/bin/bash

function npmtest() {
    rm -rf node_modules
    npm cache clean
    nvm use $1
    npm install
    npm test
}

function run () {
    case "$CIRCLE_NODE_INDEX" in
        0)
            npm test
            ;;
        1)
            npmtest 4
            ;;
        2)
            npmtest 5
            ;;
        3)
            npmtest 7
            ;;
        *)
            ;;
    esac
}

run
