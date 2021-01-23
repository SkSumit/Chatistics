from chatistics.api.summary.summary import summary
from chatistics.api.emoji.emoji import emojicontent


def stats(data):
    stats = {
      "summary" : summary(data),
      "emoji"   : emojicontent(data)
    } 
    return stats