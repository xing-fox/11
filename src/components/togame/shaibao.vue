<template>
  <div class="mGmDp _2pNum LUNPAN">
    <!-- VIDEO -->
    <div class="_1RAKD">
      <div class="_1QPxJ"
           style="position: absolute;">
        <div class="Video__root _3j8Hg">
          <div class="FlvPlayer__root _3j8Hg">
            <canvas width="294"
                    height="221"></canvas>
            <video x5-video-player-type="h5"
                   playsinline=""
                   webkit-playsinline=""
                   src="">Your browser is too old which does not support HTML5 video.</video>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="GyqT1">
      <div class="_3RQS9"></div>
    </div>
    <div class="_2ZPev _2QS10 _3qcEG">
      <div class="_3BmJY"></div>
      <div class="_3BmJY"></div>
    </div>
    <div class="_2ZPev _3qcEG">
      <div class="_12Aje"></div>
      <div class="_12Aje"></div>
    </div>
    <div role="button"
         tabindex="0"
         class="_2lHa6 _3RAlp">
      <span class="_3yxS1">游戏结果视频</span>
      <div class="_3Mh4Z"></div>
    </div>
    <div class="_2cqzU">
      <div class="_1QPxJ"
           style="position: absolute;">
        <div class="Video__root _3j8Hg">
          <div class="FlvPlayer__root _3j8Hg">
            <canvas width="283"
                    height="242"></canvas>
            <video x5-video-player-type="h5"
                   playsinline=""
                   webkit-playsinline=""
                   src="">Your browser is too old which does not support HTML5 video.</video>
          </div>
        </div>
      </div>
    </div>
    <!-- 计时器 -->
    <div class="adckm">
      <div class="_2TLsm">
        <div class="_3oqMK "
             :class=" timeclass ">
          <div class="_2j-4n">
            <div class="E7lbC"></div>
            <div class="_1_1v4">
              <div id="left-circle"
                   class=""
                   :class="leftclass"
                   :style="leftTime"></div>
            </div>
            <div class="_1lx_N">
              <div id="right-circle"
                   :class="rightclass"
                   :style="rightTime"></div>
            </div>
            <div class="F05i1"
                 v-if='circlecol'></div>
          </div>
          <div class="_2XWnD"
               v-if="desk_status[gameId]&&desk_status[gameId]['status']==1?true:false">{{desk_status[gameId]['bet_interval']}}</div>
        </div>

        <div class="siB5g"
             v-if="desk_status[gameId]&&desk_status[gameId]['status']!=1?true:false">
          <div class="_6HB3 _1nR3K">{{desk_status[gameId]['text']}}</div>
        </div>

      </div>
    </div>
    <!-- 彩池 -->
    <div class="P9dDv">
      <div class="_1YNLs _1ntud">
        <div class="_27QHH">
          <div class="_2jbzU">
            <div class="_2enaz">
              <span class="_2tog7">
                <span>轮盘</span>
              </span>
              <div role="button"
                   tabindex="0"
                   class="_1Htk0"></div>
            </div>
            <div class="_2e_lZ">{{desk.inning?desk.inning:''}}</div>
          </div>
          <div class="_2jbzU">
            <span class="_2tog7">限红</span>
            <div class="_2e_lZ">{{desk.max_bet?desk.max_bet:''}}</div>
          </div>
          <div class="_2jbzU">
            <span class="_2tog7">牌手</span>
            <div class="_1JJJw">
              <div class="_2iulk _3XTUt"
                   role="button"
                   tabindex="0">{{name}}</div>
              <div class="fRFjh"
                   role="button"
                   tabindex="0"></div>
            </div>
          </div>
        </div>

        <div class="_24Bwp">最近结果</div>
        <div class="_2fHau">
          <div class="E2nQg _1u2uO">
            <div style="position: relative; overflow: hidden; width: 100%; height: 100%;">
              <div class="_2Gj3P WpQs6"
                   style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
                <div class="_3QEFC">
                  <template v-for="(one,index) in leijidata">
                    <div class="_1X4FF"
                         :key='index'>
                      <div class="VUR1x">
                        <div class="_3beB4">
                          <div class="nzA04  _2CT-l"
                               :class="paiclass[one.dices[0]]"></div>
                          <div class="nzA04  _2CT-l"
                               :class="paiclass[one.dices[1]]"></div>
                          <div class="nzA04  _2CT-l"
                               :class="paiclass[one.dices[2]]"></div>
                        </div>
                        <div class="_1QuYM _2egnR">
                          {{Number(one.dices[0])+Number(one.dices[1])+Number(one.dices[2])}}
                        </div>
                        <div class="_1QuYM _16z98">
                          {{one.shuang==1?"双":"单"}}
                        </div>
                        <div class="_1QuYM _2AqRR">
                          {{one.da==1?"大": one.xiao==1?"小":"围"}}
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
              <div style="display: none;">
                <div class="wveDM _3lscB"
                     style="position: relative; display: block; height: 100%; width: 0px;"></div>
              </div>
              <div style="position: absolute; right: 2px; bottom: 2px; top: 2px; width: 5px;">
                <div class="wveDM _1280x"
                     style="position: relative; display: block; width: 100%; height: 30px; transform: translateY(0px);"></div>
              </div>
            </div>
          </div>
          <div class="_7uP3i"></div>
        </div>
      </div>
    </div>
    <div class="_2Ob7v"></div>
    <!-- canvas -->
    <div class="_3RmZi">
      <div class="_1w0j- undefined">
        <div class="gX-xw _2HNWr yYlob _31x02"
             style="display: none;">
          <div class="_2RYLa OBOwe"
               role="presentation">
            <div class="_1k3sv"></div>
          </div>
          <div class="_2RYLa _1m_7V"
               role="presentation">
            <div class="_1k3sv"></div>
          </div>
        </div>
        <canvas width="2176"
                height="1002"
                style="touch-action: none; cursor: inherit;"></canvas>
      </div>
    </div>
    <!-- caichi -->
    <div class="_4DarF">
      <div class="_3v8l4">
        <div class="_2dW9K">
          <div class="Jes5P">
            即时彩池
          </div>
        </div>
        <template v-if='!showmoneypool'>
        <div class="_2oR-q">
          <div class="Jes5P">
            单
          </div>
          <span class="_2AP5c">{{moneypool.dan}}</span>
        </div>
        <div class="_2oR-q">
          <div class="Jes5P">
            双
          </div>
          <span class="_2AP5c">{{moneypool.shuang}}</span>
        </div>
        </template>
        <div class="_2oR-q">
          <div class="Jes5P">
            大
          </div>
          <span class="_2AP5c">{{moneypool.da}}</span>
        </div>
        <div class="_2oR-q">
          <div class="Jes5P">
            小
          </div>
          <span class="_2AP5c">{{moneypool.xiao}}</span>
        </div>
        <div class="_1nGsO">
          <div class="nzA04 _3SXdD _1IRJ1"></div>
          <span class="_2AP5c">{{moneypool['1']}}</span>
        </div>
        <div class="_1nGsO">
          <div class="nzA04 _1djDV _1IRJ1"></div>
          <span class="_2AP5c">{{moneypool['2']}}</span>
        </div>
        <div class="_1nGsO">
          <div class="nzA04 _2mz_h _1IRJ1"></div>
          <span class="_2AP5c">{{moneypool['3']}}</span>
        </div>
        <template  v-if='showmoneypool'>
          <div class="_1nGsO"><div class="nzA04 _2QLgR _1IRJ1"></div><span class="_2AP5c">{{moneypool['4']}}</span></div>
          <div class="_1nGsO"><div class="nzA04 _2WtR6 _1IRJ1"></div><span class="_2AP5c">{{moneypool['5']}}</span></div>
          <div class="_1nGsO"><div class="nzA04 _3Xa6c _1IRJ1"></div><span class="_2AP5c">{{moneypool['6']}}</span></div>
        </template>
        <div class="_3gEAv">
          <div class="aV6pA"
              @click='showpool'
               role="presentation"></div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="_10B-u">
      <div class="_3pHdk">
        <div class="_3PLUl">
          <div class="_3PCiL">
            <div class="_1vLy9"></div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">16</div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">31</div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">09</div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">26</div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">17</div>
          </div>
        </div>
        <div class="_3Ca1a">
          <div class="_3PCiL">
            <div class="_3eTbS"></div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">06</div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">15</div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">35</div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">32</div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">10</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import {name_list,img_list,codes,formatCurrency} from '@/utils/deals'
//import LpLeiJi from '../game/lpleiji'
export default {
  name: 'shaibaogame',
  components: {
//LpLeiJi
  },
  data () {
    return {
      paiclass: {1: '_3SXdD', 2: '_1djDV', 3: '_2mz_h', 4: '_2QLgR', 5: '_2WtR6', 6: '_3Xa6c'},
      name:"",
      active: 0,
      timeclass:"",
      gameId:'',
      desk_status:{},
      leftclass:"",
      leftTime:"",
      rightclass:"",
      rightTime:"",
      desk_pai:{},
      leijidata:{},
      moneypool:{},
      desk:{},
      circlecol:false,
      showmoneypool:false
      
    }
  },
  methods: {
    showpool:function(){
      this.showmoneypool = !this.showmoneypool
    },
    getImages:function(){
      var self = this
      self.name = img_list[this.gameId][self.curr_timer]['name']
    },
    stopBet:function (vo){
      var self = this;
      var id = vo.desk_id
      if(!self.desk_status[id ]){
        self.$set(self.desk_status,id ,{})
      }
      self.$set(self.desk_status[id],'status' ,'2')
      self.$set(self.desk_status[id],'text_timer' ,0)
      self.$set(self.desk_status[id],'text' ,'停止投注')
      //console.log("停止下注===="+JSON.stringify(vo));
      // self.clearFailBet(id)
      // self.$set(self.isBet,id,' _1XlEI')
    },
        bottomDateTime: function() {
      var self = this;
      var date = new Date();
      var year = date.getUTCFullYear();
      var month = date.getUTCMonth() + 1;
      var day = date.getUTCDate();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      //var curr_time =self.curr_timer;
      
      month < 10 ? month = "0" + month : month = month;
      day < 10 ? day = "0" + day : day = day;

      if (hours >= 0 && hours < 3) {
        if (self.curr_timer != 0) {
          self.curr_timer = 0
          self.getImages()
        }
      } else if (hours >= 3 && hours < 6) {
        if (self.curr_timer != 3) {
          self.curr_timer = 3
          self.getImages()
        }
      } else if (hours >= 6 && hours < 9) {
        if (self.curr_timer != 6) {
          self.curr_timer = 6
          self.getImages()
        }
      } else if (hours >= 9 && hours < 12) {
        if (self.curr_timer != 9) {
          self.curr_timer = 9
          self.getImages()
        }
      } else if (hours >= 12 && hours < 15) {
        if (self.curr_timer != 12) {
          self.curr_timer = 12
          self.getImages()
        }
      } else if (hours >= 15 && hours < 18) {
        if (self.curr_timer != 15) {
          self.curr_timer = 15
          self.getImages()
        }
      } else if (hours >= 18 && hours < 21) {
        if (self.curr_timer != 18) {
          self.curr_timer = 18
          self.getImages()
        }
      } else if (hours >= 21 && hours < 24) {
        if (self.curr_timer != 21) {
          self.curr_timer = 21
          self.getImages()
        }
      }
      var id = self.gameId;
     
      if(self.desk_status[id]['status']=='1'){

        var timer = parseInt(self.desk_status[id]['bet_interval'])-1
        this.leftclass ='_1LrD-'
        this.rightclass ='_20BrN'
        self.leftTime  = "animation-delay: "+(timer-self.desk_status[id].inning_interval)+"s; animation-duration: "+self.desk_status[id].inning_interval*2+"s"
        self.rightTime = "animation-delay: "+(timer-self.desk_status[id].inning_interval)+"s; animation-duration: "+self.desk_status[id].inning_interval*2+"s"

        if(timer <=10 ){
          self.timeclass = ' _3kkQD _3Isfd'
          self.circlecol=true
        }else{
          self.timeclass = ''
          self.circlecol=false
        }
        if(timer<=0){
        this.leftclass =''
        this.rightclass =''
          self.$set(self.desk_status[id],'status' ,'2')
          self.$set(self.desk_status[id],'text' ,'停止投注')
          self.$set(self.desk_status[id],'text_timer' ,0)
        }else{
          self.$set(self.desk_status[id],'bet_interval', timer<10?"0"+timer:timer)
        }
        //console.log(this.animateTimer)     
      }else if(self.desk_status[id]['status']=='2'){
     
        if( self.desk_status[id]['text_timer']<3){
          self.$set(self.desk_status[id],'text_timer' ,self.desk_status[id]['text_timer']+1)
        }else{
          self.$set(self.desk_status[id],'text_timer' ,0)
          self.$set(self.desk_status[id],'text' ,'结算中')
        } 
        self.timeclass = ' _3kkQD'
        self.circlecol=true
        self.leftclass =''
        self.rightclass =''
      }else{
        self.$set(self.desk_status[id],'text' ,'洗牌中')

        self.timeclass = ' _3kkQD'
        self.circlecol=true
        self.leftclass =''
        self.rightclass =''
      }
      
     
      //self.$set(self.desk_status[id],'bet_interval' ,(vo.bet_interval)<10?"0"+(vo.bet_interval):(vo.bet_interval))
      // console.log(curr_time,hours)
      hours < 10 ? hours = "0" + hours : hours = hours;
      minutes < 10 ? minutes = "0" + minutes : minutes = minutes;
    },
    clearAll:function(vo){
      var self = this
      //清理牌
      if(self.desk_pai[vo.desk_id]){
        self.$set(self.desk_pai,vo.desk_id,{left:{},right:{}})
      }
      //清理下注成功的结果
      if(self.desk_pai[vo.desk_id]){
        self.$set(self.desk_result,vo.desk_id,{})
      }
    },
    setStatus:function(vo){
      var self = this
      var id = vo.id
      if(!self.desk_status[id ]){
        self.$set(self.desk_status,id ,{})
      }
      self.$set(self.desk_status[id],'inning_interval' ,vo.inning_interval)
      if(vo.status=="1"){
    
        this.leftclass ='_1LrD- '
        this.rightclass ='_20BrN'
        self.leftTime  = "animation-delay: "+(vo.bet_interval-vo.inning_interval)+"s; animation-duration: "+vo.inning_interval*2+"s"
        self.rightTime = "animation-delay: "+(vo.bet_interval-vo.inning_interval)+"s; animation-duration: "+vo.inning_interval*2+"s"
        
        self.$set(self.desk_status[id],'status' ,'1')
        self.$set(self.desk_status[id],'text' ,'接受投注')
        self.$set(self.desk_status[id],'bet_interval' ,(vo.bet_interval)<10?"0"+(vo.bet_interval):(vo.bet_interval))
        self.$set(self.desk_status[id],'luzhu' ,'true')
      }else if(vo.status=="3"){
        self.$set(self.desk_status[id],'status' ,'3')
        self.$set(self.desk_status[id],'text' ,'洗牌中')
        self.$set(self.desk_status[id],'luzhu' ,'false')
        self.leftclass =''
        self.rightclass =''
      }else{
        self.$set(self.desk_status[id],'status' ,'2')
        self.$set(self.desk_status[id],'text' ,'结算中')
        self.$set(self.desk_status[id],'luzhu' ,'false')
        self.leftclass =''
        self.rightclass =''
      }
    },
    startBet:function (vo){
      //倒计时 隐藏
      var self = this;
      var id = vo.desk_id
      this.isJPXZ = true
      this.success_JP ={}
      if(!self.desk_status[id ]){
        self.$set(self.desk_status,id ,{})
      }
      self.$set(self.desk_status[id],'status' ,'1')
      self.$set(self.desk_status[id],'text' ,'')
      self.$set(self.desk_status[id],'bet_interval' ,(vo.bet_interval)<10?"0"+(vo.bet_interval):(vo.bet_interval))

      self.leftTime  = "animation-delay: -2s; animation-duration: "+vo.inning_interval+"s"
      self.rightTime = "animation-delay:-2s; animation-duration: "+vo.inning_interval+"s"
      self.leftclass =''
      self.rightclass =''
      self.clearAll(vo)
    },
    onEnterDesk: function (vo) {
      console.log("进桌",vo)
      this.global.sendMessage("desk_info",{desk_id:this.gameId});
    },
    exitDesk:function(vo){
      //console.log("退出自选桌子",vo)
      //this.global.sendMessage("enter_desk",{bet_addition_id:this.$store.state.userLimitID,desk_id:this.gameId})
    },
    onDeskInfoGame: function (vo) {
      var self = this
      console.log("进桌信息",vo)
      self.desk = vo;
      this.setStatus(vo)
      clearInterval(self.bottotimer)
      self.bottotimer = setInterval(self.bottomDateTime,1000);
    },
    onSBResultHistory: function (vo) {
      var self = this
      self.leijidata = vo.history
      //console.log(vo.history)
    },
    onSBMoneyPool: function (vo) {
      // console.log('即时彩池==' + JSON.stringify(vo))
        this.moneypool = vo
    }
  },
  created () {
    var self = this
    self.gameId = self.$route.params.id
    self.onSBMoneyPool(self.$store.state.onSBMoneyPool);
    self.onSBResultHistory(self.$store.state.onSBResultHistory);
    self.global.sendMessage("enter_desk",{bet_addition_id:this.$store.state.userLimitID,desk_id:this.gameId})
  },
  watch:{
  '$store.state.onSBResultHistory': function () { var self = this; self.onSBResultHistory(self.$store.state.onSBResultHistory) },
  '$store.state.onSBMoneyPool': function () { var self = this; self.onSBMoneyPool(self.$store.state.onSBMoneyPool) },
  '$store.state.onDeskInfoGame':function(){var self = this;self.onDeskInfoGame(self.$store.state.onDeskInfoGame)},
  '$store.state.onEnterDesk':function(){var self = this;self.onEnterDesk(self.$store.state.onEnterDesk)},
  '$store.state.exitDesk':function(){var self = this;self.exitDesk(self.$store.state.exitDesk)},
  '$store.state.stopBet':function(){var self = this;self.stopBet(self.$store.state.stopBet)},
  '$store.state.startBet':function(){var self = this;self.startBet(self.$store.state.startBet)},
  // '$store.state.onLpBetSuccess':function(){var self = this;self.onLpBetSuccess(self.$store.state.onLpBetSuccess)},
  // '$store.state.onLpResult':function(){var self = this;self.onLpResult(self.$store.state.onLpResult)},
  // '$store.state.onLpCard':function(){var self = this;self.onLpCard(self.$store.state.onLpCard)},
  }
}
</script>

<style scoped>
mGmDp._2pNum {
  width: 10.92em;
  height: 100%;
  margin: 0;
}
._2XWnD {
  font-family: HelveticaNeue-Light, HelveticaNeue-Thin, sans-serif;
}
@-webkit-keyframes _2xbHK {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2xbHK {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes FQe8M {
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
@keyframes FQe8M {
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
._27Eds {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(10, 10, 6, 0.3)),
    color-stop(21%, rgba(9, 9, 6, 0.26)),
    color-stop(44%, rgba(7, 7, 5, 0.27)),
    color-stop(75%, rgba(5, 5, 3, 0.27)),
    to(rgba(4, 4, 3, 0.3))
  );
  background-image: linear-gradient(
    180deg,
    rgba(10, 10, 6, 0.3),
    rgba(9, 9, 6, 0.26) 21%,
    rgba(7, 7, 5, 0.27) 44%,
    rgba(5, 5, 3, 0.27) 75%,
    rgba(4, 4, 3, 0.3)
  );
}
.RMDly {
  margin-left: 0.1em;
}
._7m0-e {
  width: 0.14em;
  height: 0.14em;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  border-radius: 0.03em;
}
._7m0-e.I6qKo {
  background: #040403;
}
._7m0-e._2M5ND {
  background: #ff101a;
}
._2FC9R {
  line-height: 1;
  width: 6.42857em;
  margin-left: 0.57143em;
  font-size: 0.14em;
  color: #fdeed4;
}
._2RBfb {
  margin-right: 0.64286em;
  font-size: 0.14em;
  color: #fff;
}
.XxpYt {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  width: 1.24em;
  padding: 0.01em 0.05em 0.03em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.XxpYt ._2FC9R {
  margin-left: 0.28571em;
  color: hsla(0, 0%, 100%, 0.6);
}
._3BbLR {
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 1.56em;
  padding-bottom: 0.02em;
}
._3BbLR,
._27gjQ {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  border-left: 0.01em solid hsla(0, 0%, 100%, 0.3);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._27gjQ {
  -ms-flex-pack: center;
  justify-content: center;
  width: 0.32em;
  cursor: pointer;
}
._27gjQ.SXEEd {
  z-index: 15500;
  pointer-events: none;
}
._27gjQ:hover ._2VYIf {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEUAAAD+7tT/8dX97tTeTow9AAAAA3RSTlMA40mAJZ3FAAAAH0lEQVQY02MYYKDawJnAFAFkyDuwX2D8AmcgpAYWAAACqwcntVkVxQAAAABJRU5ErkJggg==);
  background-position: 50%;
  background-repeat: no-repeat;
}
._2VYIf {
  width: 100%;
  height: 100%;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMA40mAJZ3FAAAAH0lEQVQY02MYYKDawJnAFAFkyDuwX2D8AmcgpAYWAAACqwcntVkVxQAAAABJRU5ErkJggg==);
  background-position: 50%;
  background-repeat: no-repeat;
}
@-webkit-keyframes _2Kr-f {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2Kr-f {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _1i4IW {
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
@keyframes _1i4IW {
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
._3pHdk {
  display: -ms-flexbox;
  display: flex;
  height: 100%;
}
._3PLUl {
  left: 0;
  background: url(../../assets/6731e580.png);
  background-size: 100%;
}
._3Ca1a,
._3PLUl {
  position: absolute;
  width: 1.9em;
  height: 0.38em;
  padding-bottom: 0.05em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
._3Ca1a {
  left: 1.84em;
  background: url(../../assets/b5d3ebed.png);
  background-size: 100%;
}
._3PCiL {
  padding-left: 0.07em;
  margin-right: 0.04em;
}
._3PCiL ._1vLy9 {
  width: 0.16em;
  height: 0.16em;
  background: url(data:image/png;base64,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);
  background-size: contain;
  background-position: 50%;
}
._3PCiL ._3eTbS {
  width: 0.16em;
  height: 0.16em;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABFNJREFUWAndl11oHFUUx+dukJnd7OZjSQyNTVPbUrR+UYQaRaRYWoophRZaFFR8EyyITyIINWhL8QNfWlAUIQ8++CBYgoiID4sFreDHi0sxSvzCGAsaoktXN5s9/s7NzDAzO8nsUuODgZNzz//8z8e9c+feWcf5P/xJoXCfeN5PSEU2b87/p3MS1z2BNJE6IsiBbhrIdUNOcin2KNg5x5gvkEnrz+VuS/I2xGa599JAA/2pjIz0yrFjPdg17Dc3pGA0qZTLfRRasJLPXxf4sD+giT9kYGAgwDZEU+QlRHTzRQuAHbS4674cxf/VMbMcp0gDeS8tMfi7SFPy+TvS/FeN0cBJCujsb09LRuEx/Ivw5mRwsD+Nc1UYib+hQHW9JDRx1Dbpum+vx8v02c3muvtldLSgZBJvsYk977msYLhnfe5DWdxUvxSLNzPbH/2ZnFcSy37Y2vn88dSgCKgnItyvkUXiRiOu7CHFh/3i+l5/QpJlfbWY1ZO2gWLxpuwsdsXuhN8ix3Qn/JBDwOu2UKEwGc7a8x4Ge97inAMhOWNArreIaUqptDODuupm9tcSsEzgBUVkxw4Xexb7MlpfMdFTr6NkGl8q3UBMS/dERzGQ9XLR1+xwEEDwBJheOHrZ1AO8U03zHyM/i4hJxrRfRsbcDanu7NkTHjSmXr/o9PQcAZ/l0vksSKIJae4BXaUAS9XGvOOIjDrFYvZFxQy/otuLqYkSIMWf8FflxYQrZpJvn+XRbMyBkbYCI3Q7nyQmbRkaKjmt1ikff4wi25Kc0DZm1o5F2jZiewMiZZb59zB4rUGtpo+kF+4z6GuQN9KesQ3ftWvBamOGrY78a2/AcWr4ixFObMiuHrKAyK1Wu+5ZmjjNqu118vlHYuTAmJuzJykrdiWAAp3WgC5/6snFMt/rNBoLPM8TFC3Da5qlpUVn+/Yz2N/TxFNB4pheXl7Nl8u1Pdq0Bi6RaHfqzhbR+1/PgHNwjlP0Fy1kqtUG9gzDnTQ5rljsr9mcsHardSmGY7Q3YIwmKjrz8/uTZApuAvvLyeVeYfw5+vGQY8yX/nhLiAUDkaMM/3TGxioBtKaWvr4yS6x3gD0Jo0SwU/Z1CvZBxInvaf9VizUgvb23gK/gn47Q1x9CnvKT3R9lgh2wuOedieG8ksT8gHwXw6emcmAfEvM3+vqob92xDA8XCfiWwBoziJ1eYDN+E3phHYT3ILpqsULhUDQx2Orl5XnPRvGOxlxKN5JgiQKXkXuCID2AsKdtwdW7Qe+HRU7FcLVEZ+66L/icGbWD+K40Se+i2K8k0u//0/qFFCTAN4Yc0eb0d0GIFwq7wSp+8fNRX8DpSttCQULP+43kr3JTTqK3ydatnvT3D9qvJ34lgb1P4RZSZ3xyzZOxqw58MkUPkfQCyVf82enSJ0W/hl/Tpjut0XY/ZwXqB4uzsrIP3jhH6ybOgyscQvPoqjMx8ZGpVJpZOaL+fwCqDueOWKPfBwAAAABJRU5ErkJggg==);
  background-size: contain;
  background-position: 50%;
}
._2MJfc {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  width: 0.26em;
  height: 0.26em;
  margin-right: 0.04em;
}
._2MJfc ._1SFMh {
  font-size: 0.3em;
  font-family: FIVExNINEled;
  color: hsla(0, 0%, 100%, 0.7);
}
@-webkit-keyframes hy0QG {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes hy0QG {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _11zgf {
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
@keyframes _11zgf {
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
@-webkit-keyframes _3S_tG {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes _3S_tG {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._1w0j- {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

._1w0j-._3lcTw {
  cursor: default;
}
._1w0j- canvas {
  width: inherit;
  height: inherit;
  position: absolute;
}
._1w0j- canvas:nth-of-type(2) {
  pointer-events: none;
  z-index: 5002;
}
._1w0j- svg {
  position: absolute;
  top: -50%;
  display: none;
}
._1w0j-._2xc49 {
  pointer-events: none;
}
._23WHr {
  top: 0;
}
._2HNWr,
._23WHr {
  position: absolute;
}
._2HNWr {
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  z-index: 5001;
  opacity: 1;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
  pointer-events: none;
  margin-top: 1em;
}
._2HNWr.yYlob {
  margin-top: 1.2em;
}
._2HNWr._3MfMh {
  opacity: 0;
}
.QS2Vs {
  background-image: radial-gradient(
    circle at 50% -3%,
    #0e6f47,
    #11633f 52%,
    #062a20
  );
  background-size: 100% 66%;
  background-repeat: no-repeat;
  background-position: 0 70%;
}
._26wsf {
  position: absolute;
  top: 1.9em;
  left: 0;
  right: 0;
  margin: auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  z-index: 1;
}
._2mS3E {
  font-size: 0.16em;
  text-align: center;
  color: #fff;
}
._2VpSG {
  position: unset;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}
._2VpSG:after {
  content: '';
  width: 0.6em;
  height: 0.6em;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAzFBMVEUAAAD97tT97tT97tT+79T979T97tP+7tT979P979P97tT+7tP+79P+7tP97tT979P+79T979T979P+79T79dX+7tP+7tT97tT97tb/7tD97tT97tP+7NL+8NT979P97tP979T97tT+8NX97tP879P97tT97tb97NL/8+D97tT87dT+7tT97tP97dP+79T97tP97tP97db97tP97tP97tP97tP87dP979T97tP97tT97dP97tP97tT979T879T87dL47dX87dP97dP979McF+feAAAARHRSTlMA5vPV3tvR4urN+PX62M/w4O787ATT2ugSDv5sHCBEP6JKGKgxYDYsB5C+uK14cmYnJJlbh0/HwZ2Ui37JglM7CrVXsd9RCHcAAAWRSURBVHja7dJ5c5pAHMbxJxo1pjlMs2mhIggq4i3eV7zy/t9TF3bZxZg2iRGY6fTDjP75fP0h/vvvJE593Sm3ptnLx0wJcesXK5mb79Qvz2W8AUqtnLu5ofOJBDjr9je6nlSAPb+6pttJBRitayqxAHN67bu5TiTAnlxzN+IETCwByvwbFRRcxx5Qy3nzNICJO0BrfWPkviy4zt2umjMLETJzfP51QH7QNV2CiJFRKvVNEAHp+VpBHLRmSgSIG+QWVcSkf5vyhS/QNgniYhdSDJ+nT7mO+OhXKRHAzFzEaP2QOgxY2YiTzvZFws8iQZzsn6mDgKaGWPXp/++ePoFnglhp6XtKBBR0xIu0vHmKJWRLiNnzPecHTC3ETJfz1E5FzLTLh3shtXMQt1Zo/n6qIm7DB889u0LWQtyUjDfPZUqIXeOBu6ePjthV2Tq7whLxaz5ILYLY6Y+Pjw9cTkP8WqGAIuK3efSwiClB/NqhABvxq149CnMkoCEDrlzEz8lcUSxggASMvXkeUEcCyleBxzISoFywce/RkYDhlZAmSMBABjwjCU8yoI4E9OX+BEmo/aRYwAhJmMkAE0nI/xQUJMC5EPtNJKF+cREkLJCEsQzoIQndC0FHEuYyoIQkVMR+jiAJOxFwh0Q0RcAUiViJgBYSkRYBbSSiIAJm+Ih/LyDxV7DKBXaIHJEQaOYu+DNF5BznOOAlF8gjcltHQKAsAi4JorblwgGNnFBCxIgqyICiDNDxSiwBpgzoIWJbRZAB/Zyn4BkhYqoiEAScAgugHy1ETLE4RYE0KQgKIkU0SxRAGngHYExEaqtxhwG1gvCMSCmlUlCwheTKgCYipbluyadpBCF5WVBHhBzXFQUIaxSoS98SEbL6lOtXWAjby4AVQXT6jEupCFMyl4KByKh1n99AcGAmAwaIjFutBgUaDpmXUh8R2VYp3qDikJOVAQ1ExLVlAV4byYBMCZHYbmyKRWh4rcrHLzOZzAKR6G9oAU/Y4kiZBWS8hioioBqGsaFsqo9jNvv1/ueO4PxsQxaoeEPbn2dqOLuSrusGb6jjLQadD9xZOLOtrssCBW96yQg/KgTntTFNM0io4m3VUMCPLs6qPjYpfgUVfzBi4xT9MnBG1no8Fgl9/ImaDwLox0rD2ajjtSwwCP5o780HZ2gqOBNnvN+vRYKGv6iwgB+e2/YWZ0HM4d4rGPsFNv7GWgW//5YqO+fZrw2HIsF851cZdNx36xdsz3B/s1bzCvhbsPCODpvn2gq+aLvu9bwCnlDHe0iFBXAtDV+iDos9r4C/BZ3gXdZUzKdv0+nJBl9Q6hWLfgFLGG/xAe7qVqAF6S7BiYjR7RZDBWsVH1LNButM2Tr1/B0ewN+Cgg8y0uIV+FbDE45A7E6n06VEgYYPM72CdEi7ik/Sistlh5IvwcUnGHcHBU9PT6MSPkHZPz8v/YJuUKDhU6qTdMgTlV24+CBruBiNRjRBFtQsfJLbDAf4BdnGhuBdpN5rNBYLHsALago+zaq8DqCa3T7+qrRfzOcygJ9gr+IEpCvmWQDz0tFVvEm1a6PZbDCQBfwlGASnMSah3y/c3d1VlsONRkKtmj0uLiqVSrlMAwY0oEED+A2KLk5mlY8D7ph8ftVqlweNxXxQrrR2u5eXdtsLkCfgATUVX7GeiAC2LgKY1WQybTZbreMAVtCp4ovU5dMbAXkWsPIDpocBMy+Av4TxFl9Xr9B56fgC9AQiQJ6A3qCo4TyMclY6vgB/BzSAFQxYQbGP87EHcv/4AjJA/guKLs6rvpyIADmfz4uAXZsW8IDGsITzc/RGXv4Dji4g/4bFKkFElPGoeXCBo4BB0VARrdJ+scsLq5UMGHRNDfFwXL33PJ9VXpqTaatdni86w03JwX//neI3GUohsT/4i6UAAAAASUVORK5CYII=);
  background-size: 0.6em 0.6em;
  -webkit-animation: _3S_tG 1s linear infinite;
  animation: _3S_tG 1s linear infinite;
}
._3S_tG {
  height: auto;
  width: auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  background-position: 50%;
  margin-bottom: 0.13em;
}
._2927E {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 1.2em;
  height: 0.32em;
  margin-top: 0.2em;
  background: #7d7254;
  border-radius: 0.16em;
  cursor: pointer;
  pointer-events: auto;
  outline: none;
}
._2927E:hover:not([disabled]) {
  background: #bbaa7d;
}
._2927E[disabled] {
  background-color: #343024;
}
._267KN {
  color: #fff;
  font-size: 0.14em;
  text-align: center;
  line-height: 1;
}
@-webkit-keyframes _3A1c1 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _3A1c1 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _4mTBI {
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
@keyframes _4mTBI {
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
.E2nQg {
  display: -ms-flexbox;
  display: flex;
  -ms-flex: 1 1;
  flex: 1 1;
}
._1u2uO {
  width: 2.56em;
  height: 1.99em;
}
._1u2uO ._1g4Aw {
  width: 0.24em;
  height: 0.24em;
  margin: 0 0.22em 0 0.15em;
}
._1u2uO ._3rxt2 {
  height: 0.33em;
  padding-right: 0.02em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._1u2uO ._2n_YF {
  padding: 0;
}
._1u2uO ._2I1Qa {
  width: 0.64em;
  font-weight: 600;
}
._1u2uO ._253E9 {
  color: #bbaa7d;
}
._1u2uO ._1g4Aw ._253E9 {
  font-size: 0.14em;
  color: hsla(0, 0%, 100%, 0.87);
}
._3QEFC {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: #040403;
}
._3rxt2 {
  position: relative;
  height: 0.31em;
  width: 100%;
  border-bottom: 0.01em solid #272624;
}
._3rxt2:hover ._1m1Gr {
  display: -ms-flexbox;
  display: flex;
}
._1m1Gr {
  display: none;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  position: absolute;
  padding: 0 0.08em;
  background-color: rgba(0, 0, 0, 0.6);
}
._1m1Gr,
._2n_YF {
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
._2n_YF {
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.02em 0.18em 0 0.08em;
}
._1g4Aw,
._2n_YF {
  display: -ms-flexbox;
  display: flex;
}
._1g4Aw {
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 0.2em;
  height: 0.2em;
  border-radius: 50%;
}
._1g4Aw._3Rof1 {
  background-color: #ff101a;
}
._1g4Aw._1Uiuu {
  background-color: #373131;
}
._1g4Aw.eEr76 {
  background-color: #2e9935;
}
._1g4Aw ._253E9 {
  font-size: 0.1em;
}
._2I1Qa {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  min-width: 0.3em;
}
._253E9 {
  font-size: 0.14em;
  color: hsla(0, 0%, 100%, 0.87);
  letter-spacing: 0.00714em;
}
._253E9.RPDJq {
  font-weight: 600;
  height: 1em;
  line-height: 0.9;
}
._1280x {
  right: -0.01em;
  border-radius: 4px;
  background-color: rgba(125, 114, 84, 0.8);
}
._1280x:hover {
  background-color: hsla(44, 31%, 61%, 0.8);
}
@-webkit-keyframes _18p52 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _18p52 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _39Th3 {
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
@keyframes _39Th3 {
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
._3oqMK {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  width: 0.96em;
  height: 0.96em;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  border: 0.01em solid #6f6857;
}
._3oqMK * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._2VqkK {
  display: none;
}
._3kkQD ._2XWnD {
  color: #e0001e;
}
._3Isfd ._2j-4n ._1LrD-,
._3Isfd ._2j-4n ._20BrN,
._3Isfd ._2j-4n .F05i1 {
  border: 0.04em solid #e0001e;
}
._2XWnD {
  color: #fdeed4;
  font-size: 0.48em;
  letter-spacing: 0.04167em;
  text-align: center;
}
._2j-4n {
  position: absolute;
  height: 0.9em;
  width: 0.9em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
._2j-4n .E7lbC {
  border: 0.04em solid hsla(0, 0%, 61%, 0.3);
  border-radius: 50%;
}
._2j-4n .E7lbC,
._2j-4n .F05i1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
._2j-4n .F05i1 {
  border: 0.04em solid #363536;
  border-radius: 50%;
}
._2j-4n ._1_1v4,
._2j-4n ._1lx_N {
  position: absolute;
  height: 100%;
  width: 0.45em;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
._2j-4n ._1_1v4 {
  left: 0;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
._2j-4n ._1lx_N {
  right: 0;
}
._2j-4n ._1LrD-,
._2j-4n ._20BrN {
  position: absolute;
  height: 100%;
  width: 0.9em;
  top: 0;
  border: 0.04em solid #fdeed4;
  border-radius: 50%;
  clip: rect(0 0.9em 0.9em 0.45em);
}
._2j-4n ._1LrD-._2wJhZ,
._2j-4n ._20BrN._2wJhZ {
  border-color: transparent;
}
._2j-4n ._20BrN {
  -webkit-animation: _3nah8 0s linear 1;
  animation: _3nah8 0s linear 1;
}
._2j-4n ._1LrD-,
._2j-4n ._20BrN {
  right: 0;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
._2j-4n ._1LrD- {
  -webkit-animation: _28XLl 0s linear 1;
  animation: _28XLl 0s linear 1;
}
@-webkit-keyframes _3nah8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50%,
  to {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@keyframes _3nah8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50%,
  to {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@-webkit-keyframes _28XLl {
  0%,
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@keyframes _28XLl {
  0%,
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@-webkit-keyframes _1o6ei {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1o6ei {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes N1BFy {
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
@keyframes N1BFy {
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
._1JJJw {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
._2iulk {
  color: #fff;
  font-size: 0.12em;
}
._2iulk._3XTUt {
  font-size: 0.16em;
}
.fRFjh {
  width: 0.2em;
  height: 0.2em;
  margin-left: 0.1em;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA0xJREFUWAnFl7trFFEUxmcT4wMFtzAggq+VlMoSxC6IgTVgY0CwECsjaAqjAf0TRMEgGFTE2NiJYpHGJmAnVuqClQp5CKKgxQgK4iPr7xvPvczuzu5OZiR74Ntz77n3ft/Zua+ZIOiyFdLq12q1HvqWQBnsBEWwGci+ghAsgSqYLxQKy/iO1jEBhPtgGQYVIBEJvLOyhGVKpAgGQNnKc/inJPIL39LaJoD4ICOPgwUwC9mnlkyxBsZtpXoU7AKPGPcSn94gKIBRcBnosWcyjTUOcSX+2aagdTyNoh7rHbL/lkndBsG3ieJZoOm6B1/NmpIdA5TtRdCb3GPlUXEZ52jb0XQaBHrsyvq/mjiNW+uq2WjsA1dB5jlvZq2PiBtcAdpZkfW4Al5bbYE5mo/FchUROga0GyIz7kUq0oosSoBO8trns//C+X7FB07Cchgcoayt7EwaFdMMogQIlEBIhqn2uWNK8hBr8Y6BIWvXqv9g5cA0QurS9Ano9KoqkMcQ19yOg/3G8wc/g+gzqzsnLWn6BHS263jNbIivZ/AE2GskOoJvI/7C6nEnLWkGayxaxIdW9g7S7VR6IVn0wYQC/TYSPg8iUvwPcJNxrf6UtKTpE9Cp5y4WxQNI9+DOAS2oW5C9UbzRaNPYC2CbtenkvEH/91ZPctLSOD8FSZ20gjeAdWACoX2NnYhtIXYJOHH9s6kO4nU0bhf4jGKtM5RfWV1TNY7gAddOWTeexPst9hl/DfGPVm/n/BN3Cfg5caMg+k35LnhuMfU9hfBBsIOyxKN5xEtU4l/waUzjpOnXwBLlAVA3zxAuI3afuBbVIaDb8wT4CdYCmcZqzr9HtXQ/0tI4vwaqlMsKNBrENfCA+JNYmxN/S+z6CsVFIy1p+gR0/hf5t5rXRENER+jjWONrytPE9XRSm2kUGVB/59AwAs50YqLPEBgDmd4XpAFGmnQIrtZ1rCtfR3az0dC9FxKXDkms6iuZOwecvrwWmw6mSZLJ/WpmHJPGKe7OxqDuvZbH0yORvB8mu+F7yFZt+WGik62tkYRW7DCogBDoANE1q7KmSqazXXtbJ1zZynP4fJ9mEHgjEa2XEpCA7n0JRlcqXomEQMdrFaT+OKVvd+0vUd2owxMzEpMAAAAASUVORK5CYII=);
}
.fRFjh._2g9Uy {
  background-image: url(data:image/png;base64,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);
}
@-webkit-keyframes _20-t3 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _20-t3 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3Tqo3 {
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
@keyframes _3Tqo3 {
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
._1QPxJ {
  background: #000;
  overflow: hidden;
}
._1QPxJ,
._1QPxJ canvas,
._3j8Hg,
.VideoJsPlayer__video {
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
._2GFWT.SBVX1 {
  padding: 0 0 0.16em;
  width: 4.24em;
}
._2GFWT._2w_4m {
  padding: 0.93em 0 0;
}
.nOlbe {
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
.nOlbe._1vRuj {
  top: 1.24em;
}
.nOlbe._2zAHT {
  opacity: 1;
}
.nOlbe ._1bEUE {
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
.nOlbe ._1bEUE ._3NsDq {
  font-size: 0.16em;
  color: hsla(0, 0%, 100%, 0.87);
}
.nOlbe ._1bEUE:hover {
  background-color: #bbaa7d;
  color: #fff;
}
.nOlbe ._1bEUE._30NQB {
  background-color: #7d7254;
  color: #fff;
  pointer-events: none;
}
@-webkit-keyframes _1g_Vm {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1g_Vm {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3FT1w {
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
@keyframes _3FT1w {
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
._2TLsm {
  position: relative;
}
._2TLsm,
.siB5g {
  width: 0.96em;
  height: 0.96em;
}
.siB5g {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
._6HB3 {
  color: #fdeed4;
  font-size: 0.16em;
  text-align: center;
  width: 80%;
  line-height: 1;
  letter-spacing: 0.0125em;
}
._6HB3._1nR3K {
  font-weight: 600;
  color: #e0001e;
}
.zh-CN ._6HB3,
.zh-TW ._6HB3 {
  width: 100%;
  letter-spacing: 0.0125em;
}
@-webkit-keyframes _2FbGY {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2FbGY {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _31R1V {
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
@keyframes _31R1V {
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
._1YNLs {
  display: -ms-flexbox;
  display: flex;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  width: 1.8em;
  padding-bottom: 0.03em;
  background: rgba(4, 4, 3, 0.8);
}
._1YNLs._1ntud {
  width: 2.58em;
  background: #1a1a1a;
  border: 1px solid #3e3726;
}
._1YNLs._3hu52 {
  width: 2.08em;
}
._27QHH {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.02em 0.04em 0.05em;
  border-bottom: 0.01em solid hsla(0, 0%, 100%, 0.12);
}
._1ntud ._27QHH {
  padding: 0.05em 0.08em 0;
  height: 0.83em;
  border-bottom: 0;
  background-color: #0d0d0c;
}
._2enaz {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}
._1Htk0 {
  width: 0.16em;
  height: 0.16em;
  margin-left: 0.04em;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAwVJREFUWAnFl81KVVEUx++VGjQItYFDJYnKRhI9gARGQWA40BdwUG/koBfQgRQEBoL4ABF3ZB+IoUMHaQRNAm+/3z5rH673Hq83uqe74H/WPnuvvf5rf551Go0RS3NQ/na7PYbtLJgHM2ACjAPlBzgDR6AFDpvN5jn6SrkyAIiv4+UxWAQ3r/RYGPxE7YBdAvndr0/fACB/SOcVMBlOTtCOcB98B45ccSZugQdgHkwB5RRsEsTH9FbxqAwAYuuXwLPoc4zewtGneO+r6D+HwTKYDsNt9Fv6t+O9VD0BBPkaFo+A67gJ9qo6U3+phJ8FDJxB988H8LrbT1UALzB05L/AOh2+oHsEAvfF02h4j91ujxEV2N1HvQQ3wDZ2b9ClGFkpGLvmkjvyfuR3aF8Frr1Ypa91PQLhZyrXgT6fBUdpVwZAg7vd6VLcOJUjL5obt0N3qqq61B5BuJTKSnCllzIA3pxSd/sx2AP95FtFY1Vdp9keL/qWQ64kYz6JSO05V9ztPbu1aCqetB9Q2gAeQ7ERdRSrJXxuReticDauRcUs2kvmBMOBjhp2brrKjRc+e5S+IfYu8Z6Q8yDNAAUvD6VVqFqfmSNx5hmYCcr9QagZxT3s7nbZfmWE/TZuNpfjCUicOYCJaPV6HUQkf95l+I73QQLIHIkzL4FnWXFD1S2ZI3HmAOomvdR/DuBCVJdaD6fhwmznAM7Ct5/UuiVzJM4cwFGw+j2vWzJH4swBtIJ1vm52/GeOxJkDOKTBNGqKMz5XVxDh21tQLjlTotDgAjmnbA6nLGPYLIrDe4ZPsyRlJziLAIq6dK+fUp4GC1E3TKVPfcuxC5LkJXAWzF47v9let0MRRm9WtBLOzDXKTLkMwEYazF5NIK1/Rcd/DiJ8mJLp05RMjlJ61jrWag2L0SSlhhZBLFE0P1SOwf9JyxNdPAjEJNW1m4wqkwnPr59Uv2qdV7g3nJeM59yjprjh/v7HJHWNB0GM7tesKxA30SxwhCYTE2AcKM7EGfB6bYGBf06xHa38AU9p9t42IpyrAAAAAElFTkSuQmCC);
  background-size: 100% 100%;
}
._1ntud ._1Htk0 {
  margin-top: 0.04em;
}
._2jbzU {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  height: 0.18em;
  width: 100%;
}
._1ntud ._2jbzU {
  height: 0.23em;
}
._3hu52 ._2jbzU {
  height: 0.18em;
}
._3hu52 ._2jbzU._2-ppg {
  height: 0.24em;
}
._2e_lZ,
._2tog7 {
  font-size: 0.12em;
  font-weight: 600;
  letter-spacing: 0.03333em;
}
._1ntud ._2e_lZ,
._1ntud ._2tog7 {
  font-size: 0.16em;
  font-weight: 100;
  letter-spacing: 0.0125em;
}
._2tog7 {
  color: #fdeed4;
}
._2e_lZ,
._24Bwp {
  color: hsla(0, 0%, 100%, 0.87);
}
._24Bwp {
  width: 100%;
  height: 2em;
  margin-bottom: 12.25em;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-bottom: 0.1875em;
  font-size: 0.16em;
  background-color: #343024;
}
._2fHau {
  top: 1.16em;
  width: 2.57em;
  height: 2.19em;
}
._2fHau,
._7uP3i {
  position: absolute;
}
._7uP3i {
  top: 0;
  left: -0.01em;
  width: 2.58em;
  height: 2em;
  pointer-events: none;
}
._1Irpk {
  width: 100%;
  height: 2.29em;
  margin-top: 0.02em;
  margin-bottom: -0.03em;
  -ms-flex-direction: column;
  flex-direction: column;
}
._1Irpk,
._1Irpk > * {
  display: -ms-flexbox;
  display: flex;
}
._1Irpk > * {
  -ms-flex: 1 1;
  flex: 1 1;
}
@-webkit-keyframes _2N6wm {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2N6wm {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes AABl5 {
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
@keyframes AABl5 {
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
@-webkit-keyframes -waf9 {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes -waf9 {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._2FVVn {
  width: 100%;
  height: 100%;
}
._2FVVn,
.mGmDp {
  position: relative;
}
.mGmDp {
  width: 10.88em;
  height: 5.78em;
  margin: auto;
}
.mGmDp._2pNum {
  width: 10.92em;
  height: 100%;
  margin: 0;
}
.mGmDp._2pNum:after {
  display: none;
}
.mGmDp:after {
  content: '';
  width: 0.52em;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(0, 0, 0, 0.8)),
    color-stop(60%, rgba(0, 0, 0, 0.2)),
    to(transparent)
  );
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.2) 60%,
    transparent
  );
  pointer-events: none;
}
._1RAKD {
  height: 100%;
  width: 100%;
}
._2pNum ._1RAKD {
  position: absolute;
  height: 3.14em;
  width: 4.18em;
  left: 2.98em;
  top: 0.04em;
  border: 1px solid #3e3726;
}
._2ZPev {
  position: absolute;
  top: 3.19em;
  left: 1.17em;
}
._2QS10 {
  z-index: 2;
}
.adckm {
  position: absolute;
  top: 0.08em;
  left: 2.62em;
  z-index: 1;
}
._2pNum .adckm {
  left: 6.06em;
  top: 0.21em;
}
.P9dDv {
  position: absolute;
  top: 0.08em;
  left: 0.66em;
  z-index: 3;
}
._2pNum .P9dDv {
  top: 0.04em;
  left: 0.36em;
}
.P9dDv._1Q3hE {
  top: 0.86em;
  z-index: 2;
}
.P9dDv._1QVZM {
  top: 5.77em;
  left: 8.8em;
}
._3RmZi {
  position: absolute;
  bottom: -1.01em;
  width: 10.88em;
  height: 5.01em;
}
._2pNum ._3RmZi {
  bottom: 0;
  margin-left: 0.04em;
}
._1G0UO {
  top: 2.18em;
  left: 1.14em;
  width: 1em;
  height: 2em;
}
._1G0UO,
._2Ob7v {
  position: absolute;
}
._2Ob7v {
  bottom: 0;
  width: 100%;
  opacity: 1;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
  z-index: 3;
  pointer-events: none;
}
._2Ob7v.JffQ9 {
  opacity: 0;
}
._27zPy {
  left: 0.04em;
  width: 100%;
  height: 1.58em;
}
._1IYcd,
._27zPy {
  position: absolute;
  bottom: 0;
}
._1IYcd {
  width: 3.46em;
  height: 100%;
  pointer-events: none;
}
._3quUN {
  left: 0.76em;
}
._3quUN,
._31GW8 {
  position: absolute;
  top: 3.43em;
}
._31GW8 {
  left: 3.18em;
}
._1pkrW,
._29MfI,
.oFCwz {
  pointer-events: none;
}
._1pkrW {
  top: 3.84em;
  left: 3.08em;
  width: 4.8em;
  height: 1.61em;
}
._1pkrW,
._29MfI {
  position: absolute;
}
._29MfI {
  top: 3.97em;
  left: 0.83em;
  width: 9.26em;
  height: 2.76em;
}
.oFCwz {
  position: absolute;
  top: 4.14em;
  left: 0.79em;
  width: 9.42em;
  height: 2.64em;
}
._1e-cn {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 1002;
  overflow: hidden;
  pointer-events: none;
}
._1e-cn,
._24bGH {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
._24bGH {
  width: 6em;
  min-height: 1.28em;
  margin-top: -2.6em;
  padding: 0.16em 0;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(transparent),
    color-stop(13%, rgba(0, 0, 0, 0.6)),
    color-stop(51%, #000),
    color-stop(88%, rgba(0, 0, 0, 0.6)),
    to(transparent)
  );
  background-image: linear-gradient(
    90deg,
    transparent,
    rgba(0, 0, 0, 0.6) 13%,
    #000 51%,
    rgba(0, 0, 0, 0.6) 88%,
    transparent
  );
}
._24bGH._1vNlh {
  -ms-flex-pack: center;
  justify-content: center;
}
._2K8nf {
  width: 0.4em;
  height: 0.4em;
  margin-bottom: 0.06em;
}
._1ZTAQ {
  color: #fff;
  font-size: 0.16em;
  letter-spacing: 0.0125em;
  line-height: 1.25;
  max-width: 26.875em;
}
._3eU1n {
  height: auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 0.01em;
  max-width: 4.3em;
  text-align: center;
}
._1kfxk {
  width: 9.5%;
  height: 15%;
  max-width: 116px;
  max-height: 116px;
}
.T67bg {
  width: 0.6em;
  height: 0.6em;
}
.GyqT1 {
  top: 3.23em;
  left: 0;
  right: 0;
  height: 4.12em;
}
.GyqT1,
.GyqT1 ._3RQS9 {
  position: absolute;
  width: 100%;
}
.GyqT1 ._3RQS9 {
  height: 100%;
  background-size: 100% 100%;
  background-image: url(../../assets/5f55c5b2.png);
}
._4DarF {
  bottom: 0;
  width: 10.92em;
  height: 0.32em;
}
._4DarF,
._10B-u {
  position: absolute;
}
._10B-u {
  top: 3.33em;
  left: 0.34em;
  width: 3.72em;
  height: 0.38em;
}
._3sx-V {
  position: absolute;
  top: 3.44em;
  left: 0.78em;
  width: 2.77em;
}
@-webkit-keyframes _28SUQ{0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}to{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}}@keyframes _28SUQ{0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}to{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}}@-webkit-keyframes _2pe-V{0%{background-position:100% 0,100% 100%,0 100%,0 0}50%{background-position:50% 0,100% 50%,50% 100%,0 50%}to{background-position:0 0,100% 0,100% 100%,0 100%}}@keyframes _2pe-V{0%{background-position:100% 0,100% 100%,0 100%,0 0}50%{background-position:50% 0,100% 50%,50% 100%,0 50%}to{background-position:0 0,100% 0,100% 100%,0 100%}}._1sIML{display:-ms-flexbox;display:flex;-ms-flex:1 1;flex:1 1}._2_Xhe{width:2.56em;height:1.99em}._2_Xhe ._1X4FF{height:.33em;padding:0;border-bottom:.01em solid #272624}._2_Xhe .VUR1x{padding:0;-ms-flex-pack:start;justify-content:flex-start}._2_Xhe ._3beB4{padding:.01em .03em 0 .16em}._2_Xhe ._1QuYM{width:3.92857em;font-weight:600}:lang(id-id) ._2_Xhe ._1QuYM,:lang(ja-jp) ._2_Xhe ._1QuYM,:lang(th-th) ._2_Xhe ._1QuYM,:lang(vi-vn) ._2_Xhe ._1QuYM{width:4.58333em}._2_Xhe ._1QuYM._2AqRR{color:#ff0707}._2_Xhe ._1QuYM._16z98{color:#002bf7}._2_Xhe ._1QuYM._1JZse{color:#06f039}._2_Xhe ._1QuYM._2egnR{color:#f7f0e8}._1a0vK{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:#040403}._1X4FF{position:relative;height:.31em;width:100%;border-bottom:.01em solid #272624}._1X4FF:hover ._8ZLuo{display:-ms-flexbox;display:flex}._8ZLuo{display:none;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;position:absolute;height:100%;width:100%;padding:0 .08em;background-color:rgba(0,0,0,.6)}._8ZLuo ._1QuYM{color:#fff}.VUR1x{-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;height:100%;width:100%;padding:0 .08em}._3beB4,.VUR1x{display:-ms-flexbox;display:flex}._3beB4{-ms-flex-direction:row;flex-direction:row}._2CT-l._2CT-l{height:.2em;width:.2em;margin-right:.04em}._1QuYM{width:100%;font-size:.14em;color:hsla(0,0%,100%,.87);text-align:center}:lang(id-id) ._1QuYM,:lang(ja-jp) ._1QuYM,:lang(th-th) ._1QuYM,:lang(vi-vn) ._1QuYM{font-size:.12em;line-height:1em}._20yaV{right:-.01em;border-radius:4px;background-color:rgba(125,114,84,.8)}._20yaV:hover{background-color:hsla(44,31%,61%,.8)}
@-webkit-keyframes _1rbw_{0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}to{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}}@keyframes _1rbw_{0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}to{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}}@-webkit-keyframes _1Ktro{0%{background-position:100% 0,100% 100%,0 100%,0 0}50%{background-position:50% 0,100% 50%,50% 100%,0 50%}to{background-position:0 0,100% 0,100% 100%,0 100%}}@keyframes _1Ktro{0%{background-position:100% 0,100% 100%,0 100%,0 0}50%{background-position:50% 0,100% 50%,50% 100%,0 50%}to{background-position:0 0,100% 0,100% 100%,0 100%}}._3v8l4{display:-ms-flexbox;display:flex;width:100%;height:100%;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(10,10,6,.3)),color-stop(21%,rgba(9,9,6,.26)),color-stop(44%,rgba(7,7,5,.27)),color-stop(75%,rgba(5,5,3,.27)),to(rgba(4,4,3,.3)));background-image:linear-gradient(180deg,rgba(10,10,6,.3),rgba(9,9,6,.26) 21%,rgba(7,7,5,.27) 44%,rgba(5,5,3,.27) 75%,rgba(4,4,3,.3))}.Jes5P{line-height:1;width:6.42857em;margin-left:.57143em;color:#fdeed4}._2AP5c,.Jes5P{font-size:.14em}._2AP5c{margin-right:.64286em;color:#fff}._2dW9K{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:1.24em;padding:.01em .05em .03em;-webkit-box-sizing:border-box;box-sizing:border-box}._2dW9K .Jes5P{margin-left:.28571em;color:hsla(0,0%,100%,.6)}._2oR-q{width:1.56em}._1nGsO,._2oR-q{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;border-left:.01em solid hsla(0,0%,100%,.3);padding-bottom:.02em;-webkit-box-sizing:border-box;box-sizing:border-box}._1nGsO{width:1.04em}._1IRJ1._1IRJ1{height:.16em;width:.16em;margin-left:.04em;margin-top:.01em}._3gEAv{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:.32em;border-left:.01em solid hsla(0,0%,100%,.3);-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer}._3gEAv._1AZXb{z-index:15500;pointer-events:none}._3gEAv:hover .aV6pA{background:#bbaa7d url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEUAAAD+7tT/8dX97tTeTow9AAAAA3RSTlMA40mAJZ3FAAAAH0lEQVQY02MYYKDawJnAFAFkyDuwX2D8AmcgpAYWAAACqwcntVkVxQAAAABJRU5ErkJggg==);background-position:50%;background-repeat:no-repeat}.aV6pA{width:100%;height:100%;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMA40mAJZ3FAAAAH0lEQVQY02MYYKDawJnAFAFkyDuwX2D8AmcgpAYWAAACqwcntVkVxQAAAABJRU5ErkJggg==);background-position:50%;background-repeat:no-repeat}
</style>
