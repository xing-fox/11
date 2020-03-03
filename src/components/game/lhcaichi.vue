<template>

  <div class="_11BCB _396nu">
    <div class="_2uJkW _2bCbT">
      <span class="NzBir">龙</span>
      <span class="_3cogt">{{data.long}}</span>
    </div>
    <div class="_2uJkW _3h4b9">
      <span class="NzBir">虎</span>
      <span class="_3cogt">{{data.hu}}</span>
    </div>
    <div class="_2uJkW _3bWBv">
      <span class="NzBir">和</span>
      <span class="_3cogt">{{data.he}}</span>
    </div>
  </div>
</template>
/* eslint-disable */
<script>
import {formatCurrency} from '@/utils/deals'
export default {
  name: 'lhcaichi',
  data () {
    return {
      data: {}
    }
  },
  methods: {
    onMoneyPool: function (vo) {
      var self = this
      // console.log('即时彩池==' + JSON.stringify(vo))
      for (var name in vo) {
        self.$set(self.data, name, formatCurrency(vo[name]))
      }
    }
  },
  mounted () {
    this.global.addMessageListener('longhu_bet_summary', this.onMoneyPool)
  }
}
</script>

<style>
@-webkit-keyframes XHT24 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes XHT24 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _37t3g {
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
@keyframes _37t3g {
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
._11BCB {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-weight: 600;
}
._11BCB > :not(:last-child) {
  border-bottom: 0.01em solid hsla(0, 0%, 100%, 0.12);
}
._11BCB._396nu ._2uJkW {
  height: 0.25em;
  padding: 0 0.08em;
  border-bottom: 0.01em solid #24211a;
}
._2uJkW {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  height: 0.2em;
  width: 100%;
  padding: 0 0.04em;
}
._2uJkW._2bP44 {
  height: 0.26em;
}
._3h4b9 {
  color: #ff101a;
}
._2bCbT {
  color: #002bf7;
}
._3bWBv {
  color: #06f039;
}
._3cogt,
.NzBir {
  font-size: 0.12em;
}
._3cogt {
  color: hsla(0, 0%, 100%, 0.87);
}
</style>
