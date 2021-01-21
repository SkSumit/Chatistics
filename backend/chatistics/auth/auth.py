from flask import Flask, request, jsonify
from chatistics.error.error import error
from functools import wraps
import jwt


app = Flask(__name__)
app.config['SECRET_KEY'] = 'YASHDEWANGAN'

def check_for_token(func):
        @wraps(func)
        def wrapped(*args, **kwargs):
            token = request.args.get('token')
            if not token:
                return error("Unauthorized, Token is Missing")
            try:
                data = jwt.decode(token, app.config['SECRET_KEY'] )
            except:
                return error("Unauthorized Route, Invalid Route ")
            return func(*args,**kwargs)
        return wrapped 