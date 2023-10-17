<script>
import ProjectList from './components/ProjectList.vue';
import AppHeader from './components/AppHeader.vue';
import { store, getDataFromApi} from './store';


export default {
  components:{
    ProjectList,
    AppHeader
  },

  data(){

    return{
      store
    };
  },
  
  methods: {

  },
  mounted() {
        getDataFromApi()
    }

  

}

</script>

<template>
<AppHeader></AppHeader>
<main><router-view></router-view>
</main>
</template>

<style lang="scss">
</style>
