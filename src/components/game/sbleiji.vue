<template>
  <div class="IgmyS">
    <div class="cBC7E">最近结果</div>
    <div class="_31VX9">
      <div style="position: relative; overflow: hidden; width: 100%; height: 100%;">
        <div class="_2Gj3P WpQs6"
             style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
          <div class="OAAUJ">

            <template v-for="(one,index) in data">
              <div class="_1KiKz"
                   :key='index'>
                <div class="_1cvoS"
                     v-if='one.da==1||one.xiao==1?true:false'>
                  <div class="_1BojS">{{Number(one.dices[0])+Number(one.dices[1])+Number(one.dices[2])}}</div>
                  <div class="_1BojS">{{one.da==1?"11 - 17":"4-10"}}</div>
                </div>
                <div class="yK2u1">
                  <div class="_2M27y">
                    <div class="nzA04  _12Umb"
                         :class="paiclass[one.dices[0]]"></div>
                    <div class="nzA04  _12Umb"
                         :class="paiclass[one.dices[1]]"></div>
                    <div class="nzA04  _12Umb"
                         :class="paiclass[one.dices[2]]"></div>
                  </div>
                  <div class="_1BojS">{{one.da==1?"大": one.xiao==1?"小":"围"}}</div>
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
          <div class="wveDM MNcsK"
               style="position: relative; display: block; width: 100%; height: 30px; transform: translateY(0px);"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatCurrency} from '@/utils/deals'
export default {
  name: 'lhleiji',
  data () {
    return {
      data: {},
      paiclass: {1: '_3SXdD', 2: '_1djDV', 3: '_2mz_h', 4: '_2QLgR', 5: '_2WtR6', 6: '_3Xa6c'}
    }
  },
  methods: {
    onSBResultHistory: function (vo) {
      var self = this
      // console.log('累计==' + JSON.stringify(vo))
      for (var name in vo.history) {
        self.$set(self.data, name, formatCurrency(vo.history[name]))
      }
    }
  },
  mounted () {
    // this.global.addMessageListener('shaibao_desk_result_history', this.onResultHistory)
    var self = this; self.onSBResultHistory(self.$store.state.onSBResultHistory)
  },
  watch: {
    '$store.state.onSBResultHistory': function () { var self = this; self.onSBResultHistory(self.$store.state.onSBResultHistory) }
  }
}
</script>
<style>
@-webkit-keyframes AKKHd {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes AKKHd {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _2dBZ6 {
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
@keyframes _2dBZ6 {
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
._31VX9 {
  display: -ms-flexbox;
  display: flex;
  -ms-flex: 1 1;
  flex: 1 1;
}
.pJs08 {
  width: 2.56em;
  height: 1.99em;
}
.pJs08 ._1KiKz {
  height: 0.33em;
  padding: 0;
  border-bottom: 0.01em solid #272624;
}
.pJs08 .yK2u1 {
  padding: 0;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
.pJs08 ._2M27y {
  padding: 0.01em 0.03em 0 0.16em;
}
.pJs08 ._1BojS {
  width: 3.92857em;
  font-weight: 600;
}
:lang(id-id) .pJs08 ._1BojS,
:lang(ja-jp) .pJs08 ._1BojS,
:lang(th-th) .pJs08 ._1BojS,
:lang(vi-vn) .pJs08 ._1BojS {
  width: 4.58333em;
}
.pJs08 ._1BojS._3cY-1 {
  color: #ff0707;
}
.pJs08 ._1BojS._2H98t {
  color: #002bf7;
}
.pJs08 ._1BojS._1KHSa {
  color: #06f039;
}
.pJs08 ._1BojS._10P1z {
  color: #f7f0e8;
}
.OAAUJ {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: #040403;
}
._1KiKz {
  position: relative;
  height: 0.31em;
  width: 100%;
  border-bottom: 0.01em solid #272624;
}
._1KiKz:hover ._1cvoS {
  display: -ms-flexbox;
  display: flex;
}
._1cvoS {
  display: none;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0 0.08em;
  background-color: rgba(0, 0, 0, 0.6);
}
._1cvoS ._1BojS {
  color: #fff;
}
.yK2u1 {
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 0.08em;
}
._2M27y,
.yK2u1 {
  display: -ms-flexbox;
  display: flex;
}
._2M27y {
  -ms-flex-direction: row;
  flex-direction: row;
}
._12Umb._12Umb {
  height: 0.2em;
  width: 0.2em;
  margin-right: 0.04em;
}
._1BojS {
  width: 100%;
  font-size: 0.14em;
  color: hsla(0, 0%, 100%, 0.87);
  text-align: center;
}
:lang(id-id) ._1BojS,
:lang(ja-jp) ._1BojS,
:lang(th-th) ._1BojS,
:lang(vi-vn) ._1BojS {
  font-size: 0.12em;
  line-height: 1em;
}
.MNcsK {
  right: -0.01em;
  border-radius: 4px;
  background-color: rgba(125, 114, 84, 0.8);
}
.MNcsK:hover {
  background-color: hsla(44, 31%, 61%, 0.8);
}
@-webkit-keyframes ku1UC {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes ku1UC {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _1lKGP {
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
@keyframes _1lKGP {
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
._7K3O2 {
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2500;
  color: hsla(0, 0%, 100%, 0.87);
}
.yUiBb {
  width: 2.09em;
  height: 100%;
  border-right: 0.01em solid #24211a;
}
.IgmyS {
  width: 1.39em;
  height: 100%;
  -ms-flex-direction: column;
  flex-direction: column;
}
.IgmyS,
.IgmyS .cBC7E {
  display: -ms-flexbox;
  display: flex;
}
.IgmyS .cBC7E {
  width: 100%;
  height: 2em;
  font-size: 0.12em;
  background-color: #24211a;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
@-webkit-keyframes _1qmJ5 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1qmJ5 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _1llpR {
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
@keyframes _1llpR {
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
.NyE6o {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  z-index: 5002;
  color: hsla(0, 0%, 100%, 0.87);
  font-weight: 600;
  padding-top: 0.02em;
  padding-right: 0.04em;
}
.NyE6o._7MvHp .YI36v {
  padding-right: 0.09em;
  border-bottom: 1px solid #24211a;
}
.YI36v {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 0.31em;
}
.YI36v ._2MqBM {
  width: 0.34em;
  height: 100%;
}
.YI36v ._2MqBM,
.YI36v ._2MqBM ._3efyx {
  -ms-flex-pack: center;
  justify-content: center;
}
.YI36v ._2MqBM,
.YI36v ._2MqBM ._3efyx,
.YI36v ._123-1 {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.YI36v ._123-1 {
  -ms-flex-pack: end;
  justify-content: flex-end;
  letter-spacing: 0.00714em;
  width: 1.57143em;
  font-size: 0.14em;
}
._3Pupf,
._4k-Uu,
.cLnVB {
  width: 0.2em;
  height: 0.2em;
  border-radius: 50%;
}
.cLnVB {
  background-color: #06f039;
}
._4k-Uu {
  background-color: #ff101a;
}
._3Pupf {
  background-color: #002bf7;
}
._61lzO {
  color: #fff;
  font-size: 0.14em;
}
.cLnVB ._61lzO {
  text-shadow: 0 0 0.21429em #000;
}
.WMm9g ._61lzO {
  color: #ff101a;
}
._3fGDy ._61lzO {
  color: #002bf7;
}
</style>
