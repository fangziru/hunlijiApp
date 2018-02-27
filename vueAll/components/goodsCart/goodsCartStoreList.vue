<template>
    <dd>
        <div class="f-check" @click="checkgd(idxs,idxg)"><span v-show="gpro.goodscheck" class="checkbg"></span></div>

        <div class="f-goods-con">
            <img :src="gpro.goodsimg" alt=""  @click="changeshopcarpage(gpro.goodsid)">
            <div class="f-goods-desc">
                <p class="f-shop-p1">{{gpro.goodstitle}}</p>
                <p class="f-shop-p2">规格：{{gpro.goodssize}}</p>
                <p class="f-shop-p3">￥&nbsp;{{gpro.goodsprice}}<span>￥&nbsp;{{gpro.goodspricestart}}</span></p>
                <div class="f-shop-num">
                    <p class="f-shop-p4">
                        <span @click="s(idxs,idxg)">-</span>
                        <span class="f-num">{{gpro.goodsnum}}</span>
                        <span @click="a(idxs,idxg)">+</span>
                    </p>
                    <i class="iconfont icon-shanchu" @click="deleteGoods(stName,gpro.goodsid,gpro.shopid)"></i>
                </div>
            </div>
        </div>
    </dd>
</template>

<script type="text/ecmascript-6">
    export default {
        props:["idxg","gpro","a","s","idxs","fistrue","checkgd","stName"],
        methods:{
            changeshopcarpage:function(indxs){
                this.$router.push("/goodsdetailpage?goodsid="+indxs);
                location.reload();
            },
            deleteGoods:function (name,goodsIds,shopIds) {
                let goodsListSize=$("dl").eq(this.$props.idxs).children("dd").length;
                this.$http.post('http://localhost:3000/api/deleteCart', {
                    storename:name,
                    goodsid:goodsIds,
                    shopid:shopIds,
                    goodsListNum:goodsListSize
                },{
                    emulateJSON : true
                },{
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }).then((res)=>{
                        alert(res);
                    if(res.status==0){

                    }else{
                        alert(res.msg);
                    }
                })
                location.reload();
            }
        },
    }
</script>

<style scoped>
    span.checkbg{
        display: block;
        border-radius: 50%;
        width:0.19rem;
        height:0.19rem;
        background: url("../../assets/img/goodsImg/icon.png");
        background-size: 100%;
        border:none;
        position: relative;
        left:-0.01rem;
        top:-0.01rem;
    }
    .f-section dl dd{
        width:100%;
        padding-left:0.19rem;
        box-sizing: border-box;
        position: relative;

    }

    .f-check{
        width:0.17rem;
        height:0.17rem;
        border:1px solid #c0c0c0;
        display: inline-block;
        border-radius: 50%;
        margin-right: 0.14rem;
    }
     dd .f-check{
        position: absolute;
        top:50%;
        margin-top: -0.08rem;
        left:0.14rem;
    }
    .f-goods-con{
        display: flex;
        padding:0.17rem 0 0.17rem 0.25rem;
        flex: 1;
        width:100%;
        box-sizing: border-box;
        border-bottom: 1px solid #e7e7e7;
    }
    .f-section dl dd:last-child .f-goods-con{
        border-bottom:none;
    }
    .f-goods-con img{
        width:33.33%;
        height:33.33%;
    }
    .f-goods-desc{
        width:66.66%;
        padding-left: 0.11rem;
        box-sizing: border-box;
    }
    .f-shop-p1{
        color: #313131;
        width:95%;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    }
    .f-shop-p2{
        color: #9f9f9f;
        font-size: 15px;
    }
    .f-shop-p3{
        color: #f93244;
        font-size: 14px;
    }
    .f-shop-p3 span{
        color: #898989;
        font-size: 12px;
        text-decoration: line-through;
        margin-left: 0.06rem;
    }
    .f-shop-num{
        display: flex;
        justify-content: space-between;
        margin-top:0.04rem;
        padding-right:0.18rem;
    }
    .f-shop-p4{
        width:1.02rem;
        height:0.3rem;
        border:1px solid #eaeaea;
        display: flex;

    }
    .f-shop-p4 span{
        text-align: center;
        line-height: 0.3rem;
        color: #f82d3f;
        font-weight: bold;
        width:33.33%;
    }
    .f-shop-p4 .f-num {
        font-weight: normal;
        color: #323232;
    }
    .f-shop-num .icon-shanchu{
        color: #c4c4c4;
        position: relative;
        top:0.13rem;
    }
</style>