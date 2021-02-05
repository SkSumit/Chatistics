from flask import Flask
from flask_cors import CORS, cross_origin


def create_app():
    app = Flask(__name__)
    CORS(app)

    from chatistics.routes import main
    app.register_blueprint(main)
    return app
