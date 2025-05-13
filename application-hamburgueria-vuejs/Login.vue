<template>
    <div class="container">
        <div class="cadastrar">
            <form @submit.prevent="register">
                <h1>Cadastrar</h1>
                <div class="section">
                    <label for="email">Email</label>
                    <input type="email" v-model="email_cadastro" name="email_cadastro" required />
                </div>
                <div class="section">
                    <label for="password">Senha</label>
                    <input type="password" v-model="password_cadastro" name="password_cadastro" required />
                </div>
                <button class="submit" type="submit">Cadastrar</button>
            </form>
        </div>
        <div class="logar">
            <form @submit.prevent="login">
                <h1>Entrar</h1>
                <div class="section">
                    <label for="email">Email</label>
                    <input type="email" v-model="email_login" name="email" />
                </div>
                <div class="section">
                    <label for="password">Senha</label>
                    <input type="password" v-model="password_login" name="password" />
                </div>
                <button class="submit" type="submit">Entrar</button>
            </form>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default {
    setup() {
        const email_cadastro = ref("");
        const password_cadastro = ref("");
        const auth = getAuth();
        const email_login = ref("");
        const password_login = ref("");

        const register = async () => {
            try {
                await createUserWithEmailAndPassword(auth, email_cadastro.value, password_cadastro.value);
                alert("Usuário registrado com sucesso!");
            } catch (error) {
                alert("Erro ao registrar usuário: " + error.message);
            }
        };

        const login = async () => {
            try {
                await signInWithEmailAndPassword(auth, email_login.value, password_login.value);
                alert("Usuário logado com sucesso");
            } catch (error) {
                alert(error.message);
            }
        };

        return {
            email_cadastro,
            password_cadastro,
            email_login,
            password_login,
            register,
            login,
        };
    },
};
</script>
<style scoped>
.container {
    display: flex;
    max-width: 1000px;
    height: 80vh;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
}
.section {
    display: flex;
    flex-direction: column;
    padding: 12px 24px;
    gap: 4px;
}
.submit {
    display: flex;
    justify-content: center;
    padding: 4px 8px;
    width: 80%;
    margin: 0 auto;
    background: transparent;
    border: 2px solid #333;
    transition: 0.5s ease;
}
.submit:hover {
    cursor: pointer;
    border: 2px solid #ddd;
    background-color: #333;
    color: #eee;
}
input {
    height: 30px;
}
.cadastrar {
    border: 2px solid rgba(0, 0, 0, 0.041);
    padding: 6px;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.051);
    border-radius: 9px;
    background-color: rgba(250, 224, 225, 0.623);
}
.logar {
    border: 2px solid rgba(0, 0, 0, 0.041);
    padding: 6px;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.051);
    border-radius: 9px;
    background-color: rgba(223, 252, 223, 0.532);
}
h1 {
    font-size: 20px;
}
</style>
