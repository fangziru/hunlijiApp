<template>
    <div class="main">
        <!--banner-->
        <goods-detail-main-banner :imgslide="goodsdetail.imgslide"></goods-detail-main-banner>
        <section class="f-section-one">
            <p class="f-title">{{goodsdetail.shoptitle}}</p>
            <div class="f-price-box">
                <div class="f-price">
                    <span class="f-price1">￥<span>{{goodsdetail.price}}</span></span>
                    <span class="f-price2">￥{{goodsdetail.beforeprice}}</span>
                </div>
                <div class="f-carriage">运费：13.0元</div>
            </div>
            <div class="f-activity">
                <p>11.11婚品特卖会将降至￥270.00</p>
                <p>距离活动开始还剩：<span>4</span>天<span>02</span>小时<span>37</span>分<span>02</span>秒</p>
            </div>
            <div class="f-send">
                <span><i class="iconfont icon-duihao"></i>48小时发货</span>
                <span><i class="iconfont icon-duihao"></i>7天无理由</span>
            </div>
        </section>

        <section class="f-section-two">
            <div class="f-member">
                <p><span>会员特价</span>使用会员红包，<span>商品最高抵扣50元</span></p>
                <i class="iconfont icon-iconfontxiangxia1copy19"></i>
            </div>
            <div class="f-store">
                <div class="f-store-con">
                    <img :src="goodsdetail.imgstore" alt="">
                    <div class="f-store-introduce">
                        <h3><span>{{goodsdetail.storename}}</span><span>保</span></h3>
                        <p>商品&nbsp;600&nbsp;&nbsp;&nbsp;关注&nbsp;{{goodsdetail.goodscollection}}</p>
                    </div>
                </div>
                <a href="javascript:;" class="f-enter">进店逛逛</a>
            </div>
            <div class="f-evaluate">
                <div class="f-evaluate-title">
                    <h2>顾客评价(245)</h2>
                    <a href="javascript:;">查看全部<i class="iconfont icon-iconfontxiangxia1copy19"></i></a>
                </div>
                <div class="f-evaluate-user">
                    <img src="../../assets/img/goodsImg/o_1a1j0dkfv1lngmapeue7opgphi.png" alt="">
                    <div class="f-evaluate-con">
                        <div class="f-phone-user">
                            <p>手机用户4133<span>好评</span></p>
                            <span class="f-time">2017.11.06</span>
                        </div>
                        <p class="f-p1">客服帮挑选的尺码很合身，还是蛮不错的，性价比蛮高的</p>
                        <p class="f-p2">规格：红色小摆+头饰S</p>
                        <div class="f-img">
                            <img src="../../assets/img/goodsImg/FiZmyOrXcxhnTBbfAUhG8kM-ZWdA.png" alt="">
                            <img src="../../assets/img/goodsImg/FtzBfMlujwiR8_4JPatu7aKL9kDF.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="f-collect">
                <p>她们都已收藏 <span>({{goodsdetail.goodscollection}})</span></p>
                <div>
                    <img src="../../assets/img/goodsImg/img01.png" alt="">
                    <img src="../../assets/img/goodsImg/img01.png" alt="">
                    <img src="../../assets/img/goodsImg/img01.png" alt="">
                    <img src="../../assets/img/goodsImg/img01.png" alt="">
                    <img src="../../assets/img/goodsImg/img01.png" alt="">
                    <img src="../../assets/img/goodsImg/img01.png" alt="">
                    <img src="../../assets/img/goodsImg/img01.png" alt="">
                    <img src="../../assets/img/goodsImg/img01.png" alt="">
                </div>
            </div>
        </section>
        <section class="section-three">
            <p class="f-txt">
                {{goodsdetail.shoptitle}}<br/>高密刺绣 精品之作 超大裙摆 送精美耳环
            </p>
            <div class="f-goods-img">
                <img v-for="n in goodsdetail.imgdesc" :src="n" alt="">

            </div>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">
    import goodsDetailMainBanner from "./goodsDetailMainBanner.vue"

    export default {
        props:["goodsdetail"],
        components:{
            goodsDetailMainBanner
        }
    }
</script>

<style scoped>
    .main{
        flex:1;
        overflow-y: scroll;
    }

    /*f-section-one*/
    .f-section-one{
        width:100%;
        padding:0 0.12rem;
        box-sizing: border-box;
        background: #FFFFFF;
        padding-top: 0.18rem;
        margin-bottom: 0.1rem;
    }
    .f-title{
        font-size: 16px;
        color: #1f1f1f;
        line-height: 0.18rem;
    }
    .f-price-box{
        width:100%;
        display: flex;
        justify-content: space-between;
        height: 0.5rem;
        font-size: 12px;
        color: #ababab;
        align-items: center;
    }
    .f-price-box .f-price1{
        color: #f73445;
    }
    .f-price1 span{
        font-size: 20px;
        font-weight: bold;
        position: relative;
        top:0.03rem;
    }
    .f-price-box .f-price2{
        text-decoration: line-through;
    }
    .f-activity{
        width:100%;
        height:0.45rem;
        border:0.02rem dashed #b93f56;
        border-radius: 0.05rem;
        margin-bottom: 0.16rem;
    }
    .f-activity p{
        line-height:0.225rem;
        color: #a1565b;
        font-size: 12px;
        text-align: center;
    }
    .f-send{
        margin:0 0.05rem;
        height:0.3rem;
        border-top: 1px solid #dcdcdc;
        line-height:0.26rem;
        font-size: 12px;
        color: #5b5b5b;
    }
    .f-send span i{
        font-size: 20px;
        color: #b73f49;
        position: relative;
        top:0.02rem;
        margin-right: 0.05rem;
    }
    .f-send span:first-child{
        margin-right: 0.13rem;
    }
    .f-section-two{
        width:100%;
        margin-bottom: 0.1rem;
    }
    .f-member{
        width:100%;
        padding:0 0.18rem;
        background: #FFFFFF;
        height:0.57rem;
        line-height:0.57rem;
        position: relative;
        box-sizing: border-box;
        margin-bottom: 0.1rem;
    }
    .f-member p{
        width:100%;
        padding-right: 0.36rem;
        box-sizing: border-box;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
        color: #686868;
    }
    .f-member p span:last-child{
        color: #4e8bee;
    }
    .f-member p span:first-child{
        display: inline-block;
        color: #fa4656;
        font-size: 12px;
        width:0.5rem;
        height:0.15rem;
        line-height: 0.15rem;
        border:0.01rem solid #fb8892;
        text-align: center;
        margin-right: 0.12rem;
        border-radius: 0.03rem;
    }
    .f-member .icon-iconfontxiangxia1copy19{
        position: absolute;
        right:0.18rem;
        top:0;
        font-size: 14px;
        color: #cbcbcb;
    }
    .f-store{
        width:100%;
        padding:0.19rem;
        box-sizing: border-box;
        background: #FFFFFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.1rem;
    }
    .f-store-con{
        display: flex;
        justify-content: flex-start;
    }
    .f-store-con img{
        width:0.52rem;
        height:0.52rem;
        margin-right: 0.12rem;
    }
    .f-store-introduce h3{
        color: #353535;
        font-size: 16px;
        line-height: 0.3rem;
        font-weight: normal;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .f-store-introduce h3 span{
        display: block;
    }
    .f-store-introduce h3 span:first-child{
        max-width: 1.5rem;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    }
    .f-store-introduce h3 span:last-child{
        width:0.19rem;
        height:0.19rem;
        background: #3bd580;
        color: #FFFFFF;
        font-size: 14px;
        line-height: 0.19rem;
        margin-left: 0.13rem;
        text-align: center;
    }
    .f-store-introduce p{
        line-height: 0.22rem;
        color: #ababab;
        font-size: 14px;
    }
    .f-enter{
        width:0.8rem;
        height:0.28rem;
        text-align: center;
        line-height: 0.28rem;
        background: #ffa73c;
        color: #FFFFFF;
        font-size: 15px;
        border-radius: 0.14rem;
    }
    .f-evaluate{
        width:100%;
        padding:0 0.18rem 0.17rem;
        box-sizing: border-box;
        background: #FFFFFF;
        margin-bottom: 0.1rem;
    }
    .f-evaluate-title{
        height:0.51rem;
        border-bottom: 1px solid #ededed;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .f-evaluate-title h2{
        font-weight: normal;
        font-size: 16px;
        color: #252525;
    }
    .f-evaluate-title a{
        font-size: 16px;
        color: #f81c30;
    }
    .f-evaluate-title a i{
        margin-left: 0.08rem;
    }
    .f-evaluate-user{
        display: flex;

    }
    .f-evaluate-user > img{
        width:0.355rem;
        height:0.355rem;
        border-radius: 50%;
        margin-right: 0.12rem;
        margin-top: 0.16rem;
    }
    .f-phone-user{
        height:0.46rem;
        line-height: 0.5rem;
        display: flex;
        justify-content: space-between;
    }
    .f-phone-user p span{
        height:0.18rem;
        border-left: 1px solid #e7e7e7;
        margin-left: 0.06rem;
        padding-left: 0.06rem;
        color: #f93143;
    }
    .f-phone-user .f-time{
        color: #a1a1a1;
        font-size: 14px;
    }
    .f-evaluate-con .f-p1{
        color: #3c3c3c;
        line-height:0.19rem;
    }
    .f-evaluate-con .f-p2{
        line-height: 0.43rem;
        font-size: 14px;
        color: #9d9d9d;
    }
    .f-evaluate-con .f-img{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .f-evaluate-con .f-img img{
        width:0.85rem;
        height:0.85rem;
        margin-right: 0.11rem;
    }
    .f-collect{
        width:100%;
        padding:0.16rem 0.12rem;
        box-sizing: border-box;
        background: #FFFFFF;
    }
    .f-collect p{
        line-height: 0.26rem;
        color: #3e3e3e;
    }
    .f-collect p span{
        color: #a3a3a3;
    }
    .f-collect div{
        padding-top:0.05rem;
        overflow: hidden;
        height:0.32rem;
    }
    .f-collect div img{
        width:0.32rem;
        height:0.32rem;
        border-radius: 50%;
        margin:0 0.04rem;
        float: left;
    }
    .section-three{
        width:100%;
        background: #FFFFFF;
        margin-bottom: 0.1rem;
    }
    .section-three .f-txt{
        padding:0.2rem;
        line-height: 0.19rem;
        font-size: 14px;
        color: #2f2f2f;
    }
    .f-goods-img{
        width:100%;
    }
    .f-goods-img img{
        width:100%;
    }

</style>