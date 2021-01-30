from chatistics.files.upload import parsefile
from chatistics.dataframe.token import corpus
from chatistics.dataframe.dataframe import dataframe
from chatistics.dataframe.preprocessing import preprocess
from chatistics.api.insights import insights
from chatistics.dummy.dummyapi import dummyapi
from chatistics.error.error import error
from chatistics.auth.auth import check_for_token


import pandas as pd
from flask import Flask, jsonify, request, Blueprint
from flask_cors import CORS,cross_origin
import os

main = Blueprint('main', __name__)

#index route
@main.route('/', methods=['GET'])
def hello():
    return "Not Logged In"

#Testing Route
@main.route('/testing', methods=['POST'])
@cross_origin()
def index():
    if request.method == 'POST':                     
        try:
            if not request.files or request.files['file'].filename == '':
                raise Exception("Select a file")
            file = request.files['file']
            file.save(file.filename)
            if not file.filename.endswith('.txt'):
                os.remove(file.filename)
                raise Exception("Wrong file type")
            content=parsefile(file.filename)
            content=preprocess(content)
            df = dataframe(content)
            return jsonify(insights(df))
        except Exception as e:
            return error(str(e.args[0]) , 415)

#API Route
@main.route('/api/v1/dummy')
def api():
    dummyjson = dummyapi()
    return jsonify(dummyjson)

        
