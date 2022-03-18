function errorHandle (res) {
  const Headers = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
    'Content-Type': 'application/json'
  }
  res.writeHead(400, Headers)
  res.write(JSON.stringify({
    "status": "error",
    "message": "傳入資料格式錯, 或 ID錯誤"
  }))
  res.end()
}

module.exports = errorHandle