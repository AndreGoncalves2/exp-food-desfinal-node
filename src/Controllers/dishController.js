const knex = require("../database/knex");
const DishRepository = require("../repositories/dishRepository");
const IngredientsRepository = require("../repositories/ingredientsRepository");

const DishCreateService = require("../services/dishCreateService");
const AppError = require("../utils/AppError");

class DishController {
    async create(request, response) {
        const { id } = request.user;
        
        const { name, description, category, price, ingredients } = request.body;
        const img = request.file.filename;

        const dishRepository = new DishRepository();
        const ingredientsRepository = new IngredientsRepository();
        
        try {
            const dishCreateService = new DishCreateService(dishRepository, ingredientsRepository);

            await dishCreateService.execute({ name, description, img, category, price, ingredients, id });
            return response.status(201).json();

        } catch (error) {
            throw new AppError(error.message);
        };
    };

    async showDishes(request, response) {

        const dishRepository = new DishRepository();
    
        const dishes = await dishRepository.findAll();

        response.status(200).json( dishes );
    };
};

module.exports = DishController;