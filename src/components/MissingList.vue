<template>
    <div v-if="isActive">
        <b-container class="pt-4"> 
            <b-row>
                <b-col md="12">
                    <h2 v-if="title" class="title mb-4">Missing</h2>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                     <b-card-group columns>
                        <a class="cursor-pointer" v-for="(person,index) in missingPerson" @click="navigateTo('MissingProfile')" :key="index">
                            <b-card :img-src="person.image"
                                    img-fluid
                                    img-alt="image"
                                    overlay
                                    text-variant="white"
                                    class="fx"
                                    >
                            </b-card>
                        </a>
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    props:{
        title:{
            type: Boolean,
            default: false,
        }
    },
    data(){
        return {
            missingPerson:[
                {
                    name: 'John Doe',
                    image: 'https://images.unsplash.com/photo-1529932260967-af9d3bbd8138?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                },
                {
                    name: 'Ricardo Dalisay',
                    image: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                },
                {
                    name: 'Albert Einstein',
                    image: 'https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
                },
                {
                    name: 'Johnny Walker',
                    image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=702&q=80',
                },
                {
                    name: 'Johnny Blake',
                    image: 'https://images.unsplash.com/photo-1444069069008-83a57aac43ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                },
                {
                    name: 'Alex Blake',
                    image: 'https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
                },
                {
                    name: 'Jane Smith',
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                },
                {
                    name: 'John Doe',
                    image: 'https://images.unsplash.com/photo-1529932260967-af9d3bbd8138?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                },
                {
                    name: 'Ricardo Dalisay',
                    image: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                },
                {
                    name: 'Albert Einstein',
                    image: 'https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
                },
                {
                    name: 'Johnny Walker',
                    image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=702&q=80',
                },
                {
                    name: 'Johnny Blake',
                    image: 'https://images.unsplash.com/photo-1444069069008-83a57aac43ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                },
                {
                    name: 'Alex Blake',
                    image: 'https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
                },
                {
                    name: 'Jane Smith',
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                },

            ],
            isActive: true,
        }
    },
    methods:{
        navigateTo(name){
            let component = { name: name };
            eventBus.$emit('switchComponent',component);
        }
    },
    destroyed(){
        this.missingPerson = [];
        this.isActive = false;
    }    
}
</script>

<style scoped>
    .fx:hover{
        /* -webkit-box-shadow: 0px 0px 96px -21px rgba(143,136,143,0.63); */
        /* -moz-box-shadow: 0px 0px 96px -21px rgba(143,136,143,0.63); */
        /* border: 1px solid #dcdcdd; */
        box-shadow: 0px 0px 96px -21px rgba(143,136,143,1);
        transition: 1s ease-in-out;
    }

    .fx{
        border: none;
    }
    .title{
        color: #454d57;
        font-weight: 700;
    }
    .cursor-pointer{
        cursor: pointer;
    }
</style>
