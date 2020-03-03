<template>
<div class="_2FVVn">
  <div class="mGmDp _2pNum LUNPAN">
    <!-- VIDEO -->
    <div class="_1RAKD">
      <div class="_1QPxJ"
           style="position: absolute;">
        <div class="Video__root _3j8Hg">
          <div class="FlvPlayer__root _3j8Hg flash-inner">
            <!-- <canvas width="294"
                    height="221"></canvas>
            <video x5-video-player-type="h5"
                   playsinline=""
                   webkit-playsinline=""
                   src="">Your browser is too old which does not support HTML5 video.</video> -->
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="GyqT1">
      <div class="_3RQS9"></div>
    </div>

    <div class="_3sx-V">
      <div class="_3_Ehn">
        <div class="_1Y8MV">
          <div class="_2b6eQ">投骰点数</div>
          <div class="_1rPK3">{{desk_pai[gameId]["dianshu"]}}</div>
        </div>
        <div class="nzA04 _28CqV V5UIX" :class='sbpaiclass[desk_pai[gameId]["dices"][0]]'></div>
        <div class="nzA04  _28CqV _1BEgJ" :class='sbpaiclass[desk_pai[gameId]["dices"][1]]'></div>
      </div>
    </div>
    <div class="_2ZPev _2QS10 _3qcEG">
      <div class="_3BmJY"></div>
      <div class="_3BmJY"></div>
    </div>
    <div class="_2ZPev _3qcEG">
      <div class="_12Aje"></div>
      <div class="_12Aje"></div>
    </div>
    <!-- <div role="button"
         tabindex="0"
         class="_2lHa6 _3RAlp">
      <span class="_3yxS1">游戏结果视频</span>
      <div class="_3Mh4Z"></div>
    </div> -->
    <!-- <div class="_2cqzU">
      <div class="_1QPxJ"
           style="position: absolute;">
        <div class="Video__root _3j8Hg">
          <div class="FlvPlayer__root _3j8Hg">
            <canvas width="283"
                    height="242"></canvas>
            <video x5-video-player-type="h5"
                   playsinline=""
                   webkit-playsinline=""
                   src="">Your browser is too old which does not support HTML5 video.</video>
          </div>
        </div>
      </div>
    </div> -->
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
                <span>雀九</span>
              </span>
              <div role="button"
                   tabindex="0"
                   class="_1Htk0"></div>
            </div>
            <div class="_2e_lZ">{{desk.inning?formatCurrency(desk.inning):''}}</div>
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

        <div class="_24Bwp">各门统计</div>
        <div class="_2fHau">
          <div class="hqa41">
            <template v-for='(one,index,key) in leijidata'>
              <div class="_2_lIy"
                   :key='index'>
                <div class="_34U0X">{{key+1}}</div>
                <div class="_1TDGD">
                  <template v-for='(oneitem,itemindex) in one.slice(1)'>
                    <!-- <template v-if='itemindex>=1?true:false'> -->
                    <span :key="itemindex"
                          class="_1j-Q0 "
                          :class='oneitem?"Ev3It":"bCgM4"'>{{oneitem?"赢":"输"}}</span>
                    <!-- </template> -->
                  </template>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="_2Ob7v"></div>
    <!-- canvas -->
    <div class="_3RmZi" @drop="drop($event)" @dragover="dragover">
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
                @click='zuobuclick($event)'
                @mouseout='zuobumouseout($event)'
                @mousemove='zuobumousemove($event)'
                class='zuobu'
                :class='desk_status[gameId]&&desk_status[gameId]["status"]==1? chip:"" '
                ref='zuobu'
                style="touch-action: none; cursor: inherit;"></canvas>
      </div>
    </div>
    <!-- caichi -->
    <div class="_4DarF">
      <div class="_2U3xm">
        <div class="_3Z-WA">
          <div class="Otvf5">
            即时彩池
          </div>
        </div>
        <div class="_1FsWz">
          <div class="Otvf5">
            1
          </div>
          <span class="_UEer">{{moneypool.xian_1}}</span>
        </div>
        <div class="_1FsWz">
          <div class="Otvf5">
            2
          </div>
          <span class="_UEer">{{moneypool.xian_2}}</span>
        </div>
        <div class="_1FsWz">
          <div class="Otvf5">
            3
          </div>
          <span class="_UEer">{{moneypool.xian_3}}</span>
        </div>
        <div class="_1FsWz">
          <div class="Otvf5">
            4
          </div>
          <span class="_UEer">{{moneypool.xian_4}}</span>
        </div>
        <div class="_1FsWz">
          <div class="Otvf5">
            5
          </div>
          <span class="_UEer">{{moneypool.xian_5}}</span>
        </div>
        <div class="_1FsWz">
          <div class="Otvf5">
            6
          </div>
          <span class="_UEer">{{moneypool.xian_6}}</span>
        </div>
      </div>
    </div>
  </div>
  <!-- 发牌 -->
  <div class="_29MfI">
   <div class="_1DTtZ">
    <div class="_3L7bK">
     <div class="_172dF RyKt1">
      <div class="KmRLD  _3HfX-" :class='qjpaiclass[desk_pai[gameId][0][0]]'></div>
      <div class="KmRLD  _3HfX-" :class='qjpaiclass[desk_pai[gameId][0][1]]'></div>
     </div>
     <div class="_172dF s4X5f">
      <div class="KmRLD  _3HfX-" :class='qjpaiclass[desk_pai[gameId][1][0]]'></div>
      <div class="KmRLD  _3HfX-" :class='qjpaiclass[desk_pai[gameId][1][1]]'></div>
     </div>
     <div class="_172dF _3wbRM">
      <div class="KmRLD _3HfX-" :class='qjpaiclass[desk_pai[gameId][2][0]]'></div>
      <div class="KmRLD  _3HfX-" :class='qjpaiclass[desk_pai[gameId][2][1]]'></div>
     </div>
     <div class="_172dF _1DD6p">
      <div class="KmRLD  _3HfX-" :class='qjpaiclass[desk_pai[gameId][3][0]]'></div>
      <div class="KmRLD  _3HfX-" :class='qjpaiclass[desk_pai[gameId][3][1]]'></div>
     </div>
     <div class="_172dF _21Ufh">
      <div class="KmRLD  _3HfX-" :class='qjpaiclass[desk_pai[gameId][4][0]]'></div>
      <div class="KmRLD  _3HfX-" :class='qjpaiclass[desk_pai[gameId][4][1]]'></div>
     </div>
     <div class="_172dF _1cm1f">
      <div class="KmRLD  _3HfX-" :class='qjpaiclass[desk_pai[gameId][5][0]]'></div>
      <div class="KmRLD  _3HfX-" :class='qjpaiclass[desk_pai[gameId][5][1]]'></div>
     </div>
     <div class="_172dF _1OLPA">
      <div class="KmRLD  _3HfX-" :class='qjpaiclass[desk_pai[gameId][6][0]]'></div>
      <div class="KmRLD  _3HfX-" :class='qjpaiclass[desk_pai[gameId][6][1]]'></div>
     </div>
    </div>
   </div>
  </div>

<!-- tishi -->
  <div class="_1e-cn" v-if='bet_status[gameId]&&bet_status[gameId]!="0"?true:false' >
   <div class="_24bGH">
    <div class="MWKSW _2K8nf">
     <div class="_2et_L " :class='bet_status[gameId]?bet_status_text[bet_status[gameId]]["class"]:""'></div>
    </div>
    <div class="_2A_Cv _1ZTAQ">
     <div>
    {{bet_status[gameId]?(bet_status[gameId]=='3'?failtxt[gameId]:bet_status_text[bet_status[gameId]]["text"]):''}}
     </div>
    </div>
   </div>
  </div>
<!-- 输  -->
<div class="_1e-cn"  v-if="bet_result[desk.id]&&bet_result[desk.id]['status']=='1'&&bet_result[desk.id]['lose']?true:false">
  <div class="_3Uo-7 _24bGH _1vNlh"><div class="_1nXit">{{bet_result[desk.id]&&bet_result[desk.id]['lose']?bet_result[desk.id]['lose']:''}}</div></div></div>
  <!--赢 -->
  <div class="_1e-cn" v-if="bet_result[desk.id]&&bet_result[desk.id]['status']=='1'&&bet_result[desk.id]['win']?true:false">
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
</div>
</template>
<script>
/* eslint-disable */
import {name_list,img_list,ba_desk_list,diff_desk_list,codes,formatCurrency,chips} from '@/utils/deals'
import zrender  from 'zrender'
import videojs from 'video.js'
import 'videojs-flash/dist/videojs-flash';
export default {
  name: 'quejiugame',
  data () {
    return {
      changedesk:"",
      formatCurrency:formatCurrency,
      chip:"",
      desk_result:{},
      sbpaiclass: {1:"_2gBJt",2:"DS5Nz",3:"UF0-_", 4:"_2T_hq ",5:"_1TlBd",6:"dIHcl",0:""},
      qjpaiclass:{8:"_3bTLb",5:"_1Xp65",3:"qcK9t",6:"x4Hqq",7:"_3gjPy",9:"_2ih2m",1:"xrYU7",0:"_2eUj_",4:"_5B2B8",2:"_3BtK-",10:""},
      desk_pai:{18:{dianshu:"",dices:[0,0],0:[10,10],1:[10,10],2:[10,10],3:[10,10],4:[10,10],5:[10,10],6:[10,10]}},
      num:0,
      canvas_desk: ba_desk_list.concat(diff_desk_list.bp_desk_list, diff_desk_list.lh_desk_list),
      name:"",
      active: 0,
      timeclass:"",
      chips:chips,
      gameId:'0',
      desk_status:{},
      leftclass:"",
      leftTime:"",
      rightclass:"",
      rightTime:"",
      leijidata:{},
      moneypool:{},
      desk:{},
      circlecol:false,
      showmoneypool:false,
      count:0,
      effect:true,
      music_Array:[],
      myAudio:document.createElement("audio"),
      current_lang:"zh_cn",
      myGameAudio:document.createElement("audio"),
      game_effect:true,
      imgCtx:{},
      bet_status:{},
      imglist1 : {
        xian_1: { image_url: './static/zuobu/xian_1.png', x: 0, y: 200 },
        xian_2: { image_url: './static/zuobu/xian_2.png', x: 0, y: 200 },
        xian_3: { image_url: './static/zuobu/xian_3.png', x: 0, y: 200 },
        xian_4: { image_url: './static/zuobu/xian_4.png', x: 0, y: 200 },
        xian_5: { image_url: './static/zuobu/xian_5.png', x: 0, y: 200 },
        xian_6: { image_url: './static/zuobu/xian_6.png', x: 0, y: 200 },
      },
      images:{},
      _arr:[],
     local_list :{
       xian_1:{group: {}, x: 1570, y: 180,tan: {left: '8.1em', top: '1.1em'}},
       xian_2:{group: {}, x: 1480, y: 340,tan: {left: '7.6em', top: '1.9em'}},
       xian_3:{group: {}, x: 1200, y: 390,tan: {left: '6.23em', top: '2.2em'}},
       xian_4:{group: {}, x: 900, y: 390,tan: {left: '4.7em', top: '2.2em'}},
       xian_5:{group: {}, x: 600, y: 330,tan: {left: '3.2em', top: '1.9em'}},
       xian_6:{group: {}, x: 520, y: 180,tan: {left: '2.8em', top: '1.1em'}},
     },
     o:{},
     coinStack:{},
     failtxt:{},
     bet_result:{},
     zuobuevent:false,
     bottotimer:"",
     bet_status_text:{0:{class:"",text:''},1:{class:"_2eSL8",text:'投注中'},2:{class:"axlsv",text:'成功下注'},3:{class:"_1YINl",text:'投注失败'}},
    }
  },
  methods: {
      playGameEffect:function(url,boo){
        if(!this.game_effect){
            return;
        }
        if(boo){
            this.myGameAudio = null
            this.myGameAudio = new Audio();
            this.myGameAudio.src = url;
            this.myGameAudio.play();
        }else{
            this.myGameAudio.src = url;
            this.myGameAudio.play();
        }
      },
      playEndedHandler:function (){
          this.myAudio.src = this.music_Array.shift(); 
          this.myAudio.play(); 
          console.log(this.music_Array.length); 
          if(this.music_Array.length==0){
              this.myAudio.removeEventListener('ended',this.playEndedHandler,false);
          }else{
            this. myAudio.addEventListener('ended', this.playEndedHandler, false); 
          }
      },
      playEffect: function (url,boo){
          if(!this.effect){
              return;
          }
          if(boo){
              this.myAudio = null
            this.myAudio = new Audio();
              this.myAudio.src = url;
              this.myAudio.play();
          }else{
              this.myAudio = new Audio(); 
              this.myAudio.preload = true; 
              this.myAudio.controls = true; 
              this.myAudio.src =this.music_Array.shift();         //每次读数组第一个元素 
              
            this.myAudio.addEventListener('ended', this.playEndedHandler, false); 
              this.myAudio.play(); 
          }
      },
    showpool:function(){
      this.showmoneypool = !this.showmoneypool
    },
    getImages:function(){
      var self = this
      self.name = img_list[this.gameId][self.curr_timer]['name']
    },
    failtext:function(vo){ 
      var str;
      if(vo.callback=="enter_desk"){
        console.log("进桌子失败",JSON.stringify(vo))
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
      this.$set(this.failtxt,vo.data.desk_id,str)
      return str
    },
    clearzuobuxiazhu:function (){
      var self = this
      $.each(self.local_list,function(key,val){
        Object.keys(self.local_list[key]['group']).length&&self.local_list[key]['group'].removeAll();
        self.zr.refresh();
      });
    },
    clearxiazhu: function () {
      var container = this.element;
      $('.xiazhu').hide();
      if (this.curr_qu) {
        this[this.curr_qu].attr({ style: { opacity: '0' } });
      }
      $(container).css({ 'cursor': 'default' });
      this.curr_qu = ''
    },
    drop :function(event) {
      this.changedesk = event.dataTransfer.getData('desk_id')
      this.global.sendMessage("exit_desk",{desk_id: this.gameId});
      var id = this.changedesk
    },
    dragover (event) {
      event.preventDefault()
    },
    omwsBetFail:function(vo){
      var self = this
      var gameId = self.gameId;
      self.playGameEffect("./static/sound/se/error_alert.mp3",true)
      console.log("下注失败=="+JSON.stringify(vo))
      self.failtext(vo)
      self.clearzuobuxiazhu();
      $.each(self.coinStack,function(key,val){
        self.xiaZhu(key,val,true)
      })
      self.o = {};
      self.clearxiazhu()
      self.$set(self.bet_status,gameId,'3');
      //关闭弹框
      self.closeBetNotice(vo.data.desk_id)
    },
    stopBet:function (vo){
      //console.log('停止下注',vo)
      if((vo.desk_id+'')!==this.gameId){return}
      var self = this;
      var id = vo.desk_id
      var current_lang = self.current_lang
      self.playEffect("./static/sound/"+current_lang+"/betting_stopped.mp3",true)
      if(!self.desk_status[id ]){
        self.$set(self.desk_status,id ,{})
      }
      self.$set(self.desk_status[id],'status' ,'2')
      self.$set(self.desk_status[id],'text_timer' ,0)
      self.$set(self.desk_status[id],'text' ,'停止投注')
  
      self.clearzuobuxiazhu()
      self.o = {};
      $.each(self.coinStack,function(key,val){
        self.xiaZhu(key,val,true)
      })
      self.clearxiazhu()
      self.removeEvents();
    },
    removeEvents:function(){
    this.zuobuevent=false;
     console.log('停止下注')
    },
    zuobuevents:function(){
    this.zuobuevent=true;
    },

    bottomDateTime: function() {
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
     
      if(self.desk_status[id]['status']=='1'){

        var timer = parseInt(self.desk_status[id]['bet_interval'])-1
        this.leftclass ='_1LrD-'
        this.rightclass ='_20BrN'
        self.leftTime  = "animation-delay: "+(timer-self.desk_status[id].inning_interval)+"s; animation-duration: "+self.desk_status[id].inning_interval*2+"s"
        self.rightTime = "animation-delay: "+(timer-self.desk_status[id].inning_interval)+"s; animation-duration: "+self.desk_status[id].inning_interval*2+"s"

        if(timer <=10 ){
          self.timeclass = ' _3kkQD _3Isfd'
          //self.circlecol=true
        }else{
          self.timeclass = ''
          self.circlecol=false
        }
        if(timer<=0){
        this.leftclass =''
        this.rightclass =''
          self.$set(self.desk_status[id],'status' ,'2')
          self.$set(self.desk_status[id],'text' ,'停止投注')
          self.$set(self.desk_status[id],'text_timer' ,0)
        }else{
          self.$set(self.desk_status[id],'bet_interval', timer<10?"0"+timer:timer)
        }
        //console.log(this.animateTimer)     
      }else if(self.desk_status[id]['status']=='2'){
     
        if( self.desk_status[id]['text_timer']<3){
          self.$set(self.desk_status[id],'text_timer' ,self.desk_status[id]['text_timer']+1)
        }else{
          self.$set(self.desk_status[id],'text_timer' ,0)
          self.$set(self.desk_status[id],'text' ,'结算中')
        } 
        self.timeclass = ' _3kkQD'
        self.circlecol=true
        self.leftclass =''
        self.rightclass =''
      }else{
        self.$set(self.desk_status[id],'text' ,'洗牌中')

        self.timeclass = ' _3kkQD'
        self.circlecol=true
        self.leftclass =''
        self.rightclass =''
      }
      if(timer<=5){
          self.playGameEffect("./static/sound/se/timer_alert.mp3",true)
        }
     
      //self.$set(self.desk_status[id],'bet_interval' ,(vo.bet_interval)<10?"0"+(vo.bet_interval):(vo.bet_interval))
      // console.log(curr_time,hours)
      hours < 10 ? hours = "0" + hours : hours = hours;
      minutes < 10 ? minutes = "0" + minutes : minutes = minutes;
    },
    closeBetNotice:function(index){
      var self = this
      setTimeout(function(){ self.$set(self.bet_status,index,'0') }, 1000);
      //关闭弹框
    },
    getServerBetInfos:function (obj){
      //下注成功的历史
      var obj_l = this.coinStack;
      for(var k in obj)
      {
        if(!obj_l[k]){
          obj_l[k] = 0;
        }
        obj_l[k] += obj[k];
      }
      this.coinStack = obj_l;
      this.$set(this.$store.state.coinStacks,18,this.coinStack);

      this.$set(this.$store.state.coinStacks, "inning_18", this.desk.inning);

      this.$store.commit("COINSTACKS",this.$store.state.coinStacks)
      console.log("下注成功历史=="+JSON.stringify(this.coinStack),JSON.stringify(this.$store.state.coinStacks));
    },
    updateUser:function(credit){
      var self = this
      //更改用户信息
      self.$set(self.$store.state.user,'money',formatCurrency(credit))
    },
    onQueJiuBetSuccess:function (vo){
      if((vo.desk_id+'')!==this.gameId){return}
      
      var self = this
      self.playGameEffect("./static/sound/se/bet_success.mp3",true)
      self.o ={}
      self.getServerBetInfos(vo.bets)
      self.$set(self.bet_status,vo.desk_id,'2')//下注成功
      console.log("下注成功=="+JSON.stringify(vo));
      //关闭弹框
      self.closeBetNotice(vo.desk_id)
      self.updateUser(vo.credit)
    },
     cancelXiazhu:function(event){
      var gameId = this.gameId
      var self = this
      self.playGameEffect("./static/sound/se/click_btn.mp3",true)
            //取消下注 
      $.each(self.local_list, function (key, val) {
        Object.keys(self.local_list[key]['group']).length&&self.local_list[key]['group'].removeAll();
        self.zr.refresh();
      });
      self.o = {};
      console.log("取消下注coinStack==================",self.coinStack)
      $.each(self.coinStack, function (key, val) {
        self.xiaZhu(key, val, true)
      })
      self.curr_qu = '';
      this.hide();
      event.cancelBubble = true
    },
    hide:function(index){
      $('.xiazhu').hide()
    },
    sandXiazhu:function(event){
      var self = this;
      var index = this.gameId;
      //发送下注
      let bet = self.o
      self.playGameEffect("./static/sound/se/click_btn.mp3",true)
      if(index==18){
          self.global.sendMessage("quejiu_bet",{desk_id:index,bets:bet});
        }else{
          
      }
      self.$set(self.bet_status,index,'1');
      self.hide()
      console.log('下注发送',bet)
      event.cancelBubble = true
    },
    clearAll:function(vo){
      var self = this
      //清理牌
      if(self.desk_pai[vo.desk_id]){
        self.$set(self.desk_pai,vo.desk_id,{dianshu:"",dices:[0,0],0:[10,10],1:[10,10],2:[10,10],3:[10,10],4:[10,10],5:[10,10],6:[10,10]})
      }
      //清理下注成功的结果
      if(self.desk_pai[vo.desk_id]){
        self.$set(self.desk_result,vo.desk_id,{})
      }
      self.clearzuobuxiazhu()
      self.clearxiazhu()
      self.coinStack = {};
      //通知结果
      self.$set(self.bet_result,vo.desk_id,{})
    },
    setStatus:function(vo){
      var self = this
      var id = vo.id
      if(!self.desk_status[id ]){
        self.$set(self.desk_status,id ,{})
      }
      self.$set(self.desk_status[id],'inning_interval' ,vo.inning_interval)
      if(vo.status=="1"){
    
        this.leftclass ='_1LrD- '
        this.rightclass ='_20BrN'
        self.leftTime  = "animation-delay: "+(vo.bet_interval-vo.inning_interval)+"s; animation-duration: "+vo.inning_interval*2+"s"
        self.rightTime = "animation-delay: "+(vo.bet_interval-vo.inning_interval)+"s; animation-duration: "+vo.inning_interval*2+"s"
        
        self.$set(self.desk_status[id],'status' ,'1')
        self.$set(self.desk_status[id],'text' ,'接受投注')
        self.$set(self.desk_status[id],'bet_interval' ,(vo.bet_interval)<10?"0"+(vo.bet_interval):(vo.bet_interval))
        self.zuobuevents();

      }else if(vo.status=="3"){
        self.$set(self.desk_status[id],'status' ,'3')
        self.$set(self.desk_status[id],'text' ,'洗牌中')
        self.removeEvents();

        self.leftclass =''
        self.rightclass =''
      }else{
        self.$set(self.desk_status[id],'status' ,'2')
        self.$set(self.desk_status[id],'text' ,'结算中')
        self.removeEvents();

        self.leftclass =''
        self.rightclass =''
      }
    },
    startBet:function (vo){
      if((vo.desk_id+'')!==this.gameId){return}
      console.log('开始下注',vo)
      //倒计时 隐藏
      var self = this;
      var id = vo.desk_id
      if(!self.desk_status[id ]){
        self.$set(self.desk_status,id ,{})
      }
      var current_lang = "zh_cn"
      self.playEffect("./static/sound/"+current_lang+"/betting_started.mp3",true)

      self.$set(self.desk_status[id],'status' ,'1')
      self.$set(self.desk_status[id],'text' ,'')
      self.$set(self.desk_status[id],'bet_interval' ,(vo.bet_interval)<10?"0"+(vo.bet_interval):(vo.bet_interval))

      self.leftTime  = "animation-delay: -2s; animation-duration: "+vo.inning_interval+"s"
      self.rightTime = "animation-delay:-2s; animation-duration: "+vo.inning_interval+"s"
      self.leftclass =''
      self.rightclass =''
      self.clearAll(vo)
      self.zuobuevents();
      self.$set(self.desk,'boot' ,vo.boot)
      self.$set(self.desk,'inning' ,vo.inning)
    },
    exitDesk:function(vo){
      //console.log("退出自选桌子",vo)
      //this.global.sendMessage("enter_desk",{bet_addition_id:this.$store.state.userLimitID,desk_id:this.gameId})
    },
    onDeskInfoGame: function (vo) {
      var self = this
      console.log("进桌信息",vo,self.$store.state.coinStacks[18])
      self.desk = vo;
      self.$set(self.desk_status, vo.desk_id, {})
      self.setStatus(vo)
 
      self.$store.dispatch('SetExchangeDesk',{changedeskid:self.gameId})
      self.$store.dispatch('SetZiXuanDesk', [self.gameId])

      if(self.desk.inning != self.$store.state.coinStacks["inning_18"]){
        this.$set(this.$store.state.coinStacks, 18, {});
        this.$store.commit("COINSTACKS", this.$store.state.coinStacks)
      }

      if(Object.keys(self.$store.state.coinStacks[18]).length>0){
        this.coinStack = self.$store.state.coinStacks[18];
     
        $.each(self.$store.state.coinStacks[18],function(key,val){ 
          self.xiaZhu(key,val,true)
        })
      }
      
      videojs.options.flash.swf = "./static/video-js.swf"
      setTimeout(function(){
        self.rePlay();
        self.$store.commit('GAMEREADY',true)
      },30)
    },
    onEnterDesk: function (vo) {
     //退桌子 如果是从右边进桌子
      var id = this.changedesk?this.changedesk:this.$store.state.zixuan_gameid
      console.log("单个进桌子的id -----",id)
      if(id=="20"){
        this.$store.dispatch('SetuPage', "LUNPANGAME")
      }else if(id=='16'){
        this.$store.dispatch('SetuPage', "SHAIBAOGAME")
      } else if(this.canvas_desk.indexOf(id)!==-1){
        this.$store.dispatch('SetuPage', "GAME")
      }else if(id=="19"){
        this.$store.dispatch('SetuPage', "SANGONG")
      }else if(id=="21"){
        this.$store.dispatch('SetuPage', "DOUNIU")
      }else{return}

      this.$store.commit('ZIXUANTOGAME','')
      this.$router.push({ name: 'sunbet', params: { id: id }})
      this.$store.commit('GAMEREADY',false)
      this.changedesk =''
      this.$store.state.zixuan_gameid=''
      if(this.$store.state.playerGame && !this.$store.state.playerGame.disposed){
        this.$store.state.playerGame.dispose()
        this.$set(this.$store.state.playerGame,'disposed',true)
      }
    },
    
    onClearBet:function (vo){
     if((vo.desk_id+'')!==this.gameId){return}
      var self = this;
      var id = vo.desk_id
      if(!self.desk_status[id]){
        self.$set(self.desk_status,id ,{})
      }
      self.$set(self.desk_status[id],'status' ,'3')
      self.$set(self.desk_status[id],'text' ,'洗牌中')
      console.log("清理下注 洗牌===="+JSON.stringify(vo))
      //露珠洗掉
      this.clearAll(vo)
    },
    onQueJiuResultHistory: function (vo) {
      var self = this
      self.leijidata = vo.history
      //console.log("累计==" + JSON.stringify(vo))
    },
    onQueJiuMoneyPool: function (vo) {
        //console.log('即时彩池==' + JSON.stringify(vo))
        this.moneypool = vo
    },
    EnterDesk: function (vo) {
      console.log("请求进桌信息------------------")
      this.global.sendMessage("desk_info",{desk_id:this.gameId});
    },
    xiaZhu:function(curr_qu, _num, flag){
      //下注 
      var self = this;
      if(!self.chouma){
        return
      }
      var curr_qu
      if (!curr_qu) { curr_qu = self.curr_qu }
      if (!curr_qu) { return; }
      var _group;
      var num;
      var num_list=[];
      var cur_y = 0;
      var x = 0
      self._arr = [];

      var curr_loc = self.local_list[curr_qu]

      if (Object.keys(self.local_list[curr_qu]['group']).length == 0 ) {
        self.local_list[curr_qu]['group'] = self.creatGroup();

        self.local_list[curr_qu]['group'].position = [curr_loc.x, curr_loc.y +200];
        self.zr.add(self.local_list[curr_qu]['group'])
      }
      _group = self.local_list[curr_qu]['group'];

      if (_group.childCount() > 0) {
        num = _num ? _num : parseInt(_group.childOfName('one').style.moneytxt) + self.chouma;
        // _group.childOfName('one').attr({ style: { text: num, moneytxt: num } })
        _group.removeAll()
        num_list = self.addToArray(num)
      }else {
        if (_num) {
          num_list = self.addToArray(_num)
          num = _num
        } else {
          num_list[0] = self.chouma;
          num = self.chouma
        }
      };

      $.each(num_list, function (key, val) {

        if (key % 2) {
          x = 0
        } else {
          x = -5
        }
        _group.add(self.listmoney(x, cur_y -= 8, val));
      })
       _group.add(self.listmoneytxt(-40, 50, num));

      if (self.coinStack[curr_qu]) {
        self.o[curr_qu] = num - self.coinStack[curr_qu];
      } else {
        self.o[curr_qu] = num
      }
       
      if (flag) {
        $('.xiazhu').hide()
      } else {
        $('.xiazhu').css({ 'display': 'flex', 'left': curr_loc.tan.left, 'top': curr_loc.tan.top })
      }
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
      
      self.initzuobucanvas(self.imglist1)
      self.drawBG();
      self.zr.refresh();
    },
    creatGroup: function () {
      var moneyGroup = new zrender.Group();
      moneyGroup.position = [0, 200];
      return moneyGroup;
    },
    listmoney: function (x, y, imgurl) {
      var m_url = './static/chip/chip_' + imgurl + '.png';
      if (imgurl == 'normal') {
        var width = 64
        var height = 48
      } else {
        var width = 96
        var height = 72
      }
      var onemoney = new zrender.Image({
        style: {
          image: m_url,
          width: width,
          height: height
        },
        silent: true,
        position: [x, y]
      });

      return onemoney;
    },
    listmoneytxt: function (x, y, text) {
    var rects = new zrender.Image({
      position: [x - 1, y - 18],
      name: 'one',
      style: {
        image: './static/zuobu/mnytxt.png',
        lineWidth: 5,
        moneytxt: text,
        text: formatCurrency(text),
        width: 168,
        height: 44,
        opacity: 1,
        textLineWidth: 1,
        textFill: '#fff',
        fontSize: 30,
        textAlign: 'center',
        textPosition: 'bottom',
        textDistance: -32,
        fontWeight: 500,
      }
    });

    return rects;
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
    drawzuobu: function (url) {
      this.zuobu = new zrender.Image({
        name: "zuobu",
        style: {
          image: url,
        },
        position: [0, 0],
        cursor: 'default',
        silent: true
        //
      });
      this.zrBGGroup.add(this.zuobu);
    },
    drawBG: function () {
    var zrBGGroup = this.zrBGGroup;
    var _this = this;

    this.zuobu2 = new zrender.Image({
      name: "zuobu2",
      style: {
        image: "./static/zuobu/quejiu_desk.png",
      },
      cursor: 'default',
      silent: true
    });
    this.xian_1 = new zrender.Image({
      style: {
        image: './static/zuobu/sg_1.png',
        opacity: 0
      },
      position: [0, 0],
      cursor: 'default'
    });
    this.xian_2 = new zrender.Image({
      style: {
        image: './static/zuobu/sg_2.png',
        opacity: 0
      },
      position: [0, 0],
      cursor: 'default'
    });
    this.xian_3 = new zrender.Image({
      style: {
        image: './static/zuobu/sg_3.png',
        opacity: 0
      },
      position: [0, 0],
      cursor: 'default'
    });
    this.xian_4 = new zrender.Image({
      style: {
        image: './static/zuobu/sg_4.png',
        opacity: 0
      },
      position: [0, 0],
      cursor: 'default'
    });
    this.xian_5 = new zrender.Image({
      style: {
        image: './static/zuobu/sg_5.png',
        opacity: 0
      },
      position: [0, 0],
      cursor: 'default'
    });
    this.xian_6 = new zrender.Image({
      style: {
        image: './static/zuobu/sg_6.png',
        opacity: 0
      },
      position: [0, 0],
      cursor: 'default'
    });
    this.zrBGGroup.add(this.xian_1);
    this.zrBGGroup.add(this.xian_2);
    this.zrBGGroup.add(this.xian_3);
    this.zrBGGroup.add(this.xian_4);
    this.zrBGGroup.add(this.xian_5);
    this.zrBGGroup.add(this.xian_6);
    this.zrBGGroup.add(this.zuobu2);
    this.drawzuobu('./static/zuobu/quejiu_name.png');
    },
    zuobuclick:function(evt){
      if(!this.zuobuevent){return}
      var _this = this
      _this.playGameEffect("./static/sound/se/click_coin_btn.mp3", true)
      var curr_qu = this.istupian(evt.offsetX, evt.offsetY);
      if (!curr_qu) { return };
        _this.curr_qu = curr_qu;
      _this[curr_qu].attr({ style: { opacity: '.3' } });
     
      console.log("click---------------------")
      _this.xiaZhu(curr_qu);
    },
    zuobumouseout:function(evt){
      if(!this.zuobuevent){return}
      //console.log(evt)
      var _this = this;
      $.each(_this.imgCtx, function (name, value) {
        _this[name].attr({ style: { opacity: '0' } });
      })
      if (_this.curr_qu) {
        _this[_this.curr_qu].attr({ style: { opacity: '.3' } });
      }
      $(this.element).css({ 'cursor': 'default' });
    },
    zuobumousemove:function(evt){
      if(!this.zuobuevent){return}
       this.movequ = this.istupian(evt.offsetX, evt.offsetY)
    },
    initzuobucanvas:function  (imglist) {
      var self = this
      $.each(imglist, function (name, value) {
        self.creatCanvas(value.image_url, value.x, value.y, name)
      })
    },
   istupian:function (x, y) {
     //console.log(x, y,"------------")
    var self = this
    x = (2176 / $('.zuobu').width()) * x;
    y = (1002 / $('.zuobu').height()) * y
    //console.log(x, y,"------------")
    var flag = false;
    var curr_img = '';
    $.each(self.imgCtx, function (name, value) {
      // console.log(value.getImageData(x,y,1,1).data,"------------")
      if (value.getImageData(x, y, 1, 1).data[3] == 255) {
        self[name].attr({ style: { opacity: '.5' } });
        flag = true;
        curr_img = name;
      } else {
        self[name].attr({ style: { opacity: '0' } })

      }
    })


    if (self.curr_qu) {
      self[self.curr_qu].attr({ style: { opacity: '.3' } });
    }
    // console.log("flag-------",flag);
    if (flag) {
      //self.zuobu.attr('cursor','pointer')
      // if($(container).css('cursor') == 'pointer'){return}
      $(self.element).css({ 'cursor': 'pointer' });
    } else {
      //self.zuobu.attr('cursor','default')
      // if($(container).css('cursor') == 'default'){return}
      $(self.element).css({ 'cursor': 'default' });
    }
    return curr_img;
  },
    addToArray: function (num) {
      var _arr = this._arr
    num += '';
    var first_num = num.substr(0, 1);
    var remainder;//余数
    var divisor;//除数
    var i = 0;
    if (first_num >= 5) {
      divisor = "5";
    } else if (first_num >= 2) {
      divisor = "2";
    } else {
      divisor = "1";
    }
    while (i < num.length - 1) {
      divisor += "0"
      i++;
    }
    remainder = num % divisor;
    if (Math.floor(num / divisor) > 1) {
      i = 0;
      while (i < (num / divisor) - 1) {
        _arr.push(divisor);
        i++;
      }
      if (remainder == 0) {
        _arr.push(divisor);
      }
    } else {
      _arr.push(divisor);
    }

    if (remainder > 0) {
      this.addToArray(remainder + "");
    }
    return _arr;
  },
  creatCanvas:function  (image_url, x, y, name) {
    var self = this;
    var can = document.createElement('canvas')//document.createElement('canvas'),
    var ctx = can.getContext('2d');
    can.width = 2176;
    can.height = 1002;
    // can.style.width=$('.zuobu').width();
    // can.style.height=$('.zuobu').height();
    can.name = name;
    // var img = new Image();
    // //img.crossOrigin = 'Anonymous'; //解决跨域
    // img.src = image_url;
    //img.onload = function () {
      ctx.drawImage(self.images[name], x, y);
      self.imgCtx[name] = ctx;
      console.log(name)
    //}
  },
    canvaszuobu:function(second){
 
      this.init();
    },
    onQJResult:function(vo){
      if((vo.desk_id+'')!==this.gameId){return}
      console.log("结果=="+JSON.stringify(vo));

      var self = this
      var id = vo.desk_id
      if(!self.desk_result[id]){
          self.$set(self.desk_result,id,{})
      }
      this.updateUser(vo.member.credit)
      var current_lang = "zh_cn"
 
      if(id==18){
        //结果数

        if(vo.result.xian_1==1){
          self.$set(self.desk_result[id],'xian_1',"1")
          self.showResult("xian_1");
        }
        if(vo.result.xian_2==1){
          self.$set(self.desk_result[id],'xian_2',"1")
          self.showResult("xian_2");
        } 
        if(vo.result.xian_3==1){
          self.$set(self.desk_result[id],'xian_3',"1")
          self.showResult("xian_3");
        } 
        if(vo.result.xian_4==1){
          self.$set(self.desk_result[id],'xian_4',"1")
          self.showResult("xian_4");
        } 
        if(vo.result.xian_5==1){
          self.$set(self.desk_result[id],'xian_5',"1")
          self.showResult("xian_5");
        }               
        if(vo.result.xian_6==1){
          self.$set(self.desk_result[id],'xian_6',"1")
          self.showResult("xian_6");
        }        
      }
      self.$set(self.bet_result,id,{})
      if (vo.member.status!=0) {
          self.$set(self.bet_result[id],"status",'1')//有结果
        if(vo.member.win_lose_credit<0){
          //输
          self.$set(self.bet_result[id],"lose",vo.member.win_lose_credit)
          setTimeout(function(){
            self.playGameEffect("./static/sound/se/loss_ani.mp3",true);
					},3000);
        }else{
          //赢
          self.$set(self.bet_result[id],"win",vo.member.win_lose_credit)
          setTimeout(function(){
            self.playGameEffect("./static/sound/se/win_game.mp3",true);
					},3000)
        }
      }else{
        self.music_Array.unshift("./static/sound/"+current_lang+"/no_betting_in_this_game.mp3");
        self.$set(self.bet_result[id],"status",'0')
      }
      console.log(self.music_Array,"---music_Array")
			self.playEffect("",false);
      console.log("结果=="+JSON.stringify(vo));
      this.$set(this.$store.state.coinStacks, 18, {});
      this.$store.commit("COINSTACKS", this.$store.state.coinStacks)
    },
    onQJDices:function(vo){
      console.log("筛子=="+JSON.stringify(vo));

      this.$set(this.desk_pai[vo.desk_id],"dices",vo.dices)
      this.$set(this.desk_pai[vo.desk_id],"dianshu",Number(vo.dices[0])+Number(vo.dices[1]))
    },
    onQJCard:function(vo){
      if((vo.desk_id+'')!==this.gameId){return}
      var id = vo.desk_id;
      var self = this
      self.$set(self.desk_pai[id],vo.men,vo.mahjong)
      console.log("发牌=="+JSON.stringify(self.desk_pai));
    },
    rePlay:function(){
      var videoPlayer=$("#my-player")[0];
      if(typeof(videoPlayer)!="undefined"){
          this.myPlayer = videojs('my-player');
          this.myPlayer.dispose();
          this.hidezhezhao()
      }
      this.videoPlay();
    },
    videoPlay:function(){
      var self = this
      var url = self.desk['video_url_1']
      console.log(url)
      $(".flash-inner").html('<video id="my-player" class="video-js vjs-v6" preload="auto" autoplay="true" lang="zh-cn" role="region" aria-label="Video Player"><source src="'+url+'" type="rtmp/flv"/></video>')
      this.myPlayer = videojs('my-player');
         $(".video-js").css({
            "width":"100%",
            "height":"100%"
        });
        this.$store.commit('PLAYERGAME', this.myPlayer)
        videojs("my-player",{},function onPlayerReady() {
          console.log('Your player is ready!');
          this.play();
          this.on('canplay', function() {
              console.log('canplay!');
          // self.videoTimePositionGame()
          // self.showzhezhao()
          });
          this.on('waiting', function() {
              console.log('waiting!');
              clearTimeout(delay_showTime);
          });
          this.on('ended', function() {
              console.log('Awww...over so soon?!');
          });
      });
    },
  },

  created () {
    var self = this
    self.gameId = self.$route.params.id
    self.onQueJiuMoneyPool(self.$store.state.onQueJiuMoneyPool);
    self.onQueJiuResultHistory(self.$store.state.onQueJiuResultHistory);
    self.EnterDesk()
    self.bottotimer = setInterval(self.bottomDateTime,1000);
    if(this.$store.state.playerGame && !this.$store.state.playerGame.disposed){
      this.$store.state.playerGame.dispose()
      this.$set(this.$store.state.playerGame,'disposed',true)
    }

    var index = this.$store.state.selected_chip_index
    if(index){
        var index = this.$store.state.selected_chip_index
        this.chip_num = chips[index]
        this.chip = 'chip-one-'+index
        this.chouma = self.chip_num
    }

    self.images = new Array();
            function preLoadImg(arr) {    
                var  loadedimages=0
                //var arr=(typeof arr!="object")? [arr] : arr
                function imageloadpost(){
                    loadedimages++
                    self.count++
                    //console.log(self.count)
                    if (loadedimages==8){
                       console.log(loadedimages,"图片已经加载完成")
                    }
                }
                for (var i in arr){
                   self.images[i]=new Image()
                   self.images[i].src=arr[i]
                   self.images[i].onload=function(){
                        imageloadpost()
                    }
                   self.images[i].onerror=function(){
                    imageloadpost()
                    }
                }
            }    
            preLoadImg(    
                { 
                  1:"./static/zuobu/quejiu_name.png",  
                  2:"./static/zuobu/quejiu_desk.png", 
                  xian_1:"./static/zuobu/sg_1.png",  
                  xian_2:"./static/zuobu/sg_2.png",  
                  xian_3:"./static/zuobu/sg_3.png",  
                  xian_4:"./static/zuobu/sg_4.png",  
                  xian_5:"./static/zuobu/sg_5.png",  
                  xian_6:"./static/zuobu/sg_6.png", 
                  18:"./static/chip/chip_1.png",
                  19:"./static/chip/chip_2.png",
                  20:"./static/chip/chip_5.png",
                  21:"./static/chip/chip_10.png",
                  22:"./static/chip/chip_20.png",
                  23:"./static/chip/chip_50.png",
                  24:"./static/chip/chip_100.png",
                  25:"./static/chip/chip_200.png",
                  26:"./static/chip/chip_500.png",
                  27:"./static/chip/chip_1000.png",
                  28:"./static/chip/chip_2000.png",
                  29:"./static/chip/chip_5000.png",
                  30:"./static/chip/chip_10000.png",
                  31:"./static/chip/chip_20000.png",
                  32:"./static/chip/chip_50000.png",
                  33:"./static/chip/chip_100000.png",
                  34:"./static/chip/chip_200000.png",
                  35:"./static/chip/chip_500000.png",
                  36:"./static/chip/chip_1000000.png",
                  37:"./static/chip/chip_2000000.png",  
                }
            )  

  },
  watch:{
    count:function(val){
       //console.log('图片加载',val)
      if(this.count ==28){
        this.canvaszuobu()
      }
    },
  '$store.state.oneExitDesk':function(){
      if(this.$store.state.togamehall){return}
      var id = this.changedesk?this.changedesk:this.$store.state.zixuan_gameid
      this.global.sendMessage("enter_desk",{bet_addition_id:this.$store.state.userLimitID,desk_id:id})
  },

  '$store.state.onQJCard':function(){var self = this;self.onQJCard(self.$store.state.onQJCard)},
  '$store.state.onQJDices':function(){var self = this;self.onQJDices(self.$store.state.onQJDices)},
  '$store.state.onQJResult':function(){var self = this;self.onQJResult(self.$store.state.onQJResult)},
  '$store.state.omwsBetFail':function(){var self = this;self.omwsBetFail(self.$store.state.omwsBetFail)},
  '$store.state.clear_bet':function(){var self = this;self.onClearBet(self.$store.state.clear_bet)},
  '$store.state.onQueJiuBetSuccess':function(){var self = this;self.onQueJiuBetSuccess(self.$store.state.onQueJiuBetSuccess)},
  '$store.state.onQueJiuResultHistory': function () { var self = this; self.onQueJiuResultHistory(self.$store.state.onQueJiuResultHistory) },
  '$store.state.onQueJiuMoneyPool': function () { var self = this; self.onQueJiuMoneyPool(self.$store.state.onQueJiuMoneyPool) },
  '$store.state.onDeskInfoGame':function(){var self = this;self.onDeskInfoGame(self.$store.state.onDeskInfoGame)},
  '$store.state.onEnterDesk':function(){var self = this;self.onEnterDesk(self.$store.state.onEnterDesk)},
  '$store.state.exitDesk':function(){var self = this;self.exitDesk(self.$store.state.exitDesk)},
  '$store.state.stopBet':function(){var self = this;self.stopBet(self.$store.state.stopBet)},
  '$store.state.startBet':function(){var self = this;self.startBet(self.$store.state.startBet)},
  '$store.state.game_effect':function(){
      this.game_effect= this.$store.state.game_effect
  },
    '$store.state.effect':function(){
      this.effect= this.$store.state.effect
    },
    '$store.state.page': function () {
        if(this.$store.state.page==='QUEJIU' && this.$store.state.player && this.$store.state.player.disposed){
          this.rePlay()
        }
        console.log('QUEJIU===============',this.$store.state.page)
    },
  '$store.state.click_num':function(){
      var self = this
      var index = this.$store.state.selected_chip_index
      this.chip_num = chips[index]
      self.chouma = this.chip_num
      console.log('下注',self.chouma)
      this.chip = 'chip-one-'+index
      //底部筹码点击点击一次
      //if(self.curr_index!=-1){
      this.xiaZhu()
        //self.xiaZhu(self.isShow[self.curr_index],self.curr_index)
      //}
    },
  }
}
</script>

<style scoped>
@import '../../assets/style/pai.css';

.chip-one-0 {
   cursor:url(../../assets/chip_cursor/0.png) 24 24,auto !important;
}

.chip-one-1 {
   cursor:url(../../assets/chip_cursor/1.png) 24 24,auto!important;
}
.chip-one-2 {
   cursor:url(../../assets/chip_cursor/2.png) 24 24,auto !important;
}
.chip-one-3 {
   cursor:url(../../assets/chip_cursor/3.png) 24 24,auto !important;
}
.chip-one-4 {
   cursor:url(../../assets/chip_cursor/4.png) 24 24,auto !important;
}
.chip-one-5 {
   cursor:url(../../assets/chip_cursor/5.png) 24 24,auto !important;
}
.chip-one-6 {
   cursor:url(../../assets/chip_cursor/6.png) 24 24,auto !important;
}
.chip-one-7 {
   cursor:url(../../assets/chip_cursor/7.png) 24 24,auto !important;
}
.chip-one-8 {
   cursor:url(../../assets/chip_cursor/8.png) 24 24,auto !important;
}
.chip-one-9 {
   cursor:url(../../assets/chip_cursor/9.png) 24 24,auto !important;
}
.chip-one-10 {
  cursor:url(../../assets/chip_cursor/10.png) 24 24,auto !important;
}
.chip-one-11 {
  cursor:url(../../assets/chip_cursor/11.png) 24 24,auto !important;
}
.chip-one-12 {
  cursor:url(../../assets/chip_cursor/12.png) 24 24,auto !important;
}
.chip-one-13 {
  cursor:url(../../assets/chip_cursor/13.png) 24 24,auto !important;
}
.chip-one-14 {
  cursor:url(../../assets/chip_cursor/14.png) 24 24,auto !important;
}
.chip-one-15 {
  cursor:url(../../assets/chip_cursor/15.png) 24 24,auto !important;
}
.chip-one-16 {
  cursor:url(../../assets/chip_cursor/16.png) 24 24,auto !important;
}
.chip-one-17 {
  cursor:url(../../assets/chip_cursor/17.png) 24 24,auto !important;
}
.chip-one-18 {
  cursor:url(../../assets/chip_cursor/18.png) 24 24,auto !important;
}
.chip-one-19 {
  cursor:url(../../assets/chip_cursor/19.png) 24 24,auto !important;
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
  content: '';
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
  content: '';
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
  height: 3.14em;
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
  background-image: url(../../assets/5f55c5b2.png);
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
/* @-webkit-keyframes _28SUQ {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _28SUQ {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _2pe-V {
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
@keyframes _2pe-V {
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
._1sIML {
  display: -ms-flexbox;
  display: flex;
  -ms-flex: 1 1;
  flex: 1 1;
}
._2_Xhe {
  width: 2.56em;
  height: 1.99em;
}
._2_Xhe ._1X4FF {
  height: 0.33em;
  padding: 0;
  border-bottom: 0.01em solid #272624;
}
._2_Xhe .VUR1x {
  padding: 0;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
._2_Xhe ._3beB4 {
  padding: 0.01em 0.03em 0 0.16em;
}
._2_Xhe ._1QuYM {
  width: 3.92857em;
  font-weight: 600;
}
:lang(id-id) ._2_Xhe ._1QuYM,
:lang(ja-jp) ._2_Xhe ._1QuYM,
:lang(th-th) ._2_Xhe ._1QuYM,
:lang(vi-vn) ._2_Xhe ._1QuYM {
  width: 4.58333em;
}
._2_Xhe ._1QuYM._2AqRR {
  color: #ff0707;
}
._2_Xhe ._1QuYM._16z98 {
  color: #002bf7;
}
._2_Xhe ._1QuYM._1JZse {
  color: #06f039;
}
._2_Xhe ._1QuYM._2egnR {
  color: #f7f0e8;
}
._1a0vK {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: #040403;
}
._1X4FF {
  position: relative;
  height: 0.31em;
  width: 100%;
  border-bottom: 0.01em solid #272624;
}
._1X4FF:hover ._8ZLuo {
  display: -ms-flexbox;
  display: flex;
}
._8ZLuo {
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
._8ZLuo ._1QuYM {
  color: #fff;
}
.VUR1x {
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 0.08em;
}
._3beB4,
.VUR1x {
  display: -ms-flexbox;
  display: flex;
}
._3beB4 {
  -ms-flex-direction: row;
  flex-direction: row;
}
._2CT-l._2CT-l {
  height: 0.2em;
  width: 0.2em;
  margin-right: 0.04em;
}
._1QuYM {
  width: 100%;
  font-size: 0.14em;
  color: hsla(0, 0%, 100%, 0.87);
  text-align: center;
}
:lang(id-id) ._1QuYM,
:lang(ja-jp) ._1QuYM,
:lang(th-th) ._1QuYM,
:lang(vi-vn) ._1QuYM {
  font-size: 0.12em;
  line-height: 1em;
}
._20yaV {
  right: -0.01em;
  border-radius: 4px;
  background-color: rgba(125, 114, 84, 0.8);
}
._20yaV:hover {
  background-color: hsla(44, 31%, 61%, 0.8);
} */
/* @-webkit-keyframes _1rbw_ {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1rbw_ {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _1Ktro {
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
@keyframes _1Ktro {
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
._3v8l4 {
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
.Jes5P {
  line-height: 1;
  width: 6.42857em;
  margin-left: 0.57143em;
  color: #fdeed4;
}
._2AP5c,
.Jes5P {
  font-size: 0.14em;
}
._2AP5c {
  margin-right: 0.64286em;
  color: #fff;
}
._2dW9K {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  width: 1.24em;
  padding: 0.01em 0.05em 0.03em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._2dW9K .Jes5P {
  margin-left: 0.28571em;
  color: hsla(0, 0%, 100%, 0.6);
}
._2oR-q {
  width: 1.56em;
}
._1nGsO,
._2oR-q {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  border-left: 0.01em solid hsla(0, 0%, 100%, 0.3);
  padding-bottom: 0.02em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._1nGsO {
  width: 1.04em;
}
._1IRJ1._1IRJ1 {
  height: 0.16em;
  width: 0.16em;
  margin-left: 0.04em;
  margin-top: 0.01em;
}
._3gEAv {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 0.32em;
  border-left: 0.01em solid hsla(0, 0%, 100%, 0.3);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
}
._3gEAv._1AZXb {
  z-index: 15500;
  pointer-events: none;
}
._3gEAv:hover .aV6pA {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEUAAAD+7tT/8dX97tTeTow9AAAAA3RSTlMA40mAJZ3FAAAAH0lEQVQY02MYYKDawJnAFAFkyDuwX2D8AmcgpAYWAAACqwcntVkVxQAAAABJRU5ErkJggg==);
  background-position: 50%;
  background-repeat: no-repeat;
}
.aV6pA {
  width: 100%;
  height: 100%;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMA40mAJZ3FAAAAH0lEQVQY02MYYKDawJnAFAFkyDuwX2D8AmcgpAYWAAACqwcntVkVxQAAAABJRU5ErkJggg==);
  background-position: 50%;
  background-repeat: no-repeat;
} */
@-webkit-keyframes _32vsv {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _32vsv {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _1vsPG {
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
@keyframes _1vsPG {
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
.hqa41 {
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 2.56em;
  background-color: #040403;
}
._1j-Q0,
._1TDGD,
._34U0X,
.hqa41 {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
._1j-Q0,
._1TDGD,
._34U0X {
  -ms-flex-pack: center;
  justify-content: center;
}
._2_lIy {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 0.33em;
  border-bottom: 0.01em solid #24211a;
}
._34U0X {
  width: 2.71429em;
  font-size: 0.14em;
  color: #bbaa7d;
}
._1TDGD {
  width: 2.2em;
  padding-left: 0.01em;
}
._1TDGD ._1j-Q0 {
  width: 1.85714em;
  height: 1.85714em;
  margin: 0 0.28571em;
  padding-bottom: 0.07143em;
  border-radius: 50%;
  color: hsla(0, 0%, 100%, 0.87);
  font-size: 0.14em;
  line-height: 1.85714em;
}
._1TDGD ._1j-Q0.Ev3It {
  background: #144bb7;
}
._1TDGD ._1j-Q0.bCgM4 {
  background: #ea1323;
}
@-webkit-keyframes _7sc9- {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _7sc9- {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3ni7w {
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
@keyframes _3ni7w {
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
._2U3xm {
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
.Otvf5 {
  line-height: 1;
  width: 6.42857em;
  margin-left: 0.57143em;
  color: #fdeed4;
}
._UEer,
.Otvf5 {
  font-size: 0.14em;
}
._UEer {
  margin-right: 0.64286em;
  color: #fff;
}
._3Z-WA {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  width: 1.24em;
  padding: 0.01em 0.09em 0.03em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._3Z-WA .Otvf5 {
  margin: 0;
  color: hsla(0, 0%, 100%, 0.6);
}
._1FsWz {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  width: 1.61em;
  border-left: 0.01em solid hsla(0, 0%, 100%, 0.3);
  padding-bottom: 0.02em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
@-webkit-keyframes _2fIwV {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2fIwV {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3X9p0 {
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
@keyframes _3X9p0 {
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
._1Y8MV,
._3_Ehn {
  display: -ms-flexbox;
  display: flex;
  position: relative;
}
._1Y8MV {
  width: 1.9em;
  height: 0.38em;
  -ms-flex-pack: end;
  justify-content: flex-end;
  background-image: url(../../assets/6837160f.png);
  background-size: contain;
}
._2b6eQ {
  position: absolute;
  top: 0.35714em;
  left: 0.71429em;
  font-size: 0.14em;
  color: hsla(0, 0%, 100%, 0.87);
  letter-spacing: 0.00714em;
}
._1rPK3 {
  margin-right: 0.96667em;
  font-size: 0.3em;
  font-family: FIVExNINEled;
  color: #fff;
  line-height: 1.07;
}
._28CqV._28CqV {
  position: absolute;
  height: 0.46em;
  width: 0.46em;
}
._28CqV.V5UIX {
  top: -0.05em;
  right: 0.45em;
}
._28CqV._1BEgJ {
  top: 0.07em;
  right: 0;
  z-index: 1;
}
._8Ixb8 {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  height: 0.24em;
}
._8Ixb8._1A349 {
  height: 0.4em;
}
._8Ixb8._1A349 .fxN5P {
  width: 0.4em;
  height: 0.4em;
  border-radius: 50%;
}
._8Ixb8._1A349 .fxN5P:last-child {
  margin-left: 0.04em;
}
.fxN5P {
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
.fxN5P:last-child {
  margin-left: 0.02em;
}
.fxN5P ._8U4Vv {
  font-size: 0.14em;
}
.fxN5P:hover {
  color: #fff;
}
/* ._2iYHj {
  background-color: #7d7254;
}
._2iYHj:hover {
  background-color: #bbaa7d;
}
._2iYHj ._2FMNa {
  width: 0.24em;
  height: 0.24em;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAAGXcA1uAAAABGdBTUEAALGPC/xhBQAAAXBJREFUSA3llEtLw0AUhYM7QfCBD0QRKcX+BYsgCIILwYXgQnDhwp0bf2dBEUEQEUTUutQqvmp1/G7am2QmmZIQENQLX2fmnDM3ryZBkFXGmLlQZzKcFehquMsBP03Y9sYwa5aJMAHrrjhrCYUWtNtPbUA0ocj4oG4kJoRWSlTzZ0YOX5FToBb7HpHAdBgzZtUKIt5BS0XmY73gpmqZIyF5elK7mYFfLnJdTbmEgTzXQfia3FCerPzvL+E5b/ic8KsVRjiA1CNHO4V3KywLxBpIRZuYH8NHKqwCpm6qM29ARz3vSGgBpL68IdcgPOhq/3TNrejz3SxxU2hchVuQuofREu3irTSahyuQeoKl2C0xo9EMXIDUC6x422FOek3HIDsFZyD1BmtOJF5ijoB+6+SLH71Ccao7wxuHE5Bqw4ab8a4Jy+uWPFBdw+hyEocg1YEt9QqPbE4e6JH1EUh9wk7hhr4NNJNvwU2v8Z4v9/f1b2Xigfh5OlFzAAAAAElFTkSuQmCC);
  background-size: 100% 100%;
}
._3F-bF {
  background-color: #24211a;
}
._3F-bF:hover {
  background-color: #bbaa7d;
}
._3F-bF ._2FMNa {
  width: 0.16em;
  height: 0.16em;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAABGdBTUEAALGPC/xhBQAAAQhJREFUOBGNkbENwjAQRRM6RBrEAmxAR4NEjcQQ9CxAxRhswghp6GAKmpQ0VOF9J+c4joNy0sX//P/9s50sC6MmwjrARrFWbtuAI/gUJgavTVFQ7I3IVHhlyISb4M5LrRKSzVTzkoo4kn0i7nAyc6SYJzuaMbVmrWxEap2xeUZUxiR7H3Lj9gHXUNQjrdNESTIQfRE8rNaqM7hQJ2BL3sH9M8W21P5MOcWbrkOe5y9n1X4kAi71DnqoJ1mS/t+G4hij03/SM1w8R6GxilEjOGuswM0beocWQAyMJjX+MaK/Hp8YN6qOJt7kQIxezXsgGr0j3OBqkxq9qAVJIzZ3ZPpVY4fO6ETP4gdw4HR3VnEnYwAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
} */
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
	background-color: rgba(0,0,0,.9);
	z-index: 1500
}

._2A_Cv {
	font-size: .14em;
	color: hsla(0,0%,100%,.87);
	text-align: center
}

.MWKSW {
	width: .32em;
	height: .32em;
	margin-bottom: .04em
}

._2et_L,._2et_L._2eSL8 {
	width: 100%;
	height: 100%
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
	justify-content: center
}

._2et_L._2eSL8:after {
	content: "";
	width: 100%;
	height: 100%;
	background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAzFBMVEUAAAD97tT97tT97tT+79T979T97tP+7tT979P979P97tT+7tP+79P+7tP97tT979P+79T979T979P+79T79dX+7tP+7tT97tT97tb/7tD97tT97tP+7NL+8NT979P97tP979T97tT+8NX97tP879P97tT97tb97NL/8+D97tT87dT+7tT97tP97dP+79T97tP97tP97db97tP97tP97tP97tP87dP979T97tP97tT97dP97tP97tT979T879T87dL47dX87dP97dP979McF+feAAAARHRSTlMA5vPV3tvR4urN+PX62M/w4O787ATT2ugSDv5sHCBEP6JKGKgxYDYsB5C+uK14cmYnJJlbh0/HwZ2Ui37JglM7CrVXsd9RCHcAAAWRSURBVHja7dJ5c5pAHMbxJxo1pjlMs2mhIggq4i3eV7zy/t9TF3bZxZg2iRGY6fTDjP75fP0h/vvvJE593Sm3ptnLx0wJcesXK5mb79Qvz2W8AUqtnLu5ofOJBDjr9je6nlSAPb+6pttJBRitayqxAHN67bu5TiTAnlxzN+IETCwByvwbFRRcxx5Qy3nzNICJO0BrfWPkviy4zt2umjMLETJzfP51QH7QNV2CiJFRKvVNEAHp+VpBHLRmSgSIG+QWVcSkf5vyhS/QNgniYhdSDJ+nT7mO+OhXKRHAzFzEaP2QOgxY2YiTzvZFws8iQZzsn6mDgKaGWPXp/++ePoFnglhp6XtKBBR0xIu0vHmKJWRLiNnzPecHTC3ETJfz1E5FzLTLh3shtXMQt1Zo/n6qIm7DB889u0LWQtyUjDfPZUqIXeOBu6ePjthV2Tq7whLxaz5ILYLY6Y+Pjw9cTkP8WqGAIuK3efSwiClB/NqhABvxq149CnMkoCEDrlzEz8lcUSxggASMvXkeUEcCyleBxzISoFywce/RkYDhlZAmSMBABjwjCU8yoI4E9OX+BEmo/aRYwAhJmMkAE0nI/xQUJMC5EPtNJKF+cREkLJCEsQzoIQndC0FHEuYyoIQkVMR+jiAJOxFwh0Q0RcAUiViJgBYSkRYBbSSiIAJm+Ih/LyDxV7DKBXaIHJEQaOYu+DNF5BznOOAlF8gjcltHQKAsAi4JorblwgGNnFBCxIgqyICiDNDxSiwBpgzoIWJbRZAB/Zyn4BkhYqoiEAScAgugHy1ETLE4RYE0KQgKIkU0SxRAGngHYExEaqtxhwG1gvCMSCmlUlCwheTKgCYipbluyadpBCF5WVBHhBzXFQUIaxSoS98SEbL6lOtXWAjby4AVQXT6jEupCFMyl4KByKh1n99AcGAmAwaIjFutBgUaDpmXUh8R2VYp3qDikJOVAQ1ExLVlAV4byYBMCZHYbmyKRWh4rcrHLzOZzAKR6G9oAU/Y4kiZBWS8hioioBqGsaFsqo9jNvv1/ueO4PxsQxaoeEPbn2dqOLuSrusGb6jjLQadD9xZOLOtrssCBW96yQg/KgTntTFNM0io4m3VUMCPLs6qPjYpfgUVfzBi4xT9MnBG1no8Fgl9/ImaDwLox0rD2ajjtSwwCP5o780HZ2gqOBNnvN+vRYKGv6iwgB+e2/YWZ0HM4d4rGPsFNv7GWgW//5YqO+fZrw2HIsF851cZdNx36xdsz3B/s1bzCvhbsPCODpvn2gq+aLvu9bwCnlDHe0iFBXAtDV+iDos9r4C/BZ3gXdZUzKdv0+nJBl9Q6hWLfgFLGG/xAe7qVqAF6S7BiYjR7RZDBWsVH1LNButM2Tr1/B0ewN+Cgg8y0uIV+FbDE45A7E6n06VEgYYPM72CdEi7ik/Sistlh5IvwcUnGHcHBU9PT6MSPkHZPz8v/YJuUKDhU6qTdMgTlV24+CBruBiNRjRBFtQsfJLbDAf4BdnGhuBdpN5rNBYLHsALago+zaq8DqCa3T7+qrRfzOcygJ9gr+IEpCvmWQDz0tFVvEm1a6PZbDCQBfwlGASnMSah3y/c3d1VlsONRkKtmj0uLiqVSrlMAwY0oEED+A2KLk5mlY8D7ph8ftVqlweNxXxQrrR2u5eXdtsLkCfgATUVX7GeiAC2LgKY1WQybTZbreMAVtCp4ovU5dMbAXkWsPIDpocBMy+Av4TxFl9Xr9B56fgC9AQiQJ6A3qCo4TyMclY6vgB/BzSAFQxYQbGP87EHcv/4AjJA/guKLs6rvpyIADmfz4uAXZsW8IDGsITzc/RGXv4Dji4g/4bFKkFElPGoeXCBo4BB0VARrdJ+scsLq5UMGHRNDfFwXL33PJ9VXpqTaatdni86w03JwX//neI3GUohsT/4i6UAAAAASUVORK5CYII=) no-repeat 50%;background-size: 100% 100%;
	-webkit-animation: _2eSL8 1s linear infinite;
	animation: _2eSL8 1s linear infinite
}

._2et_L.axlsv {
	background: url(data:image/png;base64,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) no-repeat 50%;background-size: 100% 100%
}

._2et_L._1YINl {
	background: url(data:image/png;base64,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) no-repeat 50%;background-size: 100% 100%
}

._2et_L.fV8cs {
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAAH7+Yj7AAAABGdBTUEAALGPC/xhBQAABqxJREFUWAmtWEuMFEUY/rpnF0RXEQ4gmJ0ZHkaNXoxExIP4OCPBaOAmiQk+oh7QAAeEFS6S6EWNnj0YA4gETbwJwQOyBLyIESLgzKLAkgjKEh77mPb7qrtmq7ure4bVSmaq6n989ddfj/+vBpLSQO2LIdTW236qvoSFMyGJFJWdMASOZYmmb1QSDjX3t4WaqI7YTshOS50I6FN9FrXnVZvSQJX0uHCcdDmH+gOg+laRh1B/Nc1mT9hnUV/uMkgbtEqGnhVwx5SA6dP+Ky5Km5Elqq8hXLoX0Qpovq6AZuX2rZyph7B4EU05yd+BFMN2IkSBTztHI8KvVklM2rzB7avdI0YdzcAyVIcIfrP9OoYC7phtXJqgaYm2jtDTFhSthehdreEeK2Drfkycsm1bUzBKbUTa8EeAxg0rYOuQjKu2k9Sjl1G/26Xdht65pu+6wd2eYrq8tjDdstF0jEDtMN12wfZTbrFEbS1u2YG4b7xyiO1z/C3hnMxWlMkzcOe8Ofgla3qsZlfRXaSYU/x/FgvvSxZyV0pKFuXm5kiIF/9qLzvkdpMna7XV79EGbGF0QCvflihoVBDk1lWiVTR20qi6QMMWxr7j7vmyACNFjjA9taNcZg1DO9TXDpOz56tTVGj6NfGqOCnZ0mKmKVO7mXIZEhfzcIDoDiNzEQ/1CVSr5lMSTz/vtUYF+u+SuxfbGGTsShRXt4kljRhIhiybYcUKV5ZnfTuP8WYr6NZUOj4dvc/eg9MXXbrahYBiKuQwAqygb5ZECLQgR0P0bqni1GnxfSUHKH9ex8h5Hj0TRTjmQSoe5U874QkevZqAqDjArfKe2oWFPjEnhnXqHs8qKHLI15Rr6chm+aZPplmQopX2KencCzgHaoNF9u4SCAfaICX9ikBlqeXppGAC0Z4Q4ZrZOPOPZdiai3HJtn01I8ODHIl3XByCQ20PCeqA+xQqwF8+ukurIHyKoAOi8XKINtOrm9Txl3ILpdOPxkHVurnMlO1NIWK2RKh0tDDWCZq8uRT4OpWeUh862ofYXtIRsB83uwU8T8B5HQFtUKWfzZ3oWJRtPkrCMQN4TqlX59LB0mg5wb7Vxv1Zl2NnvHIJu/F7dA3dwNhwkbhOzxWM/8292+AmXuCTo1E6+yY+h/GdFgyT6J3SCFprYhBGCU/R2eemfkxBP8WOz6uTGjtcDraOv1kOyTRlvfTI25rlMXteNiNhei3NKtjgTrB01pAVVLBJrD3sW30CbIz5iiVOCp8AcXvlywUsmnMTY9/TNw/nuSbX3F5Fc4uP5wX0CYqmgUYx/gYv1FVFgxXpcqDjAYK909DziS+4legVsWK63DQBfMrYFGenhhwMMhDu7UW4bz4aJ8oQtAxjaK3kPb2KGEsnZYNhXrWv96P59SQt3/J6UBuohT8/p5delAqFLgcIXyu60/Ow5RRtuAitz4hvdjbxd4e496V+/Hg9q5kzUFueigOxYHDgLlRW+SKXCzSEBU9y2Z9xaVzO/VX8/oNLy7bjS2JiLz37tHg0Jpc5tA1U+nENV5nuRnNJvByiZ2k/zhRmq+5gnNSbnNRHLo0YbzFOfezSitq6XFoYH4w9Ggzfjr7F9mVhLmttfuVGiXFHCDy7W+M0KF98uaDooxUZqLE0Jid1RDbIFtkUY/M/uQKYuAWDFHQ2chFklu5LA3y0rF66H48dyJN9sklcJTXrSTD30zQEa9Mq3fbyxkQIc17tBs3aIJtkG5MkrIgVg4OdroyiAfx5T9hVCMlixjaY9JtvfqwIldgnQsrHp1QijOaM8dFuAdzYItvC5NUh3dJnYxk49w7vSX3Fiovaotn+FGpji2zTKbae40vmPxXXi257KqDWlqP8CGQ+C5jnPme+iTPfMRXE/0tH2QiX4n3hhZi22ODqeTKZoqS/CnY7sKICwdfpXc46l5x1g2OfjbKFNm1L6RB0qzVSsTLF7NCRYVbX1k3UX+mglmJrzEndyQyTqzpZlLnwbfYVXUx6cIJx+PFOcVja8t4Ixn+i3sIYLWjMRPDILDSYjJeXJB4zKY/u56ARI9ALboaTMlBQejzTvTs5mMlkZGgFleduJfSVmxRzFX8nMPENRzRvIhqym0nraiYZHLqLIkO17Py1HNcPZj9MdwHVFpEu8QYdvJbG0FhtoUyjkOHKJR9a3ibtHU6vz+XRw032G/zpK479tKZ7TL86PVRj3S4cUO+rD/gs+tBmLG2mp9GVgR498/YHxlYyHOkNawziza+a28R8cjIG86I9BvTuK/v05MO3tH8Bm+2YLHU/82MAAAAASUVORK5CYII=) no-repeat 50%;background-size: 100% 100%
}
@-webkit-keyframes _2nlcr {
	0% {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg)
	}

	to {
		-webkit-transform: rotateY(180deg);
		transform: rotateY(180deg)
	}
}

@keyframes _2nlcr {
	0% {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg)
	}

	to {
		-webkit-transform: rotateY(180deg);
		transform: rotateY(180deg)
	}
}

@-webkit-keyframes _1vzZW {
	0% {
		background-position: 100% 0,100% 100%,0 100%,0 0
	}

	50% {
		background-position: 50% 0,100% 50%,50% 100%,0 50%
	}

	to {
		background-position: 0 0,100% 0,100% 100%,0 100%
	}
}

@keyframes _1vzZW {
	0% {
		background-position: 100% 0,100% 100%,0 100%,0 0
	}

	50% {
		background-position: 50% 0,100% 50%,50% 100%,0 50%
	}

	to {
		background-position: 0 0,100% 0,100% 100%,0 100%
	}
}

@-webkit-keyframes _2T3yZ {
	to {
		-webkit-transform: rotate(1turn);
		transform: rotate(1turn)
	}
}

@keyframes _2T3yZ {
	to {
		-webkit-transform: rotate(1turn);
		transform: rotate(1turn)
	}
}

._3TGE0 {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: center;
	justify-content: center;
	-ms-flex-align: center;
	align-items: center;
	margin-top: -1.25em;
	margin-left: -.1em;
	height: 100%;
	width: 100%;
	opacity: 0;
	-webkit-animation: _2UDiL 5s linear;
	animation: _2UDiL 5s linear
}

._3TGE0.mC-ad {
	display: none
}

._3TGE0 ._2JF_w {
	position: absolute;
	height: 3.19em;
	width: 4.29em;
	margin-top: -.15em;
	margin-left: -.05em;
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: contain;
	background-image: url(../../assets/949f3dd7.png);
	-webkit-animation: _1kJkC 5s linear;
	animation: _1kJkC 5s linear
}

._3TGE0 ._1N094 {
	position: absolute;
	height: 4.56em;
	width: 4.56em;
	margin-top: -.1em;
	-webkit-animation: _2k9A0 5s linear;
	animation: _2k9A0 5s linear
}

._3TGE0 ._2IwUZ {
	height: 100%;
	width: 100%;
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 100% 100%;
	background-image: url(../../assets/97cbc3f4.png);
	-webkit-animation: _2Um6I 10s linear forwards;
	animation: _2Um6I 10s linear forwards
}

._3TGE0 ._3ElU_ {
	width: 100%;
	height: 100%;
	margin-top: -.2em;
	-webkit-animation: _3KQq4 5s linear;
	animation: _3KQq4 5s linear
}

._3TGE0 ._3ElU_,._3TGE0 ._37Qd7 {
	position: absolute
}

._3TGE0 ._3Cwru {
	-webkit-transform-origin: 50% 100% 0;
	transform-origin: 50% 100% 0;
	-webkit-animation: _37oQJ 5s linear;
	animation: _37oQJ 5s linear
}

._3TGE0 ._3GXBP,.Safari ._3TGE0 ._3Cwru {
	-webkit-animation: qH-Q0 5s linear;
	animation: qH-Q0 5s linear
}

._3Uo-7 ._1nXit {
	font-size: .26em;
	font-family: Arial,sans-serif;
	font-weight: 700;
	line-height: 1;
	margin-top: .15385em;
	color: #ff101a
}

@-webkit-keyframes _2UDiL {
	0%,76% {
		opacity: 1
	}

	to {
		opacity: 0
	}
}

@keyframes _2UDiL {
	0%,76% {
		opacity: 1
	}

	to {
		opacity: 0
	}
}

@-webkit-keyframes _3KQq4 {
	0%,10% {
		opacity: 0;
		-webkit-transform: scale(0);
		transform: scale(0)
	}

	20%,to {
		-webkit-transform: scale(1);
		transform: scale(1);
		opacity: 1
	}
}

@keyframes _3KQq4 {
	0%,10% {
		opacity: 0;
		-webkit-transform: scale(0);
		transform: scale(0)
	}

	20%,to {
		-webkit-transform: scale(1);
		transform: scale(1);
		opacity: 1
	}
}

@-webkit-keyframes _1kJkC {
	0% {
		-webkit-transform: scale(0);
		transform: scale(0);
		opacity: 0
	}

	20% {
		-webkit-transform: scale(.875);
		transform: scale(.875);
		opacity: 1
	}

	56%,to {
		-webkit-transform: scale(1);
		transform: scale(1);
		opacity: 1
	}
}

@keyframes _1kJkC {
	0% {
		-webkit-transform: scale(0);
		transform: scale(0);
		opacity: 0
	}

	20% {
		-webkit-transform: scale(.875);
		transform: scale(.875);
		opacity: 1
	}

	56%,to {
		-webkit-transform: scale(1);
		transform: scale(1);
		opacity: 1
	}
}

@-webkit-keyframes _2k9A0 {
	0% {
		-webkit-transform: scale(0);
		transform: scale(0);
		opacity: 0
	}

	17% {
		-webkit-transform: scale(1);
		transform: scale(1);
		opacity: 1
	}

	20% {
		-webkit-transform: scale(1.2);
		transform: scale(1.2);
		opacity: 1
	}

	24%,to {
		-webkit-transform: scale(.9);
		transform: scale(.9);
		opacity: 1
	}
}

@keyframes _2k9A0 {
	0% {
		-webkit-transform: scale(0);
		transform: scale(0);
		opacity: 0
	}

	17% {
		-webkit-transform: scale(1);
		transform: scale(1);
		opacity: 1
	}

	20% {
		-webkit-transform: scale(1.2);
		transform: scale(1.2);
		opacity: 1
	}

	24%,to {
		-webkit-transform: scale(.9);
		transform: scale(.9);
		opacity: 1
	}
}

@-webkit-keyframes _2Um6I {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg)
	}

	to {
		-webkit-transform: rotate(1turn);
		transform: rotate(1turn)
	}
}

@keyframes _2Um6I {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg)
	}

	to {
		-webkit-transform: rotate(1turn);
		transform: rotate(1turn)
	}
}

@-webkit-keyframes _37oQJ {
	0%,8% {
		-webkit-transform: translateY(100%) scale(0);
		transform: translateY(100%) scale(0);
		opacity: 0
	}

	18%,19% {
		-webkit-transform: translate(0) scale(1);
		transform: translate(0) scale(1);
		opacity: 1
	}

	23% {
		-webkit-transform: translate(0) scale(1.2);
		transform: translate(0) scale(1.2);
		opacity: 1
	}

	25%,to {
		-webkit-transform: translate(0) scale(1);
		transform: translate(0) scale(1);
		opacity: 1
	}
}

@keyframes _37oQJ {
	0%,8% {
		-webkit-transform: translateY(100%) scale(0);
		transform: translateY(100%) scale(0);
		opacity: 0
	}

	18%,19% {
		-webkit-transform: translate(0) scale(1);
		transform: translate(0) scale(1);
		opacity: 1
	}

	23% {
		-webkit-transform: translate(0) scale(1.2);
		transform: translate(0) scale(1.2);
		opacity: 1
	}

	25%,to {
		-webkit-transform: translate(0) scale(1);
		transform: translate(0) scale(1);
		opacity: 1
	}
}

@-webkit-keyframes qH-Q0 {
	0% {
		-webkit-transform: scale(0);
		transform: scale(0);
		opacity: 0
	}

	20% {
		-webkit-transform: scale(1);
		transform: scale(1);
		opacity: 1
	}

	56%,to {
		-webkit-transform: scale(1.18);
		transform: scale(1.18);
		opacity: 1
	}
}

@keyframes qH-Q0 {
	0% {
		-webkit-transform: scale(0);
		transform: scale(0);
		opacity: 0
	}

	20% {
		-webkit-transform: scale(1);
		transform: scale(1);
		opacity: 1
	}

	56%,to {
		-webkit-transform: scale(1.18);
		transform: scale(1.18);
		opacity: 1
	}
}

@-webkit-keyframes _1RxEZ{0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}to{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}}@keyframes _1RxEZ{0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}to{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}}@-webkit-keyframes _2rqON{0%{background-position:100% 0,100% 100%,0 100%,0 0}50%{background-position:50% 0,100% 50%,50% 100%,0 50%}to{background-position:0 0,100% 0,100% 100%,0 100%}}@keyframes _2rqON{0%{background-position:100% 0,100% 100%,0 100%,0 0}50%{background-position:50% 0,100% 50%,50% 100%,0 50%}to{background-position:0 0,100% 0,100% 100%,0 100%}}.gX-xw{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;height:.24em}.gX-xw._31x02{height:.4em}.gX-xw._31x02 ._2RYLa{width:.4em;height:.4em;border-radius:50%}.gX-xw._31x02 ._2RYLa:last-child{margin-left:.04em}._2RYLa{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:.82em;height:.24em;-webkit-box-shadow:0 .04em .06em 0 rgba(0,0,0,.5);box-shadow:0 .04em .06em 0 rgba(0,0,0,.5);cursor:pointer;outline:none;border-radius:.12em;color:hsla(0,0%,100%,.87);pointer-events:auto}._2RYLa:last-child{margin-left:.02em}._2RYLa ._3w--6{font-size:.14em}._2RYLa:hover{color:#fff}._1m_7V{background-color:#7d7254}._1m_7V:hover{background-color:#bbaa7d}._1m_7V ._1k3sv{width:.24em;height:.24em;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMA8SbmOPrNFvfjHBD03tnTbWJaU0xFPyETD+c7CR/ewc0AAABuSURBVCjPtdBJDoAgFANQcVacZ9Te/5oaoj8hKUu6+68baBQ6xuNxMngcShPfK6iUe3MRr1s0G/eSedGhXOXw+KBS8R7Z8h86kccd1iXx+TVHjmx2P2obLe425vWJjZMDE50NGOmglXWSu46C5QFnMgX360m9WQAAAABJRU5ErkJggg==) 50% no-repeat;background-size:100% 100%}.OBOwe{background-color:#24211a}.OBOwe:hover{background-color:#bbaa7d}.OBOwe ._1k3sv{width:.16em;height:.16em;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAC+x8L/TEPpL559DJX0s7IBPtzzD3AAAATUlEQVQY06XOSxKAIAwE0Y4o4F9z/8O6COUUa7J7vZnAa+gesD2rlCVB8my/p5lWZJWwSljlCqt4Z8rqhwFor7Yt7Q38Y1v3T4VbhtM+c2cCwynPe1YAAAAASUVORK5CYII=) 50% no-repeat;background-size:100% 100%}
@-webkit-keyframes _1VpLn{0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}to{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}}@keyframes _1VpLn{0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}to{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}}@-webkit-keyframes _3LT4z{0%{background-position:100% 0,100% 100%,0 100%,0 0}50%{background-position:50% 0,100% 50%,50% 100%,0 50%}to{background-position:0 0,100% 0,100% 100%,0 100%}}@keyframes _3LT4z{0%{background-position:100% 0,100% 100%,0 100%,0 0}50%{background-position:50% 0,100% 50%,50% 100%,0 50%}to{background-position:0 0,100% 0,100% 100%,0 100%}}._3_qV3{-ms-flex-direction:column;flex-direction:column}._1XVRm,._3_qV3{display:-ms-flexbox;display:flex}._1XVRm{height:100%;width:100%;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;margin-bottom:.14em}._1dEXQ{margin-bottom:.1em}.LnRDC{font-size:.4em;line-height:1;font-weight:600;color:transparent}.LnRDC._3VFdI{font-family:Helvetica}._3YcCQ{position:absolute;text-shadow:.05em .05em .05em rgba(0,0,0,.8)}.Edge ._3YcCQ{color:#000}._2ZAjS{background:-webkit-gradient(linear,left top,left bottom,from(#c5a062),color-stop(10%,#c5a062),color-stop(40%,#fff7ea),color-stop(70%,#f3e5ce),to(#c19b59));background:linear-gradient(#c5a062,#c5a062 10%,#fff7ea 40%,#f3e5ce 70%,#c19b59);-webkit-background-clip:text;z-index:1}._3fa_L{background:-webkit-gradient(linear,left top,left bottom,from(#bb934c),color-stop(15%,#bb934c),color-stop(45%,#fff7ea),color-stop(65%,#fff7ea),color-stop(90%,#d7bc8d),to(#b78c42));background:linear-gradient(#bb934c,#bb934c 15%,#fff7ea 45%,#fff7ea 65%,#d7bc8d 90%,#b78c42);-webkit-background-clip:text;z-index:1}._10oXe ._3YcCQ{text-shadow:0 .08333em .04167em rgba(0,0,0,.6)}._10oXe ._1dEXQ{margin-bottom:.04em}._10oXe ._1dEXQ .LnRDC{font-size:.2em}._10oXe ._3VFdI{font-size:.24em;letter-spacing:.00833em}

.KmRLD {
	width: 27px;
	height: 40px
}



._3BtK-,.xrYU7 {
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 100% 100%
}





._5B2B8,.qcK9t {
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 100% 100%
}




._1Xp65,.x4Hqq {
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 100% 100%
}





._3bTLb,._3gjPy {
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 100% 100%
}





._2eUj_,._2ih2m {
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 100% 100%
}



._33qcL {
	border-radius: 7%;
	background-color: #6a6a6a;
	background-size: 100% 100%
}

@-webkit-keyframes mXq6o{0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}to{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}}@keyframes mXq6o{0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}to{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}}@-webkit-keyframes _2rRaS{0%{background-position:100% 0,100% 100%,0 100%,0 0}50%{background-position:50% 0,100% 50%,50% 100%,0 50%}to{background-position:0 0,100% 0,100% 100%,0 100%}}@keyframes _2rRaS{0%{background-position:100% 0,100% 100%,0 100%,0 0}50%{background-position:50% 0,100% 50%,50% 100%,0 50%}to{background-position:0 0,100% 0,100% 100%,0 100%}}._3L7bK{position:relative;width:100%;height:100%}._172dF{position:absolute;width:.88em;display:-ms-flexbox;display:flex;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}._172dF.RyKt1{top:0;left:4.22em}._172dF.s4X5f{top:.12em;right:0}._172dF._3wbRM{top:1.47em;right:.73em}._172dF._1DD6p{top:1.94em;right:3.13em}._172dF._21Ufh{top:1.94em;left:3.13em}._172dF._1cm1f{top:1.47em;left:.73em}._172dF._1OLPA{top:.12em;left:0}._3L7bK ._3HfX-{width:.42em;height:.82em}._3eEHa{opacity:0}
</style>
