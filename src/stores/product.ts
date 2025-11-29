import { defineStore } from 'pinia'
import axios from 'axios'
import type { Group, Category, Promotion, Product } from '@/types/product'

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [] as Group[],
    promotions: [] as Promotion[],
    categories: [] as Category[],
    products: [] as Product[],
  }),

  actions: {
    async loadGroups() {
      const res = await axios.get<Group[]>("http://localhost:3000/api/groups")
      this.groups = res.data
    },

    async loadPromotions() {
      const res = await axios.get<Promotion[]>("http://localhost:3000/api/promotions")
      this.promotions = res.data
    },

    async loadCategories() {
      const res = await axios.get<Category[]>("http://localhost:3000/api/categories")
      this.categories = res.data
    },

    async loadProducts() {
      const res = await axios.get<Product[]>("http://localhost:3000/api/products")
      this.products = res.data
    },

    async loadAll() {
      await Promise.all([
        this.loadGroups(),
        this.loadPromotions(),
        this.loadCategories(),
        this.loadProducts()
      ])
    }
  },

  getters: {

    allCategories: (state) =>
      state.categories.map(c => ({
        title: c.name,
        imageSrc: `http://localhost:3000/${c.image}`,
        itemCount: c.productCount,
        bgColor: c.color,
        id: c.id
      })),

    allPromotions: (state) =>
      state.promotions.map(p => ({
        title: p.title,
        imageSrc: `http://localhost:3000/${p.image}`,
        bgColor: p.color,
        bgButtonColor: p.buttonColor,
      })),

    allproducts: (state) =>
  state.products.map((p) => {
    let images: string[] = [];
    try {
      images = JSON.parse(p.image); // convert stringified array to actual array
    } catch (e) {
      console.error('Invalid image JSON for product', p.id);
    }

    return {
      title: p.name,
      rating: p.rating,
      size: p.size,
      image: images.length > 0 ? `http://localhost:3000/${images[0]}` : '', // first image
      price: p.price,
      promotion: p.promotionAsPercentage,
    };
  }),

    // List all categories by group name
    getCategoriesByGroup: (state) => {
      return (groupName: string) => {
        const group = state.groups.find(g => g.name === groupName)
        if (!group) return []
        return state.categories.filter(c => (c as any).groupId === group.id)
      }
    },

    // List all products by group name
    getProductsByGroup: (state) => {
      return (groupName: string) => {
        const group = state.groups.find(g => g.name === groupName)
        if (!group) return []
        const categoryIds = state.categories
          .filter(c => (c as any).groupId === group.id)
          .map(c => c.id)
        return state.products.filter(p => categoryIds.includes(p.categoryId))
      }
    },

    // List all products by categoryId
    getProductsByCategory: (state) => {
      return (categoryId: number) =>
        state.products.filter(p => p.categoryId === categoryId)
    },

    // Popular products (countSold > 10)
    getPopularProducts: (state) =>
      state.products.filter(p => (p as any).countSold > 10)
  },
})
