from chatistics.api.summary.summary import summary
from chatistics.api.emoji.emoji import emojicontent
from chatistics.api.wordcloud.wordcloud import wordcloud

def stats(data):
    stats = {
      "summary"    : summary(data),
      "emoji"      : emojicontent(data),
      "wordcloud"  : wordcloud(data)
    } 
    return stats