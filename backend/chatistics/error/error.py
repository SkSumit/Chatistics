from flask import jsonify


def error(message , errorcode):
    response = jsonify({'message': message})
    response.status_code = errorcode 
    return response
