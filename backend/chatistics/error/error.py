from flask import jsonify


def error(message):
    response = jsonify({'message': message})
    response.status_code = 400 
    return response
