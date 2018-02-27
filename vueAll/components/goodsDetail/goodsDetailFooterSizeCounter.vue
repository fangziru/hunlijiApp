<template>
    <div class="f-goods-num">
        <div class="f-num">
            <span @click="subs">-</span>
            <input type="text" maxlength="3" v-model="goodsNums">
            <span @click="adds(goodscount)">+</span>
        </div>
        <p>库存<span>{{goodscount}}</span>件</p>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:["goodscount","spidx"],
        data(){
            return{
                goodsNums:1,
                newidx:this.$props.spidx
            }
        },
        methods:{

            adds:function (maxgoods) {
                if(this.goodsNums>=maxgoods){
                    this.goodsNums=maxgoods;
                }else{
                    this.goodsNums++;
                }
            },
            subs:function () {
                if(this.goodsNums<=1){
                    this.goodsNums =1
                }else{
                    this.goodsNums--;
                }

            }
        },
        watch:{
            spidx:function (n,o) {
                this.goodsNums=1
            }
        }
    }
</script>

<style scoped>
    .f-num{
        width:1rem;
        height:0.32rem;
        border-radius: 0.16rem;
        border:1px solid #bbbbbb;
        display: flex;
        text-align: center;
        line-height: 0.32rem;
        background: #FFFFFF;
    }
    .f-num input{
        width:33.333%;
        border:none;
        text-indent: 48%;
    }
    .f-num span{
        display: block;
        width:33.333%;
    }
    .f-goods-num{
        display: flex;
        align-items: center;
    }
    .f-goods-num p{
        font-size: 13px;
        color: #999999;
        margin-left: 0.11rem;
        display: none;
    }
</style>