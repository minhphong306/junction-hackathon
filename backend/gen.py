from feature import FeatureExtraction
import csv

class_value = 1
data = []
raw_header = 'Index,UsingIP,LongURL,ShortURL,Symbol@,Redirecting//,PrefixSuffix-,SubDomains,HTTPS,DomainRegLen,Favicon,NonStdPort,HTTPSDomainURL,RequestURL,AnchorURL,LinksInScriptTags,ServerFormHandler,InfoEmail,AbnormalURL,WebsiteForwarding,StatusBarCust,DisableRightClick,UsingPopupWindow,IframeRedirection,AgeofDomain,DNSRecording,WebsiteTraffic,PageRank,GoogleIndex,LinksPointingToPage,StatsReport,class'
data.append(raw_header.split(','))

with open('input1.txt', 'r') as f:
    for index, url in enumerate(f):
        print("Processing item: " + str(index))
        obj = FeatureExtraction(url, index, class_value)
        data.append(obj.getFeaturesList())

with open("output1.csv", "w", newline="") as f:
    writer = csv.writer(f)

    for row in data:
        writer.writerow(row)