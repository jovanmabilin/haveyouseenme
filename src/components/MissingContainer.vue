<template>
    <div>
        <b-container fluid>
            <b-row>
                <b-col md="6 center">
                    <MissingList :title="true"></MissingList>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import MissingList from './MissingList.vue';
export default {
    components:{
        MissingList
    },
    data(){
        return {

        }
    },
    destroyed(){
    }
}
</script>

<style scoped>
    .center{
        margin: 0 auto;
    }
</style>
