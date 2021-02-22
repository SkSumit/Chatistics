from chatistics.files.upload import parsefile
from chatistics.dataframe.token import corpus
from chatistics.dataframe.dataframe import dataframe
from chatistics.dataframe.preprocessing import preprocess
from chatistics.api import insights
from chatistics.dummy.dummyapi import dummyapi
from chatistics.error.error import error
from chatistics.auth.auth import check_for_token
from chatistics.firebase.firebase import db


import pandas as pd
from flask import Flask, jsonify, request, Blueprint
from flask_cors import CORS, cross_origin
import os

main = Blueprint('main', __name__)

# index route


@main.route('/', methods=['GET'])
def hello():
    return "Not Logged In"

# Testing Route


@main.route('/testing', methods=['POST'])
@cross_origin()
def index():
    if request.method == 'POST':
        # try:
            if not request.files or request.files['file'].filename == '':
                raise Exception("Select a file")
            file = request.files['file']
            file.save(file.filename)
            fileName = file.filename
            if not file.filename.endswith('.txt'):
                os.remove(file.filename)
                raise Exception("Wrong file type")
            content = parsefile(file.filename)
            content = preprocess(content)
            df = dataframe(content)
            whatsapp = insights.getData()
            new_insights = whatsapp.analysis(df, fileName)
            return jsonify(new_insights)
        # except Exception as e:
        #     return error(str(e.args), 415)


@main.route('/api/v1/dummy')
def api():
    dummyjson = dummyapi()
    return jsonify(dummyjson)


# Endpoint for storing feedback
@main.route('/api/v1/feedback', methods=['POST'])
def feedback():
    try:
        db.child("feedback").push(request.json)
        return 'Thanks for the feedback', 200
    except Exception as e:
        print(e)
        return 'Something Went Wrong', 502

# Endpoint for storing visitor counts


@main.route('/api/v1/analytics/visited', methods=['POST'])
def analytics():
    try:
        visited = db.child("visited").get()
        db.child("visited").set(visited.val() + 1)
        return '', 200
    except Exception as e:
        print(e)
        return 'Something Went Wrong', 502

# Endpoint for storing visitor counts


@main.route('/api/v1/analytics/uploads', methods=['POST'])
def uploads():
    try:
        uploadCount = db.child("uploads").get()
        db.child("uploads").set(uploadCount.val() + 1)
        return '', 200
    except Exception as e:
        print(e)
        return 'Something Went Wrong', 502
