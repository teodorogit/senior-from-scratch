<template>
    <div class="main_container">
        <h1>Gerenciar pedidos</h1>
        <Dashboard />
    </div>
</template>
<script>
import Dashboard from "@/components/Dashboard/Dashboard.vue";

export default {
    name: "Pedidos",
    components: {
        Dashboard,
    },
};
</script>
<style scoped></style>
