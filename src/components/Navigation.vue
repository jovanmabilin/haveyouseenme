<template>
    <div>
        <Header></Header>
        <ul>
            <li><a class="cursor-pointer text-primary " @click="navigateTo('Body')">Home</a></li>
            <li><a class="cursor-pointer text-primary " @click="navigateTo('MissingList',null,true)">Missing</a></li>
            <li><a class="cursor-pointer text-primary " @click="navigateTo('Analytics')">Analytics</a></li>
        </ul>
    </div>
</template>
<script>
import Header from './Header.vue';
import { eventBus } from '../main'
export default {
    components:{
        Header,
    },
    data(){
        return {
            
        }
    },
    methods:{
        navigateTo(cname, userId = null,title = false){
            let component = { name: cname, userId: userId, title:title};
            eventBus.$emit('switchComponent',component);
        }
    }
}
</script>

<style scoped>
    ul{
        list-style: none;
        border-bottom: 1px solid rgba(220, 220, 221,0.3);
        border-top: 1px solid rgba(220, 220, 221,0.3);
        padding-top: 20px;
        padding-bottom: 20px;
    }
    ul li {
        display:inline-block;
        margin-right: 80px;
        font-weight: 600;
    }

    a{
        text-decoration: none;
    }

    .cursor-pointer{
        cursor: pointer;
    }
</style>
