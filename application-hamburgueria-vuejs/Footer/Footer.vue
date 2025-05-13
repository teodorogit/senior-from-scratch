<template>
    <footer id="footer">
        <p>Make Your Burger &copy; 2024</p>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent",
};
</script>
<style scoped>
#footer {
    position: fixed;
    height: 60px;
    background-color: #222;
    border-top: 4px solid #111;
    display: flex;
    color: #fcba03;
    align-items: center;
    justify-content: center;
    bottom: 0;
    width: 100%;
}
</style>
