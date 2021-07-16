import requests, bs4
import re

def page(n):
    res = requests.get('https://www.geeksforgeeks.org/category/puzzles/page/' + str(n)+'/')
    soup = bs4.BeautifulSoup(res.content,"html.parser")
    
    questions = soup.select('.head')

    for question in questions:
        link = question.find('a', attrs = {'href':re.compile("^https://")})
        if link is None:    continue
        handle.write(link.get('href'))
        handle.write('\n')
    

handle = open("question-links.txt","w")
for pg in range(20):
    page(pg+1)
handle.close()