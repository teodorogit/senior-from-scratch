<template>
    <div id="nav">
        <router-link to="/" id="logo_url">
            <img :src="logo" :alt="alt" id="logo" />
        </router-link>
    </div>
</template>

<script>
export default {
    name: " NavBar",
    props: ["logo", "alt"],
};
</script>

<style scoped>
#nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
}

#nav #logo_url {
    margin: auto;
    margin-left: 0;
}

#logo {
    width: 40px;
    height: 40px;
}

#nav a {
    color: #fcba03;
    text-decoration: none;
    margin: 12px;
    transition: 0.5s;
}

#nav a:hover {
    color: #fff;
}
</style>
