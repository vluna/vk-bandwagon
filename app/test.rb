require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api.sportradar.us/nhl-ot4/games/139cbe99-4c04-438e-bd9a-a7abe928a502/boxscore.json?api_key=7zwd7ch6g37zmj5ejcjea4r3")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body