<script>
import { store, getDataFromApi} from "../store";
import ProjectCard from "./ProjectCard.vue";

export default {
    components: {
        ProjectCard,
    },

    data() {
        return {
            store,
        }
    },

    methods: {
    },

    mounted() {
        getDataFromApi()
    }



}
</script>



<template>
    <div class="container">
        <div class="row gy-5">
            <div class="col" v-for="singleProject in store.projects">
                <ProjectCard :project="singleProject"></ProjectCard>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
