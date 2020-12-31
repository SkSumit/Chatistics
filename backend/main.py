from upload.upload import parsefile
from dataframe.token import tokenCreation,corpus
from dummy.test import tempory

import pandas as pd
from flask import Flask, jsonify, request, redirect, flash, url_for, session, g, Response, send_file, make_response

app = Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def index():
    return "<h1>building Something Cool</h1><p> Dorime </p>"

@app.route('/api/v1/dummy', methods=['GET'])
def api():
    # path="C:/Users/yashd/Downloads/WhatsApp Chat with Lubna.txt"
    # content=parsefile(path)
    books = tempory()
    return jsonify(books)


# print(content)
# print(len(content))

#content = tokenCreation(content)
# print(content)


# with open("demofile2.txt", "w", encoding="utf-8") as f:
#     for i in range(len(content)):
#         f.write(content[i])
#         f.write("\n")
#     f.close()

# x=corpus(content)
# print(x[3])



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