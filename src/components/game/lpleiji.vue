<template>
  <div class="IgmyS">
    <div class="cBC7E">最近结果</div>
    <div class="_11hTi">
      <div style="position: relative; overflow: hidden; width: 100%; height: 100%;">
        <div class="_2Gj3P WpQs6"
             style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
          <div class="_1DN2_">
            <template v-for="( one,index) in data">
              <div class="_1XiXP"
                   :key='index'>
                <div class="WOPxX">
                  <div class="_2EEVk">{{one.da==1?"大":"小"}}</div>
                  <div class="_2EEVk">{{one.da==1?"19 - 36":"1-18"}}</div>
                </div>
                <div class="SRg90">
                  <div class="_3JjSr "
                       :class='one.hong==1?"_2v_CO":""'>
                    <div class="_2EEVk _3AMkE">{{one.ball}}</div>
                  </div>
                  <div class="_103VE">
                    <div class="_2EEVk">{{one.dan==1?"单":"双"}}</div>
                  </div>
                  <div class="_103VE">
                    <div class="_2EEVk">{{one.zu_1==1?"组1":one.zu_2==1?"组2":"组3"}}</div>
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
          <div class="wveDM _2hj5_"
               style="position: relative; display: block; width: 100%; height: 30px; transform: translateY(0px);"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatCurrency} from '@/utils/deals'
export default {
  name: 'LpLeiJi',
  data () {
    return {
      data: {}
    }
  },
  methods: {
    onLPResultHistory: function (vo) {
      var self = this
      // console.log('累计==' + JSON.stringify(vo))
      for (var name in vo.history) {
        self.$set(self.data, name, formatCurrency(vo.history[name]))
      }
    }
  },
  mounted () {
    this.onLPResultHistory(this.$store.state.onLPResultHistory)
  },
  watch: {
    '$store.state.onLPResultHistory': function () { var self = this; self.onLPResultHistory(self.$store.state.onLPResultHistory) }
  }
}
</script>
<style>
@-webkit-keyframes _1e_80 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1e_80 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _1ivRF {
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
@keyframes _1ivRF {
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
._11hTi {
  display: -ms-flexbox;
  display: flex;
  -ms-flex: 1 1;
  flex: 1 1;
}
._8MpQp {
  width: 2.56em;
  height: 1.99em;
}
._8MpQp ._3JjSr {
  width: 0.24em;
  height: 0.24em;
  margin: 0 0.22em 0 0.15em;
}
._8MpQp ._1XiXP {
  height: 0.33em;
  padding-right: 0.02em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._8MpQp .SRg90 {
  padding: 0;
}
._8MpQp ._103VE {
  width: 0.64em;
  font-weight: 600;
}
._8MpQp ._2EEVk {
  color: #bbaa7d;
}
._8MpQp ._3JjSr ._2EEVk {
  font-size: 0.14em;
  color: hsla(0, 0%, 100%, 0.87);
}
._1DN2_ {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: #040403;
}
._1XiXP {
  position: relative;
  height: 0.31em;
  width: 100%;
  border-bottom: 0.01em solid #272624;
}
._1XiXP:hover .WOPxX {
  display: -ms-flexbox;
  display: flex;
}
.WOPxX {
  display: none;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  position: absolute;
  padding: 0 0.08em;
  background-color: rgba(0, 0, 0, 0.6);
}
.SRg90,
.WOPxX {
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.SRg90 {
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.02em 0.18em 0 0.08em;
}
._3JjSr,
.SRg90 {
  display: -ms-flexbox;
  display: flex;
}
._3JjSr {
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 0.2em;
  height: 0.2em;
  border-radius: 50%;
}
._3JjSr._2v_CO {
  background-color: #ff101a;
}
._3JjSr._2jFGb {
  background-color: #373131;
}
._3JjSr._1aJ5J {
  background-color: #2e9935;
}
._3JjSr ._2EEVk {
  font-size: 0.1em;
}
._103VE {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  min-width: 0.3em;
}
._2EEVk {
  font-size: 0.14em;
  color: hsla(0, 0%, 100%, 0.87);
  letter-spacing: 0.00714em;
}
._2EEVk._3AMkE {
  font-weight: 600;
  height: 1em;
  line-height: 0.9;
}
._2hj5_ {
  right: -0.01em;
  border-radius: 4px;
  background-color: rgba(125, 114, 84, 0.8);
}
._2hj5_:hover {
  background-color: hsla(44, 31%, 61%, 0.8);
}
</style>
