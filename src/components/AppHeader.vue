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
            ],

            activeLink: null
        };
    },

    methods: {
        activateLink(nameRoute){
            return this.activeLink = nameRoute
        }

    },

}

</script>

<template>
    <nav class="navbar navbar-expand-lg">

        <div class="container-fluid">
            

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav  mb-2 mb-lg-0">

                    <li v-for="navLink in navLinks" class="me-3" @click="activateLink(navLink.nameRoute)">
                        <router-link :to="{name:navLink.nameRoute}" 
                        :class="{'activated' : activeLink === navLink   .nameRoute}"
                        > 
                            {{navLink.text}}
                        </router-link>
                    </li>

                </ul>
                <div class="me-auto logo-wrapper">
                    <router-link :to="{ name: 'home' }" class="navbar-brand "><img class="logo" src="../assets/logo/logo-transparent-svg.svg" ></router-link>
                </div>

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
    background-color: rgba(255, 198, 128, 0.589);

    .logo-wrapper{
        text-align: center;
        width: 100%;
        }

    .logo{
        width: 240px;
    }

    ul li a{
        --bs-link-color-rgb: #343432;
        color: #646363;
        list-style: none;
        text-decoration: none;
    }

    .activated{
        color: #343432;
        padding-bottom: 4px;
        border-bottom: 1px solid #343432;
    }
}
</style>
