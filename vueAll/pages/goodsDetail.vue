<template>
    <div class="f-all">
        <goods-detail-header></goods-detail-header>
        <goods-detail-main :goodsdetail="goodslist"></goods-detail-main>
        <goods-detail-footer :goodsdetail="goodslist" :pricerange="goodslist.pricescope" :footimg="goodslist.imgmain" :sizemsg="goodslist.sizelist"></goods-detail-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import goodsDetailHeader from "../components/goodsDetail/goodsDetailHeader.vue";
    import goodsDetailMain from "../components/goodsDetail/goodsDetailMain.vue";
    import goodsDetailFooter from "../components/goodsDetail/goodsDetailFooter.vue";
    import goodsDetailApi from "../api/indexApi";
    import goodsListApi from "../api/indexApi";
    import goodsCartApi from "../api/indexApi"
    export default {
        components:{
            goodsDetailHeader,
            goodsDetailMain,
            goodsDetailFooter
        },
        created:function () {
            this.initData();
        },
        methods:{
            goTop:function () {
                var opacityStart=$(".f-store").offset().top;
                $(".main").scroll(function () {

                    if($(".f-store").offset().top<=100){
                        $("header .f-head-con a").css("color","#fa4f5f");
                        $(".f-bg").css("opacity","1")
                    }else{
                        $("header .f-head-con a").css("color","#ffffff");
                        $(".f-bg").css("opacity","0")
                    }
                })
            },
            initData:function () {
                goodsDetailApi.gotGoodsDetail((data)=>{
                    this.goodsdata=data;
                    this.goodslist=data[0];
                    console.log(data[0])
                })
            }
        },
        data(){
            return{
                goodslist:[],
                goodsdata:[]
            }
        },
        mounted:function () {
            this.goTop();
        },
        watch:{
            goodsdata:function (n,o) {
                console.log(n.length);
                console.log(o.length);
                if(n.length>0){
                    $(".f-all").css("display","flex")
                }


            }
        }
    }
</script>

<style scoped>
.f-all{
    background: #f3f4f7;
    /*display: flex;*/
    flex-direction: column;
    justify-content: space-between;
    display: none;
}
</style>