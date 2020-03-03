/* eslint-disable */
<template>
  <div class="_2YHZU "
       :style="fontsize">
    <div class="_1r2Sz"
         :style="sc_heigh?'margin: auto 0px':'margin: 0px auto '">
      <div class="_1nOVm">
        <div class="_2Xdic content">
          <!-- 地址栏 -->
          <navbar></navbar>
          <!-- logo -->
          <tubiao v-if='page=="GGBAR"||page=="EGAME"||page=="CHESSGAME" ?true:false'
                  :class='page=="EGAME" ?"_3ghEJ": page=="CHESSGAME" ?"zlerm":""'></tubiao>
          <!-- 图片 -->
          <shouye v-if='page=="GGBAR" ?true:false'></shouye>
          <baijiale v-if='page=="GAME" ?true:false'
                    :key="menuKey"> </baijiale>
          <!-- 游戏大厅 -->
          <lun-pan-game v-if='page=="LUNPANGAME" ?true:false'
                        :key="menuKey1"></lun-pan-game>
          <shai-bao-game v-if='page=="SHAIBAOGAME" ?true:false'
                         :key="menuKey2"></shai-bao-game>
          <que-jiu v-if='page=="QUEJIU" ?true:false'
                   :key="menuKey3"></que-jiu>
          <san-gong v-if='page=="SANGONG" ?true:false'
                    :key="menuKey4"></san-gong>
          <dou-niu v-if='page=="DOUNIU" ?true:false'
                   :key="menuKey5"></dou-niu>
          <!-- 左边 -->
          <left-part v-if='page=="GAMEHALL" ?true:false'></left-part>
          <!-- middle -->
          <middle-part v-if='page=="GAMEHALL" ?true:false'></middle-part>
          <!-- RIGHT -->
          <right-part v-if='page=="DOUNIU"||page=="SANGONG"||page=="QUEJIU"||page=="GAMEHALL" ||page=="GAME"||page=="LUNPANGAME"||page=="SHAIBAOGAME"?true:false'></right-part>
          <!-- 电子游戏 -->
          <egame v-if='page=="EGAME"?true:false'></egame>
          <!-- 棋牌游戏 -->
          <chess-game v-if='page=="CHESSGAME"?true:false'></chess-game>
        </div>
        <!-- all-game -->
        <all-game v-if='isshow'> </all-game>
        <ga v-if='page=="GAMEHALL" || page=="LUNPANGAME" ||page=="SHAIBAOGAME"||page=="QUEJIU"|| page=="SANGONG"||page=="DOUNIU"?true:false'
            :class='page=="LUNPANGAME"||page=="SHAIBAOGAME"||page=="QUEJIU"  || page=="SANGONG"||page=="DOUNIU"?"HpOvA":""'></ga>
        <!--  -->
        <game-ga v-if='page=="GAME" ?true:false'></game-ga>
        <!-- 最下面 -->
        <game-bottom></game-bottom>
        <!-- 提升框 -->
        <second-notice v-if='firstnoticed'></second-notice>
        <!-- 所有的筹码 -->
        <all-chip v-if="isShowChip"></all-chip>
        <first-notice v-if='firstnoticed'></first-notice>
        <third-notice v-if='firstnoticed'></third-notice>
        <!-- 弹框 -->
        <!-- 历史记录 -->
        <history v-if='historyShow=="HISTORY"?true:false'></history>
        <!-- 会员报表 -->
        <report v-if='historyShow=="REPOART"?true:false'></report>
        <!-- app下载 -->
        <app-down v-if='historyShow=="APPDOWN"?true:false'> </app-down>
        <!-- hotline -->
        <hot-line v-if='historyShow=="HOTLINE"?true:false'></hot-line>
        <!-- jackport -->
        <jack-port v-if='historyShow=="JACKPORT"?true:false'> </jack-port>
        <!-- jackport -->
        <deals v-if='historyShow=="DEAL"?true:false'></deals>
        <!-- jackport -->
        <setting v-if='historyShow=="SETTING"?true:false'></setting>

        <div class="_1161h"
             v-show='memberOut'>
          <span class="_3bMEo">系统讯息</span>
          <div class="_1WDT_">
            <div class="_24ZxC">
              <div class="_5FuCL"></div>
            </div>
            <div class="lMqZp">
              {{outText}}
            </div>
            <div class="_2V2XI"
                 @click='Out()'>
              确定
            </div>
          </div>
        </div>
        <!-- 请稍后 -->
        <div class="_1QOq_"
             v-if='!ready'>
          <div class="_1_pu1 _2oKxh"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './navbar/main'
import Tubiao from './tubiao'
import Ga from './ga'
import Shouye from './shouye/main'
import LeftPart from './game/left/left2'
import MiddlePart from './game/middle/middle'
import RightPart from './game/right/right'
import AllGame from './game/allgame'
import GameBottom from './gamebottom/gamebottom'
import FirstNotice from './gamebottom/firstnotice'
import SecondNotice from './gamebottom/secondnotice'
import ThirdNotice from './gamebottom/thirdnotice'
import AllChip from './gamebottom/allchip'
import Egame from './egame/main'
import ChessGame from './chessgame/main'
import History from './history'
import Report from './report'
import AppDown from './appdown'
import HotLine from './hotline'
import JackPort from './jackport'
import Deals from './deals'

import Baijiale from './togame/baijiale'
import GameGa from './togame/gamega'

import LunPanGame from './togame/lunpangame'
import ShaiBaoGame from './togame/shaibaogame'
import QueJiu from './togame/quejiugame'
import SanGong from './togame/sangonggame'
import DouNiu from './togame/douniugame'
import Setting from './setting'
export default {
  components: {
    Baijiale,
    Navbar,
    Tubiao,
    Shouye,
    LeftPart,
    MiddlePart,
    RightPart,
    Ga,
    GameBottom,
    FirstNotice,
    SecondNotice,
    ThirdNotice,
    AllChip,
    AllGame,
    Egame,
    ChessGame,
    History,
    AppDown,
    HotLine,
    JackPort,
    Deals,
    Report,
    GameGa,
    LunPanGame,
    ShaiBaoGame,
    Setting,
    QueJiu,
    SanGong,
    DouNiu
  },
  name: 'Sunbet',
  data () {
    return {
      isShowChip: false,
      fontsize: '',
      sc_heigh: false,
      page: 'GGBAR',
      screenWidth: 0, // 屏幕宽度
      screenHeight: 0, // 屏幕高度
      isshow: false,
      ready: true,
      historyShow: false,
      memberOut: false,
      outText: '',
      menuKey: 1,
      menuKey1: 1,
      menuKey2: 1,
      menuKey3: 1,
      menuKey4: 1,
      menuKey5: 1,
      firstnoticed: false
    }
  },
  methods: {
    setFontSize: function () {
      if (Number(this.screenWidth) / Number(this.screenHeight) >= 1.6) {
        this.fontsize = 'font-size:' + (Number(this.screenHeight) / 8) + 'px'
        this.sc_heigh = false
      } else {
        this.fontsize = 'font-size:' + (Number(this.screenWidth) / 12.8) + 'px'
        this.sc_heigh = true
      }
      // console.log('屏幕宽', val)
    },
    Out: function () {

    }
  },

  mounted () {
    // 连上websocket
    this.global.socketServer()
    this.firstnoticed = this.$store.state.firstnoticed
    this.page = this.$store.state.page
    var _this = this
    _this.screenWidth = document.documentElement.clientWidth
    _this.screenHeight = document.documentElement.clientHeight
    this.setFontSize(_this.screenWidth)
    window.onresize = function () { // 定义窗口大小变更通知事件
      _this.screenWidth = document.documentElement.clientWidth // 窗口宽度
      _this.screenHeight = document.documentElement.clientHeight // 窗口高度
    }

    // window.onbeforeunload= function (e) {
    //   _this.Out()
    // }
  },
  watch: {
    '$store.state.failConnect': function () {
      var self = this
      this.memberOut = true
      this.outText = '伺服器链接失败,请稍候再试'
      console.log('强制退桌', this.$store.state.failConnect)
      setTimeout(self.Out, 5000)
    },
    // '$store.state.onPushOutMember': function () {
    //   this.memberOut = true
    //   var self = this
    //   this.outText = '退桌子 请返回大厅'
    //   console.log('退桌子 请返回大厅', this.$store.state.onPushOutMember)
    //   setTimeout(function () {
    //     self.memberOut = false
    //   }, 2000)
    // },
    '$store.state.onForceExit': function () {
      this.memberOut = true
      this.outText = '重复登陆'
      console.log('重复登陆', this.$store.state.onForceExit)
      var self = this
      setTimeout(self.Out, 5000)
    },
    '$store.state.historyShow': function () {
      this.historyShow = this.$store.state.historyShow
      console.log(this.historyShow)
    },
    '$store.state.showall': function () {
      this.isshow = this.$store.state.showall
    },
    '$store.state.chip': function () {
      this.isShowChip = this.$store.state.chip
      // console.log('xcxc', this.$store.state.user)
      // 你需要执行的代码
    },
    'screenWidth': function () { // 监听屏幕宽度变化
      this.setFontSize()
    },
    'screenHeight': function () { // 监听屏幕高度变化
      this.setFontSize()
    },
    '$store.state.firstnoticed': function () {
      this.firstnoticed = this.$store.state.firstnoticed
    },
    '$store.state.page': function () {
      // 已经登录
      this.page = this.$store.state.page
      if (this.page == 'LUNPANGAME') {
        ++this.menuKey1
      }
      if (this.page == 'SHAIBAOGAME') {
        ++this.menuKey2
      }
      if (this.page == 'GAME') {
        ++this.menuKey
      }
      if (this.page == 'QUEJIU') {
        ++this.menuKey3
      }
      if (this.page == 'SANGONG') {
        ++this.menuKey4
      }
      if (this.page == 'DOUNIU') {
        ++this.menuKey5
      }
      if (this.page == 'GGBAR') {
        document.body.removeChild(document.getElementById('static-loading-wrapper'))
      }
      console.log('ready', this.page)
    },
    '$store.state.gameReady': function () {
      this.ready = this.$store.state.gameReady
    }
  }
}
</script>
<style scoped>
@import "../assets/style/main.css";
._2iR9R:not(._13Nrp) {
  z-index: 6000;
}
@-webkit-keyframes UIgAg {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes UIgAg {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _1dyC6 {
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
@keyframes _1dyC6 {
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
@-webkit-keyframes _Br_v {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes _Br_v {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._1QOq_ {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 20000;
}
._1QOq_._2LlhP {
  font-size: 100px;
}
._1_pu1 {
  position: fixed;
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
._1_pu1:after {
  content: "";
  width: 0.6em;
  height: 0.6em;
  background: transparent url(../assets/fa6343e7.png) no-repeat 50%;
  background-size: 0.6em 0.6em;
  -webkit-animation: _Br_v 1s linear infinite;
  animation: _Br_v 1s linear infinite;
}
._2oKxh {
  top: -0.18em;
}
._1QOq_:after {
  content: "Please Wait";
  position: fixed;
  width: 100%;
  height: 1.125em;
  left: 0;
  right: 0;
  top: 4.75em;
  bottom: 0;
  margin: auto;
  text-align: center;
  font-size: 0.16em;
  color: #fff;
}
:lang(zh-TW) ._1QOq_:after {
  content: "\8ACB\7A0D\5019";
}
:lang(zh-CN) ._1QOq_:after {
  content: "\8BF7\7A0D\5019";
}
:lang(ja-JP) ._1QOq_:after {
  content: "\5C11\3005\304A\5F85\3061\4E0B\3055\3044";
}
:lang(ko-KR) ._1QOq_:after {
  content: "\C7A0\C2DC   \AE30\B2E4\B9AC\C2ED\C2DC\C624";
}
:lang(th-TH) ._1QOq_:after {
  content: "\E01\E23\E38\E13\E32\E23\E2D\E2A\E31\E01\E04\E23\E39\E48";
}

@-webkit-keyframes _282Lz {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _282Lz {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes pa6LF {
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
@keyframes pa6LF {
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
._1161h {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  padding: 0.72em 2.1em;
  z-index: 20000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.9);
  cursor: default;
}
._1161h._2Nr0Q {
  padding: 0;
}
._1161h._17bLy {
  position: fixed;
  padding: 72px 0;
  margin: 0 auto;
  font-size: 100px;
}
._3bMEo {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: auto;
  color: #bbaa7d;
  font-size: 0.3em;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.02667em;
}
._3QIVw {
  position: absolute;
  right: 0.24em;
  top: 0.24em;
  width: 0.32em;
  height: 0.32em;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAbVJREFUWAnNl6tOBDEUQHcAw1siloRP4BuwaxB8BAIEwSJI8CTIFYRvgIQQNBrFH+DAIkgQMJzbpZvOo53eTiehyZ12+jpnZqdtdjT6T6ksy11iZ0gn5l8j9ixjyRYETvmQ+KJ8VRTFq23LlQucuU6JMeVNGLeFTM7NFtk5sSj3pE8iq4QLN4TZ5WZBckzeye5ndea6wvWEQVl+Dg/8BcazeQMWTMcJ5X17T977TQTgUx78uyIg4JwSXXDhNQRyScTAvQJ9JWLhQYFUCQ28U0AroYVHCcRKpMCjBbokUuEqgYDENW0HxFj6/CXZZMw6txW+vHUZ+jpLPU9b36zq3aPhMlAtIIMCEiq4zGXOAiko0xP9P1rGPMr22lLvrVILOB/cRsusx7SrDjCVgAN3P7g3R0R9ikYLeODym18Qd6kSUR9hAD5favSpr46oo7xTIAZunz5FIiiggadKeAVS4CkSrQJ94FqJhkAOuEaiIpATHisxFxgCHiNhBIaEd0nYnbCko3uIqE81C/LlHFIPtLk75k+FyVtYJc6II8L+RfPNl1zP3BPikthuTELlMjEY3AJhrNvyL0h+VD/Mo7VFAAAAAElFTkSuQmCC)
    no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
@-webkit-keyframes UD94j {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes UD94j {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3jER5 {
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
@keyframes _3jER5 {
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
._1WDT_ {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  height: 500px;
  width: 500px;
  margin: auto;
}
._24ZxC {
  width: 0.64em;
  height: 0.64em;
  margin-top: 2.15em;
}
._24ZxC ._5FuCL {
  width: 100%;
  height: 100%;
  background: url(/assets/81dd0f4d.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
}
.lMqZp {
  width: 21.25em;
  margin-top: 0.6875em;
  font-size: 0.16em;
  letter-spacing: 0.0125em;
}
._2V2XI,
.lMqZp {
  text-align: center;
  font-weight: 500;
  color: #fff;
}
._2V2XI {
  width: 9.42857em;
  height: 2.28571em;
  margin-top: 3.14286em;
  line-height: 2.28571em;
  font-size: 0.14em;
  letter-spacing: 0.00714em;
  border-radius: 7.14286em;
  background-color: #7d7254;
  cursor: pointer;
}
._2V2XI:hover {
  background-color: #bbaa7d;
}
</style>
