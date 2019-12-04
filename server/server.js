var WebSocketServer = require('ws').Server;
//监听端口8888，客户端连接这个端口
var wss = new WebSocketServer({ port: 8888, verifyClient: socketVerify });
 
//连接验证，可以写验证语句
function socketVerify(info) {
    console.log(info.req.url); 
    return true;
}

wss.on('connection', function (ws) {
  //输出连接客户端信息
  console.log("connection");
  //console.log(ws._ultron.ee._idleStart);
  
  ws.on('message', function (data, flags) {
    console.log(data,'----');
      wss.clients.forEach(function (client) {
          client.send(data); //读取到的数据发送给所有客户端
          //console.log(data,'----');
      });
  });
  ws.on('close', function (e) {
      console.log('colse');
  });

});
