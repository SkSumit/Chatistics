from chatistics.files.upload import parsefile
from chatistics.files.check import check
from chatistics.dataframe.token import corpus
from chatistics.dataframe.dataframe import dataframe
from chatistics.dataframe.preprocessing import preprocess
from chatistics.api.insights import insights
from chatistics.dummy.test import tempory

import pandas as pd
from flask import Flask, jsonify, request, Blueprint
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os

main = Blueprint('main', __name__)

#index route
@main.route('/', methods=['GET'])
def hello():
    return "pong"

#Testing Route
@main.route('/testing', methods=['POST'])
def index():
    if request.method == 'POST': 
        file = request.files['file']
        if file.filename != '':
            file.save(file.filename)                    #Save File in Root
            if check(file.filename) == True:            #check file extension
                content=parsefile(file.filename)        #Readfile
                os.remove(file.filename)                #Remove file from root
                content=corpus(content)                 #Filter the words
                content=preprocess(content)             #Preprocess the data
                df = dataframe(content)                 #
                new_insights=insights(df)               #
                return jsonify(new_insights)   
            else:
                os.remove(file.filename) 
                print("your file is not in TXT") 
                return "wrong"
    else:
        print("Something went wrong")
        return "wrong"

#API Route
@main.route('/api/v1/dummy', methods=['GET'])
def api():
    books = tempory()
    return jsonify(books)
