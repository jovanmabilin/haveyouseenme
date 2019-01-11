<template>
    <div>
        <b-container class="pt-4"> 
            <b-row>
                <!-- <h2 class="title mb-4">Missing</h2> -->
            </b-row>
            <b-row>
                <b-col>
                     <b-card-group columns>
                        <b-card v-for="(person,index) in latestPerson"
                                :key="index"
                                :img-src="person.image"
                                img-fluid
                                img-alt="image"
                                overlay
                                text-variant="white"
                                class="fx"
                                :title="person.name">
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data(){
        return {
            latestPerson:[
                {
                    image: 'https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=642&q=80',
                    name: 'Alex Blake',
                    age: 45,
                    gender: 'Female',
                    weight: 60,
                    height: "5'6",
                    skinColor: 'White',
                    hairColor: 'Blonde',
                    eyeColor:'Black',
                    build: 'Slim',
                    lastSeen:{
                        dateTime: 'January, 1pm',
                        place: 'Gaston park',
                        identifiableInformation: 'Wearing black shirt, and miniskirt'
                    }
                },
                {
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    name: 'Jane Smith',
                    age: 45,
                    gender: 'Female',
                    weight: 60,
                    height: "5'6",
                    skinColor: 'White',
                    hairColor: 'Blonde',
                    eyeColor:'Black',
                    build: 'Slim',
                    lastSeen:{
                        dateTime: 'January, 1pm',
                        place: 'Gaston park',
                        identifiableInformation: 'Wearing black shirt, and miniskirt'
                    }
                },
                {
                    image: 'https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
                    name: 'Juan de lo Santos',
                    age: 45,
                    gender: 'Female',
                    weight: 60,
                    height: "5'6",
                    skinColor: 'White',
                    hairColor: 'Blonde',
                    eyeColor:'Black',
                    build: 'Slim',
                    lastSeen:{
                        dateTime: 'January, 1pm',
                        place: 'Gaston park',
                        identifiableInformation: 'Wearing black shirt, and miniskirt'
                    }
                },
              

            ]
        }
    }    
}
</script>

<style scoped>
    .fx{
        border:none;
    }

    .title{
        color: #454d57;
        font-weight: 700;
    } 

    .card-custom{
        background-color: rgba(69, 77, 87, 0.03);
        padding: 30px;
    }

    .image-style{
        width: 150px;
        height: 150px;
    }

    .basic-info p{
        line-height: 0.5em;
    }

    .name{
        line-height:1em;
        font-size: 24px;
        font-weight: 700;
        text-align: center
    }
</style>
