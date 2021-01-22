from collections import Counter
import pandas as pd
import re


def words_list_nested(data):
    words = [x.split() for x in data['MESSAGE'].tolist()]
    return words

def word_list(Word):
    Words,letters,links = [],[],[]
    for sublist in Word:           #Creating a SINGLE LIST from NESTED LIST
        for item in sublist:
            r1 = re.search('.*http',item)
            if r1:
                links.append(item)
            if item != "<media" and item != "omitted>":   #have to add stops words
                Words.append(item)
            for letter in item:
                letters.append(letter)
    return len(Words), len(letters), len(links);

def wordCount(data):
    word=words_list_nested(data)
    word, letter, link = word_list(word)
    return word, letter, link;

def summary(data):
    word, letter, link = wordCount(data)
    summary = {
        'total_days' : len(data['DATE'].unique()),
        'total_message' : len(data[data['MESSAGE'] != ""]),
        'total_words' : word,
        'total_letters' : letter,
    }
    return summary
