<template>
  <div class="_3sYYO">
    <div class="_2H2hf">
      <div class="_36no4">
        <div class="_3iQ7x">
          <div class="_2-okB _1DOG3">
            <div data-for="txtSunbetMemberProfile"
                 @click='showsetting'
                 data-iscapture="true"
                 data-tip="会员资料"
                 currentitem="false">
              <div class="_1y0Tz"
                   role="button"
                   abindex="0">
                <div class="TxLHk  _2xmRI">
                  <img :src="img"
                       alt="">
                </div>
              </div>
            </div>
            <div class="__react_component_tooltip place-top type-dark "
                 v-show='tooltip'
                 id="txtSunbetMemberProfile"
                 data-id="tooltip"
                 style="left: 97px; top: 700px;">会员资料</div>
          </div>
          <div class="_1I5uQ">
            <div class="d75tV">
              <div class="_1pqvG">{{userInfo.nickname}}</div>
            </div>
            <div class="_2sv6d">
              <div class="_2HLqr">{{userInfo.money}}</div>
              <div role="button"
                   tabindex="0"
                   class="_2tulf"
                   @click='updateUser()'></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部组件 -->
      <game-chip-list v-if='page=="SANGONG" ||page=="DOUNIU" ||page=="QUEJIU" || page=="GAMEHALL" ||page=="GAME"||page=="LUNPANGAME"||page=="SHAIBAOGAME"?true:false '></game-chip-list>
      <gnotice v-if='page=="DOUNIU" ||page=="SANGONG" ||page=="QUEJIU" ||page=="GAMEHALL"||page=="GAME"||page=="LUNPANGAME" ||page=="SHAIBAOGAME"?true:false'></gnotice>
      <notice v-if='page=="GGBAR"||page=="EGAME"||page=="CHESSGAME" ?true:false'></notice>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { userVo } from '@/api/socket'
import GameChipList from './chiplist'
import Gnotice from './gnotice'
import Notice from './notice'
import { formatCurrency } from '@/utils/deals'
export default {
  components: {
    GameChipList,
    Gnotice,
    Notice
  },
  name: 'gamebottom',
  data () {
    return {
      tooltip: false,
      page: 'GGBAR',
      img: "",
      userInfo: {
        id: '',
        name: "",
        nickname: "",
        money: "",
        pic: ""
      },
    }
  },
  methods: {
    showsetting: function () {
      this.$store.dispatch('HistoryShow', "SETTING")
    },
    updateUser: function () {
      var self = this
      //更改用户信息
      this.global.sendMessage("member_info");
      self.$set(self.$store.state.user, 'money', formatCurrency(credit))
      // self.$store.dispatch('SetuUser', self.$store.state.user)
    },
  },
  mounted () {
    this.page = this.$store.state.page
  },
  watch: {
    '$store.state.user': function () {
      this.userInfo = this.$store.state.user
      this.$set(this.userInfo, 'money', formatCurrency(this.userInfo.money));
      var pic = "pic_" + this.userInfo.pic;
      this.img = require(`../../assets/profile_pic/${pic}.jpg`);
      //console.log('xcxc',formatCurrency(this.$store.state.user.money))
      //你需要执行的代码
    },
    '$store.state.updateUser': function () {
      this.userInfo = this.$store.state.updateUser
      // console.log(this.userInfo)
      this.$set(this.userInfo, 'money', formatCurrency(this.userInfo.credit));
      var pic = "pic_" + this.userInfo.pic;
      this.img = require(`../../assets/profile_pic/${pic}.jpg`);
      //console.log('xcxc',formatCurrency(this.$store.state.user.money))
      //你需要执行的代码
    },
    '$store.state.page': function () {
      this.page = this.$store.state.page
    },
  },
}
</script>

<style scoped>
@import "../../assets/style/footer.css";
._2iR9R:not(._13Nrp) {
  z-index: 6000;
}

._36no4 ._2dLRO ._3p53L ._2tulf {
  width: 0.2em;
  height: 0.2em;
  margin: 0.01em 0 0 0.08em;
  border-radius: 50%;
  background: #7d7254
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAjVBMV…Nj27OvPH7QggHz0lW/gQnv2jeMS4R18Wydr77NkwhTuFi+ANlhrAv8xuHKAAAAAElFTkSuQmCC)
    no-repeat 50%;
  background-size: 0.12em 0.12em;
  -webkit-box-shadow: 0 0.02em 0.02em 0 #100e0c;
  box-shadow: 0 0.02em 0.02em 0 #100e0c;
  cursor: pointer;
}
.TxLHk._2xmRI img {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: 100%;
  display: inherit;
}
@-webkit-keyframes _3QTqg {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _3QTqg {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3E3Dz {
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
@keyframes _3E3Dz {
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
._3sYYO {
  position: absolute;
  height: 0.64em;
  width: 100%;
  bottom: 0;
  left: 0;
  -webkit-box-shadow: 0 -0.01em 0.03em 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 -0.01em 0.03em 0 rgba(0, 0, 0, 0.5);
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#000),
    color-stop(9%, transparent),
    color-stop(85%, transparent),
    to(#000)
  );
  background-image: linear-gradient(
    270deg,
    #000,
    transparent 9%,
    transparent 85%,
    #000
  );
}

._2i6ZC {
  height: 100%;
  width: 100%;
  padding: 0 0.16em;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-image: url(/assets/efeeea2f.png);
  background-size: 100% 100%;
  background-color: #161614;
}
._2i6ZC,
._2i6ZC ._4w7qY {
  display: -ms-flexbox;
  display: flex;
}
._2i6ZC ._4w7qY {
  position: absolute;
  right: 0.16em;
  bottom: 0.02em;
}
._2i6ZC ._4w7qY._2H5-V {
  padding-right: 0.88em;
}
._2i6ZC ._4w7qY ._3iAdX {
  position: absolute;
  right: 0;
  bottom: 0.16em;
  height: 0.56em;
  width: 0.56em;
  margin-left: 0.4em;
  border-radius: 50%;
  background-color: #bbaa7d;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  outline: none;
}
._1thN8:not(._8VUsd) ._2i6ZC ._4w7qY ._3iAdX {
  z-index: 15500;
  pointer-events: none;
}
._2i6ZC ._4w7qY ._3iAdX:hover {
  background-color: #7d7254;
}
._2i6ZC ._4w7qY ._3iAdX .cGk4U {
  height: 0.24em;
  width: 0.24em;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAQlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////8IX9KGAAAAFnRSTlMAmWU4jExBaiiQg3AjHgyGYFxHFw4IAHoIcgAAAMFJREFUOMu9k0kOwyAMRQkQ5pD5/lct5qNarYSoushbPTnEOI4tfmCJPszQa9N6u+Bz8HGpzydCkt4r6XqTyxqmE3GqJHoJSukSNBb1UFPUQm1RA/VFA1QV3aF7UQUN77w6F3WIuqJZt9taOdoJ4qDgUdVplE4ko7IApzFn06xMEk9xz3Z3zZWUCsZcK5du0adPtqlycne+cmhutYTK4YHhFaMix5/5PPjdPXhgevDIdeCh7cBj34EXpwOv3mB5/+YF7zcFoJq9syoAAAAASUVORK5CYII=);
  background-size: 100% 100%;
}
._2i6ZC ._4w7qY ._3iAdX .cGk4U.M0akA {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEXRSTlMAmQuPfh8Da0otlnsdUEE3Gqqm1L0AAAB9SURBVDjL7dJJCgMxDERRlYck3Rnvf9rYmKDFT0EfoL2x4P2NQHHkbd1AeS3fa//vTc/xfXZpFXTpPYabfgX9egkUcBT0LOgs6CzSWcBRwFGkm2LzvgrBWXiPUmfQvTcptzXeTJH7r229n/fhinJPR1EfMQt7H9NnYXxIxBdsrwSfLGNoWQAAAABJRU5ErkJggg==);
}
._2i6ZC ._4w7qY ._3iAdX .cGk4U.v_6hO {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAaVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8G612AAAAInRSTlMAvAb24jz6wCWHYPLva0Yy6+h7dm9mU01CLayYWUk3Kg8O9+w2eQAAAOJJREFUOMvFkkuywiAURNFLeEiA/IxJ/D57/4sU0BQqwZFV9iC5zTkFA2Dfzsj5+ImfyOWU54Mga0kMOb4TNLpTSOxyvCz8vyiXjWPgD+OYcgV9nuezFmqBV7FVGm9Gj9rzaNTon7tBPbGXTDVMbFs0F/aWS4PtPHfgkiWRHN19ameeGm3YP/LECKc0ore2SnFlbS8aN6zgskp4XP9XXbsstJ263uf1srB230SQ8qMwcIAPeUES7fdEMisYKH+vJitsULjngs0vBEb6z4djck8FPBRNLMaU8KGDLwcKpTTsO7kB6K4RgFxOeA8AAAAASUVORK5CYII=);
}
._2i6ZC .lDGVs {
  position: relative;
  margin-left: 0.32em;
  overflow: hidden;
}

@-webkit-keyframes _1WZXM {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1WZXM {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3nQ7h {
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
@keyframes _3nQ7h {
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
._2-okB > .__react_component_tooltip {
  border: 1px solid rgba(125, 114, 84, 0.51);
  padding: 0.25em 0.91667em;
  color: hsla(0, 0%, 100%, 0.87);
  font-size: 0.12em;
}
._2-okB > .__react_component_tooltip.type-dark {
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 1;
}
._2-okB > .__react_component_tooltip.show {
  opacity: 1;
}
._2-okB > .__react_component_tooltip.type-dark.place-bottom:after {
  border-style: solid;
  border-width: 0 0.58333em 0.75em;
  border-color: transparent transparent rgba(0, 0, 0, 0.8);
  left: 50%;
  margin-left: -0.54167em;
  top: -0.58333em;
}
._2-okB > .__react_component_tooltip.type-dark.place-bottom:before {
  border-color: transparent transparent rgba(125, 114, 84, 0.51);
  border-style: solid;
  border-width: 0 0.58333em 0.75em;
  left: 50%;
  margin-left: -0.54167em;
  top: -0.75em;
}
._2-okB > .__react_component_tooltip.type-dark.place-top:after {
  border-style: solid;
  border-width: 0.66667em 0.25em 0;
  border-color: rgba(0, 0, 0, 0.8) transparent transparent;
  left: 52%;
  margin-left: -0.54167em;
  bottom: -0.58333em;
}
._2-okB > .__react_component_tooltip.type-dark.place-top:before {
  border-style: solid;
  border-width: 0.66667em 0.25em 0;
  border-color: rgba(125, 114, 84, 0.51) transparent transparent;
  left: 52%;
  margin-left: -0.54167em;
  bottom: -0.66667em;
}
._2-okB > .__react_component_tooltip.type-dark.place-left:after {
  border-style: solid;
  border-width: 0.58333em 0 0.58333em 0.75em;
  border-color: transparent transparent transparent rgba(0, 0, 0, 0.8);
  top: 50%;
  margin-top: -0.54167em;
  right: -0.58333em;
}
._2-okB > .__react_component_tooltip.type-dark.place-left:before {
  border-style: solid;
  border-width: 0.58333em 0 0.58333em 0.75em;
  border-color: transparent transparent transparent rgba(125, 114, 84, 0.51);
  top: 50%;
  margin-top: -0.54167em;
  right: -0.75em;
}
._2-okB > .__react_component_tooltip.type-dark.place-right:after {
  border-style: solid;
  border-width: 0.25em 0.66667em;
  border-color: transparent rgba(0, 0, 0, 0.8) transparent transparent;
  top: 65%;
  margin-top: -0.54167em;
  left: -1.33333em;
}
._2-okB > .__react_component_tooltip.type-dark.place-right:before {
  border-style: solid;
  border-width: 0.25em 0.66667em;
  border-color: transparent rgba(125, 114, 84, 0.51) transparent transparent;
  top: 65%;
  margin-top: -0.54167em;
  left: -1.5em;
}

@-webkit-keyframes _1cdln {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1cdln {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3f3YJ {
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
@keyframes _3f3YJ {
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
._3iQ7x {
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  width: 2.75em;
}
._3iQ7x ._1I5uQ {
  height: 0.4em;
  margin-top: 0.05em;
  margin-left: 0.04em;
}
._3iQ7x ._1I5uQ .d75tV {
  width: 100%;
  height: 0.2em;
}
._3iQ7x ._1I5uQ .d75tV ._1pqvG {
  height: 100%;
  color: #bbaa7d;
  font-size: 0.16em;
  line-height: 1;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._3iQ7x ._1I5uQ ._2sv6d {
  width: 100%;
  height: 0.2em;
  display: -ms-flexbox;
  display: flex;
}
._3iQ7x ._1I5uQ ._2sv6d ._2HLqr {
  color: #fff;
  font-size: 0.2em;
  line-height: 1;
}
._3iQ7x ._1I5uQ ._2sv6d ._2tulf {
  width: 0.2em;
  height: 0.2em;
  margin: 0.01em 0 0 0.08em;
  border-radius: 50%;
  background: #7d7254
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAjVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8DizOFAAAALnRSTlMAw4D8n3hB+d/sCXEVTkcC8qbFGQX1tGQ9LNWunMdoWwwHveTTzaGSilQjEIUxz3nCaQAAAglJREFUWMPNl9lygzAMRUXB7EuAFJKSpem++v8/r1PZE8XBpJE70+a8wXDvIFmWZbhc0lIE6ziJoiReB6JMwcbVlDrPvEgaRF6Wj/XSLl90vrTgd4tjvdUg9OQkXmjobQZtLU9St6S3GZQz+vbaW4nNdrsRK++a3s5K0o8Nsn3wSVCkB0tSBMk+FZnSWwx2AcVawREV5SbYoX5kkDf67U0BVoob/UHzIi0GO62f9RVMUPWUorGB/v94CSdYxpMGmY4+h5Pk3oRB6atlnsMPzB+sBq0KzpvWU/1YDWoVf87Tk0Go8r9k6slAZaZn6slgoeqnYurJoMOHgqkng9zHFWDqkcMaCpl65CCFScXUk0Ea4R4FZ0pKoRsC+1cKzgS0Bm6svw1W4A72CAHuYL/dgDu4itv/MqAQ/jKJVNrxL5ZxoOqhQmL/d+1eyqlPgbM3E3XB0H07P+NJf2s2FAZzXPs7MFsag1eUZGA2VQYdRtCC2da5KRwAmAcLndAUNOtooyZIKWQersgbTn0Rfs083pF3NWu94AN/wIBUxXuPReQw4lSDRF7xiT9kvXcS+QCEPeZ96jHvCQjGoAm9nrrvKFLOqFs+6g8e9wlkDNsQNlIzkP7ccf+2WN3vx30BxBkXjl48D01EbxNj27OvPH7QggHz0lW/gQnv2jeMS4R18Wydr77NkwhTuFi+ANlhrAv8xuHKAAAAAElFTkSuQmCC)
    no-repeat 50%;
  background-size: 0.12em 0.12em;
  -webkit-box-shadow: 0 0.02em 0.02em 0 #100e0c;
  box-shadow: 0 0.02em 0.02em 0 #100e0c;
  cursor: pointer;
}
._3iQ7x ._1I5uQ ._2sv6d ._2tulf:hover {
  background-color: #bbaa7d;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAhFBMVEUAAAD+79X+79X979X+79X/79b//+X+79X/8Nb+7tX979b979X+7tX/8Nb/////79b/9df/9Nz/8NX+7tX+79T/8Nb/8Nf/8Nf/79j///n97tb/+dv//9v+7tX/8NX/7tX+79X+79X+79X979X979X+79X979X/79X/8df+7tX/79X+7tRz+SW4AAAAK3RSTlMAw/mA4HgJ7EHHoJz0SwJxGRVQ1bRkRT0sBaYOB/BoW72vrKSIzZJuI9Ix8bCJagAAAfxJREFUWMPNV9tygjAQ3VDuCIIKIlKtd9v8//91JkldIgG7cab1vIXZc4a9ZLMLrwu/8uLIDRwncKPYq3yj0dsQu5gyh2tw2LTo87mZvlwgu6uxWN7zjQIh44NgocY3CeQNH0WTI98kkL6j7YQl3ma73XgJm+DX9xT5fYHpzS5IZn4nJbMk4D+YKn5foI3R1+xeO8PYxK3g9wSKiEvMUzAinSuD6MgNAq3iT8oMBpCVGIy+gPp/t4YR1K5ZAOPHChhFwQYEUi5wWMEDrD6NArnMPxvlY/77Ao30v6DxUSCU8a+JfBSQkSmJfBRYyvrJiHwUWIhDSuSjQOGIDFjwebeGQgs+74QwyIh8FPCFBwlYoxJaM3sBTxSRby8QYw7sED0ZAhA9wgN7iH67AXuILG7/SwBd+MsgYmm7T6Rxj9WDhUT+74N9KfscHSdfJuyCof11PguBtd5QCGhF7j9Ab2kEzATlok65Q8oD9vFcP6bUEO4ASA8LYjVHp2lPGzZBFULK44q4ikHHEdak511hLR04igN9wABf+uvKIqKPONmOa6VPHbLWC645QB3zvlw1rKozcdCE0uEyg+gpadQ9KYPTLYCEYRuqiCvskU8Y96Xzvf77eOEovfO+u4EFoUYgrzxJ3qNQlq7mCjpIax/f1fBb5IbF85I/ufq+LL4B9OaieMtJwC8AAAAASUVORK5CYII=);
}
._3iQ7x ._1DOG3 {
  display: inline-block;
  cursor: pointer;
}
._3iQ7x ._1y0Tz {
  position: relative;
  top: -0.03em;
  border-radius: 50%;
  width: 0.56em;
  height: 0.56em;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  overflow: hidden;
  outline: none;
}
._3sYYO {
  position: absolute;
  height: 0.64em;
  width: 100%;
  bottom: 0;
  left: 0;
  -webkit-box-shadow: 0 -0.01em 0.03em 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 -0.01em 0.03em 0 rgba(0, 0, 0, 0.5);
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#000),
    color-stop(9%, transparent),
    color-stop(85%, transparent),
    to(#000)
  );
  background-image: linear-gradient(
    270deg,
    #000,
    transparent 9%,
    transparent 85%,
    #000
  );
}
</style>
