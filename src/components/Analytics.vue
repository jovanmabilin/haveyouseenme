<template>
    <div v-if="isActive"><MissingList></MissingList></div>
</template>

<script>
import MissingList from './MissingList.vue';

export default {
    components:{
        MissingList,
    },
    data(){
        return {
            isActive: true,
        }
    },
    destroyed(){
        this.isActive = false
    }
}
</script>

<style scoped>

</style>
