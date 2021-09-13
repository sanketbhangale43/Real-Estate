const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const Property_schema = new mongoose.Schema({
    title: { // *
        type: String,
        required: true
    },
    description: { // *
        type: String,
        required: true
    },
    type: {
        // 1-> Apartments
        // 2-> House
        // 3-> Offices
        // 4-> Villas
        // 5-> Lands
        type: Number,
        required: false
    },
    status: {
        // 1-> Sale
        // 2-> Rent
        type: Number,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    bedrooms: {
        type: Number,
        required: false
    },
    bathrooms: {
        type: Number,
        required: false
    },
    floors: {
        type: Number,
        required: false
    },
    garages: {
        type: Number,
        required: false
    },
    area: {
        // Sq ft
        type: Number,
        required: false
    },
    size: {
        // Sq ft
        type: Number,
        required: false
    },
    sale_or_rent_price: { // *
        type: Number,
        required: true
    },
    before_price_label: {
        // Start from
        type: Number,
        required: false
    },
    after_price_label: {
        // Monthly
        type: Number,
        required: false
    },

    // Features
    center_cooling: {
        type: Boolean,
        required: false
    },
    balcony: {
        type: Boolean,
        required: false
    },
    pet_friendly: {
        type: Boolean,
        required: false
    },
    barbeque: {
        type: Boolean,
        required: false
    },
    fire_alarm: {
        type: Boolean,
        required: false
    },
    modern_kitchen: {
        type: Boolean,
        required: false
    },
    storage: {
        type: Boolean,
        required: false
    },
    dryer: {
        type: Boolean,
        required: false
    },
    heating: {
        type: Boolean,
        required: false
    },
    pool: {
        type: Boolean,
        required: false
    },
    laundry: {
        type: Boolean,
        required: false
    },
    sauna: {
        type: Boolean,
        required: false
    },
    gym: {
        type: Boolean,
        required: false
    },
    elevator: {
        type: Boolean,
        required: false
    },
    dish_washer: {
        type: Boolean,
        required: false
    },
    emergency_exit: {
        type: Boolean,
        required: false
    },
    // It can store name of video or photo file
    media_array: [
        {
            media: {
                name: {
                    type: String,
                    required: true
                },
                type: {
                    type: Number,
                    required: true
                }
            }
        }
    ],
    // Location
    address: { // *
        type: String,
        required: true
    },
    country: { // *
        type: String,
        required: true
    },
    state: { // *
        type: String,
        required: true
    },
    city: { // *
        type: String,
        required: true
    },
    zip_or_postal_code: { // *
        type: Number,
        required: true
    },
    neighborhood: {
        type: String,
        required: false
    },

    // Extra data holders
    posted_by: { // *
        type: String,
        required: true
    },
    posted_as: { // *
        // 1-> Delear
        // 2-> Rent
        type: Number,
        required: true
    },
    posted_at: {
        type: Date,
        default: Date.now()
    }
});


const Property = mongoose.model('PROPERTY', Property_schema)
module.exports = Property;

