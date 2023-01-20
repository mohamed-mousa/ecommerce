/* A store for the categories. */
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCategoryStore = defineStore('category', () => {
    /* Creating a reactive array of objects. */
    const categories = reactive([
        { id: 1, name: 'electronics', image: '/images/categories/electronics.webp', count: '91,034' },
        { id: 2, name: 'vehicles', image: '/images/categories/vehicles.webp', count: '81,734' },
        { id: 3, name: 'property', image: '/images/categories/property.webp', count: '31,234' },
        { id: 4, name: 'jobs', image: '/images/categories/jobs.webp', count: '21,234' },

        { id: 5, name: 'garden', image: '/images/categories/garden.webp', count: '11,876' },
        { id: 6, name: 'animals', image: '/images/categories/animals.webp', count: '32,004' },
        { id: 7, name: 'hobby', image: '/images/categories/hobby.webp', count: '31,321' },
        { id: 8, name: 'fashion', image: '/images/categories/fashion.webp', count: '10,934' },
    ])

    return { categories }
})