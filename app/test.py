import httplib

conn = httplib.HTTPSConnection("api.sportradar.us")

conn.request("GET", "/nhl-ot4/games/139cbe99-4c04-438e-bd9a-a7abe928a502/boxscore.json?api_key=7zwd7ch6g37zmj5ejcjea4r3")

res = conn.getresponse()
data = res.read()

print(data)