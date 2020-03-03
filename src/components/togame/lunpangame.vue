<template>
  <div class="mGmDp _2pNum LUNPAN">
     <div style='position:absolute;height:2.78em;width:10.88em;z-index:1' class='time-rotate'>
      <div class="_1w0j-">
        <div class="flash-zhezhao" style="display:none">{{curr_date.year}}</div>
        <div class="flash-zhezhao1" style="display:none"> {{curr_date.hour}}</div>
      </div>
    </div>
    <!-- VIDEO -->
    <div class="_1RAKD">
      <div class="_1QPxJ _2O7_F"
           style="position: absolute;">
        <div class="Video__root _3j8Hg">
          <div class="FlvPlayer__root _3j8Hg flash-inner">
            <canvas width="294"
                    height="221"></canvas>
            <video x5-video-player-type="h5"
                   playsinline=""
                   webkit-playsinline=""
                   src="">Your browser is too old which does not support HTML5 video.</video>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="GyqT1">
      <div class="_3RQS9"></div>
    </div>
    <div class="_2ZPev _2QS10 _3qcEG">
      <div class="_3BmJY"></div>
      <div class="_3BmJY"></div>
    </div>
    <div class="_2ZPev _3qcEG">
      <div class="_12Aje"></div>
      <div class="_12Aje"></div>
    </div>
    <!-- v-show='desk_status[gameId]&&desk_status[gameId]["status"]==2?true:false':class='desk_status[gameId]&&desk_status[gameId]["status"]==1?"hide":""' -->
    <div role="button"
         tabindex="0"
         :disabled='desk_status[gameId]&&desk_status[gameId]["status"]==1?true:false'
         class="_2lHa6 "
         :class='desk_status[gameId]&&desk_status[gameId]["status"]==2?"_3RAlp":"" '>
      <span class="_3yxS1">游戏结果视频</span>
      <div class="_3Mh4Z"></div>
    </div>
    <div class="_2cqzU flash-result">
      <div class="_1QPxJ"
           style="position: absolute;">
        <div class="Video__root _3j8Hg">
          <div class="FlvPlayer__root _3j8Hg flash-inner1">
            <!-- <canvas width="283"
                    height="242"></canvas>
            <video x5-video-player-type="h5"
                   playsinline=""
                   webkit-playsinline=""
                   src="">Your browser is too old which does not support HTML5 video.</video> -->
          </div>
        </div>
      </div>
    </div>
    <!-- 计时器 -->
    <div class="adckm">
      <div class="_2TLsm">
        <div class="_3oqMK "
             :class=" timeclass ">
          <div class="_2j-4n">
            <div class="E7lbC"></div>
            <div class="_1_1v4">
              <div id="left-circle"
                   class=""
                   :class="leftclass"
                   :style="leftTime"></div>
            </div>
            <div class="_1lx_N">
              <div id="right-circle"
                   :class="rightclass"
                   :style="rightTime"></div>
            </div>
            <div class="F05i1"
                 v-if='circlecol'></div>
          </div>
          <div class="_2XWnD"
               v-if="desk_status[gameId]&&desk_status[gameId]['status']==1?true:false">{{desk_status[gameId]['bet_interval']}}</div>
        </div>

        <div class="siB5g"
             v-if="desk_status[gameId]&&desk_status[gameId]['status']!=1?true:false">
          <div class="_6HB3 _1nR3K">{{desk_status[gameId]['text']}}</div>
        </div>

      </div>
    </div>
    <!-- 彩池 -->
    <div class="P9dDv">
      <div class="_1YNLs _1ntud">
        <div class="_27QHH">
          <div class="_2jbzU">
            <div class="_2enaz">
              <span class="_2tog7">
                <span>轮盘</span>
              </span>
              <div role="button"
                   tabindex="0"
                   class="_1Htk0"></div>
            </div>
            <div class="_2e_lZ">{{desk.inning?desk.inning:''}}</div>
          </div>
          <div class="_2jbzU">
            <span class="_2tog7">限红</span>
            <div class="_2e_lZ">{{desk.max_bet?formatCurrency(desk.max_bet):''}}</div>
          </div>
          <div class="_2jbzU">
            <span class="_2tog7">牌手</span>
            <div class="_1JJJw">
              <div class="_2iulk _3XTUt"
                   role="button"
                   tabindex="0">{{name}}</div>
              <div class="fRFjh"
                   role="button"
                   tabindex="0"></div>
            </div>
          </div>
        </div>

        <div class="_24Bwp">最近结果</div>
        <div class="_2fHau">
          <div class="E2nQg _1u2uO">
            <div style="position: relative; overflow: hidden; width: 100%; height: 100%;">
              <div class="_2Gj3P WpQs6"
                   style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
                <div class="_3QEFC">
                  <template v-for="(one,index) in leijidata">
                    <div class="_3rxt2"
                         :key='index'>
                      <div class="_2n_YF">
                        <div class="_1g4Aw "
                             :class='one.ball==0?"eEr76":one.hong==1?"_3Rof1":"_1Uiuu"'>
                          <div class="_253E9 RPDJq">{{one.ball}}</div>
                        </div>
                        <div class="_2I1Qa">
                          <div class="_253E9">{{one.da==1?"大":"小"}}</div>
                        </div>
                        <div class="_2I1Qa">
                          <div class="_253E9">{{one.dan==1?"单":"双"}}</div>
                        </div>
                        <div class="_2I1Qa">
                          <div class="_253E9">{{one.zu_1==1?"组1":one.zu_2==1?"组2":"组3"}}</div>
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
                <div class="wveDM _1280x"
                     style="position: relative; display: block; width: 100%; height: 30px; transform: translateY(0px);"></div>
              </div>
            </div>
          </div>
          <div class="_7uP3i">
            <div class="_1DTtZ"
                 v-if='desk_status[desk.id]&&desk_status[desk.id]["text"]=="结算中"?true:false'>
              <div class="_3TFh3 EVPpU">
                <template v-if="lpresult['ball']==0?false:true">
                  <div class="_2TOJB">
                    <div class="_2O2JJ "
                         :class="lpresult['hong']==1?'_273qE' :'_1a8s6'">
                      <div class="_2U6Rs _2kZje">
                        {{lpresult['ball']==0?'':lpresult['ball']}}
                      </div>
                    </div>
                  </div>
                  <div class="_1k_1Y">
                    <div class="JKh2J">
                      <div class="_2U6Rs">
                        {{lpresult['dan']==0?'双':'单'}}
                      </div>
                    </div>
                    <div class="JKh2J">
                      <div class="_2U6Rs">
                        {{lpresult['da']==0?'小':'大'}}
                      </div>
                    </div>
                    <div class="JKh2J">
                      <div class="_2U6Rs">
                        {{lpresult['zu_1']==1?'组 1':lpresult['zu_2']==1?'组 2':'组 3'}}
                      </div>
                    </div>
                    <div class="JKh2J">
                      <div class="_2U6Rs">
                        {{lpresult['hang_1']==1?'行 1':lpresult['hang_2']==1?'行 2':'行 3'}}
                      </div>
                    </div>
                  </div>

                </template>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="_2Ob7v"></div>
    <!-- canvas -->
    <div class="_3RmZi"
         @drop="drop($event)"
         @dragover="dragover">
      <div class="_1w0j- undefined">
        <div class="gX-xw _2HNWr yYlob _31x02 xiazhu"
             style="display: none;">
          <div class="_2RYLa OBOwe"
               @click='cancelXiazhu($event)'
               role="presentation">
            <div class="_1k3sv"></div>
          </div>
          <div class="_2RYLa _1m_7V"
               @click='sandXiazhu($event)'
               role="presentation">
            <div class="_1k3sv"></div>
          </div>
        </div>
        <canvas width="2176"
                height="1002"
                class='zuobu'
                ref='zuobu'
                @click='zuobuclick($event)'
                @mouseout='zuobumouseout($event)'
                @mousemove='zuobumousemove($event)'
                style="touch-action: none; cursor: inherit;"></canvas>
      </div>
    </div>

    <!-- tishi -->
    <div class="_1e-cn"
         v-if='bet_status[gameId]&&bet_status[gameId]!="0"?true:false'>
      <div class="_24bGH">
        <div class="MWKSW _2K8nf">
          <div class="_2et_L "
               :class='bet_status[gameId]?bet_status_text[bet_status[gameId]]["class"]:""'></div>
        </div>
        <div class="_2A_Cv _1ZTAQ">
          <div>
            {{bet_status[gameId]?(bet_status[gameId]=='3'?failtxt[gameId]:bet_status_text[bet_status[gameId]]["text"]):''}}
          </div>
        </div>
      </div>
    </div>

    <!-- 输  -->
    <div class="_1e-cn"
         v-if="bet_result[desk.id]&&bet_result[desk.id]['status']=='1'&&bet_result[desk.id]['lose']?true:false">
      <div class="_3Uo-7 _24bGH _1vNlh">
        <div class="_1nXit">{{bet_result[desk.id]&&bet_result[desk.id]['lose']?bet_result[desk.id]['lose']:''}}</div>
      </div>
    </div>

    <!--赢  -->
    <div class="_1e-cn"
         v-if="bet_result[desk.id]&&bet_result[desk.id]['status']=='1'&&bet_result[desk.id]['win']?true:false">
      <div class="_3TGE0">
        <div class="_3ElU_">
          <div class="_3ZY70">
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_3uGQK">
              <div class="_1VH9L">
                <div class="_3FHpz">
                  <div class="_37VXA">
                    <div class="_3BY-J"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="_1N094">
          <div class="_2IwUZ"></div>
        </div>
        <div class="_2JF_w"></div>
        <div class="_37Qd7">
          <div class="_3_qV3">
            <div class="_1XVRm _3Cwru _1dEXQ">
              <div class="LnRDC _3YcCQ">
                赢得
              </div>
              <div class="LnRDC _2ZAjS">
                赢得
              </div>
            </div>
            <div class="_1XVRm _3GXBP">
              <div class="LnRDC _3YcCQ _3VFdI">
                <span>{{bet_result[desk.id]&&bet_result[desk.id]['win']?bet_result[desk.id]['win']:''}}</span>
              </div>
              <div class="LnRDC _3VFdI _3fa_L">
                <span>{{bet_result[desk.id]&&bet_result[desk.id]['win']?bet_result[desk.id]['win']:''}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- caichi -->
    <div class="_4DarF">
      <div class="_27Eds">
        <div class="XxpYt">
          <div class="_2FC9R">即时彩池</div>
        </div>
        <template v-if='!showmoneypool'>
          <div class="_3BbLR">
            <div class="RMDly">
              <div class="_7m0-e _2M5ND"></div>
            </div>
            <span class="_2RBfb">{{moneypool.hong}}</span>
          </div>
          <div class="_3BbLR">
            <div class="RMDly">
              <div class="_7m0-e I6qKo"></div>
            </div>
            <span class="_2RBfb">{{moneypool.hei}}</span>
          </div>
          <div class="_3BbLR">
            <div class="_2FC9R">单</div>
            <span class="_2RBfb">{{moneypool.dan}}</span>
          </div>
          <div class="_3BbLR">
            <div class="_2FC9R">双</div>
            <span class="_2RBfb">{{moneypool.shuang}}</span>
          </div>
          <div class="_3BbLR">
            <div class="_2FC9R">大</div>
            <span class="_2RBfb">{{moneypool.da}}</span>
          </div>
          <div class="_3BbLR">
            <div class="_2FC9R">小</div>
            <span class="_2RBfb">{{moneypool.xiao}}</span>
          </div>
        </template>

        <template v-if='showmoneypool'>
          <div class="_3BbLR">
            <div class="_2FC9R">
              组 1
            </div>
            <span class="_2RBfb">{{moneypool.zu_1}}</span>
          </div>
          <div class="_3BbLR">
            <div class="_2FC9R">
              组 2
            </div>
            <span class="_2RBfb">{{moneypool.zu_2}}</span>
          </div>
          <div class="_3BbLR">
            <div class="_2FC9R">
              组 3
            </div>
            <span class="_2RBfb">{{moneypool.zu_3}}</span>
          </div>
          <div class="_3BbLR">
            <div class="_2FC9R">
              列 1
            </div>
            <span class="_2RBfb">{{moneypool.hang_1}}</span>
          </div>
          <div class="_3BbLR">
            <div class="_2FC9R">
              列 2
            </div>
            <span class="_2RBfb">{{moneypool.hang_2}}</span>
          </div>
          <div class="_3BbLR">
            <div class="_2FC9R">
              列 3
            </div>
            <span class="_2RBfb">{{moneypool.hang_3}}</span>
          </div>
        </template>
        <div class="_27gjQ">
          <div class="_2VYIf"
               @click='showpool'
               role="presentation"></div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="_10B-u">
      <div class="_3pHdk">
        <div class="_3PLUl">
          <div class="_3PCiL">
            <div class="_1vLy9"></div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">16</div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">31</div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">09</div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">26</div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">17</div>
          </div>
        </div>
        <div class="_3Ca1a">
          <div class="_3PCiL">
            <div class="_3eTbS"></div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">06</div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">15</div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">35</div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">32</div>
          </div>
          <div class="_2MJfc">
            <div class="_1SFMh">10</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { name_list, img_list, ba_desk_list, diff_desk_list, codes, formatCurrency, chips } from '@/utils/deals'
import zrender  from 'zrender'
import videojs from 'video.js'
import 'videojs-flash/dist/videojs-flash';
export default {
  name: 'lunpangame',
  components: {
    //LpLeiJi
  },
  data () {
    return {
       curr_date:{year:"",hour:""},
      notNum: { "hong": 1, "hei": 1, "dan": 1, "shuang": 1, "da": 1, "xiao": 1, "zu_1": 1, "zu_2": 1, "zu_3": 1, "hang_1": 1, "hang_2": 1, "hang_3": 1, },
      lpresult: { "hong": 0, "hei": 0, "dan": 0, "shuang": 0, "da": 0, "xiao": 0, "zu_1": 0, "zu_2": 0, "zu_3": 0, "hang_1": 0, "hang_2": 0, "hang_3": 0, 'ball': 0 },
      formatCurrency: formatCurrency,
      canvas_desk: ba_desk_list.concat(diff_desk_list.bp_desk_list, diff_desk_list.lh_desk_list),
      showmoneypool: false,
      enterstate: 1,
      name: "",
      active: 0,
      timeclass: "",
      gameId: '',
      desk_status: {},
      leftclass: "",
      leftTime: "",
      rightclass: "",
      rightTime: "",
      desk_pai: {},
      leijidata: {},
      moneypool: {},
      desk: {},
      circlecol: false,
      changedesk: "",
      chips: chips,
      chip: "",
      count: 0,
      effect: true,
      music_Array: [],
      myAudio: document.createElement("audio"),
      current_lang: "zh_cn",
      myGameAudio: document.createElement("audio"),
      game_effect: true,
      count: 0,
      images: null,
      imgCtx: {},
      local_list: {},
      curr_qu: "",
      coinStack: {},
      o: {},
      bet_status: {},
      failtxt: {},
      desk_result: {},
      bet_result: {},
      bet_status_text: { 0: { class: "", text: '' }, 1: { class: "_2eSL8", text: '投注中' }, 2: { class: "axlsv", text: '成功下注' }, 3: { class: "_1YINl", text: '投注失败' } },
      zuobuevent: false
    }
  },
  methods: {
    drop: function (event) {
      this.changedesk = event.dataTransfer.getData('desk_id')
      this.global.sendMessage("exit_desk", { desk_id: this.gameId });
      var id = this.changedesk
    },
    dragover (event) {
      event.preventDefault()
    },
    showpool: function () {
      this.showmoneypool = !this.showmoneypool
    },
    playGameEffect: function (url, boo) {
      if (!this.game_effect) {
        return;
      }
      if (boo) {
        this.myGameAudio = null
        this.myGameAudio = new Audio();
        this.myGameAudio.src = url;
        this.myGameAudio.play();
      } else {
        this.myGameAudio.src = url;
        this.myGameAudio.play();
      }
    },
    playEndedHandler: function () {
      this.myAudio.src = this.music_Array.shift();
      this.myAudio.play();
      console.log(this.music_Array.length);
      if (this.music_Array.length == 0) {
        this.myAudio.removeEventListener('ended', this.playEndedHandler, false);
      } else {
        this.myAudio.addEventListener('ended', this.playEndedHandler, false);
      }
    },
    playEffect: function (url, boo) {
      if (!this.effect) {
        return;
      }
      if (boo) {
        this.myAudio = null
        this.myAudio = new Audio();
        this.myAudio.src = url;
        this.myAudio.play();
      } else {
        this.myAudio = new Audio();
        this.myAudio.preload = true;
        this.myAudio.controls = true;
        this.myAudio.src = this.music_Array.shift();         //每次读数组第一个元素 

        this.myAudio.addEventListener('ended', this.playEndedHandler, false);
        this.myAudio.play();
      }
    },
    getImages: function () {
      var self = this
      self.name = img_list[this.gameId][self.curr_timer]['name']
    },
    stopBet: function (vo) {
      if ((vo.desk_id + '') !== this.gameId) { return }
      var self = this;
      var id = vo.desk_id
      if (!self.desk_status[id]) {
        self.$set(self.desk_status, id, {})
      }
      self.$set(self.desk_status[id], 'status', '2')
      self.$set(self.desk_status[id], 'text_timer', 0)
      self.$set(self.desk_status[id], 'text', '停止投注')
      $(".flash-result").show()

      this.rePlay1()
      this.videoPlay1();
      console.log("停止下注====" + JSON.stringify(vo));
      self.removeEvents();
      self.clearzuobuxiazhu()
      self.o = {};
      $.each(self.coinStack, function (key, val) {
        self.xiaZhu(key, val, true)
      })
      $.each(self.imgCtx, function (name, value) {
        self[name].attr({ style: { opacity: '0' } });
      })

    },
    removeEvents: function () {
      this.zuobuevent = false;
      console.log('停止下注')
    },
    zuobuevents: function () {
      this.zuobuevent = true;
    },
    bottomDateTime: function () {
      var self = this;
      var date = new Date();
      var year = date.getUTCFullYear();
      var month = date.getUTCMonth() + 1;
      var day = date.getUTCDate();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      //var curr_time =self.curr_timer;

      month < 10 ? month = "0" + month : month = month;
      day < 10 ? day = "0" + day : day = day;

      if (hours >= 0 && hours < 3) {
        if (self.curr_timer != 0) {
          self.curr_timer = 0
          self.getImages()
        }
      } else if (hours >= 3 && hours < 6) {
        if (self.curr_timer != 3) {
          self.curr_timer = 3
          self.getImages()
        }
      } else if (hours >= 6 && hours < 9) {
        if (self.curr_timer != 6) {
          self.curr_timer = 6
          self.getImages()
        }
      } else if (hours >= 9 && hours < 12) {
        if (self.curr_timer != 9) {
          self.curr_timer = 9
          self.getImages()
        }
      } else if (hours >= 12 && hours < 15) {
        if (self.curr_timer != 12) {
          self.curr_timer = 12
          self.getImages()
        }
      } else if (hours >= 15 && hours < 18) {
        if (self.curr_timer != 15) {
          self.curr_timer = 15
          self.getImages()
        }
      } else if (hours >= 18 && hours < 21) {
        if (self.curr_timer != 18) {
          self.curr_timer = 18
          self.getImages()
        }
      } else if (hours >= 21 && hours < 24) {
        if (self.curr_timer != 21) {
          self.curr_timer = 21
          self.getImages()
        }
      }
      var id = self.gameId;

      if (self.desk_status[id]['status'] == '1') {

        var timer = parseInt(self.desk_status[id]['bet_interval']) - 1
        this.leftclass = '_1LrD-'
        this.rightclass = '_20BrN'
        self.leftTime = "animation-delay: " + (timer - self.desk_status[id].inning_interval) + "s; animation-duration: " + self.desk_status[id].inning_interval * 2 + "s"
        self.rightTime = "animation-delay: " + (timer - self.desk_status[id].inning_interval) + "s; animation-duration: " + self.desk_status[id].inning_interval * 2 + "s"

        if (timer <= 10) {
          self.timeclass = ' _3kkQD _3Isfd'
          //self.circlecol = true
        } else {
          self.timeclass = ''
          self.circlecol = false
        }
        if (timer <= 0) {
          this.leftclass = ''
          this.rightclass = ''
          self.$set(self.desk_status[id], 'status', '2')
          self.$set(self.desk_status[id], 'text', '停止投注')
          self.$set(self.desk_status[id], 'text_timer', 0)
        } else {
          self.$set(self.desk_status[id], 'bet_interval', timer < 10 ? "0" + timer : timer)
        }
        //console.log(this.animateTimer)     
      } else if (self.desk_status[id]['status'] == '2') {

        if (self.desk_status[id]['text_timer'] < 3) {
          self.$set(self.desk_status[id], 'text_timer', self.desk_status[id]['text_timer'] + 1)
        } else {
          self.$set(self.desk_status[id], 'text_timer', 0)
          self.$set(self.desk_status[id], 'text', '结算中')
        }
        self.timeclass = ' _3kkQD'
        self.circlecol = true
        self.leftclass = ''
        self.rightclass = ''
      } else {
        self.$set(self.desk_status[id], 'text', '洗牌中')

        self.timeclass = ' _3kkQD'
        self.circlecol = true
        self.leftclass = ''
        self.rightclass = ''
      }


      //self.$set(self.desk_status[id],'bet_interval' ,(vo.bet_interval)<10?"0"+(vo.bet_interval):(vo.bet_interval))
      // console.log(curr_time,hours)
      hours < 10 ? hours = "0" + hours : hours = hours;
      minutes < 10 ? minutes = "0" + minutes : minutes = minutes;
    },
    closeBetNotice: function (index) {
      var self = this
      setTimeout(function () { self.$set(self.bet_status, index, '0') }, 1000);
      //关闭弹框
    },
    hide: function (index) {
      $('.xiazhu').hide()
    },
    failtext: function (vo) {
      var str;
      if (vo.callback == "enter_desk") {
        console.log("进桌子失败", JSON.stringify(vo))
      }
      switch (vo.code) {
        case 301: {
          str = "余额不足";
          break;
        };
        case 302: {
          str = "超出上限";
          break;
        };
        case 303: {
          str = "低于下限";
          break;
        };
        case 304: {
          str = "下注失败";
          break;
        };
        case 305: {
          str = "下注失败";
          break;
        };
        default: {
          str = "下注失败";
          break;
        };
      };
      this.$set(this.failtxt, vo.data.desk_id, str)
      return str
    },
    clearAll: function (vo) {
      var self = this
      //清理牌
      if (self.desk_pai[vo.desk_id]) {
        self.$set(self.desk_pai, vo.desk_id, { left: {}, right: {} })
      }
      //清理下注成功的结果
      if (self.desk_pai[vo.desk_id]) {
        self.$set(self.desk_result, vo.desk_id, {})
      }
      self.clearzuobuxiazhu()
      self.clearxiazhu()
      self.coinStack = {};
      //通知结果
      self.lpresult = { "hong": 0, "hei": 0, "dan": 0, "shuang": 0, "da": 0, "xiao": 0, "zu_1": 0, "zu_2": 0, "zu_3": 0, "hang_1": 0, "hang_2": 0, "hang_3": 0, 'ball': 0 }
    },
    setStatus: function (vo) {
      var self = this
      var id = vo.id
      if (!self.desk_status[id]) {
        self.$set(self.desk_status, id, {})
      }
      self.$set(self.desk_status[id], 'inning_interval', vo.inning_interval)
      if (vo.status == "1") {

        this.leftclass = '_1LrD- '
        this.rightclass = '_20BrN'
        self.leftTime = "animation-delay: " + (vo.bet_interval - vo.inning_interval) + "s; animation-duration: " + vo.inning_interval * 2 + "s"
        self.rightTime = "animation-delay: " + (vo.bet_interval - vo.inning_interval) + "s; animation-duration: " + vo.inning_interval * 2 + "s"

        self.$set(self.desk_status[id], 'status', '1')
        self.$set(self.desk_status[id], 'text', '接受投注')
        self.$set(self.desk_status[id], 'bet_interval', (vo.bet_interval) < 10 ? "0" + (vo.bet_interval) : (vo.bet_interval))
        self.$set(self.desk_status[id], 'luzhu', 'true')
        $(".flash-result").hide()
        self.zuobuevents();
      } else if (vo.status == "3") {
        self.$set(self.desk_status[id], 'status', '3')
        self.$set(self.desk_status[id], 'text', '洗牌中')
        self.$set(self.desk_status[id], 'luzhu', 'false')
        self.leftclass = ''
        self.rightclass = ''
        $(".flash-result").show()

        self.removeEvents();
        this.rePlay1()
        this.videoPlay1();
      } else {
        self.$set(self.desk_status[id], 'status', '2')
        self.$set(self.desk_status[id], 'text', '结算中')
        self.$set(self.desk_status[id], 'luzhu', 'false')
        self.leftclass = ''
        self.rightclass = ''
        $(".flash-result").show()
        self.removeEvents();
        this.rePlay1()
        this.videoPlay1();
      }
    },
    startBet: function (vo) {
      if ((vo.desk_id + '') !== this.gameId) { return }
      console.log('开始投注', vo)
      //倒计时 隐藏
      var self = this;
      var id = vo.desk_id
      this.isJPXZ = true
      this.success_JP = {}
      if (!self.desk_status[id]) {
        self.$set(self.desk_status, id, {})
      }
      self.$set(self.desk_status[id], 'status', '1')
      self.$set(self.desk_status[id], 'text', '')
      self.$set(self.desk_status[id], 'bet_interval', (vo.bet_interval) < 10 ? "0" + (vo.bet_interval) : (vo.bet_interval))

      self.leftTime = "animation-delay: -2s; animation-duration: " + vo.inning_interval + "s"
      self.rightTime = "animation-delay:-2s; animation-duration: " + vo.inning_interval + "s"
      self.leftclass = ''
      self.rightclass = ''
      self.clearAll(vo)
      this.rePlay1()
      $(".flash-result").hide()
      self.zuobuevents();
      self.$set(self.desk, 'boot', vo.boot)
      self.$set(self.desk, 'inning', vo.inning)
    },
    EnterDesk: function (vo) {
      console.log("请求进桌信息------------------")
      this.global.sendMessage("desk_info", { desk_id: this.gameId });
    },
    exitDesk: function (vo) {
      //console.log("退出自选桌子",vo)
      //this.global.sendMessage("enter_desk",{bet_addition_id:this.$store.state.userLimitID,desk_id:this.gameId})
    },
    onDeskInfoGame: function (vo) {
      var self = this
      console.log("进桌信息", vo, self.$store.state.coinStacks[18])
      self.desk = vo;
      self.$set(self.desk_status, vo.desk_id, {})
      self.setStatus(vo)

      self.$store.dispatch('SetExchangeDesk', { changedeskid: self.gameId })
      self.$store.dispatch('SetZiXuanDesk', [self.gameId])
      videojs.options.flash.swf = "./static/video-js.swf"
      setTimeout(function () {
        self.rePlay();
        self.$store.commit('GAMEREADY', true)
      }, 30)
    },
    onEnterDesk: function (vo) {
      //退桌子 如果是从右边进桌子
      var id = this.changedesk ? this.changedesk : this.$store.state.zixuan_gameid
      console.log("单个进桌子的id -----", id)
      if (id == '16') {
        this.$store.dispatch('SetuPage', "SHAIBAOGAME")
      } else if (this.canvas_desk.indexOf(id) !== -1) {
        this.$store.dispatch('SetuPage', "GAME")
      } else if (id == '18') {
        this.$store.dispatch('SetuPage', "QUEJIU")
      } else if (id == "19") {
        this.$store.dispatch('SetuPage', "SANGONG")
      } else if (id == 21) {
        this.$store.dispatch('SetuPage', "DOUNIU")
      } else {
        return
      }

      this.$store.commit('ZIXUANTOGAME', '')
      this.$router.push({ name: 'sunbet', params: { id: id } })
      this.$store.commit('GAMEREADY', false)
      this.changedesk = ''
      this.$store.state.zixuan_gameid = ''
      this.rePlay1()
      if (this.$store.state.playerGame && !this.$store.state.playerGame.disposed) {

        // this.$store.LPplayerGame.dispose()
        // this.$set(this.$store.state.LPplayerGame, 'disposed', true)
        this.$store.state.playerGame.dispose()
        this.$set(this.$store.state.playerGame, 'disposed', true)
      }
    },
    onLPResultHistory: function (vo) {
      var self = this
      self.leijidata = vo.history
      //console.log(vo.history)
    },
    onLPMoneyPool: function (vo) {
      // console.log('即时彩池==' + JSON.stringify(vo))
      this.moneypool = vo
    },
    rePlay: function () {
      var videoPlayer = $("#my-player")[0];
      if (typeof (videoPlayer) != "undefined") {
        this.myPlayer = videojs('my-player');
        this.myPlayer.dispose();
      }
      this.videoPlay();
    },
    onLpCard: function (vo) {
      this.lpresult = vo.result;
      this.$set(this.lpresult, 'ball', vo.ball)
      console.log("轮盘发牌==" + JSON.stringify(vo));
    },
    videoPlay: function () {
      var self = this
      var url = self.desk['video_url_1']
      $(".flash-inner").html('<video id="my-player" class="video-js vjs-v6" preload="auto" autoplay="true" lang="zh-cn" role="region" aria-label="Video Player"><source src="' + url + '" type="rtmp/flv"/></video>')
      this.myPlayer = videojs('my-player');
      $(".video-js").css({
        "width": "100%",
        "height": "100%"
      });
      this.$store.commit('PLAYERGAME', this.myPlayer)
      videojs("my-player", {}, function onPlayerReady () {
        console.log('Your player is ready!');
        this.play();
        this.on('canplay', function () {
          console.log('canplay!');
          self.videoTimePositionGame()
          self.showzhezhao()
        });
        this.on('waiting', function () {
          console.log('waiting!');
          clearTimeout(delay_showTime);
        });
        this.on('ended', function () {
          console.log('Awww...over so soon?!');
        });
      });

    },
    videoTimePositionGame:function (){
      this.changeTime(8.8,30.4,8,0.3,0.3)
      this.changeTime1(5.84,20.4,7,0.3,0.3)
    },
    rePlay1: function () {
      var videoPlayer = $("#my-player1")[0];
      if (typeof (videoPlayer) != "undefined") {
        this.myPlayer1 = videojs('my-player1');
        this.myPlayer1.dispose();
        this.$set(this.$store.state.LPplayerGame, 'disposed', true)
      }

    },
    videoPlay1: function () {
      var self = this
      var url = self.desk['video_url_2']
      $(".flash-inner1").html('<video id="my-player1" class="video-js1 vjs-v6" preload="auto" autoplay="true" lang="zh-cn" role="region" aria-label="Video Player"><source src="' + url + '" type="rtmp/flv"/></video>')
      this.myPlayer1 = videojs('my-player1');
      $(".video-js1").css({
        "width": "100%",
        "height": "100%"
      });
      this.$store.commit('LPPLAYERGAME', this.myPlayer1)
      this.$set(this.$store.state.LPplayerGame, 'disposed', false)
      videojs("my-player1", {}, function onPlayerReady () {
        console.log('Your player is ready!');
        this.play();
        this.on('canplay', function () {
          console.log('canplay!');
          // self.videoTimePositionGame()
          // self.showzhezhao()
        });
        this.on('waiting', function () {
          console.log('waiting!');
          clearTimeout(delay_showTime);
        });
        this.on('ended', function () {
          console.log('Awww...over so soon?!');
        });
      });
    },
    listmoney: function (x, y, imgurl) {
      var onemoney = new zrender.Image({
        style: {
          image: './static/chip/sb_chip.png',
          width: 64,
          height: 64
        },
        silent: true,
        position: [x, y]
      });

      return onemoney;
    },
    nolmalmoneytxt: function (x, y, text) {
      var rects = new zrender.Text({
        position: [x, y],
        name: 'one',
        style: {
          text: text,
          width: 96,
          height: 72,
          moneytxt: text,
          textAlign: 'center',
          textPosition: 'bottom',
          textDistance: 0,
          textFill: '#fff',
          font: '20px Arial'
        }
      });
      return rects;
    },
    creatGroup: function () {
      var moneyGroup = new zrender.Group();
      moneyGroup.position = [0, this.x_loca];
      return moneyGroup;
    },
    zuobumouseout: function (evt) {
      if (!this.zuobuevent) { return }
      //console.log(evt)
      var _this = this;
      $.each(_this.imgCtx, function (name, value) {
        _this[name].attr({ style: { opacity: '0' } });
      })
      if (_this.curr_qu) {
        if (self.curr_qu) {
          var curr_qu = self.curr_qu.split('-')
          curr_qu.forEach((item, index, arr) => {
            self[item].attr({ style: { opacity: '.3' } });
          })

          if (curr_qu == "hang_1") {
            for (var i = 3; i <= 36; i += 3) {
              self[i].attr({ style: { opacity: '.3' } });
            }
          }
          if (curr_qu == "hang_2") {
            for (var i = 2; i <= 35; i += 3) {
              self[i].attr({ style: { opacity: '.3' } });
            }
          }
          if (curr_qu == "hang_3") {
            for (var i = 1; i <= 34; i += 3) {
              self[i].attr({ style: { opacity: '.3' } });
            }
          }

          if (curr_qu == "zu_1") {
            for (var i = 1; i <= 12; i++) {
              self[i].attr({ style: { opacity: '.3' } });
            }
          }
          if (curr_qu == "zu_2") {
            for (var i = 13; i <= 24; i++) {
              self[i].attr({ style: { opacity: '.3' } });
            }
          }
          if (curr_qu == "zu_3") {
            for (var i = 25; i <= 36; i++) {
              self[i].attr({ style: { opacity: '.3' } });
            }
          }
          if (curr_qu == "xiao") {
            for (var i = 1; i <= 18; i++) {
              self[i].attr({ style: { opacity: '.3' } });
            }
          }
          if (curr_qu == "da") {
            for (var i = 19; i <= 36; i++) {
              self[i].attr({ style: { opacity: '.3' } });
            }
          }
          if (curr_qu == "shuang") {
            for (var i = 2; i <= 36; i += 2) {
              self[i].attr({ style: { opacity: '.3' } });
            }
          }
          if (curr_qu == "dan") {
            for (var i = 1; i <= 35; i += 2) {
              self[i].attr({ style: { opacity: '.3' } });
            }
          }
          if (curr_qu == "hong") {
            for (var i = 1; i <= 9; i += 2) {
              self[i].attr({ style: { opacity: '.3' } });
              self[18 + i].attr({ style: { opacity: '.3' } });
            }
            for (var i = 12; i <= 18; i += 2) {
              self[i].attr({ style: { opacity: '.3' } });
              self[18 + i].attr({ style: { opacity: '.3' } });
            }
          }
          if (curr_qu == "hei") {
            for (var i = 11; i <= 17; i += 2) {
              self[i].attr({ style: { opacity: '.3' } });
              self[18 + i].attr({ style: { opacity: '.3' } });
            }
            for (var i = 2; i <= 10; i += 2) {
              self[i].attr({ style: { opacity: '.3' } });
              self[18 + i].attr({ style: { opacity: '.3' } });
            }
          }

        }
      }
      $(this.element).css({ 'cursor': 'default' });
    },
    zuobumousemove: function (evt) {
      if (!this.zuobuevent) { return }
      this.movequ = this.istupian(evt.offsetX, evt.offsetY)
    },
    xiaZhu: function (curr_qu, _num, flag) {
      //下注 
      var self = this;
      if (!self.chouma) {
        return
      }
      var curr_qu
      if (!curr_qu) { curr_qu = self.curr_qu }
      if (!curr_qu) { return; }
      var _group;
      var num;

      var cur_y = 0;
      var x = 0
      var curr_loc

      if (typeof (curr_qu) != "object") {
        curr_loc = self.local_list[curr_qu]

        if (Object.keys(self.local_list[curr_qu]['group']).length == 0) {
          self.local_list[curr_qu]['group'] = self.creatGroup();
          self.local_list[curr_qu]['group'].position = [curr_loc.x, curr_loc.y + self.x_loca];
          self.zr.add(self.local_list[curr_qu]['group'])
        }
        _group = self.local_list[curr_qu]['group'];

      }

      if (_group.childCount() > 0) {
        num = _num ? _num : parseInt(_group.childOfName('one').style.moneytxt) + self.chouma;
        _group.removeAll()
      } else {
        if (_num != undefined) {
          num = _num
        } else {
          num = self.chouma
        }
      };

      _group.add(self.listmoney(0, 0));
      _group.add(self.nolmalmoneytxt(33, 20, num));

      if (typeof (curr_qu) != "object") {
        if (self.coinStack[curr_qu]) {
          self.o[curr_qu] = num - self.coinStack[curr_qu];
        } else {
          self.o[curr_qu] = num
        }
      }

      if (flag) {
        $('.xiazhu').hide()
      } else {
        $('.xiazhu').css({ 'display': 'flex', 'left': curr_loc.tan.left, 'top': curr_loc.tan.top })
      }
    },
    getServerBetInfos: function (obj) {
      var self = this;
      //下注成功的历史
      for (var k in obj) {
        if (typeof obj[k] != "object") {
          self.$set(self.coinStack, k, obj[k]);
        } else {
          for (var j in obj[k]) {
            self.$set(self.coinStack, j, obj[k][j]);
          }
        }
      }

      // this.$set(this.$store.state.coinStacks, 18, this.coinStack);

      // this.$set(this.$store.state.coinStacks, "inning_18", this.desk.inning);

      this.$store.commit("COINSTACKS", this.$store.state.coinStacks)
      console.log("下注成功历史==" + JSON.stringify(this.coinStack));
    },
    sandXiazhu: function (event) {
      var self = this;
      var index = this.gameId;
      //发送下注
      let bet = { lp_shu: {} }

      for (var name in self.o) {
        if (self.notNum[name]) {
          bet[name] = self.o[name]
        } else {
          bet["lp_shu"][name] = self.o[name]
        }
      }
      self.playGameEffect("./static/sound/se/click_btn.mp3", true)
      if (index == 20) {
        self.global.sendMessage("lunpan_bet", { desk_id: index, bets: bet });
      } else {

      }
      self.$set(self.bet_status, index, '1');
      self.hide()
      console.log('下注发送', bet)
      event.cancelBubble = true
    },
    cancelXiazhu: function (event) {
      var gameId = this.gameId
      var self = this
      self.playGameEffect("./static/sound/se/click_btn.mp3", true)
      //取消下注 
      $.each(self.local_list, function (key, val) {
        Object.keys(self.local_list[key]['group']).length && self.local_list[key]['group'].removeAll();
        self.zr.refresh();
      });
      self.o = {};
      console.log("取消下注coinStack==================", self.coinStack)
      $.each(self.coinStack, function (key, val) {
        self.xiaZhu(key, val, true)
      })
      self.clearxiazhu()
      event.cancelBubble = true
    },
    updateUser: function (credit) {
      var self = this
      //更改用户信息
      self.$set(self.$store.state.user, 'money', formatCurrency(credit))
    },
    onLpBetSuccess: function (vo) {
      if ((vo.desk_id + '') !== this.gameId) { return }

      var self = this
      self.playGameEffect("./static/sound/se/bet_success.mp3", true)
      self.o = {}
      self.getServerBetInfos(vo.bets)
      self.$set(self.bet_status, vo.desk_id, '2')//下注成功
      console.log("下注成功==" + JSON.stringify(vo));
      //关闭弹框
      self.closeBetNotice(vo.desk_id)
      self.updateUser(vo.credit)
    },
    clearzuobuxiazhu: function () {
      var self = this
      $.each(self.local_list, function (key, val) {
        Object.keys(self.local_list[key]['group']).length && self.local_list[key]['group'].removeAll();
        self.zr.refresh();
      });
    },
    clearxiazhu: function () {
      var container = this.element;
      var self = this
      $('.xiazhu').hide();
      if (self.curr_qu) {
        var curr_qu = self.curr_qu.split('-')
        curr_qu.forEach((item, index, arr) => {
          self[item].attr({ style: { opacity: '0' } });
        })

        if (curr_qu == "hang_1") {
          for (var i = 3; i <= 36; i += 3) {
            self[i].attr({ style: { opacity: '0' } });
          }
        }
        if (curr_qu == "hang_2") {
          for (var i = 2; i <= 35; i += 3) {
            self[i].attr({ style: { opacity: '0' } });
          }
        }
        if (curr_qu == "hang_3") {
          for (var i = 1; i <= 34; i += 3) {
            self[i].attr({ style: { opacity: '0' } });
          }
        }

        if (curr_qu == "zu_1") {
          for (var i = 1; i <= 12; i++) {
            self[i].attr({ style: { opacity: '0' } });
          }
        }
        if (curr_qu == "zu_2") {
          for (var i = 13; i <= 24; i++) {
            self[i].attr({ style: { opacity: '0' } });
          }
        }
        if (curr_qu == "zu_3") {
          for (var i = 25; i <= 36; i++) {
            self[i].attr({ style: { opacity: '0' } });
          }
        }
        if (curr_qu == "xiao") {
          for (var i = 1; i <= 18; i++) {
            self[i].attr({ style: { opacity: '0' } });
          }
        }
        if (curr_qu == "da") {
          for (var i = 19; i <= 36; i++) {
            self[i].attr({ style: { opacity: '0' } });
          }
        }
        if (curr_qu == "shuang") {
          for (var i = 2; i <= 36; i += 2) {
            self[i].attr({ style: { opacity: '0' } });
          }
        }
        if (curr_qu == "dan") {
          for (var i = 1; i <= 35; i += 2) {
            self[i].attr({ style: { opacity: '0' } });
          }
        }
        if (curr_qu == "hong") {
          for (var i = 1; i <= 9; i += 2) {
            self[i].attr({ style: { opacity: '0' } });
            self[18 + i].attr({ style: { opacity: '0' } });
          }
          for (var i = 12; i <= 18; i += 2) {
            self[i].attr({ style: { opacity: '0' } });
            self[18 + i].attr({ style: { opacity: '0' } });
          }
        }
        if (curr_qu == "hei") {
          for (var i = 11; i <= 17; i += 2) {
            self[i].attr({ style: { opacity: '0' } });
            self[18 + i].attr({ style: { opacity: '0' } });
          }
          for (var i = 2; i <= 10; i += 2) {
            self[i].attr({ style: { opacity: '0' } });
            self[18 + i].attr({ style: { opacity: '0' } });
          }
        }

      }
      $(container).css({ 'cursor': 'default' });
      self.curr_qu = ''
    },
    zuobuclick: function (evt) {
      if (!this.zuobuevent) { return }
      var _this = this
      _this.playGameEffect("./static/sound/se/click_coin_btn.mp3", true)
      var curr_qu = this.istupian(evt.offsetX, evt.offsetY, true);


      if (!curr_qu) { return };
      _this.curr_qu = curr_qu;
      console.log("click---------------------", _this.curr_qu)
      _this.xiaZhu(curr_qu);
    },
    omwsBetFail: function (vo) {
      var self = this
      var gameId = self.gameId;
      self.playGameEffect("./static/sound/se/error_alert.mp3", true)
      console.log("下注失败==" + JSON.stringify(vo))
      self.failtext(vo)
      self.clearzuobuxiazhu();
      $.each(self.coinStack, function (key, val) {
        self.xiaZhu(key, val, true)
      })
      self.o = {};
      self.clearxiazhu()
      self.$set(self.bet_status, gameId, '3');
      //关闭弹框
      self.closeBetNotice(vo.data.desk_id)
    },
    removeArr: function (arr) {
      var newarr = [];
      var obj = {};
      for (var i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
          newarr.push(arr[i]);
          obj[arr[i]] = 1;
        }
      }
      return newarr;
    },
    sortt: function (a, b) {
      return a - b;//a-b  是以升序排列  b-a是以降序排列
    },
    istupian: function (x, y, isclick) {

      var self = this
      x = (2176 / $('.zuobu').width()) * x;
      y = (1002 / $('.zuobu').height()) * y
      //console.log(x, y, "------------")
      var flag = false;
      var curr_img = "";
      var choosed = [];
      $.each(self.imgCtx, function (name, value) {
        // console.log(value.getImageData(x,y,1,1).data,"------------")
        if (value.getImageData(x, y, 1, 1).data[3] == 255) {
          self[name].attr({ style: { opacity: '.5' } });
          flag = true;
          curr_img = name;
          choosed.push(name)
        } else {
          self[name].attr({ style: { opacity: '0' } })
        }
      })

      if (flag) {
        var dx = self[curr_img].position[0]
        var dy = self[curr_img].position[1] + self.x_loca;
        var dw = self[curr_img].style.width;
        var dh = self[curr_img].style.height;
        // console.log(dx, dy, "------------dxdy")
        // (dx,dy)(dx+dw,dy)(dx+dw,dy+dh),(dx,dy+dh)
        if (Number(curr_img) % 3 == 0 && Number(curr_img) !== 0) {
          // 最上层可多选
          if (y - dy <= 30) {

            if ((dx + dw) - x > 30) {
              self[Number(curr_img) - 1].attr({ style: { opacity: '.5' } });
              self[Number(curr_img) - 2].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) - 1, Number(curr_img) - 2)
              // var cc = self.removeArr(choosed)
              // console.log("choosed", self.removeArr(choosed).sort(self.sortt).join('-'))
            } else {
              self[Number(curr_img) - 1].attr({ style: { opacity: '.5' } });
              self[Number(curr_img) - 2].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) - 1, Number(curr_img) - 2)
              if (Number(curr_img) == 36) { return }

              self[Number(curr_img) + 1].attr({ style: { opacity: '.5' } });
              self[Number(curr_img) + 2].attr({ style: { opacity: '.5' } });
              self[Number(curr_img) + 3].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) + 1, Number(curr_img) + 2, Number(curr_img) + 3)
            }

            if (Math.abs(dx - x) < 30) {
              if (Number(curr_img) != 3) {
                self[Number(curr_img) - 1].attr({ style: { opacity: '.5' } });
                self[Number(curr_img) - 2].attr({ style: { opacity: '.5' } });
                self[Number(curr_img) - 3].attr({ style: { opacity: '.5' } });
                self[Number(curr_img) - 4].attr({ style: { opacity: '.5' } });
                self[Number(curr_img) - 5].attr({ style: { opacity: '.5' } });
                choosed.push(Number(curr_img) - 1, Number(curr_img) - 2, Number(curr_img) - 3, Number(curr_img) - 4, Number(curr_img) - 5)
              }
            }
          } else {
            if (dx + dw - x <= 30) {
              if (Number(curr_img) == 36) { return }
              self[Number(curr_img) + 3].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) + 3)
            }
            if (x - dx <= 30) {
              if (Number(curr_img) == 3) { return }
              self[Number(curr_img) - 3].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) - 3)
            }
          }



          if (dy + dh - y <= 30) {
            if (dx + dw - x > 30) {
              self[Number(curr_img) - 1].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) - 1)
            } else {
              self[Number(curr_img) - 1].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) - 1)
              if (Number(curr_img) == 36) { return }
              self[Number(curr_img) + 3].attr({ style: { opacity: '.5' } });
              self[Number(curr_img) + 2].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) + 3, Number(curr_img) + 2)
            }

            if (Math.abs(dx - x) < 30)
              if (Number(curr_img) != 3) {
                self[Number(curr_img) - 1].attr({ style: { opacity: '.5' } });
                self[Number(curr_img) - 4].attr({ style: { opacity: '.5' } });
                self[Number(curr_img) - 3].attr({ style: { opacity: '.5' } });

                choosed.push(Number(curr_img) - 1, Number(curr_img) - 3, Number(curr_img) - 4)
              }

          } else {
            if (dx + dw - x <= 30) {
              if (Number(curr_img) == 36) { return }
              self[Number(curr_img) + 3].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) + 3)
            }
            if (x - dx <= 30) {
              if (Number(curr_img) == 3) { return }
              self[Number(curr_img) - 3].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) - 3)
            }
          }
        }

        if (Number(curr_img + 1) % 3 == 0) {
          if (y - dy < 25) {
            if (dx + dw - x < 25) {
              if (Number(curr_img) == 35) {
                self[Number(curr_img) + 1].attr({ style: { opacity: '.5' } });
                choosed.push(Number(curr_img) + 1)
                return
              }
              self[Number(curr_img) + 1].attr({ style: { opacity: '.5' } });
              self[Number(curr_img) + 4].attr({ style: { opacity: '.5' } });
              self[Number(curr_img) + 3].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) + 1, Number(curr_img) + 3, Number(curr_img) + 4)
            } else {
              self[Number(curr_img) + 1].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) + 1)
            }

            if (Number(curr_img + 1) != 2) {
              if (Math.abs(dx - x) < 25) {
                self[Number(curr_img) + 1].attr({ style: { opacity: '.5' } });
                self[Number(curr_img) - 2].attr({ style: { opacity: '.5' } });
                self[Number(curr_img) - 3].attr({ style: { opacity: '.5' } });
                choosed.push(Number(curr_img) + 1, Number(curr_img) - 2, Number(curr_img) - 2)
              }
            }

          } else {
            if (dy + dh - y > 25) {
              if (x - dx < 25) {
                if (Number(curr_img) == 2) { return }
                self[Number(curr_img) - 3].attr({ style: { opacity: '.5' } });
                choosed.push(Number(curr_img) - 3)
              }
              if (dx + dh - x < 25) {
                if (Number(curr_img) == 35) { return }
                self[Number(curr_img) + 3].attr({ style: { opacity: '.5' } });
                choosed.push(Number(curr_img) + 3)
              }
            }
          }

          if (dy + dh - y < 25) {
            if (dx + dh - x < 25) {
              if (Number(curr_img) == 35) {
                self[Number(curr_img) - 1].attr({ style: { opacity: '.5' } });
                choosed.push(Number(curr_img) - 1)
                return
              }
              self[Number(curr_img) - 1].attr({ style: { opacity: '.5' } });
              self[Number(curr_img) + 2].attr({ style: { opacity: '.5' } });
              self[Number(curr_img) + 3].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) - 1, Number(curr_img) + 2, Number(curr_img) + 3)
            } else {
              self[Number(curr_img) - 1].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) - 1)
            }

            if (Number(curr_img + 1) != 2) {
              if (Math.abs(dx - x) < 25) {
                self[Number(curr_img) - 1].attr({ style: { opacity: '.5' } });
                self[Number(curr_img) - 4].attr({ style: { opacity: '.5' } });
                self[Number(curr_img) - 3].attr({ style: { opacity: '.5' } });
                choosed.push(Number(curr_img) - 1, Number(curr_img) - 4, Number(curr_img) - 3)
              }
            }
          } else {
            if (y - dy > 25) {
              if (x - dx < 25) {
                if (Number(curr_img) == 2) { return }
                self[Number(curr_img) - 3].attr({ style: { opacity: '.5' } });
                choosed.push(Number(curr_img) - 3)
              }
              if (dx + dh - x < 25) {
                if (Number(curr_img) == 35) { return }
                self[Number(curr_img) + 3].attr({ style: { opacity: '.5' } });
                choosed.push(Number(curr_img) + 3)
              }
            }
          }

        }

        if (Number(curr_img + 2) % 3 == 0) {
          if (y - dy < 25) {
            if (dx + dw - x < 25) {
              if (Number(curr_img) == 34) {
                self[Number(curr_img) + 1].attr({ style: { opacity: '.5' } });
                choosed.push(Number(curr_img) + 1)
                return
              }
              self[Number(curr_img) + 1].attr({ style: { opacity: '.5' } });
              self[Number(curr_img) + 4].attr({ style: { opacity: '.5' } });
              self[Number(curr_img) + 3].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) + 1, Number(curr_img) + 3, Number(curr_img) + 4)
            } else {
              self[Number(curr_img) + 1].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) + 1)
            }

            if (Number(curr_img + 1) != 1) {
              if (Math.abs(dx - x) < 25) {
                self[Number(curr_img) + 1].attr({ style: { opacity: '.5' } });
                self[Number(curr_img) - 2].attr({ style: { opacity: '.5' } });
                self[Number(curr_img) - 3].attr({ style: { opacity: '.5' } });
                choosed.push(Number(curr_img) + 1, Number(curr_img) - 2, Number(curr_img) - 2)
              }
            }

          } else {
            if (x - dx < 25) {
              if (Number(curr_img) == 1) { return }
              self[Number(curr_img) - 3].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) - 3)
            }
            if (dx + dh - x < 25) {
              if (Number(curr_img) == 34) { return }
              self[Number(curr_img) + 3].attr({ style: { opacity: '.5' } });
              choosed.push(Number(curr_img) + 3)
            }
          }
        }

        // 
        if (curr_img == "hang_1") {
          for (var i = 3; i <= 36; i += 3) {
            self[i].attr({ style: { opacity: '.5' } });
          }
        }
        if (curr_img == "hang_2") {
          for (var i = 2; i <= 35; i += 3) {
            self[i].attr({ style: { opacity: '.5' } });
          }
        }
        if (curr_img == "hang_3") {
          for (var i = 1; i <= 34; i += 3) {
            self[i].attr({ style: { opacity: '.5' } });
          }
        }

        if (curr_img == "zu_1") {
          for (var i = 1; i <= 12; i++) {
            self[i].attr({ style: { opacity: '.5' } });
          }
        }
        if (curr_img == "zu_2") {
          for (var i = 13; i <= 24; i++) {
            self[i].attr({ style: { opacity: '.5' } });
          }
        }
        if (curr_img == "zu_3") {
          for (var i = 25; i <= 36; i++) {
            self[i].attr({ style: { opacity: '.5' } });
          }
        }
        if (curr_img == "xiao") {
          for (var i = 1; i <= 18; i++) {
            self[i].attr({ style: { opacity: '.5' } });
          }
        }
        if (curr_img == "da") {
          for (var i = 19; i <= 36; i++) {
            self[i].attr({ style: { opacity: '.5' } });
          }
        }
        if (curr_img == "shuang") {
          for (var i = 2; i <= 36; i += 2) {
            self[i].attr({ style: { opacity: '.5' } });
          }
        }
        if (curr_img == "dan") {
          for (var i = 1; i <= 35; i += 2) {
            self[i].attr({ style: { opacity: '.5' } });
          }
        }
        if (curr_img == "hong") {
          for (var i = 1; i <= 9; i += 2) {
            self[i].attr({ style: { opacity: '.5' } });
            self[18 + i].attr({ style: { opacity: '.5' } });
          }
          for (var i = 12; i <= 18; i += 2) {
            self[i].attr({ style: { opacity: '.5' } });
            self[18 + i].attr({ style: { opacity: '.5' } });
          }
        }
        if (curr_img == "hei") {
          for (var i = 11; i <= 17; i += 2) {
            self[i].attr({ style: { opacity: '.5' } });
            self[18 + i].attr({ style: { opacity: '.5' } });
          }
          for (var i = 2; i <= 10; i += 2) {
            self[i].attr({ style: { opacity: '.5' } });
            self[18 + i].attr({ style: { opacity: '.5' } });
          }
        }
      }


      if (flag) {
        $(self.element).css({ 'cursor': 'pointer' });
      } else {
        $(self.element).css({ 'cursor': 'default' });
      }
      curr_img = self.removeArr(choosed).sort(self.sortt).join('-')
      //console.log("flag-------", curr_img);
      return curr_img;
    },
        changeTime:function (top,left,rotate,scale_x,scale_y){
        if(!$('.flash-zhezhao')[0]){return}
        $('.flash-zhezhao').css({"top":top+'em','left':left+'em'})
        $('.flash-zhezhao')[0].style.webkitTransform = "rotate("+rotate+"deg)"+" "+ "scale("+scale_x+","+ scale_y+")";
        $('.flash-zhezhao')[0].style.MozTransform = "rotate("+rotate+"deg) "+" "+ "scale("+scale_x+","+ scale_y+")";
        $('.flash-zhezhao')[0].style.msTransform = "rotate("+rotate+"deg) "+" "+ "scale("+scale_x+","+ scale_y+")";
        $('.flash-zhezhao')[0].style.OTransform = "rotate("+rotate+"deg)  "+" "+ "scale("+scale_x+","+ scale_y+")";
        $('.flash-zhezhao')[0].style.transform = "rotate("+rotate+"deg) "+" "+ "scale("+scale_x+","+ scale_y+")";
    },
    changeTime1:function (top,left,rotate,scale_x,scale_y){
        if(!$('.flash-zhezhao1')[0]){return}
        $('.flash-zhezhao1').css({"top":top+'em','left':left+'em'})
        $('.flash-zhezhao1')[0].style.webkitTransform = "rotate("+rotate+"deg)"+" "+ "scale("+scale_x+","+ scale_y+")";
        $('.flash-zhezhao1')[0].style.MozTransform = "rotate("+rotate+"deg) "+" "+ "scale("+scale_x+","+ scale_y+")";
        $('.flash-zhezhao1')[0].style.msTransform = "rotate("+rotate+"deg) "+" "+ "scale("+scale_x+","+ scale_y+")";
        $('.flash-zhezhao1')[0].style.OTransform = "rotate("+rotate+"deg)  "+" "+ "scale("+scale_x+","+ scale_y+")";
        $('.flash-zhezhao1')[0].style.transform = "rotate("+rotate+"deg) "+" "+ "scale("+scale_x+","+ scale_y+")";
    },
        hidezhezhao:function(){
      $('.flash-zhezhao').hide()
      $('.flash-zhezhao1').hide()
    },
    showzhezhao:function(){
      $('.flash-zhezhao').show()
      $('.flash-zhezhao1').show()
    },
       setdates:function(){
      var vo = this.$store.state.onDates;
      let year  = vo.substr(0,10).split("-").join(".");
      let hour = vo.substr(11,5);
      this.$set( this.curr_date,"year",year)
      this.$set( this.curr_date,"hour",hour)
    },
      onDates:function(vo) {
      let year  = vo.substr(0,10).split("-").join(".")
      let hour = vo.substr(11,5);
      this.$set( this.curr_date,"year",year)
      this.$set( this.curr_date,"hour",hour)
      console.log("服务时间",year,hour)
      if(!$('.flash-zhezhao')[0]){return}
    },
    init: function () {
      var self = this
      self.element = this.$refs['zuobu']

      self.zr = zrender.init(self.element);
      self.w = self.zr.getWidth();
      self.x_loca = 200;
      self.h = self.zr.getHeight() - self.x_loca;
      //self.heightscale = $('.zuobu').height() / 430
      self.zrBGGroup = new zrender.Group();
      self.zrBGGroup.position = [0, 200];
      self.zr.add(self.zrBGGroup);
      self.drawBG();
      self.zr.refresh();
    },
    creatCanvas: function (image_url, x, y, name, sname) {
      var self = this;
      var can = document.createElement('canvas')//document.createElement('canvas'),
      var ctx = can.getContext('2d');
      can.width = 2176;
      can.height = 1002;
      can.name = name;
      //console.log(self.images[image_url])
      ctx.drawImage(self.images[image_url], x, y);
      if (sname !== undefined) {
        self.imgCtx[name][sname] = ctx;
      } else {
        self.imgCtx[name] = ctx;
      }
    },
    drawBG: function () {
      var zrBGGroup = this.zrBGGroup;
      var _this = this;

      _this.zuobu = new zrender.Image({
        name: "zuobu",
        style: {
          image: "./static/zuobu/lunpan_desk.png",
        },
        cursor: 'default',
        silent: true
      });

      _this.zuobu1 = new zrender.Image({
        name: "zuobu1",
        style: {
          image: "./static/zuobu/lunpan_num.png",
        },
        cursor: 'default',
        silent: true
      });
      _this["0"] = new zrender.Image({
        name: "zuobu2",
        style: {
          image: "./static/zuobu/lp_0.png",
          opacity: 0
        },
        cursor: 'default',
        silent: true
      });
      _this.creatCanvas("lp_0", 0, _this.x_loca, "0")
      _this.local_list["0"] = { group: {}, x: 77, y: 261, tan: { left: "0.55em", top: "1.4em" } }
      _this.zrBGGroup.add(_this.zuobu);
      _this.zrBGGroup.add(_this.zuobu1);
      _this.zrBGGroup.add(_this["0"]);

      var m = 0
      for (var i = 3; i <= 39; i += 3) {

        _this[(i == 39 ? "hang_1" : i)] = new zrender.Image({
          style: {
            image: "./static/zuobu/lp_shuzi.png",
            opacity: 0,
            height: 123,
            width: 150
          },
          position: [184 + m * 150, 108],
          cursor: 'default',
          silent: true
        });

        _this.creatCanvas("lp_shuzi", 184 + m * 150, _this.x_loca + 108, (i == 39 ? "hang_1" : i))
        _this.local_list[(i == 39 ? "hang_1" : i)] = { group: {}, x: 227 + m * 150, y: 138, tan: { left: (1.3 + 0.75 * m) + "em", top: "0.8em" } }


        _this[(i == 39 ? "hang_2" : i - 1)] = new zrender.Image({
          style: {
            image: "./static/zuobu/lp_shuzi.png",
            opacity: 0,
            height: 123,
            width: 150
          },
          position: [184 + m * 150, 231],
          cursor: 'default',
          silent: true
        });

        _this.creatCanvas("lp_shuzi", 184 + m * 150, _this.x_loca + 231, (i == 39 ? "hang_2" : i - 1))
        _this.local_list[(i == 39 ? "hang_2" : i - 1)] = { group: {}, x: 227 + m * 150, y: 261, tan: { left: (1.3 + 0.75 * m) + "em", top: "1.4em" } }


        _this[(i == 39 ? "hang_3" : i - 2)] = new zrender.Image({
          style: {
            image: "./static/zuobu/lp_shuzi.png",
            opacity: 0,
            height: 123,
            width: 150
          },
          position: [184 + m * 150, 354],
          cursor: 'default',
          silent: true
        });

        _this.creatCanvas("lp_shuzi", 184 + m * 150, _this.x_loca + 354, (i == 39 ? "hang_3" : i - 2))
        _this.local_list[(i == 39 ? "hang_3" : i - 2)] = { group: {}, x: 227 + m * 150, y: 384, tan: { left: (1.3 + 0.75 * m) + "em", top: "2em" } }


        _this.zrBGGroup.add(_this[(i == 39 ? "hang_3" : i - 2)]);
        _this.zrBGGroup.add(_this[(i == 39 ? "hang_2" : i - 1)]);
        _this.zrBGGroup.add(_this[(i == 39 ? "hang_1" : i)]);
        m++
      }

      var k = 0
      for (var h = 0; h <= 36; h += 3) {
        if (h + 6 <= 36) {
          _this.local_list[(h + 1) + "-" + (h + 2) + "-" + (h + 3) + "-" + (h + 4) + "-" + (h + 5) + "-" + (h + 6)] = { group: {}, x: 307 + k * 150, y: 80, tan: { left: (1.68 + 0.75 * k) + "em", top: "0.65em" } }
        }
        if (h + 3 <= 36) {
          _this.local_list[(h + 1) + "-" + (h + 2) + "-" + (h + 3)] = { group: {}, x: 227 + k * 150, y: 80, tan: { left: (1.3 + 0.75 * k) + "em", top: "0.65em" } }

          if (h > 0) {
            if (h % 3 === 0) {
              _this.local_list[(h) + "-" + (h + 3)] = { group: {}, x: 307 + (k - 1) * 150, y: 142, tan: { left: (1.68 + 0.75 * (k - 1)) + "em", top: "0.8em" } }
              _this.local_list[(h - 1) + "-" + (h + 2)] = { group: {}, x: 307 + (k - 1) * 150, y: 265, tan: { left: (1.68 + 0.75 * (k - 1)) + "em", top: "1.3em" } }
              _this.local_list[(h - 2) + "-" + (h + 1)] = { group: {}, x: 307 + (k - 1) * 150, y: 388, tan: { left: (1.68 + 0.75 * (k - 1)) + "em", top: "1.9em" } }
              _this.local_list[(h - 2) + "-" + (h - 1)] = { group: {}, x: 227 + (k - 1) * 150, y: 325, tan: { left: (1.3 + 0.75 * (k - 1)) + "em", top: "1.7em" } }
              _this.local_list[(h - 1) + "-" + (h)] = { group: {}, x: 227 + (k - 1) * 150, y: 203, tan: { left: (1.3 + 0.75 * (k - 1)) + "em", top: "1.1em" } }

              _this.local_list[(h - 1) + "-" + h + "-" + (h + 2) + "-" + (h + 3)] = { group: {}, x: 307 + (k - 1) * 150, y: 203, tan: { left: (1.68 + 0.75 * (k - 1)) + "em", top: "1.1em" } }
              _this.local_list[(h - 2) + "-" + (h - 1) + "-" + (h + 1) + "-" + (h + 2)] = { group: {}, x: 307 + (k - 1) * 150, y: 326, tan: { left: (1.68 + 0.75 * (k - 1)) + "em", top: "1.7em" } }
            }

          }

        }
        k++
      }

      console.log(_this.local_list)

      for (var j = 0; j < 3; j++) {
        _this["zu_" + (j + 1)] = new zrender.Image({
          style: {
            image: "./static/zuobu/lp_zu.png",
            opacity: 0
          },
          position: [187 + j * 598, 478],
          cursor: 'default',
          silent: true
        });
        _this.zrBGGroup.add(_this["zu_" + (j + 1)]);

        _this.creatCanvas("lp_zu", 187 + j * 598, _this.x_loca + 478, "zu_" + (j + 1))
        _this.local_list["zu_" + (j + 1)] = { group: {}, x: 454 + j * 598, y: 508, tan: { left: (2.43 + 3 * j) + "em", top: "2.7em" } }
      }
      _this["xiao"] = new zrender.Image({
        style: {
          image: "./static/zuobu/lp_ds.png",
          opacity: 0
        },
        position: [186, 602],
        cursor: 'default',
        silent: true
      });
      _this.creatCanvas("lp_ds", 186, _this.x_loca + 602, "xiao")
      _this.local_list["xiao"] = { group: {}, x: 304, y: 631, tan: { left: "1.63em", top: "3.3em" } }

      _this["shuang"] = new zrender.Image({
        style: {
          image: "./static/zuobu/lp_ds.png",
          opacity: 0
        },
        position: [485, 602],
        cursor: 'default',
        silent: true
      });

      _this.creatCanvas("lp_ds", 485, _this.x_loca + 602, "shuang")
      _this.local_list["shuang"] = { group: {}, x: 604, y: 631, tan: { left: "3.16em", top: "3.3em" } }

      _this["hong"] = new zrender.Image({
        style: {
          image: "./static/zuobu/lp_ds.png",
          opacity: 0
        },
        position: [785, 602],
        cursor: 'default',
        silent: true
      });

      _this.creatCanvas("lp_ds", 785, _this.x_loca + 602, "hong")
      _this.local_list["hong"] = { group: {}, x: 904, y: 631, tan: { left: "4.69em", top: "3.3em" } }

      _this["hei"] = new zrender.Image({
        style: {
          image: "./static/zuobu/lp_ds.png",
          opacity: 0
        },
        position: [1085, 602],
        cursor: 'default',
        silent: true
      });

      _this.creatCanvas("lp_ds", 1085, _this.x_loca + 602, "hei")
      _this.local_list["hei"] = { group: {}, x: 1204, y: 631, tan: { left: "6.22em", top: "3.3em" } }

      _this["dan"] = new zrender.Image({
        style: {
          image: "./static/zuobu/lp_ds.png",
          opacity: 0
        },
        position: [1384, 602],
        cursor: 'default',
        silent: true
      });

      _this.creatCanvas("lp_ds", 1384, _this.x_loca + 602, "dan")
      _this.local_list["dan"] = { group: {}, x: 1504, y: 631, tan: { left: "7.75em", top: "3.3em" } }

      _this["da"] = new zrender.Image({
        style: {
          image: "./static/zuobu/lp_ds.png",
          opacity: 0
        },
        position: [1683, 602],
        cursor: 'default',
        silent: true
      });

      _this.creatCanvas("lp_ds", 1683, _this.x_loca + 602, "da")
      _this.local_list["da"] = { group: {}, x: 1804, y: 631, tan: { left: "9.28em", top: "3.3em" } }

      _this.zrBGGroup.add(_this["xiao"]);
      _this.zrBGGroup.add(_this["shuang"]);
      _this.zrBGGroup.add(_this["hong"]);
      _this.zrBGGroup.add(_this["hei"]);
      _this.zrBGGroup.add(_this["dan"]);
      _this.zrBGGroup.add(_this["da"]);
    },
    showResult: function (name) {
      console.log(name, "----showResult")
      var _this = this;
      this[name].animate('style', false)
        .when(1000, { opacity: 0 })
        .when(2000, { opacity: .5 })
        .when(3000, { opacity: 0 })
        .when(4000, { opacity: .5 })
        .when(5000, { opacity: 0 })
        .when(6000, { opacity: .5 })
        .when(7000, { opacity: 0 })
        .done(function () { _this.zr.refresh() })
        .start()
    },
    onLpResult: function (vo) {
      console.log("轮盘游戏结果==" + JSON.stringify(vo));
      var self = this
      var id = vo.desk_id
      var current_lang = "zh_cn"
      if (!self.desk_result[id]) {
        self.$set(self.desk_result, id, {})
      }
      self.desk_result[id] = vo.result
      this.updateUser(vo.member.credit)

      self.showResult(vo.ball)
      if (vo.result.hong) {
        self.showResult("hong")
      }
      if (vo.result.dan) {
        self.showResult("dan")
      }
      if (vo.result.da) {
        self.showResult("da")
      }
      if (vo.result.xiao) {
        self.showResult("xiao")
      }
      if (vo.result.shuang) {
        self.showResult("shuang")
      }
      if (vo.result.hei) {
        self.showResult("hei")
      }
      if (vo.result.zu_1) {
        self.showResult("zu_1")
      }
      if (vo.result.zu_2) {
        self.showResult("zu_2")
      }
      if (vo.result.zu_3) {
        self.showResult("zu_3")
      }

      if (vo.result.hang_1) {
        self.showResult("hang_1")
      }
      if (vo.result.hang_2) {
        self.showResult("hang_2")
      }
      if (vo.result.hang_3) {
        self.showResult("hang_3")
      }



      if (!self.bet_result[id]) {
        self.$set(self.bet_result, id, {})
      }
      if (vo.member.status != 0) {
        self.$set(self.bet_result[id], "status", '1')//有结果
        if (vo.member.win_lose_credit < 0) {
          //输
          self.$set(self.bet_result[id], "lose", vo.member.win_lose_credit)
          setTimeout(function () {
            self.playGameEffect("./static/sound/se/loss_ani.mp3", true);
          }, 3000)
        } else if (vo.member.win_lose_credit > 0) {
          //赢
          self.$set(self.bet_result[id], "win", vo.member.win_lose_credit)
          setTimeout(function () {
            self.playGameEffect("./static/sound/se/win_game.mp3", true);
          }, 3000)
        } else {
          self.music_Array.unshift("./static/sound/" + current_lang + "/no_betting_in_this_game.mp3");
          self.$set(self.bet_result[id], "status", '0')
        }
      }
    }
  },
  created () {
    var self = this
    self.gameId = self.$route.params.id
    self.onLPMoneyPool(self.$store.state.onLPMoneyPool);
    self.onLPResultHistory(self.$store.state.onLPResultHistory);
    self.EnterDesk()
    self.bottotimer = setInterval(self.bottomDateTime, 1000);
    if (this.$store.state.playerGame && !this.$store.state.playerGame.disposed) {
      this.$store.state.playerGame.dispose()
      this.$set(this.$store.state.playerGame, 'disposed', true)
    }
    // if (this.$store.state.LPplayerGame && !this.$store.state.LPplayerGame.disposed) {
    //   this.$store.LPplayerGame.dispose()
    //   this.$set(this.$store.state.LPplayerGame, 'disposed', true)
    // }
    var index = this.$store.state.selected_chip_index
    if (index) {
      var index = this.$store.state.selected_chip_index
      this.chip_num = chips[index]
      this.chip = 'chip-one-' + index
      this.chouma = self.chip_num
    }


    self.images = new Array();
    function preLoadImg (arr) {
      var loadedimages = 0
      //var arr=(typeof arr!="object")? [arr] : arr
      function imageloadpost () {
        loadedimages++
        self.count++
        //console.log(self.count)
        // if (loadedimages == 8) {
        //   console.log(loadedimages, "图片已经加载完成")
        // }
      }
      for (var i in arr) {
        self.images[i] = new Image()
        self.images[i].src = arr[i]
        self.images[i].onload = function () {
          imageloadpost()
        }
        self.images[i].onerror = function () {
          imageloadpost()
        }
      }
    }
    preLoadImg(
      {
        0: "./static/zuobu/lunpan_num.png",
        1: "./static/zuobu/lunpan_desk.png",
        2: "./static/chip/sb_chip.png",
        lp_0: "./static/zuobu/lp_0.png",
        lp_shuzi: "./static/zuobu/lp_shuzi.png",
        lp_zu: "./static/zuobu/lp_zu.png",
        lp_ds: "./static/zuobu/lp_ds.png",
      }
    )
  },
  watch: {
    count: function (val) {
      if (this.count == 7) {
        console.log('图片加载完成', val)
        this.init()
      }
    },
    '$store.state.onDates':function(){var self = this;self.onDates(self.$store.state.onDates)},
    '$store.state.game_effect': function () {
      this.game_effect = this.$store.state.game_effect
    },
    '$store.state.effect': function () {
      this.effect = this.$store.state.effect
    },
    '$store.state.click_num': function () {
      var self = this
      var index = this.$store.state.selected_chip_index
      this.chip_num = chips[index]
      self.chouma = this.chip_num
      console.log('下注', self.chouma)
      this.chip = 'chip-one-' + index
      //底部筹码点击点击一次
      //if(self.curr_index!=-1){
      this.xiaZhu()
      //self.xiaZhu(self.isShow[self.curr_index],self.curr_index)
      //}
    },
    '$store.state.oneExitDesk': function () {
      if (this.$store.state.togamehall) { return }
      var id = this.changedesk ? this.changedesk : this.$store.state.zixuan_gameid
      this.global.sendMessage("enter_desk", { bet_addition_id: this.$store.state.userLimitID, desk_id: id })
    },

    '$store.state.onLPMoneyPool': function () { var self = this; self.onLPMoneyPool(self.$store.state.onLPMoneyPool) },
    '$store.state.onLPResultHistory': function () { var self = this; self.onLPResultHistory(self.$store.state.onLPResultHistory) },
    '$store.state.onDeskInfoGame': function () { var self = this; self.onDeskInfoGame(self.$store.state.onDeskInfoGame) },
    '$store.state.onEnterDesk': function () { var self = this; self.onEnterDesk(self.$store.state.onEnterDesk) },
    '$store.state.exitDesk': function () { var self = this; self.exitDesk(self.$store.state.exitDesk) },
    '$store.state.stopBet': function () { var self = this; self.stopBet(self.$store.state.stopBet) },
    '$store.state.startBet': function () { var self = this; self.startBet(self.$store.state.startBet) },
    '$store.state.onLpBetSuccess': function () { var self = this; self.onLpBetSuccess(self.$store.state.onLpBetSuccess) },
    '$store.state.onLpResult': function () { var self = this; self.onLpResult(self.$store.state.onLpResult) },
    '$store.state.onLpCard': function () { var self = this; self.onLpCard(self.$store.state.onLpCard) },
    '$store.state.omwsBetFail': function () { var self = this; self.omwsBetFail(self.$store.state.omwsBetFail) },
  }
}
</script>

<style scoped>
.flash-zhezhao {
    position: absolute;
    color:#a1a0a2;
    z-index: 1;
    font-size: .2em;
    font-weight: bold;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    font-Family:Helvetica Neue,Helvetica,Arial,sans-serif;
}
.flash-zhezhao1 {
    position: absolute;
    color:#a1a0a2;
    z-index: 1;
    font-size: .3em;
    font-weight: 900;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    font-Family:Helvetica Neue,Helvetica,Arial,sans-serif;
}
._1DTtZ {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
}
._2cqzU.hide {
  top: -4em;
}
.mGmDp._2pNum {
  width: 10.92em;
  height: 100%;
  margin: 0;
}
._2XWnD {
  font-family: HelveticaNeue-Light, HelveticaNeue-Thin, sans-serif;
}
@-webkit-keyframes _2xbHK {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2xbHK {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes FQe8M {
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
@keyframes FQe8M {
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
._27Eds {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(10, 10, 6, 0.3)),
    color-stop(21%, rgba(9, 9, 6, 0.26)),
    color-stop(44%, rgba(7, 7, 5, 0.27)),
    color-stop(75%, rgba(5, 5, 3, 0.27)),
    to(rgba(4, 4, 3, 0.3))
  );
  background-image: linear-gradient(
    180deg,
    rgba(10, 10, 6, 0.3),
    rgba(9, 9, 6, 0.26) 21%,
    rgba(7, 7, 5, 0.27) 44%,
    rgba(5, 5, 3, 0.27) 75%,
    rgba(4, 4, 3, 0.3)
  );
}
.RMDly {
  margin-left: 0.1em;
}
._7m0-e {
  width: 0.14em;
  height: 0.14em;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  border-radius: 0.03em;
}
._7m0-e.I6qKo {
  background: #040403;
}
._7m0-e._2M5ND {
  background: #ff101a;
}
._2FC9R {
  line-height: 1;
  width: 6.42857em;
  margin-left: 0.57143em;
  font-size: 0.14em;
  color: #fdeed4;
}
._2RBfb {
  margin-right: 0.64286em;
  font-size: 0.14em;
  color: #fff;
}
.XxpYt {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  width: 1.24em;
  padding: 0.01em 0.05em 0.03em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.XxpYt ._2FC9R {
  margin-left: 0.28571em;
  color: hsla(0, 0%, 100%, 0.6);
}
._3BbLR {
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 1.56em;
  padding-bottom: 0.02em;
}
._3BbLR,
._27gjQ {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  border-left: 0.01em solid hsla(0, 0%, 100%, 0.3);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._27gjQ {
  -ms-flex-pack: center;
  justify-content: center;
  width: 0.32em;
  cursor: pointer;
}
._27gjQ.SXEEd {
  z-index: 15500;
  pointer-events: none;
}
._27gjQ:hover ._2VYIf {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEUAAAD+7tT/8dX97tTeTow9AAAAA3RSTlMA40mAJZ3FAAAAH0lEQVQY02MYYKDawJnAFAFkyDuwX2D8AmcgpAYWAAACqwcntVkVxQAAAABJRU5ErkJggg==);
  background-position: 50%;
  background-repeat: no-repeat;
}
._2VYIf {
  width: 100%;
  height: 100%;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMA40mAJZ3FAAAAH0lEQVQY02MYYKDawJnAFAFkyDuwX2D8AmcgpAYWAAACqwcntVkVxQAAAABJRU5ErkJggg==);
  background-position: 50%;
  background-repeat: no-repeat;
}
@-webkit-keyframes _2Kr-f {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2Kr-f {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _1i4IW {
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
@keyframes _1i4IW {
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
._3pHdk {
  display: -ms-flexbox;
  display: flex;
  height: 100%;
}
._3PLUl {
  left: 0;
  background: url(../../assets/6731e580.png);
  background-size: 100%;
}
._3Ca1a,
._3PLUl {
  position: absolute;
  width: 1.9em;
  height: 0.38em;
  padding-bottom: 0.05em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
._3Ca1a {
  left: 1.84em;
  background: url(../../assets/b5d3ebed.png);
  background-size: 100%;
}
._3PCiL {
  padding-left: 0.07em;
  margin-right: 0.04em;
}
._3PCiL ._1vLy9 {
  width: 0.16em;
  height: 0.16em;
  background: url(data:image/png;base64,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);
  background-size: contain;
  background-position: 50%;
}
._3PCiL ._3eTbS {
  width: 0.16em;
  height: 0.16em;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABFNJREFUWAndl11oHFUUx+dukJnd7OZjSQyNTVPbUrR+UYQaRaRYWoophRZaFFR8EyyITyIINWhL8QNfWlAUIQ8++CBYgoiID4sFreDHi0sxSvzCGAsaoktXN5s9/s7NzDAzO8nsUuODgZNzz//8z8e9c+feWcf5P/xJoXCfeN5PSEU2b87/p3MS1z2BNJE6IsiBbhrIdUNOcin2KNg5x5gvkEnrz+VuS/I2xGa599JAA/2pjIz0yrFjPdg17Dc3pGA0qZTLfRRasJLPXxf4sD+giT9kYGAgwDZEU+QlRHTzRQuAHbS4674cxf/VMbMcp0gDeS8tMfi7SFPy+TvS/FeN0cBJCujsb09LRuEx/Ivw5mRwsD+Nc1UYib+hQHW9JDRx1Dbpum+vx8v02c3muvtldLSgZBJvsYk977msYLhnfe5DWdxUvxSLNzPbH/2ZnFcSy37Y2vn88dSgCKgnItyvkUXiRiOu7CHFh/3i+l5/QpJlfbWY1ZO2gWLxpuwsdsXuhN8ix3Qn/JBDwOu2UKEwGc7a8x4Ge97inAMhOWNArreIaUqptDODuupm9tcSsEzgBUVkxw4Xexb7MlpfMdFTr6NkGl8q3UBMS/dERzGQ9XLR1+xwEEDwBJheOHrZ1AO8U03zHyM/i4hJxrRfRsbcDanu7NkTHjSmXr/o9PQcAZ/l0vksSKIJae4BXaUAS9XGvOOIjDrFYvZFxQy/otuLqYkSIMWf8FflxYQrZpJvn+XRbMyBkbYCI3Q7nyQmbRkaKjmt1ikff4wi25Kc0DZm1o5F2jZiewMiZZb59zB4rUGtpo+kF+4z6GuQN9KesQ3ftWvBamOGrY78a2/AcWr4ixFObMiuHrKAyK1Wu+5ZmjjNqu118vlHYuTAmJuzJykrdiWAAp3WgC5/6snFMt/rNBoLPM8TFC3Da5qlpUVn+/Yz2N/TxFNB4pheXl7Nl8u1Pdq0Bi6RaHfqzhbR+1/PgHNwjlP0Fy1kqtUG9gzDnTQ5rljsr9mcsHardSmGY7Q3YIwmKjrz8/uTZApuAvvLyeVeYfw5+vGQY8yX/nhLiAUDkaMM/3TGxioBtKaWvr4yS6x3gD0Jo0SwU/Z1CvZBxInvaf9VizUgvb23gK/gn47Q1x9CnvKT3R9lgh2wuOedieG8ksT8gHwXw6emcmAfEvM3+vqob92xDA8XCfiWwBoziJ1eYDN+E3phHYT3ILpqsULhUDQx2Orl5XnPRvGOxlxKN5JgiQKXkXuCID2AsKdtwdW7Qe+HRU7FcLVEZ+66L/icGbWD+K40Se+i2K8k0u//0/qFFCTAN4Yc0eb0d0GIFwq7wSp+8fNRX8DpSttCQULP+43kr3JTTqK3ydatnvT3D9qvJ34lgb1P4RZSZ3xyzZOxqw58MkUPkfQCyVf82enSJ0W/hl/Tpjut0XY/ZwXqB4uzsrIP3jhH6ybOgyscQvPoqjMx8ZGpVJpZOaL+fwCqDueOWKPfBwAAAABJRU5ErkJggg==);
  background-size: contain;
  background-position: 50%;
}
._2MJfc {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  width: 0.26em;
  height: 0.26em;
  margin-right: 0.04em;
}
._2MJfc ._1SFMh {
  font-size: 0.3em;
  font-family: FIVExNINEled;
  color: hsla(0, 0%, 100%, 0.7);
}
@-webkit-keyframes hy0QG {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes hy0QG {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _11zgf {
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
@keyframes _11zgf {
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
@-webkit-keyframes _3S_tG {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes _3S_tG {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._1w0j- {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

._1w0j-._3lcTw {
  cursor: default;
}
._1w0j- canvas {
  width: inherit;
  height: inherit;
  position: absolute;
}
._1w0j- canvas:nth-of-type(2) {
  pointer-events: none;
  z-index: 5002;
}
._1w0j- svg {
  position: absolute;
  top: -50%;
  display: none;
}
._1w0j-._2xc49 {
  pointer-events: none;
}
._23WHr {
  top: 0;
}
._2HNWr,
._23WHr {
  position: absolute;
}
._2HNWr {
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  z-index: 5001;
  opacity: 1;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
  pointer-events: none;
  margin-top: 1em;
}
._2HNWr.yYlob {
  margin-top: 1.2em;
}
._2HNWr._3MfMh {
  opacity: 0;
}
.QS2Vs {
  background-image: radial-gradient(
    circle at 50% -3%,
    #0e6f47,
    #11633f 52%,
    #062a20
  );
  background-size: 100% 66%;
  background-repeat: no-repeat;
  background-position: 0 70%;
}
._26wsf {
  position: absolute;
  top: 1.9em;
  left: 0;
  right: 0;
  margin: auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  z-index: 1;
}
._2mS3E {
  font-size: 0.16em;
  text-align: center;
  color: #fff;
}
._2VpSG {
  position: unset;
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
._2VpSG:after {
  content: "";
  width: 0.6em;
  height: 0.6em;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAzFBMVEUAAAD97tT97tT97tT+79T979T97tP+7tT979P979P97tT+7tP+79P+7tP97tT979P+79T979T979P+79T79dX+7tP+7tT97tT97tb/7tD97tT97tP+7NL+8NT979P97tP979T97tT+8NX97tP879P97tT97tb97NL/8+D97tT87dT+7tT97tP97dP+79T97tP97tP97db97tP97tP97tP97tP87dP979T97tP97tT97dP97tP97tT979T879T87dL47dX87dP97dP979McF+feAAAARHRSTlMA5vPV3tvR4urN+PX62M/w4O787ATT2ugSDv5sHCBEP6JKGKgxYDYsB5C+uK14cmYnJJlbh0/HwZ2Ui37JglM7CrVXsd9RCHcAAAWRSURBVHja7dJ5c5pAHMbxJxo1pjlMs2mhIggq4i3eV7zy/t9TF3bZxZg2iRGY6fTDjP75fP0h/vvvJE593Sm3ptnLx0wJcesXK5mb79Qvz2W8AUqtnLu5ofOJBDjr9je6nlSAPb+6pttJBRitayqxAHN67bu5TiTAnlxzN+IETCwByvwbFRRcxx5Qy3nzNICJO0BrfWPkviy4zt2umjMLETJzfP51QH7QNV2CiJFRKvVNEAHp+VpBHLRmSgSIG+QWVcSkf5vyhS/QNgniYhdSDJ+nT7mO+OhXKRHAzFzEaP2QOgxY2YiTzvZFws8iQZzsn6mDgKaGWPXp/++ePoFnglhp6XtKBBR0xIu0vHmKJWRLiNnzPecHTC3ETJfz1E5FzLTLh3shtXMQt1Zo/n6qIm7DB889u0LWQtyUjDfPZUqIXeOBu6ePjthV2Tq7whLxaz5ILYLY6Y+Pjw9cTkP8WqGAIuK3efSwiClB/NqhABvxq149CnMkoCEDrlzEz8lcUSxggASMvXkeUEcCyleBxzISoFywce/RkYDhlZAmSMBABjwjCU8yoI4E9OX+BEmo/aRYwAhJmMkAE0nI/xQUJMC5EPtNJKF+cREkLJCEsQzoIQndC0FHEuYyoIQkVMR+jiAJOxFwh0Q0RcAUiViJgBYSkRYBbSSiIAJm+Ih/LyDxV7DKBXaIHJEQaOYu+DNF5BznOOAlF8gjcltHQKAsAi4JorblwgGNnFBCxIgqyICiDNDxSiwBpgzoIWJbRZAB/Zyn4BkhYqoiEAScAgugHy1ETLE4RYE0KQgKIkU0SxRAGngHYExEaqtxhwG1gvCMSCmlUlCwheTKgCYipbluyadpBCF5WVBHhBzXFQUIaxSoS98SEbL6lOtXWAjby4AVQXT6jEupCFMyl4KByKh1n99AcGAmAwaIjFutBgUaDpmXUh8R2VYp3qDikJOVAQ1ExLVlAV4byYBMCZHYbmyKRWh4rcrHLzOZzAKR6G9oAU/Y4kiZBWS8hioioBqGsaFsqo9jNvv1/ueO4PxsQxaoeEPbn2dqOLuSrusGb6jjLQadD9xZOLOtrssCBW96yQg/KgTntTFNM0io4m3VUMCPLs6qPjYpfgUVfzBi4xT9MnBG1no8Fgl9/ImaDwLox0rD2ajjtSwwCP5o780HZ2gqOBNnvN+vRYKGv6iwgB+e2/YWZ0HM4d4rGPsFNv7GWgW//5YqO+fZrw2HIsF851cZdNx36xdsz3B/s1bzCvhbsPCODpvn2gq+aLvu9bwCnlDHe0iFBXAtDV+iDos9r4C/BZ3gXdZUzKdv0+nJBl9Q6hWLfgFLGG/xAe7qVqAF6S7BiYjR7RZDBWsVH1LNButM2Tr1/B0ewN+Cgg8y0uIV+FbDE45A7E6n06VEgYYPM72CdEi7ik/Sistlh5IvwcUnGHcHBU9PT6MSPkHZPz8v/YJuUKDhU6qTdMgTlV24+CBruBiNRjRBFtQsfJLbDAf4BdnGhuBdpN5rNBYLHsALago+zaq8DqCa3T7+qrRfzOcygJ9gr+IEpCvmWQDz0tFVvEm1a6PZbDCQBfwlGASnMSah3y/c3d1VlsONRkKtmj0uLiqVSrlMAwY0oEED+A2KLk5mlY8D7ph8ftVqlweNxXxQrrR2u5eXdtsLkCfgATUVX7GeiAC2LgKY1WQybTZbreMAVtCp4ovU5dMbAXkWsPIDpocBMy+Av4TxFl9Xr9B56fgC9AQiQJ6A3qCo4TyMclY6vgB/BzSAFQxYQbGP87EHcv/4AjJA/guKLs6rvpyIADmfz4uAXZsW8IDGsITzc/RGXv4Dji4g/4bFKkFElPGoeXCBo4BB0VARrdJ+scsLq5UMGHRNDfFwXL33PJ9VXpqTaatdni86w03JwX//neI3GUohsT/4i6UAAAAASUVORK5CYII=);
  background-size: 0.6em 0.6em;
  -webkit-animation: _3S_tG 1s linear infinite;
  animation: _3S_tG 1s linear infinite;
}
._3S_tG {
  height: auto;
  width: auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  background-position: 50%;
  margin-bottom: 0.13em;
}
._2927E {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 1.2em;
  height: 0.32em;
  margin-top: 0.2em;
  background: #7d7254;
  border-radius: 0.16em;
  cursor: pointer;
  pointer-events: auto;
  outline: none;
}
._2927E:hover:not([disabled]) {
  background: #bbaa7d;
}
._2927E[disabled] {
  background-color: #343024;
}
._267KN {
  color: #fff;
  font-size: 0.14em;
  text-align: center;
  line-height: 1;
}
@-webkit-keyframes _3A1c1 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _3A1c1 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _4mTBI {
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
@keyframes _4mTBI {
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
.E2nQg {
  display: -ms-flexbox;
  display: flex;
  -ms-flex: 1 1;
  flex: 1 1;
}
._1u2uO {
  width: 2.56em;
  height: 1.99em;
}
._1u2uO ._1g4Aw {
  width: 0.24em;
  height: 0.24em;
  margin: 0 0.22em 0 0.15em;
}
._1u2uO ._3rxt2 {
  height: 0.33em;
  padding-right: 0.02em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._1u2uO ._2n_YF {
  padding: 0;
}
._1u2uO ._2I1Qa {
  width: 0.64em;
  font-weight: 600;
}
._1u2uO ._253E9 {
  color: #bbaa7d;
}
._1u2uO ._1g4Aw ._253E9 {
  font-size: 0.14em;
  color: hsla(0, 0%, 100%, 0.87);
}
._3QEFC {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: #040403;
}
._3rxt2 {
  position: relative;
  height: 0.31em;
  width: 100%;
  border-bottom: 0.01em solid #272624;
}
._3rxt2:hover ._1m1Gr {
  display: -ms-flexbox;
  display: flex;
}
._1m1Gr {
  display: none;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  position: absolute;
  padding: 0 0.08em;
  background-color: rgba(0, 0, 0, 0.6);
}
._1m1Gr,
._2n_YF {
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
._2n_YF {
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.02em 0.18em 0 0.08em;
}
._1g4Aw,
._2n_YF {
  display: -ms-flexbox;
  display: flex;
}
._1g4Aw {
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 0.2em;
  height: 0.2em;
  border-radius: 50%;
}
._1g4Aw._3Rof1 {
  background-color: #ff101a;
}
._1g4Aw._1Uiuu {
  background-color: #373131;
}
._1g4Aw.eEr76 {
  background-color: #2e9935;
}
._1g4Aw ._253E9 {
  font-size: 0.1em;
}
._2I1Qa {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  min-width: 0.3em;
}
._253E9 {
  font-size: 0.14em;
  color: hsla(0, 0%, 100%, 0.87);
  letter-spacing: 0.00714em;
}
._253E9.RPDJq {
  font-weight: 600;
  height: 1em;
  line-height: 0.9;
}
._1280x {
  right: -0.01em;
  border-radius: 4px;
  background-color: rgba(125, 114, 84, 0.8);
}
._1280x:hover {
  background-color: hsla(44, 31%, 61%, 0.8);
}
@-webkit-keyframes _18p52 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _18p52 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _39Th3 {
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
@keyframes _39Th3 {
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
._3oqMK {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  width: 0.96em;
  height: 0.96em;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  border: 0.01em solid #6f6857;
}
._3oqMK * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._2VqkK {
  display: none;
}
._3kkQD ._2XWnD {
  color: #e0001e;
}
._3Isfd ._2j-4n ._1LrD-,
._3Isfd ._2j-4n ._20BrN,
._3Isfd ._2j-4n .F05i1 {
  border: 0.04em solid #e0001e;
}
._2XWnD {
  color: #fdeed4;
  font-size: 0.48em;
  letter-spacing: 0.04167em;
  text-align: center;
}
._2j-4n {
  position: absolute;
  height: 0.9em;
  width: 0.9em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
._2j-4n .E7lbC {
  border: 0.04em solid hsla(0, 0%, 61%, 0.3);
  border-radius: 50%;
}
._2j-4n .E7lbC,
._2j-4n .F05i1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
._2j-4n .F05i1 {
  border: 0.04em solid #363536;
  border-radius: 50%;
}
._2j-4n ._1_1v4,
._2j-4n ._1lx_N {
  position: absolute;
  height: 100%;
  width: 0.45em;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
._2j-4n ._1_1v4 {
  left: 0;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
._2j-4n ._1lx_N {
  right: 0;
}
._2j-4n ._1LrD-,
._2j-4n ._20BrN {
  position: absolute;
  height: 100%;
  width: 0.9em;
  top: 0;
  border: 0.04em solid #fdeed4;
  border-radius: 50%;
  clip: rect(0 0.9em 0.9em 0.45em);
}
._2j-4n ._1LrD-._2wJhZ,
._2j-4n ._20BrN._2wJhZ {
  border-color: transparent;
}
._2j-4n ._20BrN {
  -webkit-animation: _3nah8 0s linear 1;
  animation: _3nah8 0s linear 1;
}
._2j-4n ._1LrD-,
._2j-4n ._20BrN {
  right: 0;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
._2j-4n ._1LrD- {
  -webkit-animation: _28XLl 0s linear 1;
  animation: _28XLl 0s linear 1;
}
@-webkit-keyframes _3nah8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50%,
  to {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@keyframes _3nah8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50%,
  to {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@-webkit-keyframes _28XLl {
  0%,
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@keyframes _28XLl {
  0%,
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@-webkit-keyframes _1o6ei {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1o6ei {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes N1BFy {
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
@keyframes N1BFy {
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
._1JJJw {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
._2iulk {
  color: #fff;
  font-size: 0.12em;
}
._2iulk._3XTUt {
  font-size: 0.16em;
}
.fRFjh {
  width: 0.2em;
  height: 0.2em;
  margin-left: 0.1em;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA0xJREFUWAnFl7trFFEUxmcT4wMFtzAggq+VlMoSxC6IgTVgY0CwECsjaAqjAf0TRMEgGFTE2NiJYpHGJmAnVuqClQp5CKKgxQgK4iPr7xvPvczuzu5OZiR74Ntz77n3ft/Zua+ZIOiyFdLq12q1HvqWQBnsBEWwGci+ghAsgSqYLxQKy/iO1jEBhPtgGQYVIBEJvLOyhGVKpAgGQNnKc/inJPIL39LaJoD4ICOPgwUwC9mnlkyxBsZtpXoU7AKPGPcSn94gKIBRcBnosWcyjTUOcSX+2aagdTyNoh7rHbL/lkndBsG3ieJZoOm6B1/NmpIdA5TtRdCb3GPlUXEZ52jb0XQaBHrsyvq/mjiNW+uq2WjsA1dB5jlvZq2PiBtcAdpZkfW4Al5bbYE5mo/FchUROga0GyIz7kUq0oosSoBO8trns//C+X7FB07Cchgcoayt7EwaFdMMogQIlEBIhqn2uWNK8hBr8Y6BIWvXqv9g5cA0QurS9Ano9KoqkMcQ19yOg/3G8wc/g+gzqzsnLWn6BHS263jNbIivZ/AE2GskOoJvI/7C6nEnLWkGayxaxIdW9g7S7VR6IVn0wYQC/TYSPg8iUvwPcJNxrf6UtKTpE9Cp5y4WxQNI9+DOAS2oW5C9UbzRaNPYC2CbtenkvEH/91ZPctLSOD8FSZ20gjeAdWACoX2NnYhtIXYJOHH9s6kO4nU0bhf4jGKtM5RfWV1TNY7gAddOWTeexPst9hl/DfGPVm/n/BN3Cfg5caMg+k35LnhuMfU9hfBBsIOyxKN5xEtU4l/waUzjpOnXwBLlAVA3zxAuI3afuBbVIaDb8wT4CdYCmcZqzr9HtXQ/0tI4vwaqlMsKNBrENfCA+JNYmxN/S+z6CsVFIy1p+gR0/hf5t5rXRENER+jjWONrytPE9XRSm2kUGVB/59AwAs50YqLPEBgDmd4XpAFGmnQIrtZ1rCtfR3az0dC9FxKXDkms6iuZOwecvrwWmw6mSZLJ/WpmHJPGKe7OxqDuvZbH0yORvB8mu+F7yFZt+WGik62tkYRW7DCogBDoANE1q7KmSqazXXtbJ1zZynP4fJ9mEHgjEa2XEpCA7n0JRlcqXomEQMdrFaT+OKVvd+0vUd2owxMzEpMAAAAASUVORK5CYII=);
}
.fRFjh._2g9Uy {
  background-image: url(data:image/png;base64,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);
}
@-webkit-keyframes _20-t3 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _20-t3 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3Tqo3 {
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
@keyframes _3Tqo3 {
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
._1QPxJ {
  background: #000;
  overflow: hidden;
}
._1QPxJ,
._1QPxJ canvas,
._3j8Hg,
.VideoJsPlayer__video {
  height: 100%;
  width: 100%;
}
.FlvPlayer__root video {
  -o-object-fit: fill;
  object-fit: fill;
  width: 100%;
  height: 100%;
}
.Edge .FlvPlayer__root video,
.IE .FlvPlayer__root video {
  position: static;
  height: auto;
}
.ControlLayer__play {
  z-index: 3;
}
._2GFWT {
  position: absolute;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 0.52em 0 0;
  max-width: 100%;
  width: 3.08em;
  height: 0.28em;
  line-height: 1.25;
  letter-spacing: 0.002em;
  color: #fff;
}
._2GFWT > span {
  font-size: 0.16em;
  text-align: center;
}
._2GFWT.SBVX1 {
  padding: 0 0 0.16em;
  width: 4.24em;
}
._2GFWT._2w_4m {
  padding: 0.93em 0 0;
}
.nOlbe {
  position: absolute;
  top: 1.9em;
  left: 0;
  right: 0;
  z-index: 1;
  margin: auto;
  height: 0.56em;
  width: 1.12em;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-transition: opacity 0.5s ease-in;
  transition: opacity 0.5s ease-in;
  opacity: 0;
}
.nOlbe._1vRuj {
  top: 1.24em;
}
.nOlbe._2zAHT {
  opacity: 1;
}
.nOlbe ._1bEUE {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  height: 0.24em;
  width: 1.12em;
  border-radius: 0.12em;
  -webkit-box-shadow: 0 0.02em 0.04em 0 rgba(0, 0, 0, 0.4);
  box-shadow: 0 0.02em 0.04em 0 rgba(0, 0, 0, 0.4);
  background-color: #343024;
}
.nOlbe ._1bEUE ._3NsDq {
  font-size: 0.16em;
  color: hsla(0, 0%, 100%, 0.87);
}
.nOlbe ._1bEUE:hover {
  background-color: #bbaa7d;
  color: #fff;
}
.nOlbe ._1bEUE._30NQB {
  background-color: #7d7254;
  color: #fff;
  pointer-events: none;
}
@-webkit-keyframes _1g_Vm {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1g_Vm {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3FT1w {
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
@keyframes _3FT1w {
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
._2TLsm {
  position: relative;
}
._2TLsm,
.siB5g {
  width: 0.96em;
  height: 0.96em;
}
.siB5g {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
._6HB3 {
  color: #fdeed4;
  font-size: 0.16em;
  text-align: center;
  width: 80%;
  line-height: 1;
  letter-spacing: 0.0125em;
}
._6HB3._1nR3K {
  font-weight: 600;
  color: #e0001e;
}
.zh-CN ._6HB3,
.zh-TW ._6HB3 {
  width: 100%;
  letter-spacing: 0.0125em;
}
@-webkit-keyframes _2FbGY {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2FbGY {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _31R1V {
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
@keyframes _31R1V {
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
._1YNLs {
  display: -ms-flexbox;
  display: flex;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  width: 1.8em;
  padding-bottom: 0.03em;
  background: rgba(4, 4, 3, 0.8);
}
._1YNLs._1ntud {
  width: 2.58em;
  background: #1a1a1a;
  border: 1px solid #3e3726;
}
._1YNLs._3hu52 {
  width: 2.08em;
}
._27QHH {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.02em 0.04em 0.05em;
  border-bottom: 0.01em solid hsla(0, 0%, 100%, 0.12);
}
._1ntud ._27QHH {
  padding: 0.05em 0.08em 0;
  height: 0.83em;
  border-bottom: 0;
  background-color: #0d0d0c;
}
._2enaz {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}
._1Htk0 {
  width: 0.16em;
  height: 0.16em;
  margin-left: 0.04em;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAwVJREFUWAnFl81KVVEUx++VGjQItYFDJYnKRhI9gARGQWA40BdwUG/koBfQgRQEBoL4ABF3ZB+IoUMHaQRNAm+/3z5rH673Hq83uqe74H/WPnuvvf5rf551Go0RS3NQ/na7PYbtLJgHM2ACjAPlBzgDR6AFDpvN5jn6SrkyAIiv4+UxWAQ3r/RYGPxE7YBdAvndr0/fACB/SOcVMBlOTtCOcB98B45ccSZugQdgHkwB5RRsEsTH9FbxqAwAYuuXwLPoc4zewtGneO+r6D+HwTKYDsNt9Fv6t+O9VD0BBPkaFo+A67gJ9qo6U3+phJ8FDJxB988H8LrbT1UALzB05L/AOh2+oHsEAvfF02h4j91ujxEV2N1HvQQ3wDZ2b9ClGFkpGLvmkjvyfuR3aF8Frr1Ypa91PQLhZyrXgT6fBUdpVwZAg7vd6VLcOJUjL5obt0N3qqq61B5BuJTKSnCllzIA3pxSd/sx2AP95FtFY1Vdp9keL/qWQ64kYz6JSO05V9ztPbu1aCqetB9Q2gAeQ7ERdRSrJXxuReticDauRcUs2kvmBMOBjhp2brrKjRc+e5S+IfYu8Z6Q8yDNAAUvD6VVqFqfmSNx5hmYCcr9QagZxT3s7nbZfmWE/TZuNpfjCUicOYCJaPV6HUQkf95l+I73QQLIHIkzL4FnWXFD1S2ZI3HmAOomvdR/DuBCVJdaD6fhwmznAM7Ct5/UuiVzJM4cwFGw+j2vWzJH4swBtIJ1vm52/GeOxJkDOKTBNGqKMz5XVxDh21tQLjlTotDgAjmnbA6nLGPYLIrDe4ZPsyRlJziLAIq6dK+fUp4GC1E3TKVPfcuxC5LkJXAWzF47v9let0MRRm9WtBLOzDXKTLkMwEYazF5NIK1/Rcd/DiJ8mJLp05RMjlJ61jrWag2L0SSlhhZBLFE0P1SOwf9JyxNdPAjEJNW1m4wqkwnPr59Uv2qdV7g3nJeM59yjprjh/v7HJHWNB0GM7tesKxA30SxwhCYTE2AcKM7EGfB6bYGBf06xHa38AU9p9t42IpyrAAAAAElFTkSuQmCC);
  background-size: 100% 100%;
}
._1ntud ._1Htk0 {
  margin-top: 0.04em;
}
._2jbzU {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  height: 0.18em;
  width: 100%;
}
._1ntud ._2jbzU {
  height: 0.23em;
}
._3hu52 ._2jbzU {
  height: 0.18em;
}
._3hu52 ._2jbzU._2-ppg {
  height: 0.24em;
}
._2e_lZ,
._2tog7 {
  font-size: 0.12em;
  font-weight: 600;
  letter-spacing: 0.03333em;
}
._1ntud ._2e_lZ,
._1ntud ._2tog7 {
  font-size: 0.16em;
  font-weight: 100;
  letter-spacing: 0.0125em;
}
._2tog7 {
  color: #fdeed4;
}
._2e_lZ,
._24Bwp {
  color: hsla(0, 0%, 100%, 0.87);
}
._24Bwp {
  width: 100%;
  height: 2em;
  margin-bottom: 12.25em;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-bottom: 0.1875em;
  font-size: 0.16em;
  background-color: #343024;
}
._2fHau {
  top: 1.16em;
  width: 2.57em;
  height: 2.19em;
}
._2fHau,
._7uP3i {
  position: absolute;
}
._7uP3i {
  top: 0;
  left: -0.01em;
  width: 2.58em;
  height: 2em;
  pointer-events: none;
}
._1Irpk {
  width: 100%;
  height: 2.29em;
  margin-top: 0.02em;
  margin-bottom: -0.03em;
  -ms-flex-direction: column;
  flex-direction: column;
}
._1Irpk,
._1Irpk > * {
  display: -ms-flexbox;
  display: flex;
}
._1Irpk > * {
  -ms-flex: 1 1;
  flex: 1 1;
}
@-webkit-keyframes _2N6wm {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2N6wm {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes AABl5 {
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
@keyframes AABl5 {
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
@-webkit-keyframes -waf9 {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes -waf9 {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._2FVVn {
  width: 100%;
  height: 100%;
}
._2FVVn,
.mGmDp {
  position: relative;
}
.mGmDp {
  width: 10.88em;
  height: 5.78em;
  margin: auto;
}
.mGmDp._2pNum {
  width: 10.92em;
  height: 100%;
  margin: 0;
}
.mGmDp._2pNum:after {
  display: none;
}
.mGmDp:after {
  content: "";
  width: 0.52em;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(0, 0, 0, 0.8)),
    color-stop(60%, rgba(0, 0, 0, 0.2)),
    to(transparent)
  );
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.2) 60%,
    transparent
  );
  pointer-events: none;
}
._1RAKD {
  height: 100%;
  width: 100%;
}
._2pNum ._1RAKD {
  position: absolute;
  height:  3.65em;
  width: 4.18em;
  left: 2.98em;
  top: 0.04em;
  border: 1px solid #3e3726;
}
._2ZPev {
  position: absolute;
  top: 3.19em;
  left: 1.17em;
}
._2QS10 {
  z-index: 2;
}
.adckm {
  position: absolute;
  top: 0.08em;
  left: 2.62em;
  z-index: 1;
}
._2pNum .adckm {
  left: 6.06em;
  top: 0.21em;
}
.P9dDv {
  position: absolute;
  top: 0.08em;
  left: 0.66em;
  z-index: 3;
}
._2pNum .P9dDv {
  top: 0.04em;
  left: 0.36em;
}
.P9dDv._1Q3hE {
  top: 0.86em;
  z-index: 2;
}
.P9dDv._1QVZM {
  top: 5.77em;
  left: 8.8em;
}
._3RmZi {
  position: absolute;
  bottom: -1.01em;
  width: 10.88em;
  height: 5.01em;
}
._2pNum ._3RmZi {
  bottom: 0;
  margin-left: 0.04em;
}
._1G0UO {
  top: 2.18em;
  left: 1.14em;
  width: 1em;
  height: 2em;
}
._1G0UO,
._2Ob7v {
  position: absolute;
}
._2Ob7v {
  bottom: 0;
  width: 100%;
  opacity: 1;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
  z-index: 3;
  pointer-events: none;
}
._2Ob7v.JffQ9 {
  opacity: 0;
}
._27zPy {
  left: 0.04em;
  width: 100%;
  height: 1.58em;
}
._1IYcd,
._27zPy {
  position: absolute;
  bottom: 0;
}
._1IYcd {
  width: 3.46em;
  height: 100%;
  pointer-events: none;
}
._3quUN {
  left: 0.76em;
}
._3quUN,
._31GW8 {
  position: absolute;
  top: 3.43em;
}
._31GW8 {
  left: 3.18em;
}
._1pkrW,
._29MfI,
.oFCwz {
  pointer-events: none;
}
._1pkrW {
  top: 3.84em;
  left: 3.08em;
  width: 4.8em;
  height: 1.61em;
}
._1pkrW,
._29MfI {
  position: absolute;
}
._29MfI {
  top: 3.97em;
  left: 0.83em;
  width: 9.26em;
  height: 2.76em;
}
.oFCwz {
  position: absolute;
  top: 4.14em;
  left: 0.79em;
  width: 9.42em;
  height: 2.64em;
}
._1e-cn {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 1002;
  overflow: hidden;
  pointer-events: none;
}
._1e-cn,
._24bGH {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
._24bGH {
  width: 6em;
  min-height: 1.28em;
  margin-top: -2.6em;
  padding: 0.16em 0;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(transparent),
    color-stop(13%, rgba(0, 0, 0, 0.6)),
    color-stop(51%, #000),
    color-stop(88%, rgba(0, 0, 0, 0.6)),
    to(transparent)
  );
  background-image: linear-gradient(
    90deg,
    transparent,
    rgba(0, 0, 0, 0.6) 13%,
    #000 51%,
    rgba(0, 0, 0, 0.6) 88%,
    transparent
  );
}
._24bGH._1vNlh {
  -ms-flex-pack: center;
  justify-content: center;
}
._2K8nf {
  width: 0.4em;
  height: 0.4em;
  margin-bottom: 0.06em;
}
._1ZTAQ {
  color: #fff;
  font-size: 0.16em;
  letter-spacing: 0.0125em;
  line-height: 1.25;
  max-width: 26.875em;
}
._3eU1n {
  height: auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 0.01em;
  max-width: 4.3em;
  text-align: center;
}
._1kfxk {
  width: 9.5%;
  height: 15%;
  max-width: 116px;
  max-height: 116px;
}
.T67bg {
  width: 0.6em;
  height: 0.6em;
}
.GyqT1 {
  top: 3.23em;
  left: 0;
  right: 0;
  height: 4.12em;
}
.GyqT1,
.GyqT1 ._3RQS9 {
  position: absolute;
  width: 100%;
}
.GyqT1 ._3RQS9 {
  height: 100%;
  background-size: 100% 100%;
  background-image: url(../../assets/5f55c5b3.png);
}
._4DarF {
  bottom: 0;
  width: 10.92em;
  height: 0.32em;
}
._4DarF,
._10B-u {
  position: absolute;
}
._10B-u {
  top: 3.33em;
  left: 0.34em;
  width: 3.72em;
  height: 0.38em;
}
._3sx-V {
  position: absolute;
  top: 3.44em;
  left: 0.78em;
  width: 2.77em;
}
@-webkit-keyframes _2cTbO {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2cTbO {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes yCb-O {
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
@keyframes yCb-O {
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
._2cqzU {
  display: block;
  position: absolute;
  top: 0.04em;
  right: 0;
  height: 3.14em;
  width: 3.68em;
  border: 1px solid #3e3726;
  z-index: 1001;
}
._2cqzU._1842t {
  display: none;
}
._186rh {
  width: 9.5%;
  height: 15%;
  max-width: 116px;
  max-height: 116px;
}
._2igN8 {
  width: 5%;
  height: 8%;
  max-width: 60px;
  max-height: 60px;
}
._2lHa6 {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  top: 3.33em;
  right: 1.78em;
  padding: 0 0.16em 0.07em 0.03em;
  width: 1.9em;
  height: 0.38em;
  cursor: pointer;
  outline: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: url(../../assets/6837160f.png) 50% no-repeat;
  background-size: 100% 100%;
  z-index: 2;
  pointer-events: auto;
}
._2lHa6._3RIE7 {
  z-index: 15500;
  pointer-events: none;
}
._2lHa6 ._3yxS1 {
  -ms-flex: 1 1;
  flex: 1 1;
  color: hsla(0, 0%, 100%, 0.6);
  font-size: 0.14em;
  margin-left: 1.21429em;
  text-align: start;
}
._2lHa6 ._3Mh4Z {
  width: 0.14em;
  height: 0.14em;
  margin: 0.02em 0.11em 0 0;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABBFJREFUWAnNlz1IlWEUx72VEdkHhtkSEVRgBDWa0egUirQqVDS0NNXQUhFRLQ05tThECbqGFE2OkToqSEJO0dIHRR9GlGm/33Ofc33v9VotcTvwv+fjf95zHp+v97XU9BtZXl4+CN0PWsB4qVR6EulwXdgns/8QbqLAncDuBgtgFO55cLV6XW0gfBqsxz4H2oED6CO2H92EbkWdAtszTuWYnDl9wGd89hwxa9WVNQdA9uaM4oM7s7MDXXxW25gSOWWvfp3gqopUghpM22fUXCH4FXs2+y/RrwuctjHFHHND5nKt8Kt0qcqrcZi6jYSOA2djkkLvIgVuS+YMPYX7UuDasI8CByL3Pbj/U7tJwNZ6oyPeDNxQq4T4JrGKIOAzoHkNbitc2pglDI+au91pds3vxpTBHcMfABuAx+wB3DLaBj0ooTwm/liDuMt6GnhMF8EI3DO0nEt6HnQAl2fI3es5t7ki4Zqb7OijuSELHtKAa0f1ApuJ3hzDTDnmKg58INfSt7Y9FHv2O4Da6Y3BOFoLFCW40H/DWcNaSu1zLQ5gPFHlH6dlUpNpW0BVbjfst2AGKB65F8kq/2gbU8wxN2Qi19K3tj1CxtMxZIr2E/ECmSX5U7DE5Z12Rz4D963AuYmOZH8a7meB24R9GNjMmmnfyFNzG8qab4nPG2u8MKpWsA+sOjbE2sFe4HJVCbHdoiqIYy7wGTdrlRDzWNvL90mTx9Ad64vFBl6pt5madKvBeczc7YrrPBhTDXcWv1MCmSJ+T4O4S3MBHNBHHsHFEfX2vAR2gSUwbFNfqfHXSXhULOQ6xjk3ZMG05nD+1dFcrjPHtM2J5vo9uZa2te2hpN7RuBxqwK8DeAicDsUleKrBtLnj09TpIy7BtAbcK9SUdhaXwJhiTvGIekvG6bG2PRR72jtNd8M2YRpAI38afhF5DE8wA315Fry5brFm7/ThzqDixeL1etP1JO7euQhit7vmd+CW8o6/gu/NqngV39eAa0NdBvFOGLNQNwiROKpDcgsqmhuyoNersgdEc31tY4o50Vy/K9fStnY01+92AAtaBXEWFD+jFpO18hNc6BVm5SVTy1kjPslquQUHMAqCmMP2qHjUfqBGQAzCN+MskHuDegR8yQhvO2OKOfEW9Vk/SKylWNseij3tnaa7YZ9kaQCN/EnHcK0BsHn8kjkO3Dj/5LP8TwPwrdYBFNfsGuv5iYE1Y18F8WLxer3hWsP5wXEdxG73H5NB/LriJqwrFPIzPZqbY0G/ZBSPXDTX145jaE40l+vItbRXyZoDINO/OE5HPOhlpLwHS8kq/2gbUyKn7NWvE1zlO6ASCINp8xtvCLwB3hVjxObRHsMPqGHwMWM4x+TMGQM+47NDxCrfi/hV8gvA1gItPXQUdAAAAABJRU5ErkJggg==)
    50% no-repeat;
  background-size: 100% 100%;
}
._2lHa6[disabled] {
  pointer-events: none;
}
._2lHa6[disabled] ._3yxS1 {
  color: hsla(0, 0%, 100%, 0.38);
}
._2lHa6[disabled] ._3Mh4Z {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABAFJREFUWAnNl91LlUEQhzUt+7bE6AOqg9WNEUh4UUQgeNFfXUEURlAIoTeWqIEoiR9ZZn50ep49O6+rR4/QzXFg3NnfzOzOOzuze+zoaDN1ttq/Xq+rfwxfh1fgT52dnX8YO9DdYnioDE2AzyuAn2YYhq/Ci/A4ul3GQ+nUoege2IfoRl1wP/wAdhMDG4LPZh4C00bSXlvnynfgI+m4AGLRWOBMCIylTjnmZqCk0qfEk3xcAKZ9M3vtME4rk9I6w4xyphmwrSwvMGor6TuXpP/9Q2q74T646UvALssH19YW1qf7oO7EzVMXEKmjBec5rpDO7YgU3XnkS/AG+HqBa6uPtIyuqnR8tNdvHXxDAwnc+rA7tNWnSpGtZsVKmxi+RrmTNx9twGkBW+pbnj9j7M3yGuMbZXyuMTxRlpi/w2eZ0Y8cge0cybb9GEVonwdpEOfql5SU7PJisbn6XrCebHildECOta2H2FyThEcAVnuQFfwzT6r05XmyM3XMS51ydEH4ZpeO5SyY9ugOocZaSjl6LxkrfZoNVsUldLcZjFYHdW4ufoHhvjL0BfyXAripHoDTTQgeR6bO7Kgz2Cl06VZFPgFk5Dn6pmha4a10TQsBHNwn2tAO8G63tbzVPjNq7Dyq3XN+X6T6HvNBWJoE/6qAj4Wmj21od4yhS22N7hHzGmw92FHzUYS+am4m1TCMLrDPexPaWDCdOXoDj81VD4LFrefHuLmk712FrK8pQ+6VXtIIIKHt+BMBTLC5aZE8gh8NMbWQaZQ8gi8K6O2ESeVMHkG0mBeMtpK+swpZP6MMuZd77hEp6oKbHhwtwHvgVC97Ho20gkfqK5W2+lRAIYD7UMVxF5o2iemriMhHwuJxXCBd1W2GzrvdC0RMXVxEVrs+0jx4+t2AvWvegC/Cq+DfGROhE1NnV+izHQE8BeiHJc/yJcotHHwLRuCgst1GAaPaPfNX+OBSv4k8HA6MH8AXwa23F3Ac2RL4WBSh12aQBkYqxQaNWeN6tSYMvNQpR/2Eb/jEk+25x+bq0p4RgL9eg0xldEH1/mdlsvNLmUd3qFoDi3u9ekdKH2Qzm46pxOMIjM5fr37FHIv9zkZ+rV/gY+QPiCpQcOslXTKMs+jSbYesj/b6LYLHayh+Dsx9tmD3idZn2iZKGWi1N1Fr49ntEvHf0hZdOlPwuISSGtyjNas76FLXlH6l3DIAFjLNI7At5yY+LOmM0cXDArzvAbMIn8MG55m/xac6Uub7KIpwH1hMrNT4GeWCA+rY3MBryplqYNEF9nnKDKO+nvmRdFwAB4vE4gkqdcoxr4oxG5Y+4VuNxwVgBc/DLr4ET8HxGI0jmmK5/AdUe231UZ6DTy79A2zhsF6qVpdlAAAAAElFTkSuQmCC);
}
._2lHa6._3RAlp {
  background-image: url(../../assets/82d40e25.png);
}
._2lHa6._3RAlp ._3yxS1 {
  color: #fff;
}
._2lHa6._3RAlp ._3Mh4Z {
  background-image: url(data:image/png;base64,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);
}
@-webkit-keyframes _306uw {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _306uw {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes FySCu {
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
@keyframes FySCu {
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
._3TFh3 {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}
._3TFh3,
.EVPpU ._2TOJB {
  display: -ms-flexbox;
  display: flex;
}
.EVPpU ._2TOJB {
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding-right: 0.16em;
  position: absolute;
  left: 0.67em;
  top: 0.74em;
}
.EVPpU ._1k_1Y {
  padding: 0.12em 0 0.12em 0.98em;
}
.EVPpU .JKh2J {
  padding: 0;
  width: 1.5em;
}
.EVPpU ._2U6Rs {
  color: #fff;
}
.EVPpU ._2U6Rs._2kZje {
  color: hsla(0, 0%, 100%, 0.87);
  padding-bottom: 0.08333em;
  padding-right: 0.02778em;
}
._2TOJB {
  -ms-flex: 1 1;
  flex: 1 1;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
._1k_1Y,
._2TOJB {
  display: -ms-flexbox;
  display: flex;
}
._1k_1Y {
  -ms-flex: 1 1;
  flex: 1 1;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  padding: 0.12em 0 0.1em;
}
._2O2JJ {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 0.56em;
  height: 0.56em;
  border-radius: 50%;
}
._2O2JJ._273qE {
  background-color: #ff101a;
}
._2O2JJ._1a8s6 {
  background-color: #373131;
}
._2O2JJ.ImWWH {
  background-color: #2e9935;
}
.JKh2J {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  min-height: 0.28em;
  min-width: 0.45em;
  padding-right: 0.16em;
}
._2U6Rs {
  color: hsla(0, 0%, 100%, 0.87);
  font-size: 0.2em;
  font-weight: 500;
  text-align: center;
}
._2U6Rs._2kZje {
  color: #fff;
  font-size: 0.36em;
  font-weight: 700;
  padding-bottom: 0.05556em;
}
.gX-xw {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  height: 0.24em;
}
.gX-xw._31x02 {
  height: 0.4em;
}
.gX-xw._31x02 ._2RYLa {
  width: 0.4em;
  height: 0.4em;
  border-radius: 50%;
}
.gX-xw._31x02 ._2RYLa:last-child {
  margin-left: 0.04em;
}
._2RYLa {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 0.82em;
  height: 0.24em;
  -webkit-box-shadow: 0 0.04em 0.06em 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 0.04em 0.06em 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
  outline: none;
  border-radius: 0.12em;
  color: hsla(0, 0%, 100%, 0.87);
  pointer-events: auto;
}
._2RYLa:last-child {
  margin-left: 0.02em;
}
._2RYLa ._3w--6 {
  font-size: 0.14em;
}
._2RYLa:hover {
  color: #fff;
}
._1m_7V {
  background-color: #7d7254;
}
._1m_7V:hover {
  background-color: #bbaa7d;
}
._1m_7V ._1k3sv {
  width: 0.24em;
  height: 0.24em;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMA8SbmOPrNFvfjHBD03tnTbWJaU0xFPyETD+c7CR/ewc0AAABuSURBVCjPtdBJDoAgFANQcVacZ9Te/5oaoj8hKUu6+68baBQ6xuNxMngcShPfK6iUe3MRr1s0G/eSedGhXOXw+KBS8R7Z8h86kccd1iXx+TVHjmx2P2obLe425vWJjZMDE50NGOmglXWSu46C5QFnMgX360m9WQAAAABJRU5ErkJggg==)
    50% no-repeat;
  background-size: 100% 100%;
}
.OBOwe {
  background-color: #24211a;
}
.OBOwe:hover {
  background-color: #bbaa7d;
}
.OBOwe ._1k3sv {
  width: 0.16em;
  height: 0.16em;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAC+x8L/TEPpL559DJX0s7IBPtzzD3AAAATUlEQVQY06XOSxKAIAwE0Y4o4F9z/8O6COUUa7J7vZnAa+gesD2rlCVB8my/p5lWZJWwSljlCqt4Z8rqhwFor7Yt7Q38Y1v3T4VbhtM+c2cCwynPe1YAAAAASUVORK5CYII=)
    50% no-repeat;
  background-size: 100% 100%;
}
._2PbkB {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1500;
}

._2A_Cv {
  font-size: 0.14em;
  color: hsla(0, 0%, 100%, 0.87);
  text-align: center;
}

.MWKSW {
  width: 0.32em;
  height: 0.32em;
  margin-bottom: 0.04em;
}

._2et_L,
._2et_L._2eSL8 {
  width: 100%;
  height: 100%;
}

._2et_L._2eSL8 {
  position: relative;
  top: 0;
  left: 0;
  background: transparent;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}

._2et_L._2eSL8:after {
  content: "";
  width: 100%;
  height: 100%;
  background: transparent
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAzFBMVEUAAAD97tT97tT97tT+79T979T97tP+7tT979P979P97tT+7tP+79P+7tP97tT979P+79T979T979P+79T79dX+7tP+7tT97tT97tb/7tD97tT97tP+7NL+8NT979P97tP979T97tT+8NX97tP879P97tT97tb97NL/8+D97tT87dT+7tT97tP97dP+79T97tP97tP97db97tP97tP97tP97tP87dP979T97tP97tT97dP97tP97tT979T879T87dL47dX87dP97dP979McF+feAAAARHRSTlMA5vPV3tvR4urN+PX62M/w4O787ATT2ugSDv5sHCBEP6JKGKgxYDYsB5C+uK14cmYnJJlbh0/HwZ2Ui37JglM7CrVXsd9RCHcAAAWRSURBVHja7dJ5c5pAHMbxJxo1pjlMs2mhIggq4i3eV7zy/t9TF3bZxZg2iRGY6fTDjP75fP0h/vvvJE593Sm3ptnLx0wJcesXK5mb79Qvz2W8AUqtnLu5ofOJBDjr9je6nlSAPb+6pttJBRitayqxAHN67bu5TiTAnlxzN+IETCwByvwbFRRcxx5Qy3nzNICJO0BrfWPkviy4zt2umjMLETJzfP51QH7QNV2CiJFRKvVNEAHp+VpBHLRmSgSIG+QWVcSkf5vyhS/QNgniYhdSDJ+nT7mO+OhXKRHAzFzEaP2QOgxY2YiTzvZFws8iQZzsn6mDgKaGWPXp/++ePoFnglhp6XtKBBR0xIu0vHmKJWRLiNnzPecHTC3ETJfz1E5FzLTLh3shtXMQt1Zo/n6qIm7DB889u0LWQtyUjDfPZUqIXeOBu6ePjthV2Tq7whLxaz5ILYLY6Y+Pjw9cTkP8WqGAIuK3efSwiClB/NqhABvxq149CnMkoCEDrlzEz8lcUSxggASMvXkeUEcCyleBxzISoFywce/RkYDhlZAmSMBABjwjCU8yoI4E9OX+BEmo/aRYwAhJmMkAE0nI/xQUJMC5EPtNJKF+cREkLJCEsQzoIQndC0FHEuYyoIQkVMR+jiAJOxFwh0Q0RcAUiViJgBYSkRYBbSSiIAJm+Ih/LyDxV7DKBXaIHJEQaOYu+DNF5BznOOAlF8gjcltHQKAsAi4JorblwgGNnFBCxIgqyICiDNDxSiwBpgzoIWJbRZAB/Zyn4BkhYqoiEAScAgugHy1ETLE4RYE0KQgKIkU0SxRAGngHYExEaqtxhwG1gvCMSCmlUlCwheTKgCYipbluyadpBCF5WVBHhBzXFQUIaxSoS98SEbL6lOtXWAjby4AVQXT6jEupCFMyl4KByKh1n99AcGAmAwaIjFutBgUaDpmXUh8R2VYp3qDikJOVAQ1ExLVlAV4byYBMCZHYbmyKRWh4rcrHLzOZzAKR6G9oAU/Y4kiZBWS8hioioBqGsaFsqo9jNvv1/ueO4PxsQxaoeEPbn2dqOLuSrusGb6jjLQadD9xZOLOtrssCBW96yQg/KgTntTFNM0io4m3VUMCPLs6qPjYpfgUVfzBi4xT9MnBG1no8Fgl9/ImaDwLox0rD2ajjtSwwCP5o780HZ2gqOBNnvN+vRYKGv6iwgB+e2/YWZ0HM4d4rGPsFNv7GWgW//5YqO+fZrw2HIsF851cZdNx36xdsz3B/s1bzCvhbsPCODpvn2gq+aLvu9bwCnlDHe0iFBXAtDV+iDos9r4C/BZ3gXdZUzKdv0+nJBl9Q6hWLfgFLGG/xAe7qVqAF6S7BiYjR7RZDBWsVH1LNButM2Tr1/B0ewN+Cgg8y0uIV+FbDE45A7E6n06VEgYYPM72CdEi7ik/Sistlh5IvwcUnGHcHBU9PT6MSPkHZPz8v/YJuUKDhU6qTdMgTlV24+CBruBiNRjRBFtQsfJLbDAf4BdnGhuBdpN5rNBYLHsALago+zaq8DqCa3T7+qrRfzOcygJ9gr+IEpCvmWQDz0tFVvEm1a6PZbDCQBfwlGASnMSah3y/c3d1VlsONRkKtmj0uLiqVSrlMAwY0oEED+A2KLk5mlY8D7ph8ftVqlweNxXxQrrR2u5eXdtsLkCfgATUVX7GeiAC2LgKY1WQybTZbreMAVtCp4ovU5dMbAXkWsPIDpocBMy+Av4TxFl9Xr9B56fgC9AQiQJ6A3qCo4TyMclY6vgB/BzSAFQxYQbGP87EHcv/4AjJA/guKLs6rvpyIADmfz4uAXZsW8IDGsITzc/RGXv4Dji4g/4bFKkFElPGoeXCBo4BB0VARrdJ+scsLq5UMGHRNDfFwXL33PJ9VXpqTaatdni86w03JwX//neI3GUohsT/4i6UAAAAASUVORK5CYII=)
    no-repeat 50%;
  background-size: 100% 100%;
  -webkit-animation: _2eSL8 1s linear infinite;
  animation: _2eSL8 1s linear infinite;
}

._2et_L.axlsv {
  background: url(data:image/png;base64,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)
    no-repeat 50%;
  background-size: 100% 100%;
}

._2et_L._1YINl {
  background: url(data:image/png;base64,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)
    no-repeat 50%;
  background-size: 100% 100%;
}

._2et_L.fV8cs {
  background: url(data:image/png;base64,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)
    no-repeat 50%;
  background-size: 100% 100%;
}
._3TGE0 {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: -1.25em;
  margin-left: -0.1em;
  height: 100%;
  width: 100%;
  opacity: 0;
  -webkit-animation: _2UDiL 5s linear;
  animation: _2UDiL 5s linear;
}

._3TGE0.mC-ad {
  display: none;
}

._3TGE0 ._2JF_w {
  position: absolute;
  height: 3.19em;
  width: 4.29em;
  margin-top: -0.15em;
  margin-left: -0.05em;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  background-image: url(../../assets/949f3dd7.png);
  -webkit-animation: _1kJkC 5s linear;
  animation: _1kJkC 5s linear;
}

._3TGE0 ._1N094 {
  position: absolute;
  height: 4.56em;
  width: 4.56em;
  margin-top: -0.1em;
  -webkit-animation: _2k9A0 5s linear;
  animation: _2k9A0 5s linear;
}

._3TGE0 ._2IwUZ {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
  background-image: url(../../assets/97cbc3f4.png);
  -webkit-animation: _2Um6I 10s linear forwards;
  animation: _2Um6I 10s linear forwards;
}

._3TGE0 ._3ElU_ {
  width: 100%;
  height: 100%;
  margin-top: -0.2em;
  -webkit-animation: _3KQq4 5s linear;
  animation: _3KQq4 5s linear;
}

._3TGE0 ._3ElU_,
._3TGE0 ._37Qd7 {
  position: absolute;
}

._3TGE0 ._3Cwru {
  -webkit-transform-origin: 50% 100% 0;
  transform-origin: 50% 100% 0;
  -webkit-animation: _37oQJ 5s linear;
  animation: _37oQJ 5s linear;
}

._3TGE0 ._3GXBP,
.Safari ._3TGE0 ._3Cwru {
  -webkit-animation: qH-Q0 5s linear;
  animation: qH-Q0 5s linear;
}

._3Uo-7 ._1nXit {
  font-size: 0.26em;
  font-family: Arial, sans-serif;
  font-weight: 700;
  line-height: 1;
  margin-top: 0.15385em;
  color: #ff101a;
}
._3_qV3 {
  -ms-flex-direction: column;
  flex-direction: column;
}
._1XVRm,
._3_qV3 {
  display: -ms-flexbox;
  display: flex;
}
._1XVRm {
  height: 100%;
  width: 100%;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 0.14em;
}
._1dEXQ {
  margin-bottom: 0.1em;
}
.LnRDC {
  font-size: 0.4em;
  line-height: 1;
  font-weight: 600;
  color: transparent;
}
.LnRDC._3VFdI {
  font-family: Helvetica;
}
._3YcCQ {
  position: absolute;
  text-shadow: 0.05em 0.05em 0.05em rgba(0, 0, 0, 0.8);
}
.Edge ._3YcCQ {
  color: #000;
}
._2ZAjS {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#c5a062),
    color-stop(10%, #c5a062),
    color-stop(40%, #fff7ea),
    color-stop(70%, #f3e5ce),
    to(#c19b59)
  );
  background: linear-gradient(
    #c5a062,
    #c5a062 10%,
    #fff7ea 40%,
    #f3e5ce 70%,
    #c19b59
  );
  -webkit-background-clip: text;
  z-index: 1;
}
._3fa_L {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#bb934c),
    color-stop(15%, #bb934c),
    color-stop(45%, #fff7ea),
    color-stop(65%, #fff7ea),
    color-stop(90%, #d7bc8d),
    to(#b78c42)
  );
  background: linear-gradient(
    #bb934c,
    #bb934c 15%,
    #fff7ea 45%,
    #fff7ea 65%,
    #d7bc8d 90%,
    #b78c42
  );
  -webkit-background-clip: text;
  z-index: 1;
}
._10oXe ._3YcCQ {
  text-shadow: 0 0.08333em 0.04167em rgba(0, 0, 0, 0.6);
}
._10oXe ._1dEXQ {
  margin-bottom: 0.04em;
}
._10oXe ._1dEXQ .LnRDC {
  font-size: 0.2em;
}
._10oXe ._3VFdI {
  font-size: 0.24em;
  letter-spacing: 0.00833em;
}
@-webkit-keyframes _2UDiL {
  0%,
  76% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes _2UDiL {
  0%,
  76% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@-webkit-keyframes _3KQq4 {
  0%,
  10% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  20%,
  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes _3KQq4 {
  0%,
  10% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  20%,
  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@-webkit-keyframes _1kJkC {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }

  20% {
    -webkit-transform: scale(0.875);
    transform: scale(0.875);
    opacity: 1;
  }

  56%,
  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes _1kJkC {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }

  20% {
    -webkit-transform: scale(0.875);
    transform: scale(0.875);
    opacity: 1;
  }

  56%,
  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@-webkit-keyframes _2k9A0 {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }

  17% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    opacity: 1;
  }

  24%,
  to {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 1;
  }
}

@keyframes _2k9A0 {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }

  17% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    opacity: 1;
  }

  24%,
  to {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 1;
  }
}

@-webkit-keyframes _2Um6I {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes _2Um6I {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@-webkit-keyframes _37oQJ {
  0%,
  8% {
    -webkit-transform: translateY(100%) scale(0);
    transform: translateY(100%) scale(0);
    opacity: 0;
  }

  18%,
  19% {
    -webkit-transform: translate(0) scale(1);
    transform: translate(0) scale(1);
    opacity: 1;
  }

  23% {
    -webkit-transform: translate(0) scale(1.2);
    transform: translate(0) scale(1.2);
    opacity: 1;
  }

  25%,
  to {
    -webkit-transform: translate(0) scale(1);
    transform: translate(0) scale(1);
    opacity: 1;
  }
}

@keyframes _37oQJ {
  0%,
  8% {
    -webkit-transform: translateY(100%) scale(0);
    transform: translateY(100%) scale(0);
    opacity: 0;
  }

  18%,
  19% {
    -webkit-transform: translate(0) scale(1);
    transform: translate(0) scale(1);
    opacity: 1;
  }

  23% {
    -webkit-transform: translate(0) scale(1.2);
    transform: translate(0) scale(1.2);
    opacity: 1;
  }

  25%,
  to {
    -webkit-transform: translate(0) scale(1);
    transform: translate(0) scale(1);
    opacity: 1;
  }
}

@-webkit-keyframes qH-Q0 {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }

  20% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  56%,
  to {
    -webkit-transform: scale(1.18);
    transform: scale(1.18);
    opacity: 1;
  }
}

@keyframes qH-Q0 {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }

  20% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  56%,
  to {
    -webkit-transform: scale(1.18);
    transform: scale(1.18);
    opacity: 1;
  }
}
._1DTtZ {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
}
@-webkit-keyframes _3kgEQ {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _3kgEQ {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _2qto9 {
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
@keyframes _2qto9 {
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
.PLGhW {
  width: 100%;
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  background-color: rgba(0, 0, 0, 0.9);
}
._3lel4 ._1XcqB {
  -ms-flex: 2 1;
  flex: 2 1;
}
._3lel4 ._2dGi_ {
  padding: 0.13em 0.18em 0.3em 0;
}
._3lel4 ._1A80p._1ETlf {
  top: 0.49em;
  left: 0.75em;
}
._3lel4 ._1A80p._2y6Au {
  top: 0.94em;
  left: 0.42em;
}
._3lel4 ._1A80p._1aGS2 {
  top: 0.94em;
  left: 1.08em;
}
._1XcqB {
  -ms-flex: 1 1;
  flex: 1 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
._1Mgk_ {
  -ms-flex: 1 1;
  flex: 1 1;
}
._2dGi_ {
  height: 100%;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 0.05em 0.17em 0.21em 0;
}
._2dGi_ .QKywO {
  color: #002bf7;
}
._2dGi_ .speec {
  color: #ff101a;
}
._2dGi_ ._3UZUu {
  color: #06f039;
}
._3gsKJ {
  font-size: 0.2em;
  text-align: center;
  font-weight: 700;
  margin-top: 0.75em;
}
._3gsKJ.a6v8m {
  color: hsla(0, 0%, 100%, 0.87);
  font-size: 0.3em;
}
._2gzeQ {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
._1A80p._1A80p {
  position: absolute;
  height: 0.56em;
  width: 0.56em;
}
._1A80p._1ETlf {
  top: 0.41em;
  left: 0.65em;
}
._1A80p._2y6Au {
  top: 0.88em;
  left: 0.32em;
}
._1A80p._1aGS2 {
  top: 0.88em;
  left: 0.98em;
}
@-webkit-keyframes _1VpLn {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1VpLn {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3LT4z {
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
@keyframes _3LT4z {
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

._1QPxJ._2O7_F {
    width: 116%;
    margin-left: -8%;
}
</style>
