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
    // Fetch all groups
    async fetchGroups() {
      const res = await axios.get<Group[]>('http://localhost:3000/api/groups')
      this.groups = res.data
      return this.groups
    },

    // Fetch all categories and map them
    async fetchAllCategories(): Promise<any[]> {
      const res = await axios.get<Category[]>('http://localhost:3000/api/categories')
      this.categories = res.data
      return this.categories.map((c) => ({
        title: c.name,
        imageSrc: `http://localhost:3000/${c.image}`,
        itemCount: c.productCount,
        bgColor: c.color,
        id: c.id,
      }))
    },

    // Fetch all promotions and map them
    async fetchAllPromotions(): Promise<any[]> {
      const res = await axios.get<Promotion[]>('http://localhost:3000/api/promotions')
      this.promotions = res.data
      return this.promotions.map((p) => ({
        title: p.title,
        imageSrc: `http://localhost:3000/${p.image}`,
        bgColor: p.color,
        bgButtonColor: p.buttonColor,
      }))
    },

    // Fetch all products and map them
    async fetchAllProducts(): Promise<any[]> {
      const res = await axios.get<Product[]>('http://localhost:3000/api/products')
      this.products = res.data
      return this.products.map((p) => {
        let images: string[] = []
        try {
          images = JSON.parse(p.image)
        } catch (err) {
          console.error('Invalid image JSON for product', p.id)
        }

        return {
          title: p.name,
          rating: p.rating,
          size: p.size,
          image: images.length > 0 ? `http://localhost:3000/${images[0]}` : '',
          price: p.price,
          promotion: p.promotionAsPercentage,
          countSold: p.countSold,
        }
      })
    },

    // Fetch everything in parallel
    async fetchAll() {
      const [groups, categories, promotions, products] = await Promise.all([
        this.fetchGroups(),
        this.fetchAllCategories(),
        this.fetchAllPromotions(),
        this.fetchAllProducts(),
      ])
      return { groups, categories, promotions, products }
    },
  },

  // Keep other getters like filtered by group/category if needed
  getters: {
    getCategoriesByGroup: (state) => {
      return (groupName: string) => {
        const group = state.groups.find((g) => g.name === groupName)
        if (!group) return []
        return state.categories.filter((c) => (c as any).groupId === group.id)
      }
    },

    getProductsByGroup: (state) => {
      return (groupName: string) => {
        const group = state.groups.find((g) => g.name === groupName)
        if (!group) return []
        const categoryIds = state.categories
          .filter((c) => (c as any).groupId === group.id)
          .map((c) => c.id)
        return state.products.filter((p) => categoryIds.includes(p.categoryId))
      }
    },

    getProductsByCategory: (state) => {
      return (categoryId: number) => state.products.filter((p) => p.categoryId === categoryId)
    },

    getPopularProducts: (state) => state.products.filter((p) => p.countSold > 10),
  },
})
