/* eslint-disable */
import zrender  from 'zrender'

var _arr = [];

var imglist1 = {
  bet_long: { image_url: './static/zuobu/lh_long.png', x: 0, y: 353 },
  bet_hu: { image_url: './static/zuobu/lh_hu.png', x: 0, y: 353 },
  bet_dthe: { image_url: './static/zuobu/lh_he.png', x: 0, y: 353 }
};



function Gamezuo () {
}


Gamezuo.prototype = {
  coinStack: {},
  o: {},
  element:null,
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
    this.zr.refresh();
    self.drawBG();

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
          x: 1835,
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
            left: '8.57em',
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
          x: 1745,
          y: 200,
          tan: {
            left: '9em',
            top: '2.3em'
          }
        },
        bet_zhuang: {
          x: 1610,
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
          x: 1395,
          y: 250,
          tan: {
            left: '7.2em',
            top: '2.45em'
          }
        },
        bet_zhuang: {
          x: 1345,
          y: 155,
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
          x: 1085,
          y: 250,
          tan: {
            left: '5.55em',
            top: '2.45em'
          }
        },
        bet_zhuang: {
          x: 1005,
          y: 160,
          tan: {
            left: '5.3em',
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
          y: 245,
          tan: {
            left: '3.7em',
            top: '2.45em'
          }
        },
        bet_zhuang: {
          x: 750,
          y: 159,
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
          x: 340,
          y: 190,
          tan: {
            left: '2em',
            top: '2.1em'
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
          x: 250,
          y: 60,
          tan: {
            left: '1.5em',
            top: '1.5em'
          }
        },
        bet_zhuang: {
          x: 420,
          y: 20,
          tan: {
            left: '2.3em',
            top: '1.3em'
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
      _this.playGameEffect("./static/sound/se/click_coin_btn.mp3", true)
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
        num = _num ? _num : parseInt(_group.childOfName('one').style.moneytxt) + addnum;
        _group.childOfName('one').attr({ style: { text: num, moneytxt: num } })
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
      num = _num ? _num : parseInt(_group.childOfName('one').style.moneytxt) + addnum;
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
        x = -5
      }
      _group.add(_this.listmoney(x, cur_y -= 8, val));
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
    console.log('下注', o, coinStack)
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

  listmoneytxt: function (x, y, text) {
    var rects = new zrender.Image({
      position: [x - 1, y - 18],
      name: 'one',
      style: {
        image: './static/zuobu/mnytxt.png',
        lineWidth: 5,
        moneytxt: text,
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

export var game = new Gamezuo();


