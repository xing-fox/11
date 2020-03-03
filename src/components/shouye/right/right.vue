<template>
  <div class="_15AXJ left-part"
       @mouseover="enter"
       @mouseleave="leave"
       role="presentation">
    <div class="_1KHYK"></div>
    <div class="_32V79 _2ZTNs"
         :class="active? '_3rBzh' : '' "></div>
    <div class="_2r6Vf "
         :class="active? 'm9yPc' : '' ">
      <span class="_2avQ6">电玩厅</span>
    </div>
    <div class="_27621">
      <div class="_1T7iQ"
           role="button"
           tabindex="0"
           v-show="active">
        <span class="_16jrb">立即进入</span>
      </div>
    </div>
    <div class="_PSNi _2N1wY "
         :class="active? '_3rBzh' : '' "></div>
    <div class="_3OX2I"></div>
    <div class="_1eTk-">
      <template v-for="imgone in imglist">
        <div class="_36TFn">
          <li class="u0MNT _3lsPA"
              role="presentation"><img class="_1bXpA"
                 alt="GA_69"
                 :src="imgone.src">
            <div class="_2sqI8">
              <div class="_3dyaM">{{imgone.name}}</div>
              <div class="ripple text-l center-block _3cEX7">
                <div class="_39at- ripple">进入游戏</div>
              </div>
            </div>
          </li>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'right',
  data () {
    return {
      imglist: [
        { src: require('../../../assets/banners/d07c250c-5d24-410a-6a27-408d2d271665@1x.jpg'), name: '武媚娘' },
        { src: require('../../../assets/banners/fb4d2288-bb64-4946-7226-d616ea4fb297@1x.jpg'), name: '龙之谕' },
        { src: require('../../../assets/banners/448d8fc0-3c6b-4b89-57b7-fa409bdb2ede@1x.jpg'), name: '天降财神' },
        { src: require('../../../assets/banners/d60284db-51cb-4d0b-6937-f48ae6bce88f@1x.jpg'), name: '金龙戏珠' },
        { src: require('../../../assets/banners/b458b749-bddd-4298-59b9-fedd7ca3a881@1x.jpg'), name: '西游 - 真假美猴王' },
        { src: require('../../../assets/banners/2ee00041-bdf9-476d-7361-acab89889c93@1x.jpg'), name: '宝石传奇' },
        { src: require('../../../assets/banners/1bcd9807-4404-4938-4ad5-42bfa0d198f6@1x.jpg'), name: '大四喜' },
        { src: require('../../../assets/banners/577982e9-923d-4ffd-7fec-938469f12da5@1x.jpg'), name: '金玉满堂' },
        { src: require('../../../assets/banners/80bac9f7-b825-4be1-4a7b-38b69d1d18cc@1x.png'), name: '玩转(西游)' },


        // { src: require('../../../assets/banners/d60284db-51cb-4d0b-6937-f48ae6bce88f@1x.jpg'), name: '发发发' },
        // { src: require('../../../assets/banners/4fdab92c-3b58-47ab-7062-3b28240e4220@1x.jpg'), name: '急速扑克' },  

      ],
      active: false
    }
  },
  methods: {
    enter: function () {
      this.active = true
      // console.log('in')
    },
    leave: function () {
      this.active = false
      // console.log('out')
    }
  }
}
</script>
<style>
@-webkit-keyframes W9AFf {
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
@keyframes W9AFf {
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
@-webkit-keyframes F0ey- {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes F0ey- {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._2W52N {
  height: 100%;
  width: 100%;
  background-image: url(../../../assets/4b599546.jpg);
  background-size: 100% 110%;
}
._2W52N ._1lpyl {
  width: 100%;
  padding-left: 0.53em;
  padding-right: 0.21em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: 0.65em;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
._2W52N ._1lpyl ._15AXJ {
  position: relative;
  height: 6.53em;
  width: 3.82em;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  background-size: 100%;
  cursor: pointer;
}
._2W52N ._1lpyl ._15AXJ ._PSNi {
  position: absolute;
  height: 2.24em;
  width: 100%;
  background-size: 100% 100%;
}
._2W52N ._1lpyl ._15AXJ ._PSNi._3zheu {
  height: 3.75em;
}
._2W52N ._1lpyl ._15AXJ ._32V79 {
  position: relative;
  height: 0.9em;
  width: 0.9em;
  background-size: 100% 100%;
  margin-top: 1.2em;
  z-index: 2;
}
._2W52N ._1lpyl ._15AXJ ._2r6Vf {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  height: 0.28em;
  z-index: 2;
  margin-top: -0.04em;
}
._2W52N ._1lpyl ._15AXJ ._2r6Vf.m9yPc {
  text-shadow: 0 0.02em 0.04em #ff00f8, 0 0 0.1em #ff00ef;
}
._2W52N ._1lpyl ._15AXJ ._2r6Vf._1ZjyC {
  text-shadow: 0 0.02em 0.04em #ffd000, 0 0 0.1em #ff00ef;
}
._2W52N ._1lpyl ._15AXJ ._2r6Vf._2G4i8 {
  text-shadow: 0 0.02em 0.04em #ff00f8, 0 0 0.1em #ff0061;
}
._2W52N ._1lpyl ._15AXJ ._2r6Vf ._2avQ6 {
  font-size: 0.2em;
  color: hsla(0, 0%, 100%, 0.87);
}
._2W52N ._1lpyl ._15AXJ ._27621 {
  position: relative;
  width: 1.2em;
  height: 0.24em;
  margin-top: 0.05em;
  padding-bottom: 0.02em;
  z-index: 2;
}
._2W52N ._1lpyl ._15AXJ ._27621 ._1T7iQ {
  width: 100%;
  height: 100%;
  border-radius: 0.12em;
  -webkit-box-shadow: 0 0.02em 0.04em 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 0.02em 0.04em 0 rgba(0, 0, 0, 0.5);
  background-color: #7d7254;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}
._2W52N ._1lpyl ._15AXJ ._27621 ._1T7iQ:hover {
  background-color: #bbaa7d;
  color: #fff;
}
._2W52N ._1lpyl ._15AXJ ._27621 ._1T7iQ ._16jrb {
  font-size: 0.14em;
  color: hsla(0, 0%, 100%, 0.87);
}
._2W52N ._1lpyl ._1eTk- {
  position: relative;
  height: 3.82em;
  width: 3.82em;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  margin-top: 0.08em;
  z-index: 2;
}
.Firefox ._2W52N ._1lpyl ._1eTk- {
  width: 3.83em;
}
._2W52N ._1lpyl ._1eTk- ._36TFn {
  position: relative;
  height: 1.22em;
  width: 1.22em;
  background-size: 100% 100%;
  margin-right: 0.08em;
  margin-bottom: 0.08em;
}
._2W52N ._1lpyl ._1eTk- ._36TFn.puOeU:first-child {
  height: 2.52em;
  width: 2.52em;
}
._2W52N ._1lpyl ._1eTk- ._36TFn.puOeU:nth-child(2),
._2W52N ._1lpyl ._1eTk- ._36TFn.puOeU:nth-child(3) {
  margin-right: 0;
}
._2W52N ._1lpyl ._1eTk- ._36TFn.puOeU:nth-child(3) {
  position: absolute;
  right: 0;
  top: 1.3em;
}
._2W52N ._1lpyl ._1eTk- ._36TFn.puOeU:nth-child(4),
._2W52N ._1lpyl ._1eTk- ._36TFn.puOeU:nth-child(5),
._2W52N ._1lpyl ._1eTk- ._36TFn.puOeU:nth-child(6) {
  margin-bottom: 0;
}
._2W52N ._1lpyl ._1eTk- ._36TFn:nth-child(3),
._2W52N ._1lpyl ._1eTk- ._36TFn:nth-child(6),
._2W52N ._1lpyl ._1eTk- ._36TFn:nth-child(9) {
  margin-right: 0;
}
._2W52N ._1lpyl ._1eTk- ._36TFn:nth-child(7),
._2W52N ._1lpyl ._1eTk- ._36TFn:nth-child(8),
._2W52N ._1lpyl ._1eTk- ._36TFn:nth-child(9) {
  margin-bottom: 0;
}
._38ffd {
  background-image: url(../../../assets/54f57ad4.png);
}
._38ffd._3rBzh {
  background-image: url(../../../assets/5b9237e3.png);
}
._2W52N ._1lpyl ._15AXJ .gHJIJ {
  height: 3.4em;
  background-image: url(../../../assets/fcefb055.png);
}
._2W52N ._1lpyl ._15AXJ ._3Ds4v,
._2W52N ._1lpyl ._15AXJ .gHJIJ {
  position: absolute;
  width: 4.2em;
  background-size: 100% 100%;
  top: -0.59em;
}
._2W52N ._1lpyl ._15AXJ ._3Ds4v {
  height: 3.3em;
  background-image: url(../../../assets/cf2fe6b2.png);
  right: -0.19em;
}
._2W52N ._1lpyl ._15AXJ ._77Szs {
  -webkit-box-shadow: 0.04em 0.04em 0.04em 0 rgba(0, 0, 0, 0.31);
  box-shadow: 0.04em 0.04em 0.04em 0 rgba(0, 0, 0, 0.31);
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(
    181deg,
    hsla(54, 28%, 57%, 0.5),
    hsla(53, 27%, 53%, 0)
  );
  border-image-slice: 1;
}
._2W52N ._1lpyl ._15AXJ ._77Szs._3rBzh {
  width: 4.2em;
  top: -0.1em;
  left: -0.12em;
  background-image: url(../../../assets/a13aa8b9.png);
  -webkit-box-shadow: inherit;
  box-shadow: inherit;
  border: 0;
}
._2ZTNs {
  background-image: url(../../../assets/bb38ab78.png);
}
._2ZTNs._3rBzh {
  background-image: url(../../../assets/dbdb06dd.png);
}
._2W52N ._1lpyl ._15AXJ ._332jx {
  height: 3.4em;
  background-image: url(../../../assets/2b37b140.png);
}
._2W52N ._1lpyl ._15AXJ ._3OX2I,
._2W52N ._1lpyl ._15AXJ ._332jx {
  position: absolute;
  width: 4.2em;
  background-size: 100% 100%;
  top: -0.59em;
}
._2W52N ._1lpyl ._15AXJ ._3OX2I {
  height: 3.3em;
  background-image: url(../../../assets/d0f0af25.png);
  right: -0.19em;
}
._2W52N ._1lpyl ._15AXJ .bcZCJ {
  -webkit-box-shadow: 0.04em 0.04em 0.04em 0 rgba(0, 0, 0, 0.31);
  box-shadow: 0.04em 0.04em 0.04em 0 rgba(0, 0, 0, 0.31);
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(
    181deg,
    hsla(54, 28%, 57%, 0.5),
    hsla(53, 27%, 53%, 0)
  );
  border-image-slice: 1;
}
._2W52N ._1lpyl ._15AXJ .bcZCJ._3rBzh {
  width: 4.2em;
  top: -0.1em;
  left: -0.12em;
  background-image: url(../../../assets/b4adb64d.png);
  -webkit-box-shadow: inherit;
  box-shadow: inherit;
  border: 0;
}
._3pOou {
  background-image: url(../../../assets/21f9e99a.png);
}
._3pOou._3rBzh {
  background-image: url(../../../assets/cac56ecf.png);
}
._2W52N ._1lpyl ._15AXJ ._1KHYK {
  position: absolute;
  height: 3.4em;
  width: 4.2em;
  background-image: url(../../../assets/efa12a61.png);
  background-size: 100% 100%;
  top: -0.59em;
}
._2W52N ._1lpyl ._15AXJ ._332jx {
  left: -0.18em;
}
._2W52N ._1lpyl ._15AXJ .gHJIJ {
  height: 7.3em;
  width: 3.99em;
  top: -0.66em;
}
._2W52N ._1lpyl ._15AXJ .JJEsc {
  position: absolute;
  height: 3.3em;
  width: 4.2em;
  background-image: url(../../../assets/8ab65864.jpg);
  background-size: 100% 100%;
  top: -0.59em;
  pointer-events: none;
  width: 100%;
  height: 2.7em;
  top: 0;
}
._2W52N ._1lpyl ._15AXJ ._3Ds4v {
  top: -0.49em;
  right: -0.09em;
  height: 7.02em;
  width: 3.99em;
  z-index: 1;
}
._2W52N ._1lpyl ._15AXJ ._2N1wY {
  -webkit-box-shadow: 0.04em 0.04em 0.04em 0 rgba(0, 0, 0, 0.31);
  box-shadow: 0.04em 0.04em 0.04em 0 rgba(0, 0, 0, 0.31);
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(
    181deg,
    hsla(54, 28%, 57%, 0.5),
    hsla(53, 27%, 53%, 0)
  );
  border-image-slice: 1;
}
._2W52N ._1lpyl ._15AXJ ._2N1wY._3rBzh {
  width: 4.2em;
  top: -0.1em;
  left: -0.12em;
  background-image: url(../../../assets/2c7d273c.png);
  -webkit-box-shadow: inherit;
  box-shadow: inherit;
  border: 0;
}
._2W52N ._1lpyl ._15AXJ ._77Szs._3rBzh {
  top: -0.13em;
  left: -0.13em;
}

@-webkit-keyframes _1E4wF {
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
@keyframes _1E4wF {
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

li {
  list-style: none;
  list-style-type: none;
}
.u0MNT {
  width: 100%;
  height: 100%;
  -webkit-transition: -webkit-transform 0.3s ease;
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
.u0MNT._14OiR {
  pointer-events: none;
}
.u0MNT._3lsPA {
  -webkit-box-shadow: 0.02em 0.04em 0.04em 0 rgba(0, 0, 0, 0.7);
  box-shadow: 0.02em 0.04em 0.04em 0 rgba(0, 0, 0, 0.7);
}
.u0MNT ._1P88j {
  position: absolute;
  left: -0.01em;
  top: 0;
  width: 0.36em;
  height: 0.67em;
  background-image: url(/assets/391f29dd.png);
  background-size: 100% 100%;
}
.zh-TW .u0MNT ._1P88j {
  background-image: url(/assets/47edb1e9.png);
}
.zh-CN .u0MNT ._1P88j {
  background-image: url(/assets/c3dd102d.png);
}
.u0MNT ._1bXpA {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
}
.u0MNT ._2sqI8 {
  position: relative;
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgba(36, 32, 26, 0.9);
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-transition: -webkit-transform 0.3s ease;
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
  z-index: 1;
}
.u0MNT ._2sqI8,
.u0MNT ._2sqI8 ._3dyaM {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.u0MNT ._2sqI8 ._3dyaM {
  line-height: 1.2;
  font-size: 0.14em;
  color: hsla(0, 0%, 100%, 0.87);
  text-align: center;
}
.u0MNT ._2sqI8 ._6s43Z {
  display: -ms-flexbox;
  display: flex;
  width: 0.8em;
  height: 0.12em;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 0.09em;
}
.u0MNT ._2sqI8 ._6s43Z ._1PZc6 {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAodJREFUOBHFlMtrE0EYwOex2VfTFU2rpsamVUur4jZtA14KllBpUSpVsH+FJw+iUGEPPVR78iJ4EXqNHiqioi0kF09B8EGtscZWkIgGWihms2ke68xsNtl0G1Pw4JDZ75vv8fu+mdksAP9jfHqhqXTupTa3l6ADB8W7lbjxZvGoWcDyknbK6+XG6KR6s/imwPZ9wqwNIfqcrTeSfwUuP7l5gnQ2AUwT0OlVPBfev7zV1whG7Q2BpmlCn987AwiLTRpNoIfaWu9QH13uNmBM07i20JYfCUpQknGvxKN+nscDvID7EQStgKSybBtBpQmyRr68auSLHwsl88O2UVrR9Xxqo4X/wn32p6Haeeyh4MGjVmYFwMrTrUL6Y13CiiRxLaKIQqIkhOwujZz4FvzMDLO6sZjGqYq0IPDoYh2UeemeicJ0R7eVNSBVdL2YWP9ujIQnNB3TCvPz8bLcMRwdPM6pHIbWoVcZVcVqxgkmluzv4uvV1K/I2SuzORrAgFSJx+Pl8Oj+xwHlcJ+Hw6epzdUVM9bsuWxhKZH5MR6ZvGfscNlLAKLRq3isN5zACA9YB2f57B0CaB1BoVhOvkrm1KkpbbuWXe3BaQJg693cV4RgNwPaLufOiV4qmWlFvXHEdtvS9R7SC0IIERgdJJMNIumFE51O+sAYdjx9oMnM7Xi4gEHJ46tlUmA9lOba0KOBfMDBYqoLKJt8lwWxQIUCeLSW3uz8tp4Jkpd5wS5GobIk9uwEuj5fgsSRGzZB2QTPNzb1a13nbq85ki6/WZw+2e1T7vMeOCLw+AzxPXP4gQvIc0jK5ks97YPXUwpkV+qMB0PnZ1bIfzmSXJweUmTxUp3zXxe7fST+AKQcxZ8CJPQUAAAAAElFTkSuQmCC);
}
.u0MNT ._2sqI8 ._6s43Z ._1PZc6,
.u0MNT ._2sqI8 ._6s43Z ._2hv9t {
  width: 0.12em;
  height: 0.12em;
  background-position: 50%;
  background-size: contain;
  background-repeat: no-repeat;
}
.u0MNT ._2sqI8 ._6s43Z ._2hv9t {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAglJREFUOBFjYKAyYCbGvHWzS/K+MQhz3Lp16yEh9SyEFIDkVWT56v///38ByHQmpJ6JkII1M4ozlKT5hIAGOvn5+VkTUk/QQGU5/haYIX///q2HsXHReA1cO7skWVWWTxhJs6uvr68FEh+DidNAoBcZlaX52tF1/Pv3DxSejOjiMD7j8qlFsqwsDD7sbMwm3BysGrw8bHICPOzCwvzsHGysTHCN4RW7YXoYGBkZvwE5d4D4NhDfAtFAsdscHByXWVhZGLn11UR6JUU4OYESRAGgC7mACvWgGKbnEpDhwhSS3nvj/LVXek9efgHZShYAuu4cKyur0+rVq1+DwzAsu//OpbufNR+//PKFVBOBhp1iYWFxXr9+/VuQXnikhKV3Prp8+63GoxdfPpFg6DF+fn7XDRs2fIDpgRsIEgjL7H964eprtfeffv6BKcBDP+Ti4nJfunQpigNQDARpjiqY+JKVlQlDHN1goFe5gWGGEUQYGtfMKtTm4WTFEEc3EBjTIsCsKI4ujqGRiYHRE10RLj4wkeugy2EYyMXBaomsCBTzu44/KgV60QUUo8hyQDaGgRjFFx8PuxZI04u3335cvfeh3z+pqwrJEHNgXg4AercFiLWB4iCMAjBcyMTEyLHv9NOZ516p8KAZBta4efPmDSYmJnpMTExxQAFuFNOwcYA2w/MvNnlkMWxqAWq+odKmXh+gAAAAAElFTkSuQmCC);
}
.u0MNT ._2sqI8 ._6s43Z ._3TCDG {
  width: 0.12em;
  height: 0.12em;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAmtJREFUOBHFlM2LklEUxu+rr+M3FEWboJzCFoMSUzARCMnUokVBEoiCiEsXuq5pCKJF68BNEKIIoummRf9FtIqxxVANDUFDkZnf3z3PxTvY6IwDLbpwuNdzn/O755x7X4X4HyMcDt+PxWL3jnO2fiyRrm8sLS0NoH29SG9YJIhGo3dsNttVp9N5LZlM3lqkXwgcj8eP7Xa7sFgsAllu/hMwEoncBmyNMF3Xhdls9icSCf9R0KMy1AB7hFKFyWQSBoNBzvAxS+0wqBYIBM6glOvIwg1bNhqNF2AuZHQefitMZqdpmkD5Yjgcil6v14LtYP15MBh8gn3sdrvbzWbzLeJ0S7/ff45yXCxNlQeozIogGgdn+qGx4aAVAFcAE4AJMLaxd9NQLpe/YOGjA6fKQAbRWKaCyY0JlH6loR9xW7AbxWJx10hHpVKpe73eUqvVujsajU7zAhSQ+/MGdKLT6YharfYeGa7ncrk96vYvpVAo7OFkX6PR2IIJlsKgeYO9REWi3W6/g86fyWS+K90+kA5Af6CXPpz8jc1n4LzBg2C72FtPp9M/pzV/AbmRzWZ/YbKo3hE6Ach56hBbKpX6PQ3jegYYCoVc6N8JJZw8E9kvXhp/c+DAU/F4/KzSqXnmzwEXssYLYYbsExuPXsk1H7jVauUXI+Mxr2LxVcE4zwCRwSrLwiOVMNz8B+iewKdVq9WneH+XHA6HBKMVl7H3hiA1ZoC4NU+9XidwB6Jn+Xz+pRJjfhUMBuMAb+AlnEPGV6b25HKmh+iTA1k+cLvdFw/AZECpVHrh8XiWoXkI6MmDwHm/D/3w54hntH8AMXch/FI7dNYAAAAASUVORK5CYII=);
  background-position: 50%;
  background-size: contain;
  background-repeat: no-repeat;
}
.u0MNT ._2sqI8 ._3cEX7 {
  width: 1.16em;
  height: 0.23em;
  border-radius: 0.12em;
  background-color: #7d7254;
  color: hsla(0, 0%, 100%, 0.87);
  -webkit-transition: background 0.3s ease;
  transition: background 0.3s ease;
  margin-top: 0.09em;
}
.u0MNT ._2sqI8 ._3cEX7:hover {
  background-color: #bbaa7d;
  color: #fff;
}
.u0MNT ._2sqI8 ._3cEX7 ._39at- {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: 0.14em;
}
.u0MNT:hover ._2sqI8 {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(35, 32, 20, 0.9)),
    to(rgba(35, 32, 20, 0.9))
  );
  background: linear-gradient(
    90deg,
    rgba(35, 32, 20, 0.9),
    rgba(35, 32, 20, 0.9)
  );
}
.u0MNT:hover ._2sqI8 ._3dyaM {
  margin-top: 4px;
}
</style>
