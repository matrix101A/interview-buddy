import requests, bs4
import re, csv

def scrape_it(link,a):
    row = []
    row.append(a)
    row.append(link)

    res = requests.get(link)
    soup = bs4.BeautifulSoup(res.content,'html.parser')
    diff_lvl_class = soup.select(".meta")
    link_htm = str(diff_lvl_class[0].find('a'))

    ques_class = soup.select('.text')
    question_htm = str((soup.select('p'))[0])

    question = ""
    flag = True
    for ch in question_htm:
        if ch == '<':
            flag = False
            continue
        if ch == '>':
            flag = True
            continue
        if flag:
            question += ch

    row.append(question)

    flag = False

    for ch in link_htm:
        if flag:
            if ch == 'b' or ch == 'e' or ch == 'E' or ch == 'B' or ch is None:
                row.append('easy')
            elif ch == 'm' or ch == 'M':
                row.append('medium')
            else:
                row.append('hard')
            break

        elif ch == '>':
            flag = True
            continue
    rows.append(row)
    #print(row[0],row[3])


links = open("question-links.txt","r")
rows = []
fields = ['id','question','solution','difficulty']

filename = "DataBase.csv"

a = 1
for link in links:
    scrape_it(link,a)
    print(str(a)+"...")
    a += 1

print("\n\n\nConverting to csv file...\n")

with open(filename,'w') as csvfile:
    csvwriter = csv.writer(csvfile)
    csvwriter.writerow(fields)
    a = 1
    for row in rows:
        csvwriter.writerow(row)
        print("\nadded "+str(a)+" qeustions\n")
        a += 1

print("Done :)")