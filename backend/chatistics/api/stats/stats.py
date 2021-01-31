from chatistics.api.summary.summary import summary
from chatistics.api.emoji.emoji import emojicontent
from chatistics.api.wordcloud.wordcloud import wordcloud
from chatistics.api.heatmap.heatmap import heatmap
from chatistics.api.user.userspecific import userspecific
from chatistics.api.analysis.analysis import analysis


def stats(data):
    stats = {
      "summary"       :   summary(data),
      "emoji"         :   emojicontent(data),
      "heatmap"       :   heatmap(data),
      "wordcloud"     :   wordcloud(data),
      "userspecific"  :   userspecific(data),
      "analysis"      :   analysis(data)
    } 
    return stats