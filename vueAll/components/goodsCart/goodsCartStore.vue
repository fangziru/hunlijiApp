<template>
    <dl>
        <dt>
            <div class="f-store">
                <div class="f-check" @click="checkstores(idx)"><span v-show="fpro.storecheck" class="checkbg"></span></div>

                <i class="iconfont icon-dianpu"></i>
                {{fpro.storename}}
            </div>
            <i class="iconfont icon-iconfontxiangxia1copy19"></i>
        </dt>
        <goods-cart-store-list :stName="fpro.storename" :checkgd="checkgs"  :a="fad" :s="fsd" :idxs="idx" :idxg="index" :gpro="m" v-for="(m,index) in fpro.goodslist"></goods-cart-store-list>
    </dl>
</template>

<script type="text/ecmascript-6">
    import goodsCartStoreList from "./goodsCartStoreList.vue"
    export default {
        props:["idx","fpro","fad","fsd","checkgs","checkstores"],
        components:{
            goodsCartStoreList
        },
        methods:{

        }
    }
</script>

<style scoped>
    span.checkbg{
        width:0.19rem;
        height:0.19rem;
        background: url("../../assets/img/goodsImg/icon.png");
        background-size: 100%;
        border:none;
        display: block;
        border-radius: 50%;
        position: relative;
        left:-0.01rem;
        top:-0.01rem;
    }

    .f-check{
        width:0.17rem;
        height:0.17rem;
        border:1px solid #c0c0c0;
        display: inline-block;
        border-radius: 50%;
        margin-right: 0.14rem;
    }
    .f-store .f-check{
        position: relative;
        top:0.04rem;
    }
    dl dt .icon-iconfontxiangxia1copy19{
        margin-right: 0.02rem;
    }
    .f-section dl dt{
        width:100%;
        padding:0 0.14rem;
        box-sizing: border-box;
        height:0.54rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e8e8e8;
    }

    .f-section dt i{
        margin-right: 0.1rem;
        color: #949494;
    }
</style>