import { createRouter, createWebHashHistory } from "vue-router";
import ajout from "/src/views/AjoutProduitDispo.vue";
import consultation from "/src/views/ConsulteProduit.vue";
import liste from "/src/views/ListeProduitDispo.vue";
import modification from "/src/views/ModificationProduit.vue";
const routes = [
  {
    path: "/",
    name: "ajout",
    component: ajout
  },
  {
    path: "/",
    name: "consultation",
    component: consultation
  },
  {
    path: "/",
    name: "liste de produit",
    component: liste
  },
  {
    path: "/",
    name: "modification",
    component: modification
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
