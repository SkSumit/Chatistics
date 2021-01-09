#Customize Created Functions
from upload.upload import parsefile
from dataframe.token import corpus
from dataframe.TXTtoCSV import dataframe
from dataframe.preprocessing import preProcess
from dataframe.insights import insights
from dummy.test import tempory
from werkzeug.utils import secure_filename
# from JSON.wordcloud import WordCloudfun
 
import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_restful import Resource, Api
from flask_httpauth import HTTPBasicAuth
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
# api = Api(app, prefix="/api/v1/dummy")
# auth = HTTPBasicAuth()
app.config["DEBUG"] = True

#Add bearer token for authentication
# cors = CORS(app, resources={r"*": {"origins": "*"}})
CORS(app)



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

#Testing Route
# @cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
@app.route('/post', methods = ['POST'])
def postfile():
    uploaded_file = request.files['file']
    if uploaded_file.filename != '':
        # uploaded_file.save(uploaded_file.filename)
        # mystring = TextIOWrapper(uploaded_file)
        print(uploaded_file)
        content=parsefile(uploaded_file.filename)
        print(content)

    # print(file)
    # content=parsefile(file)
    # # print(content)
    # f = open("demofile3.txt", "w")
    # f.write(content)
    # f.close()

    # filename = secure_filename(file.filename)
    # print(parsefile(filename))
    # df = pd.DataFrame()
    # path="C:/Users/yashd/Downloads/WhatsApp Chat with Sumit Skn.txt"
    # content=parsefile(file)
    # # print(content[6])
    # content=corpus(content)
    # content=preProcess(content)
    
    """     SAVING DATA IN content VARIABLE      """

    
    """IMPORTANT LINES FOR TESTING"""
    # print(len(content))
    # print(content[32])
    #for i in range(len(content)):
    #print(content[1])
    # df = dataframe(content)
    # insights(df)
    #print(df)
    #df.to_csv('dummy.csv')
    return "ping"





if __name__ == '__main__':
    app.run(debug=True)