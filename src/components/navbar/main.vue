<template>
  <!-- _2_3QV _3F1Pr
_3F1Pr -->
  <div class="_2rSjS "
       ref='navlist'
       :class="enterstate? noticechange?'_1FxLV _1cz3e _2_3QV viZP-':'_1FxLV _1cz3e _2_3QV' : '' "
       @mouseover="enter"
       @mouseleave="leave">
    <div class="_13nYS"
         role="button"
         tabindex="0">
      <div class="_31gC6"
           :class="noticechange? '_1M4a6' :''"
           @mouseover="enterone($event)"
           @mouseleave="leaveone($event)"
           v-on:click="clickone($event,'GAMEHALL','livegame')"
           role="button"
           tabindex="0">
        <div class="OXr__">
          <!--是否选中 -->
          <div class=""
               :class="active=='livegame'? '_187ji' : '' "></div>
          <div class="V_eHS _1DPQy _2TTK0"></div>
        </div>
        <div class="_1S5Wv"
             v-if="enterstate">
          <span class="_1FELY ">真人厅</span>
        </div>
      </div>

      <div class="_31gC6"
           :class="noticechange?'navfirstshow' :''"
           @mouseover="enterone($event)"
           @mouseleave="leaveone($event)"
           v-on:click="clickone($event,'EGAME')"
           role="button"
           tabindex="0">
        <div class="OXr__">
          <!--是否选中 -->
          <div class=""
               :class="active=='EGAME'? '_187ji' : '' "></div>
          <div class="V_eHS _3p2St _2r9By"></div>
        </div>
        <div class="_1S5Wv"
             v-if="enterstate">
          <span class="_1FELY ">电玩厅</span>
        </div>
      </div>

      <div class="_31gC6"
           @mouseover="enterone($event)"
           @mouseleave="leaveone($event)"
           v-on:click="clickone($event,'CHESSGAME')"
           role="button"
           tabindex="0">
        <div class="OXr__">
          <!--是否选中 -->
          <div class=""
               :class="active=='CHESSGAME'? '_187ji' : '' "></div>
          <div class="V_eHS _3zkDy"></div>
        </div>
        <div class="_1S5Wv"
             v-if="enterstate">
          <span class="_1FELY ">棋牌厅</span>
        </div>
      </div>

      <div class="_31gC6"
           @mouseover="enterone($event)"
           @mouseleave="leaveone($event)"
           v-on:click="clickone1($event,'HISTORY')"
           role="button"
           tabindex="0">
        <div class="OXr__">
          <!--是否选中 -->
          <div class=""
               :class="active=='HISTORY'? '_187ji' : '' "></div>
          <div class="V_eHS _2j_lu"></div>
        </div>
        <div class="_1S5Wv"
             v-if="enterstate">
          <span class="_1FELY ">游戏记录</span>
        </div>
      </div>

      <div class="_31gC6"
           @mouseover="enterone($event)"
           @mouseleave="leaveone($event)"
           v-on:click="clickone1($event,'REPOART')"
           role="button"
           tabindex="0">
        <div class="OXr__">
          <!--是否选中 -->
          <div class=""
               :class="active=='REPOART'? '_187ji' : '' "></div>
          <div class="V_eHS _1C907"></div>
        </div>
        <div class="_1S5Wv"
             v-if="enterstate">
          <span class="_1FELY ">会员报表</span>
        </div>
      </div>
      <div class="_31gC6"
           @mouseover="enterone($event)"
           @mouseleave="leaveone($event)"
           v-on:click="clickone1($event,'APPDOWN')"
           role="button"
           tabindex="0">
        <div class="OXr__">
          <div class=""
               :class="active=='APPDOWN'? '_187ji' : '' "></div>
          <div class="V_eHS _3QilF"></div>
        </div>
        <div class="_1S5Wv"
             v-if="enterstate">
          <span class="_1FELY ">下载 App</span>
        </div>
      </div>

      <div class="_31gC6"
           @mouseover="enterone($event)"
           @mouseleave="leaveone($event)"
           v-on:click="clickone1($event,'HOTLINE')"
           role="button"
           tabindex="0">
        <div class="OXr__">
          <div class=""
               :class="active=='HOTLINE'? '_187ji' : '' "></div>
          <div class="V_eHS _3B7gc"></div>
        </div>
        <div class="_1S5Wv"
             v-if="enterstate">
          <span class="_1FELY ">线上客服</span>
        </div>
      </div>
      <div class="_31gC6"
           @mouseover="enterone($event)"
           @mouseleave="leaveone($event)"
           v-on:click="clickone1($event,'SETTING')"
           role="button"
           tabindex="0">
        <div class="OXr__">
          <div class=""
               :class="active=='SETTING'? '_187ji' : '' "></div>
          <div class="V_eHS _26Nx9"></div>
        </div>
        <div class="_1S5Wv"
             v-if="enterstate">
          <span class="_1FELY ">游戏设定</span>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
/* eslint-disable */
export default {
  name: 'Navbar',
  data () {
    return {
      enterstate: 0,
      active: 0,
      game: "",
      noticechange: false,
      hallnotice: 0
    }
  },
  methods: {
    hasClass: function (elements, cName) {
      return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
    },
    removeClass: function (elements, cName) {
      if (this.hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
      };
    },
    addClass: function (elements, cName) {
      if (!this.hasClass(elements, cName)) {
        elements.className += " " + cName;
      };
    },
    enter: function () {
      this.enterstate = 1
      // console.log('ooo')
    },
    leave: function () {
      this.enterstate = 0
    },
    enterone: function ($event) {
      $event.currentTarget.className = '_31gC6 _1_E-g'
    },
    leaveone: function ($event) {
      $event.currentTarget.className = '_31gC6'
    },
    clickone1: function ($event, index) {
      // this.active = index
      this.$store.dispatch('HistoryShow', index)
    },
    clickone: function ($event, index, livegame) {
      console.log('nav-bar-------------')
      if (livegame) {
        this.active = livegame
        if (this.game) {
          this.$store.dispatch('SetuPage', this.game)
        } else {
          this.$store.dispatch('SetuPage', index)
        }
      } else {
        this.active = index
        console.log(this.$store.state.player)
        if (this.$store.state.player && !this.$store.state.player.disposed) {
          this.$store.state.player.dispose()
          this.$set(this.$store.state.player, 'disposed', true)
        }
        if (this.$store.state.playerGame && !this.$store.state.playerGame.disposed) {
          this.$store.state.playerGame.dispose()
          this.$set(this.$store.state.playerGame, 'disposed', true)
        }
        this.$store.dispatch('SetuPage', index)
      }
    }
  },
  mounted () {
    console.log(this.$store.state.firstnoticed)
    // var storage = window.localStorage
    // var flag = storage.getItem('first')
    // if (!flag) {
    //   this.enterstate = 1;
    //   this.active = 'livegame';
    //   this.noticechange = true;
    //   this.addClass(this.$refs.navlist, "viZP-")
    // }
  },
  watch: {
    '$store.state.hallnotice': function () {
      console.log(this.$store.state.hallnotice)
      if (this.$store.state.hallnotice == "0" || this.$store.state.hallnotice == "2") {
        this.enterstate = 0;
        this.noticechange = false
      } else if (this.$store.state.hallnotice == "1") {

        this.enterstate = 1;
        //this.active = 'livegame';
        this.noticechange = true;

        //this.addClass(this.$refs.navlist, "viZP-")
      }
    },
    '$store.state.page': function () {
      // 已经登录
      if (this.$store.state.page == 'GAME' || this.$store.state.page == 'GAMEHALL') {
        this.game = this.$store.state.page
        this.active = 'livegame'
      } else {


        this.active = this.$store.state.page
      }
    }
  }
}
</script>

<style scoped>
@import "../../assets/style/navbar.css";
._2rSjS.viZP- {
  background-color: rgba(0, 0, 0, 0.9);
}
._2rSjS.viZP- {
  z-index: 15500;
  pointer-events: none;
}
._2rSjS.viZP- {
  width: 2.2em;
}
._31gC6._1M4a6 {
  background-color: #7d7254;
}
._2rSjS ._13nYS ._31gC6._1M4a6 ._1S5Wv ._1FELY {
  color: #fdeed4;
}
</style>
