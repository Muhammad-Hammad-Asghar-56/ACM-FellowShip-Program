import http.client

conn = http.client.HTTPSConnection("contract.mexc.com")

headersList = {
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "leverage": "115,",
 "positionId": "2,",
 "symbol": "LTC_USDT" 
}

payload = ""

conn.request("GET", "/mx0vglzAenKBcT5j61/v1/private/position/change_leverage", payload, headersList)
response = conn.getresponse()
result = response.read()

print(result.decode("utf-8"))