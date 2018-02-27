<template>
    <footer>
        <div>
            <div class="f-operation">
                <a href="javascript:;"><i class="iconfont icon-duihua"></i><span>客服</span></a>
                <a href="javascript:;"><i class="iconfont icon-dianpu"></i><span>店铺</span></a>
                <a href="javascript:;"><i class="iconfont icon-shoucang1"></i><span>收藏</span></a>
            </div>
            <div class="f-btn">
                <a href="javascript:;" class="f-addcart" @click="addCarts">加入购物车</a>
                <a href="javascript:;" class="f-buy">立即购买</a>
            </div>
        </div>
        <div class="f-goods-detail">
            <!--goodsDetailFooterSizeBg-->
            <goods-detail-footer-size-bg></goods-detail-footer-size-bg>
            <div class="f-goods">
                <div class="f-top">
                    <img :src="footimg" alt="">
                    <div class="f-goods-txt">
                        <p class="f-goods-p1">限时促销！不要错过！中式礼服</p>
                        <p class="f-goods-p2">{{pricerange}}</p>
                        <p class="f-goods-p3">请选择规格</p>
                    </div>
                </div>
                <div class="f-center">
                    <i class="iconfont icon-close" @click="closeGoods(pricerange)"></i>
                    <div class="f-size">
                        <p class="f-size-txt">规格：</p>
                        <div class="f-all-size">
                            <span :idxsize="index" v-for="(n,index) in sizemsg" @click="checkSize(index,sizemsg[index])">{{n.goodssize}}</span>

                        </div>
                        <p class="f-size-txt f-size-num">数量：</p>
                        <!--goodsDetailFooterSizeCounter-->
                        <goods-detail-footer-size-counter :goodscount="goodsStock" :spidx="spanidx"></goods-detail-footer-size-counter>
                    </div>
                </div>
                <div class="f-bottom">
                    <span @click="confirm">确定</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script type="text/ecmascript-6">
    import goodsDetailFooterSizeBg from "./goodsDetailFooterSizeBg.vue";
    import goodsDetailFooterSizeCounter from "./goodsDetailFooterSizeCounter.vue";
    export default {
        props:["pricerange","footimg","sizemsg","goodsdetail"],
        data(){
            return{
                goodsStock:1,
                num:1,
                spanidx:-1,
                title:"1212"
//                idxsize:0
            }
        },
        components:{
            goodsDetailFooterSizeBg,
            goodsDetailFooterSizeCounter
        },
        methods:{
            closeGoods:function (msg) {
                $(".f-goods").animate({
                    bottom:"-82%"
                },300,function () {
                    $(".f-goods-detail").css("display","none");
                    $(".f-all-size span").removeClass("active");
                    $(".f-goods-num p").css("display","none");
                    $(".f-goods-p3").html("请选择规格");
                    $(".f-goods-p2").html(msg);
                })
            },
            addCarts:function () {
                $(".f-goods-detail").css("display","block");
                $(".f-goods").animate({
                    bottom:"0"
                },300);
            },
            checkSize:function (idxsize,intro) {
                this.goodsStock=intro.thisprice;
                $(".f-all-size span").eq(idxsize).addClass("active").siblings().removeClass("active");
//                $(this).css({"background":"#f83244","color":"#FFFFFF"})
                $(".f-goods-num p").css("display","block");
                $(".f-goods-p3").html(intro.goodssize);
                $(".f-goods-p2").html("￥"+intro.existgoods);
                this.num=1;
                this.spanidx=idxsize;
            },
            confirm:function () {
                if($(".f-all-size span.active").index()<0){
                    $(".f-bottom-bg").css("display","block")
                    $(".f-bottom-bg div").html('<i class="iconfont icon-close"></i><br/>请选择规格')
                    setTimeout(function () {
                        $(".f-bottom-bg").css("display","none")
                    },2000)


                }else{
                    $(".f-bottom-bg").css("display","block")
                    $(".f-bottom-bg div").html('已加入');
                    setTimeout(function () {
                        $(".f-bottom-bg").css("display","none")
                        $(".f-bottom-bg div").html('<i class="iconfont icon-close"></i><br/>请选择规格')
                    },1000)
                    let spanIdx=$(".f-all-size span.active").index();

                    this.$http.post('http://localhost:3000/api/addCart', {
                        storename:this.$props.goodsdetail.storename,
//
                            goodsid:this.$props.goodsdetail.goodsid,
                            shopid:spanIdx,
                            goodstitle:this.$props.goodsdetail.shoptitle,
                            goodssize:this.$props.goodsdetail.sizelist[spanIdx].goodssize,
                            goodsprice:this.$props.goodsdetail.sizelist[spanIdx].existgoods,
                            goodspricestart:this.$props.goodsdetail.beforeprice,
                            goodsnum:$(".f-num input").val(),
                            existgoods:this.$props.goodsdetail.sizelist[spanIdx].thisprice,
                            goodsimg:this.$props.goodsdetail.imgmain
//
                    },{
                        emulateJSON : true//将request body以application/x-www-form-urlencoded发送
                    },{
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',//设置HTTP请求头
                        },
                    }).then((res)=>{
//                        alert(res);
                        if(res.status==0){
                            alert("加入成功")
                        }else{
                            alert(res.msg);
                        }
                    })
                }
            },
            addMovie() {

            }
        }
    }
</script>

<style scoped>
    footer{
        width:100%;
        height:0.59rem;
        background: #FFFFFF;

    }
    footer > div:first-child{
        display: flex;
    }
    .f-operation{
        width:1.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .f-operation a{
        display: block;
        padding-top: 0.11rem;
        font-size: 12px;
        color: #f94b5a;
        text-align: center;
    }
    .f-operation a i{
        font-size: 21px;
        margin-bottom: 0.05rem;
    }
    .f-operation a span{
        display: block;
    }
    .f-btn{
        flex:1;
        height:0.59rem;
        display: flex;
    }
    .f-btn a{
        flex:1;
        display: block;
        color: #FFFFFF;
        line-height: 0.59rem;
        text-align: center;
    }
    .f-addcart{
        background: #ffa73c;
    }
    .f-buy{
        background: #f93244;
    }

    .f-goods-detail{
        position: absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
        background: rgba(123,119,123,0.6);
        z-index: 1000000;
        display: none;
    }
    .f-goods{
        width:100%;
        height:82%;
        background: #f7f7f8;
        position: absolute;
        bottom:-82%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .f-center{
        flex:1;
        overflow-y: scroll;
    }
    .f-center::-webkit-scrollbar{
        display: none;
    }
    .f-top{
        background: #FFFFFF;
        padding:0.135rem 0.185rem;
        display: flex;
        justify-content: flex-start;
        border-top: 1px solid #d9a2a2;
        border-bottom: 1px solid #e9e9ea;
    }
    .f-top > img{
        width:0.65rem;
        height:0.65rem;
        margin-right: 0.09rem;
    }
    .f-goods-txt p{
        font-size: 14px;
    }
    .f-goods-p1{
        width:1.9rem;
        color: #343434;
        line-height: 0.24rem;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    }
    .f-goods-p2{
        color: #f93142;
        line-height: 0.18rem;
    }
    .f-goods-p3{
        line-height: 0.24rem;
        color: #999999;
    }
    .f-goods .icon-close{
        font-size: 16px;
        color: #f93f4f;
        position: absolute;
        right:0.14rem;
        top:0.18rem;
    }
    .f-size{
        padding:0 0.145rem 0.18rem 0.185rem;
        width:100%;
        box-sizing: border-box;
    }
    .f-size-txt{
        line-height: 0.46rem;
        font-size: 14px;
        color: #323232;
    }
    .f-all-size{
        display: flex;
        flex-wrap: wrap;
    }
    .f-all-size span{
        height:0.31rem;
        line-height: 0.31rem;
        padding:0 0.19rem;
        border:1px solid #e3e3e4;
        background: #FFFFFF;
        color: #424242;
        border-radius: 0.15rem;
        margin-bottom: 0.11rem;
        margin-right: 0.09rem;
    }
    .f-size-num{
        border-top: 1px solid #eeeeee;
    }
    .f-all-size span.active{
        background: #f83244;
        color: #FFFFFF;
    }






    .f-bottom{
        width:100%;
        height: 0.58rem;
        border-top: 1px solid #e3e3e3;
        background: #FFFFFF;
    }
    .f-bottom span{
        display: block;
        background: #f83244;
        border:1px solid #fa717e;
        width:1.06rem;
        height:0.355rem;
        text-align: center;
        line-height: 0.35rem;
        margin:0.11rem auto;
        color: #FFFFFF;
        border-radius: 0.04rem;
    }
</style>