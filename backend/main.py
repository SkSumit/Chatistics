from upload.upload import parsefile
from dataframe.token import tokenCreation,corpus
import pandas as pd

path="C:/Users/yashd/Downloads/WhatsApp Chat with Lubna.txt"
content=parsefile(path)
# print(content)
# print(len(content))

content = tokenCreation(content)
# print(content)


with open("demofile2.txt", "w", encoding="utf-8") as f:
    for i in range(len(content)):
        f.write(content[i])
        f.write("\n")
    f.close()

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