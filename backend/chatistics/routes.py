from chatistics.files.upload import parsefile
from chatistics.dataframe.dataframe import dataframe
from chatistics.dataframe.preprocessing import preprocess
from chatistics.api import insights
from chatistics.dummy.dummyapi import dummyapi
from chatistics.error.error import error
from chatistics.firebase.firebase import db


import pandas as pd
from flask import Flask, jsonify, request, Blueprint
from flask_cors import CORS, cross_origin
import os

main = Blueprint('main', __name__)

# index route


@main.route('/', methods=['GET'])
def hello():
    return 'What ya doing here???  <a href="http://chatistics.vercel.app">Head over to</a>'


@main.route('/api/v1/insights', methods=['POST'])
@cross_origin()
def index():
    if request.method == 'POST':
        try:
            if not request.files or request.files['file'].filename == '':
                raise Exception("Select a file")
            file = request.files['file']
            file.save(file.filename)
            fileName = file.filename
            if not file.filename.endswith('.txt'):
                os.remove(file.filename)
                raise Exception("Wrong file type")

            # Inc upload count in firebase db
            uploadCount = db.child("uploads").get()
            db.child("uploads").set(uploadCount.val())
            db.child("filenames").push(fileName)

            content = parsefile(file.filename)
            date, time, username, messages = preprocess(content)
            df = dataframe(date, time, username, messages)
          
            whatsapp = insights.getData()
            new_insights = whatsapp.analysis(df, fileName)
            db.child("Success").push(fileName)
            return jsonify(new_insights)
        except Exception as e:
            db.child("failure").push(fileName)
            os.remove(file.filename)
            return error(str(e.args), 415)


@main.route('/api/v1/dummy')
def api():
    dummyjson = dummyapi()
    return jsonify(dummyjson)


# Endpoint for storing feedback/polls
@main.route('/api/v1/analytics/polls', methods=['POST'])
def feedback():
    try:
        pollValue = db.child("polls").child(request.json['user']).get().val()
        db.child("polls").child(request.json['user']).set(pollValue + 1)
        print(db.child("polls").get().val())
        return db.child("polls").get().val(), 200
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

# Endpoint for getting analytics


@main.route('/api/v1/analytics', methods=['GET'])
def uploads():
    try:
        uploadCount = db.child("uploads").get().val()
        visited = db.child("visited").get().val()
        return jsonify(uploadCount=uploadCount, visited=visited), 200
    except Exception as e:
        print(e)
        return 'Something Went Wrong', 502
