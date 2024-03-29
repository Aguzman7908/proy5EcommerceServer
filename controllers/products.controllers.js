const express = require('express')
const Product = require('../models/Product')

const getProducts = async (req, res) => {
    try{
        const products = await Product.find({})
        res.json({data:products,})
    } catch (error){
        res.status (400).json({msg:'Hubo un error explorando los datos'})
    }
}

const getProductIndividual =async (req, res) => {
    try{
        const sku = req.params.sku
        const products = await Product.findOne({sku})
        res.json({data:products,})
    } catch (error){
        res.status (400).json({msg:'Hubo un error explorando los datos'})
    }
}

module.exports = {getProducts, getProductIndividual}