def check(filename):
    if filename.endswith('.txt'):
        return True
        
def parsefile(path):
    with open(path,encoding="utf8") as f:
        Content = f.readlines()
    Content = [x.strip() for x in Content]     
    return Content 

