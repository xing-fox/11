<template>
  <div class="_1ZHNd allgame">
    <div style="position: relative; overflow: hidden; width: 100%; height: 100%;">
      <div class="_2Gj3P WpQs6"
           style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
        <div class="_2i2Fk">

          <!-- 循环 -->
          <template v-for="(desk,index) in desk_list">
            <div class="_1eV-2"
                 @click='enterGame(desk.id)'
                 :class="desk.id ==diff_desk_list.qj_desk_list||desk.id ==diff_desk_list.sg_desk_list||desk.id ==diff_desk_list.dn_desk_list?'':'_2939e'"
                 :draggable="desk.id ==diff_desk_list.qj_desk_list||desk.id ==diff_desk_list.sg_desk_list||desk.id ==diff_desk_list.dn_desk_list?false:true"
                 :key='index'
                 role="button"
                 :tabindex="index">
              <div class="_2Xr1M">
                <div class="_2xSSt">
                  <div class="_2K7UY ">
                    <div class="N1YLN">
                      <div class="_2KWZL">
                        <span class="_13Q5o ">
                          <span>{{codes[desk.code.substr(0,2)]}}</span>
                          <span>{{desk.code.substr(0,2) =='BP' ||desk.code.substr(0,2) =='BA'?desk.code.substr(2,2):''}}</span>
                        </span>
                        <div class="_2N9K7"
                             v-if='(parseInt(desk.id)>=11&&parseInt(desk.id)<=14)||desk.id==17?true:false'></div>
                      </div>
                    </div>
                  </div>
                  <div class="CA7e0 j5qvO"
                       role="button"
                       tabindex="0">
                    <div class="_1k7v7">
                      <img class="_3qPxB"
                           :src="img_list[index+1]"
                           alt="dealerPicture" />
                      <div class="_3qPxB _1shuV _1y44k"></div>
                    </div>
                    <div class=""></div>
                  </div>
                  <div class="_2c97U Pryfz ">
                    <div class="_2QqaK _13ksF "
                         v-if='desk_status[desk.id]&&desk_status[desk.id]["status"]!=="1"?true:false'
                         :class="(desk_status[desk.id]&&desk_status[desk.id]['status']=='2')?'_13ksF':'' "> {{(desk_status[desk.id]&&desk_status[desk.id]['text'])?desk_status[desk.id]['text']:''}}</div>
                    <div class="SxLiX">
                      <div class="_3fDKM _31RoA "
                           :class="parseInt(desk_status[desk.id]['bet_interval'])<10?'_6NJkN':'' "
                           v-if='desk_status[desk.id]&&desk_status[desk.id]["status"]=="1"?true:false'> {{(desk_status[desk.id]&&desk_status[desk.id]['bet_interval'])?desk_status[desk.id]['bet_interval']:''}}</div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="_3tX9K">

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
                              width="480"
                              height="90"
                              style="position:absolute;top:0px;left:0px;touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                      <canvas ref='a_canvas'
                              :tabindex="desk.id"
                              width="480"
                              height="90"
                              style="touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                    </div>
                    <div class="_3hAwz">
                      <div class="_1ZvlT"
                           style="position:relative">

                        <canvas ref='b_canvas1'
                                :tabindex="desk.id"
                                width="160"
                                height="73"
                                style="position:absolute;top:0px;left:0px;touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                        <canvas ref='b_canvas'
                                :tabindex="desk.id"
                                width="160"
                                height="73"
                                style="touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                      </div>
                      <div class="_1YU6F"
                           style="position:relative">

                        <canvas ref='c_canvas1'
                                :tabindex="desk.id"
                                width="160"
                                height="73"
                                style="position:absolute;top:0px;left:0px;touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                        <canvas ref='c_canvas'
                                :tabindex="desk.id"
                                width="160"
                                height="73"
                                style="touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                      </div>
                      <div class="_3b3HF"
                           style="position:relative">
                        <canvas ref='d_canvas1'
                                :tabindex="desk.id"
                                width="160"
                                height="73"
                                style="position:absolute;top:0px;left:0px;touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                        <canvas width="160"
                                ref='d_canvas'
                                :tabindex="desk.id"
                                height="73"
                                style="touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                      </div>
                    </div>

                  </div>
                </div>

                <big-sai-bao v-if='desk.id ==diff_desk_list.sb_desk_list?true:false'></big-sai-bao>
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
             style="position: relative; display: block; height: 100%; width: 0px;"></div>
      </div>
      <div style="position: absolute; right: 0px; top: 0.04em; bottom: 0px; width: 6px;">
        <div class="wveDM _2cIk2"
             style="position: relative; display: block; width: 100%; height: 392px; transform: translateY(0px);"></div>
      </div>
    </div>
  </div>
</template>
<script>
import {drawCanvas, initRoadMap} from '@/utils/roadMapAll'
import {ba_desk_list, diff_desk_list, codes, img_list} from '@/utils/deals'
import BigSaiBao from './right/bigsaibao'
import DouNiu from './right/douniu'
import QueJiu from './right/quejiu'
import SanGong from './right/sangong'
import LunPan from './right/lunpan'
export default {
  name: 'allgame',
  components: {
    BigSaiBao,
    DouNiu,
    QueJiu,
    SanGong,
    LunPan
  },
  data () {
    return {
      codes: codes,
      ba_desk_list: ba_desk_list, // 百家乐desk_id
      diff_desk_list: diff_desk_list, // 剩余其他的
      canvas_desk: ba_desk_list.concat(diff_desk_list.bp_desk_list, diff_desk_list.lh_desk_list),
      desk_list: [],
      desk_status: {},
      curr_timer: 0,
      img_list: [],
      curr_index: 0,
      bottomDate_timer: '',
      yanchi: ''
    }
  },
  methods: {
    cancelBtn: function (event) {
      this.curr_index = false
      event.cancelBubble = true
    },
    enterGame: function (id) {
      this.curr_index = id
      console.log('allgame-------', id)
    },
    enterGameBtn: function (event) {
      var id = this.curr_index
      // 在大厅时候
      if (this.$store.state.page == 'GAMEHALL') {
        // 在middle里执行
        this.global.sendMessage('zixuan_exit_desk')
        this.$store.commit('ZIXUANTOGAME', id)
      }

      this.$store.dispatch('ShowAll', false)
      this.$store.commit('GAMEREADY', false)

      event.cancelBubble = true
    },
    onRoadMap: function (vo) {
      if (this.canvas_desk.indexOf((vo.desk_id + '')) > -1) {
        initRoadMap(vo.history, vo.desk_id, false)
        // console.log('露珠rightcanvass==' + JSON.stringify(vo))
      }
    },
    getImages: function (list) {
      // 获得图片
      var self = this
      // console.log( 'img---',img_list)
      self.desk_list.forEach(function (value, index, array) {
        var url = img_list[index + 1][self.curr_timer]['imgUrl']

        self.img_list[index + 1] = require(`../../assets/dealer/${url}.png`)
      })
      // console.log(self.img_list)
    },
    bottomDateTime: function () {
      var self = this
      var date = new Date()
      // var year = date.getUTCFullYear()
      var month = date.getUTCMonth() + 1
      var day = date.getUTCDate()
      var hours = date.getHours()
      // var minutes = date.getMinutes()
      // var curr_time =self.curr_timer;

      month < 10 ? month = '0' + month : month = month
      day < 10 ? day = '0' + day : day = day

      if (hours >= 0 && hours < 3) {
        if (self.curr_timer !== 0) {
          self.curr_timer = 0
          self.getImages()
        }
      } else if (hours >= 3 && hours < 6) {
        if (self.curr_timer !== 3) {
          self.curr_timer = 3
          self.getImages()
        }
      } else if (hours >= 6 && hours < 9) {
        if (self.curr_timer !== 6) {
          self.curr_timer = 6
          self.getImages()
        }
      } else if (hours >= 9 && hours < 12) {
        if (self.curr_timer !== 9) {
          self.curr_timer = 9
          self.getImages()
        }
      } else if (hours >= 12 && hours < 15) {
        if (self.curr_timer !== 12) {
          self.curr_timer = 12
          self.getImages()
        }
      } else if (hours >= 15 && hours < 18) {
        if (self.curr_timer !== 15) {
          self.curr_timer = 15
          self.getImages()
        }
      } else if (hours >= 18 && hours < 21) {
        if (self.curr_timer !== 18) {
          self.curr_timer = 18
          self.getImages()
        }
      } else if (hours >= 21 && hours < 24) {
        if (self.curr_timer !== 21) {
          self.curr_timer = 21
          self.getImages()
        }
      }

      if (!this.desk_list) { return }
      for (var name in this.desk_list) {
        var id = this.desk_list[name]['id']
        if (!self.desk_status[id ]) {
          self.$set(self.desk_status, id, {})
        }
        if (self.desk_status[id]['status'] === '1') {
          var timer = parseInt(self.desk_status[id]['bet_interval']) - 1
          if (timer <= 0) {
            self.$set(self.desk_status[id], 'status', '2')
            self.$set(self.desk_status[id], 'text', '停止投注')
            self.$set(self.desk_status[id], 'text_timer', 0)
          } else {
            self.$set(self.desk_status[id], 'bet_interval', timer < 10 ? '0' + timer : timer)
          }
        } else if (self.desk_status[id]['status'] === '2') {
          if (self.desk_status[id]['text_timer'] < 3) {
            self.$set(self.desk_status[id], 'text_timer', self.desk_status[id]['text_timer'] + 1)
          } else {
            self.$set(self.desk_status[id], 'text_timer', 0)
            self.$set(self.desk_status[id], 'text', '结算中')
          }
        } else {
          self.$set(self.desk_status[id], 'text', '洗牌中')
        }
      }
    },
    onCountDown: function (vo) {
      var self = this
      if (!self.desk_status[vo.desk_id ]) {
        self.$set(self.desk_status, vo.desk_id, {})
      }
      self.$set(self.desk_status[vo.desk_id], 'status', '1')
      self.$set(self.desk_status[vo.desk_id], 'bet_interval', vo.count_down)
    },
    setStatus: function (vo) {
      var self = this
      var id = vo.id
      if (!self.desk_status[id ]) {
        self.$set(self.desk_status, id, {})
      }
      if (vo.status === '1') {
        self.$set(self.desk_status[id], 'status', '1')
        self.$set(self.desk_status[id], 'text', '')
        self.$set(self.desk_status[id], 'bet_interval', (vo.bet_interval) < 10 ? '0' + (vo.bet_interval) : (vo.bet_interval))
        self.$set(self.desk_status[id], 'luzhu', 'true')
      } else if (vo.status === '3') {
        self.$set(self.desk_status[id], 'status', '3')
        self.$set(self.desk_status[id], 'text', '洗牌中')
        self.$set(self.desk_status[id], 'luzhu', 'false')
      } else {
        self.$set(self.desk_status[id], 'status', '2')
        self.$set(self.desk_status[id], 'text', '结算中')
        self.$set(self.desk_status[id], 'luzhu', 'false')
      }
    }
  },
  mounted () {
    this.desk_list = this.$store.state.all_desk
    var self = this
    clearInterval(self.bottomDate_timer)
    self.bottomDate_timer = setInterval(self.bottomDateTime, 1000)

    clearTimeout(self.yanchi)
    self.yanchi = setTimeout(function () {
      for (var i = 0; i < self.$refs['a_canvas'].length; i++) {
        self.setStatus(self.desk_list[i])
        drawCanvas(self.$refs['a_canvas'][i], self.$refs['b_canvas'][i], self.$refs['c_canvas'][i], self.$refs['d_canvas'][i], self.$refs['a_canvas1'][i], self.$refs['b_canvas1'][i], self.$refs['c_canvas1'][i], self.$refs['d_canvas1'][i], self.$refs['d_canvas'][i]['tabIndex'], 32, 12)
      }
      self.getImages()
      self.global.sendMessage('user_luzhu')
    }, 30)
  },
  watch: {
    '$store.state.all_desk': function () {
      this.desk_list = this.$store.state.all_desk
      console.log('所有的桌子', this.desk_list)
    },
    '$store.state.luzhu': function () {
      this.onRoadMap(this.$store.state.luzhu)
      // console.log('露珠')
    },
    '$store.state.onCountDown': function () { var self = this; self.onCountDown(self.$store.state.onCountDown) }
  }
}
</script>
<style scoped>
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
@-webkit-keyframes _10m-e {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _10m-e {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes XpGuU {
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
@keyframes XpGuU {
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
._1ZHNd {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0.07em 0.02em 0.75em;
  z-index: 5000;
  background-color: #161614;
}
._1ZHNd,
._1ZHNd ._2i2Fk {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._1ZHNd ._2i2Fk {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  padding: 0 0.12em;
}
._2cIk2 {
  border-radius: 4px;
  background-color: rgba(125, 114, 84, 0.8);
}
._2cIk2:hover {
  background-color: hsla(44, 31%, 61%, 0.8);
}
._1ZHNd ._2i2Fk {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  padding: 0 0.12em;
}

@-webkit-keyframes rrbQv {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes rrbQv {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _1blv6 {
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
@keyframes _1blv6 {
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
._1eV-2 {
  position: relative;
  width: 3.09em;
  height: 1.27em;
  border: 1px solid #7d7254;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0.08em 0.02em;
}
._1eV-2 ._2Xr1M {
  position: relative;
  z-index: 10;
  height: 0.24em;
  width: 100%;
}
._1eV-2 ._3tX9K {
  position: relative;
  height: 1.01em;
  width: 100%;
}
._1eV-2 ._1DOm1 {
  font-size: 16px;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.9);
  color: hsla(0, 0%, 100%, 0.87);
  z-index: 1;
  pointer-events: none;
}
._1QX2T {
  width: 1.7em;
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
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAADM9JREFUeAHtWXtwVcUZ/9178yQPkgABAkmAiIpIIDyCbRBQ6VigVms1ygzaWsU6qCiiYltn2lIUR6wyre3UMogitPiYighBqrZaBaO8IWhEk2giJgaJgbxv7qPft9/9zjn35kbxb89m7tndb7/nb7/ds2cDuMVFwEXARcBFwEXARcBFwEXARcBFwEXARcBFwEXgu4aA59sG/CKysgIIzffAMw8IjyEFwz0IDyc9SVRTFQaN0R/XsH5C575Nt3ltus0nsv31vYCf1Dfyj9q1PngqEjFgewlaW4l2xuWMAXgB2cVBhFdSAHPJqQTb+diA4gXN/oRBjhpAnEHxiBMUGzQBk8dZzpYRcPuxH/DCsyMB3vunwH/YiH3D4xsB+BeG5vrhXx1GaCHp8maNPxc/rKqMq/bjNX9B1dL7zJgEFZ0JdhDMwoCweQaQg9VABRC7b/OJjIIotcrG2AuR/MYUpN4zEe3NrKu/IuD2M7oZWRO74N8TQvh6ctHL7uaXXxGXO9jdjWMPr6ExxZRd4j92m3/8FHftNtO4iIz2uC/QyKjIC5XbHB0X1S/yTrsmaa73o3PPfiROFO74z34B2ITseQF4dpGZAnWM6/zyK+Nqqlv7FLobm6ICFZc1OKklNKUpOKxSwXHSbDq3xA8N1B5TIKQWLm6H4CkIIbRrD3y0X8UvTm0WxzPIJdQCFHwoTV3ldB04YRzmHd5t8Wkj2NODV4qK0XOc9yTdE+z0Z5qNtIxzP2nIIORcWIbkobkIdnaiu7YOrbvfgSdIrhvlwivyTCE9iT74UlMj49HLxikT7u0FurqIz/jRQVJlk9F7yKh1PGgziy4baM2H4d9KVApejEooYRSU/ySaOdKrW7cB3cebTE9leAZEWvKAlpEBgce9KUk477GHUXDzL+Dx2tCwgp7GRhy94Wa07HzNuC6AynJifSPvXoYxD/7B2Pq6x8nnnkfNNQvIKmeEJy2I4NZDSJ8WuydEWzcaA6tpjRWochbX1IsHQMjvR/VDj0UMiZTwi+uqh2umJ+fnoezdN1F4y019gmee5OHDUbJjKwrvvYu7RkbtM5QZU0oM/Uwe6gdroXZBL7pWx8pFZcDTyC0OIbBQZ1xCkMTKmjQemWefFSuPuvUb0dVwPDJbzmE2qiksgbCm8x5ZhcziCYax67PjqFm1Gm37D2LAWWOQf+PPkTN7JjweD4oe+D1ObHkJXcdqDC+vaAYgfbIAEA6FcOqNN82Y8yHeAp1VVRy0wy/uhRfuQ9Ifna/IKABCCK4kLsoKdlxURVIobvqHaJ19sOpRY1/5JFQxzBqEbliQNX0a8sp/ajq85isvnouuj2qMpdbK9/DF5ucx9bXtyJk1E96EBIz6zX14/2c3GX72JyEnG6mjR5t+Z3U1Dl9yqZFVT5lHtlLZG6TnzAN4wxLjj8UjwAJgPUZledA2V9hlzTETK+EwCq/u+/pr2XcQWZOK6TfBcKkjIkdbaHcPTux83YDAekYsuIqHTGl6aRs6I8FrpoQDIdQ//oQBgJkyp06hp9jnfnrJJK5Madu735omkbet2xLR+5DwheceoNOsnhgtADxon08nvQTe7c0LxNQCR87kicigFI0tgy+Yhhlb/hFLtvpH71+BZrOZCSnt7LHW2Jf/eZPaurmJ87xRdn1ab/Ekj8gjCheZBuf6b9u7z4zwuEhLtums2yA4x41IQght86m1iXsWALTC6F0Z7RArY0WF/Rx+WEF/5VTV+46DkSyE1PyRCNKriUtXfYMJTpy33U0dXWip7PpYlgcTGJyMKZOtMQYga87FGPSjeUgbdy56GhrQcfAQWl7eBr8BUTSLgNhXWwQanwtiATAfNkQXNhER/Av7ef1Z3sQ0eIPat+h2hHrpKBUZ4/q/E6abHsOsVnTGeP48Ph8Kb19saTv13l4DkhkjiYzIBsgMI+9cgtxye0mpUOGDK1F3x11oXv8USdj5IfZkgumUYaUzbXhSiDWPWxy4BM89DwZNLUGGY1aY+k2l5q9r0VK518Gm4TpIBgJxkakMyfjHH0P2jO8bJs6UWnpDsA/8lzAwE6lFlt8m+EB7O07t2o32I7TjB4NGLiEjA2OfXIsh1/Gni9jVWqbTQM5fr6ZYABDrMGVw1oXllyvvGdWd9Go78usVhpf1yE8hlRngYJXC457UFEz4+59RQGcDLdVL70V3w2eGj1+A6SUTzetRxz+8fSneHjgEB2ZchH3FU/DuqLE4/Y79kVb40AN0/BkQY18n2GMBYO0BgpLMvqYl4zeINsC2mjq1G1UPyB8BX1JSFG3frcsQaGs3NP3a0xkQRntW2Fpm8fmYvGkdMs8fb4bD4TCql92HhifWmZlnIkv0nmzBsWXLqUUvsq9a0bR+g2mrNj8Bf/SKq1Ba+yF8aWlIzsvDoMsuw5ebn41oYKi5qIT0HACgkVgKOXgpMks751wZoci6lZShdmICylvqogBoeGELGre+QvysQ8CMKDN9biu48Hlw9vK7cc5vfwVvBER/SwsOXXcTvqzYafOZOaQX9JGjlOpHI98UEoy8sTQwuiFpbsbJrS8jd8G1xmzKuHOMtOlEHmyfNlT+aDHFAoDcJaKnkN2WwgFLINzXNo9ye/D0qUhMTxdWevrpImb/kuURadGhMizBRXSHkZQ1ENM2P4XcS+cYOj+atm5H1S1L6FugyeIWKX2KL2qftUmxlxMDwm8OLSlFRdqkWvnM/UJfAIihlrgucDptgyHO24iHMXzObIdy4ODy36Gr8QvjvEAn0uK+uMu6E7MHYubu15Bx7jlGvpeAq1pyD44/808j25/9rJllSMrJIZkw2g8cRM+nDebVyBmpMgyJjzZBLf6mL7Rp4FI+ygCO1RTJaGoSLhXssrqtc6izJwiyDIfkwbBLZnHHlOa3dqNm7dPGiM6L1rYcsfq8KH32aSv4tuoP8cbkMjRQ8Mxv25e22mIjo5bdgUkvPku/55B/x21MMkXk7HbaxOLICJ01SH+UfTPiAX0aVyiTBQBfKBJzQB1xCtrBiGO+9DRaAnxMBfgu4L2b7wRvXoyw8mrbqW/ktVch9wcXGzleMm/Ppm+Bunrqa56IvOjQlGWbwFe73jFy/Bi+cAEShw2N9EWWeTKnlyL7otmGHuzowMlt2yPAMkl1hwMSq2GzT4I34JPWJzB4Bzl+mWQBByTGJRh1y4Ohs8roYiLRaKh68FGcqv6IeMVALC/r0qUzdumtYpWevS1fYcKahyP96P2GiWw7RNdsR274pdH92ZMbULhkMVJGjKCLlCGY+tbrqP3tCpymw1ICTUj2zBkY/cCKiD7g+Jo/oTeyBNQ+6yT/duh3ADMLfBGxteZzOHSAQjH3fxwMQyCCUnO/9NGVOG/pYrS+X42KklkI050AF+XjNqeWKBe5RDrIXNHawENnXPig8++M3IheIKt0Kkr/9yq8yclfq+PkKzvxwdV0GdLeQXy2/wREiH4lFzhujNlPqyxC82G6r9louy6zzgzaYlB4/XPKVy66E0ETvIQqipjDSjciCSxpRaNk+Fs/bVj5aFxZeiFObLOWcJS2UCCAT1auQtX8yxGk4CWThYX9pwPVRmfwPOL03HDylVgXgnsImQJDIDWCEiPpQWruIFzTVI1jf1uPdxffHQmPOW2kxWVVLnTfgFQMyOMDmPKJDOsWJ0S/Qm1s0jdFZ22dw77Nm05flmnjxyHtrCKzHLvr6+ka7VUETpywfLL1spyn3oukaWUx1+R9AGC31tGlKL0qdpEz1qWoBBXG6AVXovSRFdgy7nsInD7tcN4Yob4E6AzUpjGPBCo5IktF9gk7OLGlvOyRjDllhBbPVlw9HaSz7MI4l6IyucaE/bgRzXx7Wk6/jtg0yrtkJipvWw4/Bc/mdWsUd6UnMjLGFOGzeXlcOGW+dRaccuyNyHJLilNGdQhNp0f5mGrZ7/DCWx4veOaOCwAPLMKJChIsI0X1dqC0e59uR/2LvAbFbdsBlhKndUwo8tSQ+/LbzorTwiFzawcmVNalcMmY0wa3nfo57X1ILJuBnvibhkNbrB6rz3tCDwKrydzClME5Xj63d3/eaIXPrxidK24z7uKiuCIIM43/JETml77NK2MSnsqLLu7JPmTTFQZ5xcaxT/tdeGMyku6JXfNWYJGG6IylxunzK5I+I6x/jmrgrECT2w5WHdSA7EA15VROHXAGq22pVZfoEH47cNXDLvvovzkU+I5EJNw/Ex2H44TRh6T2+wz0R9iEguxedM6jlJ5HwmPIYB45Ooz46d/jtrNOMFhX3zFdf7GZwrySITyzIqc1a5Ix4vGTDf5vzOf0o3+Phyt8SNl+0bf89zhrdIuLgIuAi4CLgIuAi4CLgIuAi4CLgIuAi4CLgIvAdwuB/wPxf+q6edOjoQAAAABJRU5ErkJggg==);
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
._1eV-2 ._3tX9K {
  position: relative;
  height: 1.01em;
  width: 100%;
}

._1k7v7 {
  position: relative;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: #e1dac6;
  overflow: hidden;
  -webkit-box-shadow: 0.01em 0.02em 0.04em 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0.01em 0.02em 0.04em 0 rgba(0, 0, 0, 0.5);
}
._3qPxB {
  max-height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
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
._15uun {
  width: 100%;
  height: 100%;
}
</style>
