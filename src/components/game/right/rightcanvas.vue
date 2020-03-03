<template>
  <div class="_3Qr2m">
    <div style="position: relative; overflow: hidden; width: 100%; height: 100%;">
      <div class="_2Gj3P WpQs6"
           style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
        <div class="_2dOxr">
          <!-- 循环 -->
          <template v-for="(desk,index) in desk_list">
            <div class="b3kwq "
                 @click='enterGame(desk.id)'
                 @dragstart="dragstart($event,desk.id,index)"
                 @dragend="dragend"
                 :class="desk.id ==diff_desk_list.qj_desk_list||desk.id ==diff_desk_list.sg_desk_list||desk.id ==diff_desk_list.dn_desk_list?'':desk.id==3&&chipnotice?'_2939e _1mF87':'_2939e'"
                 v-show="active?(ba_desk_list.indexOf(desk.id) >-1?true:false):(ba_desk_list.indexOf(desk.id) ===-1?true:false)"
                 :draggable="desk.id ==diff_desk_list.qj_desk_list||desk.id ==diff_desk_list.sg_desk_list||desk.id ==diff_desk_list.dn_desk_list?false:true"
                 :key='index'
                 role="button"
                 :tabindex="index">
              <div class="_2qsud">
                <div class="_2xSSt">
                  <div class="_2K7UY _3lqe6">
                    <div class="N1YLN">
                      <div class="_2KWZL">
                        <span class="_13Q5o vevtA">
                          <span>{{codes[desk.code.substr(0,2)]}}</span>
                          <span>{{desk.code.substr(0,2) =='BP' ||desk.code.substr(0,2) =='BA'?desk.code.substr(2,2):''}}</span>
                        </span>
                        <div class="_2N9K7"
                             v-if='(parseInt(desk.id)>=11&&parseInt(desk.id)<=14)||desk.id==17?true:false'></div>
                      </div>
                    </div>
                  </div>

                  <div class="_2c97U Pryfz _2a6kj">
                    <div class="_2QqaK "
                         v-if='desk_status[desk.id]&&desk_status[desk.id]["status"]!="1"?true:false'
                         :class="(desk_status[desk.id]&&desk_status[desk.id]['status']=='2')?'_13ksF':'' "> {{(desk_status[desk.id]&&desk_status[desk.id]['text'])?desk_status[desk.id]['text']:''}}</div>
                    <div class="SxLiX">
                      <div class="_3fDKM _31RoA vevtA"
                           :class="parseInt(desk_status[desk.id]['bet_interval'])<10?'_6NJkN':'' "
                           v-if='desk_status[desk.id]&&desk_status[desk.id]["status"]=="1"?true:false'> {{(desk_status[desk.id]&&desk_status[desk.id]['bet_interval'])?desk_status[desk.id]['bet_interval']:''}}</div>
                    </div>
                  </div>

                </div>
              </div>
              <!-- 进入 -->
              <!-- canvas -->
              <div class="dvkHW">

                <div class="_173V6"
                     v-if='curr_index==desk.id?true:false'>
                  <div class="J2meY">
                    <div class="_23b3C">进入</div>
                    <span>
                      <span>{{codes[desk.code.substr(0,2)]}}</span>
                      <span>{{desk.code.substr(0,2) =='BP' ||desk.code.substr(0,2) =='BA'?desk.code.substr(2,2):''}}</span>
                    </span>
                    <div>?</div>
                  </div>
                  <div class="AdNm1">
                    <div class="KMUEW _2ZwtM"
                         role="button"
                         @click='cancelBtn($event)'
                         tabindex="0">
                      <span class="_3Wpe1">取消</span>
                    </div>
                    <div class="KMUEW _1D5FG"
                         role="button"
                         @click='enterGameBtn($event)'
                         tabindex="0">
                      <span class="_3Wpe1">进入</span>
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="_13bxE"
                     v-if='canvas_desk.indexOf(desk.id)!==-1?true:false'>
                  <div class="_15uun">
                    <div class="_13T1H"
                         style="position:relative">
                      <canvas ref='a_canvas1'
                              :tabindex="desk.id"
                              width="348"
                              height="72"
                              style="position:absolute;top:0px;left:0px;touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                      <canvas ref='a_canvas'
                              :tabindex="desk.id"
                              width="348"
                              height="72"
                              style="touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                    </div>
                    <div class="_3hAwz">
                      <div class="_1ZvlT"
                           style="position:relative">
                        <canvas ref='b_canvas1'
                                :tabindex="desk.id"
                                width="116"
                                height="58"
                                style="position:absolute;top:0px;left:0px;touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                        <canvas ref='b_canvas'
                                :tabindex="desk.id"
                                width="116"
                                height="58"
                                style="touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                      </div>
                      <div class="_1YU6F"
                           style="position:relative">
                        <canvas ref='c_canvas1'
                                :tabindex="desk.id"
                                width="116"
                                height="58"
                                style="position:absolute;top:0px;left:0px;touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                        <canvas ref='c_canvas'
                                :tabindex="desk.id"
                                width="116"
                                height="58"
                                style="touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                      </div>
                      <div class="_3b3HF"
                           style="position:relative">
                        <canvas width="116"
                                ref='d_canvas1'
                                :tabindex="desk.id"
                                height="58"
                                style="position:absolute;top:0px;left:0px;touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                        <canvas width="116"
                                ref='d_canvas'
                                :tabindex="desk.id"
                                height="58"
                                style="touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                      </div>
                    </div>

                  </div>
                </div>
                <sai-bao v-if='desk.id ==diff_desk_list.sb_desk_list?true:false'></sai-bao>
                <dou-niu v-if='desk.id ==diff_desk_list.dn_desk_list?true:false'></dou-niu>
                <que-jiu v-if='desk.id ==diff_desk_list.qj_desk_list?true:false'></que-jiu>
                <san-gong v-if='desk.id ==diff_desk_list.sg_desk_list?true:false'></san-gong>
                <lun-pan v-if='desk.id ==diff_desk_list.lp_desk_list?true:false'></lun-pan>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div style="display: none;">
        <div class="wveDM _3lscB"
             style="position: relative; display: block; height: 100%; width: 0px; transform: translateX(0px);"></div>
      </div>
      <div style="position: absolute; right: 0px; bottom: 2px; top: 2px; width: 5px;">
        <div class="wveDM _1FnjZ"
             style="position: relative; display: block; width: 100%; height: 359px; transform: translateY(0px);"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { drawCanvas, initRoadMap } from '@/api/roadMap'
import { ba_desk_list, diff_desk_list, codes } from '@/utils/deals'
import SaiBao from './saibao'
import DouNiu from './douniu'
import QueJiu from './quejiu'
import SanGong from './sangong'
import LunPan from './lunpan'
import { clearInterval, clearTimeout } from 'timers'
export default {
  name: 'rightcanvas',
  components: {
    SaiBao,
    DouNiu,
    QueJiu,
    SanGong,
    LunPan
  },
  data () {
    return {
      chipnotice: false,
      codes: codes,
      ba_desk_list: ba_desk_list, // 百家乐desk_id
      diff_desk_list: diff_desk_list, // 剩余其他的
      canvas_desk: ba_desk_list.concat(diff_desk_list.bp_desk_list, diff_desk_list.lh_desk_list),
      desk_list: [],
      ba_list: [],
      other_list: [],
      curr_list: [],
      curr_list_index: [],
      active: true,
      desk_status: {},
      drop_desk_id: '',
      drop_desk_index: '',
      curr_index: 0,
      bottomDate_timer: '',
      num: 0,
      game_music: true,
      myBGAudio: document.createElement("audio"),
    }
  },
  methods: {
    startBet: function (vo) {
      //倒计时 隐藏
      var self = this;
      var id = vo.desk_id
      if (!self.desk_status[id]) {
        self.$set(self.desk_status, id, {})
      }
      self.$set(self.desk_status[id], 'status', '1')
      self.$set(self.desk_status[id], 'text', '')
      self.$set(self.desk_status[id], 'bet_interval', (vo.bet_interval) < 10 ? "0" + (vo.bet_interval) : (vo.bet_interval))
    },
    cancelBtn: function (event) {
      this.curr_index = false
      event.cancelBubble = true
    },
    enterGame: function (id) {
      this.curr_index = id
    },
    enterGameBtn: function (event) {
      var id = this.curr_index

      // if (id == 21) { return }
      // 在大厅时候
      if (this.$store.state.page == 'GAMEHALL') {
        // 在middle里执行
        this.global.sendMessage('zixuan_exit_desk')
        this.$store.commit('ZIXUANTOGAME', id)
      }
      console.log('要退单个桌子---', this.$store.state.page)

      // 在单个桌子的时候
      if (this.$store.state.page == "DOUNIU" || this.$store.state.page == "SANGONG" || this.$store.state.page == 'GAME' || this.$store.state.page == 'QUEJIU' || this.$store.state.page == 'SHAIBAOGAME' || this.$store.state.page == 'LUNPANGAME') {
        console.log('要退单个桌子---', this.$store.state.ziXuanDesk[0])

        this.global.sendMessage('exit_desk', { desk_id: this.$store.state.ziXuanDesk[0] })
        this.$store.commit('ZIXUANTOGAME', id)
      }


      event.cancelBubble = true
    },
    dragstart (event, desk_id, index) {
      this.drop_desk_id = desk_id
      this.drop_desk_index = index
      // console.log('dragstart', event)
      event.dataTransfer.setData('desk_id', desk_id)
    },
    dragend (event) {
      console.log('dragend', 'event')
      event.dataTransfer.clearData()
    },
    onRoadMap: function (vo) {
      if (this.curr_list_index.indexOf((vo.desk_id + '')) > -1) {
        initRoadMap(vo.history, vo.desk_id, 72, 58)
        // console.log('露珠rightcanvass==' + JSON.stringify(vo))
      }
    },
    bottomDateTime: function () {
      var self = this
      if (!this.desk_list) { return }
      for (var name in this.desk_list) {
        var id = this.desk_list[name]['id']
        if (!self.desk_status[id]) {
          self.$set(self.desk_status, id, {})
        }
        //self.desk_status[id]['status'] = 3
        if (self.desk_status[id]['status'] == '1') {
          var timer = parseInt(self.desk_status[id]['bet_interval']) - 1
          if (timer <= 0) {
            self.$set(self.desk_status[id], 'status', '2')
            self.$set(self.desk_status[id], 'text', '停止投注')
            self.$set(self.desk_status[id], 'text_timer', 0)
          } else {
            self.$set(self.desk_status[id], 'bet_interval', timer < 10 ? '0' + timer : timer)
          }
        } else if (self.desk_status[id]['status'] == '2') {
          if (self.desk_status[id]['text_timer'] < 3) {
            self.$set(self.desk_status[id], 'text_timer', self.desk_status[id]['text_timer'] + 1)
          } else {
            self.$set(self.desk_status[id], 'text_timer', 0)
            self.$set(self.desk_status[id], 'text', '结算中')
          }
        } else {
          self.$set(self.desk_status[id], 'text_timer', 0)
          self.$set(self.desk_status[id], 'text', '洗牌中')

          this.clearCanvas(id)
        }
      }
    },
    onCountDown: function (vo) {
      var self = this
      var index = self.curr_list_index.indexOf(vo.desk_id + '')
      if (index !== -1) {
        self.$set(self.desk_status[vo.desk_id], 'status', '1')
        self.$set(self.desk_status[vo.desk_id], 'bet_interval', vo.count_down)
        // console.log('倒计时 onCountDown==' + JSON.stringify(vo))
      }
    },
    onClearBet: function (vo) {
      console.log(vo, "-------------------洗牌")
      var self = this;
      var id = vo.desk_id;

      if (!self.desk_status[id]) {
        self.$set(self.desk_status, id, {})
      }
      this.clearCanvas(id);
      self.$set(self.desk_status[id], 'status', '3')
      self.$set(self.desk_status[id], 'text', '洗牌中')
      // var self = this;
      // var id = vo.desk_id
      // var i = this.mid_desk.indexOf(parseInt(id))
      // if(!self.desk_status[id]){
      //   self.$set(self.desk_status,id ,{})
      // }
      // self.$set(self.desk_status[id],'status' ,'3')
      // self.$set(self.desk_status[id],'text' ,'洗牌中')
      // console.log("清理下注 洗牌===="+JSON.stringify(vo))
      // this.yuce_result[id] = {};
      // //露珠洗掉
      // drawCanvas(self.$refs['a_canvas'][i],self.$refs['b_canvas'][i],self.$refs['c_canvas'][i],self.$refs['d_canvas'][i],self.$refs['a_canvas1'][i],self.$refs['b_canvas1'][i],self.$refs['c_canvas1'][i],self.$refs['d_canvas1'][i],id,45,18)
      // this.clearAll(vo)
    },
    clearCanvas: function (id) {
      var i;
      var self = this;
      for (var j = 0; j < this.desk_list.length; j++) {
        if (id == this.desk_list[j].id) {
          i = j;
          break
        }
      }
      console.log('洗牌中', i)
      if (i === undefined) {
        return
      }
      // if (!self.desk_status[id]) {
      //   self.$set(self.desk_status, id, {})
      // }
      // self.$set(self.desk_status[i], 'status', '3')
      // self.$set(self.desk_status[i], 'text', '洗牌中')
      drawCanvas(self.$refs['a_canvas'][i], self.$refs['b_canvas'][i], self.$refs['c_canvas'][i], self.$refs['d_canvas'][i], self.$refs['a_canvas1'][i], self.$refs['b_canvas1'][i], self.$refs['c_canvas1'][i], self.$refs['d_canvas1'][i], this.$store.state.changDesk.changedeskid, 29, 12)
    },
    setStatus: function (vo) {
      var self = this
      var id = vo.id
      if (!self.desk_status[id]) {
        self.$set(self.desk_status, id, {})
      }
      //vo.status = '3'
      if (vo.status === '1') {
        self.$set(self.desk_status[id], 'status', '1')
        self.$set(self.desk_status[id], 'text', '')
        self.$set(self.desk_status[id], 'bet_interval', (vo.bet_interval) < 10 ? '0' + (vo.bet_interval) : (vo.bet_interval))
        self.$set(self.desk_status[id], 'luzhu', 'true')
      } else if (vo.status === '3') {
        self.$set(self.desk_status[id], 'status', '3')
        self.$set(self.desk_status[id], 'text', '洗牌中')
        self.$set(self.desk_status[id], 'luzhu', 'false')
        console.log('洗牌中')
        this.clearCanvas(id)
        //drawCanvas(self.$refs['a_canvas'][i], self.$refs['b_canvas'][i], self.$refs['c_canvas'][i], self.$refs['d_canvas'][i], self.$refs['a_canvas1'][i], self.$refs['b_canvas1'][i], self.$refs['c_canvas1'][i], self.$refs['d_canvas1'][i], this.$store.state.changDesk.changedeskid, 29, 12)
      } else {
        self.$set(self.desk_status[id], 'status', '2')
        self.$set(self.desk_status[id], 'text', '结算中')
        self.$set(self.desk_status[id], 'luzhu', 'false')
      }
    },
    playGameMusic: function () {
      console.log(this.game_music)
      if (!this.game_music) {
        this.myBGAudio.pause()
        return;
      };

      this.myBGAudio.src = "./static/sound/se/bgm.mp3";
      this.myBGAudio.play();
      this.myBGAudio.loop = true;
    },
  },
  mounted () {
    this.game_music = this.$store.state.game_music
    this.playGameMusic()
  },
  watch: {
    '$store.state.startBet': function () { var self = this; self.startBet(self.$store.state.startBet) },
    '$store.state.clear_bet': function () { var self = this; self.onClearBet(self.$store.state.clear_bet) },
    '$store.state.hallnotice': function () {
      if (this.$store.state.hallnotice == "0" || this.$store.state.hallnotice == "1") {
        this.chipnotice = false
      } else if (this.$store.state.hallnotice == "2" || this.$store.state.hallnotice == "3") {
        this.chipnotice = true
      }
    },
    '$store.state.game_music': function () {
      this.game_music = this.$store.state.game_music
      this.playGameMusic();
    },
    '$store.state.changDesk.changedeskid': function () {
      // console.log('changedeskid-----------', this.$store.state.changDesk.changedata)
      var self = this
      this.desk_list.splice([this.drop_desk_index], 1, this.$store.state.changDesk.changedata)
      this.curr_list_index.splice([this.drop_desk_index], 1, this.$store.state.changDesk.changedeskid)
      this.global.sendMessage('count_down', { desk_id: this.$store.state.changDesk.changedeskid })
      for (var i = 0; i < self.$refs['a_canvas'].length; i++) {

        if (self.$refs['a_canvas'][i]['tabIndex'] === this.$store.state.changDesk.changedeskid) {
          console.log('changedeskid-----------', self.$refs['a_canvas'][i]['tabIndex'], this.$store.state.changDesk.changedeskid)
          drawCanvas(self.$refs['a_canvas'][i], self.$refs['b_canvas'][i], self.$refs['c_canvas'][i], self.$refs['d_canvas'][i], self.$refs['a_canvas1'][i], self.$refs['b_canvas1'][i], self.$refs['c_canvas1'][i], self.$refs['d_canvas1'][i], this.$store.state.changDesk.changedeskid, 29, 12)
        }
      }
      this.$store.state.changDesk = {}
    },
    '$store.state.split_desk': function () {
      if (this.$store.state.changDesk.changedeskid) {
        return
      }
      var self = this

      console.log('split_desk', this.$store.state.split_desk)

      this.desk_list = JSON.parse(JSON.stringify(this.$store.state.split_desk))
      for (var i = 0; i < this.desk_list.length; i++) {
        if (this.ba_desk_list.indexOf(parseInt(this.desk_list[i].id)) === -1) {
          this.other_list.push(this.desk_list[i])
        } else {
          this.ba_list.push(this.desk_list[i])
        }

        this.curr_list_index.push(this.desk_list[i].id)
        var id = this.desk_list[i].id
        var vo = this.desk_list[i]
        self.$set(self.desk_status, id, {})
        this.global.sendMessage('count_down', { desk_id: id })
        self.setStatus(vo)
      }

      if (self.num == 0) {
        clearInterval(self.bottomDate_timer)
        this.bottomDate_timer = setInterval(self.bottomDateTime, 1000)
        console.log('计时器', self.num)
      }

      this.curr_list = this.ba_list

      var yanchi = setTimeout(function () {
        for (var i = 0; i < self.$refs['a_canvas'].length; i++) {
          drawCanvas(self.$refs['a_canvas'][i], self.$refs['b_canvas'][i], self.$refs['c_canvas'][i], self.$refs['d_canvas'][i], self.$refs['a_canvas1'][i], self.$refs['b_canvas1'][i], self.$refs['c_canvas1'][i], self.$refs['d_canvas1'][i], self.$refs['d_canvas'][i]['tabIndex'], 29, 12)
        };
        self.global.sendMessage('user_luzhu')
      }, 0)

      self.num++
    },
    '$store.state.baijiale': function () {
      if (this.$store.state.baijiale) {
        this.active = true
        this.curr_list = this.ba_list
      } else {
        this.curr_list = this.other_list
        this.active = false
      }
    },
    '$store.state.luzhu': function () {
      this.onRoadMap(this.$store.state.luzhu)
      // console.log('-----'+this.$store.state.split_desk)
    },
    '$store.state.onCountDown': function () { var self = this; self.onCountDown(self.$store.state.onCountDown) }
  }
}
</script>
<style scoped>
@-webkit-keyframes _2xo__ {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2xo__ {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3MiDR {
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
@keyframes _3MiDR {
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
._15uun {
  width: 100%;
  height: 100%;
}
._13bxE {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-size: 1rem;
  background-color: #fff;
}
._173V6 {
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  cursor: default;
  pointer-events: auto;
}
._173V6,
.J2meY {
  display: -ms-flexbox;
  display: flex;
}
.J2meY {
  color: hsla(0, 0%, 100%, 0.87);
  font-size: 0.14em;
}
.en-US .J2meY.DU0PU,
.id-ID .J2meY.DU0PU {
  font-size: 0.12em;
}
.J2meY ._23b3C {
  margin-right: 0.35714em;
}
.zh-CN .J2meY ._23b3C,
.zh-TW .J2meY ._23b3C {
  margin-right: 0;
}
.J2meY > div:last-of-type {
  margin-left: 0.35714em;
}
.AdNm1 {
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 1.66em;
  margin-top: 0.08em;
}
.AdNm1,
.AdNm1 .KMUEW {
  display: -ms-flexbox;
  display: flex;
  height: 0.24em;
}
.AdNm1 .KMUEW {
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 0.82em;
  border-radius: 0.12em;
}
.AdNm1 .KMUEW._2ZwtM {
  background-color: #24211a;
}
.AdNm1 .KMUEW._2ZwtM:hover {
  color: #fff;
  background-color: #bbaa7d;
}
.AdNm1 .KMUEW._1D5FG {
  background-color: #7d7254;
}
.AdNm1 .KMUEW._1D5FG:hover {
  color: #fff;
  background-color: #bbaa7d;
}
.AdNm1 .KMUEW ._3Wpe1 {
  color: hsla(0, 0%, 100%, 0.87);
  font-size: 0.14em;
}
._13T1H {
  width: 100%;
  height: 55.55556%;
}
._3hAwz {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  width: 100%;
  height: 44.44444%;
}
._1YU6F,
._1ZvlT,
._3b3HF {
  width: 33.33333%;
  height: 100%;
}

._2Qn5d {
  width: 100%;
  height: 100%;
  display: -ms-flexbox;
  display: flex;
}
._2dOxr {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 10px 10px 0;
}
@-webkit-keyframes Qpn1A {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes BPuCH {
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
@keyframes Qpn1A {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes BPuCH {
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
._3f9ez {
  height: 0.32em;
  width: 100%;
}
._1OxGp,
._15lq_ {
  position: relative;
  height: 100%;
  width: inherit;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: hsla(0, 0%, 100%, 0.6);
  border-left: 1px solid #24211a;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: 600;
  background-color: #040403;
}
._1OxGp:first-child,
._15lq_:first-child {
  border: 0;
}
._1OxGp:before,
._15lq_:before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
._1OxGp span,
._15lq_ span {
  position: relative;
  font-size: 0.16em;
}
._15lq_[disabled],
[disabled]._1OxGp {
  color: #fdeed4;
}
._15lq_[disabled]:before,
[disabled]._1OxGp:before {
  position: absolute;
  background-color: #7d7254;
}
._2SfcA {
  width: 0.25em;
}
._2SfcA,
._8OAMg {
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
}
._8OAMg {
  position: relative;
  width: inherit;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: hsla(0, 0%, 100%, 0.6);
  border-left: 1px solid #24211a;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: 600;
  background-color: #040403;
  border-radius: 0.06em 0 0 0.06em;
  border: 0;
}
._8OAMg:before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
._8OAMg span {
  position: relative;
  font-size: 0.12em;
  letter-spacing: 0.03333em;
  padding-left: 0.16667em;
}
._8OAMg[disabled] {
  color: #fdeed4;
}
._8OAMg[disabled]:before {
  position: absolute;
  background-color: #7d7254;
  border-radius: 0.06em 0 0 0.06em;
}
._2Y4FL {
  top: 0;
  left: 0;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._2Y4FL,
._2Y4FL ._1BkqJ {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}
._2Y4FL ._1BkqJ {
  height: 0.48em;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
._2Y4FL ._1BkqJ ._1s1-v {
  height: 0.48em;
  width: 0.48em;
}
._2xW1I {
  position: relative;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -ms-flex-direction: row;
  flex-direction: row;
  width: 100%;
  height: 0.32em;
}
._1OxGp {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 0.9em;
}
._1OxGp > span {
  font-size: 0.14em;
  line-height: 1;
  text-align: center;
  font-weight: 100;
}
.ja-JP ._1OxGp.beqqP > span {
  width: 4.85714em;
}
._3Qr2m {
  display: -ms-flexbox;
  display: flex;
  position: relative;
  height: 6.53em;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
._1FnjZ {
  z-index: 1;
  width: 0.06em;
  border-radius: 4px;
  background-color: rgba(125, 114, 84, 0.8);
}
._1FnjZ:hover {
  background-color: hsla(44, 31%, 61%, 0.8);
}
@-webkit-keyframes _3cs81 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _3cs81 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes auPtm {
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
@keyframes auPtm {
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
.b3kwq {
  height: 100%;
  width: 1.8em;
  border: 1px solid #7d7254;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: 0.04em;
}
.b3kwq._2939e {
  cursor: move;
}
.b3kwq:first-child {
  margin-top: 0;
}
.b3kwq.dvj5- {
  z-index: 15500;
  pointer-events: none;
}
.dvkHW {
  width: 1.78em;
  height: 0.66em;
}
._2qsud,
.dvkHW {
  position: relative;
}
._2qsud {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 0.36em;
  width: 100%;
  z-index: 1;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#232014),
    to(#2f2303)
  );
  background-image: linear-gradient(90deg, #232014, #2f2303);
}
._2VgzI {
  pointer-events: none;
}
._2VgzI ._2qsud {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#bea878),
    to(#8a784e)
  );
  background-image: linear-gradient(180deg, #bea878, #8a784e);
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(180deg, #ead9b4, #8a784e);
  border-image-slice: 1;
}
._2VgzI ._2u8SC {
  font-weight: 600;
  color: #2a220b;
}
._2VgzI .APyUF {
  color: #2a220b;
}
.APyUF {
  display: -ms-flexbox;
  display: flex;
  height: 34px;
  color: #6d6244;
  font-size: 38px;
  font-size: 2.375rem;
  line-height: 30px;
}
.APyUF._1pqWj {
  color: red;
}
._3vZS_._3vZS_ {
  font-size: 0.12em;
  background-color: rgba(0, 0, 0, 0.9);
  color: hsla(0, 0%, 100%, 0.87);
  z-index: 1;
  pointer-events: none;
}
._2u8SC {
  position: absolute;
  bottom: 5px;
  right: 6px;
  color: #fff;
  font-size: 14px;
  font-size: 0.875rem;
  line-height: 12px;
  text-align: right;
}
:lang(ko-KR) ._2u8SC {
  font-size: 12px;
  font-size: 0.75rem;
  letter-spacing: -1px;
}
._2u8SC._1teIy {
  font-weight: 600;
  color: #d0021b;
  display: inherit;
}
@-webkit-keyframes fMBKv {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes fMBKv {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
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
._2xSSt ._2K7UY .RoTQ2._4_xJ- {
  z-index: 15500;
  pointer-events: none;
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
  /* display: -ms-flexbox;
  display: flex; */
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
._2xSSt ._2c97U .SxLiX ._3fDKM.vevtA {
  display: inherit;
}
._2xSSt ._2c97U .SxLiX ._3fDKM._31RoA {
  line-height: 1.1;
  font-size: 0.2em;
}
._2xSSt ._2c97U .SxLiX ._3fDKM {
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  line-height: 0.9;
  font-size: 0.3em;
  color: hsla(0, 0%, 100%, 0.87);
}
._2xSSt ._2c97U .SxLiX ._3fDKM {
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  line-height: 0.9;
  font-size: 0.3em;
  color: hsla(0, 0%, 100%, 0.87);
}
_2xSSt ._2c97U .SxLiX ._3fDKM._6NJkN {
  line-height: 1.1;
  font-size: 0.2em;
}
.b3kwq._2939e._1mF87 {
  z-index: 15500;
  pointer-events: none;
}
</style>
