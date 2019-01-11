<template>
    <div>
        <b-container fluid class="text-overflow">
            <b-row >
                <b-col md="3" class="mb-4 ">
                    <b-card class="no-border border-radius bg-gradient text-white">
                        <div class="center">
                            <img :src="person.image" class="width border-radius" :alt="person.image" >
                            <h4 class="center title ">{{person.name}}</h4>
                            <p class="age-gender">
                                <i class="fa fa-user"></i> 
                                <b>{{person.age}} years old | </b>
                                <i class="fa fa-mars" v-if="person.gender === 'Male'"></i> 
                                <i class="fa fa-venus" v-if="person.gender === 'Female'"></i> 
                                <b>{{person.gender}}</b>
                                </p>
                        </div>

                        <table>
                            <tr>
                                <th>Weight</th>
                                <td>{{person.weight}}kg</td>
                            </tr>
                            <tr>
                                <th>Height</th>
                                <td>{{person.height}}</td>
                            </tr>
                            <tr>
                                <th>Skin color</th>
                                <td>{{person.skinColor}}</td>
                            </tr>
                            <tr>
                                <th>Hair color</th>
                                <td>{{person.hairColor}}</td>
                            </tr>
                            <tr>
                                <th>Eye color</th>
                                <td>{{person.eyeColor}}</td>
                            </tr>
                            <tr>
                                <th>Build</th>
                                <td>{{person.build}}</td>
                            </tr>
                        </table>
                   
                   </b-card>

                </b-col>
                <b-col>

                    <b-card class="no-border border-radius card-shadow">

                        <b-nav pills>
                            <b-nav-item href="#last-seen" active>Last seen</b-nav-item>
                            <b-nav-item href="#photos">Photos</b-nav-item>
                        </b-nav>

                        <div id="last-seen" class="mt-2">
                            <b-row>
                                <b-col>
                                    <div>
                                        <p class="placeholder">Date and Time</p>
                                        <p class="placeholder-content">{{person.lastSeen.dateTime}}</p>
                                    </div>
                                    <div>
                                        <p class="placeholder">Place</p>
                                        <p class="placeholder-content"> {{person.lastSeen.place}}</p>
                                    </div>
                                    <div>
                                        <p class="placeholder">Identifiable Information</p>
                                        <p class="placeholder-content"> {{person.lastSeen.identifiableInformation}}</p>
                                    </div>
                                </b-col>
                             
                            </b-row>

                            <ul class="links">
                                <li><a href="" ><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="" ><i class="fab fa-instagram"></i></a> </li>
                                <li><a href="" ><i class="fab fa-twitter"></i></a>   </li>
                                <li><a href="" ><i class="fa fa-link"></i></a>       </li>
                            </ul>
                        </div>


                    </b-card>


                    
                </b-col>
            </b-row>
        </b-container>
        <!-- <b-container fluid>
           <b-row>
               <b-col md="6" class="center">
                   <center>
                       <img :src="person.image" class="width" :alt="person.image" >
                       <h2 class="width title">{{person.name}}</h2>
                       <p class="age-gender">
                           <i class="fa fa-user"></i> 
                           <b>{{person.age}} years old | </b>
                           <i class="fa fa-mars" v-if="person.gender === 'Male'"></i> 
                           <i class="fa fa-venus" v-if="person.gender === 'Female'"></i> 
                           <b>{{person.gender}}</b>
                           </p>
                   </center>

                   <b-row>
                        <b-col>
                            <ul>
                                <li><b>Weight: {{person.weight}} kg    </b></li>
                                <li><b>Height: {{person.height}}       </b></li>
                                <li><b>Skin color: {{person.skinColor}}</b></li>
                                <li><b>Hair color: {{person.hairColor}}</b></li>
                                <li><b>Eye color: {{person.eyeColor}}  </b></li>
                                <li><b>Build: {{person.build}}         </b></li>
                                <li><b>Date and Time: {{person.lastSeen.dateTime}}</b></li>
                                <li><b>Place: {{person.lastSeen.place}}</b></li>
                                <li><b>Identifiable Information: {{person.lastSeen.identifiableInformation}}</b></li>
                            </ul>
                        </b-col>
                   </b-row>
                   
               </b-col>
              
           </b-row>
        </b-container> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            person: {
                    image: 'https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
                    name: 'Juan de los Santos',
                    age: 45,
                    gender: 'Male',
                    weight: 60,
                    height: "5'6",
                    skinColor: 'White',
                    hairColor: 'Blonde',
                    eyeColor:'Black',
                    build: 'Slim',
                    lastSeen:{
                        dateTime: '21 January 2018, 1pm',
                        place: 'Gaston park',
                        identifiableInformation: 'Wearing black shirt, and black jeans'
                    }
            },
        }
    }
}
</script>

<style scoped>
    .bg-gradient{
        overflow: auto;
        /* height: 100vh; */
        background: #fc5c7d;    
        background: -webkit-linear-gradient(to left, #fc5c7d, #6a82fb); 
        background: linear-gradient(to left, #fc5c7d, #6a82fb);     
        /* background: #0f2027;    
        background: -webkit-linear-gradient(to bottom, #0f2027, #203a43, #2c5364);  
        background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364);   */
    }

    .card-shadow{
        box-shadow: 0px 0px 50px -20px rgba(0,0,0,0.5);
    }

    .center{
        margin: 0 auto;
        text-align: center;
    }
    .no-border{
        border:none;
    }
    .border-radius{
        border-radius: 1.25rem;
    }
    .width{
        width: 15em;
    }
    .title{
        font-weight: 700;
        margin: 20px 0px 0px 0px;
    }

    ul{
        margin: 0;
    }
    ul>li{
        list-style: none;
        /* text-align: center; */
    }

    .age-gender{
        font-size: 0.750rem;
    }

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        /* border-top: 1px solid #dddddd; */
        /* border-bottom: 1px solid #dddddd; */
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: rgba(220, 220, 221,0.1);
    }

    .placeholder{
        font-size: 0.8rem;
        font-weight: 800;
        text-transform: uppercase;
        opacity: 0.6;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .placeholder-content{
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1em;
    }

    a > i {
        padding: 10px;
        border-radius: 100%;
        border: 1px solid #dcdcdd;
    }

    a > i.fa-facebook-f,
    a > i.instagram{
        padding: 10px 15px 10px 15px;

    }


    .links li{
        display:inline-block;
        margin-bottom: 10px;
        margin-right: 10px;
    }

    .links{
        padding-inline-start: 0px;
    }

    @media screen and (max-width: 370px) {
        .width{
            width: 11em;
        }
        .title{
            font-size: 1.2rem
        }
        .age-gender{
            font-size: 0.6rem;
        }
    }

    
</style>
