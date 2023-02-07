/* Defining a store. */
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useAdStore = defineStore('ad', () => {
    /* Defining the initial state of the store. */
    const ads = reactive([
        { id: 1, hot: true, statusCode: 0, statusName: 'Pending review', title: 'audi a6 sakisda - 305', image: '/images/cars/1.webp', km: '9,828', price: '8,117,132', date: '21', location: 'Indonesia . Pass' },
        { id: 2, hot: false, statusCode: 1, statusName: 'Approved', title: 'audi b1 mod - 513', image: '/images/cars/2.webp', km: '3,994', price: '5,779,790', date: '17', location: 'Greenland . Drive' },
        { id: 3, hot: true, statusCode: 0, statusName: 'Pending review', title: 'audi c5 puf - 677', image: '/images/cars/3.webp', km: '23,162', price: '11,122,389', date: '11', location: 'Nigeria . Manor' },
        { id: 4, hot: true, statusCode: 0, statusName: 'Pending review', title: 'audi d4 fuskegig - 685', image: '/images/cars/4.webp', km: '6,333', price: '10,810,161', date: '12', location: 'St . Boulevard. Lucia' },
        { id: 5, hot: true, statusCode: 1, statusName: 'Approved', title: 'audi e3 ade - 509', image: '/images/cars/5.webp', km: '23,502', price: '9,356,466', date: '21', location: 'Albania . Path' },
        { id: 6, hot: false, statusCode: 0, statusName: 'Pending review', title: 'audi f13 abu - 386', image: '/images/cars/6.webp', km: '24,243', price: '7,575,595', date: '3', location: 'Uganda . Lane' },
        { id: 7, hot: false, statusCode: 1, statusName: 'Approved', title: 'audi g5 fovzef - 728', image: '/images/cars/7.webp', km: '5,972', price: '8,025,803', date: '11', location: 'Colombia . Loop' },
        { id: 8, hot: false, statusCode: 1, statusName: 'Approved', title: 'audi i2 agnu - 723', image: '/images/cars/8.webp', km: '12,125', price: '11,162,696', date: '8', location: 'Gibraltar . Way' },
        { id: 9, hot: true, statusCode: 1, statusName: 'Approved', title: 'audi j12 ne - 582', image: '/images/cars/9.webp', km: '27,028', price: '3,343,925', date: '4', location: 'Congo . Avenue - Kinshasa' },
        { id: 10, hot: false, statusCode: 0, statusName: 'Pending review', title: 'audi k8 itaijebu - 244', image: '/images/cars/10.webp', km: '28,212', price: '1,810,347', date: '12', location: 'Singapore . Boulevard' },
    ])

    return { ads }
})