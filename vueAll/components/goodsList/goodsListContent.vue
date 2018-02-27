<template>
    <a class="dressCon" @click="changedetailpage(pro.goodsid)">
    <!--<a class="dressCon">-->
        <img :src="pro.pic" alt=""/>
        <p>{{pro.title}}</p>
        <h4>￥{{pro.price}}
            <span>收藏 {{pro.collect}}</span>
        </h4>
    </a>
</template>

<script type="text/ecmascript-6">

    export default {
        props:["idx","pro"],
        methods:{
            changedetailpage:function(goodsid){
                console.log(goodsid);
                this.$router.push("/goodsdetailpage?goodsid="+goodsid)
                location.reload();
//                console.log(idx)
            }
        }
    }
</script>

<style scoped>
    .dressCon{
        display: block;
        width:1.83rem;
        height:auto;
        padding:0.09rem 0;
        box-sizing: border-box;
    }

    .dressCon img{
        width:1.83rem;
        height:1.835rem;
    }
    .dressCon p{
        padding:0.09rem 0.15rem 0.145rem 0.08rem;
        line-height: 0.19rem;
        font-size: 13px;
    }
    .dressCon h4{
        font-size: 16px;
        color:#eb1d30;
    }
    .dressCon h4 span{
        font-size: 12px;
        color: #848484;
        float: right;
    }
    .weddingDressBig img{
        width:100%;
        height:1.94rem;
    }
</style>