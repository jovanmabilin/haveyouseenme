<template>
 <div v-if="isActive">
        <b-container fluid class="text-overflow">
            <b-row class="margin-row">
                <b-col>
                    <center><Navigation></Navigation></center>
                    <b-container fluid v-if="currentComponent === 'Body'">
                        <b-row>
                            <b-col sm="6" class="center" style="margin-top:25%">
                                <h3>Have you seen me?</h3>
                                <p>haveyouseenme.ph is lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta bibendum libero, id ullamcorper libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </b-col>
                        </b-row>
                        <b-row >
                            <b-col sm="6" class="mt-4 center">
                                <b-row>
                                    <b-col md="2"><a href="" ><i class="fab fa-facebook-f"></i></a></b-col>
                                    <b-col md="2"><a href="" ><i class="fab fa-instagram"></i></a> </b-col>
                                    <b-col md="2"><a href="" ><i class="fab fa-twitter"></i></a>   </b-col>
                                    <b-col md="2"><a href="" ><i class="fa fa-link"></i></a>       </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-container>

                </b-col>
                <b-col  v-if="currentComponent === 'Body'" class="bg-gradient">
                    <MissingList class="missing"></MissingList>
                </b-col>
            </b-row>
            <b-col v-if="currentComponent !== 'Body'">
                    <component :is="currentComponent" :userId="userId" :title="title"></component>
            </b-col>
        </b-container>
 </div>
</template>

<script>
import Navigation from './Navigation.vue';
import MissingContainer from './MissingContainer.vue';
import MissingList from './MissingList.vue';
import MissingProfile from './MissingProfile.vue';
import LatestMissingList from './LatestMissingList.vue';
import Analytics from './Analytics.vue';
import { eventBus } from '../main';
export default {
  components:{
      MissingList,
      LatestMissingList,
      Navigation,
      MissingContainer,
      Analytics,
      MissingProfile,
  },
  data () {
    return {
        currentComponent: 'Body',
        userId: null,
        title: false,
        isActive: true,
        previousComponent: null,
    }
  },
  methods:{
      switchComponent(component){
          this.currentComponent = component.name;
          this.userId = component.userId;
          this.title = component.title;
      },
  },
  mounted(){
      this.previousComponent = this.currentComponent
      eventBus.$on('switchComponent', this.switchComponent);
  },
  updated(){
      this.previousComponent = this.currentComponent
  },
  destroyed(){
      eventBus.$off('switchComponent',this.currentComponent);
      this.isActive = false;
  },
}
</script>

<style scoped>
    .bg-gradient{
        overflow: auto;
        height: 100vh;
        background: #fc5c7d;    
        background: -webkit-linear-gradient(to left, #fc5c7d, #6a82fb); 
        background: linear-gradient(to left, #fc5c7d, #6a82fb);     
        /* background: #0f2027;    
        background: -webkit-linear-gradient(to bottom, #0f2027, #203a43, #2c5364);  
        background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364);   */
    }

    ul{
        list-style: none;
    }
    ul li {
        display:inline-block;
        margin-right: 10px;
        font-weight: 600;
    }

    a{
        text-decoration: none;
       
    }
    a > i {
        padding: 20px;
        border-radius: 100%;
        border: 1px solid #dcdcdd;
    }

    a > i.fa-facebook-f,
    a > i.instagram{
        padding: 20px 25px 20px 25px;

    }
    .center{
        margin: 0 auto;
    }
    .missing{
        margin :50px;
    }
    .text-overflow{
        overflow: hidden;
    }
</style>
