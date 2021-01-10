#Customize Created Functions
from API.upload.upload import parsefile
from API.upload.check import check
from API.dataframe.token import corpus
from API.dataframe.TXTtoCSV import dataframe
from API.dataframe.preprocessing import preProcess
from API.dataframe.insights import insights
from API.dummy.test import tempory
# from API.wordcloud.wordcloud import WordCloudfun
 
import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_restful import Resource, Api
from flask_httpauth import HTTPBasicAuth
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
app.config["DEBUG"] = True
CORS(app)

#index route
@app.route('/', methods=['GET'])
def hello():
    return "pong"

#Testing Route
@app.route('/testing', methods = ['POST','GET'])
def index():
<<<<<<< HEAD
    if request.method == 'POST': 
        file = request.files['file']
        if file.filename != '':
            file.save(file.filename)                #Save File in Root
            file = check(file.filename)             #check file extension
            content=parsefile(file.filename)        #Readfile
            os.remove(file.filename)                #Remove file from root
            content=corpus(content)                 #Filter the words
            content=preProcess(content)             #Preprocess the data
            df = dataframe(content)                 #
            new_insights=insights(df)               #
            return jsonify(new_insights)    
    else:
        print("Something went wrong")
        return "wrong"
=======
    CORPUS = []
    df = pd.DataFrame()
    path="F:/Downloads/WhatsApp Chat with 3 Bois.txt"
    content=parsefile(path)
    content=corpus(content)
    content=preProcess(content)
    df = dataframe(content)
    new_insights=insights(df)
    return jsonify(new_insights)
    # if request.method == 'POST': 
    #     file = request.files['file']
    #     if file.filename != '':
    #         file.save(file.filename)
    #         content=parsefile(file.filename)
    #         os.remove(file.filename)
    #         content=corpus(content)
    #         content=preProcess(content)
    #         df = dataframe(content)
    #         new_insights=insights(df)
    #         return jsonify(new_insights)
    # else:
    #     print("Something went wrong")
    #     return "wrong"
>>>>>>> 2e7294f2708492450fe550d54b4a78b8aca57a9f


#API Route
@app.route('/api/v1/dummy', methods=['GET'])
def api():
    
    books = tempory()
    return jsonify(books)

<<<<<<< HEAD
=======


>>>>>>> 2e7294f2708492450fe550d54b4a78b8aca57a9f
if __name__ == '__main__':
    app.run(debug=True)