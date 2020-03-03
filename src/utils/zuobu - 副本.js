/* eslint-disable */
import zrender  from 'zrender'
var game;
var delay;
var _arr = [];
var o = {};//下注金额
var tochinse1 = { bet_xiand: "xian_dui", bet_xian: 'xian', bet_he: 'he', bet_zhuang: "zhuang", bet_zhuangd: 'zhuang_dui', bet_long: 'long', bet_dthe: 'he', bet_hu: 'hu' }
var gameId
// var current_bet;
// var _index;

//为了保证图片加载完成
var container = document.getElementsByClassName('zuobu')[0];
// var timer=document.getElementsByClassName('time-location')[0];
var imglist1 = {
  bet_long: { image_url: '../assets/zuobu/dragon.png', x: 110, y: 102 },
  bet_hu: { image_url: '../assets/zuobu/tiger', x: 210, y: 102 },
  bet_dthe: { image_url: '../assets/zuobu/tie_dt', x: 308, y: 102 }
};
//duo ren 
var imglist2 = {
  bet_xian: { image_url: '../assets/zuobu/player', x: 110, y: 102 },
  bet_zhuang: { image_url: '../assets/zuobu/banker', x: 192, y: 100 },
  bet_xiand: { image_url: '../assets/zuobu/playerpair', x: 266, y: 100 },
  bet_zhuangd: { image_url: '../assets/zuobu/bankerpair', x: 740, y: 100 },
  bet_he: { image_url: '../assets/zuobu/tie', x: 470, y: 150 },
  bet_super: { image_url: '../assets/zuobu/super6', x: 477, y: 105 }
};
//dan bu mianshui
var imglist3 = {
  bet_xian: { image_url: '../assets/dan/max_player', x: 245, y: 120 },
  bet_zhuang: { image_url: '../assets/dan/max_banker', x: 691, y: 120 },
  bet_xiand: { image_url: '../assets/dan/max_playerpair', x: 90, y: 109 },
  bet_zhuangd: { image_url: '../assets/dan/max_bankerpair', x: 880, y: 109 },
  bet_he: { image_url: '../assets/dan/max_tie_super', x: 533, y: 126 },
  bet_super: { image_url: '../assets/dan/max_super6', x: 513, y: 218 }
};
//super  mianshui
var imglist5 = {
  bet_xian: { image_url: '../assets/dan/max_player', x: 245, y: 120 },
  bet_zhuang: { image_url: '../assets/dan/max_banker', x: 691, y: 120 },
  bet_xiand: { image_url: '../assets/dan/max_playerpair', x: 90, y: 109 },
  bet_zhuangd: { image_url: '../assets/dan/max_bankerpair', x: 880, y: 109 },
  bet_he: { image_url: '../assets/dan/max_tie', x: 513, y: 125 }//,
  //bet_super:{image_url:'../assets/dan/max_super6'),x:513,y:218}
};

var imglist4 = {
  bet_long: { image_url: '../assets/dan/max_dragon', x: 128, y: 128 },
  bet_hu: { image_url: '../assets/dan/max_tiger', x: 740, y: 128 },
  bet_dthe: { image_url: '../assets/dan/max_tie_dt', x: 455, y: 150 }
};



function timeLocation (text, x, y, rotate) {
  var zr = zrender.init(timer);
  var text = new zrender.Text({
    position: [x, y],
    style: {
      text: text,
      opacity: 1,
      textFill: '#F0E0BB',
      fontSize: 12,
      fontWeight: 'bold'
    },
    silent: true

  });
  zr.add(text)
  $('.time-rotate')[0].style.webkitTransform = "rotate(" + rotate + "deg)";
  $('.time-rotate')[0].style.MozTransform = "rotate(" + rotate + "deg) ";
  $('.time-rotate')[0].style.msTransform = "rotate(" + rotate + "deg) ";
  $('.time-rotate')[0].style.OTransform = "rotate(" + rotate + "deg)  ";
  $('.time-rotate')[0].style.transform = "rotate(" + rotate + "deg) ";
}



export function Gamezuo (elememt, gameId) {
  this.element = elememt;
  this.gameId = gameId;
  gameId = gameId
  //不同位置对应的下注区的位置
  this.peilvLocation = {
    baijiale: {
      duo: { bet_zhuang: { x: 0, y: 0 }, bet_xian: { x: 0, y: 60 }, group: { x: 520, y: 195 } },
      dan: { bet_xian: { x: 0, y: 0 }, bet_zhuang: { x: 450, y: 0 }, bet_he: { x: 225, y: 0 }, group: { x: 310, y: 250 } },
      superdan: { bet_he: { x: 220, y: -100 } }
    },
    longhu: {
      duo: { bet_he: { x: 0, y: 0 }, bet_xian: { x: 0, y: 65 }, bet_zhuang: { x: 0, y: 135 }, group: { x: 520, y: 110 } },
      dan: { bet_zhuang: { x: 0, y: 0 }, bet_xian: { x: 550, y: 0 }, bet_he: { x: 270, y: 0 }, group: { x: 270, y: 250 } }
    }
  }
  this.danlocal_list = {
    longhu: {
      bet_long: {
        x: 320,
        y: 105,
        tan: {
          left: '3.35em',
          top: '2.0em'
        }
      },
      bet_hu: {
        x: 900,
        y: 95,
        tan: {
          left: '9.23em',
          top: '1.9em'
        }
      },
      bet_dthe: {
        x: 610,
        y: 115,
        tan: {
          left: '6.2em',
          top: '1.8em'
        }
      }
    },
    mianshui: {
      bet_xian: {
        x: 420,
        y: 82,
        tan: {
          left: '4.4em',
          top: '1.6em'
        }
      },
      bet_zhuang: {
        x: 793,
        y: 82,
        tan: {
          left: '8.1em',
          top: '1.6em'
        }
      },
      bet_xiand: {
        x: 215,
        y: 32,
        tan: {
          left: '2.35em',
          top: '1.1em'
        }
      },
      bet_zhuangd: {
        x: 995,
        y: 40,
        tan: {
          left: '10.1em',
          top: '1.2em'
        }
      },
      bet_he: {
        x: 600,
        y: 72,
        tan: {
          left: '6.2em',
          top: '1.6em'
        }
      },
      bet_long: {
        x: 1040,
        y: 55,
        tan: {
          left: '10.5em',
          top: '1.6em'
        }
      },
      bet_hu: {
        x: 940,
        y: 35,
        tan: {
          left: '9.55em',
          top: '1.4em'
        }
      },
      bet_dthe: {
        x: 870,
        y: 20,
        tan: {
          left: '8.86em',
          top: '1.2em'
        }
      },
      bet_super: {
        x: 615,
        y: 152,
        tan: {
          left: '6.3em',
          top: '2.3em'
        }
      }
    },
    baijiale: {
      bet_xian: {
        x: 420,
        y: 82,
        tan: {
          left: '4.4em',
          top: '1.6em'
        }
      },
      bet_zhuang: {
        x: 793,
        y: 82,
        tan: {
          left: '8.1em',
          top: '1.6em'
        }
      },
      bet_xiand: {
        x: 215,
        y: 32,
        tan: {
          left: '2.35em',
          top: '1.1em'
        }
      },
      bet_zhuangd: {
        x: 995,
        y: 40,
        tan: {
          left: '10.1em',
          top: '1.2em'
        }
      },
      bet_he: {
        x: 605,
        y: 82,
        tan: {
          left: '6.2em',
          top: '1.7em'
        }
      },
      bet_long: {
        x: 1040,
        y: 55,
        tan: {
          left: '10.5em',
          top: '1.6em'
        }
      },
      bet_hu: {
        x: 940,
        y: 35,
        tan: {
          left: '9.55em',
          top: '1.4em'
        }
      },
      bet_dthe: {
        x: 870,
        y: 20,
        tan: {
          left: '8.86em',
          top: '1.2em'
        }
      }
    }
  }
  this.local_list = {
    1: {
      group: {},
      movegroup: {},
      s_loca: { x: 1095, y: 56 },
      bet_super: {
        x: 705,
        y: 18,
        tan: {
          left: '7.2em',
          top: '1.3em'
        }
      },
      bet_xian: {
        x: 1050,
        y: 50,
        tan: {
          left: '10.7em',
          top: '1.6em'
        }
      },
      bet_zhuang: {
        x: 970,
        y: 35,
        tan: {
          left: '9.9em',
          top: '1.5em'
        }
      },
      bet_xiand: {
        x: 435,
        y: 62,
        tan: {
          left: '4.5em',
          top: '1.7em'
        }
      },
      bet_zhuangd: {
        x: 905,
        y: 10,
        tan: {
          left: '9.2em',
          top: '1.3em'
        }
      },
      bet_he: {
        x: 705,
        y: 62,
        tan: {
          left: '7.2em',
          top: '1.7em'
        }
      },
      bet_long: {
        x: 1040,
        y: 55,
        tan: {
          left: '10.5em',
          top: '1.6em'
        }
      },
      bet_hu: {
        x: 940,
        y: 35,
        tan: {
          left: '9.55em',
          top: '1.4em'
        }
      },
      bet_dthe: {
        x: 870,
        y: 20,
        tan: {
          left: '8.86em',
          top: '1.2em'
        }
      }
    },
    2: {
      group: {},
      movegroup: {},
      s_loca: { x: 995, y: 175 },
      bet_super: {
        x: 665,
        y: 18,
        tan: {
          left: '6.9em',
          top: '1.3em'
        }
      },
      bet_xian: {
        x: 970,
        y: 135,
        tan: {
          left: '9.9em',
          top: '2.2em'
        }
      },
      bet_zhuang: {
        x: 905,
        y: 90,
        tan: {
          left: '9.3em',
          top: '1.8em'
        }
      },
      bet_xiand: {
        x: 405,
        y: 60,
        tan: {
          left: '4.3em',
          top: '1.7em'
        }
      },
      bet_zhuangd: {
        x: 905,
        y: 45,
        tan: {
          left: '9.2em',
          top: '1.5em'
        }
      },
      bet_he: {
        x: 665,
        y: 62,
        tan: {
          left: '6.85em',
          top: '1.7em'
        }
      },
      bet_long: {
        x: 940,
        y: 135,
        tan: {
          left: '9.5em',
          top: '2.3em'
        }
      },
      bet_hu: {
        x: 860,
        y: 80,
        tan: {
          left: '8.75em',
          top: '1.9em'
        }
      },
      bet_dthe: {
        x: 820,
        y: 40,
        tan: {
          left: '8.34em',
          top: '1.4em'
        }
      }
    },
    3: {
      group: {},
      movegroup: {},
      s_loca: { x: 776, y: 210 },
      bet_super: {
        x: 628,
        y: 18,
        tan: {
          left: '6.5em',
          top: '1.3em'
        }
      },
      bet_xian: {
        x: 785,
        y: 160,
        tan: {
          left: '8em',
          top: '2.6em'
        }
      },
      bet_zhuang: {
        x: 760,
        y: 110,
        tan: {
          left: '7.7em',
          top: '2em'
        }
      },
      bet_xiand: {
        x: 375,
        y: 62,
        tan: {
          left: '3.9em',
          top: '1.7em'
        }
      },
      bet_zhuangd: {
        x: 865,
        y: 50,
        tan: {
          left: '8.8em',
          top: '1.6em'
        }
      },
      bet_he: {
        x: 628,
        y: 62,
        tan: {
          left: '6.4em',
          top: '1.7em'
        }
      },
      bet_long: {
        x: 770,
        y: 160,
        tan: {
          left: '7.8em',
          top: '2.7em'
        }
      },
      bet_hu: {
        x: 740,
        y: 90,
        tan: {
          left: '7.55em',
          top: '2em'
        }
      },
      bet_dthe: {
        x: 715,
        y: 45,
        tan: {
          left: '7.3em',
          top: '1.5em'
        }
      }
    },
    4: {
      group: {},
      movegroup: {},
      s_loca: { x: 533, y: 214 },
      bet_super: {
        x: 590,
        y: 18,
        tan: {
          left: '6.1em',
          top: '1.3em'
        }
      },
      bet_xian: {
        x: 590,
        y: 170,
        tan: {
          left: '6.0em',
          top: '2.6em'
        }
      },
      bet_zhuang: {
        x: 590,
        y: 110,
        tan: {
          left: '6.0em',
          top: '2.1em'
        }
      },
      bet_xiand: {
        x: 346,
        y: 60,
        tan: {
          left: '3.6em',
          top: '1.6em'
        }
      },
      bet_zhuangd: {
        x: 838,
        y: 60,
        tan: {
          left: '8.5em',
          top: '1.6em'
        }
      },
      bet_he: {
        x: 590,
        y: 62,
        tan: {
          left: '6.05em',
          top: '1.7em'
        }
      },
      bet_long: {
        x: 590,
        y: 160,
        tan: {
          left: '6.04em',
          top: '2.8em'
        }
      },
      bet_hu: {
        x: 590,
        y: 95,
        tan: {
          left: '6.04em',
          top: '2.1em'
        }
      },
      bet_dthe: {
        x: 590,
        y: 47,
        tan: {
          left: '6.04em',
          top: '1.7em'
        }
      }
    },
    5: {
      group: {},
      movegroup: {},
      bet_super: {
        x: 552,
        y: 18,
        tan: {
          left: '5.62em',
          top: '1.3em'
        }
      },
      s_loca: { x: 321, y: 208 },
      bet_xian: {
        x: 392,
        y: 165,
        tan: {
          left: '4.1em',
          top: '2.6em'
        }
      },
      bet_zhuang: {
        x: 422,
        y: 110,
        tan: {
          left: '4.35em',
          top: '2.1em'
        }
      },
      bet_xiand: {
        x: 315,
        y: 55,
        tan: {
          left: '3.27em',
          top: '1.6em'
        }
      },
      bet_zhuangd: {
        x: 810,
        y: 62,
        tan: {
          left: '8.2em',
          top: '1.7em'
        }
      },
      bet_he: {
        x: 552,
        y: 62,
        tan: {
          left: '5.62em',
          top: '1.7em'
        }
      },
      bet_long: {
        x: 410,
        y: 160,
        tan: {
          left: '4.3em',
          top: '2.7em'
        }
      },
      bet_hu: {
        x: 450,
        y: 90,
        tan: {
          left: '4.65em',
          top: '2em'
        }
      },
      bet_dthe: {
        x: 470,
        y: 45,
        tan: {
          left: '4.85em',
          top: '1.5em'
        }
      }
    },
    6: {
      group: {},
      movegroup: {},
      s_loca: { x: 92, y: 166 },
      bet_super: {
        x: 514,
        y: 18,
        tan: {
          left: '5.25em',
          top: '1.3em'
        }
      },
      bet_xian: {
        x: 220,
        y: 135,
        tan: {
          left: '2.35em',
          top: '2.2em'
        }
      },
      bet_zhuang: {
        x: 280,
        y: 98,
        tan: {
          left: '2.95em',
          top: '1.8em'
        }
      },
      bet_xiand: {
        x: 290,
        y: 42,
        tan: {
          left: '3.05em',
          top: '1.5em'
        }
      },
      bet_zhuangd: {
        x: 778,
        y: 62,
        tan: {
          left: '7.92em',
          top: '1.7em'
        }
      },
      bet_he: {
        x: 514,
        y: 62,
        tan: {
          left: '5.25em',
          top: '1.7em'
        }
      },
      bet_long: {
        x: 240,
        y: 135,
        tan: {
          left: '2.55em',
          top: '2.3em'
        }
      },
      bet_hu: {
        x: 320,
        y: 80,
        tan: {
          left: '3.33em',
          top: '1.9em'
        }
      },
      bet_dthe: {
        x: 360,
        y: 40,
        tan: {
          left: '3.73em',
          top: '1.4em'
        }
      }
    },
    7: {
      group: {},
      movegroup: {},
      s_loca: { x: 2, y: 56 },
      bet_super: {
        x: 476,
        y: 18,
        tan: {
          left: '4.88em',
          top: '1.3em'
        }
      },
      bet_xian: {
        x: 140,
        y: 50,
        tan: {
          left: '1.56em',
          top: '1.6em'
        }
      },
      bet_zhuang: {
        x: 220,
        y: 35,
        tan: {
          left: '2.36em',
          top: '1.5em'
        }
      },
      bet_xiand: {
        x: 280,
        y: 10,
        tan: {
          left: '2.93em',
          top: '1.3em'
        }
      },
      bet_zhuangd: {
        x: 748,
        y: 62,
        tan: {
          left: '7.6em',
          top: '1.7em'
        }
      },
      bet_he: {
        x: 476,
        y: 62,
        tan: {
          left: '4.88em',
          top: '1.7em'
        }
      },
      bet_long: {
        x: 150,
        y: 55,
        tan: {
          left: '1.63em',
          top: '1.6em'
        }
      },
      bet_hu: {
        x: 250,
        y: 35,
        tan: {
          left: '2.64em',
          top: '1.4em'
        }
      },
      bet_dthe: {
        x: 315,
        y: 20,
        tan: {
          left: '3.3em',
          top: '1.2em'
        }
      }
    }
  }
  // console.log(this.local_list)
  this._index = 3//current_user + 1;//当前的位置
  // this._index =7;
  this.zr = zrender.init(this.element);
  this.w = this.zr.getWidth();
  this.x_loca = 100;
  this.h = this.zr.getHeight() - this.x_loca;

  this.heightscale = $('.zuobu').height() / 430
  // can.style.width=$('.zuobu').width();
  // can.style.height=$('.zuobu').height();

  this.zrBGGroup = new zrender.Group();
  //this.zrBGGroup.scale = [$('.zuobu').width(),$('.zuobu').height()/430]
  this.zrBGGroup.position = [0, 100];
  this.zr.add(this.zrBGGroup);



  this.init();

}
$('.peilv').click(function () {
  if (gameId == 17) {
    game.showLongHuPeiLv()
  } else {
    game.showPeiLv()
  }

})
Gamezuo.prototype = {
  constructor: Gamezuo,
  //初始化
  init: function () {
    var self = this;
    var gameId = this.gameId;
    if (gameId == 17) {

      self.drawlongBG();
      initzuobucanvas(imglist1)
    } else {
      if (gameId == 1 || gameId == 2) {
        self.mipaixianzhuang();
      }
      //self.drawdanBG();
      self.drawBG();
      initzuobucanvas(imglist2)
    }
    //事件


    //下注的点击确定 取消事件
    $('.cancel').click(function () {
      playGameEffect("../sound/se/click_btn.mp3", true)
      $('.xiazhu').hide();
      $.each(game.local_list[game._index].group, function (key, val) {
        game.local_list[game._index]['group'][key].removeAll();
        game.zr.refresh();

      });
      o = {};
      // console.log("coinStack==================",coinStack)
      $.each(coinStack, function (key, val) {
        if (gameId == 17 && key == "he") {
          game.xiazhu("bet_dthe", val, true)
        } else {
          game.xiazhu(tochinse2[key], val, true)
        }
      })
      self.curr_qu = '';
    })
    // //
    // $('.submit').click(function () {
    //   playGameEffect("../sound/se/click_btn.mp3", true)
    //   $('.xiazhu').hide();
    //   // console.log(gameId,"gameId");
    //   if (gameId != 17) {
    //     sendMessage("baijiale_bet", { desk_id: gameId, bets: o });
    //   } else {
    //     sendMessage("longhu_bet", { desk_id: gameId, bets: o });
    //   }
    //   self.curr_qu = '';

    // })

    //self.changezuobu('../assets/player.png')
  },
  mipaixianzhuang: function () {
    //下注区底边
    this.xian = new zrender.Image({
      style: {
        image: require('../assets/zuobu/xian.png'),
        width: 50,
        height: 33
      },
      position: [555, 0],
      cursor: 'default'
    });
    this.zhuang = new zrender.Image({
      style: {
        image: require('../assets/zuobu/zuang.png'),
        width: 50,
        height: 33
      },
      position: [620, 0],
      cursor: 'default'
    });
    var zrBGGroup = new zrender.Group();
    zrBGGroup.position = [0, 100]
    this.zr.add(zrBGGroup);
    zrBGGroup.add(this.xian);
    zrBGGroup.add(this.zhuang);
  },
  creatGroup: function () {
    var moneyGroup = new zrender.Group();

    return moneyGroup;
  },
  clearxiazhu: function () {
    $('.xiazhu').hide();
    if (this.curr_qu) {
      this[this.curr_qu].attr({ style: { opacity: '0' } });
    }
    $(container).css({ 'cursor': 'default' });
    this.curr_qu = ''
    if (!this.movequ) { return };
    this[this.movequ].attr({ style: { opacity: '0' } });

  },
  events: function () {
    var _this = this;
    var container = this.element
    //高亮
    $(container).on('mousemove', function (evt) {
      _this.movequ = istupian(evt.offsetX, evt.offsetY)
    })
    $(container).on('mouseout', function (evt) {
      $.each(imgCtx, function (name, value) {
        _this[name].attr({ style: { opacity: '0' } });
      })
      if (_this.curr_qu) {
        _this[_this.curr_qu].attr({ style: { opacity: '.3' } });
      }
      $(container).css({ 'cursor': 'default' });
    })
    $(container).on('click', function (evt) {
      // playGameEffect("../sound/se/click_coin_btn.mp3", true)
      var curr_qu = istupian(evt.offsetX, evt.offsetY);
      if (!curr_qu) { return };
      _this[curr_qu].attr({ style: { opacity: '.3' } });
      _this.curr_qu = curr_qu;
      console.log("click---------------------", curr_qu)
      _this.xiazhu(curr_qu);
    })
  },
  removeEvents: function () {
    $(container).unbind()
  },
  drawdanBG: function () {

    var zrBGGroup = this.zrBGGroup;
    var w = this.w;
    var h = this.h;

    var _this = this;

    //下注区底边
    this.zuowai = new zrender.Image({
      style: {
        image: require('../assets/dan/game_maxdesk_bg.png'),
        // width:w,
        // height:175            
      },
      position: [0, 170],
      cursor: 'default'
    });

    this.bet_xian = new zrender.Image({
      name: "bet_xian",
      style: {
        image: require('../assets/dan/max_player.png'),
        // width:997,
        // height:207,
        opacity: 0
      },
      position: [245, 20],
      cursor: 'default'
    });
    //庄下注
    this.bet_zhuang = new zrender.Image({
      style: {
        image: require('../assets/dan/max_banker.png'),
        // width:830,
        // height:150,
        opacity: 0
      },
      position: [691, 20],
      cursor: 'default'
    });
    //闲对下注
    this.bet_xiand = new zrender.Image({
      style: {
        image: require('../assets/dan/max_playerpair.png'),
        // width:212 ,
        // height:89,
        opacity: 0
      },
      position: [90, 9],
      cursor: 'default'
    });
    //庄对下注
    this.bet_zhuangd = new zrender.Image({
      style: {
        image: require('../assets/dan/max_bankerpair.png'),
        // width:212 ,
        // height:90,
        opacity: 0
      },
      position: [880, 9],
      cursor: 'default'
    });




    //super6下注
    this.bet_super = new zrender.Image({
      style: {
        image: require('../assets/dan/max_super6.png'),
        opacity: 0
        // width:262 *w/1220,
        // height:39* w/1220
      },
      position: [513, 118]
    });
    this.bet_super.hide();
    this.drawhe()
    zrBGGroup.add(this.bet_super);
    zrBGGroup.add(this.bet_zhuangd);
    //zrBGGroup.add(this.bet_he);
    zrBGGroup.add(this.bet_xian);
    zrBGGroup.add(this.bet_zhuang);
    zrBGGroup.add(this.bet_xiand);



    zrBGGroup.add(this.zuowai);//seatbac_bet_area_max_sc
    //zrBGGroup.add(this.zuobu)
    this.drawdanzuobu('../assets/dan/seatbac_bet_area_max_sc.png', 0)
    //下注



  },
  drawdanhe: function () {
    this.bet_he = new zrender.Image({
      style: {
        image: '../assets/dan/max_tie_super.png',
        // width:274,
        // height:40,
        opacity: 0
      },
      position: [533, 26],
      cursor: 'default'
    });
    this.zrBGGroup.add(this.bet_he);
  },
  drawhe: function () {
    //和下注max_tie.png
    this.bet_he = new zrender.Image({
      style: {
        image: '../assets/dan/max_tie.png',
        // width:274,
        // height:40,
        opacity: 0
      },
      position: [513, 25],
      cursor: 'default'
    });
    this.zrBGGroup.add(this.bet_he);
  },
  drawdanzuobu: function (url, y) {
    this.zuobu = new zrender.Image({
      name: "zuobu",
      style: {
        image: require(url),
        width: 1235,
        height: 230
      },
      cursor: 'default',
      silent: true,
      position: [0, y],
      //
    });
    this.zrBGGroup.add(this.zuobu)
    // this.events();
  },
  changeposition: function (dan, name) {
    var _this = this;

    var group_list = _this.local_list[_this._index]['group'];

    for (var key in group_list) {
      var group = group_list[key];

      if (!_ismianshui && key == 'bet_super') {
        this.zr.remove(group)
        delete group_list[key];
        this.clearxiazhu()
      } else {

        if (group && group.childCount() > 0) {
          var num = parseInt(group.childOfName('one').style.text)
          this.zr.remove(group)
          //_this.local_list[_this._index]['group'][_this.curr_qu] ;
          delete group_list[key]
          if ($('.xiazhu').css('display') == 'none') {
            this.xiazhu(key, num, true)
          } else {
            this.xiazhu(key, num, false)
          }


        }
        else {
          this.zr.remove(group)
          delete group_list[key]
        }
      }
    }

  },
  //画背景
  drawdanlongBG: function () {
    var zrBGGroup = this.zrBGGroup;
    var w = this.w;
    var h = this.h;
    var _this = this;

    //下注区域
    this.zuobu = new zrender.Image({
      name: "zuobu",
      style: {
        image: require('../assets/dan/seatbac_bet_area_max_dt_sc.png'),
        width: 1174,
        height: 265
      },
      cursor: 'default',
      silent: true,
      position: [23, 0]
      //
    });
    //下注区底边
    this.zuowai = new zrender.Image({
      style: {
        image: require('../assets/dan/game_maxdesk_bg.png'),
        // width:w,
        // height:183            
      },
      position: [0, 215],
      cursor: 'default'
    });

    this.bet_long = new zrender.Image({
      name: "bet_long",
      style: {
        image: require('../assets/dan/max_dragon.png'),
        // width:997,
        // height:207,
        opacity: 0
      },
      position: [128, 28],
      cursor: 'default'
    });
    //庄下注
    this.bet_hu = new zrender.Image({
      style: {
        image: require('../assets/dan/max_tiger.png'),
        // width:830,
        // height:150,
        opacity: 0
      },
      position: [740, 28],
      cursor: 'default'
    });
    //和下注
    this.bet_dthe = new zrender.Image({
      style: {
        image: require('../assets/dan/max_tie_dt.png'),
        // width:274,
        // height:40,
        opacity: 0
      },
      position: [455, 50],
      cursor: 'default'
    });



    zrBGGroup.add(this.bet_dthe);
    zrBGGroup.add(this.bet_long);
    zrBGGroup.add(this.bet_hu);



    zrBGGroup.add(this.zuowai);
    zrBGGroup.add(this.zuobu);
    // this.events();

  },
  //画背景
  drawlongBG: function () {
    var zrBGGroup = this.zrBGGroup;
    var w = this.w;
    var h = this.h;
    var _this = this;

    //下注区域
    this.zuobu = new zrender.Image({
      name: "zuobu",
      style: {
        image: require('../assets/zuobu/seatbac_bet_area_dt_sc.png'),
        width: w,
        height: h
      },
      cursor: 'default',
      silent: true,
      //
    });
    //下注区底边
    this.zuowai = new zrender.Image({
      style: {
        image: require('../assets/zuobu/zuobian.png'),
        width: w,
        height: 183
      },
      position: [0, 150],
      cursor: 'default'
    });

    this.bet_long = new zrender.Image({
      name: "bet_long",
      style: {
        image: require('../assets/zuobu/dragon.png'),
        width: 997,
        height: 207,
        opacity: 0
      },
      position: [110, 2],
      cursor: 'default'
    });
    //庄下注
    this.bet_hu = new zrender.Image({
      style: {
        image: require('../assets/zuobu/tiger.png'),
        // width:830,
        // height:150,
        opacity: 0
      },
      position: [210, 2],
      cursor: 'default'
    });
    //和下注
    this.bet_dthe = new zrender.Image({
      style: {
        image: require('../assets/zuobu/tie_dt.png'),
        // width:274,
        // height:40,
        opacity: 0
      },
      position: [308, 2],
      cursor: 'default'
    });
    //当前的索引 背景有问题
    this.site_bg = new zrender.Image({
      style: {
        image: require('../assets/zuobu/dt_site_bg_' + _this._index + '.png'),
        width: 1220,
        height: 330,
        opacity: 1
      },
      position: [0, 0],
      cursor: 'default'
    });





    zrBGGroup.add(this.site_bg);
    zrBGGroup.add(this.bet_dthe);
    zrBGGroup.add(this.bet_long);
    zrBGGroup.add(this.bet_hu);



    zrBGGroup.add(this.zuowai);
    zrBGGroup.add(this.zuobu);
    // this.events();

  },
  drawzuobu: function (url) {
    var w = this.w;
    var h = this.h;

    this.zuobu = new zrender.Image({
      name: "zuobu",
      style: {
        image: require(url),
        width: w,
        height: h
      },
      cursor: 'default',
      silent: true
      //
    });
    this.zrBGGroup.add(this.zuobu);
    //this.events();
  },
  //画背景
  drawBG: function () {
    var zrBGGroup = this.zrBGGroup;
    var w = this.w;
    var h = this.h;
    var _this = this;


    //下注区底边
    this.zuowai = new zrender.Image({
      style: {
        image: '../../static/zuobu/zuobian.png',
        width: w,
        height: 183
      },
      position: [0, 150],
      cursor: 'default'
    });

    this.bet_xian = new zrender.Image({
      name: "bet_xian",
      style: {
        image: '../../static/zuobu/player.png',
        width: 997,
        height: 207,
        opacity: 0
      },
      position: [110, 2],
      cursor: 'default'
    });
    //庄下注
    this.bet_zhuang = new zrender.Image({
      style: {
        image: '../../static/zuobu/banker.png',
        width: 830,
        height: 150,
        opacity: 0
      },
      position: [192, 0],
      cursor: 'default'
    });
    //闲对下注
    this.bet_xiand = new zrender.Image({
      style: {
        image: '../../static/zuobu/playerpair.png',
        width: 212,
        height: 89,
        opacity: 0
      },
      position: [266, 0],
      cursor: 'default'
    });
    //庄对下注
    this.bet_zhuangd = new zrender.Image({
      style: {
        image: require('../assets/zuobu/bankerpair.png'),
        width: 212,
        height: 90,
        opacity: 0
      },
      position: [740, 0],
      cursor: 'default'
    });
    //和下注
    this.bet_he = new zrender.Image({
      style: {
        image: require('../assets/zuobu/tie.png'),
        width: 274,
        height: 40,
        opacity: 0
      },
      position: [470, 50],
      cursor: 'default'
    });
    //当前的索引 背景有问题
    this.site_bg = new zrender.Image({
      style: {
        image: require('../assets/zuobu/site_bg_' + _this._index + '.png'),
        width: 1220,
        height: 330,
        opacity: 1
      },
      position: [0, 0],
      cursor: 'default'
    });
    // super6下注
    this.bet_super = new zrender.Image({
      style: {
        image: require('../assets/zuobu/super6.png'),
        opacity: 0,
        width: 262,
        height: 39
      },
      position: [477, 5],
      //cursor:'default'
    });



    this.bet_super.hide()
    zrBGGroup.add(this.bet_super);

    zrBGGroup.add(this.site_bg);
    zrBGGroup.add(this.bet_zhuangd);
    zrBGGroup.add(this.bet_he);
    zrBGGroup.add(this.bet_xian);
    zrBGGroup.add(this.bet_zhuang);
    zrBGGroup.add(this.bet_xiand);



    zrBGGroup.add(this.zuowai);
    this.drawzuobu('../../static/zuobu/seatbac_bet_area_baccarat_sc.png');


  },
  xiazhu: function (curr_qu, _num, flag, curr_index, curr_addnum, notDan, isshow) {


    var _this = this;
    var curr_loc;
    var _group;

    var num_list = [];
    var cur_y = 0;
    var num = 0;
    var index;
    var addnum;

    if (!curr_qu) { curr_qu = this.curr_qu }
    if (!curr_qu) { return; }
    if (!curr_index) {
      index = this._index
    } else {
      index = curr_index
    }
    if (curr_addnum == undefined) {
      addnum = _chouma
    } else {
      addnum = curr_addnum
    }
    if (addnum === '' || addnum == undefined) { return; }

    _arr = [];
    _this._chouma = addnum;

    if (_isdan && !notDan) {
      if (gameId == 17) {//单龙虎
        curr_loc = _this.danlocal_list['longhu'][curr_qu];
      } else if (gameId != 1 && gameId != 2) {//百家乐
        if (_ismianshui) {
          curr_loc = _this.danlocal_list['mianshui'][curr_qu];
        } else {
          curr_loc = _this.danlocal_list['baijiale'][curr_qu]
        }
      }
    } else {
      curr_loc = _this.local_list[index][curr_qu]
    }

    if (!_this.local_list[index]['group'][curr_qu]) {
      _this.local_list[index]['group'][curr_qu] = this.creatGroup();

      this.local_list[index]['group'][curr_qu].position = [curr_loc.x, curr_loc.y + 100];
      this.zr.add(_this.local_list[index]['group'][curr_qu])

    }

    _group = _this.local_list[index]['group'][curr_qu];
    //如果是单人 并且是他人下注 就隐藏
    if (curr_index && _isdan) {
      _group.hide()
    } else {
      _group.show()
    }


    if (!_isdan && gameId != 17 && curr_qu !== 'bet_xian' && curr_qu !== 'bet_zhuang') {
      if (_group.childOfName('one')) {
        num = _num ? _num : parseInt(_group.childOfName('one').style.text) + addnum;
        _group.childOfName('one').attr({ style: { text: num } })
      } else {
        num = _num ? _num : addnum;
        _group.add(_this.listmoney(0, cur_y -= 5, 'normal'));
        _group.add(_this.listmoneytxt(0, cur_y - 25, num));
      }
      if (!curr_index) {
        if (coinStack[tochinse1[curr_qu]]) {
          o[tochinse1[curr_qu]] = num - coinStack[tochinse1[curr_qu]];
        } else {
          o[tochinse1[curr_qu]] = num
        }
      }
      if (flag) {
        $('.xiazhu').hide()
      } else {
        $('.xiazhu').css({ 'display': 'flex', 'left': curr_loc.tan.left, 'top': curr_loc.tan.top })
      }
      return;
    }

    if (_group.childCount() > 0) {
      num = _num ? _num : parseInt(_group.childOfName('one').style.text) + addnum;
      _group.removeAll()

      num_list = _this.addToArray(num)
      // console.log(num_list,"num_list")
    } else {
      if (_num) {
        num_list = _this.addToArray(_num)
        num = _num
      } else {
        num_list[0] = addnum;
        num = addnum
      }
    };



    $.each(num_list, function (key, val) {
      _group.add(_this.listmoney(0, cur_y -= 5, val));
    })

    if (curr_index) {
      _group.add(_this.othermoneytxt(0, cur_y - 25, num));
    } else {
      _group.add(_this.listmoneytxt(0, cur_y - 25, num));
    }
    if (!curr_index) {
      if (coinStack[tochinse1[curr_qu]]) {
        o[tochinse1[curr_qu]] = num - coinStack[tochinse1[curr_qu]];
      } else {
        o[tochinse1[curr_qu]] = num
      }
    }


    if (flag) {
      $('.xiazhu').hide()
    } else {
      $('.xiazhu').css({ 'display': 'flex', 'left': curr_loc.tan.left, 'top': curr_loc.tan.top })
    }

  },
  otherxiazhu: function (index, qu, num) {

    var _this = this;
    if (!num) {
      return;
    }
    if (!_isdan) {//多人
      var e_local = _this.local_list[index][qu];

      if (!this.local_list[index].movegroup[qu]) {
        this.local_list[index].movegroup[qu] = this.creatGroup();

        this.zr.add(this.local_list[index].movegroup[qu])
      }

      var movegroup = this.creategroup(this.local_list[index].movegroup[qu], index, qu, num);

      movegroup.animateTo({
        position: [e_local.x, e_local.y + 100]
      }, 500, 100, 'linear', function () {

        movegroup.removeAll();

        if (_this.local_list[index]['group'][qu] && _this.local_list[index]['group'][qu].childCount() > 0) {
          _this.xiazhu(qu, false, true, index, num, true, true)
        } else {
          _this.xiazhu(qu, num, true, index, 0, true, true)
        }

      });
    } else {//单人
      hideMove(true)

      if (_this.local_list[index]['group'][qu] && _this.local_list[index]['group'][qu].childCount() > 0) {
        _this.xiazhu(qu, false, true, index, num, true, false)
      } else {
        _this.xiazhu(qu, num, true, index, 0, true, false)
      }
    }

  },
  creategroup: function (group, index, qu, num, flag) {

    var _group = group;

    var num_list = [];
    var _this = this;

    var s_local = _this.local_list[index]['s_loca'];
    var e_local = _this.local_list[index][qu];
    var s_y = 0;
    var sm_y = 0;
    _arr = [];


    if (gameId != 17 && qu !== 'bet_xian' && qu !== 'bet_zhuang') {
      if (_group.childOfName('one')) {
        num = parseInt(_group.childOfName('one').style.text) + num;
        _group.childOfName('one').attr({ style: { text: num } })

      } else {
        _group.add(_this.listmoney(0, s_y -= 5, 'normal'));
        _group.add(_this.othermoneytxt(0, s_y - 25, num));
      }
    } else {

      if (_group.childCount() > 0) {
        num = parseInt(_group.childOfName('one').style.text) + num;
        _group.removeAll()

      }

      num_list = this.addToArray(num)

      $.each(num_list, function (index, val) {
        _group.add(_this.listmoney(0, s_y -= 5, val));
      })


      _group.add(_this.othermoneytxt(0, s_y - 25, num));
    }
    if (flag) {
      // _group.position = [e_local.x,e_local.y+100];
    } else {
      _group.position = [s_local.x, s_local.y + 100];
    }

    return _group;

  },
  addToArray: function (num) {
    num += '';
    var first_num = num.substr(0, 1);
    var remainder;//余数
    var divisor;//除数
    var i = 0;
    if (first_num >= 5) {
      divisor = "5";
    } else if (first_num >= 2) {
      divisor = "2";
    } else {
      divisor = "1";
    }
    while (i < num.length - 1) {
      divisor += "0"
      i++;
    }
    remainder = num % divisor;
    if (Math.floor(num / divisor) > 1) {
      i = 0;
      while (i < (num / divisor) - 1) {
        _arr.push(divisor);
        i++;
      }
      if (remainder == 0) {
        _arr.push(divisor);
      }
    } else {
      _arr.push(divisor);
    }

    if (remainder > 0) {
      this.addToArray(remainder + "");
    }
    return _arr;
  },

  //筹码 添加 以及移动
  listmoney: function (x, y, imgurl) {
    var moneyGroup = this.moneyGroup;
    var m_url = '../assets/chip/chip_' + imgurl + '.png';
    var w = 34;
    var h = 23;
    var onemoney = new zrender.Image({
      style: {
        image: require(m_url),
        width: w,
        height: h
      },
      silent: true,
      position: [x, y]
    });

    return onemoney;
  },
  listmoneytxt: function (x, y, text) {
    var rects = new zrender.Polygon({
      position: [x, y],
      name: 'one',
      shape: {
        points: [[0, 0], [34, 0], [34, 15], [24, 15], [17, 20], [10, 15], [0, 15], [0, 0]]
      },
      style: {
        fill: '#a19469',
        lineWidth: 5,
        text: text,
        opacity: 1,
        textLineWidth: 1,
        textFill: '#fff',
        fontSize: 38,
        textAlign: 'center',
        textPosition: 'top',
        textDistance: -13,
        fontWeight: 100
      },
      silent: true
    });

    return rects;
  },
  othermoneytxt: function (x, y, text) {
    var rects = new zrender.Polygon({
      position: [x, y],
      name: 'one',
      shape: {
        points: [[0, 0], [34, 0], [34, 15], [24, 15], [17, 20], [10, 15], [0, 15], [0, 0]]
      },
      style: {
        fill: '#08271e',
        lineWidth: 5,
        text: text,
        opacity: 1,
        textLineWidth: 1,
        textFill: '#fff',
        fontSize: 8,
        textAlign: 'center',
        textPosition: 'top',
        textDistance: -13,
        fontWeight: 100
      },
      silent: true,
      onmouseover: function (evt) {
        rects.attr({ style: { 'fill': '#000' } });
      }
    });

    return rects;
  },
  showLongHuPeiLv: function () {
    var location;
    if (_isdan) {
      location = this.peilvLocation.longhu.dan
    } else {
      location = this.peilvLocation.longhu.duo
    }
    var rect1 = new zrender.Image({
      position: [location.bet_xian.x, location.bet_xian.y],
      style: {
        image: require("../assets/dan/dd.png"),
        width: 180,
        height: 50,
        lineWidth: 5,
        text: "1:1",
        opacity: 1,
        textLineWidth: 1,
        textFill: '#fff',
        fontSize: 20,
        textPosition: 'inside',
        fontWeight: 700,
        z: 100
      },
      silent: true
    });
    var rect2 = new zrender.Image({
      position: [location.bet_he.x, location.bet_he.y],
      style: {
        lineWidth: 5,
        image: require("../assets/dan/dd.png"),
        text: "1:8",
        opacity: 1,
        width: 180,
        height: 50,
        textLineWidth: 1,
        textFill: '#fff',
        fontSize: 20,
        textAlign: 'center',
        textPosition: 'inside',
        fontWeight: 700,
        z: 100
      },
      silent: true
    });
    var rect3 = new zrender.Image({
      position: [location.bet_zhuang.x, location.bet_zhuang.y],
      style: {
        image: require("../assets/dan/dd.png"),
        lineWidth: 5,
        text: "1:1",
        opacity: 1,
        width: 180,
        height: 50,
        textLineWidth: 1,
        textFill: '#fff',
        fontSize: 20,
        textAlign: 'center',
        textPosition: 'inside',
        fontWeight: 700,
        z: 100
      },
      silent: true
    });
    var _this = this
    var zrPeiLv = new zrender.Group();
    zrPeiLv.position = [location.group.x, location.group.y];
    this.zr.add(zrPeiLv);
    zrPeiLv.add(rect1)
    zrPeiLv.add(rect2)
    zrPeiLv.add(rect3)
    if (t) {
      clearTimeout(t)
      _this.zr.remove(zrPeiLv)
      _this.zr.refresh()
    }
    var t = setTimeout(function () {
      _this.zr.remove(zrPeiLv)
      _this.zr.refresh()
    }, 3000)
  },
  showPeiLv: function () {
    var _this = this
    var zrPeiLv = new zrender.Group();
    var txt, location;

    if (!_isdan) {

      location = this.peilvLocation.baijiale.duo
      if (_ismianshui) {
        txt = "1:1"
      } else {
        txt = "1:0.95"
      }
    } else {
      location = this.peilvLocation.baijiale.dan;
      txt = "1:1";
      if (_ismianshui) {
        var bet_he = this.peilvLocation.baijiale.superdan.bet_he
      } else {
        var bet_he = location.bet_he
      }
      var rect3 = new zrender.Image({
        position: [bet_he.x, bet_he.y],
        style: {
          image: require("../assets/dan/dd.png"),
          lineWidth: 5,
          width: 180,
          height: 50,
          text: "1:1",
          opacity: 1,
          textLineWidth: 1,
          textFill: '#fff',
          fontSize: 20,
          textAlign: 'center',
          textPosition: 'inside',
          fontWeight: 700,
          z: 100
        },
        silent: true
      });
      zrPeiLv.add(rect3)
    }
    var rect1 = new zrender.Image({
      position: [location.bet_zhuang.x, location.bet_zhuang.y],
      style: {
        image: require("../assets/dan/dd.png"),
        width: 180,
        height: 50,
        lineWidth: 5,
        text: txt,
        opacity: 1,
        textLineWidth: 1,
        textFill: '#fff',
        fontSize: 20,
        textAlign: 'center',
        textPosition: 'inside',
        fontWeight: 700,
        z: 100
      },
      silent: true
    });
    var rect2 = new zrender.Image({
      position: [location.bet_xian.x, location.bet_xian.y],
      style: {
        image: require("../assets/dan/dd.png"),
        width: 180,
        height: 50,
        lineWidth: 5,
        text: "1:1",
        opacity: 1,
        textLineWidth: 1,
        textFill: '#fff',
        fontSize: 20,
        textAlign: 'center',
        textPosition: 'inside',
        fontWeight: 700,
        z: 100
      },
      silent: true
    });


    zrPeiLv.position = [location.group.x, location.group.y];
    this.zr.add(zrPeiLv);
    zrPeiLv.add(rect1)
    zrPeiLv.add(rect2)
    if (t) {
      clearTimeout(t)
      _this.zr.remove(zrPeiLv)
      _this.zr.refresh()
    }
    var t = setTimeout(function () {
      _this.zr.remove(zrPeiLv)
      _this.zr.refresh()
    }, 3000)
  },
  showResult: function (name) {
    console.log(name, "----showResult")
    var _this = this;
    this[name].animate('style', false)
      .when(1000, { opacity: 0 })
      .when(2000, { opacity: .5 })
      .when(3000, { opacity: 0 })
      .when(4000, { opacity: .5 })
      .when(5000, { opacity: 0 })
      .when(6000, { opacity: .5 })
      .when(7000, { opacity: 0 })
      .done(function () { _this.zr.refresh() })
      .start()
  },
  xiazhuwin: function (index, qu, num) {

    if (!this.local_list[index].win) {
      this.local_list[index].win = this.creatGroup();

      this.zr.add(this.local_list[index].win)
    }

    var wingroup = this.creategroup(this.local_list[index].win, index, qu, num);

    wingroup.position = [610, 100]

    var e_local = this.local_list[index][qu];
    var s_local = this.local_list[index]['s_loca'];
    var _this = this;

    wingroup.animateTo({
      position: [e_local.x, e_local.y + 100]
    }, 500, 100, 'linear', function () {

      wingroup.removeAll();
      if (_this.local_list[index]['group'][qu] && _this.local_list[index]['group'][qu].childCount() > 0) {
        _this.xiazhu(qu, false, true, index, num)
      } else {
        _this.xiazhu(qu, num, true, index)
      }


      _this.local_list[index]['group'][qu].animateTo({
        position: [s_local.x, s_local.y + 100]
      }, 500, 100, 'linear', function () {
        _this.local_list[index]['group'][qu].removeAll();
      })

    });


  },
  xiazhulose: function (index, qu) {
    var _this = this;
    var curr_loca = this.local_list[index][qu];
    this.local_list[index]['group'][qu].animateTo({
      position: [610, 100]
    }, 500, 100, 'linear', function () {
      _this.local_list[index]['group'][qu].removeAll()
    })
  },
  clearOtherxiazhu: function () {
    // console.log("clearOtherxiazhu---------")
    var index = this._index;
    var lists = this.local_list;
    for (var i in lists) {
      if (i != index) {
        for (var key in lists[i]['group']) {
          this.local_list[i]['group'][key] && this.local_list[i]['group'][key].removeAll()
        }
      }
    }

    game.zr.refresh();
  }
}


var imgCtx = {};

function initzuobucanvas (imglist) {
  $.each(imglist, function (name, value) {
    creatCanvas(value.image_url, value.x, value.y, name)
  })
}

function istupian (x, y) {
  x = (1220 / $('.zuobu').width()) * x;
  y = (430 / $('.zuobu').height()) * y
  var flag = false;
  var curr_img = '';
  $.each(imgCtx, function (name, value) {
    // console.log(value.getImageData(x,y,1,1).data,"------------")
    if (value.getImageData(x, y, 1, 1).data[3] == 255) {
      game[name].attr({ style: { opacity: '.5' } });
      flag = true;
      curr_img = name;
    } else {
      game[name].attr({ style: { opacity: '0' } })

    }
  })


  if (game.curr_qu) {
    game[game.curr_qu].attr({ style: { opacity: '.3' } });
  }
  // console.log("flag-------",flag);
  if (flag) {
    //game.zuobu.attr('cursor','pointer')
    // if($(container).css('cursor') == 'pointer'){return}
    $(container).css({ 'cursor': 'pointer' });
  } else {
    //game.zuobu.attr('cursor','default')
    // if($(container).css('cursor') == 'default'){return}
    $(container).css({ 'cursor': 'default' });
  }
  return curr_img;
}


function creatCanvas (image_url, x, y, name) {
  var can = document.createElement('canvas')//document.createElement('canvas'),
  var ctx = can.getContext('2d');
  can.width = 1220;
  can.height = 430;
  // can.style.width=$('.zuobu').width();
  // can.style.height=$('.zuobu').height();
  can.name = name;
  var img = new Image();
  img.crossOrigin = 'Anonymous'; //解决跨域
  img.src = image_url;
  img.onload = function () {
    ctx.drawImage(img, x, y);
    imgCtx[name] = ctx;
    //console.log(ctx.getImageData(149,200,1,1).data)
  }
  //$('._1w0j-').prepend(can)

}


// _changetimer.timeLocation = function(){
//     this.zr = zrender.init(timer);
//     this.text = new zrender.Text({  
//         style: {
//             text:"",
//             opacity:1,
//             textFill:'#F0E0BB',
//             fontSize:12,
//             fontWeight:'bold'
//         },
//         silent:true
//     });
//     this.zr.add(this.text)
// }
// _changetimer.timerchangeTime1=function(x,y,size,rotate){
//     if(!this.text){return};
//     this.text.attr({position:[x,y]});
//     this.text.attr({style:{fontSize:size}});
//     $('.time-rotate')[0].style.webkitTransform = "rotate("+rotate+"deg)";
//     $('.time-rotate')[0].style.MozTransform = "rotate("+rotate+"deg) ";
//     $('.time-rotate')[0].style.msTransform = "rotate("+rotate+"deg) ";
//     $('.time-rotate')[0].style.OTransform = "rotate("+rotate+"deg)  ";
//     $('.time-rotate')[0].style.transform = "rotate("+rotate+"deg) ";
// }
// _changetimer.timerchangeTime=function(text,x,y,size,rotate){
//     if(!this.text){return};
//     this.text.attr({style:{text:text}})
// }

