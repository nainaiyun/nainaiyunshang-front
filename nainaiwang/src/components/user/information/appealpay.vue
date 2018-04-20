<template>
    <div>
        <p class="title">
            账户信息 > 修改绑定手机
        </p>
        <div v-if="view == 1" class="view-box">
            <img src="../../../assets/images/icon_jd.jpg" alt="" class="process-img">
            <p class="tip">
                <img src="../../../assets/images/jinggao.png" alt="">
                请确保手机通畅，以便于我们与您联系，并接收申诉结果。
            </p>
            <div class="input-box">
                <span class="input-label">
                    手机号码：
                </span>
                <span style="color: #777;">
                    {{13123242563}}
                    无法接收到消息，请
                    <a href="#" style="color: #0088cc">联系客服</a>
                </span>
            </div>
            <div class="input-box">
                  <span class="input-label">
                      手机校验码：
                  </span>
                <input type="text" class="default" v-model="telCheckNum" placeholder="请输入校验码">
                <input type="button" value="获取验证码" class="get-checknum">
            </div>
            <div class="input-box">
                <button class="default">下一步</button>
            </div>
        </div>
        <div v-if="view == 2" class="view-box">
            <img src="../../../assets/images/yz_jd2.jpg" alt="" class="process-img">
            <div class="input-box">
                <span class="input-label">
                    手机号码：
                </span>
                <span style="color: #777;">
                    {{13123242563}}
                </span>
            </div>
            <div class="input-box">
                <span class="input-label">
                    新手机号码：
                </span>
                <input type="text" class="default" v-model="newTel" placeholder="请输入手机号码">
            </div>
            <div class="input-box">
                  <span class="input-label">
                      手机校验码：
                  </span>
                <input type="text" class="default" v-model="telCheckNum2" placeholder="请输入校验码">
                <input type="button" value="获取验证码" class="get-checknum">
            </div>
            <div class="input-box">
                <button class="default">下一步</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "appealpay",
        data() {
            return {
                view: 1,
                telCheckNum: '',
                telCheckNum2: '',
                newTel: ''
            }
        }
    }
</script>

<style scoped lang="less">
    .get-checknum{
        height: 37px;
        vertical-align: top;
        padding: 0 10px;
        border: 1px solid #c0c0c0;
        margin-left: 5px;
        background: #F4F1F1;
        color: #777;
    }
    .view-box{
        margin: 40px;
        .process-img{
            margin-left: 80px;
        }
        .tip{
            padding:10px 0 10px 140px;
            color: #777;
            img{
                width: 25px;
                vertical-align: middle;
            }
        }
    }
</style>