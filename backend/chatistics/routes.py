from chatistics.files.upload import parsefile, check
from chatistics.dataframe.token import corpus
from chatistics.dataframe.dataframe import dataframe
from chatistics.dataframe.preprocessing import preprocess
from chatistics.api.insights import insights
from chatistics.dummy.dummyapi import dummyapi
from chatistics.error.error import error

import pandas as pd
from flask import Flask, jsonify, request, Blueprint
from flask_cors import CORS
import os
from flask import abort

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
            file.save(file.filename)                    
            if check(file.filename) == True:            
                content=parsefile(file.filename)        
                os.remove(file.filename)
                if corpus(content) != False:                 
                    content=corpus(content)
                    if preprocess(content) !=False:
                        try:                 
                            content=preprocess(content) 
                            try:            
                                df = dataframe(content)                 
                                new_insights=insights(df)               
                                return jsonify(new_insights)
                            except:
                                return error("Wrong file Content")
                        except:
                            return error("Wrong file Content")
                    else:
                        return error("Wrong file Content") 
            else:
                os.remove(file.filename) 
                return error("Wrong file format")

#API Route
@main.route('/api/v1/dummy', methods=['GET'])
def api():
    dummyjson = dummyapi()
    return jsonify(dummyjson)
