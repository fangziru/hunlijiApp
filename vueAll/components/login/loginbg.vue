<template>
    <header class="loginHeader">
        <div class="loginHeaderCon">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../../assets/img/goodsImg/login05.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="../../assets/img/goodsImg/login02.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="../../assets/img/goodsImg/login03.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="../../assets/img/goodsImg/login04.jpg" alt=""></div>
                </div>
                <!-- 分页器 -->
                <div class="swiper-pagination secThreeswiper-pagination"  style="bottom: 0.1rem;"></div>
            </div>
            <a href="javascript:;" class="loginStart login">开启我的备婚之旅</a>
            <div class="loginDiv login">
                <login-content></login-content>
                <p>登录即表示你同意《<span style="text-decoration: underline">婚礼纪用户协议</span>》</p>
            </div>
        </div>
    </header>
</template>

<script type="text/ecmascript-6">
    import loginContent from "./loginContent.vue";
    export default {
        components:{
            loginContent
        }
    }
</script>

<style scoped>
    .loginHeader{
        width:100%;
        height:100%;
        position: absolute;
        left:0;
        top:0;
    }
    .loginHeaderCon{
        width:100%;
        height:100%;
        overflow: hidden;
    }
    .swiper-container{
        height:100%;
    }
    .swiper-slide{
        width:100%;
        height:100%;
        overflow: hidden;
    }
    .swiper-container img{
        height:100%;
    }
    .login{
        z-index: 999;
        -webkit-border-radius:5% ;
        -moz-border-radius: 5% ;
        border-radius: 5% ;
    }
    .loginStart{
        display: block;
        width:3.38rem;
        height:0.5rem;
        background: #f83144;
        color:#fff;
        line-height:0.5rem;
        text-align: center;
        font-size:14px;
        position:fixed;
        bottom: .97rem;
        left:50%;
        margin-left: -1.7rem;
    }
    .swiper-pagination{
        top:95%!important;
    }
    .loginDiv{
        position:fixed;
        left:50%;
        margin-left: -1.7rem;
        bottom: 0.69rem;
        display: none;
    }
    .loginDiv p{
        font-size: 13px;
        color: #999;
        text-align: center;
        padding-top:0.18rem;
        z-index: 999;
    }

</style>