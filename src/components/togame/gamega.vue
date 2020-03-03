<template>
  <div class="_1tluT _5cta2"
       :class="ga?'QUt72':'' ">
    <div class="_1nM9J"
         role="button"
         @click='gashow'
         tabindex="0">
      <div class="_30_pa"></div>
    </div>
    <div class="_21D1I">
      <div class="_1OQES"
           :class="type==0?'_1vrJ2':''"
           tabindex="0"
           @mouseover="mouseOver(0)"
           @mouseleave="mouseLeave(1)"
           @click='tabschange'
           role="button">
        <div class="_2MQWF _2Dt51"
             :class="type==0?'_1vrJ2':''"></div>
      </div>
      <div class="_1OQES"
           tabindex="0"
           @mouseover="mouseOver(3)"
           @mouseleave="mouseLeave(1)"
           @click='tabschange1'
           :class="type==3?'_1vrJ2':''"
           role="button">
        <div class="_2MQWF _1vgLt"
             :class="type==3?'_1vrJ2':''"></div>
      </div>
      <div class="_1OQES"
           tabindex="0"
           @mouseover="mouseOver(4)"
           @mouseleave="mouseLeave(1)"
           v-on:click="clickone1($event,'HISTORY')"
           :class="type==4?'_1vrJ2':''"
           role="button">
        <div class="_2MQWF _321ZV"
             :class="type==4?'_1vrJ2':''"></div>
      </div>
    </div>
    <div class="YMyIb">
      <iframe class="_3dWkl T4foZ"
              title="MiniLobby"
              :src='url'
              scrolling="no"
              id="iframe">
      </iframe>
      <div class="zhuan_money"
           v-if='isshow'>
        <span class="zhuan_money_inner">{{money}}</span>
      </div>
      <!-- <div class="_3dWkl T4foZ"
           title="GA">
           </div> -->
    </div>
  </div>
</template>
<script>
import { formatCurrency } from '@/utils/deals'
export default {
  name: 'Tubiao',
  data () {
    return {
      ga: false,
      enterstate: 1,
      active: 0,
      money: '0.000',
      url: './static/ga/ga.html',
      type: -1,
      isshow: true
    }
  },
  methods: {
    clickone1: function ($event, index) {
      // this.active = index
      this.$store.dispatch('HistoryShow', index)
    },
    tabschange: function () {
      this.url = './static/ga/ga1.html'
      this.isshow = false
    },
    tabschange1: function () {
      this.piciframe = false
      this.url = './static/ga/ga.html'
      this.isshow = true
      this.piciframe = true
    },
    mouseLeave: function (txt) {
      this.type = txt
    },
    mouseOver: function (txt) {
      this.type = txt
    },
    gashow: function () {
      this.ga = !this.ga
    },
    enter: function () {
      this.enterstate = 1
      console.log('ooo')
    },
    leave: function () {
      this.enterstate = 0
    },
    enterone: function ($event) {
      $event.currentTarget.className = '_31gC6 _1_E-g'
    },
    leaveone: function ($event) {
      $event.currentTarget.className = '_31gC6'
    },
    clickone: function ($event, index) {
      this.active = index
      console.log(this.active)
    }
  },
  mounted () {
    this.money = formatCurrency(this.$store.state.user.money)
  },
  watch: {
    '$store.state.user': function () {
      console.log('$store.state.user', this.$store.state.user.money)
      this.money = formatCurrency(this.$store.state.user.money)
    }
  }
}
</script>

<style scoped>
@-webkit-keyframes bsCBp {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _2RbkW {
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
@-webkit-keyframes _2eldp {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes _2eldp {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes bsCBp {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2RbkW {
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
._2sN-j {
  height: 0.32em;
  width: 100%;
}
._1OQES {
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
  /* border-left: 1px solid #24211a; */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: 600;
  background-color: #040403;
}
._1OQES:first-child {
  border: 0;
}
._1OQES:before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
._1OQES span {
  position: relative;
  font-size: 0.16em;
}
[disabled]._1OQES {
  color: #fdeed4;
}
[disabled]._1OQES:before {
  position: absolute;
  background-color: #7d7254;
}
._1F_pd {
  width: 0.25em;
}
._1F_pd,
.qbE6c {
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
}
.qbE6c {
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
.qbE6c:before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.qbE6c span {
  position: relative;
  font-size: 0.12em;
  letter-spacing: 0.03333em;
  padding-left: 0.16667em;
}
[disabled].qbE6c {
  color: #fdeed4;
}
[disabled].qbE6c:before {
  position: absolute;
  background-color: #7d7254;
  border-radius: 0.06em 0 0 0.06em;
}
._1tluT {
  position: absolute;
  top: 4.3em;
  left: 0.33em;
  height: 2.9em;
  width: 3.5em;
}
._1tluT:not(._5cta2)._3AV2h,
._1tluT:not(._5cta2).nzDZA {
  top: 3.68em;
}
._1tluT:not(._5cta2)._3WcVJ {
  top: 3.06em;
}
._1tluT._5cta2 {
  top: auto;
  left: auto;
  bottom: 0.64em;
  right: 1.88em;
  height: 1.58em;
  width: 2.11em;
  z-index: 1000;
}
._1tluT._5cta2._2WKSQ {
  top: 0.04em;
  bottom: auto;
  height: 3.14em;
  width: 3.68em;
  border: 1px solid #3e3726;
}
._1tluT._5cta2._2WKSQ .YMyIb {
  height: 2.76em;
  border: none;
}
._1tluT._5cta2.QUt72 {
  height: 2.15em;
  width: 2.87em;
}
._1tluT._5cta2 .YMyIb {
  height: 100%;
  border: 0.01em solid #7d7254;
}
._1tluT ._37l5U {
  height: 0.37em;
}
.YMyIb {
  height: 2.63em;
  width: 100%;
  border-top: 0.01em solid #7d7254;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._1nM9J {
  position: absolute;
  left: -0.09em;
  bottom: 1.26em;
  width: 0.25em;
  height: 0.32em;
  margin-left: -0.16em;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 0.06em 0 0 0.06em;
  background-color: #7d7254;
}

._1nM9J:hover {
  background-color: #bbaa7d;
}
._1nM9J ._30_pa {
  height: 0.12em;
  width: 0.12em;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAAAXNSR0IArs4c6QAAAZFJREFUWAndl08rhFEUh2f8W2hKKcrCQgmlZMVOjaztTDa+gNj7AmThA1jZ4BOgKGOjLMjKzkIpUQpZKITXc3a30605izMnOfWr99zO/T3nNu/c+95S6b9FURTd6BgNha8NaCc6QxL3aDisCWBtaB+lcRrZwFZK5vkRDYY0AGhNwd/IJ6Pgywr+RT4bBa8B+1YNLEbBpwF/KPh6FHwc8KuC75KXm94AkAH0oOAn5B0R8B5A1wp+Rd4VAa8AulDwO/L+CHg7oCMFl3dgLAJeBrSj4J/kM02HCwDQhoJLuuAFbzEYFZma3FimzGGI1cpPsC3LTkI2oKqDvc0CmLyEh0kD8viCRm0ODlXA5G94jtK4JelzsLdZAMttRJeMV2wODlXAclvxAeOtDvY2C2C5w2jTNtupiiaqSB/HK072NhsamEPpB8kP+bxttlMVwCWUxjvJlJO9zQbgatoBz89oxDbbqQqg/iy/YazXyb6xDTC5mOyhNOqNZzpWQE6vZk/kE472Niugcjmto7hzwtbaH636BSUWkNW58UCoAAAAAElFTkSuQmCC);
  background-size: 100% 100%;
}
.QUt72 ._1nM9J ._30_pa {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
._21D1I {
  position: absolute;
  left: -0.26em;
  bottom: 0;
  width: 0.26em;
  height: 1.26em;
}
._2X3FJ {
  display: none;
}
._3dWkl {
  border: 0;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
}
.T4foZ {
  background: #341f18 url(../../assets/left_game_1.jpg) center 100% no-repeat;
  background-size: cover;
}
._19ptG {
  background: #341f18 url(/assets/5c211188.png) center 50% no-repeat;
  background-size: contain;
}
.b2xsn {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAACZ1BMVEUAAAD////////sOCj////////////////////////////////////////////////////////////////////////////////////////////uNST////////////////////////////////////////////////////////////////uNiT////////////////////////vOCb////////////////////////////tNiXuNSTtNiTuNiXuNiX////uNiTuOCbyOSbvQjH/ZjPuNSTuNiXuNiXtNibvNyTxOSvtSTf+/v7tNSQAAADtNiX4s61JSUnx8fHtOyp/f3/0jIPtOChWVlb97Oqvr6/9/Pz2m5P1lIu8vLz5u7b1kIf4saqQkJDwXlH84+Curq7wWkz6zcn3rqjxYlUFBQX70s65ubnQ0ND+/f3++fn2npbzfHHwVkgTExP7+/v29vbt7e3Y2NiysrKoqKj3qKHzgXdZWVk0NDTDw8OkpKSVlZXvUUIbGxv+8/L96Ob85OLU1NT71dL6xsL5wr35vrj0hXp5eXksLCwkJCQYGBgNDQ0ICAjm5ub4trD3pJ2cnJx0dHTzd2xdXV3uQTEgICACAgIBAQH97+3p6en83dr72da/v7/3rKWEhIT0iX9ycnJkZGTxZlpCQkI/Pz/uSTo5OTkoKCj+9/b85+Xh4eHd3d3Nzc34ubOenp6ZmZn1mJBwcHBpaWlgYGBLS0vvTT7z8/PHx8f2oZmNjY2KiorycWZPT088PDztPi784d/839za2tqioqLybmLuRjYvLy+jo6PydGiFTGCAAAAATXRSTlMAfmBgeoshC0K3LZZuB136rFoDybFPHxcS4tO+p4ZzYzXl3saejXdUSC8l8+/qvJmVajw2GvTw2M21oln42c+WkndJKA8FwqaJcmISDhZu8DEAAAhcSURBVHja7Nddb9JQGMBxox+Dr7A7L32L76/PQ9FKnZTQ6qyYxU2JGi0uBhny5p1EJDpHFgwG3RKXLCZLNJppookfSp5DWUHOOajF1ov+btbQdvvvtOeU7hhx+GBk3xT6YWr/8T1HdoyxO4K+2ntCmnT0APpu6pC453QEA6CcFI5PBINxShB0AAOydzf/fsbA7OcG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);
  background-size: contain;
}
.IlIcA {
  background: #341f18 url(/assets/62ab454d.png) center 50% no-repeat;
  background-size: contain;
}
._3PKkb {
  background: url(data:image/png;base64,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);
  background-size: contain;
}
._2KGOD {
  background: url(data:image/png;base64,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);
  background-size: contain;
}
._19ptG,
.IlIcA {
  background-size: auto 50%;
}
.b2xsn {
  background-size: 50% auto;
}
._1wvgH {
  position: absolute;
  bottom: 0.74em;
  left: 0.32em;
  height: 2.91em;
  width: 3.52em;
}
._1wvgH.nzDZA {
  height: 3.59em;
}
._1wvgH._3AV2h {
  height: 3.53em;
}
._1wvgH.nzDZA._3AV2h {
  height: 4.21em;
}
._1wvgH ._5upmA {
  height: 100%;
  width: 100%;
  background-image: url(/assets/a86f4519.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}
.pRTu9 {
  position: absolute;
  top: 0.04em;
  right: 1.88em;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 3.7em;
  height: 3.16em;
  background: #000;
  border: 1px solid #3e3726;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.pRTu9 .dEheS {
  height: 1em;
  width: 1em;
}
._2sN-j {
  letter-spacing: 0.01em;
}
._5vLwc {
  display: -ms-flexbox;
  display: flex;
}
._1F_pd,
.qbE6c {
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
}
._1F_pd {
  width: 0.25em;
}

.zhuan_money {
  position: absolute;
  left: 0.7em;
  top: -0.78em;
}
.zhuan_money_inner {
  font-weight: 100;
  color: #fff;
  display: inline-block;
  padding: 0;
  margin: 0;
  font-size: 0.12em;
  font-weight: 900;
  /* margin-left: 6.5%;
  width: 69.5%;
  color: rgb(255, 255, 255);
  font-size: calc(0.6rem + ((1vw - 2px) * 11));
  line-height: 0; */
}
</style>
