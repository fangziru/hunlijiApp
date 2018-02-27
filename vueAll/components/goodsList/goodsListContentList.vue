<template>
    <section>
        <div class="ulDiv" id="ulDiv" style="position: relative;width:100%;height:0.44rem;overflow: scroll;background: #fff;
    z-index: 999;">
            <ul class="head-cen head-bor">
                <li class="curLi">全部</li>
                <li>婚纱</li>
                <li>敬酒服</li>
                <li>秀禾服</li>
                <li>新郎穿搭</li>
                <li>回门服</li>
                <li>旗袍</li>
                <li>伴娘服</li>
                <li>花童装</li>
            </ul>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide slide1">
                    <ul class="head-bot head-bor" id="head-bot">
                        <li class="curSe">综合</li>
                        <li>价格&nbsp;&nbsp;
                            <div class="rightIcon">
                                <span style="display:block;width: 0;height:0;border:0.045rem solid transparent;border-bottom-color: #aaaaaa;"></span>
                                <span style="display:block;width: 0;height:0;border:0.045rem solid transparent;border-top-color: #aaaaaa;margin-top:0.03rem;"></span>
                            </div>
                        </li>
                        <li>销量</li>
                        <li>筛选&nbsp;
                            <i class="iconfont icon-shaixuan rightIcon"></i>
                        </li>
                    </ul>
                    <div class="dressContent">
                        <goods-list-content :idx="index" :pro="n" v-for="(n,index) in list"></goods-list-content>
                    </div>
                </div>
                <div class="swiper-slide slide2">
                    <a class="weddingDressBig">
                        <img src="../../assets/img/goodsImg/weddress01.jpg" alt="">
                    </a>
                    <ul class="head-bot head-bor">
                        <li class="curSe">综合</li>
                        <li>价格&nbsp;&nbsp;
                            <div class="rightIcon">
                                <span style="display:block;width: 0;height:0;border:0.045rem solid transparent;border-bottom-color: #aaaaaa;"></span>
                                <span style="display:block;width: 0;height:0;border:0.045rem solid transparent;border-top-color: #aaaaaa;margin-top:0.03rem;"></span>
                            </div>
                        </li>
                        <li>销量</li>
                        <li>筛选&nbsp;
                            <i class="iconfont icon-shaixuan rightIcon"></i>
                        </li>
                    </ul>
                    <div class="dressContent">
                        <goods-list-content :idx="index" :pro="n" v-for="(n,index) in dressweddinglist"></goods-list-content>
                    </div>
                </div>
                <div class="swiper-slide slide2">
                    <a class="weddingDressBig">
                        <img src="../../assets/img/goodsImg/winedress01.jpg" alt="">
                    </a>
                    <ul class="head-bot head-bor">
                        <li class="curSe">综合</li>
                        <li>价格&nbsp;&nbsp;
                            <div class="rightIcon">
                                <span style="display:block;width: 0;height:0;border:0.045rem solid transparent;border-bottom-color: #aaaaaa;"></span>
                                <span style="display:block;width: 0;height:0;border:0.045rem solid transparent;border-top-color: #aaaaaa;margin-top:0.03rem;"></span>
                            </div>
                        </li>
                        <li>销量</li>
                        <li>筛选&nbsp;
                            <i class="iconfont icon-shaixuan rightIcon"></i>
                        </li>
                    </ul>
                    <div class="dressContent">
                        <goods-list-content :idx="index" :pro="n" v-for="(n,index) in winedresslist"></goods-list-content>
                    </div>
                </div>
                <div class="swiper-slide slide1">
                    <ul class="head-bot head-bor" id="head-bot">
                        <li class="curSe">综合</li>
                        <li>价格&nbsp;&nbsp;
                            <div class="rightIcon">
                                <span style="display:block;width: 0;height:0;border:0.045rem solid transparent;border-bottom-color: #aaaaaa;"></span>
                                <span style="display:block;width: 0;height:0;border:0.045rem solid transparent;border-top-color: #aaaaaa;margin-top:0.03rem;"></span>
                            </div>
                        </li>
                        <li>销量</li>
                        <li>筛选&nbsp;
                            <i class="iconfont icon-shaixuan rightIcon"></i>
                        </li>
                    </ul>
                    <div class="dressContent">
                        <goods-list-content :idx="index" :pro="n" v-for="(n,index) in list"></goods-list-content>
                    </div>
                </div>
                <div class="swiper-slide slide2">
                    <a class="weddingDressBig">
                        <img src="../../assets/img/goodsImg/mancolth01.jpg" alt="">
                    </a>
                    <ul class="head-bot head-bor">
                        <li class="curSe">综合</li>
                        <li>价格&nbsp;&nbsp;
                            <div class="rightIcon">
                                <span style="display:block;width: 0;height:0;border:0.045rem solid transparent;border-bottom-color: #aaaaaa;"></span>
                                <span style="display:block;width: 0;height:0;border:0.045rem solid transparent;border-top-color: #aaaaaa;margin-top:0.03rem;"></span>
                            </div>
                        </li>
                        <li>销量</li>
                        <li>筛选&nbsp;
                            <i class="iconfont icon-shaixuan rightIcon"></i>
                        </li>
                    </ul>
                    <div class="dressContent">
                        <goods-list-content :idx="index" :pro="n" v-for="(n,index) in manclothlist"></goods-list-content>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script type="text/ecmascript-6">
    import goodsListContent from "./goodsListContent.vue";


//    console.log(1)
    export default {
        props:["list","dressweddinglist","manclothlist","winedresslist"],
        components:{
            goodsListContent
        }

    }
</script>

<style scoped>
    .head-bor{
        border-bottom: 2px solid #ececec;
    }
    .head-cen{
        width:auto;
        height:0.44rem;
        box-sizing: border-box;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
        overflow-y: hidden;
        position: absolute;
        left:0;
    }
    .head-cen li{
        width:0.84rem;
        height:100%;
        line-height: 0.44rem;
        font-size: 14px;
        color: #1a1a1a;
        text-align: center;
        float: left;
        flex-shrink: 0;
        box-sizing: border-box;
    }
    .curLi{
        color:#ff273b!important;
        border-bottom: 2px solid #ff273b;
    }
    .head-bot{
        width: 100%;
        height:0.43rem;
        box-sizing: border-box;
        padding:0.085rem 0;
        background: #fff;
        z-index: 1000;
    }
    .head-bot li {
        width: 25%;
        height: 100%;
        float: left;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #ececec;
        font-size: 13px;
        color: #5c5c5c;
    }
    .curSe{
        color: #ff273b!important;
    }
    .head-bot li:last-child .iconfont{
        font-size: 14px;
    }
    .rightIcon{
        padding-top: 0.03rem;
    }
    section{
        width:100%;
        height:auto;
    }
    .swiper-container {
        width: 100%;
        height: auto;
        z-index: 1;
    }
    .swiper-wrapper{
        width:100%;
    }
    .swiper-container .swiper-slide{
        width: 100%;
        height: 100%;
    }
    .dressContent{
        width:auto;
        height:auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .weddingDressBig{
        width:100%;
        height:auto;
    }
    .weddingDressBig img{
        width:100%;
        height:1.94rem;
    }
</style>