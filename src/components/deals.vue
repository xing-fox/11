<template>
  <div class="LUSC0">
    <div class="_2m4z6"
         @click='close'></div>
    <span class="_3ny3q">牌手排行榜</span>
    <div class="Yu5_W">
      <div class="_3vppq">
        <div class="GiIvo">排名</div>
        <div class="YinPT">42</div>
      </div>
      <div class="_36f6I">
        <div class="_1k7v7"><img class="_3qPxB"
               src="../assets/dealer/game-avatar.jpeg"
               alt="dealerPicture">
          <div class="_3qPxB _1shuV _1y44k"></div>
        </div>
      </div>
      <div class="_207DG">CALLEJA</div>
      <div class="_3vppq">
        <div class="GiIvo">关注人数</div>
        <div class="YinPT">17</div>
      </div>
      <div class="tTV9W">
        <div class="GiIvo">加关注</div>
        <div class="a2rMV"
             role="button"
             tabindex="0"></div>
      </div>
    </div>
    <div class="_3MDkm">
      <div class="QQnv0">
        <div class="_2EwSm">排名</div>
      </div>
      <div class="_1ps-u">
        <div class="_2EwSm">牌手</div>
      </div>
      <div class="_2HE09">
        <div class="_2EwSm">关注人数</div>
      </div>
      <div class="_11x8A">
        <div class="_2EwSm">已关注</div>
      </div>
    </div>
    <div class="_2FIyy">
      <div style="position: relative; overflow: hidden; width: 100%; height: 100%;">
        <div class="_2Gj3P WpQs6"
             style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
          <div class="_12w-H">
            <template v-for="(name,index) in name_list">
              <div class="_5YKqt"
                   role="button"
                   :key='index'
                   tabindex="0">
                <div class="_3XFmm"
                     :class='index>=3?"": "_1BKCT"'>{{index+1}}</div>
                <div class=""
                     v-if=" index<3?true:false"
                     :class='index===0? "_1Amnz":index===1?"_1T719" :"_3c5nR"'></div>
                <div class="_1NRkg"
                     :class='index%5 ==0? "_2lWLd": index%3 ==0?"_3PhST":""'></div>
                <div class="_1fnjc">
                  <div class="_1k7v7">
                    <img class="_3qPxB"
                         :src="img_list[index]"
                         alt="dealerPicture">
                    <div class="_3qPxB _1shuV _1y44k"></div>
                  </div>
                </div>
                <div class="_3C9Ia">{{name}}</div>
                <div class="_2w7wX">{{21+Math.round(Math.random()*10+30)}}</div>
                <div class="vfbGq">
                  <div class=""></div>
                </div>
                <div class="_3cz3Q _1BKCT"></div>
              </div>
            </template>
            <div class="_5YKqt"
                 role="button"
                 tabindex="0">
              <div class="_3XFmm">20</div>
              <div class=""></div>
              <div class="_1NRkg _2lWLd"></div>
              <div class="_1fnjc">
                <div class="_1k7v7"><img class="_3qPxB"
                       src="/images/dealer_profile_pic/profile/picture/ae7d503d-0dea-478b-ba14-e1bf46d00c58.jpeg"
                       alt="dealerPicture">
                  <div class="_3qPxB _1shuV _1y44k"></div>
                </div>
              </div>
              <div class="_3C9Ia">GUILLEMER</div>
              <div class="_2w7wX">23</div>
              <div class="vfbGq">
                <div class=""></div>
              </div>
              <div class="_3cz3Q _1BKCT"></div>
            </div>
          </div>
        </div>
        <div style="display: none;">
          <div class="wveDM _3lscB"
               style="position: relative; display: block; height: 100%; width: 0px;"></div>
        </div>
        <div style="position: absolute; right: 2px; bottom: 2px; top: 2px; width: 5px;">
          <div class="wveDM JnJtV"
               style="position: relative; display: block; width: 100%; height: 108px; transform: translateY(0px);"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {name_list} from '@/utils/deals'
export default {
  name: 'deals',
  data () {
    return {
      enterstate: 1,
      active: 0,
      img_list: [],
      name_list: name_list
    }
  },
  methods: {
    close: function () {
      this.$store.dispatch('HistoryShow', false)
    },
    getImages: function (list) {
      // 获得图片
      var self = this

      name_list.forEach(function (value, index, array) {
        var url = index + 1
        // console.log(url)
        self.img_list[index] = require(`../assets/dealer/${url}.png`)
      })
      console.log('img---', self.img_list)
    }
  },
  created () {
    this.getImages()
  }
}
</script>

<style scoped>
@-webkit-keyframes _2bpYD {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2bpYD {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes qxpvj {
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
@keyframes qxpvj {
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
@-webkit-keyframes Xlekq {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes Xlekq {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._1BKCT {
  display: none;
}
.Yu5_W {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 0.2em;
  padding-left: 0.5em;
  height: 1.2em;
  width: 8.6em;
}
._3vppq {
  width: 1.07em;
}
._3vppq,
.tTV9W {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
}
.tTV9W {
  width: 1em;
  margin-left: 0.73em;
}
.GiIvo {
  font-size: 0.14em;
  letter-spacing: 0.00714em;
  color: hsla(0, 0%, 100%, 0.87);
}
.YinPT {
  height: 1.4em;
  line-height: 1.04em;
  font-size: 0.5em;
  font-weight: 600;
  color: #f8e3a9;
}
._1XZVu {
  height: 0.24em;
  width: 0.24em;
  background-size: contain;
  margin-left: -0.11em;
}
._36f6I {
  height: 0.72em;
  width: 0.72em;
  margin-left: 0.23em;
  margin-top: 0.03em;
}
.a2rMV {
  margin-top: 0.08em;
  margin-bottom: 0.22em;
  width: 0.4em;
  height: 0.4em;
  background-image: url(../assets/4a476ab9.png);
  background-size: contain;
  cursor: pointer;
}
.a2rMV._2mkoO {
  background-image: url(data:image/png;base64,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);
}
._207DG {
  width: 13.4em;
  height: 1.15em;
  margin-left: 0.7em;
  font-size: 0.2em;
  line-height: 1;
  color: #fdeed4;
}
.Yyd6K {
  width: auto;
  margin-top: 0.11em;
  display: -ms-flexbox;
  display: flex;
}
._1iMOu {
  height: 0.24em;
  width: 0.24em;
  background-image: url(data:image/png;base64,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);
  background-size: 100% 100%;
  margin-right: 0.12em;
}
._3Pg8q {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  width: auto;
  text-align: left;
  font-size: 0.2em;
  line-height: 1;
  color: #fff;
}
._1wrdf {
  height: 0.24em;
}
.pzJtZ {
  width: 1.37em;
  height: 0.2em;
}
._3MDkm,
.pzJtZ {
  display: -ms-flexbox;
  display: flex;
}
._3MDkm {
  -ms-flex-align: center;
  align-items: center;
  height: 0.4em;
  background-color: #24211a;
  margin-top: 0.15em;
  padding: 0 0.5em;
  font-weight: 600;
  color: #fdeed4;
}
._3MDkm .QQnv0 {
  width: 1.03em;
}
._3MDkm ._1ps-u {
  width: 1.3em;
  margin: auto;
  padding-right: 0.26em;
}
._3MDkm ._2HE09 {
  width: 2.84em;
}
._3MDkm ._11x8A {
  width: 0.68em;
}
._3MDkm ._2EwSm {
  text-align: center;
  font-size: 0.14em;
  letter-spacing: 0.00714em;
}
._2FIyy {
  height: 4.2em;
}
._39jRZ {
  height: 3.6em;
}
.JnJtV {
  border-radius: 4px;
  background-color: rgba(125, 114, 84, 0.8);
}
.JnJtV:hover {
  background-color: hsla(44, 31%, 61%, 0.8);
}
._12w-H {
  -webkit-overflow-scrolling: touch;
}
._5YKqt {
  height: 0.6em;
  outline: none;
  display: -ms-flexbox;
  display: flex;
}
._5YKqt:nth-child(odd) {
  background-color: rgba(4, 4, 3, 0.5);
}
._5YKqt:nth-child(2n) {
  background-color: #161614;
}
._5YKqt:hover {
  background-color: rgba(125, 114, 84, 0.5);
}
._3XFmm {
  width: 1.35em;
  color: hsla(0, 0%, 100%, 0.6);
  text-align: center;
  margin: auto 0;
  margin-left: 4.4em;
  font-size: 0.2em;
}
._1Amnz,
._1T719,
._3c5nR {
  width: 0.24em;
  height: 0.38em;
  margin-left: 0.9em;
  margin-top: 0.11em;
  background-size: contain;
  background-repeat: no-repeat;
}
._1Amnz {
  background-image: url(../assets/edf9ad54.png);
}
._1T719 {
  background-image: url(../assets/6f2fdf58.png);
}
._3c5nR {
  background-image: url(../assets/4d3ba35c.png);
}
._1NRkg {
  width: 0.26em;
  height: 0.16em;
  margin: auto 0;
  margin-left: 0.35em;
  background-size: contain;
  background-repeat: no-repeat;
}
._3PhST {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAABGdBTUEAALGPC/xhBQAAApdJREFUWAntVkluVDEQreoOBDaIHYiAxCLkEIhNFCXdEsmGowCBG7Bg2sMxIEjdYQgLxCZHIEggQW6AULcSTJXL/i4Pf+iI3qD8je0aXr1fZZcNUPzMeBfMyMQ6J+jF0toVm1cY1YTM9bzsXQzPplrhYfyYQSWKrrwznBoBw5vRRGtDiCo2fk+NQgK8kRl/CUYa0htwDDM6APP5vA4XkJQ0cFBCPW010Mb5XEoQ/XZqhKnArtkRzHqimwIOFxMZxBSropMzDgO4ndv8ZoUQIx1RO/q0RjKqAZhlYlJkFDNkAA8SawhDahT/QmrUtMabv1l9cgAHvtAUhHSPWvTzVJu9czaB5u3tpjCh1tqKnWFikyTi/ibg+htt4uc5QObsTcsgcRVi5+fiijsyHu9A4XcCQOSMDwAWHrvYh1TtpToQAYidtwEHT5yzDLhBIGeulkB6EDnDfXJ+Gjn7Ba79LIEQg6M1Z0POw2fevjhakMVrovtzN9iYveth4Wbm3SXZB+MXuW73ipdJDnD1mxd0Gm1OxDJUoZNnbvQfADT0g/4vKjH3g/38z/+FhDegGb8unY9Z4PPT3OZtd/70VXLvTAH6d+paRhNkdwLlwCn2zETaCXQLfGIi9edAakxXPHdmfc33HlKruxxHxJfS8pAuXfudBeD+Sc+pQg/VvjmB2sDUY/mGxw3fZzUOkPyQOuGKdLzuRMIxqlI9SR41yP253GJjCrKyHRNWwLynS+Doo3uG+Ixke0QywMcpSzX3dv7jGYJrQkwEBzcAuH3jgVN5IlyaWywTAjjYomO0SWt6C/buSeCWu8Ehtg64+iMQga9E5gPAhYt0ZD+xbyiBXPv0HJjTx0QAllP0fBOmFnNenxI4zcCct1g7/F8iMioTHJ93tgAAAABJRU5ErkJggg==);
}
._2lWLd {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAABGdBTUEAALGPC/xhBQAAAoRJREFUWAntVr1uE0EQnrsqCrFImcrnBqWIlIaOgEifh0DKi5A8CBJvkRKbwAvQ0ty5QBFpUIyTiCLLfLf+jtm7vTvHOEJCOVnenZ/vm9nV7syKtH25DB1sqXW4lN1BJdOjUrRPrGs1x6QS6ti6IUij7gy5crDI77K3ZeUA2GoIvNqEXLK8bqtyqBso9zsgKaX+QARH6AsZnZSyF4YT5hAYLcKzGSSNHKNIGmMjQgIUs1HXu0o6to3rIcB2xbayLSoON5dWZpBJfiLiDv0uZuM2IE/ZXG6uEklP4ZfUncmsho9OkkyJs00ZDK5lNvOA9NQH9MgGAQlJRBkRLZD63rE6Tr2eD+Gw2NS8i3s956ArQp/tf8kAu/1Nnm/2rZf2QrLPPB8pJ7/kcn4h+0/o1DYq+JMT98LJ3Vv4pDievBi38uNnF8kCfADgSKblNahuYx9JIcNzjRyAQRRcJiyHqW3I9hYyUpciETfVuvbKRsYcX0AAhSWBbD+mbXUNAhhjJDGwJWrMQeIvU3dVbgCtAiRWjs2jS4g51nW+TTktefiSYiT6W+H768u4QswA8pjA4w4EO6DX5s19ympwmpYQ8CSZSnZsXcsEeOm1jr1HWcY7Z52JIDB6AJ40d+LeocCwRpQJ2JLus3OHi0TGXeXdriQ2x1sKLQCB0UPoY185jUKEzFjRCdBCM9mQp0c78mVOXVchQuAbmZ1pB3hJf4w2MPXBGYASu4HCzf7kHd1rtBbtSZOuHfErHp7jIWiDgwucsbddYwd8wD//sR1RkDbH5Jm+PHe8Z3KhPe8rex7RsRXTxrE3ATrGEqGtPi4TmJilEyCgK5H7BCbfyiMSYb/GfGWifw38DQapHyqpkk2cAAAAAElFTkSuQmCC);
}
._1fnjc {
  width: 0.48em;
  height: 0.48em;
  margin: auto 0;
  margin-left: 0.3em;
  background-size: contain;
  background-repeat: no-repeat;
}
._3C9Ia {
  width: 19.92857em;
  height: 1em;
  font-size: 0.14em;
  line-height: 1;
  color: #fdeed4;
  margin: auto 0;
  margin-left: 1.78571em;
}
.vfbGq {
  margin: auto 0;
  margin-left: 1.43em;
}
._1mRPr,
.vfbGq {
  width: 0.24em;
  height: 0.24em;
}
._1mRPr {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAABGdBTUEAALGPC/xhBQAADZZJREFUaAXlWWtwVdUVXufcR17mQQICCc8o8oiYhBAEsQlgCMGpaXUKbcF2pq2iM3Va0XGGmVqs40zFqYpTn6XiqKgzlGmtYss7BCqIISEEBKUSiEASJAQIEkxy7z2n39r7rJNz700M8qM/2p3cu/de77X22s9L1E8xGN46tdw2DG7a+Bg0bO8mw8+IkG1pGNoja7fQCRCajOgMh6nHthXw31PmoG2R4rAhpfnrTuoqmEWmaVIECKWDuRoKSm0wKUB+ww4XzrioojCni8vZHF3QGla72TBOTJ2rgSwHZcSeDdQxd8Egs8eyaOTezcqS1FVP07Gb51F7x8XzxuHC2SC1yZo1k8ztu8Fj06T91YY5qX670WPZFK76UHGFbLuKRUaZ1Tat4hmy7YcYwRhlPkI1pGajS6caLVPLn7XIXmqAysafi3X7DLEpp3aLijQdLyrTLrBkxxsCagzi3N3WTifnLSC/YQJkXlah5Rgz4emuy1RyeA+z0ck1a+kI4q+1GWpMDCOy2tV+sGCWRws4tBWul4ZtVN3YsP02l0GJxVd9wawMy7aaYXIycuP5KQ07fiW4q6qjNLRNm8dB0gUY9t/nM5dk7dnwZ5HuMuj0ZDCDhMvpg5MTg3sqM5uRohEQRUAXRsQiINAfpw/C09PK5yiGU8VlC5nYYiKpHYYwxOSohIpQT8TephhCFq1V0tDrlQzmlGQaVbuVaiZ/R1nIaa8YuMGEPKqjIS0CqJE7isbseI9qb7qVsoIJSjPDufjBdwyhyW3IL6G83RvpurqtClELyelMrCT3BsK8YV/VdawhaPro0Mz51HmsiWonl1CK309hpDdLZiYkpwqdCtWhwtln4XQWi2bnTZ2TOrqKgmgyJgnjnS7R/oISpIORzbRaFqM1gXc6uwwaTbQvv/QvmPgLgDhXmGkONaqrw4ITAd5+XLt9+u0LybJWQUi6QjrmGjYdM/3Gzwd9tGFHHJMHEGcR484UV0TI0OuZuCOEkpx6VYxy9+zQvZuGeGSrpvCpTuvUecg+LVjiKgyiyI2qk85CJ3gIbBleuzlH+FRuc+ckFsAwWSaGk4dUDTEPs3xU7gMe4aFXw88poPHDajZR4uK7dN+2s08WOYsp5CoPmorKLqCtYswLmS7aRMdQB9Zb2cizMViFuYQ7L9OB6fMoMyEB3Jof9brRdVsWqjUM2Z2utgAQ8zqZ/c4rFMwdTU0zbkdKaRUSChqcRWM3rlWCOakPfe9uyggEKQOzAI6hCL29gHtK3edT5ogc6rYidK6nm2498C8yYSWXo0VlFCycTKNeXan6ZzZX0RcPP0Zp/gD5TG2xjIEiwJdhmufG1W3N0gqK55ZGwuFqjYQPMKLLCtPFUA/dvGM9JQwZrFCfP/VH6nh7HSX7IFjLZVGazbFc2080Ib00YFT/LixY+nTKnHst5DvvB1I4JXsiEbocCVMC5nqiz69XPBCIIJda+GCdmZg4duKejU0sx8Vzh8sB7/aAvsSuN++1aOnLvFdQw+jI31+doQQ5X3EKBNkwZc4cKxLZJv3+FGEhsnEWyS3cX90ktP9bdb8hYjftmZWp50OhVzCzFym3JRcxoEjDlZkjUx4x1q2T3aLPyPSpoGPGgsye8FctWPAStOAYXoeL9aHZMnhM2qj+FLlrkYg4U1y+rCt8sR1WJ3Bm8If3P/64fUjmnYal45CYfabpYrhtxvxSkMSVKA++nFbxlm1biz2RcBiEjFX0VRy8QYux8L3jpRBOOl08/w7LjrwfhXSxGiqK3dnj6PPMMQokJOYM2fV+i8jRiw16ETsM4Vqiu6nwIRnF7aueAjgtjVfhAoRX0p7urmbVdCjUGJwqLl/Dxshe4OBUnJmZLeePjAWvmuoD1YmL7lTHG+YR/ubi8h+KDKUAa9DdShCgShGkqT4MZCfYA/WnlLk9Sl16H2UuvV/J8s8tdQ3ChrRGFPjtoiWBL+iY7rOZKLJpRK0zmsL9zlzxKKWWlap+w89+SYkNn1ISFkQu8CSgGvjyNxknZiqzBYKabYwqjmKBDcW+kIT9gcveysWUdKKZgtg7ZCyEjmvTtsNTWRx/VFjS09RBL3HWLQqm4IxjGoRr+LrVrvCPZ1dS0skWSsIyzja4YwTa40XlE1BheTesLhzCIZzPb0TB785lOA17+nG65kff10rR5wEcsWEtJWAr5bJ7WhmlnL9IibiBcWFDekcHYfZRN8N9DwzN9SHov+AOe9BWV0/njx2na3FATrllGhk413buqaXcnevJn6HPXrsKSigdaRRUwuEW/rmwF1oR8an1QYYp1BF1A+Oeoc7CF7EnB4ryacobLzFNVPkw7xa1yQcgXA6lsle4msAxvr5KyVb+8W1LfWACA1IDCRTad4D2VOpFVDTsyptB6YGAulaxteyxGjfhd4KEcJ4XHh1Agx5VxIDyOLC6a5AV5vETtGvWHWSFwrQLlrNiP4IrsfZOODXJHIV+n+82UeBEj+gT7MVux1lcWOll3LX5JsMHer4QchE6jjcX6esDg9GTV1+ll3ngNAca/mAwVwZIXGfmJAhORVh8EO7iAVdpC4AKldNnvknpJSnMJ8VVMKFm83Fc9+/j64gI4pqLEuKBiwFqGYH5PMj8MQ1fHp+FNJf+dr0T4CcFtxWH7VCNF+1djoXOW7MQf3JiVt5Hm8554dyOUyAE+24qrYXgIulzLekoZyLug+btwoadd3vpvO1+FQhRfUHJIhx8Hoew6wUGuw4aPnPplPrt7rmpF/dfbg3owZXaYy9ZEvjq8KmxkbCZbRtWtm3Z2QhqOl4ivsQRp8UyjVby+05l7Xzv5JXKvBK6q3Lg/PSKMThzPwEFC5ElQT3WWhTnOO9XOtc5iXTb3cM8VgF2FmvNyqyhweeM9esve1BX3LxiB9qmV1RiXXsDeZkBmxDcvnVwAkc5pBJZw/rm8EANaghS8M6MmvXHPdBvbH6jA/b8+Qln2q3XYOwiiWistNgIs19e/6Qtiq5khEAbQto9MOTjDati9cX2RW4snJ8SlmF9fzJWYRzhABbHORg7IrEeuu4DYVBXwG+UDN69cW+cXgcQ50DHjHmZnWG7EVGPuseJgAHs7Q2/Ixn2qi2Iay68KAtMAWIExnT19kXGxuy9m+Yr+pivKAdaeXKGrc+gwt3sYugRlOhJGTtCA+Fj5Uk/ubICxyeTLr/LLx/iRm888JRQN7xmUzHmmBMKzek60IabXld311lcbYIyEXtJPAJjIygWXEXNR5DUe39Kg5b8JIr7wp/epEuvvqVhoho17No6onazPnM6HK4DeIl/B0P7417voxyNUhDdYRGihTHS1vwSDK4VlvMHkc74zVJK46h7itXdTY0PLydrVw0FcZD2eXDSNMm3eGRd7/1PSW2eWjE+ZIeROvEl2hzgJYG5Rok1UAH7+8JD2OA/LFdnaS9J6EIHfXL/QxQ6dIRSYDg/3gbUY7+XSreRokfxgDZOMOpuCeOL+AjVV2EDGWemptC1K5bThTfXUndNvYoz08vyKnXcHACvMSiNhj2/ghIn3hCl4uvmVjp4D34JONVKyTg3puAxLuCMlJbN8eIDUe8+gub154rK0jPrtnYwjXIAh8uJfZuPg2dyEo148wVKGDNKKU+aXkQ2tuG2J56hS+s364wRbajFEa7NnGGU8/LTFETtLV8dPkKHljxIZsclvMkh2n4+qrPrbLCmFDncYyekMLyDfHwn+5hhKoUai8vusiL2XwXA5IzgyPPLY2c4RIN+UEnjlj/CTzdM5pb2l1+n86+ucR3hQ3AQkc558Sny4xLpLe0f7qHPfr2MEnoiuM/51LXLwPKi1hVlCev95lWOKfxpI5PGVr/exbIV29Hi8pFWJHxCKRPrUbPjlmFRd8TCy2aEuvDgmFE6k2587vfkQz57y4W//5Mu7dhN2St+S2YMrvXdD6hxOVIIDPxYyXcXjoOKuUefV57bZguFBk2k08FxddtuErzjN/GPX89iqJYKwlsrRyAlhF9yuuBMN1Io+caJlL9qJQWcy6yXXtpNL62m5hdX45XVD8NNZTinuERZ6Ly14JRzXoTb9pWNr9/inuNdB+wFC3xHGs+exs+Xg1mJpJ20VQ0hnFZ8C2QnOL18I7Kp8LUXKClnuFJhQ8CRx56k9r/9Q0Wbb+d+ThM92K4ZV9NA9N+asK8qatNwHWCBLUV3JF+wLn2OZnbvxGESzxiqnp5iYRjLP9iyIwby/Zrx11EnVihOEzbcx08fPGU87BwYCQowbpthXGJXHR4vR8Dbefu3x13NohxQAjASh46erYOkfO7HFrGFay6sMIwP/7Ewvj4j4J6IuwYo+l5vRIID7rcy+AnkqUn1Vcv6IolzQIgOFM4uhbItWCECYjTj4iIk4XRC+G3NjaUX/VwjZRqNxOC0vm7bQtevA0JwoGD2Iqxzq3FF5EUkvsRaIN5KgAfCx0oEPeZLo8/wVebVbzsci47tD+iAMHxWODe72wqtxgGsQmzSuGiLebLqdOpbtOC41kVLA18PcmVlfjo9GvvjqtjQV923lr4oPTCkkdFQMHsh6nts08brLgXUBFA04p4jup9Ziw2Rf2j8wPBbzxbU7qz3iP9WzatyYCANjTirXLB7svGSl0ahwJm0zJ7WsdXVaucciPf/Dv8fsyZSOu5t+9kAAAAASUVORK5CYII=);
  background-size: contain;
  background-repeat: no-repeat;
}
._2w7wX,
._3cz3Q {
  width: 2.85714em;
  height: 1em;
  font-size: 0.14em;
  line-height: 1;
  text-align: center;
  margin: auto 0;
  margin-left: 1.71429em;
  color: hsla(0, 0%, 100%, 0.87);
}
._1CWZl {
  height: 0.4em;
  width: 8.3em;
  margin: auto;
}
.xgIbt {
  height: 2.11111em;
  width: 50%;
  opacity: 0.8;
  border-radius: 0.27778em 0.27778em 0 0;
  border: 0.01em solid transparent;
  background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(#111),
      color-stop(32%, #171717),
      to(#202020)
    ),
    -webkit-gradient(linear, left top, left bottom, from(#555), to(#080808));
  background-image: linear-gradient(0deg, #111, #171717 32%, #202020),
    linear-gradient(180deg, #555, #080808);
  background-origin: border-box;
  background-clip: content-box, border-box;
  font-size: 0.18em;
  font-weight: 600;
  line-height: 2.22222em;
  text-align: center;
  color: #fff;
}
.xgIbt[disabled] {
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#bea878),
      to(#8a784e)
    ),
    -webkit-gradient(linear, left top, left bottom, from(#ead9b4), to(#8a784e));
  background-image: linear-gradient(180deg, #bea878, #8a784e),
    linear-gradient(180deg, #ead9b4, #8a784e);
  color: #1f1502;
}
._2rvJa {
  height: 0.4em;
  right: 0;
  margin: auto;
}
._2rvJa,
._3fqFh {
  position: absolute;
  width: 100%;
  left: 0;
}
._3fqFh {
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
._3fqFh:after {
  content: '';
  width: 25px;
  height: 25px;
  background: transparent url(/assets/fa6343e7.png) no-repeat 50%;
  background-size: 25px 25px;
  -webkit-animation: Xlekq 1s linear infinite;
  animation: Xlekq 1s linear infinite;
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
</style>
