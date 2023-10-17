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
<router-view></router-view>
</template>

<style lang="scss">

</style>
