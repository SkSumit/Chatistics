from flask import Flask
from flask_cors import CORS, cross_origin
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address


def create_app():
    app = Flask(__name__)
    CORS(app)
    limiter = Limiter(
        app,
        key_func=get_remote_address,
        default_limits=["200 per day", "50 per hour"]
    )

    from chatistics.routes import main
    app.register_blueprint(main)
    return app
