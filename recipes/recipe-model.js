const db = require('../data/dbConfig');

module.exports = {
    addRecipe,
    findRecipe,
    findRecipeBy,
    findRecipeById,
    updateRecipe,
    deleteRecipe
}

function findRecipe(){
    return db("recipes")
}

function findRecipeBy(filter){
    return db("recipes")
        .where(filter)
}

async function addRecipe(recipe){
    const [id] = await db("recipes").insert(recipe, "id")

    return findRecipeById(id)
}

function findRecipeById(id){
    return db("recipes")
        .where({id})
        .first()
}

function updateRecipe(contents, id){
    return db('recipes')
        .where({id})
        .update(contents)
}

function deleteRecipe(id){
    console.log('model', id)
    return db('recipes')
        .where({id})
        .del()
}