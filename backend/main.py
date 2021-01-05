#Customize Created Functions
from upload.upload import parsefile
from dataframe.token import tokenCreation,corpus
from dataframe.TXTtoCSV import dataframe
from dummy.test import tempory



from flask import Flask, jsonify, request, redirect, flash, url_for, session, g, Response, send_file, make_response
from flask_cors import CORS

app = Flask(__name__)
app.config["DEBUG"] = True

#Add bearer token for authentication
cors = CORS(app, resources={r"*": {"origins": "*"}})

#Testing Route
@app.route('/', methods=['GET'])
def index():
    CORPUS = []
    path="C:/Users/yashd/Downloads/WhatsApp Chat with Kulkarni New.txt"
    content=parsefile(path)
    # print(content[6])
    content=corpus(content)
    
    """     SAVING DATA IN content VARIABLE      """

    
    """IMPORTANT LINES FOR TESTING"""
    # print(len(content))
    if(len(content[3016])==0):
        print("Line 3016 is blank")
    if(len(content[3015])==0):
        print("Line 3015 is blank")  
    else:  
        print("Line 3015 is NOT blank")
        # print(len(content[3016])
        # print(content[3015])
        
        # print(content[3017])
        # print(content[3018])
    # for i in range(len(content)):
    #     print((content[i]))
    # df = dataframe(content)
    # print(df.head())
    return "ping"

@app.route('/ping', methods=['GET'])
def pong():
    return "pong"

#API Route
@app.route('/api/v1/dummy', methods=['GET'])
def api():
    books = tempory()
    return jsonify(books)


# def input():
#     df=pd.read_csv('witness_statement_pack_timeline event dates.csv')
    
#     df1 = df.sort_values(['DATE'])
#     for i  in range(len(df1)):
#         if(df1['DATE'][i]!="NO DATE"):
#             if (df1['DATE'][i][:4]>="2010" and df1['DATE'][i][:4]<="2025"): #change here range only 
#                 print(i,"->",df1['DATE'][i])

    
# input()


if __name__ == '__main__':
    app.run(debug=True)