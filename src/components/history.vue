<template>
  <div class="LUSC0 HISTORY"
       @click='closeTime'>
    <div class="_2m4z6"
         @click='close'></div>
    <span class="_3ny3q">游戏记录</span>
    <div class="kMM9j">
      <span class="JQfrW">日期</span>
      <div class=""
           @click="showTime($event)">
        <div class="react-datepicker-wrapper">
          <div class="react-datepicker__input-container">
            <div value="2019/06/13"
                 class="_27Dd6 ">
              <div class="_2yQVq form_datetime3">{{curr_time}}</div>

            </div>
          </div>
        </div>
      </div>
      <div class="ripple bEkyj center-block ESn_3"
           delay="500"
           @click='setSure($event)'>
        <div class="_2NRf_">确定</div>
      </div>
    </div>
    <div class="_28ZKs">
      <div class="_2e5YG">{{startTime}}</div>
      <span class="_1ktG4">至</span>
      <div class="_2e5YG">{{endTime}}</div>
    </div>
    <div class="_3lAQ7">
      <div class="_1q_eY">
        <div class="_2bUdX _3po9D">
          <span class="LoSZp">投注编号</span>
        </div>
        <div class="_2bUdX _2sPbe">
          <span class="LoSZp">日期 / 时间</span>
        </div>
        <div class="_2bUdX _2rUw7">
          <span class="LoSZp">游戏</span>
        </div>
        <div class="_2bUdX _34l3L">
          <span class="LoSZp">局数</span>
        </div>
        <div class="_2bUdX _3yv_P">
          <span class="LoSZp">结果</span>
        </div>
        <div class="_2bUdX _10SGS">
          <span class="LoSZp">投注</span>
        </div>
        <div class="_2bUdX au3vu">
          <span class="LoSZp">投注额</span>
        </div>
        <div class="_2bUdX Uu2mM">
          <span class="LoSZp">赢/输</span>
        </div>
        <div class="_2bUdX _1DvKb">
          <span class="LoSZp">状态</span>
        </div>
      </div>
      <div class="_3BL_E">
        <div style="position: relative; overflow: hidden; width: 100%; height: 100%;">
          <div class="_2Gj3P WpQs6"
               style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
            <div class="P4hGd">
              <div class="_3PeAI"
                   v-if='history.length==0?true:false'>
                <span class="_2R3zH">没有记录</span>
              </div>
              <template v-for="(vo,index) in history">
                <div class="K4hg8"
                     :key='index'
                     role="button"
                     @click='gameresult(index)'
                     tabindex="0">
                  <div class="_1Scq7">
                    <div class="_2k_SF _15IRL">
                      <div class="_2JLS2">{{vo.id}}</div>
                    </div>
                    <div class="_2k_SF aAIQ2">
                      <div class="_2JLS2">{{vo.created_at.replace(/\//g,'-')}}</div>
                    </div>
                    <div class="_2k_SF _1ccnx">
                      <div class="_2JLS2">{{gameCodes[vo.result.desk_id]}}</div>
                    </div>
                    <div class="_2k_SF _1TFGG">
                      <div class="_2JLS2">{{vo.inning?vo.inning:vo.result.inning}}</div>
                    </div>
                    <div class="_2k_SF _2thMw">
                      <div class="_2JLS2">{{win[vo.win_lose]}}</div>
                    </div>
                    <div class="_2k_SF _1CJq-">
                      <div class="_2JLS2">{{vo.desk_id ==20? type[vo.type] +vo.dian.split('').join(',') :vo.zhuang_men?zhuang_men[vo.zhuang_men]+","+type[vo.type] :type[vo.type] }}</div>
                    </div>
                    <div class="_2k_SF _2grcN">
                      <div class="_2JLS2">{{formatCurrency( vo.credit)}}</div>
                    </div>
                    <div class="_2k_SF _2oGPR">
                      <div class="_2JLS2">{{(vo.win_lose_credit>0?('+'+formatCurrency(vo.win_lose_credit)):( formatCurrency(vo.win_lose_credit)))}}</div>
                    </div>
                    <div class="_2k_SF _1iBqd">
                      <div class="_2JLS2">正常</div>
                    </div>
                  </div>
                  <!-- 斗牛 轮盘-->
                  <template v-if='vo.result.desk_id==20?true:false'>
                    <div class="_2ZoNC"
                         v-if='isshow[index]?true:false'>
                      <div class="_2fi2a "
                           :class='vo.result.hong==1? "_27AXA" :"_2LXYq"'>
                        <div class="_3EuEB">{{vo.result.ball}}</div>
                      </div>
                    </div>
                  </template>
                  <!-- 雀九 -->
                  <template v-if='vo.result.desk_id==18?true:false'>
                    <div class="_2vnaj"
                         v-if='isshow[index]?true:false'>
                      <div class="_3RxnB">
                        <span class="EHCVN">闲</span>
                        <div class="KmRLD  _8zMES"
                             :class='qjpaiclass[vo.result.xian_mahjong[0]]'></div>
                        <div class="KmRLD  _8zMES"
                             :class='qjpaiclass[vo.result.xian_mahjong[1]]'></div>
                      </div>
                      <div class="AfHdG"></div>
                      <div class="gNU1F">
                        <div class="KmRLD  _8zMES"
                             :class='qjpaiclass[vo.result.zhuang_mahjong[0]]'></div>
                        <div class="KmRLD  _8zMES"
                             :class='qjpaiclass[vo.result.zhuang_mahjong[1]]'></div>
                        <span class="EHCVN">庄</span>
                      </div>
                    </div>
                  </template>
                  <!-- 三公 -->
                  <template v-if='vo.result.desk_id==19?true:false'>
                    <div class="_2vVnL _2t2vZ"
                         v-if='isshow[index]?true:false'>
                      <span class="_14PWw">闲</span>
                      <div class="_3YNMY">
                        <div class="_2I7lr  _1Wnx3 _2m6UG"
                             :class='pailist[vo.result.xian_cards[0]]'></div>
                        <div class="_2I7lr  _1Wnx3 gY9W3"
                             :class='pailist[vo.result.xian_cards[1]]'></div>
                        <div class="_2I7lr  _1Wnx3 bH_e2"
                             :class='pailist[vo.result.xian_cards[2]]'></div>
                        <div class="_2I7lr  _1Wnx3 _1rfJB"
                             :class='pailist[vo.result.zhuang_cards[0]]'></div>
                        <div class="_2I7lr  _1Wnx3 _1wm3L"
                             :class='pailist[vo.result.zhuang_cards[1]]'></div>
                        <div class="_2I7lr  _1Wnx3 _2QeC0"
                             :class='pailist[vo.result.zhuang_cards[2]]'></div>
                        <div class="_1B_VD"></div>
                      </div>
                      <span class="wIMeN">庄</span>
                    </div>
                  </template>
                  <!--斗牛  -->
                  <template v-if='vo.result.desk_id==21?true:false'>
                    <div class="_3zJR7"
                         v-if='isshow[index]?true:false'>
                      <div class="_1Z2hX">
                        <span class="_1Zjfu">闲</span>
                        <div class="_3XAuA">
                          牛{{vo.result['xian_niu']}}
                        </div>
                        <div class="_2I7lr _3HVda"
                             :class='pailist[vo.result.xian_cards[0]]'></div>
                        <div class="_2I7lr  _3HVda"
                             :class='pailist[vo.result.xian_cards[1]]'></div>
                        <div class="_2I7lr  _3HVda"
                             :class='pailist[vo.result.xian_cards[2]]'></div>
                        <div class="_2I7lr  _3HVda"
                             :class='pailist[vo.result.xian_cards[3]]'></div>
                        <div class="_2I7lr  _3HVda"
                             :class='pailist[vo.result.xian_cards[4]]'></div>
                      </div>
                      <div class="_35ekY"></div>
                      <div class="_1m3IV">
                        <div class="_2I7lr  _3HVda"
                             :class='pailist[vo.result.zhuang_cards[0]]'></div>
                        <div class="_2I7lr  _3HVda"
                             :class='pailist[vo.result.zhuang_cards[1]]'></div>
                        <div class="_2I7lr _3HVda"
                             :class='pailist[vo.result.zhuang_cards[2]]'></div>
                        <div class="_2I7lr  _3HVda"
                             :class='pailist[vo.result.zhuang_cards[3]]'></div>
                        <div class="_2I7lr  _3HVda"
                             :class='pailist[vo.result.zhuang_cards[4]]'></div>
                        <div class="_3XAuA">
                          牛 {{vo.result['zhuang_niu']}}
                        </div>
                        <span class="_1Zjfu">庄</span>
                      </div>
                    </div>
                  </template>
                  <!-- 晒宝 -->
                  <template v-if='vo.result.desk_id==16?true:false'>
                    <div class="_3mRNq"
                         v-if='isshow[index]?true:false'>
                      <div class="nzA04  ge6MY"
                           :class='saiBaoCard[vo.result["dices"][0]]'></div>
                      <div class="nzA04  ge6MY"
                           :class='saiBaoCard[vo.result["dices"][1]]'></div>
                      <div class="nzA04  ge6MY"
                           :class='saiBaoCard[vo.result["dices"][2]]'></div>
                    </div>
                  </template>
                  <!-- 龙虎百家乐 -->
                  <template v-if='babp_desk.indexOf(vo.result.desk_id)!==-1||vo.result.desk_id==17?true:false'>
                    <div class="_1FvRu "
                         :class='vo.result.desk_id==17?"_1N3vm" :"_1c1n5"'
                         v-if='isshow[index]?true:false'>
                      <span class="_1kgHG">{{babp_desk.indexOf(vo.result.desk_id)!==-1?"闲":vo.result.desk_id==17?"龙":""}}</span>
                      <div class="_1yyXg">
                        <template v-if='babp_desk.indexOf(vo.result.desk_id)!==-1?true:false'>
                          <div class="_2I7lr  _2Fp8J _1Ni9t"
                               :class='pailist[vo.result.xian_card_1]'></div>
                          <div class="_2I7lr _ _2Fp8J _1sSk2"
                               :class='pailist[vo.result.xian_card_2]'></div>
                          <div class="_2I7lr _ _2Fp8J pGTW_"
                               :class='pailist[vo.result.xian_card_3]'></div>
                          <div class="_2I7lr  _2Fp8J _1IpdN"
                               :class='pailist[vo.result.zhuang_card_1]'></div>
                          <div class="_2I7lr _2Fp8J iU4HX"
                               :class='pailist[vo.result.zhuang_card_2]'></div>
                          <div class="_2I7lr  _2Fp8J _3XEwN"
                               :class='pailist[vo.result.zhuang_card_3]'></div>
                        </template>

                        <template v-if='vo.result.desk_id==17?true:false'>
                          <div class="_2I7lr  _2Fp8J _1Ni9t"
                               :class='pailist[vo.result.long_card]'></div>
                          <div class="_2I7lr  _2Fp8J _1sSk2"
                               :class='pailist[vo.result.hu_card]'></div>
                        </template>
                        <div class="_3L01i"></div>
                      </div>
                      <span class="_3leOk">{{babp_desk.indexOf(vo.result.desk_id)!==-1?"庄":vo.result.desk_id==17?"虎":""}}</span>
                    </div>
                  </template>
                </div>
              </template>
            </div>
          </div>
          <div style="display: none;">
            <div class="wveDM _3lscB"
                 style="position: relative; display: block; height: 100%; width: 0px;"></div>
          </div>
          <div style="position: absolute; right: 2px; bottom: 2px; top: 2px; width: 5px;">
            <div class="wveDM _12hdy"
                 style="position: relative; display: block; width: 100%; height: 138px; transform: translateY(0px);"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import '../utils/bootstrap-datetimepicker'
import '../utils/bootstrap-datetimepicker.zh-CN.js'
import { gameCodes, pailist, ba_desk_list, diff_desk_list, formatCurrency } from '@/utils/deals'
export default {
  name: 'history',
  data () {
    return {
      qjpaiclass: { 8: "_3bTLb", 5: "_1Xp65", 3: "qcK9t", 6: "x4Hqq", 7: "_3gjPy", 9: "_2ih2m", 1: "xrYU7", 0: "_2eUj_", 4: "_5B2B8", 2: "_3BtK-", 10: "" },
      click: 0,
      pailist: pailist,
      babp_desk: ba_desk_list.concat(diff_desk_list.bp_desk_list),
      formatCurrency: formatCurrency,
      curr_time: '',
      choose_time: { year: '', month: '', day: '' },
      saiBaoCard: { 1: '_2gBJt', 2: 'DS5Nz', 3: 'UF0-_', 4: '_2T_hq ', 5: '_1TlBd', 6: 'dIHcl' },
      history: [],
      win: { 0: '输', 1: '赢', 2: '和' },
      zhuang_men: {
        xian_1: "庄1",
        xian_2: "庄2",
        xian_3: "庄3",
        xian_4: "庄4",
        xian_5: "庄5",
        xian_6: "庄6",      },
      type: {        zhuang: '庄',
        xian: '闲',
        zhuang_dui: '庄对',
        xian_dui: '闲对',
        long: '龙',
        hu: '虎',
        he: '和',
        jackpot: 'Jackpot',
        da: '大',
        xiao: '小',
        ball: 'ball',
        shuang: '双',
        dan: '单',
        hong: '红',
        hei: '黑',
        zu_1: '组1',
        zu_2: '组2',
        zu_3: '组3',
        hang_1: '行1',
        hang_1: '行2',
        hang_1: '行3',
        dian: '点数',
        duan_pai: '骰点',
        wei_pai: '围',
        chang_pai: '骰点',
        san_jun: '骰点',
        xian_1: "闲1",
        xian_2: "闲2",
        xian_3: "闲3",
        xian_4: "闲4",
        xian_5: "闲5",
        xian_6: "闲6",

      },
      gameCodes: gameCodes,
      isshow: {},
      startTime: '',
      endTime: '',
      picker_date: '',
      timedata: ''
    }
  },
  methods: {
    closeTime: function () {
      console.log(1)
      if ($('.datetimepicker')[0] && $('.datetimepicker')[0].clientHeight) {
        $('.datetimepicker').hide()
      }
    },
    close: function () {
      this.$store.dispatch('HistoryShow', false)
    },
    setSure: function (event) {
      var self = this
      self.sendGameReport(self.picker_date.replace(/\//g, '-'))
      self.startTime = self.GetDateStr(-1, self.timedata) + ' 12:00:00'
      self.endTime = self.picker_date + ' 12:00:00'
      event.cancelBubble = true
    },
    gameresult: function (index) {
      this.$set(this.isshow, index, !this.isshow[index])
      console.log(this.isshow)
    },
    sendGameReport: function (_date) {
      this.global.sendMessage('win_lose_report', { 'date': _date })
    },
    showTime: function (event) {
      var self = this
      if (self.click >= 1) {
        $('.datetimepicker').show()
        event.cancelBubble = true
        return
      }
      $('.form_datetime3').datetimepicker({
        startDate: self.GetDateStr(-31),
        endDate: self.GetDateStr(0),
        format: 'yyyy-mm-dd ',
        autoclose: true,
        todayBtn: true,
        minView: 2,
        maxView: 2,
        language: 'zh-CN',
        todayHighlight: false,
        pickerPosition: 'top-left'
      }).on('changeDate', function (ev) {
        self.picker_date = self.timeFormat(ev.date.valueOf())
        self.curr_time = self.picker_date
        self.timedata = ev.date.valueOf()
        console.log(self.picker_date)
        $('.datetimepicker').hide()
      })

      self.click++
      event.cancelBubble = true
    },
    timeFormat: function (timestamp) {
      // timestamp是整数，否则要parseInt转换,不会出现少个0的情况
      var time = new Date(timestamp)
      var year = time.getFullYear()
      var month = time.getMonth() + 1
      var date = time.getDate()
      var hours = time.getHours()
      var minutes = time.getMinutes()
      var seconds = time.getSeconds()
      this.choose_time.year = year
      this.choose_time.month = this.add0(month)
      this.choose_time.day = date
      return year + '/' + this.add0(month) + '/' + this.add0(date)
    },
    GetDateStr: function (AddDayCount, timestamp) {
      var self = this
      if (timestamp) {
        var dd = new Date(timestamp)
      } else {
        var dd = new Date()
      }
      dd.setDate(dd.getDate() + AddDayCount)// 获取AddDayCount天后的日期
      var y = dd.getFullYear()
      var m = dd.getMonth() + 1// 获取当前月份的日期
      var d = dd.getDate()
      return y + '/' + self.add0(m) + '/' + self.add0(d)
    },
    add0: function (m) { return m < 10 ? '0' + m : m },
    onGameReport: function (vo) {
      this.history = vo
      console.log('游戏记录=======', JSON.stringify(vo))
    }
  },
  mounted () {
    var self = this
    self.curr_time = self.GetDateStr(0)
    self.startTime = self.GetDateStr(0) + '  12:00:00'
    self.endTime = self.GetDateStr(1) + '  12:00:00'
    self.sendGameReport(self.curr_time.replace(/\//g, '-'))
    self.global.addMessageListener('win_lose_report', self.onGameReport)
  }
}
</script>

<style scoped>
@import "../assets/style/pai.css";
.form_datetime3 {
  position: relative;
}
@-webkit-keyframes HGiu6 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes HGiu6 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _2N1c8 {
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
@keyframes _2N1c8 {
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
._2ZoNC {
  padding: 0.02em 0 0.18em;
}
._2fi2a,
._2ZoNC {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
._2fi2a {
  width: 0.4em;
  height: 0.4em;
  border-radius: 50%;
}
._3EuEB {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 0.25em;
  color: #fff;
}
.x10yM {
  background-color: #25cc40;
}
._27AXA {
  background-color: #ff101a;
}
._2LXYq {
  background-color: #373131;
}
@-webkit-keyframes _1Ucaq {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1Ucaq {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _18ukY {
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
@keyframes _18ukY {
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
._3mRNq {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 0 0.12em;
  color: #fff;
}
._3mRNq .ge6MY {
  height: 0.48em;
  width: 0.48em;
  margin: 0 0.04em;
}
@-webkit-keyframes _1yA7c {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1yA7c {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3iZJh {
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
@keyframes _3iZJh {
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
._1FvRu {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: -0.09em;
  padding-bottom: 0.09em;
  color: #fff;
}
._1kgHG,
._3leOk {
  font-size: 0.28em;
  font-weight: 600;
  text-align: center;
}
._1kgHG {
  color: #002bf7;
}
._3leOk {
  color: #ff101a;
}
._1yyXg {
  display: -ms-flexbox;
  display: flex;
  position: relative;
}
._1yyXg ._2Fp8J {
  height: 0.6em;
  width: 0.4em;
}
._1c1n5 ._1yyXg,
._2s4uM ._1yyXg {
  margin: 0 0.22em -0.2em;
}
._1c1n5 ._2Fp8J,
._2s4uM ._2Fp8J {
  margin: 0 0.02em;
}
._1c1n5 ._1Ni9t,
._2s4uM ._1Ni9t {
  -ms-flex-order: 3;
  order: 3;
}
._1c1n5 ._1sSk2,
._2s4uM ._1sSk2 {
  -ms-flex-order: 2;
  order: 2;
}
._1c1n5 .pGTW_,
._2s4uM .pGTW_ {
  -ms-flex-order: 1;
  order: 1;
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
  margin: 0.1em 0.12em;
}
._1c1n5 ._3L01i,
._2s4uM ._3L01i {
  -ms-flex-order: 4;
  order: 4;
  width: 0.84em;
}
._1c1n5 ._1IpdN,
._2s4uM ._1IpdN {
  -ms-flex-order: 5;
  order: 5;
}
._1c1n5 .iU4HX,
._2s4uM .iU4HX {
  -ms-flex-order: 6;
  order: 6;
}
._1c1n5 ._3XEwN,
._2s4uM ._3XEwN {
  -ms-flex-order: 7;
  order: 7;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  margin: 0.1em 0.12em;
}
._1c1n5 ._3XEwN,
._1c1n5 .pGTW_,
._2s4uM ._3XEwN,
._2s4uM .pGTW_ {
  background-color: unset;
}
._1N3vm ._1yyXg {
  margin: 0 0.24em;
}
._1N3vm ._1Ni9t {
  -ms-flex-order: 1;
  order: 1;
}
._1N3vm ._3L01i {
  -ms-flex-order: 2;
  order: 2;
  width: 0.88em;
}
._1N3vm ._1sSk2 {
  -ms-flex-order: 3;
  order: 3;
}
._2ziD5 ._1Ni9t {
  -ms-flex-order: 1;
  order: 1;
}
._2ziD5 ._1sSk2 {
  -ms-flex-order: 2;
  order: 2;
}
._2ziD5 .pGTW_ {
  -ms-flex-order: 3;
  order: 3;
}
._2ziD5 ._1IpdN {
  -ms-flex-order: 5;
  order: 5;
}
._2ziD5 .iU4HX {
  -ms-flex-order: 6;
  order: 6;
}
._2ziD5 ._3XEwN {
  -ms-flex-order: 7;
  order: 7;
}
._2ziD5 ._1yyXg {
  margin: 0 0.22em;
}
._2ziD5 ._2Fp8J {
  margin: 0 0.02em;
}
._2ziD5 ._3L01i {
  -ms-flex-order: 4;
  order: 4;
  width: 0.84em;
}
._2NRf_ {
  text-align: center;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  pointer-events: none;
}
@-webkit-keyframes _27oaA {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _27oaA {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes AIeGI {
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
@keyframes AIeGI {
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
.K4hg8 {
  width: 100%;
  outline: none;
}
.K4hg8:nth-child(odd) {
  background-color: rgba(4, 4, 3, 0.5);
}
.K4hg8:nth-child(2n) {
  background-color: #161614;
}
.K4hg8._2-Ele,
.K4hg8:hover {
  background-color: rgba(125, 114, 84, 0.5);
}
._2JLS2 {
  width: 100%;
  text-align: center;
  white-space: normal;
  word-wrap: break-word;
  font-size: 0.14em;
}
._2k_SF {
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0 0.01em;
}
._1Scq7,
._2k_SF {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
._1Scq7 {
  width: 100%;
  padding: 0 0.06em;
  color: hsla(0, 0%, 100%, 0.87);
  position: relative;
  height: 0.6em;
}
._1Scq7 ._15IRL {
  width: 11.25%;
}
._1Scq7 .aAIQ2 {
  width: 18.125%;
}
._1Scq7 ._1ccnx {
  width: 16.875%;
}
._1Scq7 ._1TFGG {
  width: 8.75%;
}
._1Scq7 ._2thMw {
  width: 6.875%;
}
._1Scq7 ._1CJq- {
  width: 8.75%;
}
._1Scq7 ._2grcN,
._1Scq7 ._2oGPR {
  width: 10%;
}
._1Scq7 ._1iBqd {
  width: 9.375%;
}
@-webkit-keyframes _2iZNR {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _2bibn {
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
@keyframes _2iZNR {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2bibn {
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

._1nOVm {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: column;
  flex-flow: column;
  background-color: #161614;
}
._1nOVm._4aPg0 {
  background-color: #1b1b19;
}
* {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
._1xWk6 {
  position: absolute;
  top: 0;
  right: 0.59em;
  width: 0.7em;
  height: 0.56em;
  -webkit-box-shadow: 0 0 0.04em 0.02em rgba(0, 0, 0, 0.74);
  box-shadow: 0 0 0.04em 0.02em rgba(0, 0, 0, 0.74);
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#4e4733),
    color-stop(5%, #6a5f42),
    to(#7d7254)
  );
  background-image: linear-gradient(180deg, #4e4733, #6a5f42 5%, #7d7254);
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 1;
}
._1xWk6.zlerm {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#180529),
    color-stop(8%, #310a5e),
    to(#401876)
  );
  background-image: linear-gradient(180deg, #180529, #310a5e 8%, #401876);
}
._1xWk6._3ghEJ {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#8a1b52),
    color-stop(12%, #aa114a),
    to(#c21276)
  );
  background-image: linear-gradient(180deg, #8a1b52, #aa114a 12%, #c21276);
}
._1xWk6 ._3qiwk {
  height: 0.48em;
  width: 0.48em;
}
@-webkit-keyframes _2zNNE {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2zNNE {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes VakrS {
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
@keyframes VakrS {
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
.kMM9j {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 0.32em;
  margin-bottom: 0.16em;
}
.JQfrW {
  left: 5em;
  color: #fdeed4;
}
.ESn_3,
.JQfrW {
  position: absolute;
  font-size: 0.14em;
}
.ESn_3 {
  right: 4.85714em;
  width: 9.42857em;
  height: 2.28571em;
  border-radius: 7.14286em;
  line-height: 2.28571em;
  background: #7d7254;
  color: hsla(0, 0%, 100%, 0.87);
}
.ESn_3:hover {
  color: #fff;
  background-color: #bbaa7d;
}
._2yQVq {
  color: hsla(0, 0%, 100%, 0.87);
  font-size: 0.14em;
}
@-webkit-keyframes _2AqUM {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2AqUM {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3rr75 {
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
@keyframes _3rr75 {
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
@-webkit-keyframes _1Fh1e {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes _1Fh1e {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._3lAQ7 {
  display: block;
  width: 100%;
  height: 4.6em;
}
.LoSZp {
  width: 100%;
  text-align: center;
  white-space: normal;
  word-wrap: break-word;
  font-size: 0.14em;
}
._2bUdX {
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0 0.01em;
}
._1q_eY,
._2bUdX {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
._1q_eY {
  height: 0.4em;
  padding: 0 0.06em;
  width: auto;
  color: #fdeed4;
  background-color: #24211a;
}
._1q_eY ._3po9D {
  width: 11.25%;
}
._1q_eY ._2sPbe {
  width: 18.125%;
}
._1q_eY ._2rUw7 {
  width: 16.875%;
}
._1q_eY ._34l3L {
  width: 8.75%;
}
._1q_eY ._3yv_P {
  width: 6.875%;
}
._1q_eY ._10SGS {
  width: 8.75%;
}
._1q_eY .au3vu,
._1q_eY .Uu2mM {
  width: 10%;
}
._1q_eY ._1DvKb {
  width: 9.375%;
}
._3BL_E {
  height: 100%;
  padding-bottom: 0.1em;
}
._12hdy {
  right: -0.02em;
  border-radius: 4px;
  background-color: rgba(125, 114, 84, 0.8);
}
._12hdy:hover {
  background-color: hsla(44, 31%, 61%, 0.8);
}
.P4hGd {
  -webkit-overflow-scrolling: touch;
}
._3PeAI {
  height: 0.6em;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: rgba(4, 4, 3, 0.5);
}
._2R3zH {
  color: #fff;
  text-align: center;
  font-size: 0.14em;
}
._1r1__ {
  height: 0.4em;
}
._1r1__,
._2hnnG {
  position: absolute;
  width: 100%;
}
._2hnnG {
  top: 0;
  left: 0;
  height: 100%;
  background: transparent;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}
._2hnnG:after {
  content: "";
  width: 0.25em;
  height: 0.25em;
  background: transparent url(/assets/fa6343e7.png) no-repeat 50%;
  background-size: 0.25em 0.25em;
  -webkit-animation: _1Fh1e 1s linear infinite;
  animation: _1Fh1e 1s linear infinite;
}
@-webkit-keyframes _1yML8 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1yML8 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _4F-Hl {
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
@keyframes _4F-Hl {
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
._1ktG4 {
  margin: 0 1.71429em;
  font-size: 0.14em;
}
._28ZKs {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 0.62em;
  line-height: 1;
  color: hsla(0, 0%, 100%, 0.87);
}
._2e5YG {
  font-size: 0.14em;
}
@-webkit-keyframes _2uILm {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2uILm {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3hRzt {
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
@keyframes _3hRzt {
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
._27Dd6,
.react-datepicker-wrapper.react-datepicker-wrapper {
  display: -ms-flexbox;
  display: flex;
}
._27Dd6 {
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 1.59em;
  height: 0.32em;
  border-radius: 1em;
  background-color: #7d7254;
  cursor: pointer;
}
._27Dd6:hover {
  color: #fff;
}
._27Dd6.react-datepicker-ignore-onclickoutside,
._27Dd6:hover {
  background-color: #bbaa7d;
}
._2yQVq {
  color: hsla(0, 0%, 100%, 0.87);
  font-size: 0.14em;
}
._25fmk.react-datepicker {
  border: none;
  margin-left: -0.45em;
  margin-top: -10px;
  border-radius: 0;
  font-family: HelveticaNeue-Thin, sans-serif;
  font-size: inherit;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: transparent;
}
._25fmk.react-datepicker:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 3, 0.9);
  z-index: -2;
}
._25fmk .react-datepicker__triangle {
  display: none;
}
._25fmk .react-datepicker__navigation--previous {
  left: 0.6em;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAmRJREFUWAndl89LVUEUx70ZoUYKKiZCBS1UxHbpQnDTyq0ELURDwgrBH6R/iRX5A10oLnIhtYtWtgoKWoigtCkiaRERYmIhyvNzZAaOw7vcmbl31cDhfM95d77f75079817FRX/2yiVSpeJJ8RVn3u74HOR7zWIXuLaMaKdmKZuzppbmAHEKhF7RNw0onXkIYNTU2EGUBgkbimlA/CyqsvCQgxw9/2w9yiFI/DzJEl+ql5ZmNsA4ndg7lPsJfAi4l9VLxXmMoD4bZjvOewvEd90eqlltAHEZac/IBLF/hbxd6rOhFEGEL8G8yghO9+Oj4BXtvDNwQYQb4R8gqhSIp/By9y9PP+gEWQA8SuwTxK1SuUHeBbxY9Xzht4GEJc7HieaFPse+Bnif1UvCHoZQFye9WPihmL/Bxbx36oXDDMNIC67fJjoUOwn4DnEd1UvCmYagPUu0e2wryC+4/SiSh8DUcS+k3wMrEP2wSG8z6Npc3pRZaYBllrebTnVtpWCbMpRTLSoXhTMNCCsmJBNN098k9qMavI4JuTcjx5eBoQdE2evHVAfsfXUY5jQ34pyuffwNiCMmPhDmiH2pTbjOvkhJoK47OTgSZj4xeSnhKyIHZ2AAVuE5GADQo6J76QXhOwNO3pZhT5b+OYoA0KOCTkBlwh9AvZjoks+9x3RBkQAE59Ia47YMCZanV5qmcuAsGJig/RGKVwEy3dE5n8CmZPbgJBg4jXpvWAzasgTmNC/G+xn53IhBgzjKnlLsTeAR1RdFhZmgFWQN2KB+GKUDsnBvxHN3PjEssuf0yki9zkR7yJg5ik+Gpx+lqNYxgAAAABJRU5ErkJggg==);
}
._25fmk .react-datepicker__navigation--next,
._25fmk .react-datepicker__navigation--previous {
  top: 0.14em;
  height: 0.16em;
  width: 0.16em;
  border: none;
  outline: none;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}
._25fmk .react-datepicker__navigation--next {
  right: 0.6em;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAmFJREFUWAnVl81LFWEUh70aokkJKiaCCS4yxHbmInDTym0ELUJFwg8ENdS/pAxN0YXhohZRO3Flq6DAhQiKGyOKFiEiFhVh3J4fvBcOM9C87zsXwgOH8zEz5/fMx3tnbkXFebBisXgFn8Hrys1bmTUQ0Rb2mcOv45PU1VnHhGzPBGDYIF7vhnYQx4CocnXu4AOwhsp3o3SDfMDUudJMgEKh8BWFJ/hvo3SLq3DH1NFpJoAmA/GBsIIXVTvrB+J2qYiNXgAaDsQO4XlC6B4QPYleUOkNoKlAvCFsKndWID4AQiskyoIAnMIr4nujphUxAUSb6XmnwQBcBT0HWhkHRqWGfBqIJtPzSoMBNBWIM8Ii/kW1s8vEh0BcKjV8YhSABgPxkzCPn6h21kycAkJXxMuiATQdiGOCIH6pdtZOHAfC69cyF4AEgfhMeIr/Ue2sizgMhFbJPy03gKYDsU94llDqpb6b6KXKsgCkpgY0ygLApe5Ecyih+476ZaKXKnMDIN7K1AncPnR71GvcGvvuSImrkQsAcX0nTOG1GubsI3EJcftQlralYjQA4lrrk3iDmapX9zzidlmazek0CgBxHTeKXzUjT8kfIf7N9DLTKACm3se7zXSd8WPEj0zPKw0G4Oz7mdxnputeLyD+yfS80yAAxG8y2X6K6SlfRdy+Gb3FtaM3AOLX2H9YBxl7gfi2qYNTLwDEW5istX7BKGwgvmXqqDQTAHG956fxi0bhLeKvTR2dZgIweQRvNAq75OumzpX6AOgb8IdTOSQuc/Zev3K5yOzB3IZWfBYv+59Tq/Nf8r/VKZx+jd+YoQAAAABJRU5ErkJggg==);
}
._25fmk .react-datepicker__header {
  background-color: transparent;
  border-radius: 0;
  border: 0;
  padding-top: 0;
}
._25fmk .react-datepicker__header .react-datepicker__current-month {
  color: #fdeed4;
  background-color: #000300;
  margin: 0.75em 0 0.5em;
  font-size: 0.16em;
  font-weight: 100;
  font-family: Helvetica;
}
._25fmk .react-datepicker__header .react-datepicker__day-names {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  padding: 0 0.064em;
}
._25fmk .react-datepicker__header .react-datepicker__day-name {
  font-size: 0.12em;
  height: 1.83333em;
  width: 1.83333em;
  line-height: 1.83333em;
  color: hsla(0, 0%, 100%, 0.6);
}
._25fmk .react-datepicker__header .react-datepicker__day-name:first-child,
._25fmk .react-datepicker__header .react-datepicker__day-name:last-child {
  color: rgba(240, 41, 41, 0.87);
}
._25fmk .react-datepicker__month {
  margin: 0 0.064em 0.064em;
}
._25fmk .react-datepicker__month .react-datepicker__week {
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0.04em;
}
._25fmk .react-datepicker__month .react-datepicker__day {
  position: relative;
  color: hsla(0, 0%, 100%, 0.87);
  background-color: transparent;
  margin: 0 0.22857em;
  border-radius: 50%;
  font-weight: 600;
  font-size: 0.14em;
  height: 2em;
  width: 2em;
  line-height: 2em;
}
._25fmk .react-datepicker__month .react-datepicker__day:hover {
  border-radius: 50%;
  background-color: #bbaa7d;
}
._25fmk .react-datepicker__month .react-datepicker__day--outside-month {
  color: hsla(0, 0%, 100%, 0.6);
}
._25fmk .react-datepicker__month .react-datepicker__day--selected {
  color: #fff;
  background-color: #7d7254;
}
._25fmk .react-datepicker__month .react-datepicker__day--disabled {
  color: hsla(0, 0%, 100%, 0.38);
}
._25fmk .react-datepicker__month .react-datepicker__day--disabled:hover {
  background-color: transparent;
}
._25fmk .react-datepicker__month .react-datepicker__day--in-range:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 -0.22857em;
  height: 2em;
  width: 2.45714em;
  background: #7d7254;
  z-index: -1;
  pointer-events: none;
}
._25fmk .react-datepicker__month .react-datepicker__day--range-start {
  color: #fff;
  background-color: #bbaa7d;
}
._25fmk .react-datepicker__month .react-datepicker__day--range-start:hover {
  background-color: #bbaa7d;
}
._25fmk .react-datepicker__month .react-datepicker__day--range-start:after {
  left: 50%;
  margin-left: 0;
  width: 1.22857em;
}
._25fmk .react-datepicker__month .react-datepicker__day--range-end {
  color: #fff;
  background-color: #bbaa7d;
}
._25fmk .react-datepicker__month .react-datepicker__day--range-end:hover {
  background-color: #bbaa7d;
}
._25fmk .react-datepicker__month .react-datepicker__day--range-end:after {
  right: 50%;
  margin-right: 0;
  width: 1.22857em;
}
@-webkit-keyframes _2-RWt {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2-RWt {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _2ceUl {
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
@keyframes _2ceUl {
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
.LUSC0 {
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
.LUSC0._3rTKX {
  padding: 0;
}
.LUSC0._1JRhS {
  position: fixed;
  padding: 72px 0;
  margin: 0 auto;
  font-size: 100px;
}
._3ny3q {
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
._2m4z6 {
  position: absolute;
  right: 0.24em;
  top: 0.24em;
  width: 0.32em;
  height: 0.32em;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAbVJREFUWAnNl6tOBDEUQHcAw1siloRP4BuwaxB8BAIEwSJI8CTIFYRvgIQQNBrFH+DAIkgQMJzbpZvOo53eTiehyZ12+jpnZqdtdjT6T6ksy11iZ0gn5l8j9ixjyRYETvmQ+KJ8VRTFq23LlQucuU6JMeVNGLeFTM7NFtk5sSj3pE8iq4QLN4TZ5WZBckzeye5ndea6wvWEQVl+Dg/8BcazeQMWTMcJ5X17T977TQTgUx78uyIg4JwSXXDhNQRyScTAvQJ9JWLhQYFUCQ28U0AroYVHCcRKpMCjBbokUuEqgYDENW0HxFj6/CXZZMw6txW+vHUZ+jpLPU9b36zq3aPhMlAtIIMCEiq4zGXOAiko0xP9P1rGPMr22lLvrVILOB/cRsusx7SrDjCVgAN3P7g3R0R9ikYLeODym18Qd6kSUR9hAD5favSpr46oo7xTIAZunz5FIiiggadKeAVS4CkSrQJ94FqJhkAOuEaiIpATHisxFxgCHiNhBIaEd0nYnbCko3uIqE81C/LlHFIPtLk75k+FyVtYJc6II8L+RfPNl1zP3BPikthuTELlMjEY3AJhrNvyL0h+VD/Mo7VFAAAAAElFTkSuQmCC);
  background-size: 100% 100%;
  cursor: pointer;
}

@-webkit-keyframes _2zNNE {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2zNNE {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes VakrS {
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
@keyframes VakrS {
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
.kMM9j {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 0.32em;
  margin-bottom: 0.16em;
}
.JQfrW {
  left: 5em;
  color: #fdeed4;
}
.ESn_3,
.JQfrW {
  position: absolute;
  font-size: 0.14em;
}
.ESn_3 {
  right: 4.85714em;
  width: 9.42857em;
  height: 2.28571em;
  border-radius: 7.14286em;
  line-height: 2.28571em;
  background: #7d7254;
  color: hsla(0, 0%, 100%, 0.87);
}
.ESn_3:hover {
  color: #fff;
  background-color: #bbaa7d;
}
@-webkit-keyframes _1tCAn {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1tCAn {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3Zvip {
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
@keyframes _3Zvip {
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
._3zJR7 {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: -0.09em;
  padding-bottom: 0.09em;
}
._3zJR7 ._3HVda {
  height: 0.6em;
  width: 0.4em;
}
._1Zjfu {
  font-size: 0.28em;
  font-weight: 600;
}
._3XAuA {
  font-size: 0.14em;
  color: #fff;
}
._1Z2hX {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
._1Z2hX ._1Zjfu {
  color: #002bf7;
  margin-right: 0.85714em;
}
._1Z2hX ._3XAuA {
  margin-right: 1.42857em;
}
._1Z2hX ._3HVda {
  margin-left: 0.04em;
}
._1m3IV {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
._1m3IV ._1Zjfu {
  color: #ff101a;
  margin-left: 0.85714em;
}
._1m3IV ._3XAuA {
  margin-left: 1.42857em;
}
._1m3IV ._3HVda {
  margin-right: 0.04em;
}
._35ekY {
  width: 0.88em;
}
@-webkit-keyframes _1Hr28 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1Hr28 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _21HF3 {
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
@keyframes _21HF3 {
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
._2vVnL {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: -0.09em;
  padding-bottom: 0.09em;
  color: #fff;
}
._14PWw,
.wIMeN {
  font-size: 0.28em;
  font-weight: 600;
  text-align: center;
}
._14PWw {
  color: #002bf7;
}
.wIMeN {
  color: #ff101a;
}
._3YNMY {
  display: -ms-flexbox;
  display: flex;
  position: relative;
}
._3YNMY ._1Wnx3 {
  height: 0.6em;
  width: 0.4em;
}
._2IH8K ._3YNMY,
._1448a ._3YNMY {
  margin: 0 0.22em -0.2em;
}
._2IH8K ._1Wnx3,
._1448a ._1Wnx3 {
  margin: 0 0.02em;
}
._2IH8K ._2m6UG,
._1448a ._2m6UG {
  -ms-flex-order: 3;
  order: 3;
}
._2IH8K .gY9W3,
._1448a .gY9W3 {
  -ms-flex-order: 2;
  order: 2;
}
._2IH8K .bH_e2,
._1448a .bH_e2 {
  -ms-flex-order: 1;
  order: 1;
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
  margin: 0.1em 0.12em;
}
._2IH8K ._1B_VD,
._1448a ._1B_VD {
  -ms-flex-order: 4;
  order: 4;
  width: 0.84em;
}
._2IH8K ._1rfJB,
._1448a ._1rfJB {
  -ms-flex-order: 5;
  order: 5;
}
._2IH8K ._1wm3L,
._1448a ._1wm3L {
  -ms-flex-order: 6;
  order: 6;
}
._2IH8K ._2QeC0,
._1448a ._2QeC0 {
  -ms-flex-order: 7;
  order: 7;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  margin: 0.1em 0.12em;
}
._2IH8K ._2QeC0,
._2IH8K .bH_e2,
._1448a ._2QeC0,
._1448a .bH_e2 {
  background-color: unset;
}
._15ntD ._3YNMY {
  margin: 0 0.24em;
}
._15ntD ._2m6UG {
  -ms-flex-order: 1;
  order: 1;
}
._15ntD ._1B_VD {
  -ms-flex-order: 2;
  order: 2;
  width: 0.88em;
}
._15ntD .gY9W3 {
  -ms-flex-order: 3;
  order: 3;
}
._2t2vZ ._2m6UG {
  -ms-flex-order: 1;
  order: 1;
}
._2t2vZ .gY9W3 {
  -ms-flex-order: 2;
  order: 2;
}
._2t2vZ .bH_e2 {
  -ms-flex-order: 3;
  order: 3;
}
._2t2vZ ._1rfJB {
  -ms-flex-order: 5;
  order: 5;
}
._2t2vZ ._1wm3L {
  -ms-flex-order: 6;
  order: 6;
}
._2t2vZ ._2QeC0 {
  -ms-flex-order: 7;
  order: 7;
}
._2t2vZ ._3YNMY {
  margin: 0 0.22em;
}
._2t2vZ ._1Wnx3 {
  margin: 0 0.02em;
}
._2t2vZ ._1B_VD {
  -ms-flex-order: 4;
  order: 4;
  width: 0.84em;
}
@-webkit-keyframes _37a9v {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _37a9v {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _2831n {
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
@keyframes _2831n {
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
._2vnaj {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: -0.09em;
  padding-bottom: 0.09em;
}
._2vnaj ._8zMES {
  height: 0.6em;
  width: 0.31em;
}
.EHCVN {
  font-size: 0.28em;
  font-weight: 600;
  text-align: center;
}
._3RxnB {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
._3RxnB .EHCVN {
  color: #002bf7;
  margin-right: 0.71429em;
}
._3RxnB ._8zMES {
  margin-left: 0.04em;
}
.gNU1F {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
.gNU1F .EHCVN {
  color: #ff101a;
  margin-left: 0.71429em;
}
.gNU1F ._8zMES {
  margin-right: 0.04em;
}
.AfHdG {
  width: 0.88em;
}
.KmRLD {
  background-size: 100% 100%;
}
</style>
