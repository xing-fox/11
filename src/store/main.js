/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import ws from '@/api/socket'
Vue.use(Vuex)

// 发送所有的数据
// var all_desk_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17]
// var split_desk = { mid_desk: [3, 4, 5, 6, 7], baijiale: [8, 9, 10], others: [11, 12, 13] }
var alldesk
var userVo = {}
ws.addMessageListener('desk_list_q', addChildGameHall)

ws.addMessageListener('login', loginInfo)
function loginInfo (vo) {
  var self = this
  // console.log('login==' + JSON.stringify(vo))
  // console.log(this)
  userVo.id = vo.id
  userVo.name = vo.name
  userVo.nickname = vo.nickname
  userVo.money = vo.credit
  userVo.pic = vo.pic
  userVo.loginVo = vo;
  // 登录时候 store保存当前的用户 以及当前的页面组件
  ws.removeMessageListener('login', self.loginInfo)
  // ws.sendMessage('member_bet_addition')
  // ws.sendMessage('jack_pot')
  store.dispatch('SetuUser', userVo)
  store.dispatch('SetuPage', 'GGBAR')
}
function addChildGameHall (vo) {
  // 所有 游戏桌列表
  alldesk = vo.desk_list
  ws.removeMessageListener('desk_list_q', addChildGameHall)
  store.dispatch('Set_All_Desk', alldesk)
  console.log('desklist', alldesk)
  // 露珠的监听
  ws.addMessageListener('baijiale_paper_path', onRoadMap)
  ws.addMessageListener('longhu_paper_path', onRoadMap)
  ws.addMessageListener('douniu_paper_path', onDNRoadMap)
};

function onRoadMap (vo) {
  // console.log("luzhu---------------", vo.desk_id)
  store.dispatch('Paper_Path', vo)
}
function onDNRoadMap (vo) {
  store.commit('DNPATH', vo)
}

function sendM (bet_addition_id) {
  console.log('zixuan_enter_desk', bet_addition_id)
  ws.sendMessage('zixuan_enter_desk', { bet_addition_id: bet_addition_id })
  ws.sendMessage("dates")
}


ws.addMessageListener('clear_bet', onClearBet)
ws.addMessageListener('stop_bet', stopBet)
ws.addMessageListener('member_info', memberInfo)

ws.addMessageListener('baijiale_start_bet', startBet)
ws.addMessageListener('longhu_start_bet', startBet)
ws.addMessageListener('shaibao_start_bet', startBet)
ws.addMessageListener('lunpan_start_bet', startBet)
ws.addMessageListener('quejiu_start_bet', startBet)
ws.addMessageListener('sangong_start_bet', startBet)
ws.addMessageListener('douniu_start_bet', startBet)

ws.addMessageListener('baijiale_bet', onBetSuccess)
ws.addMessageListener('longhu_bet', onBetSuccess)
ws.addMessageListener('shaibao_bet', onSbBetSuccess)
ws.addMessageListener('lunpan_bet', onLpBetSuccess)
ws.addMessageListener('quejiu_bet', onQueJiuBetSuccess)
ws.addMessageListener('sangong_bet', onSGBetSuccess)
ws.addMessageListener('douniu_bet', onDNBetSuccess)

ws.addMessageListener('baijiale_send_card', onSendOneCard)
ws.addMessageListener('longhu_send_card', onSendOneCard)
ws.addMessageListener('quejiu_send_dices', onQJDices)
ws.addMessageListener('quejiu_send_mahjong', onQJCard)
ws.addMessageListener('shaibao_send_cards', onSbCard)
ws.addMessageListener('lunpan_send_ball_toss', onLpCard)
ws.addMessageListener('sangong_open_card', onSGCard)
ws.addMessageListener('baijiale_open_card', onOpenOneCard)
ws.addMessageListener('douniu_send_card', onDNCard)

ws.addMessageListener('baijiale_inning_result', onResult)
ws.addMessageListener('longhu_inning_result', onResult)
ws.addMessageListener('shaibao_inning_result', onSbResult)
ws.addMessageListener('lunpan_inning_result', onLpResult)
ws.addMessageListener('quejiu_inning_result', onQJResult)
ws.addMessageListener('sangong_inning_result', onSGResult)
ws.addMessageListener('douniu_inning_result', onDNResult)

ws.addMessageListener('sangong_set_zhuang_men', onSGZhuang)

ws.addMessageListener('jack_pot_bet', onJackPotBet)
ws.addMessageListener('jack_pot', onJackpot)

ws.addFailListener('baijiale_bet', omwsBetFail)
ws.addFailListener('longhu_bet', omwsBetFail)
ws.addFailListener('shaibao_bet', omwsBetFail)
ws.addFailListener('lunpan_bet', omwsBetFail)
ws.addFailListener('quejiu_bet', omwsBetFail)
ws.addFailListener('sangong_bet', omwsBetFail)
ws.addFailListener('douniu_bet', omwsBetFail)

ws.addMessageListener('lunpan_desk_result_history', onLPResultHistory)
ws.addMessageListener('lunpan_bet_summary', onLPMoneyPool)
ws.addMessageListener('shaibao_desk_result_history', onSBResultHistory)
ws.addMessageListener('shaibao_bet_summary', onSBMoneyPool)
ws.addMessageListener('quejiu_desk_result_history', onQueJiuResultHistory)
ws.addMessageListener('douniu_desk_result_history', onDouNiuResultHistory)

ws.addMessageListener('quejiu_bet_summary', onQueJiuMoneyPool)
ws.addMessageListener('douniu_bet_summary', onDouNiuMoneyPool)

ws.addMessageListener('baijiale_desk_result_history', onResultHistory)
ws.addMessageListener('longhu_desk_result_history', onLHResultHistory)

ws.addMessageListener('sangong_desk_result_history', onSGResultHistory)
ws.addMessageListener('sangong_bet_summary', onSGMoneyPool)

ws.addMessageListener('count_down', onCountDown)

ws.addMessageListener('zixuan_enter_desk', ziXuan)
ws.addMessageListener('desk_info_q', onDeskInfo)
ws.addMessageListener('zixuan_exchange_desk', onExchangeDesk)
ws.addMessageListener('zixuan_exit_desk', exitDesk)

ws.addMessageListener('enter_desk', onEnterDesk)
ws.addMessageListener('desk_info', onDeskInfoGame)




ws.addMessageListener("desk_members", onDeskMembers);
ws.addMessageListener("member_bet", onMemberBet);
ws.addMessageListener("miapi_member", onMember);

ws.addMessageListener("exit_desk", oneExitDesk);

ws.addMessageListener("dates", onDates);
// 雀九

ws.addMessageListener("push_out_member", onPushOutMember);
ws.addMessageListener("force_exit", onForceExit);
ws.addMessageListener("force_member_exit_desk", onPushOutMember);
function memberInfo (vo) {
  store.commit('MEMBERINFO', vo)
}
function onLHResultHistory (vo) {
  store.commit('ONLHRESULTHISTORY', vo)
}
function onResultHistory (vo) {
  store.commit('ONRESULTHISTORY', vo)
}

function onSGZhuang (vo) {
  store.commit('ONSGZHUANG', vo)
}

function onSGCard (vo) {
  store.commit('ONSGCARD', vo)
}
function onDNCard (vo) {
  store.commit('ONDNCARD', vo)
}

function onSGMoneyPool (vo) {
  store.commit('ONSGMONEYPOOL', vo)
}

function onSGResultHistory (vo) {
  store.commit('ONSGRESULTHISTORY', vo)
}

function onSGResult (vo) {
  store.commit('ONSGRESULT', vo)
}
function onDNResult (vo) {
  store.commit('ONDNRESULT', vo)
}

function onSGBetSuccess (vo) {
  store.commit('ONSGBETSUCCESS', vo)
}
function onDNBetSuccess (vo) {
  store.commit('ONDNBETSUCCESS', vo)
}
function onDouNiuResultHistory (vo) { store.commit('ONDOUNIURESULTHISTORY', vo) }
function onQueJiuResultHistory (vo) { store.commit('ONQUEJIURESULTHISTORY', vo) }
function onQueJiuMoneyPool (vo) { store.commit('ONQUEJIUMONEYPOOL', vo) }
function onDouNiuMoneyPool (vo) { store.commit('ONDOUNIUMONEYPOOL', vo) }

function onQueJiuBetSuccess (vo) {
  store.commit('ONQUEJIUBETSUCCESS', vo)
}
function onQJDices (vo) {
  store.commit('ONQJDICES', vo)
}
function onQJCard (vo) {
  store.commit('ONQJCARD', vo)
}
function onPushOutMember (vo) {
  console.log('退桌')
  store.commit('ONPUSHOUTMEMBER', vo)
}
function onForceExit (vo) {
  store.commit('ONFORCEEXIT', vo)
}

function onDates (vo) {
  console.log("获取服务时间===", JSON.stringify(vo))
  // _timeTxt._datetxt.text = vo.date.substr(0,10).split("-").join(".")
  // _timeTxt._timetxt.text = vo.date.substr(11,5);
  store.commit('ONDATES', vo.date)
  setTimeout(function () {
    ws.sendMessage("dates");
  }, (60 - vo.m) * 1000);
}

function oneExitDesk (vo) {
  store.commit('ONEEXITDESK', vo)
}

function onMember (vo) {
  store.commit('ONMEMBER', vo)
}

function onMemberBet (vo) {
  store.commit('ONMEMBERBET', vo)
}

function onDeskMembers (vo) {
  store.commit('ONDESKMEMBERS', vo)
}

function onSBMoneyPool (vo) {
  store.commit('ONSBMONEYPOOL', vo)
}

function onSBResultHistory (vo) {
  store.commit('ONSBRESULTHISTORY', vo)
}

function onLPMoneyPool (vo) {
  store.commit('ONLPMONEYPOOL', vo)
}
function onLPResultHistory (vo) {
  store.commit('ONLPRESULTHISTORY', vo)
}


function onEnterDesk (vo) {
  store.commit('ONENTERDESK', vo)
}
function onDeskInfoGame (vo) {
  store.commit('ONDESKINFOGAME', vo)
}
function exitDesk (vo) {
  store.commit('EXITDESK', vo)
}
function onExchangeDesk (vo) {
  store.commit('ONEXCHANGEDESK', vo)
}
function onDeskInfo (vo) {
  store.commit('ONDESKINFO', vo)
}
function ziXuan (vo) {

  store.commit('ZIXUAN', vo)
}
function onCountDown (vo) {
  store.commit('ONCOUNTDOWN', vo)
}

function onClearBet (vo) {
  store.commit('ONClEARBET', vo)
}
function stopBet (vo) {
  store.commit('STOPBET', vo)
}
function startBet (vo) {
  store.commit('STARTBET', vo)
}
function onBetSuccess (vo) {
  store.commit('ONBETSUCCESS', vo)
}
function onSbBetSuccess (vo) {
  store.commit('ONSBBETSUCCESS', vo)
}
function onLpBetSuccess (vo) {
  store.commit('ONLPBETSUCCESS', vo)
}
function onSendOneCard (vo) {
  store.commit('ONSENDONECARD', vo)
}
function onResult (vo) {
  store.commit('ONRESULT', vo)
}
function onSbResult (vo) {
  store.commit('ONSBRESULT', vo)
}

function onQJResult (vo) {
  store.commit('ONQJRESULT', vo)
}
function onLpResult (vo) {
  store.commit('ONLPRESULT', vo)
}
function onSbCard (vo) {
  store.commit('ONSBCARD', vo)
}
function onLpCard (vo) {
  store.commit('ONLPCARD', vo)
}

function onJackPotBet (vo) {
  store.commit('ONJACKPOTBET', vo)
}
function onOpenOneCard (vo) {
  store.commit('ONOPENONECARD', vo)
}
function omwsBetFail (vo) {
  store.commit('OMWSBETFAIL', vo)
}
function onJackpot (vo) {
  store.commit('JACKPOARTLIVE', vo)
}
ws.addFailListener('failConntex', failConnect)
function failConnect (vo) {
  store.commit('FAILCONNECT', vo)
}
var store = new Vuex.Store({
  state: {
    hallnotice: "-1",
    firstnoticed: false,
    user: {}, // 用户
    page: '', // 当前页面
    chip: false, // 是否显示所有筹码
    curr_chip: [], // 当前底部筹码
    chang_chip_index: [],
    selected_chip_index: null, // 当前选择的筹码
    click_num: 0,
    userLimitID: null,
    all_desk: null,
    split_desk: [],
    selectDeskId: -1,
    selectDeskData: {},
    luzhu: {},
    ziXuanDesk: [],
    baijiale: true,
    changDesk: ' ',
    showall: false,
    historyShow: false,
    clear_bet: {},
    stopBet: {},
    startBet: {},
    onBetSuccess: {},
    onSbBetSuccess: {},
    onLpBetSuccess: {},
    onSendOneCard: {},
    onResult: {},
    onSbResult: {},
    onLpResult: {},
    onSbCard: {},
    onLpCard: {},
    onJackPotBet: {},
    onOpenOneCard: {},
    omwsBetFail: {},
    jackPortLive: '',
    player: '',
    playerGame: "",
    gameReady: true,
    // bodyReady:false,
    onCountDown: '',
    ziXuan: '',
    onDeskInfo: '',
    onExchangeDesk: '',
    exitDesk: 0,
    onEnterDesk: '',
    onDeskInfoGame: '',
    gametimer: null,
    onLPResultHistory,
    onLPMoneyPool: '',
    onSBResultHistory: '',
    onSBMoneyPool: '',
    onDeskMembers: '',
    onMemberBet: "",
    onMember: "",
    oneExitDesk: '',
    zixuan_gameid: "",
    togamehall: false,
    onDates: "",
    game_effect: true,
    effect: true,
    game_music: true,
    onQueJiuResultHistory: '',
    onDouNiuResultHistory: '',
    onQueJiuMoneyPool: '',
    onDouNiuMoneyPool: "",
    isInTable: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, 21: 0 },
    onQueJiuBetSuccess: "",
    onQJResult: "",
    onQJDices: "",
    onQJCard: "",
    onPushOutMember: "",
    onForceExit: "",
    failConnect: false,
    onSGBetSuccess: "",
    onDNBetSuccess: "",
    onSGCard: "",
    onDNCard: "",
    onSGResult: "",
    onDNResult: "",
    onSGResultHistory: "",
    onSGMoneyPool: "",
    onSGZhuang: "",
    coinStacks: { 18: {}, 19: {}, 16: {} },
    onResultHistory: {},
    onLHResultHistory: {},
    LPplayerGame: null,
    douniu_path: {},
    num: 0,
    updateUser: {},
  },
  getters: {
    messArray_get: state => state.curr_chip
  },
  mutations: {
    HALLNOTICE: (state, vo) => {
      state.hallnotice = vo
    },
    DNPATH: (state, vo) => {
      state.douniu_path = vo
    },
    ONLHRESULTHISTORY: (state, vo) => {
      state.onLHResultHistory = vo
    },
    ONRESULTHISTORY: (state, vo) => {
      state.onResultHistory = vo
    },
    COINSTACKS: (state, vo) => {
      state.coinStacks = vo
    },
    ONSGZHUANG: (state, vo) => {
      state.onSGZhuang = vo
    },
    ONSGMONEYPOOL: (state, vo) => {
      state.onSGMoneyPool = vo
    },
    ONSGRESULTHISTORY: (state, vo) => {
      state.onSGResultHistory = vo
    },
    ONSGRESULT: (state, vo) => {
      state.onSGResult = vo
    },
    ONDNRESULT: (state, vo) => {
      state.onDNResult = vo
    },
    ONSGCARD: (state, vo) => {
      state.onSGCard = vo
    },
    ONDNCARD: (state, vo) => {
      state.onDNCard = vo
    },
    ONDNBETSUCCESS: (state, vo) => {
      state.onDNBetSuccess = vo
    },
    ONSGBETSUCCESS: (state, vo) => {

      state.onSGBetSuccess = vo
    },
    FAILCONNECT: (state, vo) => {
      state.failConnect = vo
    },
    ONFORCEEXIT: (state, vo) => {
      state.onForceExit = vo
    },
    ONPUSHOUTMEMBER: (state, vo) => {
      state.onPushOutMember = vo
    },
    ONQJCARD: (state, vo) => {
      state.onQJCard = vo
    },
    ONQJDICES: (state, vo) => {
      state.onQJDices = vo
    },
    ONQJRESULT: (state, vo) => {
      state.coinStacks[18] = {};
      //console.log("--------雀九通知结果", state.coinStacks)
      state.onQJResult = vo
    },
    ONQUEJIUBETSUCCESS: (state, vo) => {
      state.onQueJiuBetSuccess = vo

    },
    ONQUEJIURESULTHISTORY: (state, vo) => {
      state.onQueJiuResultHistory = vo
    },
    ONDOUNIURESULTHISTORY: (state, vo) => {
      state.onDouNiuResultHistory = vo
    },
    ONQUEJIUMONEYPOOL: (state, vo) => {
      state.onQueJiuMoneyPool = vo
    },
    ONDOUNIUMONEYPOOL: (state, vo) => {
      state.onDouNiuMoneyPool = vo
    },
    GAMEMUSIC: (state, vo) => {
      state.game_music = vo
    },
    EFFECT: (state, vo) => {
      state.effect = vo
    },
    GAMEEFFECT: (state, vo) => {
      state.game_effect = vo
    },
    ONDATES: (state, vo) => {
      state.onDates = vo
    },
    TOGAMEHALL: (state, vo) => {
      state.togamehall = vo
    },
    ZIXUANTOGAME: (state, vo) => {
      state.zixuan_gameid = vo
    },
    ONEEXITDESK: (state, vo) => {
      state.oneExitDesk = state.oneExitDesk + "1"
    },
    ONMEMBER: (state, vo) => {
      state.onMember = vo
    },
    ONMEMBERBET: (state, vo) => {
      state.onMemberBet = vo
    },
    ONDESKMEMBERS: (state, vo) => {
      state.onDeskMembers = vo
    },
    ONSBMONEYPOOL: (state, vo) => {
      state.onSBMoneyPool = vo
    },
    ONSBRESULTHISTORY: (state, vo) => {
      state.onSBResultHistory = vo

    },
    ONLPMONEYPOOL: (state, vo) => {
      state.onLPMoneyPool = vo
    },
    ONLPRESULTHISTORY: (state, vo) => {
      state.onLPResultHistory = vo
    },
    GAMETIMER: (state, vo) => {
      state.gametimer = vo
    },
    ONDESKINFOGAME: (state, vo) => {
      state.onDeskInfoGame = vo
    },
    ONENTERDESK: (state, vo) => {
      state.num++
      state.onEnterDesk = state.num + vo
    },
    EXITDESK: (state, vo) => {
      state.num++
      state.exitDesk = state.num + state.exitDesk
    },
    ONEXCHANGEDESK: (state, vo) => {
      state.onExchangeDesk = vo
    },
    ONDESKINFO: (state, vo) => {
      state.onDeskInfo = vo
    },
    ZIXUAN: (state, vo) => {
      // 所有的桌子 和剩余的桌子
      // for (var i = 0; i <  state.all_desk.length; i++) {
      //   if (vo.indexOf(parseInt( state.all_desk[i].id)) === -1) {
      //     state.split_desk.push( state.all_desk[i])
      //   }
      // }
      state.ziXuan = vo
    },
    ONCOUNTDOWN: (state, vo) => {
      state.onCountDown = vo
    },
    GAMEREADY: (state, vo) => {
      state.gameReady = vo
    },
    // firstnoticed
    FIRSTNOTICED: (state, vo) => {
      state.firstnoticed = vo
    },
    // BODYREADY: (state, vo) => {
    //   state.gameReady = vo
    // },
    PLAYERGAME: (state, vo) => {
      state.playerGame = vo
    },
    LPPLAYERGAME: (state, vo) => {
      state.LPplayerGame = vo
    },
    PLAER: (state, vo) => {
      state.player = vo
    },
    JACKPOARTLIVE: (state, vo) => {
      state.jackPortLive = vo
    },
    OMWSBETFAIL: (state, vo) => {
      state.omwsBetFail = vo
    },
    ONOPENONECARD: (state, vo) => {
      state.onOpenOneCard = vo
    },
    ONJACKPOTBET: (state, vo) => {
      state.onJackPotBet = vo
    },
    ONLPCARD: (state, vo) => {
      state.onLpCard = vo
    },
    ONSBCARD: (state, vo) => {
      state.onSbCard = vo
    },
    ONLPRESULT: (state, vo) => {
      state.onLpResult = vo
    },
    ONSBRESULT: (state, vo) => {
      state.onSbResult = vo
      state.coinStacks[16] = {};
      //console.log("--------晒包通知结果", state.coinStacks)
    },
    ONRESULT: (state, vo) => {
      state.onResult = vo
    },
    ONSENDONECARD: (state, vo) => {
      state.onSendOneCard = vo
    },
    ONLPBETSUCCESS: (state, vo) => {
      state.onLpBetSuccess = vo
    },
    ONSBBETSUCCESS: (state, vo) => {
      state.onSbBetSuccess = vo
    },
    ONBETSUCCESS: (state, vo) => {
      state.onBetSuccess = vo
    },
    STARTBET: (state, vo) => {
      state.startBet = vo
      console.log('开始下注', vo)
    },
    STOPBET: (state, vo) => {
      state.stopBet = vo
    },
    ONClEARBET: (state, vo) => {
      console.log('洗牌中------------------------------------------------------')
      state.clear_bet = vo
    },
    SHOW_HISTORY: (state, isshow) => {
      state.historyShow = isshow
    },
    SHOW_ALL: (state, isshow) => {
      state.showall = isshow
    },
    EXCHANGE_DESK: (state, desk_id) => {
      state.changDesk = desk_id
    },
    SET_USER: (state, roles) => {
      state.user = roles
    },
    SET_ALL_DESK: (state, all_desk) => {

      // 所有的桌子 和剩余的桌子
      for (var i = 0; i < all_desk.length; i++) {
        if (state.ziXuanDesk.indexOf(all_desk[i].id) === -1) {
          state.split_desk.push(all_desk[i])
        }
      }
      state.all_desk = all_desk
    },
    SET_PAGE: (state, roles) => {
      state.page = roles
    },
    SHOW_CHIP: (state, chip) => {
      state.chip = chip
    },
    SET_CHIP: (state, chip) => {
      state.curr_chip = chip
    },
    CHANGE_CHIP_INDEX: (state, chip) => {
      state.chang_chip_index = chip
    },
    SELECTED_CHIP_INDEX: (state, chip) => {
      // console.log(chip)
      state.selected_chip_index = chip
      state.click_num++
    },
    USER_LIMIT_ID: (state, id) => {
      // 发送完限红后发送数据
      if (state.userLimitID === null) {
        sendM(id)
        state.userLimitID = id
      } else {
        state.userLimitID = id
      }
    },
    SET_CURR_DESK_ID: (state, id) => {
      state.selectDeskId = id
    },
    SET_CURR_DESK_DATA: (state, id) => {
      // console.log(id)
      state.selectDeskData = id
    },
    SET_ZI_XUAN_DESK: (state, desk_list) => {
      state.ziXuanDesk = desk_list.join(',').split(',')
      console.log(state.ziXuanDesk) // 单独进桌子
      if (state.all_desk) {
        state.split_desk = []
        for (var i = 0; i < state.all_desk.length; i++) {
          if (state.ziXuanDesk.indexOf(state.all_desk[i].id) === -1) {
            state.split_desk.push(state.all_desk[i])
          }
        }
      }
      // 自选桌子
    },
    MEMBERINFO: (state, id) => {
      state.updateUser = id

    },
    SET_BA_OT: (state, id) => {
      // 小转台的切换
      state.baijiale = id
      // console.log('baijiale---', state.baijiale)
    },
    PAPER_PATH: (state, id) => {
      state.luzhu = id
      // console.log('baijiale---', state.baijiale)
    }
  },
  actions: {
    Set_All_Desk: ({ commit }, user) => {
      commit('SET_ALL_DESK', user)
    },
    Set_Split_Desk: ({ commit }, user) => {
      commit('SET_SPLIT_DESK', user)
    },
    SetuUser: ({ commit }, user) => {
      commit('SET_USER', user)
    },
    SetuPage: ({ commit }, page) => {
      commit('SET_PAGE', page)
    },
    ShowChip: ({ commit }, chip) => {
      commit('SHOW_CHIP', chip)
    },
    SetChip: ({ commit }, chip) => {
      // console.log('现在的筹码', chip)
      commit('SET_CHIP', chip)
    },
    ChangeChipIndex: ({ commit }, chip) => {
      // console.log('改变的筹码', chip)
      commit('CHANGE_CHIP_INDEX', chip)
    },
    SelectedChipIndex: ({ commit }, chip) => {
      // console.log('改变的筹码', chip)
      commit('SELECTED_CHIP_INDEX', chip)
    },
    UserLimitId: ({ commit }, id) => {
      console.log('UserLimitId', id)// 发送数据
      commit('USER_LIMIT_ID', id)
    },
    SetCurrDeskId: ({ commit }, id) => {
      commit('SET_CURR_DESK_ID', id)
    },
    SetCurrDeskData: ({ commit }, id) => {
      commit('SET_CURR_DESK_DATA', id)
    },
    SetZiXuanDesk: ({ commit }, id) => {
      commit('SET_ZI_XUAN_DESK', id)
    },
    SetBaOt: ({ commit }, id) => {
      commit('SET_BA_OT', id)
    },
    Paper_Path: ({ commit }, id) => {
      commit('PAPER_PATH', id)
    },
    SetExchangeDesk: ({ commit }, id) => {
      // 交换桌子
      // console.log("changedeskid--------")
      commit('EXCHANGE_DESK', id)
    },
    ShowAll: ({ commit }, id) => {
      // zhanshi
      commit('SHOW_ALL', id)
    },
    HistoryShow: ({ commit }, id) => {
      // zhanshi
      commit('SHOW_HISTORY', id)
    }

  }
})
export default store
