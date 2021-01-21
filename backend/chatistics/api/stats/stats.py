from chatistics.api.summary.summary import summary


def stats(data):
    stats = {
      "summary" : summary(data) 
    } 
    return stats