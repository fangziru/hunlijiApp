<template>
    <div class="jbg">
        <goods-list-header title="婚纱礼服"></goods-list-header>
        <goods-list-content-list :list="goodsList"
                                 :dressweddinglist="goodsdetaillist"
                                 :manclothlist="manclothList"
                                 :winedresslist="WineDressList">
        </goods-list-content-list>
    </div>
</template>

<script type="text/ecmascript-6">
    import goodsListHeader from "../components/goodsList/goodsListHeader.vue";
    import goodsListContentList from "../components/goodsList/goodsListContentList.vue";
    import goodsListApi from "../api/indexApi";

    export default {
        components:{
            goodsListHeader,
            goodsListContentList
        },
        created:function(){
            this.initData();
        },
        mounted:function(){
            this.change();
            this.scrollSlider();
        },
        methods:{
            initData:function(){
                goodsListApi.getGoodsList((data)=>{
                    this.goodsList=data;
                });
                goodsListApi.getBridalList((data)=>{
                    this.goodsdetaillist=data;
                });
                goodsListApi.getManClothList((data)=>{
                    this.manclothList=data;
                });
                goodsListApi.getWineDressList((data)=>{
                    this.WineDressList=data;
                });
            },
            change:function(){
                var mySwiper= new Swiper('.swiper-container',{
                    onSlideChangeStart: function(swiper){
                        var index=swiper.activeIndex;
                        $(".head-cen li").eq(index).addClass("curLi").siblings().removeClass("curLi");
                    }
                });
                $(".head-cen li").click(function(){
                    mySwiper.slideTo($(this).index(), 1000, false);//切换到第一个slide，速度为1秒
                    $(this).addClass("curLi").siblings().removeClass("curLi");
                })
            },
            scrollSlider:function(){
                var maxScrollTop=0;
                var maxBotScrollTop=0;
                var secTwoScrolltop=document.getElementById("ulDiv");
                var secBotScrolltop=document.getElementById("head-bot");
                function show(){
                    maxScrollTop=secTwoScrolltop.offsetTop;
                    maxBotScrollTop=secBotScrolltop.offsetTop;
                }
                window.onscroll=function() {
                    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                    if (scrollTop > maxScrollTop) {
                        secTwoScrolltop.style.position = "fixed";
                        secTwoScrolltop.style.top = "0rem";
                    } else if (scrollTop <= maxScrollTop) {
                        secTwoScrolltop.style.position = "relative";
                    };
                }
            }

        },
        data(){
            return {
                goodsList:[],
                goodsdetaillist:[],
                manclothList:[],
                WineDressList:[]
            }
        }
    }
</script>

<style scoped>
    .jbg{
        background: #fff;
    }
</style>