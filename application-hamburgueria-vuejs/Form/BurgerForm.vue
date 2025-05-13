<template>
    <div>
        <MensagemComponent :msg="msg" v-show="msg" />
        <div>
            <form id="burger-form" @submit="createBurguer">
                <div class="input-container">
                    <label for="nome">Nome do cliente:</label>
                    <input type="text" id="nome" name="nome" required v-model="nome" placeholder="Digite seu nome" />
                </div>
                <div class="input-container">
                    <label for="pao">Escolha o pão:</label>
                    <select name="pao" id="pao" v-model="pao" required>
                        <option value="">Selecione o seu pão</option>
                        <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
                    </select>
                </div>
                <div id="opcionais-container" class="input-container">
                    <label for="carne">Escolha a carne do seu burguer:</label>
                    <select name="carne" id="carne" v-model="carne" required>
                        <option value="">Selecione o tipo de carne</option>
                        <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="opcionais" id="opcionais-title">Selecione os opcionais:</label>
                    <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
                        <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo" />
                        <span>{{ opcional.tipo }}</span>
                    </div>
                </div>
                <div class="input-container">
                    <input class="submit-btn" type="submit" value="Criar meu Burger!" />
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import MensagemComponent from "../MensagemComponent/MensagemComponent.vue";
import { db } from "../../firebase.js"; // Importa o Firestore
import { collection, addDoc, getDocs, query, orderBy, limit, startAfter } from "firebase/firestore";

export default {
    name: "BurgerForm",
    components: {
        MensagemComponent,
    },
    data() {
        return {
            paes: [],
            carnes: [],
            opcionaisdata: [],
            nome: "",
            pao: "",
            carne: "",
            opcionais: [],
            msg: null,
        };
    },
    methods: {
        async getIngredientes() {
            try {
                const paesSnapshot = await getDocs(collection(db, "paes"));
                const carnesSnapshot = await getDocs(collection(db, "carnes"));
                const opcionaisSnapshot = await getDocs(collection(db, "opcionais"));

                this.paes = paesSnapshot.docs.map((doc) => ({ id: doc.id, tipo: doc.data().tipo }));
                this.carnes = carnesSnapshot.docs.map((doc) => ({ id: doc.id, tipo: doc.data().tipo }));
                this.opcionaisdata = opcionaisSnapshot.docs.map((doc) => ({ id: doc.id, tipo: doc.data().tipo }));
            } catch (error) {
                console.error("Erro ao buscar ingredientes:", error);
            }
        },
        async getNextId() {
            const q = query(collection(db, "burgers"), orderBy("id", "desc"), limit(1));
            const snapshot = await getDocs(q);
            if (snapshot.empty) {
                return 1;
            } else {
                const lastBurger = snapshot.docs[0].data();
                return lastBurger.id + 1;
            }
        },
        async createBurguer(e) {
            e.preventDefault();
            const id = await this.getNextId();
            const data = {
                id,
                nome: this.nome,
                carne: this.carne,
                pao: this.pao,
                opcionais: Array.from(this.opcionais),
                status: "Solicitado",
            };

            try {
                await addDoc(collection(db, "burgers"), data);

                // Setting message
                this.msg = `Pedido Nº${id} realizado com sucesso`;
                setTimeout(() => (this.msg = ""), 3000);

                // Clean form
                this.nome = "";
                this.carne = "";
                this.pao = "";
                this.opcionais = [];
            } catch (error) {
                console.error("Erro ao criar pedido:", error);
            }
        },
    },
    mounted() {
        this.getIngredientes();
    },
};
</script>
<style scoped>
#burger-form {
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 80px;
}
.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}
label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #fcba03;
}

input,
select {
    padding: 5px 10px;
    width: 300px;
}

#opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
}
#opcionais-title {
    width: 100%;
}
.checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
}
.checkbox-container span,
.checkbox-container input {
    width: auto;
}
.checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
}
.submit-btn {
    background-color: #222;
    color: #fcba03;
    font-weight: bold;
    border: 2px solid #333;
    padding: 10px;
    font-size: 17px;
    margin: 0 auto;
    cursor: pointer;
    transition: 0.5s;
}
.submit-btn:hover {
    background-color: transparent;
    color: #222;
}
</style>
