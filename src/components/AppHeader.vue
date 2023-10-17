<script>

export default {
    data() {
        return {
        };
    },

    methods: {
    },

}

</script>

<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <router-link :to="{ name: 'home' }" class="navbar-brand me-4">Portfolio's Logo</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{name:'projects'}" class="nav-link active" aria-current="page"> 
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'projects'}" class="nav-link">Progetti</router-link>
                    </li>

                </ul>
                <span class="navbar-text">
                    <a href="http://127.0.0.1:8000/login">Accedi</a>
                </span>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    margin-bottom: 30px;
    padding: 20px;
    background-color: rgb(246, 238, 228);


    .nav-item {
        padding-right: 10px;
    }
}
</style>
