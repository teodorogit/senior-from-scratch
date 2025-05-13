<template>
    <NavBar :logo="logo_src" :alt="app_name" />
    <router-view />
    <FooterComponent />
</template>
<script>
import NavBar from "./components/Navbar/Navbar.vue";
import FooterComponent from "./components/Footer/Footer.vue";
import { onAuthStateChanged } from "firebase/auth";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { auth } from "@/firebase"; // Ajuste o caminho conforme necessário

export default {
    components: {
        NavBar,
        FooterComponent,
    },
    data() {
        return {
            logo_src: "/img/logo.png",
            app_name: "Make Your Burguer",
        };
    },
    setup() {
        const router = useRouter();

        onMounted(() => {
            auth.onAuthStateChanged(async (user) => {
                if (user) {
                    try {
                        // Obtém o token do usuário
                        const tokenResult = await user.getIdTokenResult();

                        // Verifica a claim de administrador
                        if (tokenResult.claims.admin) {
                            // Redireciona para a página de admin
                            router.push("/pedidos");
                        } else {
                            // Redireciona para a página de pedidos ou outra página
                            router.push("/home");
                        }
                    } catch (error) {
                        console.error("Erro ao obter claims do token:", error);
                        router.push("/");
                    }
                } else {
                    // Usuário não autenticado, redireciona para login
                    router.push("/");
                }
            });
        });
    },
};
</script>
<style>
* {
    font-family: "Helvetica";
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.main_container {
    margin: 50px;
    min-height: 250px;
}
h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
}
</style>
