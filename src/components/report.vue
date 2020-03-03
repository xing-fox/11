<template>
  <div class="LUSC0"
       @click=closeTime>
    <div class="_2m4z6"
         @click='close'></div>
    <span class="_3ny3q">会员报表</span>
    <form class="_1xSRq">
      <div class="Iqoue">
        <span class="_11r0N">日期</span>
        <div class="form_datetime1"
             @click="showTime1($event,1)">
          <div class="react-datepicker-wrapper">
            <div class="react-datepicker__input-container">
              <div value="2019/05/17"
                   class="_27Dd6">
                <div class="_2yQVq">{{startTime}}</div>
              </div>
            </div>
          </div>
        </div>
        <span class="_3yw3o">至</span>
        <div class="form_datetime2"
             @click="showTime2($event,2)">
          <div class="react-datepicker-wrapper">
            <div class="react-datepicker__input-container">
              <div value="2019/06/15"
                   class="_27Dd6">
                <div class="_2yQVq">{{endTime}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="ripple bEkyj center-block _1b09S"
             @click="setSure"
             delay="500">
          <div class="_2NRf_">确定</div>
        </div>
      </div>
    </form>
    <div class="_4OY1W">
      <div class="_3sau_">{{startTime}} 12:00:00</div>
      <span class="_3yw3o">至</span>
      <div class="_3sau_">{{endTime}} 12:00:00</div>
    </div>

    <div class="_3qCqt">
      <div class="pdBO3">
        <div class="_1A02S">
          <div class="BjGdY"><span class="I2E58">投注金额</span></div>
        </div>
        <div class="_1A02S">
          <div class="BjGdY">{{formatCurrency(report.bet)}}</div>
        </div>
      </div>
      <div class="pdBO3">
        <div class="_1A02S">
          <div class="BjGdY"><span class="I2E58">输赢金额</span></div>
        </div>
        <div class="_1A02S">
          <div class="BjGdY">{{formatCurrency(report.win_lose)}}</div>
        </div>
      </div>
      <div class="pdBO3">
        <div class="_1A02S">
          <div class="BjGdY"><span class="I2E58">洗码量</span></div>
        </div>
        <div class="_1A02S">
          <div class="BjGdY">{{formatCurrency(report.wash)}}</div>
        </div>
      </div>
    </div>

    <!-- <div class="_31-GS">
      <div class="TNti1 _2yug_">
        <div class="_3CbXy">
          <div class="_2CGxt">
            <span>投注金额</span>
          </div>
        </div>
        <div class="_3CbXy">
          <div class="_2CGxt">
            <span>输赢金额</span>
          </div>
        </div>
        <div class="_3CbXy">
          <div class="_2CGxt">
            <span>洗码量</span>
          </div>
        </div>
      </div>
      <div class="_2g5zq _2yug_">
        <div class="_3CbXy">
          <div class="_2CGxt">{{formatCurrency(report.bet)}}</div>
        </div>
        <div class="_3CbXy">
          <div class="_2CGxt">{{formatCurrency(report.win_lose)}}</div>
        </div>
        <div class="_3CbXy">
          <div class="_2CGxt">{{formatCurrency(report.wash)}}</div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
/* eslint-disable */
import '../utils/bootstrap-datetimepicker'
import '../utils/bootstrap-datetimepicker.zh-CN.js'
import { gameCodes, pailist, ba_desk_list, diff_desk_list, formatCurrency } from '@/utils/deals'
export default {
  name: 'report',
  data () {
    return {
      click: 0,
      click1: 0,
      pailist: pailist,
      babp_desk: ba_desk_list.concat(diff_desk_list.bp_desk_list),
      curr_time: '',
      choose_time: { year: '', month: '', day: '' },
      report: [],
      isshow: {},
      startTime: '',
      endTime: '',
      picker_date: '',
      timedata: '',
      formatCurrency: formatCurrency
    }
  },
  methods: {
    closeTime: function () {
      console.log(1)
      if ($('.datetimepicker')[0] && $('.datetimepicker')[0].clientHeight) {
        $('.datetimepicker').eq(0).hide()
        $('.datetimepicker').eq(1).hide()
      }
    },
    close: function () {
      this.$store.dispatch('HistoryShow', false)
    },
    setSure: function (event) {
      var self = this
      self.global.sendMessage('member_report', { 'start_date': self.startTime.replace(/\//g, '-'), 'end_date': self.endTime.replace(/\//g, '-') })
      event.cancelBubble = true
    },

    showTime1: function (event, index) {
      var self = this
      $('.form_datetime1 .datetimepicker').show()
      $('.form_datetime2 .datetimepicker').hide()
      if (self.click >= 1) {
        $('.form_datetime1').datetimepicker('setStartDate', self.startTime)
        $('.form_datetime1').datetimepicker('setEndDate', self.endTime)
        // $('.form_datetime1').datetimepicker({startDate: self.startTime, endDate: self.endTime})
        event.cancelBubble = true
        return
      }
      $('.form_datetime1').datetimepicker({
        startDate: self.startTime,
        endDate: self.endTime,
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
        self.startTime = self.GetDateStr(0, ev.date.valueOf())
        self.timedata = ev.date.valueOf()
        console.log(self.startTime)
        $('.datetimepicker').hide()
      })

      self.click++
      event.cancelBubble = true
    },
    showTime2: function (event, index) {
      var self = this
      $('.form_datetime2 .datetimepicker').show()
      $('.form_datetime1 .datetimepicker').hide()
      if (self.click1 >= 1) {
        $('.form_datetime2').datetimepicker('setStartDate', self.startTime)
        $('.form_datetime2').datetimepicker('setEndDate', self.endTime)
        // $('.form_datetime2').datetimepicker({startDate: self.startTime, endDate: self.endTime})
        event.cancelBubble = true
        return
      }
      $('.form_datetime2').datetimepicker({
        startDate: self.startTime,
        endDate: self.endTime,
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
        self.endTime = self.GetDateStr(0, ev.date.valueOf())
        console.log(self.endTime)
        $('.datetimepicker').hide()
      })

      self.click1++
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
    onMemberReport: function (vo) {
      this.report = vo
      console.log('会员报表=======', JSON.stringify(vo))
    }
  },
  mounted () {
    var self = this
    self.curr_time = self.GetDateStr(0)
    self.startTime = self.GetDateStr(-29)
    self.endTime = self.GetDateStr(1)

    self.global.sendMessage('member_report', { 'start_date': self.startTime.replace(/\//g, '-'), 'end_date': self.endTime.replace(/\//g, '-') })
    self.global.addMessageListener('member_report', self.onMemberReport)
  }
}
</script>

<style scoped>
* {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
.form_datetime1 {
  position: relative;
}
.form_datetime2 {
  position: relative;
}
.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle,
.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow,
.react-datepicker__year-read-view--down-arrow {
  margin-left: -8px;
  position: absolute;
}
.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle,
.react-datepicker-popper[data-placement^="bottom"]
  .react-datepicker__triangle:before,
.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
.react-datepicker-popper[data-placement^="top"]
  .react-datepicker__triangle:before,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow:before,
.react-datepicker__month-year-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow:before,
.react-datepicker__year-read-view--down-arrow,
.react-datepicker__year-read-view--down-arrow:before {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  position: absolute;
  border: 8px solid transparent;
  height: 0;
  width: 1px;
}
.react-datepicker-popper[data-placement^="bottom"]
  .react-datepicker__triangle:before,
.react-datepicker-popper[data-placement^="top"]
  .react-datepicker__triangle:before,
.react-datepicker__month-read-view--down-arrow:before,
.react-datepicker__month-year-read-view--down-arrow:before,
.react-datepicker__year-read-view--down-arrow:before {
  content: "";
  z-index: -1;
  border-width: 8px;
  left: -8px;
  border-bottom-color: #aeaeae;
}
.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {
  top: 0;
  margin-top: -8px;
}
.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle,
.react-datepicker-popper[data-placement^="bottom"]
  .react-datepicker__triangle:before {
  border-top: none;
  border-bottom-color: #f0f0f0;
}
.react-datepicker-popper[data-placement^="bottom"]
  .react-datepicker__triangle:before {
  top: -1px;
  border-bottom-color: #aeaeae;
}
.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow,
.react-datepicker__year-read-view--down-arrow {
  bottom: 0;
  margin-bottom: -8px;
}
.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
.react-datepicker-popper[data-placement^="top"]
  .react-datepicker__triangle:before,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow:before,
.react-datepicker__month-year-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow:before,
.react-datepicker__year-read-view--down-arrow,
.react-datepicker__year-read-view--down-arrow:before {
  border-bottom: none;
  border-top-color: #fff;
}
.react-datepicker-popper[data-placement^="top"]
  .react-datepicker__triangle:before,
.react-datepicker__month-read-view--down-arrow:before,
.react-datepicker__month-year-read-view--down-arrow:before,
.react-datepicker__year-read-view--down-arrow:before {
  bottom: -1px;
  border-top-color: #aeaeae;
}
.react-datepicker,
.react-datepicker-wrapper {
  display: inline-block;
}
.react-datepicker {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12.8px;
  font-size: 0.8rem;
  background-color: #fff;
  color: #000;
  border: 1px solid #aeaeae;
  border-radius: 0.3rem;
  position: relative;
}
.react-datepicker--time-only .react-datepicker__triangle {
  left: 35px;
}
.react-datepicker--time-only .react-datepicker__time-container {
  border-left: 0;
}
.react-datepicker--time-only .react-datepicker__time,
.react-datepicker--time-only .react-datepicker__time-box {
  border-radius: 0.3rem;
}
.react-datepicker__triangle {
  position: absolute;
  left: 50px;
}
.react-datepicker-popper {
  z-index: 1;
}
.react-datepicker-popper[data-placement^="bottom"] {
  margin-top: 10px;
}
.react-datepicker-popper[data-placement^="top"] {
  margin-bottom: 10px;
}
.react-datepicker-popper[data-placement^="right"] {
  margin-left: 8px;
}
.react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {
  left: auto;
  right: 42px;
}
.react-datepicker-popper[data-placement^="left"] {
  margin-right: 8px;
}
.react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {
  left: 42px;
  right: auto;
}
.react-datepicker__header {
  text-align: center;
  background-color: #f0f0f0;
  border-bottom: 1px solid #aeaeae;
  border-top-left-radius: 4.8px;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 4.8px;
  border-top-right-radius: 0.3rem;
  padding-top: 8px;
  position: relative;
}
.react-datepicker__header--time {
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
.react-datepicker__month-dropdown-container--scroll,
.react-datepicker__month-dropdown-container--select,
.react-datepicker__month-year-dropdown-container--scroll,
.react-datepicker__month-year-dropdown-container--select,
.react-datepicker__year-dropdown-container--scroll,
.react-datepicker__year-dropdown-container--select {
  display: inline-block;
  margin: 0 2px;
}
.react-datepicker-time__header,
.react-datepicker__current-month {
  margin-top: 0;
  color: #000;
  font-weight: 700;
  font-size: 15.104px;
  font-size: 0.944rem;
}
.react-datepicker-time__header {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.react-datepicker__navigation {
  background: none;
  line-height: 27.2px;
  line-height: 1.7rem;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 10px;
  width: 0;
  padding: 0;
  border: 7.2px solid transparent;
  border: 0.45rem solid transparent;
  z-index: 1;
}
.react-datepicker__navigation--previous {
  left: 10px;
  border-right-color: #ccc;
}
.react-datepicker__navigation--previous:hover {
  border-right-color: #b3b3b3;
}
.react-datepicker__navigation--previous--disabled,
.react-datepicker__navigation--previous--disabled:hover {
  border-right-color: #e6e6e6;
  cursor: default;
}
.react-datepicker__navigation--next {
  right: 10px;
  border-left-color: #ccc;
}
.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
  right: 80px;
}
.react-datepicker__navigation--next:hover {
  border-left-color: #b3b3b3;
}
.react-datepicker__navigation--next--disabled,
.react-datepicker__navigation--next--disabled:hover {
  border-left-color: #e6e6e6;
  cursor: default;
}
.react-datepicker__navigation--years {
  position: relative;
  top: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.react-datepicker__navigation--years-previous {
  top: 4px;
  border-top-color: #ccc;
}
.react-datepicker__navigation--years-previous:hover {
  border-top-color: #b3b3b3;
}
.react-datepicker__navigation--years-upcoming {
  top: -4px;
  border-bottom-color: #ccc;
}
.react-datepicker__navigation--years-upcoming:hover {
  border-bottom-color: #b3b3b3;
}
.react-datepicker__month-container {
  float: left;
}
.react-datepicker__month {
  margin: 6.4px;
  margin: 0.4rem;
  text-align: center;
}
.react-datepicker__time-container {
  float: right;
  border-left: 1px solid #aeaeae;
  width: 70px;
}
.react-datepicker__time-container--with-today-button {
  display: inline;
  border: 1px solid #aeaeae;
  border-radius: 0.3rem;
  position: absolute;
  right: -72px;
  top: 0;
}
.react-datepicker__time-container .react-datepicker__time {
  position: relative;
  background: #fff;
}
.react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box {
  width: 70px;
  overflow-x: hidden;
  margin: 0 auto;
  text-align: center;
}
.react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box
  ul.react-datepicker__time-list {
  list-style: none;
  margin: 0;
  height: calc(195px + 0.85rem);
  overflow-y: scroll;
  padding-right: 30px;
  width: 100%;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
.react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box
  ul.react-datepicker__time-list
  li.react-datepicker__time-list-item {
  padding: 5px 10px;
}
.react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box
  ul.react-datepicker__time-list
  li.react-datepicker__time-list-item:hover {
  cursor: pointer;
  background-color: #f0f0f0;
}
.react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box
  ul.react-datepicker__time-list
  li.react-datepicker__time-list-item--selected {
  background-color: #216ba5;
  color: #fff;
  font-weight: 700;
}
.react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box
  ul.react-datepicker__time-list
  li.react-datepicker__time-list-item--selected:hover {
  background-color: #216ba5;
}
.react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box
  ul.react-datepicker__time-list
  li.react-datepicker__time-list-item--disabled {
  color: #ccc;
}
.react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box
  ul.react-datepicker__time-list
  li.react-datepicker__time-list-item--disabled:hover {
  cursor: default;
  background-color: transparent;
}
.react-datepicker__week-number {
  color: #ccc;
  display: inline-block;
  width: 27.2px;
  width: 1.7rem;
  line-height: 27.2px;
  line-height: 1.7rem;
  text-align: center;
  margin: 2.656px;
  margin: 0.166rem;
}
.react-datepicker__week-number.react-datepicker__week-number--clickable {
  cursor: pointer;
}
.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
  border-radius: 0.3rem;
  background-color: #f0f0f0;
}
.react-datepicker__day-names,
.react-datepicker__week {
  white-space: nowrap;
}
.react-datepicker__day,
.react-datepicker__day-name,
.react-datepicker__time-name {
  color: #000;
  display: inline-block;
  width: 27.2px;
  width: 1.7rem;
  line-height: 27.2px;
  line-height: 1.7rem;
  text-align: center;
  margin: 2.656px;
  margin: 0.166rem;
}
.react-datepicker__day {
  cursor: pointer;
}
.react-datepicker__day:hover {
  border-radius: 0.3rem;
  background-color: #f0f0f0;
}
.react-datepicker__day--today {
  font-weight: 700;
}
.react-datepicker__day--highlighted {
  border-radius: 0.3rem;
  background-color: #3dcc4a;
  color: #fff;
}
.react-datepicker__day--highlighted:hover {
  background-color: #32be3f;
}
.react-datepicker__day--highlighted-custom-1 {
  color: #f0f;
}
.react-datepicker__day--highlighted-custom-2 {
  color: green;
}
.react-datepicker__day--in-range,
.react-datepicker__day--in-selecting-range,
.react-datepicker__day--selected {
  border-radius: 0.3rem;
  background-color: #216ba5;
  color: #fff;
}
.react-datepicker__day--in-range:hover,
.react-datepicker__day--in-selecting-range:hover,
.react-datepicker__day--selected:hover {
  background-color: #1d5d90;
}
.react-datepicker__day--keyboard-selected {
  border-radius: 0.3rem;
  background-color: #2a87d0;
  color: #fff;
}
.react-datepicker__day--keyboard-selected:hover {
  background-color: #1d5d90;
}
.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {
  background-color: rgba(33, 107, 165, 0.5);
}
.react-datepicker__month--selecting-range
  .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {
  background-color: #f0f0f0;
  color: #000;
}
.react-datepicker__day--disabled {
  cursor: default;
  color: #ccc;
}
.react-datepicker__day--disabled:hover {
  background-color: transparent;
}
.react-datepicker__input-container {
  position: relative;
  display: inline-block;
}
.react-datepicker__month-read-view,
.react-datepicker__month-year-read-view,
.react-datepicker__year-read-view {
  border: 1px solid transparent;
  border-radius: 0.3rem;
}
.react-datepicker__month-read-view:hover,
.react-datepicker__month-year-read-view:hover,
.react-datepicker__year-read-view:hover {
  cursor: pointer;
}
.react-datepicker__month-read-view:hover
  .react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-read-view:hover
  .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-year-read-view:hover
  .react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view:hover
  .react-datepicker__year-read-view--down-arrow,
.react-datepicker__year-read-view:hover
  .react-datepicker__month-read-view--down-arrow,
.react-datepicker__year-read-view:hover
  .react-datepicker__year-read-view--down-arrow {
  border-top-color: #b3b3b3;
}
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow,
.react-datepicker__year-read-view--down-arrow {
  border-top-color: #ccc;
  float: right;
  margin-left: 20px;
  top: 8px;
  position: relative;
  border-width: 7.2px;
  border-width: 0.45rem;
}
.react-datepicker__month-dropdown,
.react-datepicker__month-year-dropdown,
.react-datepicker__year-dropdown {
  background-color: #f0f0f0;
  position: absolute;
  width: 50%;
  left: 25%;
  top: 30px;
  z-index: 1;
  text-align: center;
  border-radius: 0.3rem;
  border: 1px solid #aeaeae;
}
.react-datepicker__month-dropdown:hover,
.react-datepicker__month-year-dropdown:hover,
.react-datepicker__year-dropdown:hover {
  cursor: pointer;
}
.react-datepicker__month-dropdown--scrollable,
.react-datepicker__month-year-dropdown--scrollable,
.react-datepicker__year-dropdown--scrollable {
  height: 150px;
  overflow-y: scroll;
}
.react-datepicker__month-option,
.react-datepicker__month-year-option,
.react-datepicker__year-option {
  line-height: 20px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.react-datepicker__month-option:first-of-type,
.react-datepicker__month-year-option:first-of-type,
.react-datepicker__year-option:first-of-type {
  border-top-left-radius: 4.8px;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 4.8px;
  border-top-right-radius: 0.3rem;
}
.react-datepicker__month-option:last-of-type,
.react-datepicker__month-year-option:last-of-type,
.react-datepicker__year-option:last-of-type {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-bottom-left-radius: 4.8px;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 4.8px;
  border-bottom-right-radius: 0.3rem;
}
.react-datepicker__month-option:hover,
.react-datepicker__month-year-option:hover,
.react-datepicker__year-option:hover {
  background-color: #ccc;
}
.react-datepicker__month-option:hover
  .react-datepicker__navigation--years-upcoming,
.react-datepicker__month-year-option:hover
  .react-datepicker__navigation--years-upcoming,
.react-datepicker__year-option:hover
  .react-datepicker__navigation--years-upcoming {
  border-bottom-color: #b3b3b3;
}
.react-datepicker__month-option:hover
  .react-datepicker__navigation--years-previous,
.react-datepicker__month-year-option:hover
  .react-datepicker__navigation--years-previous,
.react-datepicker__year-option:hover
  .react-datepicker__navigation--years-previous {
  border-top-color: #b3b3b3;
}
.react-datepicker__month-option--selected,
.react-datepicker__month-year-option--selected,
.react-datepicker__year-option--selected {
  position: absolute;
  left: 15px;
}
.react-datepicker__close-icon {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: inline-block;
  height: 0;
  outline: 0;
  padding: 0;
  vertical-align: middle;
}
.react-datepicker__close-icon:after {
  background-color: #216ba5;
  border-radius: 50%;
  bottom: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #fff;
  content: "\D7";
  cursor: pointer;
  font-size: 12px;
  height: 16px;
  width: 16px;
  line-height: 1;
  margin: -8px auto 0;
  padding: 2px;
  position: absolute;
  right: 7px;
  text-align: center;
  top: 50%;
}
.react-datepicker__today-button {
  background: #f0f0f0;
  border-top: 1px solid #aeaeae;
  cursor: pointer;
  text-align: center;
  font-weight: 700;
  padding: 5px 0;
  clear: left;
}
.react-datepicker__portal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  z-index: 2147483647;
}
.react-datepicker__portal .react-datepicker__day,
.react-datepicker__portal .react-datepicker__day-name,
.react-datepicker__portal .react-datepicker__time-name {
  width: 48px;
  width: 3rem;
  line-height: 48px;
  line-height: 3rem;
}
@media (max-height: 550px), (max-width: 400px) {
  .react-datepicker__portal .react-datepicker__day,
  .react-datepicker__portal .react-datepicker__day-name,
  .react-datepicker__portal .react-datepicker__time-name {
    width: 2rem;
    line-height: 2rem;
  }
}
.react-datepicker__portal .react-datepicker-time__header,
.react-datepicker__portal .react-datepicker__current-month {
  font-size: 23.04px;
  font-size: 1.44rem;
}
.react-datepicker__portal .react-datepicker__navigation {
  border: 12.96px solid transparent;
  border: 0.81rem solid transparent;
}
.react-datepicker__portal .react-datepicker__navigation--previous {
  border-right-color: #ccc;
}
.react-datepicker__portal .react-datepicker__navigation--previous:hover {
  border-right-color: #b3b3b3;
}
.react-datepicker__portal .react-datepicker__navigation--previous--disabled,
.react-datepicker__portal
  .react-datepicker__navigation--previous--disabled:hover {
  border-right-color: #e6e6e6;
  cursor: default;
}
.react-datepicker__portal .react-datepicker__navigation--next {
  border-left-color: #ccc;
}
.react-datepicker__portal .react-datepicker__navigation--next:hover {
  border-left-color: #b3b3b3;
}
.react-datepicker__portal .react-datepicker__navigation--next--disabled,
.react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {
  border-left-color: #e6e6e6;
  cursor: default;
}
._1xSRq,
.Iqoue {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}
.Iqoue {
  position: relative;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 0.16em;
  color: hsla(0, 0%, 100%, 0.87);
}
.ripple {
  position: relative;
  overflow: hidden;
}
@-webkit-keyframes _3fP4w {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _3fP4w {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3SvO5 {
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
@keyframes _3SvO5 {
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
@-webkit-keyframes _20DLS {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes _20DLS {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._31-GS {
  display: table;
  width: 100%;
}
._2yug_ {
  display: table-row;
}
._3CbXy {
  display: table-cell;
}
.TNti1 {
  height: 0.4em;
  line-height: 0.4em;
  color: #fdeed4;
  background-color: #24211a;
}
._2g5zq {
  height: 0.6em;
  line-height: 0.6em;
  color: hsla(0, 0%, 100%, 0.87);
  background-color: rgba(4, 4, 3, 0.8);
}
._2g5zq ._2CGxt {
  font-size: 0.16em;
}
._2CGxt {
  text-align: center;
  white-space: normal;
  word-wrap: break-word;
  font-size: 0.14em;
}
._2Fbzb {
  height: 0.6em;
  right: 0;
  margin: auto;
}
._2Fbzb,
._27-3w {
  position: absolute;
  width: 100%;
  left: 0;
}
._27-3w {
  top: 0;
  height: 100%;
  background: transparent;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}
._27-3w:after {
  content: "";
  width: 0.25em;
  height: 0.25em;
  background: transparent url(/assets/fa6343e7.png) no-repeat 50%;
  background-size: 0.25em 0.25em;
  -webkit-animation: _20DLS 1s linear infinite;
  animation: _20DLS 1s linear infinite;
}
._2NRf_ {
  text-align: center;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  pointer-events: none;
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
@-webkit-keyframes _2yYcs {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2yYcs {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _2s9hO {
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
@keyframes _2s9hO {
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
._1xSRq {
  margin-top: 0.32em;
}
._1xSRq,
.Iqoue {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}
.Iqoue {
  position: relative;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 0.16em;
  color: hsla(0, 0%, 100%, 0.87);
}
._11r0N {
  position: absolute;
  left: 5em;
  font-size: 0.14em;
  color: #fdeed4;
}
._3yw3o {
  margin: 0 1.71429em;
  font-size: 0.14em;
}
._1b09S {
  position: absolute;
  right: 4.85714em;
  width: 9.42857em;
  height: 2.28571em;
  border-radius: 7.14286em;
  font-size: 0.14em;
  line-height: 2.28571em;
  background: #7d7254;
  color: hsla(0, 0%, 100%, 0.87);
}
._1b09S:hover {
  color: #fff;
  background-color: #bbaa7d;
}
._4OY1W {
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
._3sau_ {
  font-size: 0.14em;
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

@-webkit-keyframes _3JsCi {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _3JsCi {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes fU87f {
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
@keyframes fU87f {
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
@-webkit-keyframes _2RmK9 {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes _2RmK9 {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._3qCqt {
  display: table;
  width: 100%;
}
._3qCqt .pdBO3 {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  height: 0.4em;
}
._3qCqt .pdBO3:nth-child(odd) {
  background-color: rgba(4, 4, 3, 0.5);
}
._3qCqt .pdBO3:nth-child(2n) {
  background-color: #161614;
}
._3qCqt .pdBO3 > :last-child {
  margin-left: 0.4em;
}
._3qCqt .pdBO3 ._1A02S {
  width: 1.2em;
}
._3qCqt .pdBO3 ._1A02S .BjGdY {
  text-align: left;
  font-size: 0.14em;
  line-height: 1;
  word-wrap: break-word;
  color: #fff;
}
.ja-JP ._3qCqt .pdBO3 ._1A02S .BjGdY {
  padding-right: 0.57143em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._3qCqt .pdBO3 ._1A02S .BjGdY .I2E58 {
  letter-spacing: 0.00714em;
  color: #fdeed4;
}
._3qCqt ._2Zupq {
  position: absolute;
  height: 0.6em;
  width: 100%;
  left: 0;
  right: 0;
  margin: auto;
}
._3qCqt ._2Zupq ._2ADF0 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}
._3qCqt ._2Zupq ._2ADF0:after {
  content: "";
  width: 0.25em;
  height: 0.25em;
  background: transparent
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAzFBMVEUAAAD97tT97tT97tT+79T979T97tP+7tT979P979P97tT+7tP+79P+7tP97tT979P+79T979T979P+79T79dX+7tP+7tT97tT97tb/7tD97tT97tP+7NL+8NT979P97tP979T97tT+8NX97tP879P97tT97tb97NL/8+D97tT87dT+7tT97tP97dP+79T97tP97tP97db97tP97tP97tP97tP87dP979T97tP97tT97dP97tP97tT979T879T87dL47dX87dP97dP979McF+feAAAARHRSTlMA5vPV3tvR4urN+PX62M/w4O787ATT2ugSDv5sHCBEP6JKGKgxYDYsB5C+uK14cmYnJJlbh0/HwZ2Ui37JglM7CrVXsd9RCHcAAAWRSURBVHja7dJ5c5pAHMbxJxo1pjlMs2mhIggq4i3eV7zy/t9TF3bZxZg2iRGY6fTDjP75fP0h/vvvJE593Sm3ptnLx0wJcesXK5mb79Qvz2W8AUqtnLu5ofOJBDjr9je6nlSAPb+6pttJBRitayqxAHN67bu5TiTAnlxzN+IETCwByvwbFRRcxx5Qy3nzNICJO0BrfWPkviy4zt2umjMLETJzfP51QH7QNV2CiJFRKvVNEAHp+VpBHLRmSgSIG+QWVcSkf5vyhS/QNgniYhdSDJ+nT7mO+OhXKRHAzFzEaP2QOgxY2YiTzvZFws8iQZzsn6mDgKaGWPXp/++ePoFnglhp6XtKBBR0xIu0vHmKJWRLiNnzPecHTC3ETJfz1E5FzLTLh3shtXMQt1Zo/n6qIm7DB889u0LWQtyUjDfPZUqIXeOBu6ePjthV2Tq7whLxaz5ILYLY6Y+Pjw9cTkP8WqGAIuK3efSwiClB/NqhABvxq149CnMkoCEDrlzEz8lcUSxggASMvXkeUEcCyleBxzISoFywce/RkYDhlZAmSMBABjwjCU8yoI4E9OX+BEmo/aRYwAhJmMkAE0nI/xQUJMC5EPtNJKF+cREkLJCEsQzoIQndC0FHEuYyoIQkVMR+jiAJOxFwh0Q0RcAUiViJgBYSkRYBbSSiIAJm+Ih/LyDxV7DKBXaIHJEQaOYu+DNF5BznOOAlF8gjcltHQKAsAi4JorblwgGNnFBCxIgqyICiDNDxSiwBpgzoIWJbRZAB/Zyn4BkhYqoiEAScAgugHy1ETLE4RYE0KQgKIkU0SxRAGngHYExEaqtxhwG1gvCMSCmlUlCwheTKgCYipbluyadpBCF5WVBHhBzXFQUIaxSoS98SEbL6lOtXWAjby4AVQXT6jEupCFMyl4KByKh1n99AcGAmAwaIjFutBgUaDpmXUh8R2VYp3qDikJOVAQ1ExLVlAV4byYBMCZHYbmyKRWh4rcrHLzOZzAKR6G9oAU/Y4kiZBWS8hioioBqGsaFsqo9jNvv1/ueO4PxsQxaoeEPbn2dqOLuSrusGb6jjLQadD9xZOLOtrssCBW96yQg/KgTntTFNM0io4m3VUMCPLs6qPjYpfgUVfzBi4xT9MnBG1no8Fgl9/ImaDwLox0rD2ajjtSwwCP5o780HZ2gqOBNnvN+vRYKGv6iwgB+e2/YWZ0HM4d4rGPsFNv7GWgW//5YqO+fZrw2HIsF851cZdNx36xdsz3B/s1bzCvhbsPCODpvn2gq+aLvu9bwCnlDHe0iFBXAtDV+iDos9r4C/BZ3gXdZUzKdv0+nJBl9Q6hWLfgFLGG/xAe7qVqAF6S7BiYjR7RZDBWsVH1LNButM2Tr1/B0ewN+Cgg8y0uIV+FbDE45A7E6n06VEgYYPM72CdEi7ik/Sistlh5IvwcUnGHcHBU9PT6MSPkHZPz8v/YJuUKDhU6qTdMgTlV24+CBruBiNRjRBFtQsfJLbDAf4BdnGhuBdpN5rNBYLHsALago+zaq8DqCa3T7+qrRfzOcygJ9gr+IEpCvmWQDz0tFVvEm1a6PZbDCQBfwlGASnMSah3y/c3d1VlsONRkKtmj0uLiqVSrlMAwY0oEED+A2KLk5mlY8D7ph8ftVqlweNxXxQrrR2u5eXdtsLkCfgATUVX7GeiAC2LgKY1WQybTZbreMAVtCp4ovU5dMbAXkWsPIDpocBMy+Av4TxFl9Xr9B56fgC9AQiQJ6A3qCo4TyMclY6vgB/BzSAFQxYQbGP87EHcv/4AjJA/guKLs6rvpyIADmfz4uAXZsW8IDGsITzc/RGXv4Dji4g/4bFKkFElPGoeXCBo4BB0VARrdJ+scsLq5UMGHRNDfFwXL33PJ9VXpqTaatdni86w03JwX//neI3GUohsT/4i6UAAAAASUVORK5CYII=)
    no-repeat 50%;
  background-size: 0.25em 0.25em;
  -webkit-animation: _2RmK9 1s linear infinite;
  animation: _2RmK9 1s linear infinite;
}
</style>
