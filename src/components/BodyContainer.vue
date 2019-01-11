<template>
    <div>
        <component :is="currentComponent"></component>
    </div>
</template>

<script>
import Body from './Body.vue';
import MissingContainer from './MissingContainer.vue';

import { eventBus } from '../main';
export default {
    components:{
        Body,
        MissingContainer,
    },
    data(){
        return{
            currentComponent: 'MissingContainer',
        }
    }
}
</script>


<style scoped>

</style>
