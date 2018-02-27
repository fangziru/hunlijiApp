<template>
    <div class="f-all" id="f-all">
        <goods-cart-header title="购物车"></goods-cart-header>
        <goods-cart-main :flist="goodsCartList" :fadd="fadds" :fsub="fsubs" :checkgood="checkgoods" :checkstore="checkgoodsstore"></goods-cart-main>
        <goods-cart-footer :checkgood="checkgoodsall" :istrue="istrue" :tn="totalNum" :tm="totalMoney" :dm="discountMoney"></goods-cart-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import goodsCartHeader from "../components/goodsCart/goodsCartHeader.vue";
    import goodsCartMain from "../components/goodsCart/goodsCartMain.vue";
    import goodsCartFooter from "../components/goodsCart/goodsCartFooter.vue";
    import goodsCartApi from "../api/indexApi"
    export default {
        components:{
            goodsCartHeader,
            goodsCartMain,
            goodsCartFooter
        },
        created:function () {
            this.initData();
        },
        methods:{
            initData:function () {
                goodsCartApi.gotGoodsCartList((data)=>{
                    this.goodsCartList=data;
//                    console.log(this.goodsCartList[0])
//                    console.log(data+","+data.length)
                    if(data.length<=0){
                        $(".f-empty-cart").css("display","block");
                    }else{
                        $(".f-empty-cart").css("display","none");
                    }
                })
            },
            fadds:function (idx,idxg) {
                if(this.goodsCartList[idx].goodslist[idxg].goodsnum>=this.goodsCartList[idx].goodslist[idxg].existgoods){
                    this.goodsCartList[idx].goodslist[idxg].goodsnum=this.goodsCartList[idx].goodslist[idxg].existgoods;
                }else{
                    this.goodsCartList[idx].goodslist[idxg].goodsnum++;
                }

                if(this.goodsCartList[idx].goodslist[idxg].goodscheck==true){
                    this.countercheck();
                }
//                this.counter(this.cartsList);
            },
            fsubs:function (idx,idxg) {
                if(this.goodsCartList[idx].goodslist[idxg].goodsnum <=1){
                    this.goodsCartList[idx].goodslist[idxg].goodsnum =1
                }else{
                    this.goodsCartList[idx].goodslist[idxg].goodsnum--;
//                    this.counter(this.cartsList);
                }
                if(this.goodsCartList[idx].goodslist[idxg].goodscheck==true){
                    this.countercheck();
                }

            },
            checkgoods:function (idx,idxg) {
                this.goodsCartList[idx].goodslist[idxg].goodscheck=!this.goodsCartList[idx].goodslist[idxg].goodscheck;

                let isstorecheck=true;
                for(let i=0;i<this.goodsCartList[idx].goodslist.length;i++){
                    if(this.goodsCartList[idx].goodslist[i].goodscheck==false){
                        isstorecheck=false;
                    }
                }
                //console.log(isstorecheck);
                if(isstorecheck){
                    this.goodsCartList[idx].storecheck=true;
                }else{
                    this.goodsCartList[idx].storecheck=false;
                }
                let ischeckall=true;
                for(let j=0;j<this.goodsCartList.length;j++){
                    if(this.goodsCartList[j].storecheck==false){
                        ischeckall=false;
                    }
                }
                if(ischeckall){
                    this.istrue=true;
                }else{
                    this.istrue=false;
                }
                this.countercheck();
            },
            checkgoodsstore:function (idx) {
                this.goodsCartList[idx].storecheck=!this.goodsCartList[idx].storecheck;

                for(let j=0;j<this.goodsCartList[idx].goodslist.length;j++){
                    this.goodsCartList[idx].goodslist[j].goodscheck=this.goodsCartList[idx].storecheck;
                }
                let ischeckall=true;
                for(let j=0;j<this.goodsCartList.length;j++){
                    if(this.goodsCartList[j].storecheck==false){
                        ischeckall=false;
                    }
                }
                if(ischeckall){
                    this.istrue=true;
                }else{
                    this.istrue=false;
                }
                this.countercheck();
            },
            checkgoodsall:function () {
                //console.log(this.goodsCartList);
                this.istrue=!this.istrue;

                for(let i=0;i<this.goodsCartList.length;i++){
                    this.goodsCartList[i].storecheck=this.istrue;
                    for(let j=0;j<this.goodsCartList[i].goodslist.length;j++){
                        this.goodsCartList[i].goodslist[j].goodscheck=this.istrue;
                    }
                }
                if(this.istrue==true){
                    this.countercheck();
                }else{
                    this.totalNum=0;
                    this.totalMoney=0;
                    this.discountMoney=0;
                }

            },
            countercheck:function (data) {
                this.totalNum=0;
                this.totalMoney=0;
                this.discountMoney=0;
                for(let i=0;i<this.goodsCartList.length;i++){
                    for(let j=0;j<this.goodsCartList[i].goodslist.length;j++){
                        if(this.goodsCartList[i].goodslist[j].goodscheck==true){
                            this.totalNum++;
                            this.totalMoney+=this.goodsCartList[i].goodslist[j].goodsprice*this.goodsCartList[i].goodslist[j].goodsnum;
                            this.discountMoney+=(this.goodsCartList[i].goodslist[j].goodspricestart-this.goodsCartList[i].goodslist[j].goodsprice)*this.goodsCartList[i].goodslist[j].goodsnum;
                        }
                    }
                }
            }
//    {
//        "storename":"爱唯一婚纱",
//        "goodslist":
//        [
//            {"goodstitle":"限时促销！不要错过！中式礼服","goodssize":"红色大摆XS","goodsprice":450.00,"goodsnum":1,"goodsimg":"assets/img/goodsImg/o_1b3k5f6jm1oic9u88l018ku1k2bc.jpg"},
//            {"goodstitle":"限时促销！不要错过！中式礼服","goodssize":"红色大摆S","goodsprice":270.00,"goodsnum":2,"goodsimg":"assets/img/goodsImg/o_1b3k5f6jm1oic9u88l018ku1k2bc.jpg"}
//        ]
//    }
        },
        data(){
            return{
                goodsCartList:[],
                totalNum:0,
                totalMoney:0,
                discountMoney:0,
                istrue:false
            }
        },
//        mounted:function () {
//            this.checkgoods()
//        }
    }
</script>

<style scoped>
    #f-all{
        background: #f3f4f7;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
</style>

<!--:fadd="fadds" :fsub="fsubs" -->