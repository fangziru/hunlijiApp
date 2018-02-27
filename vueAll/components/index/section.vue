<template>
    <div class="section">

        <!--轮播图-->
         <lun-botu></lun-botu>
        <!--分类-->
        <div class="l-type">
            <div class="type-one">
                <a href="#"><i class="iconfont icon-hunshasheying"></i><span>找商家</span></a>
                <a href="#"><i class="iconfont icon-hunshasheying"></i><span>婚纱摄影</span></a>
                <a href="#"><i class="iconfont icon-hunshasheying"></i><span>婚礼策划</span></a>
                <a href="#"><i class="iconfont icon-hunshasheying"></i><span>订婚宴</span></a>
                <a href="#"><i class="iconfont icon-hunshasheying"></i><span>租婚车</span></a>
            </div>
            <div class="type-one">
                <a href="#"><i class="iconfont icon-hunshasheying"></i><span>司仪</span></a>
                <a href="#"><i class="iconfont icon-hunshasheying"></i><span>摄影</span></a>
                <a href="#"><i class="iconfont icon-hunshasheying"></i><span>摄像</span></a>
                <a href="#"><i class="iconfont icon-hunshasheying"></i><span>跟妆</span></a>
                <a href="#/goodslistpage"><i class="iconfont icon-hunshasheying"></i><span>婚纱礼服</span></a>
            </div>
        </div>
        <!--全球旅拍-->
        <div class="l-travel">
            <div class="travel-tit">
                <span></span>
                <a href="#">
                    <p>全球旅拍</p>
                    <h5>更多目的地<i class="iconfont icon-mjiantou"></i></h5></a>
            </div>
            <div class="travel-img">
                <img style="width:30%;height:30%;" src="../../assets/img/limeng/p1.jpg"/>
                <img style="width:30%;height:30%;" src="../../assets/img/limeng/p1.jpg"/>
                <img style="width:30%;height:30%;" src="../../assets/img/limeng/p1.jpg"/>
            </div>
            <div class="travel-img">
                <a href="#" style="background:#f2f6dd;">三亚</a>
                <a href="#" style="background:#ecfcf2;">青岛</a>
                <a href="#" style="background:#faf1e2;">厦门</a>
                <a href="#" style="background:#ede4f9;">大理</a>
            </div>
        </div>
        <!--备婚工具-->
        <div class="travel-tit">
            <span></span>
            <a href="#">
                <p>备婚工具</p>
                <h5>更多<i class="iconfont icon-mjiantou"></i></h5></a>
        </div>
        <div class="plan">
            <a href="#"><img style="width:31px;height:26px;margin:0 auto;" src="../../assets/img/limeng/p2.jpg"><span>电子请帖</span></a>
            <a href="#"><img style="width:31px;height:26px;margin:0 auto;" src="../../assets/img/limeng/p2.jpg"><span>电子请帖</span></a>
            <a href="#"><img style="width:31px;height:26px;margin:0 auto;" src="../../assets/img/limeng/p2.jpg"><span>电子请帖</span></a>
            <a href="#"><img style="width:31px;height:26px;margin:0 auto;" src="../../assets/img/limeng/p2.jpg"><span>电子请帖</span></a>
            <a href="#"><img style="width:31px;height:26px;margin:0 auto;" src="../../assets/img/limeng/p2.jpg"><span>电子请帖</span></a>
        </div>
        <!--婚品采购-->
        <div class="travel-tit">
            <span></span>
            <a href="#">
                <p>婚品采购</p>
                <h5>更多<i class="iconfont icon-mjiantou"></i></h5></a>
        </div>
        <div class="travel-img">
            <img style="width:30%;height:30%;" src="../../assets/img/limeng/p3.jpg"/>
            <img style="width:30%;height:30%;" src="../../assets/img/limeng/p3.jpg"/>
            <img style="width:30%;height:30%;" src="../../assets/img/limeng/p3.jpg"/>
        </div>
        <!--婚宴省心订-->
        <div class="travel-tit">
            <span></span>
            <a href="#">
                <p>婚宴省心订</p>
                <h5>查看全部酒店<i class="iconfont icon-mjiantou"></i></h5></a>
        </div>
        <div class="travel-img">
            <img style="width:48%;height:79px;" src="../../assets/img/limeng/p4.jpg"/>
            <img style="width:48%;height:79px;" src="../../assets/img/limeng/p4.jpg"/>
        </div>

        <!--备婚必选-->
        <div class="travel-tit">
            <span></span>
            <a href="#"><p>备婚必选</p></a>
        </div>
        <div class="travel-img">
            <img style="width:48%;height:79px;" src="../../assets/img/limeng/p5.jpg"/>
            <img style="width:48%;height:79px;" src="../../assets/img/limeng/p5.jpg"/>
        </div>
        <!--热门活动-->
        <div class="travel-tit">
            <span></span>
            <a href="#"><p>热门活动</p></a>
        </div>
        <div class="active">
            <img src="../../assets/img/limeng/p6.jpg" style="width:100%; height:166px;margin:0 auto;"/>
            <a>查看更多>></a>
        </div>
        <!--nav-->
        <div class="l-nav">
            <a href="#">精选</a>
            <a href="#">婚礼策划</a>
            <a href="#">婚礼摄影</a>
            <a href="#">婚礼礼服</a>
        </div>
        <!--精选  :idx="index" :pro="n"  v-for="n in list"-->
        <selection :idx="index" :pro="n"  v-for="(n,index) in list"></selection>

        <div id="l-back" class="l-back-top"><i class="iconfont icon-xiangshangjiantouarrowup"></i></div>
    </div>
</template>
<script type="text/ecmascript-6">

    import lunBotu from "./lunBotu.vue";
    import selection from "./selection.vue";
    export default {
        props:["list"],
        components:{
            lunBotu,
            selection
        },
        mounted(){
            $("#l-back").click(function () {

                $(".section").animate({scrollTop: 0}, 800);
            })
        }
    }
</script>

<style scoped>

</style>