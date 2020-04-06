<template>
  <div class="_2FQ8z _3c1Kj gamelist">
    <div class="_2UoED">
      <div class="_2Qn5d">
        <!-- 桌子 -->
        <template v-for="( desk,index) in mid_desk_List">
          <!-- 拖拽 -->
          <div class="_3PaQi"
               :key='index'
               
               @drop="drop($event,desk.id,index)"
               @dragover="dragover">
            <div class="_2S3Lr">
              <div class="_2xSSt _18yFR">
                <div class="_2K7UY">
                  <div class="RoTQ2 "
                       :class='selectId==desk.id? index==0&&chipnotice?"VOXnU  _135Vr":"_135Vr":"" '
                       @click="seletcCurr(desk.id,index)"
                       role="presentation">
                    <div class="_1LHnT"></div>
                  </div>
                  <div class="N1YLN">
                    <div class="_2KWZL">
                      <span class="_13Q5o">
                        <span>{{codes[desk.code.substr(0,2)]}}</span>
                        <span>{{desk.code.substr(0,2) =='BP' ||desk.code.substr(0,2) =='BA'?desk.code.substr(2,2):''}}</span>
                      </span>
                      <div class="_2N9K7"
                           v-if='(parseInt(desk.id)>=11&&parseInt(desk.id)<=14)||desk.id==17?true:false'></div>
                    </div>
                    <div class="_3fa9o">{{desk.boot?desk.boot+'-'+desk.inning:desk.inning}}</div>
                  </div>
                </div>
                <div class="CA7e0"
                     role="button"
                     @click='showDeal'
                     tabindex="0">
                  <div class="_1k7v7" >
                    <img class="_3qPxB"
                         :src="img_list[desk.id]"
                         alt="dealerPicture">
                    <div class="_3qPxB _1shuV _1y44k"></div>
                  </div>
                  <div class=""></div>
                </div>
                <div class="_2c97U">
                  <!-- _2QqaK  -->
                  <div class="SxLiX daojishi"
                       v-show='desk_status[desk.id]&&desk_status[desk.id]["status"]=="1"?true:false'>
                    <div class="_3fDKM "
                         :class="parseInt(desk_status[desk.id]['bet_interval'])<10?'_6NJkN':'' ">
                      {{(desk_status[desk.id]&&desk_status[desk.id]['bet_interval'])?desk_status[desk.id]['bet_interval']:''}}
                    </div>
                  </div>

                  <div class="_2QqaK"
                       :class="(desk_status[desk.id]&&desk_status[desk.id]['status']=='2')?'_13ksF':'' ">
                    {{(desk_status[desk.id]&&desk_status[desk.id]['text'])?desk_status[desk.id]['text']:''}}
                  </div>
                </div>
              </div>
            </div>
              <div class="_2tyhk" :class='diff_desk_list.sb_desk_list.indexOf(desk.id+"")!==-1||desk.id==20?"AJLuo":""'>
                  <div class="_18Xn2">
                    <!-- 投注后的提示 -->
                    <div class="_2RJCk"
                        v-if='bet_status[desk.id]&&bet_status[desk.id]!="0"?true:false'>
                      <div class="Tn9ok">
                        <div class="_2z1u_ "
                            :class='bet_status[desk.id]?bet_status_text[bet_status[desk.id]]["class"]:""'>
                        </div>
                      </div>
                      <div class="_2S4h7">
                        <div>
                          {{bet_status[desk.id]?(bet_status[desk.id]=='3'?failtxt[desk.id]:bet_status_text[bet_status[desk.id]]["text"]):''}}</div>
                      </div>
                    </div>

                      <div class="_1fklX  "
                          :class="xiaZhuQuClass(desk.id,index)">
                                   <div class="kbIpK" :class='diff_desk_list.sb_desk_list.indexOf(desk.id+"")!==-1?"o7-cc":""'></div>
                        <div class="_2e-94"></div>
                          <!-- lunpan -->
                          <template v-if="diff_desk_list.lp_desk_list.indexOf(desk.id+'')!==-1?true:false">
                              <div class="O0eAd">
                                <div class="_3VtTn _2rQ0X _2Q5Fv"></div>
                                <div class="_3VtTn _2rQ0X _1-Jpy"></div>
                                <div class="_3VtTn _2rQ0X _32h-3"></div>
                              </div>
                              <div class="_3VtTn _2Q5Fv"
                                  data-betcode="ROEVEN"
                                  :class='desk_result[desk.id] && desk_result[desk.id]["shuang"]=="1"?"_13246" :"" '
                                  @click='xiaZhu("shuang",desk.id)'
                                  role="presentation">
                                  <div class="_2bhq2"
                                      v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['shuang'])?true:false">
                                    <div class="_3f0jL">
                                      {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['shuang']:0}}
                                    </div>
                                  </div>
                                  <div class="_8Ixb8 _26bkp _1A349"
                                      v-show="isShow[desk.id]=='shuang'?true:false">
                                    <div class="fxN5P _3F-bF"
                                        @click='cancelXiazhu($event,desk.id,"shuang")'
                                        role="presentation">
                                      <div class="_2FMNa"></div>
                                    </div>
                                    <div class="fxN5P _2iYHj"
                                        role="presentation"
                                        @click='sandXiazhu($event,desk.id,"shuang")'>
                                      <div class="_2FMNa"></div>
                                    </div>
                                  </div> 
                              </div>
                              <div class="_3VtTn _1-Jpy"
                                  data-betcode="RORED"
                                  :class='desk_result[desk.id] && desk_result[desk.id]["hong"]=="1"?"_13246" :"" '
                                  @click='xiaZhu("hong",desk.id)'
                                  role="presentation">
                                  <div class="_2bhq2"
                                      v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['hong'])?true:false">
                                    <div class="_3f0jL">
                                      {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['hong']:0}}
                                    </div>
                                  </div>
                                  <div class="_8Ixb8 _26bkp _1A349"
                                      v-show="isShow[desk.id]=='hong'?true:false">
                                    <div class="fxN5P _3F-bF"
                                        @click='cancelXiazhu($event,desk.id,"hong")'
                                        role="presentation">
                                      <div class="_2FMNa"></div>
                                    </div>
                                    <div class="fxN5P _2iYHj"
                                        role="presentation"
                                        @click='sandXiazhu($event,desk.id,"hong")'>
                                      <div class="_2FMNa"></div>
                                    </div>
                                  </div>     
                              </div>
                              <div class="_3VtTn _32h-3"
                                  data-betcode="ROBAK"
                                  :class='desk_result[desk.id] && desk_result[desk.id]["hei"]=="1"?"_13246" :"" '
                                  @click='xiaZhu("hei",desk.id)'
                                  role="presentation">
                                  <div class="_2bhq2"
                                      v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['hei'])?true:false">
                                    <div class="_3f0jL">
                                      {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['hei']:0}}
                                    </div>
                                  </div>
                                  <div class="_8Ixb8 _26bkp _1A349"
                                      v-show="isShow[desk.id]=='hei'?true:false">
                                    <div class="fxN5P _3F-bF"
                                        @click='cancelXiazhu($event,desk.id,"hei")'
                                        role="presentation">
                                      <div class="_2FMNa"></div>
                                    </div>
                                    <div class="fxN5P _2iYHj"
                                        role="presentation"
                                        @click='sandXiazhu($event,desk.id,"hei")'>
                                      <div class="_2FMNa"></div>
                                    </div>
                                  </div>  
                                  </div>
                              <div class="_3VtTn _1GlKe"
                                  :class='desk_result[desk.id] && desk_result[desk.id]["dan"]=="1"?"_13246" :"" '
                                  @click='xiaZhu("dan",desk.id)'
                                  data-betcode="ROODD"
                                  role="presentation">
                                  <div class="_2bhq2"
                                      v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['dan'])?true:false">
                                    <div class="_3f0jL">
                                      {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['dan']:0}}
                                    </div>
                                  </div>
                                  <div class="_8Ixb8 _26bkp _1A349"
                                      v-show="isShow[desk.id]=='dan'?true:false">
                                    <div class="fxN5P _3F-bF"
                                        @click='cancelXiazhu($event,desk.id,"dan")'
                                        role="presentation">
                                      <div class="_2FMNa"></div>
                                    </div>
                                    <div class="fxN5P _2iYHj"
                                        role="presentation"
                                        @click='sandXiazhu($event,desk.id,"dan")'>
                                      <div class="_2FMNa"></div>
                                    </div>
                                  </div>  
                                </div>
                              <div class="_3VtTn _2TiZS"
                                  :class='desk_result[desk.id] && desk_result[desk.id]["zu_1"]=="1"?"_13246" :"" '
                                  @click='xiaZhu("zu_1",desk.id)'
                                  data-betcode="RO12S1"
                                  role="presentation">
                                  <div class="_2bhq2"
                                      v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['zu_1'])?true:false">
                                    <div class="_3f0jL">
                                      {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['zu_1']:0}}
                                    </div>
                                  </div>
                                  <div class="_8Ixb8 _26bkp _1A349"
                                      v-show="isShow[desk.id]=='zu_1'?true:false">
                                    <div class="fxN5P _3F-bF"
                                        @click='cancelXiazhu($event,desk.id,"zu_1")'
                                        role="presentation">
                                      <div class="_2FMNa"></div>
                                    </div>
                                    <div class="fxN5P _2iYHj"
                                        role="presentation"
                                        @click='sandXiazhu($event,desk.id,"zu_1")'>
                                      <div class="_2FMNa"></div>
                                    </div>
                                  </div>  
                                  </div>
                              <!-- <div class="_3VtTn _1GlKe"
                                  :class='desk_result[desk.id] && desk_result[desk.id]["zu_1"]=="1"?"_13246" :"" '
                                  @click='xiaZhu("zu_1",desk.id)'
                                  data-betcode="ROODD"
                                  role="presentation">
                                  <div class="_2bhq2"
                                      v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['zu_1'])?true:false">
                                    <div class="_3f0jL">
                                      {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['zu_1']:0}}
                                    </div>
                                  </div>
                                  <div class="_8Ixb8 _26bkp _1A349"
                                      v-show="isShow[desk.id]=='zu_1'?true:false">
                                    <div class="fxN5P _3F-bF"
                                        @click='cancelXiazhu($event,desk.id,"zu_1")'
                                        role="presentation">
                                      <div class="_2FMNa"></div>
                                    </div>
                                    <div class="fxN5P _2iYHj"
                                        role="presentation"
                                        @click='sandXiazhu($event,desk.id,"zu_1")'>
                                      <div class="_2FMNa"></div>
                                    </div>
                                  </div> 
                                  </div> -->
                              <div class="_3VtTn _2rQ_N"
                                  data-betcode="RO12S2"
                                   :class='desk_result[desk.id] && desk_result[desk.id]["zu_2"]=="1"?"_13246" :"" '
                                  @click='xiaZhu("zu_2",desk.id)'
                                  role="presentation">
                                  <div class="_2bhq2"
                                      v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['zu_2'])?true:false">
                                    <div class="_3f0jL">
                                      {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['zu_2']:0}}
                                    </div>
                                  </div>
                                  <div class="_8Ixb8 _26bkp _1A349"
                                      v-show="isShow[desk.id]=='zu_2'?true:false">
                                    <div class="fxN5P _3F-bF"
                                        @click='cancelXiazhu($event,desk.id,"zu_2")'
                                        role="presentation">
                                      <div class="_2FMNa"></div>
                                    </div>
                                    <div class="fxN5P _2iYHj"
                                        role="presentation"
                                        @click='sandXiazhu($event,desk.id,"zu_2")'>
                                      <div class="_2FMNa"></div>
                                    </div>
                                  </div> 
                                  </div>
                              <div class="_3VtTn _14rGy"
                                  data-betcode="RO12S3"
                                   :class='desk_result[desk.id] && desk_result[desk.id]["zu_3"]=="1"?"_13246" :"" '
                                  @click='xiaZhu("zu_3",desk.id)'
                                  role="presentation">
                                 <div class="_2bhq2"
                                      v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['zu_3'])?true:false">
                                    <div class="_3f0jL">
                                      {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['zu_3']:0}}
                                    </div>
                                  </div>
                                  <div class="_8Ixb8 _26bkp _1A349"
                                      v-show="isShow[desk.id]=='zu_3'?true:false">
                                    <div class="fxN5P _3F-bF"
                                        @click='cancelXiazhu($event,desk.id,"zu_3")'
                                        role="presentation">
                                      <div class="_2FMNa"></div>
                                    </div>
                                    <div class="fxN5P _2iYHj"
                                        role="presentation"
                                        @click='sandXiazhu($event,desk.id,"zu_3")'>
                                      <div class="_2FMNa"></div>
                                    </div>
                                  </div>
                                  </div>
                              <div class="_3VtTn _3_z2S"
                                  data-betcode="ROSM"
                                  :class='desk_result[desk.id] && desk_result[desk.id]["xiao"]=="1"?"_13246" :"" '
                                  @click='xiaZhu("xiao",desk.id)'
                                  role="presentation">
                                 <div class="_2bhq2"
                                      v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['xiao'])?true:false">
                                    <div class="_3f0jL">
                                      {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['xiao']:0}}
                                    </div>
                                  </div>
                                  <div class="_8Ixb8 _26bkp _1A349"
                                      v-show="isShow[desk.id]=='xiao'?true:false">
                                    <div class="fxN5P _3F-bF"
                                        @click='cancelXiazhu($event,desk.id,"xiao")'
                                        role="presentation">
                                      <div class="_2FMNa"></div>
                                    </div>
                                    <div class="fxN5P _2iYHj"
                                        role="presentation"
                                        @click='sandXiazhu($event,desk.id,"xiao")'>
                                      <div class="_2FMNa"></div>
                                    </div>
                                </div>
                              </div>
                              <div class="_3VtTn _1tYFT"
                                  data-betcode="ROBIG"
                                  :class='desk_result[desk.id] && desk_result[desk.id]["da"]=="1"?"_13246" :"" '
                                  @click='xiaZhu("da",desk.id)'
                                  role="presentation">
                                 <div class="_2bhq2"
                                      v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['da'])?true:false">
                                    <div class="_3f0jL">
                                      {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['da']:0}}
                                    </div>
                                  </div>
                                  <div class="_8Ixb8 _26bkp _1A349"
                                      v-show="isShow[desk.id]=='da'?true:false">
                                    <div class="fxN5P _3F-bF"
                                        @click='cancelXiazhu($event,desk.id,"da")'
                                        role="presentation">
                                      <div class="_2FMNa"></div>
                                    </div>
                                    <div class="fxN5P _2iYHj"
                                        role="presentation"
                                        @click='sandXiazhu($event,desk.id,"da")'>
                                      <div class="_2FMNa"></div>
                                    </div>
                                  </div>
                                </div>
                          </template>
                          <!-- saibao -->
                          <template v-if="diff_desk_list.sb_desk_list.indexOf(desk.id+'')!==-1?true:false">
                            <!-- danshuangxiao 下注 -->
                            <template v-if='saibaoPage==1?true:false'>
                            <div class="_3VtTn _187vN undefined" 
                                  :class='resultSbBling("shuang")'
                            data-betcode="DIEVEN" 
                            @click='xiaZhu("shuang",desk.id)'
                            role="presentation">
                              <div class="_2bhq2"
                                  v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['shuang'])?true:false">
                                <div class="_3f0jL">
                                  {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['shuang']:0}}
                                </div>
                              </div>
                              <div class="_8Ixb8 _26bkp _1A349"
                                  v-show="isShow[desk.id]=='shuang'?true:false">
                                <div class="fxN5P _3F-bF"
                                    @click='cancelXiazhu($event,desk.id,"shuang")'
                                    role="presentation">
                                  <div class="_2FMNa"></div>
                                </div>
                                <div class="fxN5P _2iYHj"
                                    role="presentation"
                                    @click='sandXiazhu($event,desk.id,"shuang")'>
                                  <div class="_2FMNa"></div>
                                </div>
                              </div>
                            </div>
                            <div class="_3VtTn _1xYIz undefined" 
                             :class='resultSbBling("xiao")'
                             @click='xiaZhu("xiao",desk.id)'
                            data-betcode="DISM" role="presentation">
                              <div class="_2bhq2"
                                  v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['xiao'])?true:false">
                                <div class="_3f0jL">
                                  {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['xiao']:0}}
                                </div>
                              </div>
                              <div class="_8Ixb8 _26bkp _1A349"
                                  v-show="isShow[desk.id]=='xiao'?true:false">
                                <div class="fxN5P _3F-bF"
                                    @click='cancelXiazhu($event,desk.id,"xiao")'
                                    role="presentation">
                                  <div class="_2FMNa"></div>
                                </div>
                                <div class="fxN5P _2iYHj"
                                    role="presentation"
                                    @click='sandXiazhu($event,desk.id,"xiao")'>
                                  <div class="_2FMNa"></div>
                                </div>
                              </div>
                            </div>
                            <div class="_3VtTn JxBqa undefined" 
                             @click='xiaZhu("da",desk.id)'
                              :class='resultSbBling("da")'
                            data-betcode="DIBIG" role="presentation">
                              <div class="_2bhq2"
                                  v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['da'])?true:false">
                                <div class="_3f0jL">
                                  {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['da']:0}}
                                </div>
                              </div>
                              <div class="_8Ixb8 _26bkp _1A349"
                                  v-show="isShow[desk.id]=='da'?true:false">
                                <div class="fxN5P _3F-bF"
                                    @click='cancelXiazhu($event,desk.id,"da")'
                                    role="presentation">
                                  <div class="_2FMNa"></div>
                                </div>
                                <div class="fxN5P _2iYHj"
                                    role="presentation"
                                    @click='sandXiazhu($event,desk.id,"da")'>
                                  <div class="_2FMNa"></div>
                                </div>
                              </div>
                            </div>
                            <div class="_3VtTn _1sPXY _2xJdD"
                            :class='resultSbBling("dan")'
                             @click='xiaZhu("dan",desk.id)'
                             data-betcode="DIODD" role="presentation">
                              <div class="_2bhq2"
                                  v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['dan'])?true:false">
                                <div class="_3f0jL">
                                  {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['dan']:0}}
                                </div>
                              </div>
                              <div class="_8Ixb8 _26bkp _1A349"
                                  v-show="isShow[desk.id]=='dan'?true:false">
                                <div class="fxN5P _3F-bF"
                                    @click='cancelXiazhu($event,desk.id,"dan")'
                                    role="presentation">
                                  <div class="_2FMNa"></div>
                                </div>
                                <div class="fxN5P _2iYHj"
                                    role="presentation"
                                    @click='sandXiazhu($event,desk.id,"dan")'>
                                  <div class="_2FMNa"></div>
                                </div>
                              </div>
                            </div>
                            
                              <template v-for="(dian,index) in saibao.dian">
                                <div class="_3VtTn _35xHU undefined"
                                    :key='index'
                                    :class='resultSbBling(dian,"dian")'
                                    data-betcode="DIEVEN"
                                    @click='xiaZhu(dian,desk.id,"dian")'
                                    role="presentation">
                                      <div class="_2bhq2"
                                          v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['dian']&&xiazhu_data[desk.id]['dian'][dian])?true:false">
                                        <div class="_3f0jL">
                                          {{xiazhu_data[desk.id]&&xiazhu_data[desk.id]['dian']?xiazhu_data[desk.id]['dian'][dian]:0}}
                                        </div>
                                      </div>
                                      <div class="_8Ixb8 _26bkp _1A349"
                                          v-show="isShow[desk.id]==('dian'+dian)?true:false">
                                        <div class="fxN5P _3F-bF"
                                            @click='cancelXiazhu($event,desk.id,dian)'
                                            role="presentation">
                                          <div class="_2FMNa"></div>
                                        </div>
                                        <div class="fxN5P _2iYHj"
                                            role="presentation"
                                            @click='sandXiazhu($event,desk.id,dian)'>
                                          <div class="_2FMNa"></div>
                                        </div>
                                      </div>
                                  </div>
                              </template>
                             </template>
                             <!-- 第二页 -->
                             <template v-if='saibaoPage==2?true:false'>
                               <div class="_3VtTn _38csR undefined" data-betcode="PAYTABLE-DITW" role="presentation"></div>
                                <template v-for="(dian,index) in saibao.chang_pai">
                                  <div class="_3VtTn _1DaCP undefined"
                                      data-betcode="DIDOU1"
                                      :class='resultSbBling(dian,"chang_pai")'
                                      :key='index'
                                       @click='xiaZhu(dian,desk.id,"chang_pai")'
                                      role="presentation">
                                      <div class="_2bhq2"
                                          v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['chang_pai']&&xiazhu_data[desk.id]['chang_pai'][dian])?true:false">
                                        <div class="_3f0jL">
                                          {{xiazhu_data[desk.id]&&xiazhu_data[desk.id]['chang_pai']?xiazhu_data[desk.id]['chang_pai'][dian]:0}}
                                        </div>
                                      </div>
                                      <div class="_8Ixb8 _26bkp _1A349"
                                          v-show="isShow[desk.id]==('chang_pai'+dian)?true:false">
                                        <div class="fxN5P _3F-bF"
                                            @click='cancelXiazhu($event,desk.id,dian)'
                                            role="presentation">
                                          <div class="_2FMNa"></div>
                                        </div>
                                        <div class="fxN5P _2iYHj"
                                            role="presentation"
                                            @click='sandXiazhu($event,desk.id,dian)'>
                                          <div class="_2FMNa"></div>
                                        </div>
                                      </div>
                                  </div>
                                </template>
                             </template>
                              <!-- 第san页 -->
                              <template v-if='saibaoPage==3?true:false'>
                                  <div class="_3VtTn _38csR undefined" data-betcode="PAYTABLE-DIDOU" role="presentation"></div>
                                  <template v-for="(dian,index) in saibao.duan_pai">
                                      <div class="_3VtTn _1Uauv undefined"
                                        data-betcode="DITRI1"
                                         :class='resultSbBling(dian,"duan_pai")'
                                        @click='xiaZhu(dian,desk.id,"duan_pai")'
                                        role="presentation">
                                        <div class="_2bhq2"
                                            v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['duan_pai']&&xiazhu_data[desk.id]['duan_pai'][dian])?true:false">
                                          <div class="_3f0jL">
                                            {{xiazhu_data[desk.id]&&xiazhu_data[desk.id]['duan_pai']?xiazhu_data[desk.id]['duan_pai'][dian]:0}}
                                          </div>
                                        </div>
                                        <div class="_8Ixb8 _26bkp _1A349"
                                            v-show="isShow[desk.id]==('duan_pai'+dian)?true:false">
                                          <div class="fxN5P _3F-bF"
                                              @click='cancelXiazhu($event,desk.id,dian)'
                                              role="presentation">
                                            <div class="_2FMNa"></div>
                                          </div>
                                          <div class="fxN5P _2iYHj"
                                              role="presentation"
                                              @click='sandXiazhu($event,desk.id,dian)'>
                                            <div class="_2FMNa"></div>
                                          </div>
                                        </div>
                                     </div>
                                  </template>
                                  <div class="_3VtTn _38csR undefined" data-betcode="PAYTABLE-DIONE" role="presentation"></div>
                                  <template v-for="(dian,index) in saibao.san_jun">
                                      <div class="_3VtTn _1ArGi  iG2xB"
                                       :class='resultSbBling(dian,"san_jun")'
                                        data-betcode="DITRI6"
                                         @click='xiaZhu(dian,desk.id,"san_jun")'
                                        role="presentation">
                                        <div class="_2bhq2"
                                            v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['san_jun']&&xiazhu_data[desk.id]['san_jun'][dian])?true:false">
                                          <div class="_3f0jL">
                                            {{xiazhu_data[desk.id]&&xiazhu_data[desk.id]['san_jun']?xiazhu_data[desk.id]['san_jun'][dian]:0}}
                                          </div>
                                        </div>
                                        <div class="_8Ixb8 _26bkp _1A349"
                                            v-show="isShow[desk.id]==('san_jun'+dian)?true:false">
                                          <div class="fxN5P _3F-bF"
                                              @click='cancelXiazhu($event,desk.id,dian)'
                                              role="presentation">
                                            <div class="_2FMNa"></div>
                                          </div>
                                          <div class="fxN5P _2iYHj"
                                              role="presentation"
                                              @click='sandXiazhu($event,desk.id,dian)'>
                                            <div class="_2FMNa"></div>
                                          </div>
                                        </div>
                                    </div>
                                  </template>
                              </template>
                              <!-- 第四页 -->
                              <template v-if='saibaoPage==4?true:false'>
                                <div class="_3VtTn D3Su3 undefined" data-betcode="PAYTABLE-DITRI-1" role="presentation"></div>
                                  <template v-for="(dian,index) in saibao.wei_pai1"> 
                                    <div class="_3VtTn _2VPbQ undefined" 
                                    data-betcode="DITRI1" 
                                    :class='resultSbBling(dian,"wei_pai")'
                                    @click='xiaZhu(dian,desk.id,"wei_pai")'
                                    role="presentation">
                                      <div class="_2bhq2"
                                          v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['wei_pai']&&xiazhu_data[desk.id]['wei_pai'][dian])?true:false">
                                        <div class="_3f0jL">
                                          {{xiazhu_data[desk.id]&&xiazhu_data[desk.id]['wei_pai']?xiazhu_data[desk.id]['wei_pai'][dian]:0}}
                                        </div>
                                      </div>
                                      <div class="_8Ixb8 _26bkp _1A349"
                                          v-show="isShow[desk.id]==('wei_pai'+dian)?true:false">
                                        <div class="fxN5P _3F-bF"
                                            @click='cancelXiazhu($event,desk.id,dian)'
                                            role="presentation">
                                          <div class="_2FMNa"></div>
                                        </div>
                                        <div class="fxN5P _2iYHj"
                                            role="presentation"
                                            @click='sandXiazhu($event,desk.id,dian)'>
                                          <div class="_2FMNa"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </template>
                                  <div class="_3VtTn D3Su3 undefined" data-betcode="PAYTABLE-DITRI-0" role="presentation"></div>
                                  <div class="_3VtTn uXUnj uXUnj" 
                                      @click='xiaZhu("quan_pai",desk.id)'
                                      :class='resultSbBling("quan_pai")'
                                      data-betcode="DITRI0" role="presentation">
                                      <div class="_2bhq2"
                                          v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['quan_pai'])?true:false">
                                        <div class="_3f0jL">
                                          {{xiazhu_data[desk.id]&&xiazhu_data[desk.id]['quan_pai']?xiazhu_data[desk.id]['quan_pai']:0}}
                                        </div>
                                      </div>
                                      <div class="_8Ixb8 _26bkp _1A349"
                                          v-show="isShow[desk.id]=='quan_pai'?true:false">
                                        <div class="fxN5P _3F-bF"
                                            @click='cancelXiazhu($event,desk.id,"quan_pai")'
                                            role="presentation">
                                          <div class="_2FMNa"></div>
                                        </div>
                                        <div class="fxN5P _2iYHj"
                                            role="presentation"
                                            @click='sandXiazhu($event,desk.id,"quan_pai")'>
                                          <div class="_2FMNa"></div>
                                        </div>
                                      </div>
                                  </div>
                                  <div class="_3VtTn D3Su3 undefined" data-betcode="PAYTABLE-DITRI-2" role="presentation"></div>
                                  <template v-for="(dian,index) in saibao.wei_pai2"> 
                                    <div class="_3VtTn _2VPbQ _28hsC" 
                                    :class='resultSbBling(dian,"wei_pai")'
                                     @click='xiaZhu(dian,desk.id,"wei_pai")'
                                    data-betcode="DITRI1" role="presentation">
                                      <div class="_2bhq2"
                                          v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['wei_pai']&&xiazhu_data[desk.id]['wei_pai'][dian])?true:false">
                                        <div class="_3f0jL">
                                          {{xiazhu_data[desk.id]&&xiazhu_data[desk.id]['wei_pai']?xiazhu_data[desk.id]['wei_pai'][dian]:0}}
                                        </div>
                                      </div>
                                      <div class="_8Ixb8 _26bkp _1A349"
                                          v-show="isShow[desk.id]==('wei_pai'+dian)?true:false">
                                        <div class="fxN5P _3F-bF"
                                            @click='cancelXiazhu($event,desk.id,dian)'
                                            role="presentation">
                                          <div class="_2FMNa"></div>
                                        </div>
                                        <div class="fxN5P _2iYHj"
                                            role="presentation"
                                            @click='sandXiazhu($event,desk.id,dian)'>
                                          <div class="_2FMNa"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </template>
                              </template>
                          </template>
                         <!-- 龙虎咪牌百家乐 -->
                        <template v-if="canvas_desk.indexOf(desk.id+'')!==-1?true:false"> 
                        <!-- 如果是龙虎 -->
                        <template v-if="diff_desk_list.lh_desk_list.indexOf(desk.id+'')!==-1?true:false">
                          <div class="_3VtTn _3KFXv"
                              :class='desk_result[desk.id] && desk_result[desk.id]["long"]=="1"?"_13246" :"" '
                              @click='xiaZhu("long",desk.id)'
                              data-betcode="DTDRAG"
                              role="presentation">
                            <div class="_2bhq2"
                                v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['long'])?true:false">
                              <div class="_3f0jL">
                                {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['long']:0}}
                              </div>
                            </div>
                            <div class="_8Ixb8 _26bkp _1A349"
                                v-show="isShow[desk.id]=='long'?true:false">
                              <div class="fxN5P _3F-bF"
                                  @click='cancelXiazhu($event,desk.id,"long")'
                                  role="presentation">
                                <div class="_2FMNa"></div>
                              </div>
                              <div class="fxN5P _2iYHj"
                                  role="presentation"
                                  @click='sandXiazhu($event,desk.id,"long")'>
                                <div class="_2FMNa"></div>
                              </div>
                            </div>
                          </div>
                          <!-- longhu he -->
                          <div class="_3VtTn _3f0ig"
                              data-betcode="DTTIE"
                              @click='xiaZhu("he",desk.id)'
                              :class='desk_result[desk.id] && desk_result[desk.id]["he"]=="1"?"_13246" :"" '
                              role="presentation">
                            <div class="_2bhq2"
                                v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['he'])?true:false">
                              <div class="_3f0jL">
                                {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['he']:0}}
                              </div>
                            </div>
                            <div class="_8Ixb8 _26bkp _1A349"
                                v-show="isShow[desk.id]=='he'?true:false">
                              <div class="fxN5P _3F-bF"
                                  @click='cancelXiazhu($event,desk.id,"he")'
                                  role="presentation">
                                <div class="_2FMNa"></div>
                              </div>
                              <div class="fxN5P _2iYHj"
                                  role="presentation"
                                  @click='sandXiazhu($event,desk.id,"he")'>
                                <div class="_2FMNa"></div>
                              </div>
                            </div>
                          </div>
                          <!-- longhu hu -->
                          <div class="_3VtTn _2rwfT"
                              :class='desk_result[desk.id] && desk_result[desk.id]["hu"]=="1"?"_13246" :"" '
                              @click='xiaZhu("hu",desk.id)'
                              data-betcode="DTTIGR"
                              role="presentation">
                            <div class="_2bhq2"
                                v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['hu'])?true:false">
                              <div class="_3f0jL">
                                {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['hu']:0}}
                              </div>
                            </div>
                            <div class="_8Ixb8 _26bkp _1A349"
                                v-show="isShow[desk.id]=='hu'?true:false">
                              <div class="fxN5P _3F-bF"
                                  @click='cancelXiazhu($event,desk.id,"hu")'
                                  role="presentation">
                                <div class="_2FMNa"></div>
                              </div>
                              <div class="fxN5P _2iYHj"
                                  role="presentation"
                                  @click='sandXiazhu($event,desk.id,"hu")'>
                                <div class="_2FMNa"></div>
                              </div>
                            </div>
                          </div>
                        </template>
                        <!-- 如果是百家乐 咪牌 -->
                        <template v-if="ba_mipai_desk.indexOf(desk.id+'')!==-1?true:false">
                          <div class="_3VtTn _1DxU9"
                              :class='desk_result[desk.id] && desk_result[desk.id]["xian"]=="1"?"_13246" :"" '
                              data-betcode="BADEAL"
                              @click='xiaZhu("xian",desk.id)'
                              role="presentation">
                            <div class="_2bhq2"
                                v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['xian'])?true:false">
                              <div class="_3f0jL">
                                {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['xian']:0}}
                              </div>
                            </div>
                            <div class="_8Ixb8 _26bkp _1A349"
                                v-show="isShow[desk.id]=='xian'?true:false">
                              <div class="fxN5P _3F-bF"
                                  @click='cancelXiazhu($event,desk.id,"xian")'
                                  role="presentation">
                                <div class="_2FMNa"></div>
                              </div>
                              <div class="fxN5P _2iYHj"
                                  role="presentation"
                                  @click='sandXiazhu($event,desk.id,"xian")'>
                                <div class="_2FMNa"></div>
                              </div>
                            </div>
                          </div>
                          <!-- 下注 -->
                          <div class="_3VtTn _8EeBt"
                              :class='desk_result[desk.id] && desk_result[desk.id]["zhuang"]=="1"?"_13246" :"" '
                              data-betcode="BABANK"
                              @click='xiaZhu("zhuang",desk.id)'
                              role="presentation">
                            <div class="_2bhq2"
                                v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['zhuang'])?true:false">
                              <div class="_3f0jL">
                                {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['zhuang']:0}}
                              </div>
                            </div>
                            <div class="_8Ixb8 _26bkp _1A349"
                                v-show="isShow[desk.id]=='zhuang'?true:false">
                              <div class="fxN5P _3F-bF"
                                  @click='cancelXiazhu($event,desk.id,"zhuang")'
                                  role="presentation">
                                <div class="_2FMNa"></div>
                              </div>
                              <div class="fxN5P _2iYHj"
                                  role="presentation"
                                  @click='sandXiazhu($event,desk.id,"zhuang")'>
                                <div class="_2FMNa"></div>
                              </div>
                            </div>

                          </div>
                          <div class="_3VtTn _11_j6"
                              data-betcode="BAPPA"
                              :class='desk_result[desk.id] && desk_result[desk.id]["xian_dui"]=="1"?"_13246" :"" '
                              @click='xiaZhu("xian_dui",desk.id)'
                              role="presentation">
                            <div class="_2bhq2"
                                v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['xian_dui'])?true:false">
                              <div class="_3f0jL">
                                {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['xian_dui']:0}}
                              </div>
                            </div>
                            <div class="_8Ixb8 _26bkp _1A349"
                                v-show="isShow[desk.id]=='xian_dui'?true:false">
                              <div class="fxN5P _3F-bF"
                                  @click='cancelXiazhu($event,desk.id,"xian_dui")'
                                  role="presentation">
                                <div class="_2FMNa"></div>
                              </div>
                              <div class="fxN5P _2iYHj"
                                  role="presentation"
                                  @click='sandXiazhu($event,desk.id,"xian_dui")'>
                                <div class="_2FMNa"></div>
                              </div>
                            </div>
                          </div>
                          <div class="_3VtTn woPRp"
                              :class='desk_result[desk.id] && desk_result[desk.id]["he"]=="1"?"_13246" :"" '
                              data-betcode="BATIE"
                              @click='xiaZhu("he",desk.id)'
                              role="presentation">
                            <div class="_2bhq2"
                                v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['he'])?true:false">
                              <div class="_3f0jL">
                                {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['he']:0}}
                              </div>
                            </div>
                            <div class="_8Ixb8 _26bkp _1A349"
                                v-show="isShow[desk.id]=='he'?true:false">
                              <div class="fxN5P _3F-bF"
                                  @click='cancelXiazhu($event,desk.id,"he")'
                                  role="presentation">
                                <div class="_2FMNa"></div>
                              </div>
                              <div class="fxN5P _2iYHj"
                                  role="presentation"
                                  @click='sandXiazhu($event,desk.id,"he")'>
                                <div class="_2FMNa"></div>
                              </div>
                            </div>
                          </div>
                          <div class="_3VtTn _3Ln9B"
                              data-betcode="BABPA"
                              :class='desk_result[desk.id] && desk_result[desk.id]["zhuang_dui"]=="1"?"_13246" :"" '
                              @click='xiaZhu("zhuang_dui",desk.id)'
                              role="presentation">
                            <div class="_2bhq2"
                                v-show="(xiazhu_data[desk.id]&&xiazhu_data[desk.id]['zhuang_dui'])?true:false">
                              <div class="_3f0jL">
                                {{xiazhu_data[desk.id]?xiazhu_data[desk.id]['zhuang_dui']:0}}
                              </div>
                            </div>
                            <div class="_8Ixb8 _26bkp _1A349"
                                v-show="isShow[desk.id]=='zhuang_dui'?true:false">
                              <div class="fxN5P _3F-bF"
                                  @click='cancelXiazhu($event,desk.id,"zhuang_dui")'
                                  role="presentation">
                                <div class="_2FMNa"></div>
                              </div>
                              <div class="fxN5P _2iYHj"
                                  role="presentation"
                                  @click='sandXiazhu($event,desk.id,"zhuang_dui")'>
                                <div class="_2FMNa"></div>
                              </div>
                            </div>
                          </div>
                        </template>
                        </template>
               
                        <div class="jfyQz"  v-if="diff_desk_list.sb_desk_list.indexOf(desk.id+'')!==-1?true:false"></div>
                      </div>
                  </div>
                 <!-- 输赢的通知 -->
                  <div class="_2IpHJ">
                    <!-- 轮盘 -->
                    <template v-if='desk.id==20?true:false'> 
                      <div class="O-L5P" v-if='desk_status[desk.id]&&desk_status[desk.id]["text"]=="结算中"?true:false'>
                        <div class="kNAvM">
                          <div class="_1IvMt" v-if="lpresult['ball']==0?false:true">
                            <div class="_3fZDS " :class="lpresult['hong']==1?'OjgYi' :'Ss66R'">
                              <div class="_2bj-I _3OEdE" >
                                {{lpresult['ball']==0?'':lpresult['ball']}}</div>
                              </div>
                          </div>
                          <div class="_2aGkK" v-if="lpresult['ball']==0?false:true">
                            <div class="_15HMj">
                              <div class="_2bj-I">{{lpresult['dan']==0?'双':'单'}}</div></div>
                            <div class="_15HMj">
                              <div class="_2bj-I">{{lpresult['da']==0?'小':'大'}}</div></div>
                            <div class="_15HMj">
                              <div class="_2bj-I">{{lpresult['zu_1']==1?'组 1':lpresult['zu_2']==1?'组 2':'组 3'}}</div></div>
                            <div class="_15HMj">
                              <div class="_2bj-I">{{lpresult['hang_1']==1?'行 1':lpresult['hang_2']==1?'行 2':'行 3'}}</div></div>
                          </div>
                        </div>
                      </div>
                    </template> 
                    <!-- shaibao -->
                    <template v-if='desk.id==16?true:false'> 
                      <div class="O-L5P" v-if='desk_status[desk.id]&&desk_status[desk.id]["text"]=="结算中"?true:false'>
                        <div class="_1u7Oy">
                          <div class="YTd1m">
                            <div class="_1lcuP">
                               <template v-if="saibaoresult['result']?true:false">
                                  <div class="nzA04  _28-KX _13TU1" :class='saibaoresult["cards"][0]?saiBaoCard[saibaoresult["cards"][0]]:""'></div>
                                  <div class="nzA04  _28-KX _2caYM" :class='saibaoresult["cards"][1]?saiBaoCard[saibaoresult["cards"][1]]:""'></div>
                                  <div class="nzA04  _28-KX _2uTga" :class='saibaoresult["cards"][2]?saiBaoCard[saibaoresult["cards"][2]]:""'></div>
                               </template>
                            </div>
                          </div>
                          <div class="fggwu">
                            <div class="_2rUbi">
                              
                                <div class="_3OM9Q _2cHZA">{{saibaoresult['dian']?saibaoresult['dian']:''}}</div>
                                <div class="_3OM9Q _18Qk0">{{saibaoresult['dan'] ==1?'单':saibaoresult['shuang'] ==1?'双':''}}</div>
                                <div class="_3OM9Q _18Qk0">{{saibaoresult['da'] ==1?'大':saibaoresult['xiao'] ==1?"小":""}}</div>
                                <div class="_3OM9Q _18Qk0">{{saibaoresult['wei_pai'] ==1?'围':''}}</div>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>  
                     <!-- 输赢 -->
                    <div class="_1Zx9m"
                        v-if="bet_result[desk.id]&&bet_result[desk.id]['status']=='1'&&bet_result[desk.id]['he']?true:false">和</div>
                    <!-- 输 -->
                    <div class="_2DvJY"
                        v-if="bet_result[desk.id]&&bet_result[desk.id]['status']=='1'&&bet_result[desk.id]['lose']?true:false">
                      <div class="_3-tgk">{{bet_result[desk.id]&&bet_result[desk.id]['lose']?bet_result[desk.id]['lose']:''}}</div>
                    </div>
                    <!-- 赢 -->
                    <div class="_2DvJY SBKG8"
                        v-if="bet_result[desk.id]&&bet_result[desk.id]['status']=='1'&&bet_result[desk.id]['win']?true:false">
                      <div class="_1n5Gv _1-S9Z">
                        <div class="_3YN-0 _2gqVx">
                          <div class="_17yKL _2NiWQ">赢得</div>
                          <div class="_17yKL zCXj0">赢得</div>
                        </div>
                        <div class="_3YN-0">
                          <div class="_17yKL _2NiWQ _1_B9t">
                            <span>{{bet_result[desk.id]&&bet_result[desk.id]['win']?bet_result[desk.id]['win']:''}}</span>
                          </div>
                          <div class="_17yKL _1_B9t EGrlT">
                            <span>{{bet_result[desk.id]&&bet_result[desk.id]['win']? '+'+bet_result[desk.id]['win']:''}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <template v-if="canvas_desk.indexOf(desk.id+'')!==-1?true:false">  
                      <!-- canvas -->
                      <div class="_3TRtO vxXxO luzhu"
                          v-show='desk_status[desk.id]&&desk_status[desk.id]["status"]=="1"?true:false'>
                        <div class="_1mw7U">
                          <div class="_1PQtx _22wzQ"
                              @click="zhuangyc(desk.id)"
                              role="button"
                              tabindex="0">
                            <div class="_ovdG">{{desk.id==17?"龙":"庄"}}</div>
                            <!-- 露珠的预测 -->
                            <div class="_1awLq _27nmx "
                                :class='yuce_result[desk.id]?yuce_result[desk.id]["zhuang_one"]:"J0TDv"'></div>
                            <div class="_1awLq _25-Y2 "
                                :class='yuce_result[desk.id]?yuce_result[desk.id]["zhuang_two"]:"J0TDv"'></div>
                            <div class="_1awLq _1PNv_ J0TDv"
                                :class='yuce_result[desk.id]?yuce_result[desk.id]["zhuang_three"]:"J0TDv"'></div>
                          </div>
                          <div class="_1PQtx vc95X"
                               @click="xianyc(desk.id)"
                              role="button"
                              tabindex="0">
                            <div class="_ovdG">{{desk.id==17?"虎":"闲"}}</div>
                            <div class="_1awLq _27nmx "
                                :class='yuce_result[desk.id]?yuce_result[desk.id]["xian_one"]:"J0TDv"'></div>
                            <div class="_1awLq _25-Y2 "
                                :class='yuce_result[desk.id]?yuce_result[desk.id]["xian_two"]:"J0TDv"'></div>
                            <div class="_1awLq _1PNv_ "
                                :class='yuce_result[desk.id]?yuce_result[desk.id]["xian_three"]:"J0TDv"'></div>
                          </div>
                        </div>
                        <div class="_2dIpe">
                          <div class="_13bxE">
                            <div class="_15uun">
                              <div class="_13T1H" style="position:relative">
                                <canvas ref='a_canvas1'
                                        :tabindex="desk.id"
                                        width="675"
                                        height="90"
                                        style="position:absolute;top:0px;left:0px;touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                                <canvas ref='a_canvas'
                                        :tabindex="desk.id"
                                        width="675"
                                        height="90"
                                        style="touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                              </div>
                              <div class="_3hAwz">
                                <div class="_1ZvlT" style="position:relative">
                                  <canvas ref='b_canvas1'
                                          :tabindex="desk.id"
                                          width="225"
                                          height="72"
                                          style="position:absolute;top:0px;left:0px;touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                                  <canvas ref='b_canvas'
                                          :tabindex="desk.id"
                                          width="225"
                                          height="72"
                                          style="touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                                </div>
                                <div class="_1YU6F" style="position:relative">
                                  <canvas ref='c_canvas1'
                                          :tabindex="desk.id"
                                          width="225"
                                          height="72"
                                          style="position:absolute;top:0px;left:0px;touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                                  <canvas ref='c_canvas'
                                          :tabindex="desk.id"
                                          width="225"
                                          height="72"
                                          style="touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                                </div>
                                <div class="_3b3HF" style="position:relative">
                                  <canvas ref='d_canvas1'
                                          :tabindex="desk.id"
                                          width="225"
                                          height="72"
                                          style="position:absolute;top:0px;left:0px;touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                                  <canvas ref='d_canvas'
                                          :tabindex="desk.id"
                                          width="225"
                                          height="72"
                                          style="touch-action: none; width: 100%; height: 100%; cursor: inherit;"></canvas>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- pai -->
                      <div class="O-L5P pai"
                          v-show='desk_status[desk.id]&&desk_status[desk.id]["status"]=="1"?false:true'>
                        <template v-if='desk.id ==17?true:false'>
                          <div class="_2DI9G">
                            <div class="_2spXT">
                              <div class="IAAO1"
                                  :class='desk_result[desk.id] && desk_result[desk.id]["hu"]=="1"?"_3hAf-" :"" '>
                                <span class="_2EwMf">虎</span>
                                <div class="_3DK7r  _2_MbS"
                                    :class='desk_result[desk.id] && desk_result[desk.id]["hu_count"]? "" :"_1KdJO"'>
                                  {{desk_result[desk.id] && desk_result[desk.id]["hu_count"]?desk_result[desk.id]["hu_count"]:0}}
                                </div>
                                <div class="_15Rgx">
                                  <span>
                                    <div class="_2I7lr  EnxDB _3VX8l"
                                        v-show="desk_pai[desk.id]&&desk_pai[desk.id]['hu']?true:false"
                                        :class="desk_pai[desk.id]&&desk_pai[desk.id]['hu']?desk_pai[desk.id]['hu']: ''">
                                    </div>
                                  </span>
                                </div>
                              </div>
                              <div class="_3p0JH"
                                  :class='desk_result[desk.id] && desk_result[desk.id]["long"]=="1"?"_3hAf-" :"" '>
                                <div class="_2EwMf">
                                  龙
                                </div>
                                <div class="_3DK7r  _2_MbS"
                                    :class='desk_result[desk.id] && desk_result[desk.id]["long_count"]? "" :"_1KdJO" '>
                                  {{desk_result[desk.id] && desk_result[desk.id]["long_count"]?desk_result[desk.id]["long_count"]:0}}
                                </div>
                                <div class="_15Rgx">
                                  <span>
                                    <div class="_2I7lr  EnxDB _3VX8l"
                                        v-show="desk_pai[desk.id]&&desk_pai[desk.id]['long']?true:false"
                                        :class="desk_pai[desk.id]&&desk_pai[desk.id]['long']?desk_pai[desk.id]['long']: ''"></div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </template>
                        <template v-if='ba_mipai_desk.indexOf(desk.id +"")!==-1?true:false'>

                          <div class="_3O51A">
                            <div class="_215Mm">
                              <!-- xian -->
                              <div class="_2rFXP"
                                  :class='desk_result[desk.id] && desk_result[desk.id]["xian"]=="1"?"_3LZ_7" :"" '>
                                <div class="oX7x6">闲</div>
                                <div class="iuP_3"
                                    :class='desk_result[desk.id] && desk_result[desk.id]["xian_count"]? "" :"-h3Ej" '>{{desk_result[desk.id] && desk_result[desk.id]["xian_count"]?desk_result[desk.id]["xian_count"]:0}}</div>
                                <div class="_37xl3">

                                  <span>
                                    <!-- one -->
                                    <div v-show="desk_pai[desk.id]&&desk_pai[desk.id]['left']['one']?true:false"
                                        :class="desk_pai[desk.id]&&desk_pai[desk.id]['left']['one']?desk_pai[desk.id]['left']['one']: ''"
                                        class="_2I7lr  _3DU1U _9T9Vf">
                                    </div>
                                    <!-- two -->
                                    <div :class="desk_pai[desk.id]&&desk_pai[desk.id]['left']['two']?desk_pai[desk.id]['left']['two']: ''"
                                        class="_2I7lr  _3DU1U _3D5UH"
                                        v-show="desk_pai[desk.id]&&desk_pai[desk.id]['left']['two']?true:false">

                                    </div>
                                  </span>
                                  <span>
                                    <!-- three -->
                                    <div v-show="desk_pai[desk.id]&&desk_pai[desk.id]['left']['three']?true:false"
                                        :class="desk_pai[desk.id]&&desk_pai[desk.id]['left']['three']?desk_pai[desk.id]['left']['three']: ''"
                                        class="_2I7lr _3DU1U "></div>
                                  </span>
                                </div>
                              </div>
                              <!-- zhuang -->
                              <div class="_3ZAa7"
                                  :class='desk_result[desk.id] && desk_result[desk.id]["zhuang"]=="1"?"_3LZ_7" :"" '>
                                <div class="oX7x6">庄</div>
                                <div class="iuP_3"
                                    :class='desk_result[desk.id] && desk_result[desk.id]["zhuang_count"]? "" :"-h3Ej" '>{{desk_result[desk.id] && desk_result[desk.id]["zhuang_count"]?desk_result[desk.id]["zhuang_count"]:0}}</div>
                                <div class="_37xl3">

                                  <span>
                                    <div v-show="desk_pai[desk.id]&&desk_pai[desk.id]['right']['one']?true:false"
                                        :class="desk_pai[desk.id]&&desk_pai[desk.id]['right']['one']?desk_pai[desk.id]['right']['one']: ''"
                                        class="_2I7lr  _3DU1U _9T9Vf ">
                                    </div>
                                    <div v-show="desk_pai[desk.id]&&desk_pai[desk.id]['right']['two']?true:false"
                                        :class="desk_pai[desk.id]&&desk_pai[desk.id]['right']['two']?desk_pai[desk.id]['right']['two']: ''"
                                        class="2I7lr  _3DU1U _3D5UH "></div>
                                  </span>
                                  <span>
                                    <div v-show="desk_pai[desk.id]&&desk_pai[desk.id]['right']['three']?true:false"
                                        :class="desk_pai[desk.id]&&desk_pai[desk.id]['right']['three']?desk_pai[desk.id]['right']['three']: ''"
                                        class="2I7lr  _3DU1U rWt8"></div>
                                  </span>
                                  <!-- 龙虎 -->
                                </div>
                              </div>
                            </div>
                          </div>
                        </template>
                      </div>
                    </template>
                  </div>
                <!-- 及时彩池 -->
                <div class="_7K3O2 caichi"
                     v-show='isCaiChiShow[desk.id]?true:false'>
                  <!-- 百家乐 -->
                  <template v-if='ba_mipai_desk.indexOf(desk.id+"")!==-1?true:false'>
                  <div class="yUiBb caichi_left"><cai-chi class="_2kP8w"  :tocaichi='desk.id'></cai-chi></div>
                    <lei-ji :toleiji='desk.id'></lei-ji>
                  </template>
                  <!-- 龙虎 -->
                  <template v-if='desk.id==17?true:false'>
                    <div class="yUiBb"> <lh-cai-chi></lh-cai-chi></div>
                    <lh-lei-ji></lh-lei-ji>
                  </template>
                  <!-- saibao -->
                  <template v-if='diff_desk_list.sb_desk_list.indexOf(desk.id+"")!==-1?true:false'>
                    <sb-cai-chi></sb-cai-chi>
                    <sb-lei-ji></sb-lei-ji>
                  </template>
                  <!-- lunpan -->
                  <template v-if='diff_desk_list.lp_desk_list.indexOf(desk.id+"")!==-1?true:false'>
                    <lp-cai-chi></lp-cai-chi>      
                    <lp-lei-ji></lp-lei-ji>
                  </template>
                </div>
                <!-- <div class="jfyQz"></div> -->
            </div>
            <div class="_2y12k">
              <div class="eKSsr"
                   :class="isCaiChiShow[desk.id]?'_1Lffs' :'' "
                   role="presentation"
                   @click="caiChiSwicth(desk.id)">即时彩池</div>
              <!-- jackport 弹框-->
              <div class="_2OzfO"
                   v-if="isJackPortShow[desk.id]?true:false">
                <div class="X595_">
                  <span class="XMSao">投注 JACKPOT ?</span>
                </div>
                <div class="_8Ixb8 -jhv4 _1A349">
                  <div class="fxN5P _3F-bF"
                       role="presentation"
                       @click='cancelJP(desk.id)'>
                    <div class="_2FMNa">
                    </div>
                  </div>
                  <div class="fxN5P _2iYHj"
                       role="presentation"
                       @click='xiazhuJP(desk.id)'>
                    <div class="_2FMNa">
                    </div>
                  </div>
                </div>
              </div>

              <!-- saibao按钮  -->
              <div class="XeaQq _2Hipv"
                   v-if='diff_desk_list.sb_desk_list.indexOf(desk.id+"")!==-1?true:false'>
                <div class="vwAKX "
                     :class='saibaoPage===1? "jCmph":"" '
                     role="presentation"
                     @click='saibaoLeft'></div>
                <div class="_1Vb0B">{{saibaoPage}}</div>
                <div class="_1rlPQ"
                     :class='saibaoPage===4? "jCmph":"" '
                     role="presentation"
                     @click='saibaoRight'></div>
              </div>
              <!-- jackport按钮 只有百家乐有 -->
              <div class="_2zYeq "
                   v-if='ba_desk_list.indexOf(desk.id)===-1?false:true'
                   @click="showJackPort(desk.id)"
                   :class="JPclass(desk.id) "
                   role="presentation">
                <div>投注</div>
                &nbsp;JACKPOT&nbsp;10
                <!-- 投注成功显示 -->
                <div class="_2xcaI"
                     v-if='success_JP[desk.id]?true:false'>
                  {{success_JP[desk.id]?success_JP[desk.id]:''}}</div>
              </div>
              <div class="_2Qjlu"
                   @click='enterGame(desk.id)'
                   role="presentation">
                   进入游戏
                   </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import ws from '@/api/socket'
import {name_list,img_list,pailist,ba_desk_list,diff_desk_list,codes,formatCurrency} from '@/utils/deals'
import {chips} from '@/utils/deals'
import CaiChi from '../caichi'//彩池
import LeiJi from '../leiji'
import LhCaiChi from '../lhcaichi'
import LhLeiJi from '../lhleiji'
import SbCaiChi from '../Sbcaichi'
import SbLeiJi from '../Sbleiji'
import LpCaiChi from '../lpcaichi'
import LpLeiJi from '../lpleiji'
import {drawCanvas ,initRoadMap} from '@/api/roadMapMiddle'
import { setTimeout } from 'timers';
// import SaiBaoDesk from './saibaodesk'
// import LunPanDesk from './lunpandesk'
export default {
  name: 'middle',
  components: {
    CaiChi,
    LeiJi,
    LhCaiChi,
    LhLeiJi,
    LpCaiChi,
    LpLeiJi,
    SbCaiChi,
    SbLeiJi
  },
  data () {
    return {
       chipnotice: false,
      saibao:{dian:{4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',11:'11',12:'12',13:'13',14:'14',15:'15',16:'16',17:'17',18:'18'},
              chang_pai:{0:'12',1:'13',2:"14",3:"15",4:"16",5:"23",6:"24",7:"25",8:"26",9:"34",10:"35",11:"36",12:"45",13:"46",15:"56"},
              duan_pai:{1:"1",2:"2",3:"3", 4:'4',5:'5',6:'6'},
              san_jun:{1:"1",2:"2",3:"3", 4:'4',5:'5',6:'6'},
              wei_pai1:{1:"1",2:"2",3:"3"},
              wei_pai2:{ 4:'4',5:'5',6:'6'},
              quan_pai:0
        },
      saibaoresult:{"cards": ["0", "0", "0"],"wei_pai": 0,"da": 0,"xiao": 0,"dan": 0,"shuang": 0,"dian": 0},
      saiBaoCard:{1:"_2gBJt",2:"DS5Nz",3:"UF0-_", 4:"_2T_hq ",5:"_1TlBd",6:"dIHcl"},
      saibaoIndex:{1:'dian'},
      pailist:pailist,
      codes:codes,
      canvas_desk: ba_desk_list.concat(diff_desk_list.bp_desk_list, diff_desk_list.lh_desk_list),
      ba_desk_list:ba_desk_list,//百家乐
      diff_desk_list:diff_desk_list,//剩余其他的
      ba_mipai_desk:ba_desk_list.concat(diff_desk_list.bp_desk_list),
      deskVO : [],
      mid_desk :[],
      mid_desk_List:[],
      curr_timer:-1,
      img_list :[],
      name_list:name_list,
      chip:"",//选筹码class
      isBet:{},//下注区是否可用
      chip_num :0,//当前筹码的值
      xiazhu_data:{},//下注数据
      isShow:{},//下注确定弹框
      curr_index:-1,//点击当前桌子
      isCaiChiShow:{},//开关高亮
      isJackPort:{},//jackport是否可以下注 以桌子的下标为索引 true 不能下注 false 可以
      isJackPortShow:{},//jackport弹框 展现
      success_JP:{}, //下注成功则展出
      JP_num:{},//下注成功次数
      desk_status:{},//最上面桌子的状态
      desk_pai:{},//牌
      desk_result:{},//通知结果
      coinStacks:{},//下注成功的历史
      bet_status:{},// 下注后的反馈0123
      bet_status_text:{0:{class:"",text:''},1:{class:"_3GwQI",text:'投注中'},2:{class:"_2d1tt",text:'成功下注'},3:{class:"_1WXRu",text:'投注失败'}},
      bet_result:{},
      failtxt:{},//下注失败的提示语
      selectId:0,//当前的桌子
      selextIndex:0,
      selecdata:{},
      mipaiOpen:{ z_open_one_index : 0,
                  x_open_one_index : 0,
                  z_open_two_index : 0,
                  x_open_two_index : 0,
                  open_index:0
                  },
      mipai:{one_z_a:"",one_z_b:"",one_z_c:"",one_x_a:"",one_x_b:"",one_x_c:"",
             two_z_a:"",two_z_b:"",two_z_c:"",two_x_a:"",two_x_b:"",two_x_c:""},//咪牌翻牌
      yuce_result1:{},
      yuce_result:{},
      totext : {11:"J" ,12:"Q" ,13:"K"},//龙虎
      changedesk:null,
      changeindex:null,
      olddesk_id:null,
      saibaoPage:1,//页数
      pageclass: {'1': ' foXRX ', '2': ' _1LySk ', '3': ' _188Gw ', '4': ' _2c62g '},
      lpresult:{"hong": 0,"hei": 0,	"dan": 0,"shuang": 0,"da": 0,"xiao": 0,"zu_1": 0,	"zu_2": 0,	"zu_3": 0,"hang_1": 0,"hang_2": 0,"hang_3": 0,'ball':0},
      sbreuslt : {
                    "dian": 0,
                    "dan": 0,
                    "shuang": 0,
                    "da": 0,
                    "xiao": 0,
                    "quan_pai": 0,
                    "san_jun": {
                      "1": 0,
                      "2": 0,
                      "3": 0,
                      "4": 0,
                      "5": 0,
                      "6": 0
                    },
                    "chang_pai": {
                      "12": 0,
                      "13": 0,
                      "14": 0,
                      "15": 0,
                      "16": 0,
                      "23": 0,
                      "24": 0,
                      "25": 0,
                      "26": 0,
                      "34": 0,
                      "35": 0,
                      "36": 0,
                      "45": 0,
                      "46": 0,
                      "56": 0
                    },
                    "duan_pai": {
                      "1": 0,
                      "2": 0,
                      "3": 0,
                      "4": 0,
                      "5": 0,
                      "6": 0
                    },
                    "wei_pai": {
                      "1": 0,
                      "2": 0,
                      "3": 0,
                      "4": 0,
                      "5": 0,
                      "6": 0
                    }
                  },
        bottomDate_timer:"",
        gameId:"",
        isZClick:{},
        isXClick:{},
        ycDelay:null,
        yc_value:{},
        yc_count:{},
        c_history_ary:{},
        history_ary:[],
        myGameAudio:document.createElement("audio"),
        game_effect:true,  
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
    zhuangyc:function(id){
      if(this.isZClick[id]){
          return;
      }
      this.isZClick[id] = true;
      if(id==17){
          this.ycRoadMap(2,id)  
      }else{
          this.ycRoadMap(11,id)  
      }
    },
    xianyc:function(id){
      if(this.isZClick[id]){
          return
      }
      this.isZClick[id] = true;
      if(id==17){
          this.ycRoadMap(1,id) 
      }else{
          this.ycRoadMap(19,id)
      }
    },
    ycRoadMap:function (value,id){
      var self = this
      this.yc_count[id] = 0;
      this.yc_value[id] = value;
      //this.ycDelay = setInterval(self.delayYC,500)
        setTimeout(self.delayYC,500,id)
        setTimeout(self.delayYC,1000,id)
        setTimeout(self.delayYC,1500,id)
        setTimeout(self.delayYC,2000,id)
    },
    delayYC:function (id){
      var self = this;
      if(this.yc_count[id]==3){
          this.isZClick[id] = false;
      }
      console.log(this.yc_value,id, this.c_history_ary[id])
      if((this.yc_count[id]%2)==0){
          this.c_history_ary[id].push(this.yc_value[id]);
          console.log(1111)
      }else{
          this.c_history_ary[id].pop();
          console.log(2222)
      }
      initRoadMap(this.c_history_ary[id],id,90,72,{});
      this.yc_count[id]++;
    },
    onEnterDesk:function(){
      console.log('能经了就进单个桌子。。。。。。')
      var self = this;
      var id = self.gameId?self.gameId:self.$store.state.zixuan_gameid

      if(self.$store.state.player && !self.$store.state.player.disposed){
         self.$store.state.player.dispose()
         self.$set(self.$store.state.player,'disposed',true)
      }

      self.$store.dispatch('SetCurrDeskData',{})
      clearInterval(self.bottomDate_timer)
      self.$store.commit('ZIXUANTOGAME','')

      self.$store.commit('ONMEMBERBET',{})

      if(id==20){
        self.$store.dispatch('SetuPage', "LUNPANGAME")
      }else if(id==16){
        self.$store.dispatch('SetuPage', "SHAIBAOGAME")
      } else if(self.canvas_desk.indexOf(id)!==-1){
        self.$store.dispatch('SetuPage', "GAME")
      }else if(id==18){
        self.$store.dispatch('SetuPage', "QUEJIU")
      }
      else if(id==19){
        self.$store.dispatch('SetuPage', "SANGONG")
      }else if(id==21){
        self.$store.dispatch('SetuPage', "DOUNIU")
      }else{
        return
      }
      self.$router.push({ name: 'sunbet', params: { id: id }})
      // 小转台的切换
      if(ba_desk_list.indexOf(id)===-1){
        self.$store.dispatch('SetBaOt', false)
      }else{
        self.$store.dispatch('SetBaOt', true)
      }
      self.$store.commit('GAMEREADY',false)
      this.gameId='';this.$store.state.zixuan_gameid=''
    },

    exitDesk:function(){
      var id = this.gameId?this.gameId:this.$store.state.zixuan_gameid
      console.log('进桌子了。。。。。。',id)
      this.global.sendMessage("enter_desk",{bet_addition_id:this.$store.state.userLimitID,desk_id:id})   
    },
    enterGame:function(id){
      this.gameId = id;
      ws.sendMessage("zixuan_exit_desk")
    },
    showDeal:function(){
      this.$store.dispatch('HistoryShow', 'DEAL')
    },
    saibaoLeft:function(){
      if(this.saibaoPage === 1){
        return
      }else{
        this.saibaoPage--
      }
    },
    saibaoRight:function(){
      if(this.saibaoPage === 4){
        return
      }else{
        this.saibaoPage++
      }
    },
    drop (event,desk_id,index) {
      this.olddesk_id = desk_id
      var changedesk = event.dataTransfer.getData('desk_id')
      this.changedesk = changedesk;
      this.changeindex = index;
      console.log('拖进来的desk_id',event.dataTransfer.getData('desk_id'),this.olddesk_id)
      var olddesk = this.mid_desk.concat()
      var newdesk = this.mid_desk.concat()
      newdesk.splice(this.changeindex,1,parseInt(this.changedesk))

      ws.sendMessage('zixuan_exchange_desk',{bet_addition_id:this.$store.state.userLimitID,from_desk_list:olddesk,target_desk_list:newdesk});
      console.log('当前的desk_id',olddesk, newdesk)

      var url = img_list[Number(changedesk)][this.curr_timer]['imgUrl']
      this.img_list[changedesk] = require(`../../../assets/dealer/${url}.png`)
 
    },
    onExchangeDesk:function(vo){
        // console.log('当前的ExchangeDesk',vo,this.mid_desk);
        // 如果换的桌子没变 就不换了
        var flag = false;
        for(var i = 0 ;i<vo.desk_list.length;i++){
          if(this.mid_desk.indexOf(vo.desk_list[i]+'') ===-1){
            flag = true
          }
        }
        
        if(flag){
          this.mid_desk.splice(this.changeindex,1,parseInt(this.changedesk))
          // console.log("changedesk--------------",this.changedesk)
          ws.sendMessage('desk_info_q', { desk_id: this.changedesk})
          ws.sendMessage('user_luzhu')
        }
        // console.log('当前的ExchangeDesk----------',vo,this.mid_desk);
    },
    dragover (event) {
        event.preventDefault()
    },
    seletcCurr:function(desk_id,index){
      this.selectId = desk_id;
      this.selextIndex = index;
      // this.$store.dispatch('SetCurrDeskId',this.selectId)
      this.seletdata(desk_id,index);
    },
    xiaZhuQuClass:function(desk_id,index){
        //console.log("下注区---class",desk_id,index)
        var  classN;
        if(this.desk_status[desk_id]&&this.desk_status[desk_id]['status']=='1'){
          classN = this.chip
        }else{
          classN = this.isBet[desk_id]
        }
        if(this.diff_desk_list.lh_desk_list.indexOf(desk_id+'')!==-1){
          classN = classN+' _3Rf25'
        }
        if(this.canvas_desk.indexOf(desk_id+'')!==-1){
          classN = classN+' _3UkTG'
        }
        //如果是saibao
        if(desk_id==16){
          classN =classN+" " +this.pageclass[this.saibaoPage] +"_2Bd3I _2F9u9"
        }
         //如果是lunpan
        if(desk_id==20){
          classN =classN+" " +this.pageclass[this.saibaoPage] +"_2ScO7 _2F9u9"
        }
        return classN
    },
    seletdata:function(){
      var desk_id = this.selectId
      var index = this.selextIndex
      var desk = this.mid_desk_List[index]
      var self = this
      var selecdata = {};
      self.$set(self.$store.state.selectDeskData,'desk_id',desk_id);
      self.$set(self.$store.state.selectDeskData,'name',this.codes[desk.code.substr(0,2)]);
      self.$set(self.$store.state.selectDeskData,'jushu',desk.code.substr(0,2) =='BP' ||desk.code.substr(0,2) =='BA'?desk.code.substr(2,2):'');
      self.$set(self.$store.state.selectDeskData,'boot',desk.boot);
      self.$set(self.$store.state.selectDeskData,'inning',desk.inning)
      self.$set(self.$store.state.selectDeskData,'status', self.desk_status[desk_id]["status"])
      self.$set(self.$store.state.selectDeskData,'bet_interval', self.desk_status[desk_id]['bet_interval'])
      self.$set(self.$store.state.selectDeskData,'text', self.desk_status[desk_id]['text']);
      self.$set(self.$store.state.selectDeskData,'video_url_1', desk.video_url_1);
      self.$set(self.$store.state.selectDeskData,'video_url_2', desk.video_url_2);
      this.$store.dispatch('SetCurrDeskData',self.$store.state.selectDeskData)
     
      //console.log("deskright===="+JSON.stringify( self.$store.state.selectDeskData));
    },
    JPclass:function(desk_id){
      //jkprot 如果下注区下注 这个jk不能下注
      
      if(this.desk_status[desk_id]['status']=='1' ){
        if(this.isShow[desk_id]){
          return '_1tHSi'
        }
        if(this.isJackPortShow[desk_id]){
          return '_1Lffs'
        }else{
          return ''
        }
      }else{
        return '_1tHSi'
      } 
    },
    cancelJP:function(desk_id){
     var self = this;
     self.$set(self.isJackPortShow,desk_id,false)
     this.playGameEffect("./static/sound/se/click_btn.mp3",true)
    },
    xiazhuJP:function(desk_id){
      var self = this;
      ws.sendMessage("jack_pot_bet",{desk_id:desk_id});
      self.$set(self.isJackPortShow,desk_id,false)
      self.$set(self.bet_status,desk_id,'1');//正在发送
      this.playGameEffect("./static/sound/se/click_btn.mp3",true)
    },
    showJackPort:function(desk_id){
      var self = this;
      self.$set(self.isJackPortShow,desk_id,'true')
    },
    caiChiSwicth:function(desk_id){
      //彩池的 展现 高亮
      var self = this;
      self.$set(self.isCaiChiShow,desk_id,!self.isCaiChiShow[desk_id])
    },
    cancelXiazhu:function(event,index,qu){
      //取消下注
      this.playGameEffect("./static/sound/se/click_btn.mp3",true)
      this.clearFailBet(index)
      event.cancelBubble = true
      this.hide(index)
    },
    sandXiazhu:function(event,index,qu){
      this.playGameEffect("./static/sound/se/click_btn.mp3",true)
      var self = this;
      //发送下注
      let bet = {}
      //shaibao
      if(index ==16){
        for(var name in self.xiazhu_data[index]){
          if(typeof (self.xiazhu_data[index][name]) !="object"){
            //如果不是对象
            if(self.coinStacks[index]&& self.coinStacks[index][name]){
              bet[name] = self.xiazhu_data[index][name]-self.coinStacks[index][name]
            }else{
              bet[name] = self.xiazhu_data[index][name]
            }
          }else{
            //如果是对象
            for(var key in self.xiazhu_data[index][name]){
              if( self.coinStacks[index]&&self.coinStacks[index][key]&& self.coinStacks[index][name][key]){
                bet[name][key] = self.xiazhu_data[index][name][key]-self.coinStacks[index][name][key]
              }else{
                if(!bet[name]){
                  self.$set(bet,name,{})
                }
                bet[name][key] = self.xiazhu_data[index][name][key]
              }
            }
          }
        }
      }else{

        for(var name in self.xiazhu_data[index]){
          if(self.coinStacks[index]&& self.coinStacks[index][name]){
            bet[name] = self.xiazhu_data[index][name]-self.coinStacks[index][name]
          }else{
            bet[name] = self.xiazhu_data[index][name]
          }
        }
      }

      self.$set(self.bet_status,index,'1');//正在发送
      this.hide(index)
      // 如果是龙虎
     if(index==17){
        ws.sendMessage("longhu_bet",{desk_id:index,bets:bet});
      }else if(index ==16){
        ws.sendMessage("shaibao_bet",{desk_id:index,bets:bet});
      }else if(index ==20){
        ws.sendMessage("lunpan_bet",{desk_id:index,bets:bet});
      }
      else{
        ws.sendMessage("baijiale_bet",{desk_id:index,bets:bet});
      }
      console.log('下注发送',bet)
      event.cancelBubble = true
    },
    hide:function(index){
      var self = this;
      self.$set(self.isShow,index,false);
      self.curr_index=-1;
      //console.log(self.isShow);
    },
    xiaZhu:function(qu,index,dian){
      //下注 百家乐
      var self = this;
      if(!self.chip_num){
        return
      }
      self.curr_index = index;
      self.playGameEffect("./static/sound/se/click_btn.mp3",true)
      if(!self.xiazhu_data[index]){
        self.$set(self.xiazhu_data,index,{})
      }
      // saibao
      if(index == '16' && dian){
        self.$set(self.isShow,index,dian+qu);
        if(!self.xiazhu_data[index][dian]){
          self.$set(self.xiazhu_data[index],dian,{})
        }
        if(!self.xiazhu_data[index][dian][qu]){
          self.$set(self.xiazhu_data[index][dian],qu,0)
        }
        self.$set(self.xiazhu_data[index][dian],qu,self.xiazhu_data[index][dian][qu]+self.chip_num)
  
      }else{

        self.$set(self.isShow,index,qu);
        if(!self.xiazhu_data[index][qu]){
          self.$set(self.xiazhu_data[index],qu,0)
        }
        self.$set(self.xiazhu_data[index],qu,self.xiazhu_data[index][qu]+self.chip_num)
      }

      //console.log('下注',self.xiazhu_data,self.isShow);
    },
    getImages:function(list){
      //获得图片
      var self = this
      //console.log( 'img---',img_list)
      self.mid_desk_List.forEach(function(value, index, array) {
        var url = img_list[value.id][self.curr_timer]['imgUrl']
        //console.log(url)
        self.img_list[value.id] = require(`../../../assets/dealer/${url}.png`)
      });
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
      //self.self.curr_timerr =self.curr_timer
      //console.log(self.curr_timer)
      for(var id in self.desk_status){
 
        if(self.desk_status[id]['status']=='1'){
          var timer = parseInt(self.desk_status[id]['bet_interval'])-1
          if(timer<=0){
            self.$set(self.desk_status[id],'status' ,'2')
            self.$set(self.desk_status[id],'text' ,'停止投注')
            self.$set(self.desk_status[id],'text_timer' ,0)
          }else{
            self.$set(self.desk_status[id],'bet_interval', timer<10?"0"+timer:timer)
          }
             
        }else if(self.desk_status[id]['status']=='2'){
          if( self.desk_status[id]['text_timer']<3){
            self.$set(self.desk_status[id],'text_timer' ,self.desk_status[id]['text_timer']+1)
          }else{
            self.$set(self.desk_status[id],'text_timer' ,0)
            self.$set(self.desk_status[id],'text' ,'结算中')
          } 
        }else{
          self.$set(self.desk_status[id],'text' ,'洗牌中')
        }
        
        if(id==this.selectId){
          self.seletdata()
        }
      }
      //self.$set(self.desk_status[id],'bet_interval' ,(vo.bet_interval)<10?"0"+(vo.bet_interval):(vo.bet_interval))
      // console.log(curr_time,hours)
      hours < 10 ? hours = "0" + hours : hours = hours;
      minutes < 10 ? minutes = "0" + minutes : minutes = minutes;

    },
    setStatus:function(vo){
      var self = this
      var id = vo.id
      if(!self.desk_status[id ]){
        self.$set(self.desk_status,id ,{})
      }
      if(vo.status=="1"){
        self.$set(self.desk_status[id],'status' ,'1')
        
        self.$set(self.desk_status[id],'text' ,'')
        self.$set(self.desk_status[id],'bet_interval' ,(vo.bet_interval)<10?"0"+(vo.bet_interval):(vo.bet_interval))
        self.$set(self.desk_status[id],'luzhu' ,'true')
      }else if(vo.status=="3"){
        self.$set(self.isBet,id,' _1XlEI')
        self.$set(self.desk_status[id],'status' ,'3')
        self.$set(self.desk_status[id],'text' ,'洗牌中')
        self.$set(self.desk_status[id],'luzhu' ,'false')
      }else{
        self.$set(self.isBet,id,' _1XlEI')
        self.$set(self.desk_status[id],'status' ,'2')
        self.$set(self.desk_status[id],'text' ,'结算中')
        self.$set(self.desk_status[id],'luzhu' ,'false')
      }
    },
    onDeskInfo:function(vo){
      //自选的桌子信息
      var self = this;
      var id = vo.id
      if(this.mid_desk_List.length<6){
        this.mid_desk_List.push(vo)
      }

      this.setStatus(vo)

      if(this.mid_desk_List.length==6){
        this.seletdata()
        this.$store.commit('GAMEREADY',true)
        if(self.changeindex===null){
          clearInterval(self.bottomDate_timer)
          self.bottomDate_timer = setInterval(self.bottomDateTime,1000);  
          setTimeout(function(){
              for(var i = 0;i <self.$refs['a_canvas'].length;i++){
              drawCanvas(self.$refs['a_canvas'][i],self.$refs['b_canvas'][i],self.$refs['c_canvas'][i],self.$refs['d_canvas'][i],self.$refs['a_canvas1'][i],self.$refs['b_canvas1'][i],self.$refs['c_canvas1'][i],self.$refs['d_canvas1'][i],self.$refs['d_canvas'][i]['tabIndex'],45,18)
              };
            },0)  
        }else{
          var changedata = this.mid_desk_List[self.changeindex];
          this.mid_desk_List.splice(self.changeindex,1,vo)
          this.$store.dispatch('SetZiXuanDesk',this.mid_desk)
          this.$store.dispatch('SetExchangeDesk', {changedeskid: this.changedesk, changedata:changedata})
          console.log('onDeskInfo----单个', this.mid_desk_List)
         
          //换桌子重新画
          for(var i = 0;i <self.$refs['a_canvas'].length;i++){
             
            if( self.$refs['a_canvas'][i]['tabIndex']==self.olddesk_id){
              console.log("self.changedesk------------------",self.$refs['a_canvas'][i]['tabIndex'],self.olddesk_id)
              drawCanvas(self.$refs['a_canvas'][i],self.$refs['b_canvas'][i],self.$refs['c_canvas'][i],self.$refs['d_canvas'][i],self.$refs['a_canvas1'][i],self.$refs['b_canvas1'][i],self.$refs['c_canvas1'][i],self.$refs['d_canvas1'][i],self.changedesk,45,18)
            }
          }
          self.changeindex=null;
          self.changedesk=null;
          self.olddesk_id=null
        }
      }
      self.global.sendMessage("member_bet",{desk_id:id});
      //console.log('onDeskInfo', this.mid_desk_List)
    },
    onMemberBet: function (vo){
  
      var self = this
      var usersID = self.$store.state.user.id

      if(usersID == vo.member_id){
        var index = vo.desk_id;
        //console.log("其他用户下注====",JSON.stringify(vo))
     
        if(!self.xiazhu_data[index]){
          self.$set(self.xiazhu_data,index,{})
        }
        var cc = {}
        for(var name in vo){
          if(name =='desk_id' ||name =='member_id'){continue};
          
          self.$set(self.xiazhu_data[index],name,vo[name])
          cc[name ] = vo[name]
        }
        //console.log(cc)
        //self.getSbServerBetInfos(cc,index)
      }
    },
    onClearBet:function (vo){
      var self = this;
      var id = vo.desk_id
      var i = this.mid_desk.indexOf(parseInt(id))
      if(!self.desk_status[id]){
        self.$set(self.desk_status,id ,{})
      }
      self.$set(self.desk_status[id],'status' ,'3')
      self.$set(self.desk_status[id],'text' ,'洗牌中')
      console.log("清理下注 洗牌===="+JSON.stringify(vo))
      this.yuce_result[id] = {};
      //露珠洗掉
      drawCanvas(self.$refs['a_canvas'][i],self.$refs['b_canvas'][i],self.$refs['c_canvas'][i],self.$refs['d_canvas'][i],self.$refs['a_canvas1'][i],self.$refs['b_canvas1'][i],self.$refs['c_canvas1'][i],self.$refs['d_canvas1'][i],id,45,18)
      this.clearAll(vo)
    },
    stopBet:function (vo){
      var self = this;
      var id = vo.desk_id
      if(!self.desk_status[id ]){
        self.$set(self.desk_status,id ,{})
      }
      self.$set(self.desk_status[id],'status' ,'2')
      self.$set(self.desk_status[id],'text_timer' ,0)
      self.$set(self.desk_status[id],'text' ,'停止投注')
      //console.log("停止下注===="+JSON.stringify(vo));
      self.clearFailBet(id)
      self.$set(self.isBet,id,' _1XlEI')
    },
    clearFailBet:function(index){
      var self  = this
      //清理没有下注成功的
      for(var name in self.xiazhu_data[index]){
        if(typeof self.xiazhu_data[index][name] !='object'){
          if(self.coinStacks[index]&& self.coinStacks[index][name]){
          self.$set(self.xiazhu_data[index],name ,self.coinStacks[index][name])
          }else{
            self.$set(self.xiazhu_data[index],name ,0)
          }
        }else{
          if(!self.coinStacks[index]){
              self.$set(self.xiazhu_data[index],name ,{})
              return
          }

          if(self.coinStacks[index][name]){
            for(var key in self.xiazhu_data[index][name]){
              if(self.coinStacks[index][name][key]){
                self.$set(self.xiazhu_data[index][name],key ,self.coinStacks[index][name][key])
              }else{
                self.$set(self.xiazhu_data[index][name],key ,0)
              }
            }
          }else{
            self.$set(self.xiazhu_data[index],name ,{})
          }
        }
      }
      self.hide(index)
    },
    clearAll:function(vo){
      var self = this
      if(vo.desk_id ==16){
        self.$set(self.desk_result,'16',self.sbreuslt)
            this.saibaoresult = vo;
            this.saibaoresult = {"cards": ["0", "0", "0"],"wei_pai": 0,"da": 0,"xiao": 0,"dan": 0,"shuang": 0,"dian": 0}
            this.$set(this.saibaoresult,'result',false)
      }
      if(vo.desk_id ==20){
        var yanchi = setTimeout(function(){self.$set(self.desk_result,vo.desk_id,{}); clearTimeout(yanchi)},500)
        self.lpresult={"hong": 0,"hei": 0,	"dan": 0,"shuang": 0,"da": 0,"xiao": 0,"zu_1": 0,	"zu_2": 0,	"zu_3": 0,"hang_1": 0,"hang_2": 0,"hang_3": 0,'ball':0}
      }
      //清理牌
      if(self.desk_pai[vo.desk_id]){
        self.$set(self.desk_pai,vo.desk_id,{left:{},right:{}})
      }
      //清理下注成功的结果
      if(self.desk_pai[vo.desk_id]){
        self.$set(self.desk_result,vo.desk_id,{})
      }
      //清理下注成功历史
      self.hide(vo.desk_id)
      
      if(self.xiazhu_data[vo.desk_id]){
        self.$set(self.xiazhu_data,vo.desk_id,{})
      }

      if(self.coinStacks[vo.desk_id]){
        self.$set(self.coinStacks,vo.desk_id,{})
      }
      
      //下注区不能下注
      self.$set(self.isBet,vo.desk_id,self.chip)
      //通知结果
      self.$set(self.bet_result,vo.desk_id,{})
    },
    startBet:function (vo){
      //倒计时 隐藏
      var self = this;
      var id = vo.desk_id
      if(!self.desk_status[id ]){
        self.$set(self.desk_status,id ,{})
      }
      self.$set(self.desk_status[id],'status' ,'1')
      self.$set(self.desk_status[id],'text' ,'')
      self.$set(self.desk_status[id],'bet_interval' ,(vo.bet_interval)<10?"0"+(vo.bet_interval):(vo.bet_interval))
      this.clearAll(vo)
      // 换靴
      var index = this.mid_desk.indexOf(vo.desk_id);
      if(self.mid_desk_List[index]){
        self.$set(self.mid_desk_List[index],'boot' ,vo.boot)
        self.$set(self.mid_desk_List[index],'inning' ,vo.inning)
      }
    //咪牌的清理
   if(vo.desk_id==1){
		  self.mipaiOpen.z_open_one_index = 0;
			self.mipaiOpen.x_open_one_index = 0;
		}
		if(vo.desk_id==2){
			self.mipaiOpen.z_open_two_index = 0;
			self.mipaiOpen.x_open_two_index = 0;
		}
      //console.log("开始下注===="+JSON.stringify(vo))
    },
    closeBetNotice:function(index){
      var self = this
      var yanchi = setTimeout(function(){ self.$set(self.bet_status,index,'0');clearTimeout(yanchi) }, 1000);
      //关闭弹框
    },
    onLpBetSuccess:function(vo){
      var self = this
      //console.log("轮盘下注成功=="+JSON.stringify(vo));
      self.getServerBetInfos(vo.bets,vo.desk_id)
      self.closeBetNotice(vo.desk_id)
      self.updateUser(vo.credit)
      self.$set(self.bet_status,vo.desk_id,'2')
      self.playGameEffect("./static/sound/se/bet_success.mp3",true)
    },
    onSbBetSuccess:function (vo){
      var self = this
      this.getSbServerBetInfos(vo.bets,vo.desk_id)
      self.$set(self.bet_status,vo.desk_id,'2')//下注成功
      //console.log("saibao下注成功=="+JSON.stringify(vo));
      //关闭弹框
      self.closeBetNotice(vo.desk_id)
      self.updateUser(vo.credit)
      self.playGameEffect("./static/sound/se/bet_success.mp3",true)
      
    },
    onBetSuccess:function (vo){
      var self = this
      this.getServerBetInfos(vo.bets,vo.desk_id)
      self.$set(self.bet_status,vo.desk_id,'2')//下注成功
      //console.log("下注成功=="+JSON.stringify(vo));
      //关闭弹框
      self.closeBetNotice(vo.desk_id)
      self.updateUser(vo.credit)
      self.playGameEffect("./static/sound/se/bet_success.mp3",true)
    },
    updateUser:function(credit){
      var self = this
      this.global.sendMessage("member_info");
      //更改用户信息
      self.$set(self.$store.state.user,'money',formatCurrency(credit))
     // self.$store.dispatch('SetuUser', self.$store.state.user)
    },
    failtext:function(vo){ 
      var str;
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
    omwsBetFail:function(vo){
      console.log("下注失败=="+JSON.stringify(vo))
      this.failtext(vo)
      this.playGameEffect("./static/sound/se/error_alert.mp3",true)
      this.$set(this.bet_status,vo.data.desk_id,'3')//下注失败
      //清理失败的
      this.clearFailBet(vo.data.desk_id)
      //关闭弹框
      this.closeBetNotice(vo.data.desk_id)
    },
    getSbServerBetInfos:function (obj,num){
      //下注成功的历史
      var self = this 
      if(!self.coinStacks[num]){
        self.$set(self.coinStacks,num,{})
      }
      for(var k in obj)
      { 
        if( typeof obj[k] !="object"){
          if(!self.coinStacks[num][k]){
            self.$set(self.coinStacks[num],k, 0);
          }
          self.$set(self.coinStacks[num],k,(self.coinStacks[num][k]+ obj[k]));
        }else{
          if(!self.coinStacks[num][k]){
            self.$set(self.coinStacks[num],k,{})
          }
          for(var j in obj[k]){
            if(!self.coinStacks[num][k][j]){
              self.$set(self.coinStacks[num][k],j, 0);
            }
            self.$set(self.coinStacks[num][k],j, obj[k][j]);
          }

        }
      }
      //console.log("下注成功历史=="+JSON.stringify(self.coinStacks));
    },
    getServerBetInfos:function (obj,num){
      //下注成功的历史
      var self = this 
      if(!self.coinStacks[num]){
        self.$set(self.coinStacks,num,{})
      }
      for(var k in obj)
      {
        if(!self.coinStacks[num][k]){
          self.$set(self.coinStacks[num],k, 0);
        }
        self.$set(self.coinStacks[num],k,(self.coinStacks[num][k]+ obj[k]));
      }
      console.log("下注成功历史=="+JSON.stringify(self.coinStacks));
    },
    onSendOneCard:function (vo){
      var self = this
      if(!self.desk_pai[vo.desk_id]){
        self.$set(self.desk_pai,vo.desk_id,{left:{},right:{},long:'',hu:''})
      }
      var id = vo.desk_id;
      // 如果是龙虎
      if(vo.desk_id==17){
          if(vo.type == 0){
            self.$set(self.desk_pai[vo.desk_id],'long',(self.pailist[vo.card] +' _1Jx9V'))
            var yanchi = setTimeout(function(){ self.$set(self.desk_pai[vo.desk_id],'long',(self.pailist[vo.card] +' _5_PF4 ')) ;;clearTimeout(yanchi)}, 200);

          }else{
            self.$set(self.desk_pai[vo.desk_id],'hu',(self.pailist[vo.card] +' qnns3'))
            var yanchi = setTimeout(function(){ self.$set(self.desk_pai[vo.desk_id],'hu',(self.pailist[vo.card] +' _5_PF4 '));;clearTimeout(yanchi) }, 200);
          }
          return
      }
      // 如果是百家乐 咪牌
      if(vo.type == 0){
				if(vo.order == 1){
          var card
          //咪牌如果是
          if(id!=1&&id!=2){
            card = self.pailist[vo.card]
          }else{
            if(id==1){
              self.mipai.one_x_a = self.pailist[vo.card]
            }else{
              self.mipai.two_x_a = self.pailist[vo.card]
            }
            card = "_3_Bda";
          }
          self.$set(self.desk_pai[vo.desk_id]['left'],'one',(card +' _1i3Xq'))
          var yanchi = setTimeout(function(){ self.$set(self.desk_pai[vo.desk_id]['left'],'one',(card +' _4KEdk'));;clearTimeout(yanchi) }, 200);
				}
				if(vo.order == 2){
          var card1
          //咪牌如果是
          if(id!=1&&id!=2){
            card1 = self.pailist[vo.card]
          }else{
            if(id==1){
              self.mipai.one_x_b = self.pailist[vo.card]
            }else{
              self.mipai.two_x_b = self.pailist[vo.card]
            }
            card1 = "_3_Bda";
          }
          self.$set(self.desk_pai[vo.desk_id]['left'],'two',(card1 +' _1i3Xq'))
          var yanchi = setTimeout(function(){ self.$set(self.desk_pai[vo.desk_id]['left'],'two',(card1 +' _4KEdk')) ;;clearTimeout(yanchi)}, 200);	
				}
				if(vo.order == 3){
          var card3
          //咪牌如果是
          if(id!=1&&id!=2){
            card3 = self.pailist[vo.card]
          }else{
            if(id==1){
              self.mipai.one_x_c = self.pailist[vo.card]
            }else{
              self.mipai.two_x_c = self.pailist[vo.card]
            }
            card3 = "_3_Bda";
          }
          self.$set(self.desk_pai[vo.desk_id]['left'],'three',(card3 +' P81Zq'))
          var yanchi = setTimeout(function(){ self.$set(self.desk_pai[vo.desk_id]['left'],'three',(card3 +' _3U3QE  rWt8_'));;clearTimeout(yanchi) }, 200);
				}
			}else{
			    if(vo.order == 1){
          var card4
          //咪牌如果是
          if(id!=1&&id!=2){
            card4 = self.pailist[vo.card]
          }else{
            if(id==1){
              self.mipai.one_z_a = self.pailist[vo.card]
            }else{
              self.mipai.two_z_a = self.pailist[vo.card]
            }
            card4 = "_3_Bda";
          }
          self.$set(self.desk_pai[vo.desk_id]['right'],'one',(card4 +' _4D4Z_'))
          var yanchi  = setTimeout(function(){ self.$set(self.desk_pai[vo.desk_id]['right'],'one',(card4 +' _4KEdk')) ;clearTimeout(yanchi)}, 200);
				
				}
				if(vo.order == 2){
          var card5
          //咪牌如果是
          if(id!=1&&id!=2){
            card5 = self.pailist[vo.card]
          }else{
            if(id==1){
              self.mipai.one_z_b = self.pailist[vo.card]
            }else{
              self.mipai.two_z_b = self.pailist[vo.card]
            }
            card5 = "_3_Bda";
          }
          self.$set(self.desk_pai[vo.desk_id]['right'],'two',(card5 +' _4D4Z_ '))
          var yanchi = setTimeout(function(){ self.$set(self.desk_pai[vo.desk_id]['right'],'two',(card5 +' _4KEdk ')) ;clearTimeout(yanchi)}, 200);
					
				}
				if(vo.order == 3){
          var card6
          //咪牌如果是
          if(id!=1&&id!=2){
            card6 = self.pailist[vo.card]
          }else{
            if(id==1){
              self.mipai.one_z_c = self.pailist[vo.card]
            }else{
              self.mipai.two_z_c = self.pailist[vo.card]
            }
            card6 = "_3_Bda";
          }
          self.$set(self.desk_pai[vo.desk_id]['right'],'three',(card6 +' f2eRi '))
          var yanchi = setTimeout(function(){ self.$set(self.desk_pai[vo.desk_id]['right'],'three',(card6 +' _3U3QE  rWt8_ ')) ;;clearTimeout(yanchi)}, 200);
					
				}
			}
      //console.log("发牌=="+JSON.stringify(vo));
    },
    resultSbBling:function(qu,dian){
      var self = this
      if(!self.desk_result['16']){
        self.$set(self.desk_result,'16',self.sbreuslt)
      }

      if(!dian){
        if(self.desk_result['16'][qu] =='1'){
          return '_13246'
        }else{
          return ''
        }
      }else{
        if(dian =='dian'){
          if(self.desk_result['16']['dian'] ==qu){
            return '_13246'
          }else{
            return ''
          }
        }else{
          if(self.desk_result['16'][dian][qu] =='1'){
            return '_13246'
          }else{
            return ''
          }
        }
      }
    },
    onLpCard:function(vo){
      this.lpresult = vo.result;
      this.$set(this.lpresult,'ball',vo.ball)
      //console.log("轮盘发牌=="+JSON.stringify(vo));
    },
    onSbCard:function(vo){
      var self = this
      //self.saibaoresult = vo
      self.$set(self.saibaoresult,'result',true)
      self.$set(self.saibaoresult,'wei_pai',vo.wei_pai)
      self.$set(self.saibaoresult,'da',vo.da)
      self.$set(self.saibaoresult,'xiao',vo.xiao)
      self.$set(self.saibaoresult,'dan',vo.dan)
      self.$set(self.saibaoresult,'shuang',vo.shuang)
      self.$set(self.saibaoresult,'dian',vo.dian)
      self.$set(self.saibaoresult,'cards',[])
      var yanchi1 = setTimeout(function(){ self.$set(self.saibaoresult['cards'],0,vo['cards'][0]);clearTimeout(yanchi1) },0)
      var yanchi2 = setTimeout(function(){ self.$set(self.saibaoresult['cards'],1,vo['cards'][1]);clearTimeout(yanchi2) },500)
      var yanchi3 = setTimeout(function(){ self.$set(self.saibaoresult['cards'],2,vo['cards'][2]);clearTimeout(yanchi3)},1000)
      this.updateUser(vo.credit)
     //console.log("shaibao游戏结果=="+JSON.stringify(vo));
    },
    onLpResult:function(vo){
      var self = this;
      var id = vo.desk_id
      if(!self.bet_result[id]){
        self.$set(self.bet_result,id,{})
      }
      self.desk_result[id] = vo.result
      if (vo.member.status!=0) {
        self.lpresult={"hong": 0,"hei": 0,	"dan": 0,"shuang": 0,"da": 0,"xiao": 0,"zu_1": 0,	"zu_2": 0,	"zu_3": 0,"hang_1": 0,"hang_2": 0,"hang_3": 0,'ball':0}
        self.$set(self.bet_result[id],"status",'1')
        if(vo.member.win_lose_credit<0){
          //输
          self.$set(self.bet_result[id],"lose",vo.member.win_lose_credit)
        }else if(vo.member.win_lose_credit>0){
          //赢
          self.$set(self.bet_result[id],"win",vo.member.win_lose_credit)
        }else{
          self.$set(self.bet_result[id],"he",true)
        }
      }
      this.updateUser(vo.member.credit)
      //console.log("轮盘游戏结果=="+JSON.stringify(vo));
    },
    onSbResult:function(vo){
      var self = this
      var id = vo.desk_id
      if(!self.desk_result[id]){
          self.$set(self.desk_result,id,{})
      }
      self.desk_result[id] = vo.result
      this.updateUser(vo.member.credit)
      if(vo.member.status != 0){
        this.saibaoresult = {"cards": ["0", "0", "0"],"wei_pai": 0,"da": 0,"xiao": 0,"dan": 0,"shuang": 0,"dian": 0}
      }
      if(!self.bet_result[id]){
        self.$set(self.bet_result,id,{})
      }
      if (vo.member.status!=0) {
        self.$set(self.bet_result[id],"status",'1')//有结果
        if(vo.member.win_lose_credit<0){
          //输
          self.$set(self.bet_result[id],"lose",vo.member.win_lose_credit)
        }else if(vo.member.win_lose_credit>0){
          //赢
          self.$set(self.bet_result[id],"win",vo.member.win_lose_credit)
        }else{
          self.$set(self.bet_result[id],"he",true)
        }
      }
      //console.log("shaibao游戏结果=="+JSON.stringify(vo));
    },
    onResult:function (vo){
      var self = this
      var id = vo.desk_id

      // if(this.$store.state.isInTable[vo.desk_id] ==1){
      //   self.global.sendMessage("exit_desk",{desk_id:vo.desk_id});
      //   this.$store.state.isInTable[vo.desk_id] = 0;
      //   console.log("退桌了---",vo.desk_id,this.$store.state.isInTable)
      // }

      if(!self.desk_result[id]){
          self.$set(self.desk_result,id,{})
      }
      this.updateUser(vo.member.credit)
      //不是龙虎
      if(id == 17){
        self.$set(self.desk_result[id],'long_count',self.totext[vo.result.long_count]?self.totext[vo.result.long_count]:vo.result.long_count)
        self.$set(self.desk_result[id],'hu_count',self.totext[vo.result.hu_count]?self.totext[vo.result.hu_count]:vo.result.hu_count)
        if(vo.result.long==1){
          self.$set(self.desk_result[id],'long',"1")
        }
        if(vo.result.hu==1){
          self.$set(self.desk_result[id],'hu',"1")
        }
        if(vo.result.he==1){
          self.$set(self.desk_result[id],'he',"1")
        }
      }
      if(id!=17){
        //结果数
        self.$set(self.desk_result[id],'zhuang_count',vo.result.zhuang_count)
        self.$set(self.desk_result[id],'xian_count',vo.result.xian_count)
        if(vo.result.zhuang==1){
          self.$set(self.desk_result[id],'zhuang',"1")
        }
        if(vo.result.xian==1){
          self.$set(self.desk_result[id],'xian',"1")
        }
        if(vo.result.he==1){
          self.$set(self.desk_result[id],'he',"1")
        }
        if(vo.result.zhuang_dui==1){
          self.$set(self.desk_result[id],'zhuang_dui',"1")
        }
        if(vo.result.xian_dui==1){
          self.$set(self.desk_result[id],'xian_dui',"1")
        }
      }
      self.$set(self.bet_result,id,{})
      if (vo.member.status!=0) {
        //if(!self.bet_result[id]){
         
        //}
          self.$set(self.bet_result[id],"status",'1')//有结果
        if(vo.member.win_lose_credit<0){
          //输
          self.$set(self.bet_result[id],"lose",vo.member.win_lose_credit)
        }else{
          //赢
          self.$set(self.bet_result[id],"win",vo.member.win_lose_credit)
          setTimeout(function(){
            self.playGameEffect("./static/sound/se/win_game.mp3",true);
					},3000)
        }
      }else{
        if(vo.result.he==1){
          //和
          self.$set(self.bet_result[id],"status",'1')//有结果
          self.$set(self.bet_result[id],"he",true)
        }else{
          self.$set(self.bet_result[id],"status",'0')
        }
      }

      // if(self.bet_result[id]['status'] =='1'){
      //   setTimeout(function(){
      //     self.$set(self.bet_result[id],"status",'0')
      //   },1000)
      // }
      //console.log("游戏结果=="+JSON.stringify(vo));
    },
    onJackPotBet:function (vo){
      this.updateUser(vo.credit)
      this.$set(this.bet_status,vo.desk_id,'2');//
      this.closeBetNotice(vo.desk_id)
      if(!this.success_JP[vo.desk_id]){
        this.$set( this.success_JP,vo.desk_id,1)
      }else{
          this.$set( this.success_JP,vo.desk_id,this.success_JP[vo.desk_id]+1)
        if(this.success_JP[vo.desk_id] ==5){
          this.isShow[vo.desk_id] = true
        }
      }
      this.$set(this.bet_status,vo.desk_id,'2')
     
      //console.log("jackpot下注成功====",JSON.stringify(vo))
    },

    ziXuan:function(vo){
      this.mid_desk = vo.desk_list
      console.log("自选=================",this.mid_desk)
       this.$store.commit('TOGAMEHALL', false)

      var i = 0
      while (i < vo.desk_list.length) {
        //ws.sendMessage("enter_desk",{bet_addition_id:this.$store.state.userLimitID,desk_id:vo.desk_list[i] });
        ws.sendMessage('desk_info_q', { desk_id: vo.desk_list[i] })
        i++
      }
      this.selectId = this.mid_desk[0]
      
      ws.sendMessage('desk_list_q')
      this.$store.dispatch('SetZiXuanDesk', vo.desk_list)
    },
    onRoadMap:function(vo){
      if(this.mid_desk.indexOf(parseInt(vo.desk_id))>-1){
        // console.log("this.mid_desk.---------------------------",this.mid_desk,vo)
        this.c_history_ary[vo.desk_id] = vo.history
        initRoadMap(vo.history,vo.desk_id,90,72,this.yuce_result1);
        
        for(var i in this.yuce_result1){
          if(this.yuce_result1[i]){
            this.$set(this.yuce_result,i,this.yuce_result1[i])
            for(var name in this.yuce_result1[i]){
             this.$set(this.yuce_result[i],name,this.yuce_result1[i][name])
            }
          }
        }
      }
      //console.log("露珠=="+JSON.stringify(vo))
    },
    onOpenOneCard:function(vo){
      var id = vo.desk_id;
      var type = vo.type;
      var index;
      var self = this
      var mipaiOpen = self.mipaiOpen;
      var mipai = self.mipai

      if(vo.desk_id==1){
        if (vo.type == 0) {
          mipaiOpen.open_index =  mipaiOpen.x_open_one_index;
          mipaiOpen.x_open_one_index++;
        }else{
          mipaiOpen.open_index = mipaiOpen.z_open_one_index;
          mipaiOpen.z_open_one_index++;
        };
      }else{
        if (vo.type == 0) {
          mipaiOpen.open_index = mipaiOpen.x_open_two_index;
          mipaiOpen.x_open_two_index++;
        }else{
          mipaiOpen.open_index = mipaiOpen.z_open_two_index;
          mipaiOpen.z_open_two_index++;
        };
      }
      index = mipaiOpen.open_index;
      if(!self.desk_pai[vo.desk_id]){
        self.$set(self.desk_pai,vo.desk_id,{left:{},right:{}})
      }
      if(id==1){
        if(type==0){
          if(index==0){
            self.$set(self.desk_pai[vo.desk_id]['left'],'one',mipai.one_x_a)
            self.$set(self.desk_pai[vo.desk_id]['left'],'two',mipai.one_x_b)
          }else{
            self.$set(self.desk_pai[vo.desk_id]['left'],'three',mipai.one_x_c+' _3U3QE  rWt8_')
          }
        }else{
          if(index==0){
            self.$set(self.desk_pai[vo.desk_id]['right'],'one',mipai.one_z_a)
            self.$set(self.desk_pai[vo.desk_id]['right'],'two',mipai.one_z_b)
          }else{
            self.$set(self.desk_pai[vo.desk_id]['right'],'three',mipai.one_z_c +' _3U3QE  rWt8_')
          }
        }
      }else{
        if(type==0){
          if(index==0){
            self.$set(self.desk_pai[vo.desk_id]['left'],'one',mipai.two_x_a)
            self.$set(self.desk_pai[vo.desk_id]['left'],'two',mipai.two_x_b)
          }else{
            self.$set(self.desk_pai[vo.desk_id]['left'],'three',mipai.two_x_c +' _3U3QE  rWt8_')
          }
        }else{
          if(index==0){
            self.$set(self.desk_pai[vo.desk_id]['right'],'one',mipai.two_z_a)
            self.$set(self.desk_pai[vo.desk_id]['right'],'two',mipai.two_z_b)
          }else{
            self.$set(self.desk_pai[vo.desk_id]['right'],'three',mipai.two_z_c +' _3U3QE  rWt8_')
          }
        }
      }
      //console.log("咪牌翻拍=="+JSON.stringify(vo))
    }
  },
  mounted(){
    //登录信息
    var self = this;
    this.chip_num = chips[this.$store.getters.messArray_get[0]];
    
    console.log("进大厅---")
    // 第一次进桌是监听  后来进有的话就进
    if(self.$store.state.ziXuan){
      self.ziXuan(self.$store.state.ziXuan)
    }
      var index = this.$store.state.selected_chip_index
      if(index){
        this.chip_num = chips[index]
        //console.log(index)
        this.chip = 'chip-one-'+index
      }
  },
  watch: {      
    '$store.state.game_effect':function(){
      this.game_effect= this.$store.state.game_effect
    },

    '$store.state.onMemberBet':function(){var self = this;self.onMemberBet(self.$store.state.onMemberBet)},
    '$store.state.onExchangeDesk':function(){var self = this;self.onExchangeDesk(self.$store.state.onExchangeDesk)},
    '$store.state.onDeskInfo':function(){var self = this;self.onDeskInfo(self.$store.state.onDeskInfo)},
    '$store.state.ziXuan':function(){var self = this;self.ziXuan(self.$store.state.ziXuan)},
    '$store.state.clear_bet':function(){var self = this;self.onClearBet(self.$store.state.clear_bet)},
    '$store.state.stopBet':function(){var self = this;self.stopBet(self.$store.state.stopBet)},
    '$store.state.startBet':function(){var self = this;self.startBet(self.$store.state.startBet)},
    '$store.state.onBetSuccess':function(){var self = this;self.onBetSuccess(self.$store.state.onBetSuccess)},
    '$store.state.onSbBetSuccess':function(){var self = this;self.onSbBetSuccess(self.$store.state.onSbBetSuccess)},
    '$store.state.onLpBetSuccess':function(){var self = this;self.onLpBetSuccess(self.$store.state.onLpBetSuccess)},
    '$store.state.onSendOneCard':function(){var self = this;self.onSendOneCard(self.$store.state.onSendOneCard)},
    '$store.state.onResult':function(){var self = this;self.onResult(self.$store.state.onResult)},
    '$store.state.onSbResult':function(){var self = this;self.onSbResult(self.$store.state.onSbResult)},
    '$store.state.onLpResult':function(){var self = this;self.onLpResult(self.$store.state.onLpResult)},
    '$store.state.onSbCard':function(){var self = this;self.onSbCard(self.$store.state.onSbCard)},
    '$store.state.onLpCard':function(){var self = this;self.onLpCard(self.$store.state.onLpCard)},
    '$store.state.onJackPotBet':function(){var self = this;self.onJackPotBet(self.$store.state.onJackPotBet)},
    '$store.state.onOpenOneCard':function(){var self = this;self.onOpenOneCard(self.$store.state.onOpenOneCard)},
    '$store.state.omwsBetFail':function(){var self = this;self.omwsBetFail(self.$store.state.omwsBetFail)},
    '$store.state.exitDesk':function(){var self = this;self.exitDesk(self.$store.state.exitDesk)},
    '$store.state.onEnterDesk':function(){var self = this;self.onEnterDesk(self.$store.state.onEnterDesk)},
    '$store.state.click_num':function(){
      var self = this
      var index = this.$store.state.selected_chip_index
      this.chip_num = chips[index]
      console.log(index)
      this.chip = 'chip-one-'+index
      //底部筹码点击点击一次
      if(self.curr_index ==16){
        return
      }
      if(self.curr_index!=-1){
        self.xiaZhu(self.isShow[self.curr_index],self.curr_index)
      }
    },
    '$store.state.split_desk.mid_desk':function(){
      //console.log('-----'+this.$store.state.split_desk)
    },
    '$store.state.luzhu':function(){
      console.log(this.$store.state.luzhu)
      this.onRoadMap(this.$store.state.luzhu)
      //console.log('-----'+this.$store.state.split_desk)
    },
    '$store.state.hallnotice': function () {
      if (this.$store.state.hallnotice == "0" || this.$store.state.hallnotice == "1") {
        this.chipnotice = false
      } else if (this.$store.state.hallnotice == "2") {
        this.chipnotice = true
      }
    },
  }
}
</script>
<style  scoped>
@import '../../../assets/style/gamehall.css';
@import '../../../assets/style/pai.css';
._2xSSt {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #0d0d0c;
  display: -ms-flexbox;
  display: flex;
}
._2xSSt._18yFR {
  background-color: rgba(13, 13, 12, 0.8);
}
._2xSSt ._2K7UY {
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
._2xSSt ._2K7UY._3lqe6 {
  top: 0.04em;
  bottom: inherit;
  line-height: 1;
  overflow: inherit;
}
._2xSSt ._2K7UY .RoTQ2 {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 0.32em;
  width: 0.32em;
  border-right: 1px solid #24211a;
}
._2xSSt ._2K7UY .RoTQ2 ._1LHnT {
  height: 0.24em;
  width: 0.24em;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAWRJREFUWAntlr1OAkEURneRGH6kwsKWWJjQSqHvgI0JiVjZSE9hQ2JLQ+EDmEBLgaXPIAV2WAElnTQKRhKT5dwJQ1gSxJidpWBu8u3cmYX7nb0bmHEcG7YDu94BVxrged4ZwxWKyzzA+KRWw3Xdt3U1o/MbBcZ99LHug/9cT/G9S6QAeNA0uXgdoRZgXQ1wwEKfhRpjYIFhlWJSW3e5SBqTOXGNKhpArRi6RAG5pXYOeegZZVEGOWEASAfE/B3V6fIAoBNyFWEAiNELamL+rVyXLqYBJng9Yfy65OlLTQM8YP7lc1yZRFbmgU43mYuZUYC/PI0FMNoBfu+JTa/BKADmZSBOf4MwDZDEvATEDdJ7gI/HNIA2Oye5B+JYL+gxDIAxZh10iO6AuGDcQyrCAPjhD+kRtwaaojySnXCEFruhUGagC/Q8QE05kAyRA0Sb+j3SxYFErcuFG1s7kom/DduB3e7ADOagVqlK4z3jAAAAAElFTkSuQmCC);
  background-size: 100% 100%;
}
._2xSSt ._2K7UY .RoTQ2._135Vr {
  pointer-events: none;
}
._2xSSt ._2K7UY .RoTQ2._135Vr,
._2xSSt ._2K7UY .RoTQ2:hover {
  background-color: #7d7254;
  border-right: 0;
}
._2xSSt ._2K7UY .RoTQ2._135Vr ._1LHnT,
._2xSSt ._2K7UY .RoTQ2:hover ._1LHnT {
  height: 0.28em;
  width: 0.28em;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAArlJREFUWAntlktrFEEURtPGN/h+LXyAa90I7hV05U5ExGV+gyjoD4h/QcS1LkR37gwEcRdwI27jSsRXfMRBzZi055R9e2qYQSc9EwKaC2e6uqq77lf3Vt2esbE1+98jUEQAyrK0nRNDTa8lLyaKovDa15IAnK9jdANsgs2wHuxraou82IbvsADe5yLKEFVUK9/IAzvgAOyFrTCMAJ3Pw3uYgx/gYp3zJyiqjYglV+qAK98P1+ASGI1h7QsTTMIUKEAf+lPYO/jM4hdyAbvpvAgt+AAqjTzSHMhileM8fRguw1twQRNwAh7ATTA97RDgdQuocgbuwmtQzBIMajreDkfgOuyEM3AOdoFOz8NteAMtHWvmJnLuQy9hFgzjcgQ4n5F0Lt9zTxkF249BQSfBxabFhwDu611q6HX8ET7BcgWYNlPozvdEme874IovgBapSip+d3V+nUCnTrDoTu0M/bnFpvIBI+jO9yRMwy1QxDZwrMvyCHQNNLxRgTtehzfgBXwF+w+Ci9KSUhsrIcAzbgQe6QAzpdYVI1I7pp1spAKsbpgpMwoK0WHUmR7njNU73/aq2EgjwOpjd1vaRTMF1gfHemykAphdJzq2FpyCfBNaDXtErIQAq+k+mIRZyI+hkdBqIf0EOGgl8+HxKqw0BzLns/gYAVd8Go5BFCLHuiwXEKrss55buxUxcCHiWd/V+R7wXQuP7aswDZZgzROR5g0B3oQjVR4Fr62sn+ZfTaeKPwRG0fL7FPwYnQUFfatwc5YKUI03Dnh+j8MVSA9w7Xt+6e9nefoU8gqm4AlMgJ/jh+C3Ql+1AG/m4D74h8Sv1rDmB+0ePAfnfwYueB4s1UnAqv8lSxuPnW6+3LUeIXOvUvuamh8da785tyR7n6ey86eUgWTVcVNQUI00vugwEf+AG8+09uI/HYFfE87PX3X4In4AAAAASUVORK5CYII=);
}
._2xSSt ._2K7UY .N1YLN {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  margin-left: 0.04em;
  line-height: 1.1;
  -ms-flex-pack: center;
  justify-content: center;
}
._2xSSt ._2K7UY .N1YLN ._2KWZL {
  display: -ms-flexbox;
  display: flex;
  letter-spacing: 0.004em;
}
._2xSSt ._2K7UY .N1YLN ._2KWZL ._13Q5o {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  color: #fdeed4;
  font-size: 0.12em;
}
._2xSSt ._2K7UY .N1YLN ._2KWZL ._13Q5o.vevtA {
  display: initial;
  max-width: 6.41667em;
}
.ja-JP ._2xSSt ._2K7UY .N1YLN ._2KWZL ._13Q5o._1A1z- {
  letter-spacing: -0.08333em;
}
._2xSSt ._2K7UY .N1YLN ._2KWZL ._2N9K7 {
  height: 0.24em;
  width: 0.24em;
  background-image: url(data:image/png;base64,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);
  background-size: 100% 100%;
  margin-left: 0.05em;
  margin-top: -0.05em;
  margin-bottom: -0.06em;
}
._2xSSt ._2K7UY .N1YLN ._3fa9o {
  color: hsla(0, 0%, 100%, 0.87);
  font-size: 0.12em;
}
._2xSSt .CA7e0 {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  height: 0.34em;
  width: 0.34em;
  cursor: pointer;
  outline: none;
  z-index: 3500;
}
._2xSSt .CA7e0 ._3jqDh {
  position: absolute;
  bottom: -0.01em;
  right: -0.06em;
  height: 0.16em;
  width: 0.16em;
  background-image: url(data:image/png;base64,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);
  background-size: 100% 100%;
}
._2xSSt .j5qvO {
  height: 0.32em;
  width: 0.32em;
  top: -0.04em;
}
._2xSSt ._3_URI {
  pointer-events: none;
  cursor: auto;
}
._2xSSt ._2c97U {
  position: absolute;
  right: 0.07em;
  top: 0;
  bottom: 0;
}
._2xSSt ._2c97U.Pryfz {
  right: 0.02em;
}
._2xSSt ._2c97U._2a6kj {
  top: 0.04em;
  bottom: inherit;
  width: 0.67em;
  text-align: right;
  line-height: 1.1;
}
._2xSSt ._2c97U ._2QqaK {
  color: hsla(0, 0%, 100%, 0.87);
  font-size: 0.12em;
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  letter-spacing: 0.05em;
}
._2xSSt ._2c97U ._2QqaK.vevtA {
  display: inherit;
}
._2xSSt ._2c97U ._13ksF {
  color: #e0001e;
}
._2xSSt ._2c97U .SxLiX {
  height: 100%;
}
._2xSSt ._2c97U .SxLiX ._3fDKM {
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  line-height: 0.9;
  font-size: 0.3em;
  color: hsla(0, 0%, 100%, 0.87);
}
._2xSSt ._2c97U .SxLiX ._3fDKM._6NJkN {
  color: #e0001e;
}
._2xSSt ._2c97U .SxLiX ._3fDKM._31RoA {
  line-height: 1.1;
  font-size: 0.2em;
}
._2xSSt ._2c97U .SxLiX ._3fDKM.vevtA {
  display: inherit;
}
._3hAwz {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  width: 100%;
  height: 44.44444%;
}
._1YU6F,
._1ZvlT,
._3b3HF {
  width: 33.33333%;
  height: 100%;
}

._2Qn5d {
  width: 100%;
  height: 100%;
  display: -ms-flexbox;
  display: flex;
}
._13T1H {
  width: 100%;
  height: 55.55556%;
}
._2Qn5d {
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
._3qPxB {
  border-radius: 50%;
}
._1k7v7 {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #e1dac6;
  overflow: hidden;
  -webkit-box-shadow: 0.01em 0.02em 0.04em 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0.01em 0.02em 0.04em 0 rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}
._3qPxB {
  max-height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
@-webkit-keyframes w2dXn {
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
@keyframes w2dXn {
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
._2FQ8z {
  height: 100%;
}
.ys9Hi {
  width: 3.52em;
  margin: 0.04em 0 0 0.32em;
}
._3uFku,
.ys9Hi {
  position: relative;
  height: 7.22em;
}
._3uFku {
  width: 1.8em;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0 0.04em 0 0;
}
._3uFku._2OY8W {
  margin: 0.04em 0.04em 0 0;
}
._3c1Kj {
  width: 1px;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-top: 0.04em;
  height: calc(100% - 0.04em);
}
._3c1Kj._2OY8W {
  margin: 0.04em 0 0;
}
._3c1Kj .IE ._3c1Kj {
  min-width: calc(100vw - 5.6em);
}

@-webkit-keyframes _29OaY {
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
@keyframes _29OaY {
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
._3PaQi {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 0.04em;
  height: 2.38em;
  width: 3.5em;
  border: 1px solid #7d7254;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._3PaQi._2RIeH {
  z-index: 15090;
  pointer-events: none;
}
._2S3Lr {
  height: 0.31em;
  outline: none;
}
._2S3Lr,
._2tyhk {
  position: relative;
  width: 100%;
}
._2tyhk {
  height: 1.82em;
}
._18Xn2 {
  position: relative;
  width: 100%;
  height: 1.03em;
  opacity: 1;
}
.AJLuo ._18Xn2 {
  top: 0;
  left: 0;
  height: 100%;
}
._2IpHJ {
  position: absolute;
  top: 1.03em;
  width: 100%;
  height: 0.79em;
}
.AJLuo ._2IpHJ {
  z-index: 1500;
}
.AJLuo ._2IpHJ,
.jfyQz {
  top: 0;
  height: 100%;
  pointer-events: none;
}
.jfyQz {
  position: absolute;
  left: 0;
  z-index: 3000;
  width: 100%;
}
._2y12k {
  display: -ms-flexbox;
  display: flex;
  -ms-flex: 1 1;
  flex: 1 1;
  width: 100%;
  background-color: #24211a;
}
._2y12k._3nnZd {
  pointer-events: none;
}
._2y12k ._2Qjlu,
._2y12k ._2zYeq,
._2y12k .eKSsr {
  z-index: 1400;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex: 1 1;
  flex: 1 1;
  height: 100%;
  font-size: 0.12em;
  color: hsla(0, 0%, 100%, 0.87);
}
._2y12k ._2Qjlu._1Lffs,
._2y12k ._2Qjlu:hover,
._2y12k ._2zYeq._1Lffs,
._2y12k ._2zYeq:hover,
._2y12k .eKSsr._1Lffs,
._2y12k .eKSsr:hover {
  color: #fff;
  background-color: #bbaa7d;
}
._2y12k ._2Hipv._1tHSi,
._2y12k ._2Qjlu._1tHSi,
._2y12k ._2zYeq._1tHSi,
._2y12k .eKSsr._1tHSi {
  color: hsla(0, 0%, 100%, 0.38);
  background-color: hsla(0, 0%, 100%, 0.3);
  pointer-events: none;
}
._2y12k ._2Hipv,
._2y12k ._2zYeq,
._2y12k .eKSsr {
  border-right: 1px solid #7d7254;
}
._2y12k ._2Qjlu {
  background-color: #7d7254;
}
._2zYeq {
  position: relative;
}
._2zYeq ._2xcaI {
  width: 1em;
  height: 1em;
  font-size: 1em;
  -webkit-transform: scale(0.83333);
  transform: scale(0.83333);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  border-radius: 50%;
  color: #fff;
  background-color: #ed3648;
  line-height: 0.9;
  text-align: center;
}
._2OzfO,
._2zYeq ._2xcaI {
  position: absolute;
  top: 0;
  right: 0;
}
._2OzfO {
  left: 0;
  width: 100%;
  height: 1.03em;
  margin-top: 0.31em;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  cursor: default;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.9);
}
._2OzfO,
._2OzfO .X595_ {
  display: -ms-flexbox;
  display: flex;
}
._2OzfO .X595_ {
  position: relative;
  height: 0.32em;
  letter-spacing: 0.01em;
  font-weight: 600;
}
._2OzfO .X595_ .XMSao {
  font-size: 0.14em;
  color: hsla(0, 0%, 100%, 0.87);
  line-height: 2.28571em;
  white-space: pre-wrap;
}
._2OzfO .-jhv4 {
  position: relative;
  margin-top: 0.04em;
}
._1aGmJ {
  width: 100%;
  height: 1.82em;
}

._1Bwib,
._1eTMw,
._25jQ6,
.ffEMB,
.LctuS,
.QzxJO {
  position: absolute;
  z-index: 15200;
}
.ffEMB {
  width: 4.71em;
  height: 3.09em;
  left: -0.46em;
  top: -0.53em;
  background: url(/assets/319eb203.png) no-repeat 50%;
  background-size: 100% 100%;
}
._15Etb {
  font-size: 20px;
  line-height: 1px;
  color: #f4f5e7;
  text-shadow: 1px 1px 4px #fbff56, -1px -1px 4px #fbff56;
}
._15Etb,
.GiqdQ {
  width: 100vw;
  height: 1px;
}
.GiqdQ {
  font-size: 16px;
  line-height: 1.5;
  white-space: pre-line;
  color: #fff;
}
.LctuS {
  top: 0.08em;
  left: -308px;
}
._1eTMw {
  top: calc(0.08em + 25px);
  left: -308px;
}
._1eTMw .GiqdQ {
  width: 266px;
}
.QzxJO {
  top: -0.72em;
  left: 3.18em;
}
._25jQ6 {
  left: 1.67em;
  top: 2.71em;
}
._1Bwib {
  left: 1.67em;
  top: calc(2.71em + 27px);
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
  width: 100%;
  height: 100%;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  cursor: pointer;
}
._1fklX._2Bd3I._2c62g {
  -ms-flex-direction: column;
  flex-direction: column;
}
._1fklX._1XlEI {
  pointer-events: none;
}

 ._3UkTG ._2e-94 {
  background-image: url(../../../assets/btext.png);
}

._3Rf25 ._2e-94 {
  background-image: url(../../../assets/e38bd2a8.png);
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
._2bhq2 {
  z-index: 500;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  width: 0.53em;
  height: 0.53em;
  background: url(../../../assets/04feb106.png) no-repeat;
  background-size: 100% 100%;
  background-position: 0 0.02em;
  border-radius: 50%;
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
@-webkit-keyframes wdQVh {
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
@keyframes wdQVh {
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
._3TRtO {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._3TRtO.vxXxO {
  border: none;
}
._1mw7U {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 0.24em;
  height: 100%;
  background-color: rgba(13, 13, 12, 0.9);
}
.vxXxO ._1mw7U {
  width: 0.18em;
  background-color: #161614;
}
._1PQtx {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 50%;
  outline: none;
  background-color: #d4d1ca;
}
.vxXxO ._1PQtx {
  -ms-flex-pack: distribute;
  justify-content: space-around;
  border: none;
}
._1PQtx:hover {
  background-color: #bbaa7d;
}
._ovdG {
  margin: 0.28571em 0;
  font-size: 0.14em;
  font-weight: 600;
}
._1pCpK ._ovdG,
._22wzQ ._ovdG {
  color: #ff101a;
}
._23Q2- ._ovdG,
.vc95X ._ovdG {
  color: #002bf7;
}
.vxXxO ._ovdG {
  margin: 0;
  font-size: 0.12em;
  height: 1em;
  line-height: 1em;
}
._2dIpe {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.01em;
  background-color: hsla(0, 0%, 100%, 0.9);
  width: 7.96em;
  height: 100%;
}
.vxXxO ._2dIpe {
  width: calc(100% - 0.18em);
  background-color: #161614;
  padding: 0;
}
.bZLxX {
  background-color: rgba(13, 13, 12, 0.9);
}
._1awLq,
.bZLxX {
  position: relative;
}
._1awLq {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 0.12em;
  height: 0.12em;
  margin-bottom: 0.04em;
  border: 0.012em solid;
  border-color: transparent;
}
.vxXxO ._1awLq {
  width: 0.06em;
  height: 0.06em;
  margin-bottom: 0;
}
._1awLq._27nmx {
  border-radius: 50%;
}
._1awLq._27nmx.J0TDv {
  border: none;
}
._1awLq._27nmx._3IB0p {
  border-color: #ff101a;
}
._1awLq._27nmx._3Ok4O {
  border-color: #002bf7;
}
._1awLq._25-Y2 {
  border-radius: 50%;
}
._1awLq._25-Y2.J0TDv {
  border: none;
}
._1awLq._25-Y2._3IB0p {
  border-color: #ff101a;
  background-color: #ff101a;
}
._1awLq._25-Y2._3Ok4O {
  border-color: #002bf7;
  background-color: #002bf7;
}
._1awLq._1PNv_ {
  border: none;
}
._1awLq._1PNv_._3IB0p:before,
._1awLq._1PNv_._3Ok4O:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 84.61538%;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-transform: rotate(-45deg) scale(1.414);
  transform: rotate(-45deg) scale(1.414);
  -webkit-transform-origin: right 1px;
  transform-origin: right 1px;
}
._1awLq._1PNv_._3IB0p:before {
  border-top: 1px solid #ff101a;
}
._1awLq._1PNv_._3Ok4O:before {
  border-top: 1px solid #002bf7;
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
.kbIpK {
  background-image: url(../../../assets/7f7d0789.png);
}
._2UoED {
  position: relative;
  width: 7.04em;
  height: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-flex-item-align: center;
  align-self: center;
}

@-webkit-keyframes _2336z {
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
@keyframes _2336z {
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
@-webkit-keyframes _3ozZx {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes _3ozZx {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._13bxE {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-size: 1rem;
  background-color: #fff;
}
._1ia6Q,
._10wGC {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
._10wGC {
  left: 0;
  background: #fff;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}
._10wGC:after {
  content: '';
  width: 1em;
  height: 1em;
  background: #fff url(/assets/fa6343e7.png) no-repeat 50%;
  background-size: 1em 1em;
  -webkit-animation: _3ozZx 1s linear infinite;
  animation: _3ozZx 1s linear infinite;
}
._15uun {
  width: 100%;
  height: 100%;
}
.-gItF {
  background: url(/assets/6628a633.png) no-repeat 50%;
  background-size: 100% 100%;
}
.O-L5P {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
}
.iuP_3 {
  font-family: HelveticaNeue-Light, HelveticaNeue-Thin, sans-serif;
}
@-webkit-keyframes _3dIrZ {
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
@keyframes _3dIrZ {
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
@-webkit-keyframes _1wzcr {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes _1wzcr {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
.-h3Ej {
  display: none;
}
._3O51A {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}
._1Zx9m {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 1em;
  height: 1em;
  background-color: rgba(4, 4, 3, 0.8);
  font-size: 0.2em;
  font-weight: 600;
  color: #06f039;
  border-radius: 50%;
  z-index: 200;
  text-align: center;
  -webkit-box-shadow: 0 0 0.45em 0.7em rgba(4, 4, 3, 0.8);
  box-shadow: 0 0 0.45em 0.7em rgba(4, 4, 3, 0.8);
}
._215Mm {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(0, 0, 0, 0.8)),
    color-stop(50%, transparent),
    to(rgba(0, 0, 0, 0.8))
  );
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8),
    transparent 50%,
    rgba(0, 0, 0, 0.8)
  );
}
.O31nq {
  background-color: #040403;
}
.O31nq ._2rFXP .iuP_3,
.O31nq ._3ZAa7 .iuP_3 {
  position: absolute;
  top: 0.33333em;
  bottom: auto;
  font-size: 0.6em;
}
.O31nq._215Mm ._3D5UH,
.O31nq._215Mm ._9T9Vf,
.O31nq._215Mm .rWt8_ {
  width: 0.46em;
  height: 0.68em;
  position: absolute;
  bottom: 0.05em;
}
.O31nq ._2Jq38 {
  width: 100%;
}
.O31nq._215Mm ._1Glky {
  width: 0.41em;
  height: 0.61em;
  border: 0.009em solid hsla(0, 0%, 53%, 0.7);
  border-radius: 0.027em;
  position: absolute;
  bottom: 0.06em;
}
.O31nq ._2rFXP {
  border: 0.01em solid #7d7254;
  width: 50%;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#20399e),
    color-stop(41%, rgba(1, 40, 199, 0.3)),
    color-stop(rgba(1, 40, 199, 0)),
    to(rgba(67, 133, 199, 0))
  );
  background-image: linear-gradient(
    180deg,
    #20399e,
    rgba(1, 40, 199, 0.3) 41%,
    rgba(1, 40, 199, 0),
    rgba(67, 133, 199, 0)
  );
}
.O31nq ._2rFXP._3LZ_7:after {
  top: 0;
  height: 1.56em;
  background: -webkit-gradient(
        linear,
        right top,
        left top,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(20%, #ffe404),
        color-stop(40%, hsla(0, 0%, 100%, 0)),
        color-stop(60%, #ffe404),
        color-stop(80%, hsla(0, 0%, 100%, 0)),
        to(#ffe404)
      )
      no-repeat,
    -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(20%, #ffe404),
        color-stop(40%, hsla(0, 0%, 100%, 0)),
        color-stop(60%, #ffe404),
        color-stop(80%, hsla(0, 0%, 100%, 0)),
        to(#ffe404)
      ) no-repeat,
    -webkit-gradient(
        linear,
        left top,
        right top,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(20%, #ffe404),
        color-stop(40%, hsla(0, 0%, 100%, 0)),
        color-stop(60%, #ffe404),
        color-stop(80%, hsla(0, 0%, 100%, 0)),
        to(#ffe404)
      ) no-repeat,
    -webkit-gradient(
        linear,
        left bottom,
        left top,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(20%, #ffe404),
        color-stop(40%, hsla(0, 0%, 100%, 0)),
        color-stop(60%, #ffe404),
        color-stop(80%, hsla(0, 0%, 100%, 0)),
        to(#ffe404)
      ) no-repeat;
  background: linear-gradient(
        270deg,
        hsla(0, 0%, 100%, 0) 0,
        #ffe404 20%,
        hsla(0, 0%, 100%, 0) 40%,
        #ffe404 60%,
        hsla(0, 0%, 100%, 0) 80%,
        #ffe404
      )
      no-repeat,
    linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0) 0,
        #ffe404 20%,
        hsla(0, 0%, 100%, 0) 40%,
        #ffe404 60%,
        hsla(0, 0%, 100%, 0) 80%,
        #ffe404
      )
      no-repeat,
    linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0) 0,
        #ffe404 20%,
        hsla(0, 0%, 100%, 0) 40%,
        #ffe404 60%,
        hsla(0, 0%, 100%, 0) 80%,
        #ffe404
      )
      no-repeat,
    linear-gradient(
        0deg,
        hsla(0, 0%, 100%, 0) 0,
        #ffe404 20%,
        hsla(0, 0%, 100%, 0) 40%,
        #ffe404 60%,
        hsla(0, 0%, 100%, 0) 80%,
        #ffe404
      )
      no-repeat;
  background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  background-size: 400% 0.02em, 0.02em 400%, 400% 0.02em, 0.02em 400%;
}
.O31nq ._2rFXP._3LZ_7 ._2KLvD {
  width: 0.48em;
  height: 0.32em;
  margin: auto;
  margin-top: 0.02em;
  background-size: contain;
}
:lang(en-US) .O31nq ._2rFXP._3LZ_7 ._2KLvD {
  background-image: url(/assets/3d52640e.png);
}
:lang(id-ID) .O31nq ._2rFXP._3LZ_7 ._2KLvD {
  background-image: url(/assets/3d52640e.png);
}
:lang(ja-JP) .O31nq ._2rFXP._3LZ_7 ._2KLvD {
  background-image: url(/assets/c56bed6e.png);
}
:lang(ko-KR) .O31nq ._2rFXP._3LZ_7 ._2KLvD {
  background-image: url(/assets/028df840.png);
}
:lang(th-TH) .O31nq ._2rFXP._3LZ_7 ._2KLvD {
  background-image: url(/assets/c8bbfb53.png);
}
:lang(vi-VN) .O31nq ._2rFXP._3LZ_7 ._2KLvD {
  background-image: url(/assets/185c7a6f.png);
}
:lang(zh-CN) .O31nq ._2rFXP._3LZ_7 ._2KLvD {
  background-image: url(/assets/57401355.png);
}
:lang(zh-TW) .O31nq ._2rFXP._3LZ_7 ._2KLvD {
  background-image: url(/assets/a06b7d95.png);
}
.O31nq ._2rFXP ._2KLvD {
  width: 0.48em;
  height: 0.32em;
  margin: auto;
  margin-top: 0.02em;
  background-size: contain;
}
:lang(en-US) .O31nq ._2rFXP ._2KLvD {
  background-image: url(/assets/759d45f9.png);
}
:lang(id-ID) .O31nq ._2rFXP ._2KLvD {
  background-image: url(/assets/759d45f9.png);
}
:lang(ja-JP) .O31nq ._2rFXP ._2KLvD {
  background-image: url(/assets/6b2d8a5c.png);
}
:lang(ko-KR) .O31nq ._2rFXP ._2KLvD {
  background-image: url(/assets/120833ed.png);
}
:lang(th-TH) .O31nq ._2rFXP ._2KLvD {
  background-image: url(/assets/006a8150.png);
}
:lang(vi-VN) .O31nq ._2rFXP ._2KLvD {
  background-image: url(/assets/759d45f9.png);
}
:lang(zh-CN) .O31nq ._2rFXP ._2KLvD {
  background-image: url(/assets/f19886e6.png);
}
:lang(zh-TW) .O31nq ._2rFXP ._2KLvD {
  background-image: url(/assets/2075710d.png);
}
.O31nq ._2rFXP .iuP_3 {
  top: 0.58333em;
  left: 0.26667em;
  color: #002bf7;
}
.O31nq ._2rFXP ._9T9Vf {
  right: 0.03em;
}
.O31nq ._2rFXP ._3D5UH {
  right: 0.51em;
}
.O31nq ._2rFXP .rWt8_ {
  right: 1.11em;
}
.O31nq ._2rFXP ._2Jq38 ._9T9Vf {
  right: 0.07em;
}
.O31nq ._2rFXP ._2Jq38 ._3D5UH {
  right: 0.53em;
}
.O31nq ._2rFXP ._2Jq38 .rWt8_ {
  right: 1.1em;
}
.O31nq ._3ZAa7 {
  width: 50%;
  border: 0.01em solid #7d7254;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(174, 0, 1, 0.7)),
    color-stop(37%, rgba(187, 1, 3, 0.3)),
    to(rgba(204, 2, 5, 0))
  );
  background-image: linear-gradient(
    180deg,
    rgba(174, 0, 1, 0.7),
    rgba(187, 1, 3, 0.3) 37%,
    rgba(204, 2, 5, 0)
  );
}
.O31nq ._3ZAa7._3LZ_7:after {
  top: 0;
  height: 1.56em;
  background: -webkit-gradient(
        linear,
        right top,
        left top,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(20%, #ffe404),
        color-stop(40%, hsla(0, 0%, 100%, 0)),
        color-stop(60%, #ffe404),
        color-stop(80%, hsla(0, 0%, 100%, 0)),
        to(#ffe404)
      )
      no-repeat,
    -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(20%, #ffe404),
        color-stop(40%, hsla(0, 0%, 100%, 0)),
        color-stop(60%, #ffe404),
        color-stop(80%, hsla(0, 0%, 100%, 0)),
        to(#ffe404)
      ) no-repeat,
    -webkit-gradient(
        linear,
        left top,
        right top,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(20%, #ffe404),
        color-stop(40%, hsla(0, 0%, 100%, 0)),
        color-stop(60%, #ffe404),
        color-stop(80%, hsla(0, 0%, 100%, 0)),
        to(#ffe404)
      ) no-repeat,
    -webkit-gradient(
        linear,
        left bottom,
        left top,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(20%, #ffe404),
        color-stop(40%, hsla(0, 0%, 100%, 0)),
        color-stop(60%, #ffe404),
        color-stop(80%, hsla(0, 0%, 100%, 0)),
        to(#ffe404)
      ) no-repeat;
  background: linear-gradient(
        270deg,
        hsla(0, 0%, 100%, 0) 0,
        #ffe404 20%,
        hsla(0, 0%, 100%, 0) 40%,
        #ffe404 60%,
        hsla(0, 0%, 100%, 0) 80%,
        #ffe404
      )
      no-repeat,
    linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0) 0,
        #ffe404 20%,
        hsla(0, 0%, 100%, 0) 40%,
        #ffe404 60%,
        hsla(0, 0%, 100%, 0) 80%,
        #ffe404
      )
      no-repeat,
    linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0) 0,
        #ffe404 20%,
        hsla(0, 0%, 100%, 0) 40%,
        #ffe404 60%,
        hsla(0, 0%, 100%, 0) 80%,
        #ffe404
      )
      no-repeat,
    linear-gradient(
        0deg,
        hsla(0, 0%, 100%, 0) 0,
        #ffe404 20%,
        hsla(0, 0%, 100%, 0) 40%,
        #ffe404 60%,
        hsla(0, 0%, 100%, 0) 80%,
        #ffe404
      )
      no-repeat;
  background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  background-size: 400% 0.02em, 0.02em 400%, 400% 0.02em, 0.02em 400%;
}
.O31nq ._3ZAa7._3LZ_7 ._2KLvD {
  width: 0.48em;
  height: 0.32em;
  margin: auto;
  margin-top: 0.02em;
  background-size: contain;
}
:lang(en-US) .O31nq ._3ZAa7._3LZ_7 ._2KLvD {
  background-image: url(/assets/6888241f.png);
}
:lang(id-ID) .O31nq ._3ZAa7._3LZ_7 ._2KLvD {
  background-image: url(/assets/6888241f.png);
}
:lang(ja-JP) .O31nq ._3ZAa7._3LZ_7 ._2KLvD {
  background-image: url(/assets/b939c29d.png);
}
:lang(ko-KR) .O31nq ._3ZAa7._3LZ_7 ._2KLvD {
  background-image: url(/assets/e42ad4cc.png);
}
:lang(th-TH) .O31nq ._3ZAa7._3LZ_7 ._2KLvD {
  background-image: url(/assets/402c36b7.png);
}
:lang(vi-VN) .O31nq ._3ZAa7._3LZ_7 ._2KLvD {
  background-image: url(/assets/d4d8117d.png);
}
:lang(zh-CN) .O31nq ._3ZAa7._3LZ_7 ._2KLvD {
  background-image: url(/assets/bdb5e1b9.png);
}
:lang(zh-TW) .O31nq ._3ZAa7._3LZ_7 ._2KLvD {
  background-image: url(/assets/db398fb1.png);
}
.O31nq ._3ZAa7 ._2KLvD {
  width: 0.48em;
  height: 0.32em;
  margin: auto;
  margin-top: 0.02em;
  background-size: contain;
}
:lang(en-US) .O31nq ._3ZAa7 ._2KLvD {
  background-image: url(/assets/e4296885.png);
}
:lang(id-ID) .O31nq ._3ZAa7 ._2KLvD {
  background-image: url(/assets/e4296885.png);
}
:lang(ja-JP) .O31nq ._3ZAa7 ._2KLvD {
  background-image: url(/assets/67331efc.png);
}
:lang(ko-KR) .O31nq ._3ZAa7 ._2KLvD {
  background-image: url(/assets/3a67d872.png);
}
:lang(th-TH) .O31nq ._3ZAa7 ._2KLvD {
  background-image: url(/assets/154d8ae7.png);
}
:lang(vi-VN) .O31nq ._3ZAa7 ._2KLvD {
  background-image: url(/assets/e4296885.png);
}
:lang(zh-CN) .O31nq ._3ZAa7 ._2KLvD {
  background-image: url(/assets/493119a6.png);
}
:lang(zh-TW) .O31nq ._3ZAa7 ._2KLvD {
  background-image: url(/assets/493119a6.png);
}
.O31nq ._3ZAa7 .iuP_3 {
  top: 0.58333em;
  right: 0.26667em;
  color: #ff101a;
}
.O31nq ._3ZAa7 ._37xl3 {
  left: 0;
}
.O31nq ._3ZAa7 ._9T9Vf {
  left: 0.03em;
}
.O31nq ._3ZAa7 ._3D5UH {
  left: 0.51em;
}
.O31nq ._3ZAa7 .rWt8_ {
  left: 1.11em;
}
.O31nq ._3ZAa7 ._2Jq38 ._9T9Vf {
  left: 0.07em;
}
.O31nq ._3ZAa7 ._2Jq38 ._3D5UH {
  left: 0.53em;
}
.O31nq ._3ZAa7 ._2Jq38 .rWt8_ {
  left: 1.1em;
}
.oX7x6 {
  top: 0.15em;
  display: -ms-flexbox;
  display: flex;
  width: 1em;
  height: 1em;
  line-height: 0.96;
  font-size: 0.2em;
}
.iuP_3,
.oX7x6 {
  position: absolute;
  font-weight: 600;
}
.iuP_3 {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  height: 1.23077em;
  font-size: 0.26em;
  line-height: 1.23;
  text-align: center;
}
._215Mm ._3DU1U {
  width: 0.42em;
  height: 0.63em;
}
._3D5UH,
._9T9Vf,
.rWt8_ {
  position: absolute;
  bottom: 0.06em;
}
.rWt8_ {
  -webkit-transform: translateY(0.105em) rotate(90deg);
  transform: translateY(0.105em) rotate(90deg);
}
._37xl3 {
  top: 0;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}
._2rFXP,
._3ZAa7,
._37xl3 {
  position: absolute;
  height: 100%;
}
._2rFXP,
._3ZAa7 {
  width: 50%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
}
._2rFXP:after,
._3ZAa7:after {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  -webkit-animation: _3dIrZ 2s infinite linear;
  animation: _3dIrZ 2s infinite linear;
}
._2rFXP {
  border-right: 1px solid #454031;
  z-index: 1;
  color: #002bf7;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#20399e),
    color-stop(41%, rgba(1, 40, 199, 0.3)),
    color-stop(rgba(1, 40, 199, 0)),
    to(rgba(67, 133, 199, 0))
  );
  background-image: linear-gradient(
    180deg,
    #20399e,
    rgba(1, 40, 199, 0.3) 41%,
    rgba(1, 40, 199, 0),
    rgba(67, 133, 199, 0)
  );
}
._2rFXP._3LZ_7:after {
  background: -webkit-gradient(
        linear,
        right top,
        left top,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(20%, #ffe404),
        color-stop(40%, hsla(0, 0%, 100%, 0)),
        color-stop(60%, #ffe404),
        color-stop(80%, hsla(0, 0%, 100%, 0)),
        to(#ffe404)
      )
      no-repeat,
    -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(20%, #ffe404),
        color-stop(40%, hsla(0, 0%, 100%, 0)),
        color-stop(60%, #ffe404),
        color-stop(80%, hsla(0, 0%, 100%, 0)),
        to(#ffe404)
      ) no-repeat,
    -webkit-gradient(
        linear,
        left top,
        right top,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(20%, #ffe404),
        color-stop(40%, hsla(0, 0%, 100%, 0)),
        color-stop(60%, #ffe404),
        color-stop(80%, hsla(0, 0%, 100%, 0)),
        to(#ffe404)
      ) no-repeat,
    -webkit-gradient(
        linear,
        left bottom,
        left top,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(20%, #ffe404),
        color-stop(40%, hsla(0, 0%, 100%, 0)),
        color-stop(60%, #ffe404),
        color-stop(80%, hsla(0, 0%, 100%, 0)),
        to(#ffe404)
      ) no-repeat;
  background: linear-gradient(
        270deg,
        hsla(0, 0%, 100%, 0) 0,
        #ffe404 20%,
        hsla(0, 0%, 100%, 0) 40%,
        #ffe404 60%,
        hsla(0, 0%, 100%, 0) 80%,
        #ffe404
      )
      no-repeat,
    linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0) 0,
        #ffe404 20%,
        hsla(0, 0%, 100%, 0) 40%,
        #ffe404 60%,
        hsla(0, 0%, 100%, 0) 80%,
        #ffe404
      )
      no-repeat,
    linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0) 0,
        #ffe404 20%,
        hsla(0, 0%, 100%, 0) 40%,
        #ffe404 60%,
        hsla(0, 0%, 100%, 0) 80%,
        #ffe404
      )
      no-repeat,
    linear-gradient(
        0deg,
        hsla(0, 0%, 100%, 0) 0,
        #ffe404 20%,
        hsla(0, 0%, 100%, 0) 40%,
        #ffe404 60%,
        hsla(0, 0%, 100%, 0) 80%,
        #ffe404
      )
      no-repeat;
  background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  background-size: 400% 0.02em, 0.02em 400%, 400% 0.02em, 0.02em 400%;
}
._2rFXP .oX7x6 {
  left: 0.25em;
  color: #002bf7;
}
._2rFXP .iuP_3 {
  top: -0.07692em;
  left: 1.61538em;
}
._2rFXP ._37xl3 {
  right: 0;
}
._2rFXP ._9T9Vf {
  right: 0.09em;
}
._2rFXP ._3D5UH {
  right: 0.56em;
}
._2rFXP .rWt8_ {
  right: 1.12em;
}
._3ZAa7 {
  right: 0;
  color: #ff101a;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(174, 0, 1, 0.7)),
    color-stop(37%, rgba(187, 1, 3, 0.3)),
    to(rgba(204, 2, 5, 0))
  );
  background-image: linear-gradient(
    180deg,
    rgba(174, 0, 1, 0.7),
    rgba(187, 1, 3, 0.3) 37%,
    rgba(204, 2, 5, 0)
  );
}
._3ZAa7._3LZ_7:after {
  background: -webkit-gradient(
        linear,
        right top,
        left top,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(20%, #ffe404),
        color-stop(40%, hsla(0, 0%, 100%, 0)),
        color-stop(60%, #ffe404),
        color-stop(80%, hsla(0, 0%, 100%, 0)),
        to(#ffe404)
      )
      no-repeat,
    -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(20%, #ffe404),
        color-stop(40%, hsla(0, 0%, 100%, 0)),
        color-stop(60%, #ffe404),
        color-stop(80%, hsla(0, 0%, 100%, 0)),
        to(#ffe404)
      ) no-repeat,
    -webkit-gradient(
        linear,
        left top,
        right top,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(20%, #ffe404),
        color-stop(40%, hsla(0, 0%, 100%, 0)),
        color-stop(60%, #ffe404),
        color-stop(80%, hsla(0, 0%, 100%, 0)),
        to(#ffe404)
      ) no-repeat,
    -webkit-gradient(
        linear,
        left bottom,
        left top,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(20%, #ffe404),
        color-stop(40%, hsla(0, 0%, 100%, 0)),
        color-stop(60%, #ffe404),
        color-stop(80%, hsla(0, 0%, 100%, 0)),
        to(#ffe404)
      ) no-repeat;
  background: linear-gradient(
        270deg,
        hsla(0, 0%, 100%, 0) 0,
        #ffe404 20%,
        hsla(0, 0%, 100%, 0) 40%,
        #ffe404 60%,
        hsla(0, 0%, 100%, 0) 80%,
        #ffe404
      )
      no-repeat,
    linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0) 0,
        #ffe404 20%,
        hsla(0, 0%, 100%, 0) 40%,
        #ffe404 60%,
        hsla(0, 0%, 100%, 0) 80%,
        #ffe404
      )
      no-repeat,
    linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0) 0,
        #ffe404 20%,
        hsla(0, 0%, 100%, 0) 40%,
        #ffe404 60%,
        hsla(0, 0%, 100%, 0) 80%,
        #ffe404
      )
      no-repeat,
    linear-gradient(
        0deg,
        hsla(0, 0%, 100%, 0) 0,
        #ffe404 20%,
        hsla(0, 0%, 100%, 0) 40%,
        #ffe404 60%,
        hsla(0, 0%, 100%, 0) 80%,
        #ffe404
      )
      no-repeat;
  background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  background-size: 400% 0.02em, 0.02em 400%, 400% 0.02em, 0.02em 400%;
}
._3ZAa7 .oX7x6 {
  right: 0.25em;
  text-align: right;
  color: #ff101a;
}
._3ZAa7 .iuP_3 {
  top: -0.07692em;
  right: 1.61538em;
}
._3ZAa7 ._37xl3 {
  left: 0;
}
._3ZAa7 ._9T9Vf {
  left: 0.09em;
}
._3ZAa7 ._3D5UH {
  left: 0.56em;
}
._3ZAa7 .rWt8_ {
  left: 1.12em;
}
._1i3Xq {
  -webkit-transform: translate(-500%);
  transform: translate(-500%);
}
.P81Zq {
  -webkit-transform: translate(-500%, 0.105em) rotate(90deg);
  transform: translate(-500%, 0.105em) rotate(90deg);
}
._4D4Z_ {
  -webkit-transform: translate(500%);
  transform: translate(500%);
}
.f2eRi {
  -webkit-transform: translate(500%, 0.105em) rotate(90deg);
  transform: translate(500%, 0.105em) rotate(90deg);
}
._4KEdk {
  -webkit-transform: translate(0);
  transform: translate(0);
}
._3U3QE,
._4KEdk {
  -webkit-transition: -webkit-transform 0.2s ease-out;
  transition: -webkit-transform 0.2s ease-out;
  transition: transform 0.2s ease-out;
  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
}
._3U3QE {
  -webkit-transform: translateY(0.105em) rotate(90deg);
  transform: translateY(0.105em) rotate(90deg);
}
._37K6O {
  opacity: 1;
}
._3Crdy {
  opacity: 0;
  -webkit-transition: opacity 0.1s ease-in;
  transition: opacity 0.1s ease-in;
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

@-webkit-keyframes _1Ch5Z {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1Ch5Z {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _27WM2 {
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
@keyframes _27WM2 {
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
@-webkit-keyframes _3GwQI {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._2RJCk {
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
._2S4h7 {
  font-size: 0.14em;
  color: hsla(0, 0%, 100%, 0.87);
  text-align: center;
}
.Tn9ok {
  width: 0.32em;
  height: 0.32em;
  margin-bottom: 0.04em;
}
._2z1u_,
._2z1u_._3GwQI {
  width: 100%;
  height: 100%;
}
._2z1u_._3GwQI {
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

._2z1u_._3GwQI:after {
  content: '';
  width: 100%;
  height: 100%;
  background: transparent url(../../../assets/fa6343e7.png) no-repeat 50%;
  background-size: 100% 100%;
  -webkit-animation: _3GwQI 1s linear infinite;
  animation: _3GwQI 1s linear infinite;
}
._2z1u_._2d1tt {
  background: url(data:image/png;base64,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);
  background-size: 100% 100%;
}
._2z1u_._1WXRu {
  background: url(data:image/png;base64,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);
  background-size: 100% 100%;
}
._2z1u_._1L8dD {
  background: url(data:image/png;base64,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);
  background-size: 100% 100%;
}
@keyframes _3GwQI {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes _1XVbH {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _8_aSH {
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
@keyframes _8_aSH {
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
._1n5Gv {
  -ms-flex-direction: column;
  flex-direction: column;
}
._1n5Gv,
._3YN-0 {
  display: -ms-flexbox;
  display: flex;
}
._3YN-0 {
  height: 100%;
  width: 100%;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 0.14em;
}
._2gqVx {
  margin-bottom: 0.1em;
}
._17yKL {
  font-size: 0.4em;
  line-height: 1;
  font-weight: 600;
  color: transparent;
}
._17yKL._1_B9t {
  font-family: Helvetica;
}
._2NiWQ {
  position: absolute;
  text-shadow: 0.05em 0.05em 0.05em rgba(0, 0, 0, 0.8);
}
.Edge ._2NiWQ {
  color: #000;
}
.zCXj0 {
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
.EGrlT {
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
._1-S9Z ._2NiWQ {
  text-shadow: 0 0.08333em 0.04167em rgba(0, 0, 0, 0.6);
}
._1-S9Z ._2gqVx {
  margin-bottom: 0.04em;
}
._1-S9Z ._2gqVx ._17yKL {
  font-size: 0.2em;
}
._1-S9Z ._1_B9t {
  font-size: 0.24em;
  letter-spacing: 0.00833em;
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
@-webkit-keyframes _2Yt5e {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2Yt5e {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes wdQVh {
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
@keyframes wdQVh {
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
._3TRtO {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._3TRtO.vxXxO {
  border: none;
}
._1mw7U {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 0.24em;
  height: 100%;
  background-color: rgba(13, 13, 12, 0.9);
}
.vxXxO ._1mw7U {
  width: 0.18em;
  background-color: #161614;
}
._1PQtx {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 50%;
  outline: none;
  background-color: #d4d1ca;
}
.vxXxO ._1PQtx {
  -ms-flex-pack: distribute;
  justify-content: space-around;
  border: none;
}
._1PQtx:hover {
  background-color: #bbaa7d;
}
._ovdG {
  margin: 0.28571em 0;
  font-size: 0.14em;
  font-weight: 600;
}
._1pCpK ._ovdG,
._22wzQ ._ovdG {
  color: #ff101a;
}
._23Q2- ._ovdG,
.vc95X ._ovdG {
  color: #002bf7;
}
.vxXxO ._ovdG {
  margin: 0;
  font-size: 0.12em;
  height: 1em;
  line-height: 1em;
}
._2dIpe {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.01em;
  background-color: hsla(0, 0%, 100%, 0.9);
  width: 7.96em;
  height: 100%;
}
.vxXxO ._2dIpe {
  width: calc(100% - 0.18em);
  background-color: #161614;
  padding: 0;
}
.bZLxX {
  background-color: rgba(13, 13, 12, 0.9);
}
._1awLq,
.bZLxX {
  position: relative;
}
._1awLq {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 0.12em;
  height: 0.12em;
  margin-bottom: 0.04em;
  border: 0.012em solid;
  border-color: transparent;
}
.vxXxO ._1awLq {
  width: 0.06em;
  height: 0.06em;
  margin-bottom: 0;
}
._1awLq._27nmx {
  border-radius: 50%;
}
._1awLq._27nmx.J0TDv {
  border: none;
}
._1awLq._27nmx._3IB0p {
  border-color: #ff101a;
}
._1awLq._27nmx._3Ok4O {
  border-color: #002bf7;
}
._1awLq._25-Y2 {
  border-radius: 50%;
}
._1awLq._25-Y2.J0TDv {
  border: none;
}
._1awLq._25-Y2._3IB0p {
  border-color: #ff101a;
  background-color: #ff101a;
}
._1awLq._25-Y2._3Ok4O {
  border-color: #002bf7;
  background-color: #002bf7;
}
._1awLq._1PNv_ {
  border: none;
}
._1awLq._1PNv_._3IB0p:before,
._1awLq._1PNv_._3Ok4O:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 84.61538%;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-transform: rotate(-45deg) scale(1.414);
  transform: rotate(-45deg) scale(1.414);
  -webkit-transform-origin: right 1px;
  transform-origin: right 1px;
}
._1awLq._1PNv_._3IB0p:before {
  border-top: 1px solid #ff101a;
}
._1awLq._1PNv_._3Ok4O:before {
  border-top: 1px solid #002bf7;
}
@-webkit-keyframes _1rLRG {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1rLRG {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _1PWXp {
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
@keyframes _1PWXp {
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
@-webkit-keyframes _37pw3 {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes _37pw3 {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._2DvJY {
  position: absolute;
  top: 0;
  bottom: -0.01em;
  left: 0;
  right: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 700;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.9);
}
._2DvJY._2dcoU {
  display: none;
}
._2DvJY.SBKG8 {
  background-color: transparent;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(2%, #6f6651),
    color-stop(60%, #494435),
    color-stop(99%, #2f2c23)
  );
  background-image: linear-gradient(0deg, #6f6651 2%, #494435 60%, #2f2c23 99%);
  opacity: 0.95;
  padding-top: 0.14em;
}
._2DvJY ._3-tgk {
  font-size: 0.24em;
  height: 0.83333em;
  line-height: 1em;
  letter-spacing: 0.00833em;
  font-family: Arial, sans-serif;
  text-shadow: 0 0.08333em 0.04167em rgba(0, 0, 0, 0.6);
  color: #ff101a;
  font-weight: 600;
}
@-webkit-keyframes _1R8Tq {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes _1R8Tq {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@-webkit-keyframes _2qx8A {
  0% {
    background-size: 0 0;
    opacity: 0;
  }
  24.9% {
    background-size: 100% 100%;
    opacity: 1;
  }
  56.6% {
    opacity: 0.8;
  }
  79.52% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes _2qx8A {
  0% {
    background-size: 0 0;
    opacity: 0;
  }
  24.9% {
    background-size: 100% 100%;
    opacity: 1;
  }
  56.6% {
    opacity: 0.8;
  }
  79.52% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-webkit-keyframes _2E7Sp {
  0% {
    -webkit-transform: scale(4.54);
    transform: scale(4.54);
    opacity: 0;
  }
  5.8% {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }
  9.3% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  79.52% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  85.84% {
    -webkit-transform: scale(0.89);
    transform: scale(0.89);
  }
  to {
    -webkit-transform: scale(1.37);
    transform: scale(1.37);
    opacity: 0;
  }
}
@keyframes _2E7Sp {
  0% {
    -webkit-transform: scale(4.54);
    transform: scale(4.54);
    opacity: 0;
  }
  5.8% {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }
  9.3% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  79.52% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  85.84% {
    -webkit-transform: scale(0.89);
    transform: scale(0.89);
  }
  to {
    -webkit-transform: scale(1.37);
    transform: scale(1.37);
    opacity: 0;
  }
}
@-webkit-keyframes _2gXVZ {
  0% {
    -webkit-transform: scale(2.54);
    transform: scale(2.54);
    opacity: 0;
  }
  10.3% {
    -webkit-transform: scale(0.873);
    transform: scale(0.873);
    opacity: 1;
  }
  14.15% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  79.52% {
    opacity: 1;
  }
  to {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
    opacity: 0;
  }
}
@keyframes _2gXVZ {
  0% {
    -webkit-transform: scale(2.54);
    transform: scale(2.54);
    opacity: 0;
  }
  10.3% {
    -webkit-transform: scale(0.873);
    transform: scale(0.873);
    opacity: 1;
  }
  14.15% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  79.52% {
    opacity: 1;
  }
  to {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
    opacity: 0;
  }
}
@-webkit-keyframes _3AUOR {
  0%,
  10.3% {
    opacity: 0;
  }
  14.15% {
    opacity: 1;
  }
  79.52% {
    opacity: 1;
  }
  92.68%,
  to {
    opacity: 0;
  }
}
@keyframes _3AUOR {
  0%,
  10.3% {
    opacity: 0;
  }
  14.15% {
    opacity: 1;
  }
  79.52% {
    opacity: 1;
  }
  92.68%,
  to {
    opacity: 0;
  }
}
@-webkit-keyframes _9yua- {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _9yua- {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _22Ug2 {
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
@keyframes _22Ug2 {
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
.XeaQq {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex: 1 1;
  flex: 1 1;
  height: 100%;
  padding: 0 0.06em;
  z-index: 1400;
}
._1Vb0B,
.XeaQq {
  color: hsla(0, 0%, 100%, 0.87);
}
._1Vb0B {
  font-size: 0.12em;
}
._1rlPQ,
.vwAKX {
  width: 0.12em;
  height: 0.12em;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAcBJREFUWAnNlr1KA0EUhXdF0FLt/SltRPEFBLUVbCQgvoC+gZWxEext7AUtbEwrxDcQxRfwp9eUpnH97iSRtdi5s3NnIRdOJpuZ2fNlcjKzWTauVRTFEZptmm/SY7BK3zIQHdpunuc/nrHRXRPKzCn699AxIIvK2KhuDUBu+okWkEC00LR8mKpCANqY3aMCbaJTINZok5QKwG/fR7e4naFXNIMOgUgSUhUAM1dAfPDmHN2gbyQhldXYRsH3Yc6/qjVR/gnogTucoEdkDmktgBE6ED10yfUFMoU0CqAE8sL7NooOqQlAQFgJU0jNAAIhBUhUSJMBDCFqhzQpgFuKwWoEh7QRgBKIGtJGAUYgvtZ3HPvmBfWxQ64wcB/NITlLuuiOwMpO6qoRAIzlvGih9YFN9k57hfHb8PqvSQowPBM2uPsukmO7j7wPNMkAMJ/H7AAtIalndM23/nJXFS9mAIzlQNpBW0hC3UNi/ESrlgkAczVkGkEUAMbBIUsKgLEsca2QJQPAPCpkZgCMTSHTAPKqARjLE4+UPPGUd7JOeSdzIwwvISEU88qdzODtpmoA6k5mBaicz0+Q5Lm/0mBcOn4B043K3kbHNY8AAAAASUVORK5CYII=);
  background-size: contain;
}
._1rlPQ.jCmph,
.vwAKX.jCmph {
  opacity: 0.5;
  pointer-events: none;
}
.vwAKX {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
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
@-webkit-keyframes _20kIY{0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}to{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}}@keyframes _20kIY{0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}to{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}}@-webkit-keyframes _1OM93{0%{background-position:100% 0,100% 100%,0 100%,0 0}50%{background-position:50% 0,100% 50%,50% 100%,0 50%}to{background-position:0 0,100% 0,100% 100%,0 100%}}@keyframes _1OM93{0%{background-position:100% 0,100% 100%,0 100%,0 0}50%{background-position:50% 0,100% 50%,50% 100%,0 50%}to{background-position:0 0,100% 0,100% 100%,0 100%}}._1u7Oy{width:100%;height:100%;display:-ms-flexbox;display:flex;background-color:rgba(0,0,0,.9)}.LubBs .YTd1m{-ms-flex:2 1;flex:2 1}.LubBs ._2rUbi{padding:.13em .18em .3em 0}.LubBs ._28-KX._13TU1{top:.49em;left:.75em}.LubBs ._28-KX._2caYM{top:.94em;left:.42em}.LubBs ._28-KX._2uTga{top:.94em;left:1.08em}.YTd1m{-ms-flex:1 1;flex:1 1;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.fggwu{-ms-flex:1 1;flex:1 1}._2rUbi{height:100%;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:.05em .17em .21em 0}._2rUbi ._18Qk0{color:#002bf7}._2rUbi ._2sl8O{color:#ff101a}._2rUbi .WAcVF{color:#06f039}._3OM9Q{font-size:.2em;text-align:center;font-weight:700;margin-top:.75em}._3OM9Q._2cHZA{color:hsla(0,0%,100%,.87);font-size:.3em}._1lcuP{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}._28-KX._28-KX{position:absolute;height:.56em;width:.56em}._28-KX._13TU1{top:.41em;left:.65em}._28-KX._2caYM{top:.88em;left:.32em}._28-KX._2uTga{top:.88em;left:.98em}
.nzA04 {
	width:30px;
	height:30px
}


@-webkit-keyframes sTdU7{0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}to{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}}@keyframes sTdU7{0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}to{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}}@-webkit-keyframes _22CiP{0%{background-position:100% 0,100% 100%,0 100%,0 0}50%{background-position:50% 0,100% 50%,50% 100%,0 50%}to{background-position:0 0,100% 0,100% 100%,0 100%}}@keyframes _22CiP{0%{background-position:100% 0,100% 100%,0 100%,0 0}50%{background-position:50% 0,100% 50%,50% 100%,0 50%}to{background-position:0 0,100% 0,100% 100%,0 100%}}.kNAvM{width:100%;height:100%;background-color:rgba(0,0,0,.9)}.kmkF6 ._1IvMt,.kNAvM{display:-ms-flexbox;display:flex}.kmkF6 ._1IvMt{-ms-flex-pack:end;justify-content:flex-end;padding-right:.16em;position:absolute;left:.67em;top:.74em}.kmkF6 ._2aGkK{padding:.12em 0 .12em .98em}.kmkF6 ._15HMj{padding:0;width:1.5em}.kmkF6 ._2bj-I{color:#fff}.kmkF6 ._2bj-I._3OEdE{color:hsla(0,0%,100%,.87);padding-bottom:.08333em;padding-right:.02778em}._1IvMt{-ms-flex:1 1;flex:1 1;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}._1IvMt,._2aGkK{display:-ms-flexbox;display:flex}._2aGkK{-ms-flex:1 1;flex:1 1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around;padding:.12em 0 .1em}._3fZDS{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:.56em;height:.56em;border-radius:50%}._3fZDS.OjgYi{background-color:#ff101a}._3fZDS.Ss66R{background-color:#373131}._3fZDS.nwA2N{background-color:#2e9935}._15HMj{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;min-height:.28em;min-width:.45em;padding-right:.16em}._2bj-I{color:hsla(0,0%,100%,.87);font-size:.2em;font-weight:500;text-align:center}._2bj-I._3OEdE{color:#fff;font-size:.36em;font-weight:700;padding-bottom:.05556em}

.VOXnU._135Vr{
    z-index: 15500;
  pointer-events: none;
}
</style>
