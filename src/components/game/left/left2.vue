<template>
  <div class="_2FQ8z ys9Hi">
    <div class="_28VAl">
      <div class="_1UwaW _2CnCI">
        <div class="_2bvEw N_vjy">
          <div class="wc3Bd">
            <div class="n4C4I">LIVE JACKPOT</div>
            <div class="_1unQa"
                 role="button"
                 @click='introduction'
                 tabindex="0"></div>
          </div>
          <div class="_2r6_V">
            <div class="_1amM2">
              <span>{{jp['live']}}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="_1qPSL">
        <div class="_2xSSt _18yFR"
             :class='chipnotice?"VOXnU":""'>
          <div class="_2K7UY">
            <div class="RoTQ2 _135Vr"
                 role="presentation">
              <div class="_1LHnT"></div>
            </div>
            <div class="N1YLN">
              <div class="_2KWZL">
                <span class="_13Q5o">
                  <span>{{selectDeskData['name']}}</span>
                  <span>{{selectDeskData['jushu']?selectDeskData['jushu']:""}}</span>
                </span>
              </div>
              <div class="_3fa9o">{{selectDeskData['boot']?selectDeskData['boot'] +"-"+selectDeskData['inning']:selectDeskData['inning']}}</div>
            </div>
          </div>
          <div class="_2c97U">
            <div class="SxLiX daojishi"
                 v-show='selectDeskData["status"]=="1"?true:false'>
              <div class="_3fDKM "
                   :class="parseInt(selectDeskData['bet_interval'])<10?'_6NJkN':'' ">
                {{selectDeskData['bet_interval']}}
              </div>
            </div>

            <div class="_2QqaK"
                 :class="selectDeskData['status']=='2'?'_13ksF':'' ">
              {{selectDeskData['text']}}
            </div>
          </div>
        </div>
        <!-- {{curr_date.year}}{{curr_date.hour}}  -->

      </div>
      <div style='width:3.52em;height:2.63em;position:absolute;z-index:2'>
        <div style='width:100%;height:100%'>
          <div class="flash-zhezhao"
               style="display:none">2019.06.26</div>
          <div class="flash-zhezhao1"
               style="display:none">15:55</div>
        </div>
      </div>
      <div class="kJuDa"
           :class='chipnotice?"VOXnU":""'>

        <div class="_3tNCF"
             style="position: absolute;">
          <div class="Video__root wL5kg">
            <div class="FlvPlayer__root wL5kg flash-inner">
            </div>
            <div class="_2BQa8">
              <div class="_3sSrZ htADt"
                   aria-hidden="true"></div>
            </div>
          </div>

          <div class="_3qTCB _1vSuT"
               @click='showxian'
               v-show="isshowxian">
            <div class="FSexA _3y0uI"
                 aria-hidden="true"></div>
            <div class="_2GFWT"><span>游戏闲置过时，请点撃重新连线直播</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="_2r7Zi">
      <div class="ARp1S qXNxK">
        <div class="_2bvEw N_vjy _1TagV DA-10">
          <div class="_2cqiB">
            <div class="yFWOl DA-10"
                 ref="translateDom1"
                 style="transform: translateY(0);">
              <div class="_3dNfP">累积金奖</div>
              <div class="_3dNfP iS5oQ">累积银奖</div>
              <div class="_3dNfP _395Ik">累积铜奖</div>
              <div class="_3dNfP _31QNh">日日奖</div>
              <div class="_3dNfP">累积金奖</div>
            </div>
          </div>
          <!--  -->
          <div class="_39u_f">
            <div class="_1UqVd DA-10"
                 ref="translateDom"
                 style="transform: translateY(0);">
              <div class="_2ft9C">
                <div class="_2HW8t">
                  <div class="AuDWz">
                    <div class="_2fUjH">{{jp['ga']}}</div>
                  </div>
                </div>
              </div>
              <div class="_2ft9C">
                <div class="_2HW8t">
                  <div class="AuDWz">
                    <div class="_2fUjH iS5oQ">{{jp['lx']}}</div>
                  </div>
                </div>
              </div>
              <div class="_2ft9C">
                <div class="_2HW8t">
                  <div class="AuDWz">
                    <div class="_2fUjH _395Ik">{{jp['lxp']}}</div>
                  </div>
                </div>
              </div>
              <div class="_2ft9C">
                <div class="_2HW8t">
                  <div class="AuDWz">
                    <div class="_2fUjH _31QNh">391</div>
                  </div>
                </div>
              </div>
              <div class="_2ft9C">
                <div class="_2HW8t">
                  <div class="AuDWz">
                    <div class="_2fUjH">{{jp['ga']}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="_2r6_V">
            <div class="_2vAUp">
              <div class="M23DC _1x003"
                   ref="translateDom"
                   style="transform: translateY(0);">
                <div class="_2sEMN">
                  <div class="_3cMHG">
                    <div class="_1DSHR">GA</div>
                    <div class="_2DVOB">
                      <div class="_1-kZh">{{jp['ga']}}</div>
                    </div>
                  </div>
                </div>
                <div class="_2sEMN">
                  <div class="_3cMHG">
                    <div class="_1DSHR">LX</div>
                    <div class="_2DVOB">
                      <div class="_1-kZh">{{jp['lx']}}</div>
                    </div>
                  </div>
                </div>
                <div class="_2sEMN">
                  <div class="_3cMHG">
                    <div class="_1DSHR">LXP</div>
                    <div class="_2DVOB">
                      <div class="_1-kZh">{{jp['lxp']}}</div>
                    </div>
                  </div>
                </div>
                <div class="_2sEMN">
                  <div class="_3cMHG">
                    <div class="_1DSHR">GA</div>
                    <div class="_2DVOB">
                      <div class="_1-kZh">{{jp['ga']}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>

  </div>
</template>
<script>
/* eslint-disable */
import ws from '@/api/socket'
import videojs from 'video.js'
import { setTimeout } from 'timers';
import 'videojs-flash/dist/videojs-flash';
import { formatCurrency } from '@/utils/deals'
export default {
  name: 'left',
  data () {
    return {
      isshowxian: false,
      chipnotice: false,
      jptimer: '',
      jp: { ga: '', lz: '', lx: '' },
      curr_desk: 0,
      myPlayer: null,
      curr_date: { year: "", hour: "" },
      selectDeskData: { name: "", jushu: "", boot: "", inning: "", status: "", bet_interval: '', text: "", video_url_1: "", video_url_2: "" }
    }
  },
  methods: {
    showxian: function () {
      this.isshowxian = false;
    },
    introduction: function () {
      this.$store.dispatch('HistoryShow', "JACKPORT")
    },
    onJackpot: function (vo) {
      console.log("jack====" + JSON.stringify(vo));
      var live = formatCurrency(parseInt(vo.live))
      var ga = formatCurrency(parseInt(vo.ga))
      var lz = formatCurrency(parseInt(vo.lz))
      var lx = formatCurrency(parseInt(vo.lx))
      this.$set(this.jp, 'ga', ga)
      this.$set(this.jp, 'lxp', lz)
      this.$set(this.jp, 'lx', lx)
      this.$set(this.jp, 'live', live)
      // this.$store.commit('JACKPOARTLIVE', live)
    },
    rePlay: function () {
      var videoPlayer = $("#my-player")[0];
      if (typeof (videoPlayer) != "undefined") {
        this.myPlayer = videojs('my-player');
        this.myPlayer.dispose();
        this.hidezhezhao()
      }
      this.videoPlay();

    },
    videoPlay: function () {
      var self = this
      var url = self.selectDeskData['video_url_2']
      console.log(url)
      $(".flash-inner").html('<video id="my-player" class="video-js vjs-v6" preload="auto" autoplay="true" lang="zh-cn" role="region" aria-label="Video Player"><source src="' + url + '" type="rtmp/flv"/></video>')
      this.myPlayer = videojs('my-player');
      $(".video-js").css({
        "width": "100%",
        "height": "100%"
      });
      this.$store.commit('PLAER', this.myPlayer)
      videojs("my-player", {}, function onPlayerReady () {
        console.log('Your player is ready!');
        this.play();
        this.on('canplay', function () {
          console.log('canplay!');
          self.showzhezhao()
          self.videoTimePositionDeskSmall()
        });
        this.on('waiting', function () {
          console.log('waiting!');
          clearTimeout(delay_showTime);
        });
        this.on('ended', function () {
          console.log('Awww...over so soon?!');
        });
      });
      console.log("已经有数据了-----", self.selectDeskData['video_url_1']);
    },
    hidezhezhao: function () {
      $('.flash-zhezhao').hide()
      $('.flash-zhezhao1').hide()
    },
    showzhezhao: function () {
      $('.flash-zhezhao').show()
      $('.flash-zhezhao1').show()
    },
    onDates: function (vo) {
      console.log("服务时间", vo)
      let year = vo.substr(0, 10).split("-").join(".")
      let hour = vo.substr(11, 5);
      this.$set(this.curr_date, "year", year)
      this.$set(this.curr_date, "hour", hour)
    },
    videoTimePositionDeskSmall: function () {
      var currentGame = Number(this.curr_desk)
      switch (currentGame) {

        case 1: {
          this.changeTime(4.2, 0.85, -2, 0.2, 0.2);
          this.changeTime1(4.45, 1.9, -2, 0.3, 0.3);
          break;
        };
        case 2: {
          this.changeTime(3.6, .2, -3, 0.2, 0.2);
          this.changeTime1(3.85, 1.3, -2, 0.3, 0.3);
          break;
        }
        case 3: {
          this.changeTime(3.3, -0.2, -4, 0.2, 0.2);  //ok
          this.changeTime1(3.6, .9, -2, 0.3, 0.3);
          break;
        }
        case 4: {
          this.changeTime(3.4, -0.3, -2, 0.2, 0.2);  //ok
          this.changeTime1(3.7, .9, -2, 0.3, 0.3);
          break;
        }
        case 5: {
          this.changeTime(3.7, 0.1, -7, 0.2, 0.2);  //ok
          this.changeTime1(3.9, 1.2, -6, 0.3, 0.3);
          break;
        }
        case 6: {
          this.changeTime(3.6, 0.8, 0, 0.2, 0.2);//ok
          this.changeTime1(3.85, 1.9, 0, 0.3, 0.3);
          break;
        }
        case 7: {
          this.changeTime(3.9, 0.53, -6, 0.2, 0.2);//ok
          this.changeTime1(4.16, 1.6, -3, 0.3, 0.3);
          break;
        }
        case 8: {
          this.changeTime(3.55, 0.23, 2, 0.2, 0.2);//ok
          this.changeTime1(3.85, 1.37, 2, 0.3, 0.3);
          break;
        }
        case 9: {
          this.changeTime(3.7, 0.1, -5, 0.2, 0.2);//ok
          this.changeTime1(3.96, 1.27, -5, 0.3, 0.3);
          break;
        }
        case 10: {
          this.changeTime(3.7, 0.3, -2, 0.2, 0.2);//ok
          this.changeTime1(4.1, 1.45, -2, 0.3, 0.3);
          break;
        }
        case 11: {
          this.changeTime(4.7, 0.43, 2, 0.2, 0.2);
          this.changeTime1(4.98, 1.47, 2, 0.3, 0.3);
          break;
        }
        case 12: {
          this.changeTime(3.6, 0.13, -1, 0.2, 0.2);
          this.changeTime1(3.9, 1.27, -1, 0.3, 0.3);
          break;
        }
        case 13: {
          this.changeTime(3.9, 0.6, -1, 0.2, 0.2);
          this.changeTime1(4.2, 1.66, -1, 0.3, 0.3);
          break;
        }
        case 14: {
          this.changeTime(3.9, 0.2, -1, 0.2, 0.2);
          this.changeTime1(4.2, 1.4, -1, 0.3, 0.3);
          break;
        }
        case 16: {
          this.hidezhezhao()
          return
          changeTime(7.25, -0.6, 2, 0.3, 0.3);
          changeTime1(6.75, -1.3, -2, 0.3, 0.3);
          break;
        };
        case 17: {
          this.hidezhezhao()
          return
          changeTime(7.25, -0.6, 2, 0.3, 0.3);
          changeTime1(6.75, -1.3, -2, 0.3, 0.3);
          break;
        };
        case 20: {
          this.hidezhezhao()
          return
          changeTime(7.25, -0.6, 2, 0.4, 0.4);
          changeTime1(6.75, -1.3, -2, 0.4, 0.4);
          break;
        };
        default: {
          break
        }

      }
    },
    changeTime: function (top, left, rotate, scale_x, scale_y) {
      if (!$('.flash-zhezhao')[0]) { return }
      $('.flash-zhezhao').css({ "top": top + 'em', 'left': left + 'em' })
      $('.flash-zhezhao')[0].style.webkitTransform = "rotate(" + rotate + "deg)" + " " + "scale(" + scale_x + "," + scale_y + ")";
      $('.flash-zhezhao')[0].style.MozTransform = "rotate(" + rotate + "deg) " + " " + "scale(" + scale_x + "," + scale_y + ")";
      $('.flash-zhezhao')[0].style.msTransform = "rotate(" + rotate + "deg) " + " " + "scale(" + scale_x + "," + scale_y + ")";
      $('.flash-zhezhao')[0].style.OTransform = "rotate(" + rotate + "deg)  " + " " + "scale(" + scale_x + "," + scale_y + ")";
      $('.flash-zhezhao')[0].style.transform = "rotate(" + rotate + "deg) " + " " + "scale(" + scale_x + "," + scale_y + ")";
    },
    changeTime1: function (top, left, rotate, scale_x, scale_y) {
      if (!$('.flash-zhezhao1')[0]) { return }
      $('.flash-zhezhao1').css({ "top": top + 'em', 'left': left + 'em' })
      $('.flash-zhezhao1')[0].style.webkitTransform = "rotate(" + rotate + "deg)" + " " + "scale(" + scale_x + "," + scale_y + ")";
      $('.flash-zhezhao1')[0].style.MozTransform = "rotate(" + rotate + "deg) " + " " + "scale(" + scale_x + "," + scale_y + ")";
      $('.flash-zhezhao1')[0].style.msTransform = "rotate(" + rotate + "deg) " + " " + "scale(" + scale_x + "," + scale_y + ")";
      $('.flash-zhezhao1')[0].style.OTransform = "rotate(" + rotate + "deg)  " + " " + "scale(" + scale_x + "," + scale_y + ")";
      $('.flash-zhezhao1')[0].style.transform = "rotate(" + rotate + "deg) " + " " + "scale(" + scale_x + "," + scale_y + ")";
    },
  },
  mounted () {
    ws.sendMessage('jack_pot')
    //ws.addMessageListener('jack_pot', this.onJackpot)
    //动态效果
    var jack = this.$refs.translateDom
    var jackpot_index_big = 0
    var tramWidth = 0.32
    clearInterval(this.jptimer)
    this.jptimer = setInterval(rigthJackpotBig, 1500);
    var jack1 = this.$refs.translateDom1
    var jackpot_index_big1 = 0
    var tramWidth1 = 0.26
    function rigthJackpotBig () {
      jack.className = '_1UqVd DA-10'
      jack.style.transform = 'translateY(-' + (jackpot_index_big * tramWidth) + 'em)'
      jack1.className = 'yFWOl DA-10'
      jack1.style.transform = 'translateY(-' + (jackpot_index_big * tramWidth1) + 'em)'
      if (jackpot_index_big == 5) {
        jackpot_index_big = 0
        jack.style.transform = 'translateY(0px)'
        jack.className = '_1UqVd ';
        jackpot_index_big1 = 0
        jack1.style.transform = 'translateY(0px)'
        jack1.className = 'yFWOl '
      };
      jackpot_index_big++;

      jackpot_index_big1++


    };

    // clearInterval(this.jptimer1)
    // this.jptimer1 = setInterval(rigthJackpotBig1, 1500)


    // function rigthJackpotBig1 () {
    //   jack1.className = 'yFWOl DA-10'
    //   jack1.style.transform = 'translateY(-' + (jackpot_index_big * tramWidth) + 'em)'
    //   if (jackpot_index_big1 == 5) {
    //     jackpot_index_big1 = 0
    //     jack1.style.transform = 'translateY(0px)'
    //     jack1.className = 'yFWOl '
    //   };
    //   jackpot_index_big1++
    // };

    if (this.$store.state.selectDeskData.desk_id) {
      this.curr_desk = this.$store.state.selectDeskData.desk_id
      console.log("已经有数据了-----", this.$store.state.selectDeskData['video_url_1']);
      videojs.options.flash.swf = "./static/video-js.swf"
      this.selectDeskData = {};
      this.selectDeskData = this.$store.state.selectDeskData;
      this.rePlay()
    }
  },
  watch: {
    '$store.state.onDates': function () { var self = this; self.onDates(self.$store.state.onDates) },
    '$store.state.selectDeskData.desk_id': function () {
      var that = this;

      this.curr_desk = this.$store.state.selectDeskData.desk_id;
      // if (!that.historydesk) {
      that.historydesk = this.curr_desk
      that.isshowxian = false
      if (yachiii) {
        clearTimeout(yachiii)
      }
      //}
      console.log(this.$store.state.selectDeskData['video_url_2']);
      videojs.options.flash.swf = "./static/video-js.swf"
      this.selectDeskData = this.$store.state.selectDeskData;
      var self = this
      var yanchi = setTimeout(function () { self.rePlay(); clearTimeout(yanchi) }, 30);
      var yachiii = setTimeout(function () {
        if (that.historydesk === that.curr_desk) {
          that.isshowxian = true
        }
        that.historydesk = that.curr_desk
      }, 10800000);

    },
    '$store.state.page': function () {
      if (this.$store.state.page === 'GAMEHALL' && this.$store.state.playerGame && this.$store.state.playerGame.disposed) {
        this.rePlay()
      }
      console.log('left===============', this.$store.state.page)
    },
    '$store.state.jackPortLive': function () {
      this.onJackpot(this.$store.state.jackPortLive)
    },
    '$store.state.hallnotice': function () {
      if (this.$store.state.hallnotice == "0" || this.$store.state.hallnotice == "1") {
        this.chipnotice = false
      } else if (this.$store.state.hallnotice == "2") {
        this.chipnotice = true
      }
    },
  }
}
</script>

<style  scoped>
._2r7Zi {
  width: 100%;
  height: 3.59em;
  border: 1px solid #7d7254;
  margin-top: 0.04em;
}

.flash-zhezhao {
  position: absolute;
  color: #a1a0a2;
  z-index: 3;
  font-size: 0.2em;
  font-weight: bold;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
.flash-zhezhao1 {
  position: absolute;
  color: #a1a0a2;
  z-index: 2;
  font-size: 0.2em;
  font-weight: 900;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
.video-js {
  width: 100%;
  height: 100%;
}
.kJuDa {
  position: relative;
  width: 100%;
  height: 2.63em;
}
.FlvPlayer__root {
  position: relative;
}
._3tNCF,
._3tNCF canvas,
.VideoJsPlayer__video,
.wL5kg {
  height: 100%;
  width: 100%;
}
@-webkit-keyframes w2dXn {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
@keyframes w2dXn {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
._2FQ8z {
  height: 100%;
}
.ys9Hi {
  width: 3.52em;
  margin: 0.04em 0 0 0.32em;
}
._3uFku,
.ys9Hi {
  position: relative;
  height: 7.22em;
}
._3uFku {
  width: 1.8em;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0 0.04em 0 0;
}
._3uFku._2OY8W {
  margin: 0.04em 0.04em 0 0;
}
._3c1Kj {
  width: 1px;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-top: 0.04em;
  height: calc(100% - 0.04em);
}
._3c1Kj._2OY8W {
  margin: 0.04em 0 0;
}
._3c1Kj .IE ._3c1Kj {
  min-width: calc(100vw - 5.6em);
}
@-webkit-keyframes _3Hey7 {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
@keyframes _3Hey7 {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
._28VAl {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 3.59em;
  width: 3.52em;
  border: 1px solid #7d7254;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._28VAl._2edHt {
  height: 2.97em;
}
._28VAl ._1qPSL {
  height: 0.32em;
  width: 100%;
}

@-webkit-keyframes hbHW- {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
@keyframes hbHW- {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
._1UwaW {
  width: 100%;
  height: 100%;
}
._1UwaW._2CnCI {
  height: 0.62em;
  font-family: FIVExNINEled;
  background-size: 100% 100%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAA+BAMAAACRhm7HAAAAG1BMVEUCAgEHBgULCggPDgsUEg8YFxIoJR4cGhYhHxlH7VQ3AAAC5klEQVRo3u1aTW/iMBCN+dBe7ZQ0HCGR6B4Bs3tORbgTLdWey/6BTS+c4dSf3ZnYxUlMiBCHjKuOgp5cN2hkv5l59uA5a9xjHmd8Inpi0hNUgHHwCj6XDScFowYtpv6VBlxzUjCGexD1xRweGoC04Fw0u975itagnQii503goQENtNCOIh/m0YM/708X10GcQSBYc+2vCzUSldG0PuojH7TbTtvn+nYeYRVoXF9e9he3ggoYfx3OvzjJVeKdPq9GUTKInlMi8JmGlfdWveDE6gVrqhd6DzrPuDW4VDZgWATayE8GyywNZRbI/D7Iro6Cygv2yLwQxECLxbIIO+7s+pp8BpyRA5HAYwPOwUePLMC5O1+//J1cu22MFYk3hpgcAh+eZB7Kt5crsDFg/njzezs9Z48MBPEW0oR8UHywrfuMa0GrVidwoijDBScZEnchR9H2B+zBz9VxvD7RgCf5f7hEPsyBD7y0qlgoFONXQbQdRllKAgZ+ostGZaXLQt3vM4jJeUQDSrJdGzoKWQOKNSRo2IP32WY/2+2JQHoMZa5kBLht5d/uFYMFlp40/IV6PAXqxFmwpALgkpbBHi/zAcVbKI/jdP/+e/P6uPtHA4AP4zXyIanywdPJDsldaDgqAPFm0rBZ3wkK9SCGeNsfZr9eH/9QgdUxXObrka/izfDh7O/pQMNR21+bDyr/qq2IaECZD1a8rajGW6Djzcl8VqsX8QBTdSJJgKoX+phRr8ch1uPOK/AN9RjI3b3CqUFF79h6cprQEJJGT9r3JYIJpdfjLJSnv0oqH2iAzCHs5MgvaOzoecg5f9V5XqrzvD5K04CwfJ43ruuLHX3hgTk6oQGFbNf51937KHO/A/d9G0jQ8LyQAH2/03zfR06vm/W1+y307qv77Ny/cKQfUKpvzvZb3Otnccf6ha7Zrf1u/7YOd3v3255r73d3Lm2a4Gv9HqYnaIHub34Jc0Ovux1v33afOf37vg/LUiY2t11AqQAAAABJRU5ErkJggg==);
}
._1unQa {
  height: 0.16em;
  width: 0.16em;
  margin-right: -0.12em;
  margin-left: 0.06em;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAwVJREFUWAnFl81KVVEUx++VGjQItYFDJYnKRhI9gARGQWA40BdwUG/koBfQgRQEBoL4ABF3ZB+IoUMHaQRNAm+/3z5rH673Hq83uqe74H/WPnuvvf5rf551Go0RS3NQ/na7PYbtLJgHM2ACjAPlBzgDR6AFDpvN5jn6SrkyAIiv4+UxWAQ3r/RYGPxE7YBdAvndr0/fACB/SOcVMBlOTtCOcB98B45ccSZugQdgHkwB5RRsEsTH9FbxqAwAYuuXwLPoc4zewtGneO+r6D+HwTKYDsNt9Fv6t+O9VD0BBPkaFo+A67gJ9qo6U3+phJ8FDJxB988H8LrbT1UALzB05L/AOh2+oHsEAvfF02h4j91ujxEV2N1HvQQ3wDZ2b9ClGFkpGLvmkjvyfuR3aF8Frr1Ypa91PQLhZyrXgT6fBUdpVwZAg7vd6VLcOJUjL5obt0N3qqq61B5BuJTKSnCllzIA3pxSd/sx2AP95FtFY1Vdp9keL/qWQ64kYz6JSO05V9ztPbu1aCqetB9Q2gAeQ7ERdRSrJXxuReticDauRcUs2kvmBMOBjhp2brrKjRc+e5S+IfYu8Z6Q8yDNAAUvD6VVqFqfmSNx5hmYCcr9QagZxT3s7nbZfmWE/TZuNpfjCUicOYCJaPV6HUQkf95l+I73QQLIHIkzL4FnWXFD1S2ZI3HmAOomvdR/DuBCVJdaD6fhwmznAM7Ct5/UuiVzJM4cwFGw+j2vWzJH4swBtIJ1vm52/GeOxJkDOKTBNGqKMz5XVxDh21tQLjlTotDgAjmnbA6nLGPYLIrDe4ZPsyRlJziLAIq6dK+fUp4GC1E3TKVPfcuxC5LkJXAWzF47v9let0MRRm9WtBLOzDXKTLkMwEYazF5NIK1/Rcd/DiJ8mJLp05RMjlJ61jrWag2L0SSlhhZBLFE0P1SOwf9JyxNdPAjEJNW1m4wqkwnPr59Uv2qdV7g3nJeM59yjprjh/v7HJHWNB0GM7tesKxA30SxwhCYTE2AcKM7EGfB6bYGBf06xHa38AU9p9t42IpyrAAAAAElFTkSuQmCC);
  background-size: 100% 100%;
  outline: none;
}
._2CnCI ._1unQa {
  margin-right: -0.22em;
}
._1amM2 {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #bbaa7d;
  text-shadow: 0 0 0 #bbaa7d;
  font-size: 0.44em;
  font-family: FIVExNINEled;
  height: 100%;
  width: 100%;
  text-shadow: 0 0 0.06818em #bbaa7d;
}

@-webkit-keyframes _2WUai {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
@keyframes _2WUai {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
._2bvEw {
  height: 100%;
  width: 100%;
}
._2bvEw .wc3Bd {
  position: relative;
  height: 0.12em;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  line-height: 0.6;
  word-spacing: -0.03em;
  letter-spacing: 0.0071em;
  padding: 0.04em 0 0.05em;
  color: #bbaa7d;
  text-shadow: 0 0 0.01em #bbaa7d;
  height: 0.2em;
  -ms-flex-pack: center;
  justify-content: center;
  letter-spacing: 0.0086em;
  padding: 0.06em 0 0;
}
._2bvEw .wc3Bd .n4C4I {
  font-size: 0.24em;
  padding-left: 0;
  margin-top: 0;
}
._2bvEw ._2r6_V {
  margin-top: 0.06em;
  height: 0.32em;
  width: 100%;
  /* background-image: url(/assets/6b552ee2.png); */
  font-family: FIVExNINEled;
  color: #fff9db;
  overflow: hidden;
}

@-webkit-keyframes _8HNam {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
@keyframes _8HNam {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
._3tNCF {
  background: #000;
  overflow: hidden;
}
._3tNCF,
._3tNCF canvas,
.VideoJsPlayer__video,
.wL5kg {
  height: 100%;
  width: 100%;
}
.FlvPlayer__root video {
  -o-object-fit: fill;
  object-fit: fill;
  width: 100%;
  height: 100%;
}
.Edge .FlvPlayer__root video,
.IE .FlvPlayer__root video {
  position: static;
  height: auto;
}
.ControlLayer__play {
  z-index: 3;
}
._3owJ3 {
  position: absolute;
  top: 1.9em;
  left: 0;
  right: 0;
  z-index: 1;
  margin: auto;
  height: 0.56em;
  width: 1.12em;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-transition: opacity 0.5s ease-in;
  transition: opacity 0.5s ease-in;
  opacity: 0;
}
._3owJ3.lTdYe {
  top: 1.24em;
}
._3owJ3._1_eEm {
  opacity: 1;
}
._3owJ3 ._1NUMH {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  height: 0.24em;
  width: 1.12em;
  border-radius: 0.12em;
  -webkit-box-shadow: 0 0.02em 0.04em 0 rgba(0, 0, 0, 0.4);
  box-shadow: 0 0.02em 0.04em 0 rgba(0, 0, 0, 0.4);
  background-color: #343024;
}
._3owJ3 ._1NUMH ._3yjo_ {
  font-size: 0.16em;
  color: hsla(0, 0%, 100%, 0.87);
}
._3owJ3 ._1NUMH:hover {
  background-color: #bbaa7d;
  color: #fff;
}
._3owJ3 ._1NUMH._3erww {
  background-color: #7d7254;
  color: #fff;
  pointer-events: none;
}
@-webkit-keyframes _3RZ1R {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
@keyframes _3RZ1R {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
.ARp1S {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 0.62em;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAA+BAMAAACRhm7HAAAAG1BMVEUCAgEHBgULCggPDgsUEg8YFxIoJR4cGhYhHxlH7VQ3AAAC5klEQVRo3u1aTW/iMBCN+dBe7ZQ0HCGR6B4Bs3tORbgTLdWey/6BTS+c4dSf3ZnYxUlMiBCHjKuOgp5cN2hkv5l59uA5a9xjHmd8Inpi0hNUgHHwCj6XDScFowYtpv6VBlxzUjCGexD1xRweGoC04Fw0u975itagnQii503goQENtNCOIh/m0YM/708X10GcQSBYc+2vCzUSldG0PuojH7TbTtvn+nYeYRVoXF9e9he3ggoYfx3OvzjJVeKdPq9GUTKInlMi8JmGlfdWveDE6gVrqhd6DzrPuDW4VDZgWATayE8GyywNZRbI/D7Iro6Cygv2yLwQxECLxbIIO+7s+pp8BpyRA5HAYwPOwUePLMC5O1+//J1cu22MFYk3hpgcAh+eZB7Kt5crsDFg/njzezs9Z48MBPEW0oR8UHywrfuMa0GrVidwoijDBScZEnchR9H2B+zBz9VxvD7RgCf5f7hEPsyBD7y0qlgoFONXQbQdRllKAgZ+ostGZaXLQt3vM4jJeUQDSrJdGzoKWQOKNSRo2IP32WY/2+2JQHoMZa5kBLht5d/uFYMFlp40/IV6PAXqxFmwpALgkpbBHi/zAcVbKI/jdP/+e/P6uPtHA4AP4zXyIanywdPJDsldaDgqAPFm0rBZ3wkK9SCGeNsfZr9eH/9QgdUxXObrka/izfDh7O/pQMNR21+bDyr/qq2IaECZD1a8rajGW6Djzcl8VqsX8QBTdSJJgKoX+phRr8ch1uPOK/AN9RjI3b3CqUFF79h6cprQEJJGT9r3JYIJpdfjLJSnv0oqH2iAzCHs5MgvaOzoecg5f9V5XqrzvD5K04CwfJ43ruuLHX3hgTk6oQGFbNf51937KHO/A/d9G0jQ8LyQAH2/03zfR06vm/W1+y307qv77Ny/cKQfUKpvzvZb3Otnccf6ha7Zrf1u/7YOd3v3255r73d3Lm2a4Gv9HqYnaIHub34Jc0Ovux1v33afOf37vg/LUiY2t11AqQAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
  padding: 0 0 0.03em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
}
.ARp1S ._2vAUp {
  overflow: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.ARp1S ._2vAUp,
.ARp1S ._2vAUp .M23DC {
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  width: 100%;
}
.ARp1S ._2vAUp .M23DC {
  -ms-flex-direction: column;
  flex-direction: column;
}
.ARp1S ._2vAUp .M23DC ._2sEMN {
  height: 100%;
  width: 100%;
  color: #fff9db;
  text-shadow: 0 0 0.03em #fffcee;
}
.ARp1S ._2vAUp .M23DC ._2sEMN ._3cMHG {
  position: relative;
  width: 100%;
  padding-left: 0.11em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.ARp1S ._2vAUp .M23DC ._2sEMN ._3cMHG,
.ARp1S ._2vAUp .M23DC ._2sEMN ._3cMHG ._1DSHR {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
}
.ARp1S ._2vAUp .M23DC ._2sEMN ._3cMHG ._1DSHR {
  font-size: 0.44em;
}
.ARp1S ._2vAUp .M23DC ._2sEMN ._3cMHG ._2DVOB,
.ARp1S ._2vAUp .M23DC ._2sEMN ._3cMHG ._3TwuD {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  -ms-flex-pack: center;
  justify-content: center;
}
.ARp1S ._2vAUp .M23DC ._2sEMN ._3cMHG ._2DVOB,
.ARp1S ._2vAUp .M23DC ._2sEMN ._3cMHG ._2DVOB ._1-kZh {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.ARp1S ._2vAUp .M23DC ._2sEMN ._3cMHG ._2DVOB ._1-kZh {
  height: 100%;
  font-size: 0.44em;
}
.ARp1S ._2vAUp ._1x003 {
  -webkit-transition: -webkit-transform 2s ease-in;
  transition: -webkit-transform 2s ease-in;
  transition: transform 2s ease-in;
  transition: transform 2s ease-in, -webkit-transform 2s ease-in;
}

@-webkit-keyframes _3bV3Y {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
@keyframes _3bV3Y {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
@-webkit-keyframes _1Z6p5 {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes _1Z6p5 {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._2xSSt {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #0d0d0c;
  display: -ms-flexbox;
  display: flex;
}
._2xSSt._18yFR {
  background-color: rgba(13, 13, 12, 0.8);
}
._2xSSt ._2K7UY {
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
._2xSSt ._2K7UY._3lqe6 {
  top: 0.04em;
  bottom: inherit;
  line-height: 1;
  overflow: inherit;
}
._2xSSt ._2K7UY .RoTQ2 {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 0.32em;
  width: 0.32em;
  border-right: 1px solid #24211a;
}
._2xSSt ._2K7UY .RoTQ2 ._1LHnT {
  height: 0.24em;
  width: 0.24em;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAWRJREFUWAntlr1OAkEURneRGH6kwsKWWJjQSqHvgI0JiVjZSE9hQ2JLQ+EDmEBLgaXPIAV2WAElnTQKRhKT5dwJQ1gSxJidpWBu8u3cmYX7nb0bmHEcG7YDu94BVxrged4ZwxWKyzzA+KRWw3Xdt3U1o/MbBcZ99LHug/9cT/G9S6QAeNA0uXgdoRZgXQ1wwEKfhRpjYIFhlWJSW3e5SBqTOXGNKhpArRi6RAG5pXYOeegZZVEGOWEASAfE/B3V6fIAoBNyFWEAiNELamL+rVyXLqYBJng9Yfy65OlLTQM8YP7lc1yZRFbmgU43mYuZUYC/PI0FMNoBfu+JTa/BKADmZSBOf4MwDZDEvATEDdJ7gI/HNIA2Oye5B+JYL+gxDIAxZh10iO6AuGDcQyrCAPjhD+kRtwaaojySnXCEFruhUGagC/Q8QE05kAyRA0Sb+j3SxYFErcuFG1s7kom/DduB3e7ADOagVqlK4z3jAAAAAElFTkSuQmCC);
  background-size: 100% 100%;
}
._2xSSt ._2K7UY .RoTQ2._135Vr {
  pointer-events: none;
}
._2xSSt ._2K7UY .RoTQ2._135Vr,
._2xSSt ._2K7UY .RoTQ2:hover {
  background-color: #7d7254;
  border-right: 0;
}
._2xSSt ._2K7UY .RoTQ2._135Vr ._1LHnT,
._2xSSt ._2K7UY .RoTQ2:hover ._1LHnT {
  height: 0.28em;
  width: 0.28em;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAArlJREFUWAntlktrFEEURtPGN/h+LXyAa90I7hV05U5ExGV+gyjoD4h/QcS1LkR37gwEcRdwI27jSsRXfMRBzZi055R9e2qYQSc9EwKaC2e6uqq77lf3Vt2esbE1+98jUEQAyrK0nRNDTa8lLyaKovDa15IAnK9jdANsgs2wHuxraou82IbvsADe5yLKEFVUK9/IAzvgAOyFrTCMAJ3Pw3uYgx/gYp3zJyiqjYglV+qAK98P1+ASGI1h7QsTTMIUKEAf+lPYO/jM4hdyAbvpvAgt+AAqjTzSHMhileM8fRguw1twQRNwAh7ATTA97RDgdQuocgbuwmtQzBIMajreDkfgOuyEM3AOdoFOz8NteAMtHWvmJnLuQy9hFgzjcgQ4n5F0Lt9zTxkF249BQSfBxabFhwDu611q6HX8ET7BcgWYNlPozvdEme874IovgBapSip+d3V+nUCnTrDoTu0M/bnFpvIBI+jO9yRMwy1QxDZwrMvyCHQNNLxRgTtehzfgBXwF+w+Ci9KSUhsrIcAzbgQe6QAzpdYVI1I7pp1spAKsbpgpMwoK0WHUmR7njNU73/aq2EgjwOpjd1vaRTMF1gfHemykAphdJzq2FpyCfBNaDXtErIQAq+k+mIRZyI+hkdBqIf0EOGgl8+HxKqw0BzLns/gYAVd8Go5BFCLHuiwXEKrss55buxUxcCHiWd/V+R7wXQuP7aswDZZgzROR5g0B3oQjVR4Fr62sn+ZfTaeKPwRG0fL7FPwYnQUFfatwc5YKUI03Dnh+j8MVSA9w7Xt+6e9nefoU8gqm4AlMgJ/jh+C3Ql+1AG/m4D74h8Sv1rDmB+0ePAfnfwYueB4s1UnAqv8lSxuPnW6+3LUeIXOvUvuamh8da785tyR7n6ey86eUgWTVcVNQUI00vugwEf+AG8+09uI/HYFfE87PX3X4In4AAAAASUVORK5CYII=);
}
._2xSSt ._2K7UY .N1YLN {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  margin-left: 0.04em;
  line-height: 1.1;
  -ms-flex-pack: center;
  justify-content: center;
}
._2xSSt ._2K7UY .N1YLN ._2KWZL {
  display: -ms-flexbox;
  display: flex;
  letter-spacing: 0.004em;
}
._2xSSt ._2K7UY .N1YLN ._2KWZL ._13Q5o {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  color: #fdeed4;
  font-size: 0.12em;
}
._2xSSt ._2K7UY .N1YLN ._2KWZL ._13Q5o.vevtA {
  display: initial;
  max-width: 6.41667em;
}
.ja-JP ._2xSSt ._2K7UY .N1YLN ._2KWZL ._13Q5o._1A1z- {
  letter-spacing: -0.08333em;
}
._2xSSt ._2K7UY .N1YLN ._2KWZL ._2N9K7 {
  height: 0.24em;
  width: 0.24em;
  background-image: url(data:image/png;base64,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);
  background-size: 100% 100%;
  margin-left: 0.05em;
  margin-top: -0.05em;
  margin-bottom: -0.06em;
}
._2xSSt ._2K7UY .N1YLN ._3fa9o {
  color: hsla(0, 0%, 100%, 0.87);
  font-size: 0.12em;
}
._2xSSt .CA7e0 {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  height: 0.34em;
  width: 0.34em;
  cursor: pointer;
  outline: none;
  z-index: 3500;
}
._2xSSt .CA7e0 ._3jqDh {
  position: absolute;
  bottom: -0.01em;
  right: -0.06em;
  height: 0.16em;
  width: 0.16em;
  background-image: url(data:image/png;base64,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);
  background-size: 100% 100%;
}
._2xSSt .j5qvO {
  height: 0.32em;
  width: 0.32em;
  top: -0.04em;
}
._2xSSt ._3_URI {
  pointer-events: none;
  cursor: auto;
}
._2xSSt ._2c97U {
  position: absolute;
  right: 0.07em;
  top: 0;
  bottom: 0;
}
._2xSSt ._2c97U.Pryfz {
  right: 0.02em;
}
._2xSSt ._2c97U._2a6kj {
  top: 0.04em;
  bottom: inherit;
  width: 0.67em;
  text-align: right;
  line-height: 1.1;
}
._2xSSt ._2c97U ._2QqaK {
  color: hsla(0, 0%, 100%, 0.87);
  font-size: 0.12em;
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  letter-spacing: 0.05em;
}
._2xSSt ._2c97U ._2QqaK.vevtA {
  display: inherit;
}
._2xSSt ._2c97U ._13ksF {
  color: #e0001e;
}
._2xSSt ._2c97U .SxLiX {
  height: 100%;
}
._2xSSt ._2c97U .SxLiX ._3fDKM {
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  line-height: 0.9;
  font-size: 0.3em;
  color: hsla(0, 0%, 100%, 0.87);
}
._2xSSt ._2c97U .SxLiX ._3fDKM._6NJkN {
  color: #e0001e;
}
._2xSSt ._2c97U .SxLiX ._3fDKM._31RoA {
  line-height: 1.1;
  font-size: 0.2em;
}
._2xSSt ._2c97U .SxLiX ._3fDKM.vevtA {
  display: inherit;
}

.ControlLayer__root {
  background: rgba(0, 0, 0, 0.8);
}
.ControlLayer__play,
.ControlLayer__root {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.ControlLayer__play {
  margin: auto;
  text-indent: -9999em;
  border: 0;
  background: transparent;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 0;
  height: 74px;
  border-color: transparent transparent transparent #fff;
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
  cursor: pointer;
  border-style: solid;
  border-width: 37px 0 37px 60px;
}
.ControlLayer__play:hover {
  opacity: 0.8;
}
.LoadingLayer__root {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}
.LoadingLayer__loader,
.LoadingLayer__loader:after,
.LoadingLayer__loader:before {
  background: #fff;
  -webkit-animation: loading 1s infinite ease-in-out;
  animation: loading 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.LoadingLayer__loader {
  color: #fff;
  text-indent: -9999em;
  position: relative;
  top: 50%;
  margin-top: -6px;
  margin-left: auto;
  margin-right: auto;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.LoadingLayer__loader:after,
.LoadingLayer__loader:before {
  position: absolute;
  top: 0;
  content: "";
}
.LoadingLayer__loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.LoadingLayer__loader:after {
  left: 1.5em;
}
@-webkit-keyframes loading {
  0%,
  80%,
  to {
    -webkit-box-shadow: 0 0;
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    -webkit-box-shadow: 0 -2em;
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes loading {
  0%,
  80%,
  to {
    -webkit-box-shadow: 0 0;
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    -webkit-box-shadow: 0 -2em;
    box-shadow: 0 -2em;
    height: 5em;
  }
}
.MptsPlayer__root {
  position: relative;
  height: 100%;
}
.MptsPlayer__root canvas {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  height: 100%;
}
.FlvPlayer__root {
  position: relative;
}
.FlvPlayer__root,
.FlvPlayer__root video {
  height: 100%;
}
.FlvPlayer__root canvas {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.FlvPlayer__root video {
  position: relative;
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
.VideoJsPlayer__root {
  position: relative;
  height: 100%;
}
.VideoJsPlayer__video {
  max-width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
}
.vjs-control-bar {
  display: none;
}
.EnableFlashLayer__root {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  background: #000;
  text-align: center;
}
.EnableFlashLayer__root:before {
  content: " ";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.Video__root {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
@-webkit-keyframes lpOpg {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes lpOpg {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes IE6bu {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
@keyframes IE6bu {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
.qXNxK {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 0.62em;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAA+BAMAAACRhm7HAAAAG1BMVEUCAgEHBgULCggPDgsUEg8YFxIoJR4cGhYhHxlH7VQ3AAAC5klEQVRo3u1aTW/iMBCN+dBe7ZQ0HCGR6B4Bs3tORbgTLdWey/6BTS+c4dSf3ZnYxUlMiBCHjKuOgp5cN2hkv5l59uA5a9xjHmd8Inpi0hNUgHHwCj6XDScFowYtpv6VBlxzUjCGexD1xRweGoC04Fw0u975itagnQii503goQENtNCOIh/m0YM/708X10GcQSBYc+2vCzUSldG0PuojH7TbTtvn+nYeYRVoXF9e9he3ggoYfx3OvzjJVeKdPq9GUTKInlMi8JmGlfdWveDE6gVrqhd6DzrPuDW4VDZgWATayE8GyywNZRbI/D7Iro6Cygv2yLwQxECLxbIIO+7s+pp8BpyRA5HAYwPOwUePLMC5O1+//J1cu22MFYk3hpgcAh+eZB7Kt5crsDFg/njzezs9Z48MBPEW0oR8UHywrfuMa0GrVidwoijDBScZEnchR9H2B+zBz9VxvD7RgCf5f7hEPsyBD7y0qlgoFONXQbQdRllKAgZ+ostGZaXLQt3vM4jJeUQDSrJdGzoKWQOKNSRo2IP32WY/2+2JQHoMZa5kBLht5d/uFYMFlp40/IV6PAXqxFmwpALgkpbBHi/zAcVbKI/jdP/+e/P6uPtHA4AP4zXyIanywdPJDsldaDgqAPFm0rBZ3wkK9SCGeNsfZr9eH/9QgdUxXObrka/izfDh7O/pQMNR21+bDyr/qq2IaECZD1a8rajGW6Djzcl8VqsX8QBTdSJJgKoX+phRr8ch1uPOK/AN9RjI3b3CqUFF79h6cprQEJJGT9r3JYIJpdfjLJSnv0oqH2iAzCHs5MgvaOzoecg5f9V5XqrzvD5K04CwfJ43ruuLHX3hgTk6oQGFbNf51937KHO/A/d9G0jQ8LyQAH2/03zfR06vm/W1+y307qv77Ny/cKQfUKpvzvZb3Otnccf6ha7Zrf1u/7YOd3v3255r73d3Lm2a4Gv9HqYnaIHub34Jc0Ovux1v33afOf37vg/LUiY2t11AqQAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
  padding: 0 0 0.03em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
}
.qXNxK._2ipdV {
  height: 0.38em;
  background-image: url(/assets/b47ca5b8ca.png);
  padding: 0.04em 0 0;
}
.qXNxK._2ipdV ._1TagV {
  position: absolute;
  bottom: 0.04em;
  height: 0.62em;
}
.qXNxK._2ipdV ._1TagV.DA-10 {
  -webkit-transition: -webkit-transform 1.6s ease-in;
  transition: -webkit-transform 1.6s ease-in;
  transition: transform 1.6s ease-in;
  transition: transform 1.6s ease-in, -webkit-transform 1.6s ease-in;
}
.qXNxK ._1TagV {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.qXNxK ._1TagV,
.qXNxK ._1TagV ._3Sq2_ {
  height: 100%;
  width: 100%;
}
.qXNxK ._1TagV ._2cqiB {
  position: relative;
  height: 0.26em;
  width: 100%;
  overflow: hidden;
}
.qXNxK ._1TagV ._2cqiB._2ipdV {
  margin-bottom: 0.04em;
}
.qXNxK ._1TagV ._2cqiB .yFWOl {
  position: relative;
  height: 100%;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
}
.qXNxK ._1TagV ._2cqiB .yFWOl.DA-10 {
  -webkit-transition: -webkit-transform 1s ease-in;
  transition: -webkit-transform 1s ease-in;
  transition: transform 1s ease-in;
  transition: transform 1s ease-in, -webkit-transform 1s ease-in;
}
.qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP {
  width: 100%;
  text-shadow: 0 0 0.05556em hsla(44, 83%, 82%, 0.5);
  font-size: 0.18em;
  -webkit-text-stroke: 0.01667em #f7e2a9;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: 0.27778em;
  text-align: center;
  color: #f7e2a9;
  margin: 0.22222em 0;
}
.en-US .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP,
.id-ID .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP,
.ja-JP .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP,
.ko-KR .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP,
.th-TH .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP,
.vi-VN .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP {
  font-family: FIVExNINEled;
  font-size: 0.24em;
  margin: 0.04167em 0;
  word-spacing: -0.125em;
  letter-spacing: 0.02958em;
  -webkit-text-stroke: 0.0125em #f7e2a9;
  text-shadow: 0 0 0.04167em hsla(44, 83%, 82%, 0.5);
}
.qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP.iS5oQ {
  color: #d8d8d8;
  text-shadow: 0 0 0.05556em #e7e7e7;
  -webkit-text-stroke: 0.01667em #e7e7e7;
}
.en-US .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP.iS5oQ,
.id-ID .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP.iS5oQ,
.ja-JP .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP.iS5oQ,
.ko-KR .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP.iS5oQ,
.th-TH .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP.iS5oQ,
.vi-VN .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP.iS5oQ {
  text-shadow: 0 0 0.04167em #e7e7e7;
  -webkit-text-stroke: 0.0125em #e7e7e7;
}
.qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP._395Ik {
  color: #987862;
  text-shadow: 0 0 0.05556em #987862;
  -webkit-text-stroke: 0.01667em #987862;
}
.en-US .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP._395Ik,
.id-ID .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP._395Ik,
.ja-JP .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP._395Ik,
.ko-KR .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP._395Ik,
.th-TH .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP._395Ik,
.vi-VN .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP._395Ik {
  text-shadow: 0 0 0.04167em #987862;
  -webkit-text-stroke: 0.0125em #987862;
}
.qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP._31QNh {
  color: #ffd1e7;
  text-shadow: 0 0 0.27778em #ff007a;
  -webkit-text-stroke: initial;
}
.en-US .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP._31QNh,
.id-ID .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP._31QNh,
.ja-JP .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP._31QNh,
.ko-KR .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP._31QNh,
.th-TH .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP._31QNh,
.vi-VN .qXNxK ._1TagV ._2cqiB .yFWOl ._3dNfP._31QNh {
  text-shadow: 0 0 0.20833em #ff007a;
}
.qXNxK ._1TagV ._39u_f {
  position: relative;
  height: 0.32em;
  width: 100%;
  overflow: hidden;
}
.qXNxK ._1TagV ._39u_f ._1UqVd {
  position: relative;
  height: 100%;
  width: 100%;
  font-family: FIVExNINEled;
}
.qXNxK ._1TagV ._39u_f ._1UqVd.DA-10 {
  -webkit-transition: -webkit-transform 1s ease-in;
  transition: -webkit-transform 1s ease-in;
  transition: transform 1s ease-in;
  transition: transform 1s ease-in, -webkit-transform 1s ease-in;
}
.qXNxK ._1TagV ._39u_f ._1UqVd ._2ft9C {
  height: 100%;
  width: 100%;
}
.qXNxK ._1TagV ._39u_f ._1UqVd ._2ft9C ._2HW8t {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-left: 0.11em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.qXNxK ._1TagV ._39u_f ._1UqVd ._2ft9C ._2HW8t .AuDWz {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
.qXNxK ._1TagV ._39u_f ._1UqVd ._2ft9C ._2HW8t .AuDWz._2ipdV ._2fUjH {
  font-size: 0.46em;
}
.qXNxK ._1TagV ._39u_f ._1UqVd ._2ft9C ._2HW8t .AuDWz._2ipdV ._2fUjH.iS5oQ {
  text-shadow: 0 0 0.02174em #e7e7e7;
}
.qXNxK ._1TagV ._39u_f ._1UqVd ._2ft9C ._2HW8t .AuDWz._2ipdV ._2fUjH._395Ik {
  color: #987862;
  text-shadow: 0 0 0.02174em #987862;
}
.qXNxK ._1TagV ._39u_f ._1UqVd ._2ft9C ._2HW8t .AuDWz._2ipdV ._2fUjH._31QNh {
  text-shadow: 0 0 0.1087em #ff007a;
}
.qXNxK ._1TagV ._39u_f ._1UqVd ._2ft9C ._2HW8t .AuDWz ._2fUjH {
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -ms-flex-align: center;
  align-items: center;
  font-size: 0.44em;
  color: #f7e2a9;
  text-shadow: 0 0 0.02273em #f7e2a9;
}
.qXNxK ._1TagV ._39u_f ._1UqVd ._2ft9C ._2HW8t .AuDWz ._2fUjH.iS5oQ {
  color: #e7e7e7;
  text-shadow: 0 0 0.02273em #e7e7e7;
}
.qXNxK ._1TagV ._39u_f ._1UqVd ._2ft9C ._2HW8t .AuDWz ._2fUjH._395Ik {
  color: #987862;
  text-shadow: 0 0 0.02273em #987862;
}
.qXNxK ._1TagV ._39u_f ._1UqVd ._2ft9C ._2HW8t .AuDWz ._2fUjH._31QNh {
  color: #ffd1e7;
  text-shadow: 0 0 0.11364em #ff007a;
}
._2xSSt._18yFR.VOXnU {
  position: relative;
  z-index: 15500;
  pointer-events: none;
}
.kJuDa.VOXnU {
  position: relative;
  z-index: 15500;
  pointer-events: none;
}
@-webkit-keyframes _2jzeT {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2jzeT {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _1kZ6K {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
@keyframes _1kZ6K {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
._3qTCB {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
._3qTCB,
.FSexA {
  position: absolute;
  left: 0;
  top: 0;
}
.FSexA {
  margin: auto;
  bottom: 0;
  right: 0;
  height: 0.4em;
  width: 0.4em;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAjVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8DizOFAAAALnRSTlMAw4D8n3hB+d/sCXEVTkcC8qbFGQX1tGQ9LNWunMdoWwwHveTTzaGSilQjEIUxz3nCaQAAAglJREFUWMPNl9lygzAMRUXB7EuAFJKSpem++v8/r1PZE8XBpJE70+a8wXDvIFmWZbhc0lIE6ziJoiReB6JMwcbVlDrPvEgaRF6Wj/XSLl90vrTgd4tjvdUg9OQkXmjobQZtLU9St6S3GZQz+vbaW4nNdrsRK++a3s5K0o8Nsn3wSVCkB0tSBMk+FZnSWwx2AcVawREV5SbYoX5kkDf67U0BVoob/UHzIi0GO62f9RVMUPWUorGB/v94CSdYxpMGmY4+h5Pk3oRB6atlnsMPzB+sBq0KzpvWU/1YDWoVf87Tk0Go8r9k6slAZaZn6slgoeqnYurJoMOHgqkng9zHFWDqkcMaCpl65CCFScXUk0Ea4R4FZ0pKoRsC+1cKzgS0Bm6svw1W4A72CAHuYL/dgDu4itv/MqAQ/jKJVNrxL5ZxoOqhQmL/d+1eyqlPgbM3E3XB0H07P+NJf2s2FAZzXPs7MFsag1eUZGA2VQYdRtCC2da5KRwAmAcLndAUNOtooyZIKWQersgbTn0Rfs083pF3NWu94AN/wIBUxXuPReQw4lSDRF7xiT9kvXcS+QCEPeZ96jHvCQjGoAm9nrrvKFLOqFs+6g8e9wlkDNsQNlIzkP7ccf+2WN3vx30BxBkXjl48D01EbxNj27OvPH7QggHz0lW/gQnv2jeMS4R18Wydr77NkwhTuFi+ANlhrAv8xuHKAAAAAElFTkSuQmCC);
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 3;
  cursor: pointer;
}
.FSexA:hover {
  -webkit-filter: inherit;
  filter: inherit;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAhFBMVEUAAAD+79X+79X979X+79X/79b//+X+79X/8Nb+7tX979b979X+7tX/8Nb/////79b/9df/9Nz/8NX+7tX+79T/8Nb/8Nf/8Nf/79j///n97tb/+dv//9v+7tX/8NX/7tX+79X+79X+79X979X979X+79X979X/79X/8df+7tX/79X+7tRz+SW4AAAAK3RSTlMAw/mA4HgJ7EHHoJz0SwJxGRVQ1bRkRT0sBaYOB/BoW72vrKSIzZJuI9Ix8bCJagAAAfxJREFUWMPNV9tygjAQ3VDuCIIKIlKtd9v8//91JkldIgG7cab1vIXZc4a9ZLMLrwu/8uLIDRwncKPYq3yj0dsQu5gyh2tw2LTo87mZvlwgu6uxWN7zjQIh44NgocY3CeQNH0WTI98kkL6j7YQl3ma73XgJm+DX9xT5fYHpzS5IZn4nJbMk4D+YKn5foI3R1+xeO8PYxK3g9wSKiEvMUzAinSuD6MgNAq3iT8oMBpCVGIy+gPp/t4YR1K5ZAOPHChhFwQYEUi5wWMEDrD6NArnMPxvlY/77Ao30v6DxUSCU8a+JfBSQkSmJfBRYyvrJiHwUWIhDSuSjQOGIDFjwebeGQgs+74QwyIh8FPCFBwlYoxJaM3sBTxSRby8QYw7sED0ZAhA9wgN7iH67AXuILG7/SwBd+MsgYmm7T6Rxj9WDhUT+74N9KfscHSdfJuyCof11PguBtd5QCGhF7j9Ab2kEzATlok65Q8oD9vFcP6bUEO4ASA8LYjVHp2lPGzZBFULK44q4ikHHEdak511hLR04igN9wABf+uvKIqKPONmOa6VPHbLWC645QB3zvlw1rKozcdCE0uEyg+gpadQ9KYPTLYCEYRuqiCvskU8Y96Xzvf77eOEovfO+u4EFoUYgrzxJ3qNQlq7mCjpIax/f1fBb5IbF85I/ufq+LL4B9OaieMtJwC8AAAAASUVORK5CYII=);
}
.FSexA._3uSbA {
  padding-bottom: 1.11em;
}
._2GFWT {
  position: absolute;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 0.52em 0 0;
  max-width: 100%;
  width: 3.08em;
  height: 0.28em;
  line-height: 1.25;
  letter-spacing: 0.002em;
  color: #fff;
}
._2GFWT > span {
  font-size: 0.16em;
  text-align: center;
}
</style>
