<script>
import ProjectList from './components/ProjectList.vue';
import { store, getDataFromApi} from './store';

export default {
  components:{
    ProjectList
  },

  data(){

    return{
      store
    };
  },
  
  methods: {

  },
  
  

}

</script>

<template>
  <h1>Benvenuto nel mio portfolio!</h1>
  <ProjectList></ProjectList>
</template>

<style lang="scss">
</style>
