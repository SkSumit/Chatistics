import os

def parsefile(path):
    try:
        with open(path,encoding="utf8") as f:
            Content = f.readlines()
        if len(Content) == 0:
            print(len(Content))
            raise Exception("File empty")
        else:
            Content = [x.strip() for x in Content]
            os.remove(path)    
            return Content
    except(IOError):
        raise Exception("File cannot be parsed at the moment")
