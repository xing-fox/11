<template>
  <!-- <div class="_2tyhk AJLuo">
    <div class="_18Xn2"> -->
  <div class="_1fklX _2Bd3I  _2F9u9"
       :class='saibaoclass'>
    <div class="kbIpK o7-cc"></div>
    <div class="_2e-94"></div>
    <!-- 第一页 -->
    <template v-if='saibaopage==1?true:false'>
      <template v-for="(dian,index) in saibao.dian">
        <div class="_3VtTn _187vN undefined"
             :key='index'
             data-betcode="DIEVEN"
             role="presentation">
          <!-- <div class="_2bhq2"
                v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['long'])?true:false">
              <div class="_3f0jL">
                {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['long']:0}}
              </div>
            </div> -->
        </div>
      </template>
    </template>
    <!-- 第二页 -->
    <template v-if='saibaopage==2?true:false'>
      <div class="_3VtTn _38csR undefined"
           data-betcode="PAYTABLE-DITW"
           role="presentation"></div>
      <div class="_3VtTn _1DaCP undefined"
           data-betcode="DITW12"
           role="presentation"></div>
      <div class="_3VtTn _1DaCP undefined"
           data-betcode="DITW13"
           role="presentation"></div>
      <div class="_3VtTn _1DaCP undefined"
           data-betcode="DITW14"
           role="presentation"></div>
      <div class="_3VtTn _1DaCP undefined"
           data-betcode="DITW15"
           role="presentation"></div>
      <div class="_3VtTn _1DaCP _5Xfh5"
           data-betcode="DITW16"
           role="presentation"></div>
      <div class="_3VtTn _1DaCP undefined"
           data-betcode="DITW23"
           role="presentation"></div>
      <div class="_3VtTn _1DaCP undefined"
           data-betcode="DITW24"
           role="presentation"></div>
      <div class="_3VtTn _1DaCP undefined"
           data-betcode="DITW25"
           role="presentation"></div>
      <div class="_3VtTn _1DaCP undefined"
           data-betcode="DITW26"
           role="presentation"></div>
      <div class="_3VtTn _1DaCP _9pvuI"
           data-betcode="DITW34"
           role="presentation"></div>
      <div class="_3VtTn _1DaCP _77OtC"
           data-betcode="DITW35"
           role="presentation"></div>
      <div class="_3VtTn _1DaCP LiHrO"
           data-betcode="DITW36"
           role="presentation"></div>
      <div class="_3VtTn _1DaCP cR3MJ"
           data-betcode="DITW45"
           role="presentation"></div>
      <div class="_3VtTn _1DaCP _1lOMp"
           data-betcode="DITW46"
           role="presentation"></div>
      <div class="_3VtTn _1DaCP z75Rz"
           data-betcode="DITW56"
           role="presentation"></div>
    </template>
    <!-- 第三页 -->
    <template v-if='saibaopage==3?true:false'>
      <div class="_3VtTn _38csR undefined"
           data-betcode="PAYTABLE-DIDOU"
           role="presentation"></div>
      <div class="_3VtTn _1Uauv undefined"
           data-betcode="DIDOU1"
           role="presentation"></div>
      <div class="_3VtTn _1Uauv undefined"
           data-betcode="DIDOU2"
           role="presentation"></div>
      <div class="_3VtTn _1Uauv undefined"
           data-betcode="DIDOU3"
           role="presentation"></div>
      <div class="_3VtTn _1Uauv undefined"
           data-betcode="DIDOU4"
           role="presentation"></div>
      <div class="_3VtTn _1Uauv undefined"
           data-betcode="DIDOU5"
           role="presentation"></div>
      <div class="_3VtTn _1Uauv _1LqFS"
           data-betcode="DIDOU6"
           role="presentation"></div>
      <div class="_3VtTn _38csR undefined"
           data-betcode="PAYTABLE-DIONE"
           role="presentation"></div>
      <div class="_3VtTn _1ArGi _3N96s"
           data-betcode="DIONE1"
           role="presentation"></div>
      <div class="_3VtTn _1ArGi _2bN7z"
           data-betcode="DIONE2"
           role="presentation"></div>
      <div class="_3VtTn _1ArGi iG2xB"
           data-betcode="DIONE3"
           role="presentation"></div>
      <div class="_3VtTn _1ArGi _21Dga"
           data-betcode="DIONE4"
           role="presentation"></div>
      <div class="_3VtTn _1ArGi _1lsO-"
           data-betcode="DIONE5"
           role="presentation"></div>
      <div class="_3VtTn _1ArGi obWjS"
           data-betcode="DIONE6"
           role="presentation"></div>
    </template>
    <!-- 第三页 -->
    <template v-if='saibaopage==4?true:false'>
      <div class="_3VtTn D3Su3 undefined"
           data-betcode="PAYTABLE-DITRI-1"
           role="presentation"></div>
      <div class="_3VtTn _2VPbQ undefined"
           data-betcode="DITRI1"
           role="presentation"></div>
      <div class="_3VtTn _2VPbQ undefined"
           data-betcode="DITRI2"
           role="presentation"></div>
      <div class="_3VtTn _2VPbQ xf_s2"
           data-betcode="DITRI3"
           role="presentation"></div>
      <div class="_3VtTn D3Su3 undefined"
           data-betcode="PAYTABLE-DITRI-0"
           role="presentation"></div>
      <div class="_3VtTn uXUnj uXUnj"
           data-betcode="DITRI0"
           role="presentation"></div>
      <div class="_3VtTn D3Su3 undefined"
           data-betcode="PAYTABLE-DITRI-2"
           role="presentation"></div>
      <div class="_3VtTn _2VPbQ _28hsC"
           data-betcode="DITRI4"
           role="presentation"></div>
      <div class="_3VtTn _2VPbQ Wzic-"
           data-betcode="DITRI5"
           role="presentation"></div>
      <div class="_3VtTn _2VPbQ _3ocZP"
           data-betcode="DITRI6"
           role="presentation"></div>
    </template>
  </div>
  <!-- </div>
    <div class="_2IpHJ"></div>
    <div class="jfyQz"></div>
  </div> -->
</template>
<script>
export default {
  name: 'saibaodesk',
  props: ['tosaibao', 'saibaostatus'],
  saibao:{dian:{4:'0',5:'',6:'',7:'',8:'',9:'',10:'',11:'',12:'',13:'',14:'',15:'',16:'',17:'',18:''}}
  data () {
    return {
      saibaopage: this.tosaibao,
      sbstatus: this.saibaostatus,
      saibaoclass: '',
      pageclass: {'1': ' foXRX ', '2': ' _1LySk ', '3': ' _188Gw ', '4': ' _2c62g '}
    }
  },
  methods: {
    setsaibaoclass: function () {
      this.saibaoclass = this.pageclass[this.saibaopage] + ' ' + this.sbstatus
    }
  },
  mounted () {
    this.setsaibaoclass()
  },
  watch: {
    'tosaibao': function () {
      this.saibaopage = this.tosaibao
      console.log(this.saibaopage)
      this.setsaibaoclass()
    },
    'saibaostatus': function () {
      this.sbstatus = this.saibaostatus
      this.setsaibaoclass()
      console.log(this.saibaostatus)
    }
  }
}
</script>
<style>
@-webkit-keyframes _19tZR {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _19tZR {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _19WVl {
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
@keyframes _19WVl {
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
@-webkit-keyframes _3dkLo {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes _3dkLo {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._1fklX {
  display: -ms-flexbox;
  display: flex;
  width: 3.48em;
  height: 100%;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  cursor: pointer;
}

._1fklX._2Bd3I._2c62g {
  -ms-flex-direction: column;
  flex-direction: column;
}
._1fklX._1DQe0,
._1fklX._1XlEI {
  pointer-events: none;
}
._2e-94,
.kbIpK {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

.kbIpK.o7-cc {
  background-image: url(../../../assets/f45e90c9.png);
}
._2Bd3I._1LySk ._2e-94 {
  background-image: url(../../../assets/38ba4cea.png);
}
._2Bd3I._2c62g ._2e-94 {
  background-image: url(../../../assets/c1790110.png);
}

:lang(zh-CN) ._2Bd3I.foXRX ._2e-94 {
  background-image: url(../../../assets/7fdf4d88.png);
}

:lang(zh-CN) ._2Bd3I._188Gw ._2e-94 {
  background-image: url(../../../assets/eaf28f10.png);
}
._3VtTn {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  border-color: hsla(0, 0%, 100%, 0.15);
  border-style: solid;
  border-width: 0 0.01em 0.01em 0;
  background-clip: content-box;
  cursor: inherit;
}
._3VtTn:hover {
  background-color: hsla(0, 0%, 100%, 0.35);
}
._3VtTn:first-child ._3lElM._3yh-Y {
  margin-left: 0.35em;
}
._3VtTn:last-child ._3lElM._1hSpE {
  margin-left: -0.35em;
}
._1GlKe._3VtTn,
._1LqFS._3VtTn,
._1tYFT._3VtTn,
._2rwfT._3VtTn,
._2xJdD._3VtTn,
._3Ln9B._3VtTn,
._3ocZP._3VtTn,
._3PZME._3VtTn,
._5Xfh5._3VtTn,
._8EeBt._3VtTn,
._8nHYK._3VtTn,
._9pvuI._3VtTn,
._14rGy._3VtTn,
._28hsC._3VtTn,
._38csR._3VtTn,
.obWjS._3VtTn,
.Wzic-._3VtTn,
.z75Rz._3VtTn {
  border-right: 0.01em solid transparent;
}
._1ggHm._3VtTn,
._1lOMp._3VtTn,
._1lsO-._3VtTn,
._1tYFT._3VtTn,
._2bN7z._3VtTn,
._2dZlh._3VtTn,
._2ReeW._3VtTn,
._2rwfT._3VtTn,
._3_z2S._3VtTn,
._3f0ig._3VtTn,
._3JONc._3VtTn,
._3KFXv._3VtTn,
._3Ln9B._3VtTn,
._3N96s._3VtTn,
._3ocZP._3VtTn,
._3PZME._3VtTn,
._11_j6._3VtTn,
._21Dga._3VtTn,
._77OtC._3VtTn,
.Bz0qm._3VtTn,
.cR3MJ._3VtTn,
.iG2xB._3VtTn,
.LiHrO._3VtTn,
.obWjS._3VtTn,
.TXRxL._3VtTn,
.uXUnj._3VtTn,
.woPRp._3VtTn,
.xf_s2._3VtTn,
.z75Rz._3VtTn {
  border-bottom: 0.01em solid transparent;
}
._2bG3i {
  background-color: hsla(0, 0%, 100%, 0.35);
}
@-webkit-keyframes _3qNdY {
  0% {
    background-color: transparent;
  }
  50% {
    background-color: hsla(0, 0%, 100%, 0.35);
  }
  to {
    background-color: transparent;
  }
}
@keyframes _3qNdY {
  0% {
    background-color: transparent;
  }
  50% {
    background-color: hsla(0, 0%, 100%, 0.35);
  }
  to {
    background-color: transparent;
  }
}
._13246 {
  -webkit-animation: _3qNdY 2s infinite;
  animation: _3qNdY 2s infinite;
}
._2bhq2,
._26bkp {
  position: absolute;
}

.IE ._2bhq2 {
  left: 0;
  right: 0;
  width: 0.53em;
  margin: 0 auto;
}
._3f0jL {
  width: 100%;
  height: 1.38462em;
  line-height: 1.3;
  font-size: 0.13em;
  text-align: center;
  color: #fff;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(5, 19, 13, 0)),
    color-stop(23%, rgba(5, 19, 13, 0.9)),
    color-stop(75%, rgba(5, 19, 13, 0.9)),
    to(rgba(5, 19, 13, 0))
  );
  background-image: linear-gradient(
    270deg,
    rgba(5, 19, 13, 0),
    rgba(5, 19, 13, 0.9) 23%,
    rgba(5, 19, 13, 0.9) 75%,
    rgba(5, 19, 13, 0)
  );
  -webkit-box-shadow: 0 -0.01em -0.03em rgba(0, 0, 0, 0.5);
  box-shadow: 0 -0.01em -0.03em rgba(0, 0, 0, 0.5);
}
._26bkp {
  z-index: 2000;
  -webkit-transform: translateY(0.46em);
  transform: translateY(0.46em);
}
._1DxU9._3VtTn,
._8EeBt._3VtTn {
  width: 50%;
  height: 0.6em;
}
._3Ln9B._3VtTn,
._11_j6._3VtTn,
.woPRp._3VtTn {
  width: 33.33333%;
  height: 0.44em;
}
._3Ln9B ._2bhq2,
._3Ln9B ._26bkp,
._11_j6 ._2bhq2,
._11_j6 ._26bkp,
.woPRp ._2bhq2,
.woPRp ._26bkp {
  bottom: -0.04em;
}
._3Ln9B ._26bkp,
._11_j6 ._26bkp,
.woPRp ._26bkp {
  -webkit-transform: translateY(0.38em);
  transform: translateY(0.38em);
}
._2rwfT._3VtTn,
._3KFXv._3VtTn {
  width: 1.28em;
}
._3f0ig._3VtTn {
  width: 0.92em;
}
.O0eAd {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
}
.O0eAd ._2rQ0X._1-Jpy {
  background-color: #ff101a;
}
.O0eAd ._2rQ0X._32h-3 {
  background-color: #040403;
}
._2ScO7 ._3VtTn {
  height: 0.61em;
}
._1GlKe._3VtTn,
._2Q5Fv._3VtTn {
  width: 0.6em;
}
._1-Jpy._3VtTn,
._32h-3._3VtTn {
  width: 1.14em;
}
._2rQ_N._3VtTn,
._2TiZS._3VtTn,
._14rGy._3VtTn {
  width: 33.33333%;
}
._1tYFT._3VtTn,
._3_z2S._3VtTn {
  width: 50%;
}
._38csR,
.D3Su3 {
  height: 0.17em;
  background-color: rgba(13, 13, 12, 0.3);
  pointer-events: none;
}
._38csR {
  width: 100%;
}
.D3Su3 {
  width: 33.33333%;
}
._1sPXY._3VtTn,
._1xYIz._3VtTn,
._187vN._3VtTn,
.JxBqa._3VtTn {
  height: 0.66em;
}
._1sPXY._3VtTn,
._187vN._3VtTn {
  width: 0.56em;
}
._1xYIz._3VtTn,
.JxBqa._3VtTn {
  width: 1.18em;
}
._35xHU._3VtTn {
  width: 14.28571%;
  height: 0.58em;
}
._1DaCP._3VtTn {
  width: 20%;
  height: 0.55em;
}
._1ArGi._3VtTn,
._1Uauv._3VtTn {
  width: 16.66667%;
  height: 0.74em;
}
._2VPbQ._3VtTn {
  width: 33.33333%;
  height: 0.55em;
}
.uXUnj._3VtTn {
  width: 33.33333%;
  height: 1.65em;
}
</style>
