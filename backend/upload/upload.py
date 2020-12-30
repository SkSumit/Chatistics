def parsefile(path):
    myfile = open(path, "r",encoding="utf8")         # open path file for reading text
    contents = myfile.read()                         # read the entire file to string
    myfile.close()                                   # close the file
    return contents        