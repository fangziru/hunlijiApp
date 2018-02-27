<template>
    <div id="app">
        <loginbg></loginbg>
        <login-content></login-content>
    </div>
</template>

<script type="text/ecmascript-6">
    import loginbg from "../components/login/loginbg.vue";
    import loginContent from "../components/login/loginContent.vue";
    export default {
        components:{
            loginbg,
            loginContent
        },
        mounted:function(){
            this.change();
            this.logindisplayblock();
        },
        methods:{
            change:function(){
                var mySwiper = new Swiper ('.swiper-container', {
                    autoplay:5000,
                    loop: true,
                    paginationClickable: true,
                    autoplayDisableOnInteraction: false,
                    effect : 'slide',
                    pagination: '.swiper-pagination ',
                })
            },
            logindisplayblock:function(){
                $(".loginStart").click(function(){
                    $(".loginDiv").css("display","block");
                    $(this).css("display","none");
                })
            }

        }

    }
</script>

<style scoped>

</style>