def parsefile(path):
    with open(path,encoding="utf8") as f:
        Content = f.readlines()    
    return Content 

