<template>
  <div class="yUiBb">
    <div class="dIFro">
      <div class="_1tXrk">
        <div class="DQJPp _1nOU2">
          <div class="_2-OGx"></div>
        </div>
        <span class="_2Do6T">{{data['hong']}}</span>
      </div>
      <div class="_1tXrk">
        <div class="DQJPp _1UGYW">
          <div class="_2-OGx"></div>
        </div>
        <span class="_2Do6T">{{data['hei']}}</span>
      </div>
      <div class="_1tXrk">
        <span class="_3VXoy">单</span>
        <span class="_2Do6T">{{data['dan']}}</span>
      </div>
      <div class="_1tXrk">
        <span class="_3VXoy">双</span>
        <span class="_2Do6T">{{data['shuang']}}</span>
      </div>
      <div class="_1tXrk">
        <span class="_3VXoy">组 1</span>
        <span class="_2Do6T">{{data['zu_1']}}</span>
      </div>
      <div class="_1tXrk">
        <span class="_3VXoy">组 2</span>
        <span class="_2Do6T">{{data['zu_2']}}</span>
      </div>
      <div class="_1tXrk">
        <span class="_3VXoy">组 3</span>
        <span class="_2Do6T">{{data['zu_3']}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {formatCurrency} from '@/utils/deals'
export default {
  name: 'lpcaichi',
  data () {
    return {
      data: {}
    }
  },
  methods: {
    onLPMoneyPool: function (vo) {
      var self = this
      // console.log('即时彩池==' + JSON.stringify(vo))
      for (var name in vo) {
        self.$set(self.data, name, formatCurrency(vo[name]))
      }
    }
  },
  mounted () {
    // this.global.addMessageListener('lunpan_bet_summary', this.onMoneyPool)
  },
  watch: {
    '$store.state.onLPMoneyPool': function () { var self = this; self.onLPMoneyPool(self.$store.state.onLPMoneyPool) }
  }
}
</script>

<style>
.dIFro {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}
.dIFro {
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  padding-top: 0.02em;
}
@-webkit-keyframes lHygV {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes lHygV {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _2fnkS {
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
@keyframes _2fnkS {
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
.dIFro {
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  padding-top: 0.02em;
}
._1tXrk,
.dIFro {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}
._1tXrk {
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  height: 0.25em;
  padding: 0 0.08em;
  border-bottom: 0.01em solid #24211a;
}
._2Do6T,
._3VXoy {
  font-size: 0.14em;
  font-weight: 500;
  color: hsla(0, 0%, 100%, 0.87);
}
.DQJPp {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 0.32em;
  height: 100%;
  margin-top: -0.02em;
  margin-left: -0.08em;
}
.DQJPp._1UGYW {
  background-color: #000;
}
.DQJPp._1nOU2 {
  background-color: #ff101a;
}
._2-OGx {
  width: 0.12em;
  height: 0.12em;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  border-radius: 0.023em;
  border: 0.015em solid hsla(0, 0%, 100%, 0.87);
}
</style>
