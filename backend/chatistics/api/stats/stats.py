from chatistics.api.summary.summary import summary
from chatistics.api.emoji.emoji import emojicontent
from chatistics.api.wordcloud.wordcloud import wordcloud
from chatistics.api.heatmap.heatmap import heatmap


def stats(data):
    stats = {
      "summary"    : summary(data),
      "emoji"      : emojicontent(data),
      "wordcloud"  : wordcloud(data),
      "heatmap"    : heatmap(data),
    } 
    return stats