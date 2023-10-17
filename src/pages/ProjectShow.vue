<script>
import { store } from '../store';
import axios, { formToJSON } from 'axios';


export default {
    data() {
        return {
            show_project: {

            }
        };
    },

    methods: {
        getSingleProjectFromApi() {
            axios
                .get("http://localhost:8000/api/projects/" + this.$route.params.slug)
                .then((response) => {
                    this.show_project = response.data
                })
        },
        getImageUrl(show_project) {
            return `http://127.0.0.1:8000/storage/${show_project.immagine}`;
        },

    },
    mounted() {
        this.getSingleProjectFromApi()
    }

}

</script>

<template>
    <div class="container">
        <div class="card my-card">
        <img :src="getImageUrl(show_project)" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{ show_project.titolo }}</h5>
            <p class="card-text">{{ show_project.descrizione }}</p>
            <p class="card-text" v-if="show_project.type">{{ show_project.type.name }}</p>
            <p class="card-text technologies-style" v-for="technology in show_project.technologies"><span>{{ technology.nome
            }}</span></p>
        </div>
    </div>

    <div class=" text-center mt-5">
        <router-link :to="{name:'projects'}"><button class="btn btn-outline-secondary"><span>&#8249;</span> Torna Indietro</button></router-link>
    </div>
    </div>

    
</template>

<style lang="scss" scoped>
img{
    max-height: 400px;
}
</style>
