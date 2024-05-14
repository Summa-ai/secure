#!/bin/bash


PYTHON_COMMAND=$(which python3 || which python)

if [ -z "$PYTHON_COMMAND" ]; then
    echo "Python is not installed or not found in PATH"
    exit 1
fi

$PYTHON_COMMAND main.py