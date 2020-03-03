/* eslint-disable */
import zrender  from 'zrender'
var delay;
var _arr = [];
var o = {};//下注金额

var gameId
// 龙虎
var imglist1 = {
  bet_long: { image_url: './static/zuobu/lh_long.png', x: 0, y: 353 },
  bet_hu: { image_url: './static/zuobu/lh_hu.png', x: 0, y: 353 },
  bet_dthe: { image_url: './static/zuobu/lh_he.png', x: 0, y: 353 }
};

var imglist4 = {
  bet_long: { image_url: './static/zuobu/lh_dan_long.png', x: 0, y: 353 },
  bet_hu: { image_url: './static/zuobu/lh_dan_hu.png', x: 0, y: 353 },
  bet_dthe: { image_url: './static/zuobu/lh_dan_he.png', x: 0, y: 353 }
};

var imglist2 = {
  bet_xian: { image_url: './static/zuobu/lh_long.png', x: 0, y: 353 },
  bet_zhuang: { image_url: './static/zuobu/lh_hu.png', x: 0, y: 353 },
  bet_xiand: { image_url: './static/zuobu/ba_xd.png', x: 0, y: 353 },
  bet_zhuangd: { image_url: './static/zuobu/ba_zd.png', x: 0, y: 353 },
  bet_he: { image_url: './static/zuobu/ba_he.png', x: 0, y: 353 },
  bet_super: { image_url: './static/zuobu/ba_six.png', x: 0, y: 353 }
};
// 单人不免水
var imglist3 = {
  bet_xian: { image_url: './static/zuobu/ba_dan_xian.png', x: 0, y: 353 },
  bet_zhuang: { image_url: './static/zuobu/ba_dan_zhuang.png', x: 0, y: 353 },
  bet_xiand: { image_url: './static/zuobu/ba_dan_xd.png', x: 0, y: 353 },
  bet_zhuangd: { image_url: './static/zuobu/ba_dan_zd.png', x: 0, y: 353 },
  bet_he: { image_url: './static/zuobu/ba_dan_he.png', x: 0, y: 353 },

  bet_zhuangdan: { image_url: './static/zuobu/ba_dan_zdan.png', x: 0, y: 353 },
  bet_zhuangshuang: { image_url: './static/zuobu/ba_dan_zshuang.png', x: 0, y: 353 },
  bet_xiandan: { image_url: './static/zuobu/ba_dan_xdan.png', x: 0, y: 353 },
  bet_xianshuang: { image_url: './static/zuobu/ba_dan_xshuang.png', x: 0, y: 353 },
  bet_da: { image_url: './static/zuobu/ba_dan_da.png', x: 0, y: 353 },
  bet_xiao: { image_url: './static/zuobu/ba_dan_xiao.png', x: 0, y: 353 },
};

// 单人 免水
var imglist5 = {
  bet_xian: { image_url: './static/zuobu/ba_dan_xian.png', x: 0, y: 353 },
  bet_zhuang: { image_url: './static/zuobu/ba_dan_zhuang.png', x: 0, y: 353 },
  bet_xiand: { image_url: './static/zuobu/ba_dan_xd.png', x: 0, y: 353 },
  bet_zhuangd: { image_url: './static/zuobu/ba_dan_zd.png', x: 0, y: 353 },
  bet_he: { image_url: './static/zuobu/ba_dan_six_he.png', x: 0, y: 353 },
  bet_super: { image_url: './static/zuobu/ba_dan_six.png', x: 0, y: 353 },
  bet_zhuangdan: { image_url: './static/zuobu/ba_dan_zdan.png', x: 0, y: 353 },
  bet_zhuangshuang: { image_url: './static/zuobu/ba_dan_zshuang.png', x: 0, y: 353 },
  bet_xiandan: { image_url: './static/zuobu/ba_dan_xdan.png', x: 0, y: 353 },
  bet_xianshuang: { image_url: './static/zuobu/ba_dan_xshuang.png', x: 0, y: 353 },
  bet_da: { image_url: './static/zuobu/ba_dan_da.png', x: 0, y: 353 },
  bet_xiao: { image_url: './static/zuobu/ba_dan_xiao.png', x: 0, y: 353 },
};
var tochinse1 = { bet_super: "super_6", bet_zhuangdan: "zhuang_dan", bet_da: "da", bet_xiao: "xiao", bet_zhuangshuang: "zhuang_shuang", bet_xiandan: "xian_dan", bet_xianshuang: "xian_shuang", bet_xiand: "xian_dui", bet_xian: 'xian', bet_he: 'he', bet_zhuang: "zhuang", bet_zhuangd: 'zhuang_dui', bet_long: 'long', bet_dthe: 'he', bet_hu: 'hu' }

function Gamezuo () {

}


Gamezuo.prototype = {
  _isdan: false,
  _ismianshui: false,
  coinStack: {},
  o: {},
  _index: 2,
  constructor: Gamezuo
  //初始化
  , init: function (element, gameId) {
    var self = this
    this.element = element;
    this.gameId = gameId;
    gameId = gameId

    this.zr = zrender.init(element);
    this.w = this.zr.getWidth();
    this.x_loca = 100;
    this.h = 450 //this.zr.getHeight() - this.x_loca;
    //this.heightscale = $('.zuobu').height() / 430
    this.zrBGGroup = new zrender.Group();
    this.zrBGGroup.position = [0, 353];
    this.zr.add(this.zrBGGroup);

    if (gameId == 17) {
      if (!this._isdan) {
        self.drawlongBG();
        initzuobucanvas(imglist1)
      } else {
        this.changeBetarea()
      }
    } else {
      if (gameId == 1 || gameId == 2) {
        self.mipaixianzhuang();
        self.drawBG();
        initzuobucanvas(imglist2)
      } else {
        if (!this._isdan && !this._ismianshui) {
          self.drawBG();
          initzuobucanvas(imglist2)
        } else {
          this.changeBetarea()
        }
      }

    }

    this.danlocal_list = {
      longhu: {
        bet_long: {
          x: 510,
          y: 140,
          tan: {
            left: '2.7em',
            top: '2.0em'
          }
        },
        bet_hu: {
          x: 1600,
          y: 140,
          tan: {
            left: '8.2em',
            top: '2.0em'
          }
        },
        bet_dthe: {
          x: 1060,
          y: 140,
          tan: {
            left: '5.5em',
            top: '2.0em'
          }
        }
      },
      mianshui: {
        bet_zhuangdan: {
          x: 1860,
          y: 74,
          tan: {
            left: '9.5em',
            top: '1.6em'
          }
        },
        bet_zhuangshuang: {
          x: 1800,
          y: 189,
          tan: {
            left: '9.2em',
            top: '2.2em'
          }
        },
        bet_xianshuang: {
          x: 300,
          y: 189,
          tan: {
            left: '1.7em',
            top: '2.2em'
          }
        },
        bet_xiandan: {
          x: 230,
          y: 74,
          tan: {
            left: '1.3em',
            top: '1.6em'
          }
        },
        bet_xiao: {
          x: 1620,
          y: 254,
          tan: {
            left: '8.35em',
            top: '2.5em'
          }
        },
        bet_da: {
          x: 480,
          y: 254,
          tan: {
            left: '2.55em',
            top: '2.5em'
          }
        },
        bet_xian: {
          x: 1040,
          y: 274,
          tan: {
            left: '5.4em',
            top: '2.5em'
          }
        },
        bet_zhuang: {
          x: 1040,
          y: 164,
          tan: {
            left: '5.4em',
            top: '2em'
          }
        },
        bet_xiand: {
          x: 500,
          y: 64,
          tan: {
            left: '2.7em',
            top: '1.5em'
          }
        },
        bet_zhuangd: {
          x: 1600,
          y: 64,
          tan: {
            left: '8.3em',
            top: '1.5em'
          }
        },
        bet_he: {
          x: 1230,
          y: 54,
          tan: {
            left: '6.4em',
            top: '1.5em'
          }
        },
        bet_super: {
          x: 860,
          y: 54,
          tan: {
            left: '4.5em',
            top: '1.5em'
          }
        }
      },
      baijiale: {
        bet_zhuangdan: {
          x: 1860,
          y: 74,
          tan: {
            left: '9.5em',
            top: '1.6em'
          }
        },
        bet_zhuangshuang: {
          x: 1800,
          y: 189,
          tan: {
            left: '9.2em',
            top: '2.2em'
          }
        },
        bet_xianshuang: {
          x: 300,
          y: 189,
          tan: {
            left: '1.7em',
            top: '2.2em'
          }
        },
        bet_xiandan: {
          x: 230,
          y: 74,
          tan: {
            left: '1.3em',
            top: '1.6em'
          }
        },
        bet_xiao: {
          x: 1620,
          y: 254,
          tan: {
            left: '8.35em',
            top: '2.5em'
          }
        },
        bet_da: {
          x: 480,
          y: 254,
          tan: {
            left: '2.55em',
            top: '2.5em'
          }
        },
        bet_xian: {
          x: 1040,
          y: 274,
          tan: {
            left: '5.4em',
            top: '2.5em'
          }
        },
        bet_zhuang: {
          x: 1040,
          y: 164,
          tan: {
            left: '5.4em',
            top: '2em'
          }
        },
        bet_xiand: {
          x: 500,
          y: 64,
          tan: {
            left: '2.7em',
            top: '1.5em'
          }
        },
        bet_zhuangd: {
          x: 1600,
          y: 64,
          tan: {
            left: '8.3em',
            top: '1.5em'
          }
        },
        bet_he: {
          x: 1040,
          y: 54,
          tan: {
            left: '5.4em',
            top: '1.5em'
          }
        }
      }
    }
    this.local_list = {
      1: {
        group: {},
        movegroup: {},
        s_loca: { x: 1995, y: 326 },
        bet_super: {
          x: 1245,
          y: 20,
          tan: {
            left: '6.4em',
            top: '1.1em'
          }
        },
        bet_xian: {
          x: 1825,
          y: 50,
          tan: {
            left: '9.35em',
            top: '1.5em'
          }
        },
        bet_zhuang: {
          x: 1665,
          y: 15,
          tan: {
            left: '8.5em',
            top: '1.3em'
          }
        },
        bet_xiand: {
          x: 775,
          y: 95,
          tan: {
            left: '4em',
            top: '1.5em'
          }
        },
        bet_zhuangd: {
          x: 1555,
          y: 0,
          tan: {
            left: '8em',
            top: '1.1em'
          }
        },
        bet_he: {
          x: 1265,
          y: 95,
          tan: {
            left: '6.5em',
            top: '1.5em'
          }
        },
        bet_long: {
          x: 1825,
          y: 55,
          tan: {
            left: '9.35em',
            top: '1.5em'
          }
        },
        bet_hu: {
          x: 1655,
          y: 15,
          tan: {
            left: '8.5em',
            top: '1.3em'
          }
        },
        bet_dthe: {
          x: 1555,
          y: 20,
          tan: {
            left: '8em',
            top: '1.2em'
          }
        }
      },
      2: {
        group: {},
        movegroup: {},
        s_loca: { x: 1900, y: 526 },
        bet_super: {
          x: 1175,
          y: 20,
          tan: {
            left: '6.1em',
            top: '1.1em'
          }
        },
        bet_xian: {
          x: 1755,
          y: 200,
          tan: {
            left: '9em',
            top: '2.3em'
          }
        },
        bet_zhuang: {
          x: 1600,
          y: 120,
          tan: {
            left: '8.2em',
            top: '1.9em'
          }
        },
        bet_xiand: {
          x: 715,
          y: 95,
          tan: {
            left: '3.7em',
            top: '1.5em'
          }
        },
        bet_zhuangd: {
          x: 1575,
          y: 40,
          tan: {
            left: '8.1em',
            top: '1.2em'
          }
        },
        bet_he: {
          x: 1200,
          y: 95,
          tan: {
            left: '6.2em',
            top: '1.5em'
          }
        },
        bet_long: {
          x: 1735,
          y: 216,
          tan: {
            left: '8.9em',
            top: '2.3em'
          }
        },
        bet_hu: {
          x: 1580,
          y: 130,
          tan: {
            left: '8.2em',
            top: '1.9em'
          }
        },
        bet_dthe: {
          x: 1505,
          y: 60,
          tan: {
            left: '7.75em',
            top: '1.5em'
          }
        }
      },
      3: {
        group: {},
        movegroup: {},
        s_loca: { x: 1460, y: 586 },
        bet_super: {
          x: 1115,
          y: 20,
          tan: {
            left: '5.75em',
            top: '1.1em'
          }
        },
        bet_xian: {
          x: 1385,
          y: 250,
          tan: {
            left: '7.2em',
            top: '2.45em'
          }
        },
        bet_zhuang: {
          x: 1345,
          y: 160,
          tan: {
            left: '7em',
            top: '2em'
          }
        },
        bet_xiand: {
          x: 645,
          y: 95,
          tan: {
            left: '3.4em',
            top: '1.5em'
          }
        },
        bet_zhuangd: {
          x: 1555,
          y: 60,
          tan: {
            left: '8em',
            top: '1.3em'
          }
        },
        bet_he: {
          x: 1130,
          y: 95,
          tan: {
            left: '5.8em',
            top: '1.5em'
          }
        },
        bet_long: {
          x: 1385,
          y: 250,
          tan: {
            left: '7.2em',
            top: '2.45em'
          }
        },
        bet_hu: {
          x: 1345,
          y: 160,
          tan: {
            left: '7em',
            top: '2em'
          }
        },
        bet_dthe: {
          x: 1325,
          y: 80,
          tan: {
            left: '6.8em',
            top: '1.4em'
          }
        }
      },
      4: {
        group: {},
        movegroup: {},
        s_loca: { x: 1060, y: 596 },
        bet_super: {
          x: 1055,
          y: 20,
          tan: {
            left: '5.5em',
            top: '1.1em'
          }
        },
        bet_xian: {
          x: 1055,
          y: 250,
          tan: {
            left: '5.5em',
            top: '2.45em'
          }
        },
        bet_zhuang: {
          x: 1055,
          y: 160,
          tan: {
            left: '5.5em',
            top: '2em'
          }
        },
        bet_xiand: {
          x: 595,
          y: 85,
          tan: {
            left: '3.1em',
            top: '1.5em'
          }
        },
        bet_zhuangd: {
          x: 1520,
          y: 85,
          tan: {
            left: '7.8em',
            top: '1.5em'
          }
        },
        bet_he: {
          x: 1055,
          y: 95,
          tan: {
            left: '5.5em',
            top: '1.5em'
          }
        },
        bet_long: {
          x: 1055,
          y: 250,
          tan: {
            left: '5.5em',
            top: '2.45em'
          }
        },
        bet_hu: {
          x: 1055,
          y: 160,
          tan: {
            left: '5.5em',
            top: '2em'
          }
        },
        bet_dthe: {
          x: 1075,
          y: 80,
          tan: {
            left: '5.5em',
            top: '1.5em'
          }
        }
      },
      5: {
        group: {},
        movegroup: {},
        s_loca: { x: 560, y: 586 },
        bet_super: {
          x: 995,
          y: 20,
          tan: {
            left: '5.15em',
            top: '1.1em'
          }
        },
        bet_xian: {
          x: 700,
          y: 250,
          tan: {
            left: '3.7em',
            top: '2.45em'
          }
        },
        bet_zhuang: {
          x: 750,
          y: 160,
          tan: {
            left: '4em',
            top: '2.0em'
          }
        },
        bet_xiand: {
          x: 550,
          y: 60,
          tan: {
            left: '2.9em',
            top: '1.3em'
          }
        },
        bet_zhuangd: {
          x: 1460,
          y: 90,
          tan: {
            left: '7.5em',
            top: '1.5em'
          }
        },
        bet_he: {
          x: 985,
          y: 95,
          tan: {
            left: '5.1em',
            top: '1.5em'
          }
        },
        bet_long: {
          x: 700,
          y: 250,
          tan: {
            left: '3.7em',
            top: '2.45em'
          }
        },
        bet_hu: {
          x: 750,
          y: 160,
          tan: {
            left: '4em',
            top: '2.0em'
          }
        },
        bet_dthe: {
          x: 805,
          y: 80,
          tan: {
            left: '4.14em',
            top: '1.5em'
          }
        }
      },
      6: {
        group: {},
        movegroup: {},
        s_loca: { x: 160, y: 556 },
        bet_super: {
          x: 935,
          y: 20,
          tan: {
            left: '4.8em',
            top: '1.1em'
          }
        },
        bet_xian: {
          x: 370,
          y: 216,
          tan: {
            left: '2em',
            top: '2.3em'
          }
        },
        bet_zhuang: {
          x: 500,
          y: 130,
          tan: {
            left: '2.7em',
            top: '1.9em'
          }
        },
        bet_xiand: {
          x: 540,
          y: 40,
          tan: {
            left: '2.85em',
            top: '1.2em'
          }
        },
        bet_zhuangd: {
          x: 1400,
          y: 95,
          tan: {
            left: '7.2em',
            top: '1.5em'
          }
        },
        bet_he: {
          x: 915,
          y: 95,
          tan: {
            left: '4.7em',
            top: '1.5em'
          }
        },
        bet_long: {
          x: 370,
          y: 216,
          tan: {
            left: '2em',
            top: '2.3em'
          }
        },
        bet_hu: {
          x: 500,
          y: 130,
          tan: {
            left: '2.7em',
            top: '1.9em'
          }
        },
        bet_dthe: {
          x: 605,
          y: 70,
          tan: {
            left: '3.14em',
            top: '1.5em'
          }
        }
      },
      7: {
        group: {},
        movegroup: {},
        s_loca: { x: 80, y: 300 },
        bet_super: {
          x: 865,
          y: 20,
          tan: {
            left: '4.45em',
            top: '1.1em'
          }
        },
        bet_xian: {
          x: 260,
          y: 60,
          tan: {
            left: '1.5em',
            top: '1.5em'
          }
        },
        bet_zhuang: {
          x: 420,
          y: 40,
          tan: {
            left: '2.3em',
            top: '1.4em'
          }
        },
        bet_xiand: {
          x: 555,
          y: 0,
          tan: {
            left: '2.9em',
            top: '1.1em'
          }
        },
        bet_zhuangd: {
          x: 1335,
          y: 95,
          tan: {
            left: '6.9em',
            top: '1.5em'
          }
        },
        bet_he: {
          x: 845,
          y: 95,
          tan: {
            left: '4.4em',
            top: '1.5em'
          }
        },
        bet_long: {
          x: 260,
          y: 60,
          tan: {
            left: '1.5em',
            top: '1.5em'
          }
        },
        bet_hu: {
          x: 420,
          y: 40,
          tan: {
            left: '2.3em',
            top: '1.4em'
          }
        },
        bet_dthe: {
          x: 565,
          y: 20,
          tan: {
            left: '3em',
            top: '1.2em'
          }
        }
      }
    }
  },
  mipaixianzhuang: function () {
    //下注区底边
    this.xian = new zrender.Image({
      style: {
        image: './static/zuobu/xian.png',
        // width: 50,
        // height: 33
      },
      position: [925, 250],
      cursor: 'default'
    });
    this.zhuang = new zrender.Image({
      style: {
        image: './static/zuobu/zhuang.png',
        // width: 50,
        // height: 33
      },
      position: [1190, 250],
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
    moneyGroup.position = [0, 353];
    return moneyGroup;
  },
  clearxiazhu: function () {
    var container = this.element;
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
      //playGameEffect("../sound/se/click_coin_btn.mp3", true)
      var curr_qu = istupian(evt.offsetX, evt.offsetY);
      if (!curr_qu) { return };
      _this[curr_qu].attr({ style: { opacity: '.3' } });
      _this.curr_qu = curr_qu;
      console.log("click---------------------")
      _this.xiazhu(curr_qu);
    })
  },
  removeEvents: function () {
    $(this.element).unbind()
  },
  drawdanBG: function () {

    var zrBGGroup = this.zrBGGroup;
    var w = this.w;
    var h = this.h;

    var _this = this;

    this.bet_xian = new zrender.Image({
      name: "bet_xian",
      style: {
        image: './static/zuobu/ba_dan_xian.png',
        opacity: 0
      },
      position: [0, -56],
      cursor: 'default'
    });
    //庄下注
    this.bet_zhuang = new zrender.Image({
      style: {
        image: './static/zuobu/ba_dan_zhuang.png',
        opacity: 0
      },
      position: [0, -56],
      cursor: 'default'
    });
    //闲对下注
    this.bet_xiand = new zrender.Image({
      style: {
        image: './static/zuobu/ba_dan_xd.png',
        opacity: 0
      },
      position: [0, -56],
      cursor: 'default'
    });
    //庄对下注
    this.bet_zhuangd = new zrender.Image({
      style: {
        image: './static/zuobu/ba_dan_zd.png',
        opacity: 0
      },
      position: [0, -56],
      cursor: 'default'
    });
    //闲单对下注
    this.bet_xiandan = new zrender.Image({
      style: {
        image: './static/zuobu/ba_dan_xdan.png',
        opacity: 0
      },
      position: [0, -56],
      cursor: 'default'
    });

    //闲双对下注
    this.bet_xianshuang = new zrender.Image({
      style: {
        image: './static/zuobu/ba_dan_xshuang.png',
        opacity: 0
      },
      position: [0, -56],
      cursor: 'default'
    });

    //庄单对下注
    this.bet_zhuangdan = new zrender.Image({
      style: {
        image: './static/zuobu/ba_dan_zdan.png',
        opacity: 0
      },
      position: [0, -56],
      cursor: 'default'
    });

    //庄双对下注
    this.bet_zhuangshuang = new zrender.Image({
      style: {
        image: './static/zuobu/ba_dan_zshuang.png',
        opacity: 0
      },
      position: [0, -56],
      cursor: 'default'
    });
    //小下注
    this.bet_xiao = new zrender.Image({
      style: {
        image: './static/zuobu/ba_dan_xiao.png',
        opacity: 0
      },
      position: [0, -56],
      cursor: 'default'
    });
    //大下注
    this.bet_da = new zrender.Image({
      style: {
        image: './static/zuobu/ba_dan_da.png',
        fill: "#15342d",
        opacity: 0
      },
      position: [0, -56],
      cursor: 'default'
    });
    //super6下注
    this.bet_super = new zrender.Image({
      style: {
        image: './static/zuobu/ba_dan_six.png',
        opacity: 0
      },
      position: [0, -56]
    });

    this.bet_super.hide();
    this.drawhe()
    zrBGGroup.add(this.bet_super);
    zrBGGroup.add(this.bet_zhuangd);
    zrBGGroup.add(this.bet_xian);
    zrBGGroup.add(this.bet_zhuang);
    zrBGGroup.add(this.bet_xiand);

    zrBGGroup.add(this.bet_xiandan);
    zrBGGroup.add(this.bet_xianshuang);
    zrBGGroup.add(this.bet_zhuangdan);
    zrBGGroup.add(this.bet_zhuangshuang);
    zrBGGroup.add(this.bet_da);
    zrBGGroup.add(this.bet_xiao);

    this.drawdanzuobu('./static/zuobu/seatbac_bet_area_max_sc.png', -56)

  },
  drawdanhe: function () {
    this.bet_he = new zrender.Image({
      style: {
        image: './static/zuobu/ba_dan_six_he.png',
        opacity: 0
      },
      position: [0, 0],
      cursor: 'default'
    });
    this.zrBGGroup.add(this.bet_he);
  },
  drawhe: function () {
    //和下注max_tie.png
    this.bet_he = new zrender.Image({
      style: {
        image: './static/zuobu/ba_dan_he.png',
        opacity: 0
      },
      position: [0, -56],
      cursor: 'default'
    });
    this.zrBGGroup.add(this.bet_he);
  },
  drawdanzuobu: function (url, y) {
    this.zuobu = new zrender.Image({
      name: "zuobu",
      style: {
        image: url,
      },
      cursor: 'default',
      silent: true,
      position: [0, y],
      //
    });
    this.zrBGGroup.add(this.zuobu)
    //this.events();
  },
  changeposition: function (dan, name) {
    var _this = this;
    var _ismianshui = _this._ismianshui

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
  // //画背景
  drawdanlongBG: function () {
    var zrBGGroup = this.zrBGGroup;
    var w = this.w;
    var h = this.h;
    var _this = this;

    //下注区域
    this.zuobu = new zrender.Image({
      name: "zuobu",
      style: {
        image: "./static/zuobu/seatbac_bet_area_max_dt_sc.png",
      },
      cursor: 'default',
      silent: true,
      position: [0, -353]
      //
    });
    //下注区底边

    this.bet_long = new zrender.Image({
      name: "bet_long",
      style: {
        image: './static/zuobu/lh_dan_long.png',
        opacity: 0
      },
      position: [0, -40],
      cursor: 'default'
    });
    //庄下注
    this.bet_hu = new zrender.Image({
      style: {
        image: './static/zuobu/lh_dan_hu.png',
        opacity: 0
      },
      position: [0, -40],
      cursor: 'default'
    });
    //和下注
    this.bet_dthe = new zrender.Image({
      style: {
        image: './static/zuobu/lh_dan_he.png',
        opacity: 0
      },
      position: [0, -40],
      cursor: 'default'
    });


    zrBGGroup.add(this.bet_dthe);
    zrBGGroup.add(this.bet_long);
    zrBGGroup.add(this.bet_hu);

    zrBGGroup.add(this.zuobu);

  },
  // //画背景
  drawlongBG: function () {
    var zrBGGroup = this.zrBGGroup;
    var w = this.w;
    var h = this.h;
    var _this = this;

    //下注区域
    this.zuobu = new zrender.Image({
      name: "zuobu",
      style: {
        image: './static/zuobu/seatbac_bet_area_dt_sc.png',
        width: w,
        height: h
      },
      cursor: 'default',
      silent: true,
      //
    });

    this.bet_long = new zrender.Image({
      name: "bet_long",
      style: {
        image: "./static/zuobu/lh_long.png",
        opacity: 0
      },
      position: [0, 0],
      cursor: 'default'
    });
    //庄下注
    this.bet_hu = new zrender.Image({
      style: {
        image: "./static/zuobu/lh_hu.png",
        opacity: 0
      },
      position: [0, 0],
      cursor: 'default'
    });
    //和下注
    this.bet_dthe = new zrender.Image({
      style: {
        image: "./static/zuobu/lh_he.png",
        opacity: 0
      },
      position: [0, 0],
      cursor: 'default'
    });
    //当前的索引 背景有问题
    this.site_bg = new zrender.Image({
      style: {
        image: './static/zuobu/ba_' + _this._index + '.png',
        opacity: 1
      },
      position: [0, 0],
      cursor: 'default'
    });





    zrBGGroup.add(this.site_bg);
    zrBGGroup.add(this.bet_dthe);
    zrBGGroup.add(this.bet_long);
    zrBGGroup.add(this.bet_hu);
    zrBGGroup.add(this.zuobu);
    // this.events();

  },
  drawzuobu: function (url) {
    var w = this.w;
    var h = this.h;

    this.zuobu = new zrender.Image({
      name: "zuobu",
      style: {
        image: url,
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

    this.bet_xian = new zrender.Image({
      name: "bet_xian",
      style: {
        image: './static/zuobu/lh_long.png',
        opacity: 0
      },
      position: [0, 0],
      cursor: 'default'
    });
    // //庄下注
    this.bet_zhuang = new zrender.Image({
      style: {
        image: './static/zuobu/lh_hu.png',
        opacity: 0
      },
      position: [0, 0],
      cursor: 'default'
    });
    // //闲对下注
    this.bet_xiand = new zrender.Image({
      style: {
        image: './static/zuobu/ba_xd.png',
        opacity: 0
      },
      position: [0, 0],
      cursor: 'default'
    });
    // //庄对下注
    this.bet_zhuangd = new zrender.Image({
      style: {
        image: './static/zuobu/ba_zd.png',
        opacity: 0
      },
      position: [0, 0],
      cursor: 'default'
    });
    // //和下注
    this.bet_he = new zrender.Image({
      style: {
        image: './static/zuobu/ba_he.png',
        opacity: 0
      },
      position: [0, 0],
      cursor: 'default'
    });
    // //当前的索引 背景有问题
    this.site_bg = new zrender.Image({
      style: {
        image: './static/zuobu/ba_' + _this._index + '.png',
        opacity: 1
      },
      position: [0, 0],
      cursor: 'default'
    });
    // // super6下注
    this.bet_super = new zrender.Image({
      style: {
        image: "./static/zuobu/ba_six.png",
        opacity: 0,
      },
      position: [0, 0],
      cursor: 'default'
    });

    this.bet_super.hide()
    zrBGGroup.add(this.bet_super);
    zrBGGroup.add(this.bet_he);
    zrBGGroup.add(this.bet_zhuang);
    zrBGGroup.add(this.site_bg);
    zrBGGroup.add(this.bet_zhuangd);
    zrBGGroup.add(this.bet_xiand);

    zrBGGroup.add(this.bet_xian);
    this.drawzuobu('./static/zuobu/seatbac_bet_area_baccarat_sc.png');

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
    var _chouma = this.chouma;
    var coinStack = this.coinStack;
    var o = this.o
    var x = 0
    var gameId = this.gameId

    var _isdan = this._isdan;
    var _ismianshui = this._ismianshui

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


    // 大小等没有就不显示
    if (curr_loc == undefined) { return }

    if (!_this.local_list[index]['group'][curr_qu]) {
      _this.local_list[index]['group'][curr_qu] = this.creatGroup();

      this.local_list[index]['group'][curr_qu].position = [curr_loc.x, curr_loc.y + 353];
      this.zr.add(_this.local_list[index]['group'][curr_qu])

    }

    _group = _this.local_list[index]['group'][curr_qu];
    //如果是单人 并且是他人下注 就隐藏
    if (curr_index && _isdan) {
      _group.hide()
    } else {
      _group.show()
    }


    if (!_isdan && curr_qu !== 'bet_long' && curr_qu !== 'bet_hu' && curr_qu !== 'bet_xian' && curr_qu !== 'bet_zhuang') {
      if (_group.childOfName('one')) {
        num = _num ? _num : parseInt(_group.childOfName('one').style.text) + addnum;
        _group.childOfName('one').attr({ style: { text: num } })
      } else {
        num = _num ? _num : addnum;

        _group.add(_this.listmoney(0, cur_y, 'normal'));
        _group.add(_this.nolmalmoneytxt(30, 10, num));

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
      console.log(num_list, "num_list")
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

      if (key % 2) {
        x = 0
      } else {
        x = -10
      }
      _group.add(_this.listmoney(x, cur_y -= 10, val));
    })

    if (curr_index) {
      _group.add(_this.othermoneytxt(-40, 50, num));
    } else {
      _group.add(_this.listmoneytxt(-40, 50, num));
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
    // console.log('下注', o, coinStack)
  },
  otherxiazhu: function (index, qu, num) {
    //console.log('其他用户下注',index, qu, num)
    var _this = this;
    var _isdan = _this._isdan
    if (!num) {
      return;
    }
    if (!_isdan) {//多人
      var e_local = _this.local_list[index][qu];
      //var s_loca = _this.local_list[index]['s_loca' ]

      if (!this.local_list[index].movegroup[qu]) {
        this.local_list[index].movegroup[qu] = this.creatGroup();

        this.zr.add(this.local_list[index].movegroup[qu])
      }

      var movegroup = this.creategroup(this.local_list[index].movegroup[qu], index, qu, num);
      //console.log("run----",e_local.x, e_local.y)
      movegroup.animateTo({
        position: [e_local.x, e_local.y + 353]
      }, 500, 500, 'linear', function () {

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


    if (qu !== 'bet_long' && qu !== 'bet_hu' && qu !== 'bet_xian' && qu !== 'bet_zhuang') {
      if (_group.childOfName('one')) {
        num = parseInt(_group.childOfName('one').style.text) + num;
        _group.childOfName('one').attr({ style: { text: num } })

      } else {
        _group.add(_this.listmoney(0, s_y, 'normal'));
        _group.add(_this.nolmalmoneytxt(30, 10, num));
      }
    } else {

      if (_group.childCount() > 0) {
        num = parseInt(_group.childOfName('one').style.text) + num;
        _group.removeAll()

      }

      num_list = this.addToArray(num)

      $.each(num_list, function (index, val) {
        if (index % 2) {
          var x = 0
        } else {
          var x = -10
        }
        _group.add(_this.listmoney(x, s_y -= 10, val));
      })


      _group.add(_this.othermoneytxt(-40, 50, num));
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

  // //筹码 添加 以及移动
  listmoney: function (x, y, imgurl) {
    var m_url = './static/chip/chip_' + imgurl + '.png';
    if (imgurl == 'normal') {
      var width = 64
      var height = 48
    } else {
      var width = 96
      var height = 72
    }
    var onemoney = new zrender.Image({
      style: {
        image: m_url,
        width: width,
        height: height
      },
      silent: true,
      position: [x, y]
    });

    return onemoney;
  },
  nolmalmoneytxt: function (x, y, text) {

    var rects = new zrender.Text({
      position: [x, y],
      name: 'one',
      style: {
        text: text,
        width: 96,
        height: 72,
        textAlign: 'center',
        textPosition: 'bottom',
        textDistance: 0,
        textFill: '#fff',
        font: '20px Arial'
      }
    });
    return rects;
  },
  listmoneytxt: function (x, y, text) {
    var rects = new zrender.Image({
      position: [x, y],
      name: 'one',
      style: {
        image: './static/zuobu/mnytxt.png',
        lineWidth: 5,
        text: formatCurrency(text),
        width: 168,
        height: 44,
        opacity: 1,
        textLineWidth: 1,
        textFill: '#fff',
        fontSize: 30,
        textAlign: 'center',
        textPosition: 'bottom',
        textDistance: -32,
        fontWeight: 500,
      }
    });

    return rects;
  },
  othermoneytxt: function (x, y, text) {
    var rects = new zrender.Image({
      position: [x, y],
      name: 'one',
      style: {
        image: './static/zuobu/other.png',
        lineWidth: 5,
        text: formatCurrency(text),
        width: 168,
        height: 44,
        opacity: 1,
        textLineWidth: 1,
        textFill: '#fff',
        fontSize: 30,
        textAlign: 'center',
        textPosition: 'bottom',
        textDistance: -32,
        fontWeight: 500,
      },
      silent: true,
      onmouseover: function (evt) {
        rects.attr({ style: { 'fill': '#000' } });
      }
    });

    return rects;
  },
  // showLongHuPeiLv: function () {
  //   var location;
  //   var _isdan = this._isdan
  //   if (_isdan) {
  //     location = this.peilvLocation.longhu.dan
  //   } else {
  //     location = this.peilvLocation.longhu.duo
  //   }
  //   var rect1 = new zrender.Image({
  //     position: [location.bet_xian.x, location.bet_xian.y],
  //     style: {
  //       image: require("../assets/dan/dd.png"),
  //       width: 180,
  //       height: 50,
  //       lineWidth: 5,
  //       text: "1:1",
  //       opacity: 1,
  //       textLineWidth: 1,
  //       textFill: '#fff',
  //       fontSize: 20,
  //       textPosition: 'inside',
  //       fontWeight: 700,
  //       z: 100
  //     },
  //     silent: true
  //   });
  //   var rect2 = new zrender.Image({
  //     position: [location.bet_he.x, location.bet_he.y],
  //     style: {
  //       lineWidth: 5,
  //       image: require("../assets/dan/dd.png"),
  //       text: "1:8",
  //       opacity: 1,
  //       width: 180,
  //       height: 50,
  //       textLineWidth: 1,
  //       textFill: '#fff',
  //       fontSize: 20,
  //       textAlign: 'center',
  //       textPosition: 'inside',
  //       fontWeight: 700,
  //       z: 100
  //     },
  //     silent: true
  //   });
  //   var rect3 = new zrender.Image({
  //     position: [location.bet_zhuang.x, location.bet_zhuang.y],
  //     style: {
  //       image: require("../assets/dan/dd.png"),
  //       lineWidth: 5,
  //       text: "1:1",
  //       opacity: 1,
  //       width: 180,
  //       height: 50,
  //       textLineWidth: 1,
  //       textFill: '#fff',
  //       fontSize: 20,
  //       textAlign: 'center',
  //       textPosition: 'inside',
  //       fontWeight: 700,
  //       z: 100
  //     },
  //     silent: true
  //   });
  //   var _this = this
  //   var zrPeiLv = new zrender.Group();
  //   zrPeiLv.position = [location.group.x, location.group.y];
  //   this.zr.add(zrPeiLv);
  //   zrPeiLv.add(rect1)
  //   zrPeiLv.add(rect2)
  //   zrPeiLv.add(rect3)
  //   if (t) {
  //     clearTimeout(t)
  //     _this.zr.remove(zrPeiLv)
  //     _this.zr.refresh()
  //   }
  //   var t = setTimeout(function () {
  //     _this.zr.remove(zrPeiLv)
  //     _this.zr.refresh()
  //   }, 3000)
  // },
  // showPeiLv: function () {
  //   var _this = this
  //   var zrPeiLv = new zrender.Group();
  //   var txt, location;

  //   if (!_isdan) {

  //     location = this.peilvLocation.baijiale.duo
  //     if (_ismianshui) {
  //       txt = "1:1"
  //     } else {
  //       txt = "1:0.95"
  //     }
  //   } else {
  //     location = this.peilvLocation.baijiale.dan;
  //     txt = "1:1";
  //     if (_ismianshui) {
  //       var bet_he = this.peilvLocation.baijiale.superdan.bet_he
  //     } else {
  //       var bet_he = location.bet_he
  //     }
  //     var rect3 = new zrender.Image({
  //       position: [bet_he.x, bet_he.y],
  //       style: {
  //         image: require("../assets/dan/dd.png"),
  //         lineWidth: 5,
  //         width: 180,
  //         height: 50,
  //         text: "1:1",
  //         opacity: 1,
  //         textLineWidth: 1,
  //         textFill: '#fff',
  //         fontSize: 20,
  //         textAlign: 'center',
  //         textPosition: 'inside',
  //         fontWeight: 700,
  //         z: 100
  //       },
  //       silent: true
  //     });
  //     zrPeiLv.add(rect3)
  //   }
  //   var rect1 = new zrender.Image({
  //     position: [location.bet_zhuang.x, location.bet_zhuang.y],
  //     style: {
  //       image: require("../assets/dan/dd.png"),
  //       width: 180,
  //       height: 50,
  //       lineWidth: 5,
  //       text: txt,
  //       opacity: 1,
  //       textLineWidth: 1,
  //       textFill: '#fff',
  //       fontSize: 20,
  //       textAlign: 'center',
  //       textPosition: 'inside',
  //       fontWeight: 700,
  //       z: 100
  //     },
  //     silent: true
  //   });
  //   var rect2 = new zrender.Image({
  //     position: [location.bet_xian.x, location.bet_xian.y],
  //     style: {
  //       image: require("../assets/dan/dd.png"),
  //       width: 180,
  //       height: 50,
  //       lineWidth: 5,
  //       text: "1:1",
  //       opacity: 1,
  //       textLineWidth: 1,
  //       textFill: '#fff',
  //       fontSize: 20,
  //       textAlign: 'center',
  //       textPosition: 'inside',
  //       fontWeight: 700,
  //       z: 100
  //     },
  //     silent: true
  //   });


  //   zrPeiLv.position = [location.group.x, location.group.y];
  //   this.zr.add(zrPeiLv);
  //   zrPeiLv.add(rect1)
  //   zrPeiLv.add(rect2)
  //   if (t) {
  //     clearTimeout(t)
  //     _this.zr.remove(zrPeiLv)
  //     _this.zr.refresh()
  //   }
  //   var t = setTimeout(function () {
  //     _this.zr.remove(zrPeiLv)
  //     _this.zr.refresh()
  //   }, 3000)
  // },
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
  },

  changeBetarea: function () {
    var _isdan = this._isdan
    var _ismianshui = this._ismianshui
    var gameId = this.gameId;

    hideOthers(_isdan)
    hideMove(_isdan)
    if (gameId == 17) {
      if (_isdan) {
        $("._2Ob7v").hide();
        game.zrBGGroup.removeAll();
        game.changeposition(_isdan, 'longhu')
        game.drawdanlongBG()
        imgCtx = {};
        initzuobucanvas(imglist4)
      } else {
        $('._2Ob7v').show()
        game.zrBGGroup.removeAll();
        game.changeposition(_isdan, 'longhu')
        game.drawlongBG()
        imgCtx = {};
        initzuobucanvas(imglist1)
      }
      return
    }

    if (_isdan) {
      if (!_ismianshui) {
        //单人 不免水
        $("._2Ob7v").hide();//头像隐藏
        game.zrBGGroup.removeAll(); //桌布去掉
        game.changeposition(_isdan, 'baijiale')//下注筹码位置
        game.zr.refresh();
        game.drawdanBG()//画桌布
        //canvas
        imgCtx = {};
        initzuobucanvas(imglist3)
      } else {
        //单人  免水
        $("._2Ob7v").hide();
        game.zrBGGroup.removeAll();
        game.drawdanBG()//画桌布
        game.changeposition(_isdan, 'baijiale')

        game.zrBGGroup.remove(game.zuobu);
        game.zrBGGroup.remove(game.bet_he);
        game.drawdanhe()
        game.drawdanzuobu('./static/zuobu/seatbac_bet_area_max_super6_sc.png', -56)


        game.bet_super.show()
        game.zr.refresh()
        imgCtx = {};
        initzuobucanvas(imglist5)
      }

    } else {
      if (_ismianshui) {
        // 多 免水
        $('._2Ob7v').show()
        game.zrBGGroup.removeAll();
        game.drawBG()
        game.changeposition(_isdan, 'baijiale')
        game.zrBGGroup.remove(game.zuobu);
        game.drawzuobu('./static/zuobu/seatbac_bet_area_super6_sc.png');
        game.bet_super.show()

        game.zr.refresh()

        imgCtx = {};
        initzuobucanvas(imglist2)
      } else {
        // 多 不免水
        $('._2Ob7v').show()
        game.zrBGGroup.removeAll();
        game.changeposition(_isdan, 'baijiale')
        game.zr.refresh();
        game.drawBG()
        game.bet_super.hide()

        imgCtx = {};
        initzuobucanvas(imglist2)
      }
    }
  }
}


function hideOthers (flag) {
  var index = game._index;
  var lists = game.local_list;

  for (var i in lists) {
    if (i != index) {

      for (var key in lists[i]['group']) {
        if (flag) {
          lists[i]['group'][key].hide()

        } else {

          lists[i]['group'][key].show()
        }
      }
    }
  }
  game.zr.refresh()
}

function hideMove (flag) {
  if (flag) {
    var index = game._index;
    var lists = game.local_list;

    for (var i in lists) {
      if (i != index) {
        for (var key in lists[i]['movegroup']) {
          lists[i]['movegroup'][key].removeAll()
        }
      }
    }
    game.zr.refresh()
  }
}



function formatCurrency (num) {
  if (!num) return;
  num = num.toString().replace(/\$|\,/g, '');
  if (isNaN(num))
    num = "0";
  var sign = (num == (num = Math.abs(num)));
  num = Math.floor(num * 100 + 0.50000000001);
  var cents = num % 100;
  num = Math.floor(num / 100).toString();
  if (cents < 10 && cents != 0) {
    cents = "0" + cents;
  } else {
    cents = "";

  }

  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
    num = num.substring(0, num.length - (4 * i + 3)) + ',' +
      num.substring(num.length - (4 * i + 3));
  return cents != "" ? (((sign) ? '' : '-') + num + '.' + cents) : (((sign) ? '' : '-') + num);

}

var imgCtx = {};

function initzuobucanvas (imglist) {
  $.each(imglist, function (name, value) {
    creatCanvas(value.image_url, value.x, value.y, name)
  })
}

function istupian (x, y) {

  x = (2176 / $('.zuobu').width()) * x;
  y = (1002 / $('.zuobu').height()) * y
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
    $(game.element).css({ 'cursor': 'pointer' });
  } else {
    //game.zuobu.attr('cursor','default')
    // if($(container).css('cursor') == 'default'){return}
    $(game.element).css({ 'cursor': 'default' });
  }
  return curr_img;
}


function creatCanvas (image_url, x, y, name) {
  var can = document.createElement('canvas')//document.createElement('canvas'),
  var ctx = can.getContext('2d');
  can.width = 2176;
  can.height = 1002;
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
}



// export var _changetimer={}
// _changetimer.timeLocation = function(){
//     var timer=document.getElementsByClassName('time-location')[0];
//     this.zr = zrender.init(timer);
//     this.text = new zrender.Text({  
//         style: {
//             text:"2019.06.25",
//             opacity:1,
//             textFill:'#c1bdc5',
//             fontSize:25,
//             fontWeight:'900',
//             fontFamily:"NotoSansCJKtc-Light,NotoSans-Light,sans-serif"
//         },
//         silent:true
//     });
//     this.hourtext = new zrender.Text({  
//       style: {
//           text:"14:25",
//           opacity:1,
//           textFill:'#c1bdc5',
//           fontSize:25,
//           fontWeight:'900',
//           fontFamily:"NotoSansCJKtc-Light,NotoSans-Light,sans-serif"
//       },
//       silent:true
//     });
//     this.zr.add(this.text)
//     this.zr.add(this.hourtext)
// }
// _changetimer.timerchangeTime1=function(x,y,size,rotate){
//     if(!this.text){return};
//     this.text.attr({position:[x,y]});
//     this.text.attr({style:{fontSize:size}});

//     this.hourtext.attr({position:[x,y+15]});
//     this.hourtext.attr({style:{fontSize:size+3}});

//     $('.time-rotate')[0].style.webkitTransform = "rotate("+rotate+"deg)";
//     $('.time-rotate')[0].style.MozTransform = "rotate("+rotate+"deg) ";
//     $('.time-rotate')[0].style.msTransform = "rotate("+rotate+"deg) ";
//     $('.time-rotate')[0].style.OTransform = "rotate("+rotate+"deg)  ";
//     $('.time-rotate')[0].style.transform = "rotate("+rotate+"deg) ";
// }
// _changetimer.timerchangeTime=function(text,hourtext){
//     if(!this.text){return};
//     this.text.attr({style:{text:text}})
//     this.hourtext.attr({style:{text:hourtext}})
// }
export var game = new Gamezuo();


