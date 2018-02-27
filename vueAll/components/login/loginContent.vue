<template>
    <div class="loginDteil login">
        <div class="loginGoto">
            <input class="loginInput" id="loginId" type="text" placeholder="请输入手机号码快速加入"/>
            <a href="javascript:;" @click="changepageIndex()"><i class="iconfont icon-tiaozhuan"></i></a>
        </div>
        <div class="otherLogin">
            <span >其他登录方式
                <a href="javascript:;"><i class="iconfont icon-qq" style="color:#28b1ff"></i></a>
                <a href="javascript:;"><i class="iconfont icon-weixin" style="color:#26df78"></i></a>
                <a href="javascript:;"><i class="iconfont icon-weibo" style="color:#ff802e"></i></a>
            </span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        methods:{
            changepageIndex:function(){
                var loginInputval=document.getElementById("loginId").value;
                this.$router.push("/indexpage");
                this.$http.post('http://localhost:3000/api/userdata',{
                    userphone:loginInputval
                },{
                    emulateJSON : true
                },{
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }).then((res)=>{
//                       alert(res);
                })
            }
        }
    }
</script>

<style scoped>
    .loginDteil{
        width:3.38rem;
        height:2.34rem;
        background: #fff;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding:0.26rem 0.38rem 0.32rem;
        flex-direction: column;
        display: flex;
        justify-content: space-between;
    }
    .loginGoto{
        width:100%;
        height:0.49rem;
        box-sizing: border-box;
        padding:0.08rem 0;
        border-bottom:1px solid #e0e0e0;
    }
    .loginGoto input{
        width:85%;
        border:none;
        box-sizing: border-box;
    }
    .iconfont{
        vertical-align: middle;
    }
    .loginGoto .iconfont{
        display: inline-block;
        color:#fc2f43;
        font-size:33px;
    }
    .otherLogin{
        height:0.33rem;

    }
    .otherLogin span{
        display: block;
        color:#868686;
        font-size: 11px;
        line-height: 0.33rem;
    }
    .otherLogin span .iconfont{
        font-size:32px;
        line-height: 0.33rem;
        padding-left:0.12rem;
    }
</style>