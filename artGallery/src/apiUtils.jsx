// Aquí se leen los datos del json

import productsData from '../db.json';

export const getAllProducts = async () => {
    return productsData;
};