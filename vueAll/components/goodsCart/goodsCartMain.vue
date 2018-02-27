<template>
    <section class="f-section main">
        <div class="f-empty-cart">
            <img src="../../assets/img/goodsImg/emptycart.png" alt="">
            <p>购物车还是空的</p>
            <a href="#/goodslistpage">去逛逛</a>
        </div>
        <div class="f-goods">
            <goods-cart-store :checkgs="checkgood" :checkstores="checkstore" :fad="fadd" :fsd="fsub" :idx="index" :fpro="n" v-for="(n,index) in flist"></goods-cart-store>
        </div>
    </section>
</template>

<script type="text/ecmascript-6">
    import goodsCartStore from "./goodsCartStore.vue"
    export default {
        props:["flist","fadd","fsub","checkgood","checkstore"],
        components:{
            goodsCartStore
        }
    }
</script>

<style scoped>
    .main{
        flex:1;
        overflow-y: scroll;
    }
    .f-section {
        width:100%;
    }
    .f-section dl{
        background: #FFFFFF;
        margin-top: 0.1rem;

    }

    .f-empty-cart{
        width:100%;
        height:2.63rem;
    }
    .f-empty-cart img{
        width:100%;
    }
    .f-empty-cart p{
        line-height: 0.53rem;
        color: #5a5a5a;
        text-align: center;
    }
    .f-empty-cart a{
        display: block;
        width:1.64rem;
        height:0.42rem;
        background: #f93244;
        color: #FFFFFF;
        line-height: 0.42rem;
        text-align: center;
        margin:0 auto;
        border-radius: 0.04rem;
    }


</style>