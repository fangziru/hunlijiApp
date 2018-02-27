<template>
   <div class="meBox">
      <me-header></me-header>
      <me-section></me-section>
      <me-footer-all class="meFooter"></me-footer-all>
   </div>
</template>
<script type="text/ecmascript-6">
    import meSection from "../components/me/meSection.vue";
    import meFooterAll from "../components/public/indexFooter.vue";
    import meHeader from "../components/public/meHeader.vue";
    export default {
       components:{
           meSection,
           meFooterAll,
           meHeader
       }
    }
</script>

<style scoped>
.meBox
{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height:100%;
}
   .meFooter
   {
      height:54px;
   }
</style>