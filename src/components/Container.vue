<template>
    <div>
        <!-- <BodyContainer></BodyContainer> -->
        <Body></Body>
        <!-- <Footer></Footer> -->
    </div>
</template>

<script>
import Body from './Body.vue'
import Header   from './Header.vue';
import BodyContainer     from './BodyContainer.vue';
import Footer   from './Footer.vue';
export default {
    components:{
        Header,
        BodyContainer,
        Footer,
        Body,
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>
