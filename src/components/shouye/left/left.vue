<template>
  <div class="_15AXJ left-part"
       @mouseover="enter"
       @mouseleave="leave"
       role="presentation">
    <div class="_1KHYK"></div>
    <div class="_32V79 _3pOou"
         :class="active? '_3rBzh' : '' "></div>
    <div class="_2r6Vf "
         :class="active? 'm9yPc' : '' ">
      <span class="_2avQ6">棋牌厅</span>
    </div>
    <div class="_27621">
      <div class="_1T7iQ"
           role="button"
           tabindex="0"
           v-show="active">
        <span class="_16jrb">立即进入</span>
      </div>
    </div>
    <div class="_PSNi _2N1wY "
         :class="active? '_3rBzh' : '' "></div>
    <div class="JJEsc"></div>
    <div class="_1eTk-">
      <div class="_36TFn ">
        <li class="u0MNT _3lsPA"
            role="presentation"><img class="_1bXpA"
               alt="QP_zhajinhua"
               :src="tupian1">
          <div class="_2sqI8">
            <div class="_3dyaM">十三水</div>
            <div class="ripple text-l center-block _3cEX7">
              <div class="_39at- ripple">进入游戏</div>
            </div>
          </div>
        </li>
      </div>
      <div class="_36TFn ">
        <li class="u0MNT _3lsPA"
            role="presentation"><img class="_1bXpA"
               alt="QP_dragontiger"
               :src="tupian2">
          <div class="_2sqI8">
            <div class="_3dyaM">抢庄牌九</div>
            <div class="ripple text-l center-block _3cEX7">
              <div class="_39at- ripple">进入游戏</div>
            </div>
          </div>
        </li>
      </div>
      <div class="_36TFn ">
        <li class="u0MNT _3lsPA"
            role="presentation"><img class="_1bXpA"
               alt="QP_dragontiger"
               :src="tupian3">
          <div class="_2sqI8">
            <div class="_3dyaM">二八杠</div>
            <div class="ripple text-l center-block _3cEX7">
              <div class="_39at- ripple">进入游戏</div>
            </div>
          </div>
        </li>
      </div>
      <div class="_36TFn ">
        <li class="u0MNT _3lsPA"
            role="presentation"><img class="_1bXpA"
               alt="QP_zhajinhuaspeed"
               :src="tupian8">
          <div class="_2sqI8">
            <div class="_3dyaM">炸金花</div>
            <div class="ripple text-l center-block _3cEX7">
              <div class="_39at- ripple">进入游戏</div>
            </div>
          </div>
        </li>
      </div>
      <div class="_36TFn ">
        <li class="u0MNT _3lsPA"
            role="presentation"><img class="_1bXpA"
               alt="QP_zhajinhuaspeed"
               :src="tupian4">
          <div class="_2sqI8">
            <div class="_3dyaM">极速炸金花</div>
            <div class="ripple text-l center-block _3cEX7">
              <div class="_39at- ripple">进入游戏</div>
            </div>
          </div>
        </li>
      </div>
      <div class="_36TFn ">
        <li class="u0MNT _3lsPA"
            role="presentation"><img class="_1bXpA"
               alt="QP_bairenniuniu"
               :src="tupian7">
          <div class="_2sqI8">
            <div class="_3dyaM">百人龙湖</div>
            <div class="ripple text-l center-block _3cEX7">
              <div class="_39at- ripple">进入游戏</div>
            </div>
          </div>
        </li>
      </div>
      <div class="_36TFn ">
        <li class="u0MNT _3lsPA"
            role="presentation"><img class="_1bXpA"
               alt="QP_tongbiniuniu"
               :src="tupian5">
          <div class="_2sqI8">
            <div class="_3dyaM">通比牛牛</div>
            <div class="ripple text-l center-block _3cEX7">
              <div class="_39at- ripple">进入游戏</div>
            </div>
          </div>
        </li>
      </div>
      <div class="_36TFn ">
        <li class="u0MNT _3lsPA"
            role="presentation"><img class="_1bXpA"
               alt="QP_qiangzhuangniuniu"
               :src="tupian6">
          <div class="_2sqI8">
            <div class="_3dyaM">抢庄牛牛</div>
            <div class="ripple text-l center-block _3cEX7">
              <div class="_39at- ripple">进入游戏</div>
            </div>
          </div>
        </li>
      </div>
      <div class="_36TFn ">
        <li role="presentation"
            class="u0MNT _3lsPA"><img alt="QP_dragontiger"
               :src="tupian9"
               class="_1bXpA">
          <div class="_2sqI8">
            <div class="_3dyaM">百人牛牛</div>
            <div class="ripple text-l center-block _3cEX7">
              <div class="_39at- ripple">进入游戏</div>
            </div>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'left',
  data () {
    return {
      tupian1: require('../../../assets/banners/61e9ea5e-8b46-49ea-6d2c-b19bf0a9d4ff@1x.jpg'),
      tupian2: require('../../../assets/banners/2e8bd727-5175-4f56-6fae-72247f7ebdf2@1x.jpg'),
      tupian3: require('../../../assets/banners/4d4e2598-70f4-49b0-68ac-c2da96b0cb30@1x.jpg'),
      tupian4: require('../../../assets/banners/378cc47d-c592-4ecf-7b3d-4441e9fbbb18@1x.jpg'),
      tupian5: require('../../../assets/banners/139e0cef-4b0d-468a-647b-62918fbb11aa@1x.jpg'),
      tupian6: require('../../../assets/banners/eb0b33e0-ae68-40eb-6fdd-385102b0cadd@1x.jpg'),
      tupian7: require('../../../assets/banners/85587377-e3d5-4e24-7557-0ad599fb100f@1x.jpg'),
      tupian8: require('../../../assets/banners/afbc197b-d8ce-48d9-5222-51c20feade1a@1x.jpg'),
      tupian9: require('../../../assets/banners/99bbd283-61fc-45db-6a2f-8d913fd41375@1x.jpg'),
      active: false
    }
  },
  methods: {
    enter: function () {
      this.active = true
      // console.log('in')
    },
    leave: function () {
      this.active = false
      // console.log('out')
    }
  }
}
</script>
<style>
</style>
