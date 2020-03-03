<template>
  <div class="-Hodx chip_list">
    <div class="_3D4u3">
      <div class="_1vAYM">
        <div class="_3oVbK _26Opu">
          <div class="_3ZYlD"
               :class="direction=='right' ? '':'_1JS3D'"
               data-switch-type="left"
               role="button"
               @mousedown='down("left")'
               @mouseup='up()'
               tabindex="0"></div>
        </div>
        <div class="_3X79m">
          <div class="_1-_tC"
               :class="move?'_38d-C':''"
               :style="{'transform':direction=='right' ? 'translateX(-'+weiyi+'em)':'translateX(0em)'}">
            <template v-for="(chip,index) in init_chips">
              <div class="_38eo9 "
                   :class="indexchip[index]!=undefined?indexchip[index]:'_3bB4Z'"
                   :key='index'
                   role="button"
                   :tabindex="index">
                <div class="_2YIp6"
                     :class="selected==index?'_2Khm3':'' "
                     role="button"
                     @click='selectChip(chip,index)'
                     tabindex="0">
                  <!-- 筹码图片  -->
                  <div :class="show(chip)"></div>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="_3oVbK _3d78I">
          <div class="_3ZYlD"
               :class="direction=='right' ? '_1JS3D':''"
               data-switch-type="right"
               role="button"
               @mousedown='down("right")'
               @mouseup='up()'
               tabindex="0"></div>
        </div>
      </div>
      <div class="_1tyKw"
           :class='chipnotice?"VOXnU":""'>
        <div class="lcjX9">投注限红</div>
        <div class="EzbBb">
          <div data-interval="false"
               class="vertical carousel slide">
            <div class="carousel-inner">
              <template v-for="(onelimit,index) in betlimit">
                <div class="item "
                     :key='index'
                     :class='curr_limit==index?"active":"" '>
                  <div class="UnIHF">{{formatCurrency(onelimit.down)+" - "+formatCurrency(onelimit.up)}}</div>
                </div>
              </template>
            </div>
            <a class="carousel-control left"
               v-if='betlimit.length==1?false:true'
               role="button"
               href="#">
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control right"
               v-if='betlimit.length==1?false:true'
               role="button"
               @click='chooseLimit'
               href="#">
              <div class="_3gUTD"></div>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="_2-okB Nf1sF">
      <div data-for="txtSunbetChipSettings"
           data-iscapture="true"
           data-tip="设定筹码"
           currentitem="false">
        <div class="ly2Mk"
             role="button"
             @click="showAllChip()"
             tabindex="0"></div>
      </div>
      <div class="__react_component_tooltip place-top type-dark "
           v-if='tooltip'
           id="txtSunbetChipSettings"
           data-id="tooltip"
           style="left: 602px; top: 556px;">设定筹码</div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { chips, formatCurrency } from '@/utils/deals'
export default {
  name: 'gamechiplist',
  data () {
    return {
      chips: chips,//总共筹码
      betlimitdown: 0,//限红上限
      betlimitup: 0,
      init_chips: [],//底部筹码
      show_max_chips: 90000,//最大筹码
      max_index: 0,//底部显示筹码最大个数9
      direction: 'left',//筹码点击左右tab
      move: false,
      indexchip: {},
      selected: -1,//当前筹码的下标
      curr_chip: -1,//当前筹码的值
      betlimit: [],
      curr_limit: 0,
      weiyi: 0.58,
      tooltip: false,
      formatCurrency: formatCurrency,
      myGameAudio: document.createElement("audio"),
      game_effect: true,
      chipnotice: false
    }
  },
  methods: {
    playGameEffect: function (url, boo) {
      if (!this.game_effect) {
        return;
      }
      if (boo) {
        this.myGameAudio = null
        this.myGameAudio = new Audio();
        this.myGameAudio.src = url;
        this.myGameAudio.play();
      } else {
        this.myGameAudio.src = url;
        this.myGameAudio.play();
      }
    },
    chooseLimit: function () {
      this.curr_limit = this.curr_limit + 1
      if (this.curr_limit == (this.betlimit.length)) {
        this.curr_limit = 0
      }
      console.log(this.curr_limit)
      this.show_max_chips = this.betlimit[this.curr_limit].up;
      var zixuandesk = this.$store.state.ziXuanDesk;
      var i = 0;
      while (i < zixuandesk.length) {
        this.global.sendMessage("desk_hong", { bet_addition_id: this.betlimit[this.curr_limit].id, desk_id: zixuandesk[i].id })
        i++
      }
      this.$store.dispatch('UserLimitId', this.betlimit[this.curr_limit].id)
      this.initChipData()
    },
    selectChip: function (chip, index) {
      //选择的筹码
      this.playGameEffect("./static/sound/se/click_btn.mp3", true)
      this.selected = index;
      //console.log()
      this.$store.dispatch('SelectedChipIndex', chip)
    },
    showAllChip: function () {
      // 显示全部筹码
      this.$store.dispatch('ShowChip', true)
    },
    down: function (direction) {
      //鼠标按下时候
      var self = this
      this.direction = direction
      this.move = true
      if (this.direction == 'left') {
        self.$set(self.indexchip, 8, '')
        self.$set(self.indexchip, (this.init_chips.length - 9), '_3bB4Z')
      } else {
        self.$set(self.indexchip, (this.init_chips.length - 9), '')
        self.$set(self.indexchip, 8, '_3bB4Z')
      }
      //this.indexchip[0]['style']='transition: operation 0.3 linear 0.5s;'
      //this.indexchip[8]['style']='transition: operation 0.3 linear 0.5s;'
      //console.log('鼠标----',this.move)
    },
    up: function () {
      this.move = false
    },
    indexShow: function (index) {
      return _style
    },
    show: function (chip) {
      return 'chip-one-' + chip
    },
    chipSwitch: function (direction) {
      this.direction = direction
      //console.log("筹码左右点击",this.direction);
      // 筹码左右点击
    },
    onBetLimit: function (vo) {
      //限红可能是个数组

      var self = this;
      self.betlimit = vo
      self.betlimitdown = vo[0]['down'];
      self.betlimitup = vo[0]['up'];
      self.show_max_chips = vo[0]['up']
      this.$store.dispatch('UserLimitId', vo[0].id)
      console.log("用户限红==", vo);
      //初始化筹码数组数据
      self.initChipData();

    },
    initChipData: function () {
      //初始化筹码数组数据
      var k = 0;
      var j = 0;
      var count;
      var value;
      var self = this;
      self.init_chips = [];

      while (k < chips.length) {
        if (chips[k] > self.show_max_chips) {
          self.max_index = k;
          break;
        };
        k++;
      };
      console.log("count---", self.max_index);
      if (self.max_index > 12) {
        count = 12;
      } else {
        count = self.max_index;
      }
      console.log("count---", count);
      while (j < count) {
        value = (self.max_index) - (count - j);
        self.$set(self.init_chips, j, value)
        self.$set(self.indexchip, j, undefined)
        j++;
      }
      self.weiyi = (self.init_chips.length - 8) * .58
      self.direction = 'left'
      self.$set(self.indexchip, 8, '')
      self.down('right')
      this.$store.dispatch('SetChip', self.init_chips.slice(0, self.init_chips.length))
      console.log("筹码组:", self.init_chips);
    }
  },
  mounted () {
    //限红数据
    var self = this;
    //console.log('chip----',this.global)
    //this.initChipData()
    this.global.sendMessage('member_bet_addition')
    this.global.addMessageListener("member_bet_addition", self.onBetLimit);
    if (this.$store.state.hallnotice == "0" || this.$store.state.hallnotice == "2") {
      this.chipnotice = false
    } else if (this.$store.state.hallnotice == "1" || this.$store.state.hallnotice == "3") {
      this.chipnotice = true
    }
    console.log(this.chipnotice)

  },
  watch: {
    '$store.state.hallnotice': function () {
      console.log(this.chipnotice)
      if (this.$store.state.hallnotice == "0" || this.$store.state.hallnotice == "2") {
        this.chipnotice = false
      } else if (this.$store.state.hallnotice == "1" || this.$store.state.hallnotice == "3") {
        this.chipnotice = true
      }
    },
    '$store.state.chang_chip_index': function () {
      this.init_chips.splice(this.$store.state.chang_chip_index[0], 1)
    },
    '$store.state.game_effect': function () {
      this.game_effect = this.$store.state.game_effect
    }
  }
}
</script>

<style scoped>
@import "../../assets/style/chip.css";

._38eo9.chip-one-animate {
  transition: operation 0.3 linear 0.5s;
  -moz-transition: operation 0.3 linear 0.5s; /* Firefox 4 */
  -webkit-transition: operation 0.3 linear 0.5s; /* Safari 和 Chrome */
  -o-transition: operation 0.3 linear 0.5s; /* Opera */
}
@-webkit-keyframes _1W2tF {
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
@keyframes _1W2tF {
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
.-Hodx {
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  margin-left: 0.85em;
}
.-Hodx .Nf1sF {
  display: inline-block;
  cursor: pointer;
  margin-left: 0.13em;
}
.-Hodx .Nf1sF .ly2Mk {
  position: relative;
  height: 0.32em;
  width: 0.32em;
  background-image: url(../../assets/edf3f47e.png);
  background-size: 100% 100%;
  margin-top: 0.1em;
  -webkit-box-shadow: 0 0.02em 0.04em 0 rgba(0, 0, 0, 0.5),
    0 0 0.06em 0 hsla(44, 31%, 61%, 0.8);
  box-shadow: 0 0.02em 0.04em 0 rgba(0, 0, 0, 0.5),
    0 0 0.06em 0 hsla(44, 31%, 61%, 0.8);
  border-radius: 50%;
}
.-Hodx .Nf1sF .ly2Mk:hover {
  background-image: url(../../assets/86ca3fd2.png);
  -webkit-box-shadow: 0 0.02em 0.04em 0 rgba(0, 0, 0, 0.5),
    0 0 0.04em 0.02em #f8e3a9;
  box-shadow: 0 0.02em 0.04em 0 rgba(0, 0, 0, 0.5), 0 0 0.04em 0.02em #f8e3a9;
}
.-Hodx ._3D4u3 {
  height: 100%;
  width: 5.2em;
  position: relative;
  line-height: 1;
}
@-webkit-keyframes _1hQII {
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
@keyframes _1hQII {
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
@-webkit-keyframes LDb5F {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes LDb5F {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._1vAYM {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: end;
  align-items: flex-end;
  position: relative;
  height: 0.48em;
  width: 5.1em;
  margin-top: 0.01em;
  margin-left: 0.05em;
  pointer-events: none;
}
._3oVbK {
  z-index: 2;
  height: 100%;
  width: 0.24em;
}
._26Opu {
  margin-left: -0.12em;
}
._3d78I {
  margin-right: -0.12em;
}
._3X79m {
  height: 1em;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  margin-bottom: -0.05em;
}
._1-_tC {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: end;
  align-items: flex-end;
  -ms-flex-pack: left;
  justify-content: left;
  height: 100%;
  width: 100%;
  padding-left: 0.12em;
}
._38d-C {
  -webkit-transition: -webkit-transform 0.3s linear;
  transition: -webkit-transform 0.3s linear;
  transition: transform 0.3s linear;
  transition: transform 0.3s linear, -webkit-transform 0.3s linear;
}
._38eo9 {
  position: relative;
  height: 0.48em;
  width: 0.48em;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: -webkit-transform 0.05s linear;
  transition: -webkit-transform 0.05s linear;
  transition: transform 0.05s linear;
  transition: transform 0.05s linear, -webkit-transform 0.05s linear;
  padding: 0 0.05em 0.15em;
  margin-bottom: -0.1em;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
._38eo9:hover {
  -webkit-transform: translateY(-0.1em);
  transform: translateY(-0.1em);
}
._38eo9._3bB4Z {
  opacity: 1;
  pointer-events: auto;
}
._2Khm3:before {
  position: absolute;
  content: "";
  display: block;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  margin: -0.01em auto;
  height: 0.5em;
  width: 0.5em;
  border-radius: 50%;
  background-color: #00ffb8;
  -webkit-box-shadow: 0 0 0.04em 0.02em #6fffc2;
  box-shadow: 0 0 0.04em 0.02em #6fffc2;
  z-index: -1;
}
@-webkit-keyframes PAeyb {
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
@keyframes PAeyb {
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
.carousel.vertical .carousel-inner {
  height: 100%;
  width: auto;
}
.carousel.vertical .carousel-inner > .item {
  width: auto;
  -webkit-transition: top 0.168s ease-in-out;
  transition: top 0.168s ease-in-out;
}
@media (-webkit-transform-3d) {
  .carousel.vertical .carousel-inner > .item {
    -webkit-transition: 0.168s ease-in-out;
    transition: 0.168s ease-in-out;
  }
  .carousel.vertical .carousel-inner > .item.active.right,
  .carousel.vertical .carousel-inner > .item.next {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    top: 0;
  }
  .carousel.vertical .carousel-inner > .item.active.left,
  .carousel.vertical .carousel-inner > .item.prev {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    top: 0;
  }
  .carousel.vertical .carousel-inner > .item.active,
  .carousel.vertical .carousel-inner > .item.next.left,
  .carousel.vertical .carousel-inner > .item.prev.right {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    top: 0;
  }
}
.carousel.vertical .carousel-control {
  height: 0.08em;
  width: 0.16em;
  font-size: 1em;
  opacity: 1;
}
.carousel.vertical .carousel-control.left,
.carousel.vertical .carousel-control.left:hover,
.carousel.vertical .carousel-control.right,
.carousel.vertical .carousel-control.right:hover {
  background-image: none;
}
.carousel.vertical .carousel-control.left {
  display: none;
  pointer-events: none;
}
.carousel.vertical .carousel-control.right {
  right: -0.23em;
  top: 0.03em;
}
._1tyKw {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: end;
  align-items: flex-end;
  color: hsla(0, 0%, 100%, 0.87);
  position: absolute;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  bottom: 0;
  height: 0.14em;
  right: 2.1em;
}
._1tyKw .lcjX9 {
  font-size: 0.12em;
  letter-spacing: 0.08333em;
  line-height: 1;
  height: 100%;
}
._1tyKw .EzbBb {
  position: relative;
  height: 100%;
  margin-left: 0.14em;
}
._1tyKw .EzbBb .UnIHF {
  font-size: 0.12em;
  white-space: nowrap;
  letter-spacing: 0.08333em;
}
._3gUTD {
  height: 0.08em;
  width: 0.16em;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAAAXNSR0IArs4c6QAAAURJREFUKBVjXLuwefXvP78NODk4zzMwMf5kYWL+x8zKysDMzMzAysLMwMjMwsAKZDMBMQsQA8WZmFlY2IG0ITMzywVGBiBYt6hlloCgwA05BZnVjD9/ffrCyv8HJI4OeH5/ZPnPzsb3++e/0P8MDBpaJkFpYANACjcsaZvBw899WVJJffmrV+yfHBwc/iIbcODAAWYxsZ98fz9/jGRkYNLVtQjNAMkzwRQFxFRlfPv6U/fl/bsRIIUMq1czMTIy/gdhEBsk9uvDh4g/f/7CNYP0wl0AM2jryt4Z3Hzcl0TlFFaAXAISB2n+/u5dxP9/f/VM7WPBNsPUYxgAkti5dsIMLh6eSxKiUqtB/Pef3oX++/dbz8IpEUUzSA6rASCJfVsmzeDi5LvDxMTM8OfvTxUrlxQMzSB1eMGBrTPmH9kxaz4+RQCvC2yYXmYw5QAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
  outline: none;
}
._3ZYlD {
  height: 100%;
  width: 100%;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAAGXcA1uAAAABGdBTUEAALGPC/xhBQAAAvBJREFUSA1jYMAGbl/aHM0Ek7h66bIvjE0Ofe30ui0o+i4cXxGEIoDOWTu/JRZdDD//3uXtenAHg5SeObK89tXV/Tx/Of4/gGu9fHSF8v//+1lAArdvb+NjhMtAGf///2e6c2c7D4pRIDlGRsZ/QIodqo446trZ9bcwrEDXeu3EGlUGFuY4Vn72SUxMrL/Q5eH8o7vnnrp1aYsL0OFwZ4A8AVeAjbFrXV8G0FNwVxDUADNk1fyGpaCgIloDTOOujZ1SMDZR9IsXO7kxwhuXzusXN/u+e/LtAlEarpxcvZoFGHV//vy5SlDD2UPLrnFwcfar6Els//3r1x+8Gs4eWnJKSIA3SFnH+yQjo8nv379+M4BTFbq7L17cyf3/8/uJQiJCAbLqrs+B6eg/SM2fP7+wa3j38M5+VVV1TxkNl7fIhv3+/YcBq5Mc/bLNLl+9VPL//xlWZA1//vzGrgGkyDOkqHLnhmOGZ/YvE4FpAnoCtwaQIo/AvFOcYiyfNi7rdAXx/wCdBE9YIAF8YOmsmj52TjY5fGow5BZOK7tDtA0YugkI3L2wVe3vvz8nsMYbAb14pa+dWV8LzHO+/xj/z//1+88FqlgAyiUv7r7bz8rGdomFjXUFBxvb3J/MwCj48tuZIgsuHl/j++vX9873z35O5+LiS2Nl4HqgoMvwhZHR8Q8o8wPzAvaUijcMgJIn9y9czcbKysnFxTGLj4Pbi0WE/6WMjOVPaFEK1w5KqET74MLhFWqfPn/cJCgsvIaTi6P/PwfTbRUVsQ8MDMZ/YHkLbjKUgTProCsE8Q1sI25JqsrqP3vyROXZw8e8Kiqc70E5HJfhID1/gEFEdjLdsbY/FhgEhupGOpUqKp6/0C0CxcG9SzfmkW0ByIUgcGjHTMk3r15P5+biqHALLr4NtOgvSBxkwa2zVyi3AGQYDKxe0NDG/J/hUWCCz9x7995zXT52ai7FPoAZjkyvX9pi9vXzt3I2dnZuZHGqsx8fW8UJACdULK2NO/pJAAAAAElFTkSuQmCC);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
  outline: none;
  pointer-events: auto;
}
._3ZYlD[data-switch-type="right"] {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
._1JS3D {
  pointer-events: none;
  opacity: 0.5;
  cursor: default;
}
._1tyKw.VOXnU {
  z-index: 15500;
  pointer-events: none;
}
</style>
