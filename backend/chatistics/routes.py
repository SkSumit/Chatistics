from chatistics.files.upload import parsefile, check
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
        file = request.files['file']
        if file.filename != '':
            file.save(file.filename)                    
            if check(file.filename):           
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
@main.route('/api/v1/dummy')
def api():
    dummyjson = dummyapi()
    return jsonify(dummyjson)

        
