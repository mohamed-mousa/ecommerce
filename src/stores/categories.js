import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCategoryStore = defineStore('category', () => {
    const categories = reactive([
        { uuid: '797b9806-4e1a-4027-bea2-86874241f05e', name: 'electronics', image: '/images/categories/electronics.png', count: '91,034' },
        { uuid: '7face822-6155-4668-aeb3-a20cdde45af3', name: 'vehicles', image: '/images/categories/vehicles.png', count: '81,734' },
        { uuid: '962269b7-f6eb-499b-93ab-970371c6085e', name: 'property', image: '/images/categories/property.png', count: '31,234' },
        { uuid: 'ed047877-cfc2-41ad-bf1b-9bd37b5b1df9', name: 'jobs', image: '/images/categories/jobs.png', count: '21,234' },

        { uuid: '96a8b678-c8ad-44b5-bd24-521bb4589816', name: 'garden', image: '/images/categories/garden.png', count: '11,876' },
        { uuid: '901122d6-19a9-426f-a797-7ac6b9780e11', name: 'animals', image: '/images/categories/animals.png', count: '32,004' },
        { uuid: 'dba8e124-f6b0-434e-8bf2-39305ea1f406', name: 'hobby', image: '/images/categories/hobby.png', count: '31,321' },
        { uuid: 'd2672297-05fd-4c37-b011-bf81f86ee0da', name: 'fashion', image: '/images/categories/fashion.png', count: '10,934' },
    ])

    return { categories }
})