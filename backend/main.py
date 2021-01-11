#Customize Created Functions
from upload.upload import parsefile
from dataframe.token import corpus
from dataframe.TXTtoCSV import dataframe
from dataframe.preprocessing import preProcess
from dataframe.insights import insights
from dummy.test import tempory
from werkzeug.utils import secure_filename
import os


import pandas as pd
from flask import Flask, jsonify, request, redirect, flash, url_for, session, g, Response, send_file, make_response
from flask_cors import CORS

app = Flask(__name__)
app.config["DEBUG"] = True

#Add bearer token for authentication
cors = CORS(app, resources={r"*": {"origins": "*"}})


@app.route('/', methods=['GET'])
def hello():
    return "pong"

#Testing Route
@app.route('/testing', methods=['POST'])
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

#API Route
@app.route('/api/v1/dummy', methods=['GET'])
def api():
    
    books = tempory()
    return jsonify(books)

if __name__ == '__main__':
    app.run(debug=True)