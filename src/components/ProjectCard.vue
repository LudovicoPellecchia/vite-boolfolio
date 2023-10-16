<script>
import { store, getDataFromApi } from '../store';

export default {
    props: {
        project: Object
    },

    data() {
        return {
            store
        }
    },

    methods: {

    },



}
</script>



<template>
    <div class="card">
<!--         <img :src="project.immagine" class="card-img-top">
 -->        <div class="card-body">
            <h5 class="card-title">{{ project.titolo }}</h5>
            <p class="card-text">{{ project.descrizione }}</p>
            <p class="card-text">{{ project.type.name }}</p>
        </div>
    </div>
</template>

<style lang="scss"></style>
