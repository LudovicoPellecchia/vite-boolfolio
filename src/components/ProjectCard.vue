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
        getImageUrl(project) {
            return `http://127.0.0.1:8000/storage/${project.immagine}`;
        },

    },



}
</script>



<template>
    <div class="card my-card">
        <img :src="getImageUrl(project)" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{ project.titolo }}</h5>
            <p class="card-text">{{ project.descrizione }}</p>
            <p class="card-text">{{ project.type.name }}</p>
            <p class="card-text technologies-style" v-for="technology in project.technologies"><span>{{ technology.nome }}</span></p>
        </div>
    </div>
</template>

<style lang="scss">
.my-card{
    --bs-border-radius: 30px;
    box-shadow: 0 0.4px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 15px 0 rgba(0, 0, 0, 0.14);
    height: 100%;

    img{
        width: 100%;
        height: 40%;
        object-fit: cover;
    }

    .technologies-style span{
        background-color: goldenrod;
        border-radius: 5px;
        padding: 5px 15px;
    }

}</style>
