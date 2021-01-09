#Customize Created Functions
from upload.upload import parsefile
from dataframe.token import corpus
from dataframe.TXTtoCSV import dataframe
from dataframe.preprocessing import preProcess
from dataframe.insights import insights
from dummy.test import tempory
from JSON.wordcloud import WordCloudfun
 
import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_restful import Resource, Api
from flask_httpauth import HTTPBasicAuth
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
api = Api(app, prefix="/api/v1/dummy")
auth = HTTPBasicAuth()
app.config["DEBUG"] = True

#Add bearer token for authentication
cors = CORS(app, resources={r"*": {"origins": "*"}})


@app.route('/', methods=['GET'])
def hello():
    return "pong"

#Testing Route
@app.route('/testing', methods = ['POST'])
def index():
    if request.method == 'POST': 
        file = request.files['file']
        if file.filename != '':
            file.save(file.filename)
            content=parsefile(file.filename)
            os.remove(file.filename)
            content=corpus(content)
            content=preProcess(content)
            df = dataframe(content)
            new_insights=insights(df)
            return jsonify(new_insights)
    else:
        print("Something went wrong")
        return "wrong"


#API Route
@app.route('/api/v1/dummy', methods=['GET'])
def api():
    
    books = tempory()
    return jsonify(books)

if __name__ == '__main__':
    app.run(debug=True)