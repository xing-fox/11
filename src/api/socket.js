/* eslint-disable */

var host = window.location.host
var ht = location.protocol
var wsServer
if (host == "www.hnjhtc.cn" && ht == 'https:') {
  wsServer = "wss://www.77dvg.com:8088"
} else {
  wsServer = 'ws://45.126.123.196:8081'
}
//console.log(host, ht, wsServer)
//var wsServer = 'wss://45.119.63.244:8081' // 服务器地址
var websocket // = new WebSocket(wsServer); //创建WebSocket对象
var heartTimer
var user_name = getCookie('web_name')//"shuang888"//"lei888"//getCookie('web_name')//"lei888"; getCookie('web_name')"shuang888"
var user_pwd = getCookie('web_pass')//"aabb1122"//"bbbaaa888"//getCookie('web_pass')//"aabb1122";getCookie('web_pass')"12345678"
// var user_name = 'cs009' //"shuang888"//"lei888"//getCookie('web_name')//"lei888"; getCookie('web_name')"shuang888"
// var user_pwd = 'aaabbb888' //"aabb1122"//"bbbaaa888"//getCookie('web_pass')//"aabb1122";getCookie('web_pass')"12345678"
var userVo = {};//用户信息
var callBackDic = {};
var callFailDic = {}

var debug = false;
var error_desks = [];
var failConnect = false

//获取cookie
function getCookie (name) {
  var strcookie = document.cookie;//获取cookie字符串
  var arrcookie = strcookie.split("; ");//分割
  //遍历匹配
  for (var i = 0; i < arrcookie.length; i++) {
    var arr = arrcookie[i].split("=");
    if (arr[0] == name) {
      return arr[1];
    }
  }
  return "";
}

function socketServer () {
  websocket = new WebSocket(wsServer)
  // websocket.content(wsServer);
  websocket.onopen = function (evt) {
    console.log("已经建立连接----open");

    sendMessage("login", { name: user_name, password: user_pwd, app: 7 });
    //sendMessage("jack_pot");
  };
  websocket.onclose = function (evt) {
    console.log("已经关闭连接----close");
    failConnect = true
    callFailDic['failConntex'][0](this, true)

    clearInterval(heartTimer);
  };
  websocket.onmessage = function (evt) {
    //收到服务器消息，使用evt.data提取
    //console.log(evt.data);
    if (evt.data != "pong") {
      var obj = JSON.parse(evt.data);
    } else {
      return;
    };
    // 0
    if (obj.status == 0) {
      if (debug) {
        console.log("协议反馈错误！！！！！code:" + obj.code + "---data:" + obj.data + "------callback:::" + obj.callback + "-----------" + evt.data);
      }

      var arr = callFailDic[obj.callback];
      if (arr) {
        for (var i = 0; i < arr.length; i++) {
          arr[i].apply(this, [obj]);
        }
      };
      console.log("失败", obj);
    } else {
      if (obj.callback != "baijiale_mipai" && obj.callback != "count_down" && obj.callback != "desk_members" && obj.callback != "member_bet" && obj.callback != "batch_count_down" && obj.callback != "baijiale_bet_summary") {
        if (debug) {
          console.log("------callback:::" + obj.callback + "协议接受成功！！！！-code:" + obj.code + "---data:" + evt.data);
          console.log(userVo);
        }
      };
      if (obj.callback == "push_out_member") {
        console.log("------callback:::" + obj.callback + "协议接受成功！！！！-code:" + obj.code + "---data:" + evt.data);
      };
      var arr = callBackDic[obj.callback];
      var f;
      if (arr) {
        for (var i = 0; i < arr.length; i++) {
          arr[i].apply(this, [obj.data]);
        }
        if (obj.callback == "login") {
          requestRegularData();
        };
      };
    };
  };
  websocket.onerror = function (evt) {
    console.log("产生异常-----onerror" + evt.data);
  };
}

function addFailListener (type, callback) {
  if (!callFailDic[type]) callFailDic[type] = []
  callFailDic[type].push(callback)
}
function addMessageListener (type, callback) {
  if (!callBackDic[type]) callBackDic[type] = []
  callBackDic[type].push(callback)
}
function removeMessageListener (type, callback) {
  if (!callBackDic[type]) return
  callBackDic[type].splice(callBackDic[type].indexOf(callback))
}

function requestRegularData () {
  heartTimer = setInterval(heartTimerEvent, 1000)
};

function heartTimerEvent () {
  websocket.send('ping')
};
function sendMessage (type, data = null) {
  var obj = {}
  obj.method = type
  obj.callback = type
  obj.app = 7
  obj.data = data
  if (debug) {
    console.log('发送webSocket的数据是字符串：：：：', JSON.stringify(obj))
  }
  if (type == 'member_bet') {
    console.log('发送webSocket的数据是字符串：：：：', JSON.stringify(obj))
  }
  websocket.send(JSON.stringify(obj))
};

function netError (vo) {
  console.log("游戏错误==" + JSON.stringify(vo));
  var str;
  switch (vo.callback) {
    case "baijiale_bet": {
      switch (vo.code) {
        case 301: {
          str = "余额不足";
          break;
        };
        case 302: {
          str = "超出上限";
          break;
        };
        case 303: {
          str = "低于下限";
          break;
        };
        case 304: {
          str = "下注失败";
          break;
        };
        case 305: {
          str = "下注失败";
          break;
        };
        default: {
          str = "下注失败";
          break;
        };
      };
      break;
    };
    case "longhu_bet": {
      switch (vo.code) {
        case 301: {
          str = "余额不足";
          break;
        };
        case 302: {
          str = "超出上限";
          break;
        };
        case 303: {
          str = "低于下限";
          break;
        };
        case 304: {
          str = "下注失败";
          break;
        };
        case 305: {
          str = "下注失败";
          break;
        };
        default: {
          str = "下注失败";
          break;
        };
      };
      break;
    };
    case "enter_desk": {
      error_desks.push(vo.data.desk_id);
    };
    case "password": {
      switch (vo.code) {
        case 402: {
          str = '旧密码错误';
          //updateFail(str)
        }
      }
    }
    default: {
      return;
      break;
    }
  }
  return vo;
  console.log(str)
}

//全局变量用户信息
var ws = {
  failConnect: failConnect,
  wsServer: wsServer,
  websocket: websocket,
  userVo: userVo,
  socketServer: socketServer,
  sendMessage: sendMessage,
  removeMessageListener: removeMessageListener,
  addMessageListener: addMessageListener,
  addFailListener: addFailListener
}
export default ws