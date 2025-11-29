import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '@/views/Homeview.vue'
import CategoryView from '@/views/CategoryView.vue';
import ProductView from '@/views/ProductView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Homeview
        },
        {
            path: "/categories/:categoryId",
            name: "category",
            component: CategoryView
        },
        {
            path: "/products/:productId",
            name: "product",
            component: ProductView
        }
    ]
})
export default router;