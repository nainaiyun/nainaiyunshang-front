<template>
    <div class="nav">
      <div class="container float-clear">
        <img class="float-l" src="../assets/images/nainaiwang.png" alt="">
        <ul class="float-l">
          <li class="float-l" v-for="(item, index) in navList">
            <router-link :to="item.to">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "user-nav",
      data() {
          return {
            navList: [
              {
                name: '首页',
                to: '/'
              },
              {
                name: '账户信息',
                to: '/baseInfo'
              },
              {
                name: '资金管理',
                to: '/capital'
              },
              {
                name: '交易管理',
                to: '/transaction'
              },
              {
                name: '仓库管理',
                to: '/warehouse'
              },
              {
                name: '关注中心',
                to: '/follow'
              },

            ]
          }
      }
    }
</script>

<style scoped lang="less">
.nav{
  width: 100%;
  min-width: 1190px;
  height: 60px;
  background-color: #D61515;
  .container{
    width: 1190px;
    height: 100%;
    margin: 0 auto;
    img{
      height: 55px;
      position: relative;
      top: 2px;
      left: 20px;
    }
    ul {
      height: 100%;
      line-height: 60px;
      margin-left: 70px;
      li{
        height: 100%;
        a{
          display: block;
          padding: 0 26px;
          color: #fff;
          font-size: 16px;
        }
        a:hover{
          text-decoration: none;
          background-color: #930d13;
        }
        .router-link-exact-active{
          background-color: #930d13;
        }
      }
    }
  }
}
</style>
