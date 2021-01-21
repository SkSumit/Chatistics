from flask import Flask, request, jsonify
from chatistics.error.error import error
from functools import wraps

def create_app():
    app = Flask(__name__)

    from chatistics.routes import main    
    app.register_blueprint(main)
    return app