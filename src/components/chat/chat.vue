<template>
  <div class="chat">
    <!-- <scroll class="chat-wrapper" :data="chatList">
      <div> -->
        <ul>
          <router-link to="/chatroom" tag="li" v-for="info in chatList" :key="info.id" class="item">
            <div class="item-cell" @click="gotoChatroom(info)">
              <div class="img-unread">
                <img class="item-img" :src="info.imgurl" height="40" width="40" />
                <span v-html="info.unread" v-show="info.unread"></span>
              </div>
              <h2 class="dissname" v-html="info.dissname"></h2>
              <p class="summary" v-html="info.summary"></p>
              <span class="item-time" v-html="info.time"></span>
            </div>
          </router-link>
        </ul>
      <!-- </div>
    </scroll> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      chatList: [
        {
          dissname: '张皓谦',
          dissid: 'zhanghaoqian',
          phone: '18312345678',
          imgurl:
           'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          location: '张皓谦',
          album: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          source: '通过搜索手机号添加',
          summary: '点击发送消息',
          unread: '',
          time: '06:25'
        }
      ]
    }
  },
  methods: {
    gotoChatroom (info) {
      // info.unread = ''
      // info.summary = '点击发送消息'
      // info.time = '刚刚'
      // this.setAddress(info)
    }
  }
}
</script>
<style lang="">
.chat {
  position: fixed;
  top: 50px;
  bottom: 50px;
  left: 0;
  right: 0;
}
.item {
  width: 100%;
  margin-left: 0;
}
.chat-wrapper {
  height: 100%;
  overflow: hidden;
}
.item-cell {
  position: relative;
  border-bottom: 1px solid #26a2ff;
  height: 60px;
}
.img-unread {
  position: relative;
}
.img-unread span {
  position: absolute;
  top: 0;
  left: 44px;
  font-size: 10px;
  line-height: 14px;
  color: #fff;
  height: 14px;
  width: 14px;
  text-align: center;
  vertical-align: middle;
  background-color: red;
  border: 1px solid red;
  border-radius: 50%;
}
.item-img {
  float: left;
  margin: 10px 10px 10px 10px;
}
.dissname {
  font-size: 15px;
  padding-top: 10px;
  padding-left: 70px;
}
.summary {
  font-size: 13px;
  padding-top: 10px;
  padding-left: 70px;
  color: rgba(153, 153, 153, 0.8);
}
.item-time {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12px;
  color: rgba(153, 153, 153, 0.8);
}
</style>
