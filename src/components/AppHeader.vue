<script>

export default {
    data() {
        return {
            navLinks:[
                {
                    nameRoute:'home',
                    text: 'Home',
                },
                {
                    nameRoute:'projects',
                    text: 'Progetti',
                },

            ]
        };
    },

    methods: {

    },

}

</script>

<template>
    <nav class="navbar navbar-expand-lg">

        <div class="container-fluid">
            <router-link :to="{ name: 'home' }" class="navbar-brand me-4"><img class="logo" src="../assets/logo/logo-transparent-svg.svg" ></router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item" v-for="navLink in navLinks">
                        <router-link :to="{name:navLink.nameRoute}" class="nav-link" aria-current="page" > 
                            {{navLink.text}}
                        </router-link>
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
    padding-left: 20px;
    background-color: rgba(255, 198, 128, 0.589);

    .logo{
        width: 150px;
    }

    .nav-item {
        padding-right: 10px;
    }
}
</style>
