<template>
    <div>
        <BannerComponent />
        <div class="main_container">
            <h1>Monte o seu burger:</h1>
            <BurgerForm />
        </div>
    </div>
</template>

<script>
import BannerComponent from "../components/Banner/banner.vue";
import BurgerForm from "../components/Form/BurgerForm.vue";

export default {
    name: "HomeView",
    components: {
        BannerComponent,
        BurgerForm,
    },
};
</script>
