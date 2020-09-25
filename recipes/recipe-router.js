const router = require('express').Router()
const Recipes = require('./recipe-model');
const restricted = require('../auth/restricted-middleware')


//GET all recipes - Working
router.get('/', restricted, async (req, res) => {
    try {
        const test = await Recipes.findRecipe();
        res.status(200).json(test)
        
    } catch (error) {
        res.status(500).json({
            message: "There was a server error"
        })
    }
})

// GET a recipe by id - Working
router.get('/:id', restricted, async (req, res) => {
    try {
        const test = await Recipes.findRecipeById(req.params.id)
        if(!test){
            res.status(404).json({
                message: "The ID could not be found"
            })
        } else {
            res.status(200).json(test)
        }
    } catch (error) {
        console.log({error})
        res.status(500).json({
            message: "There was a server error"
        })
    }
})

// ADD a recipe - Working
router.post('/', restricted, async (req, res) => {
    const recipe = req.body;
    try {
        if(!recipe){
            res.status(400).json({
                message: "Bad request. Make sure all information is submitted"
            })
        } else {
            const test = await Recipes.addRecipe(recipe)
            res.status(201).json({test, message: "succesful add"})
        } 
        
    } catch (error) {
        res.status(500).json({
            message: "There was a server error"
        })
    }
})

// UPDATE a recipe
router.put('/:id', restricted, async (req, res) => {
    try {
        const id = req.params.id;
        const content = req.body;

        if(!id){
            res.status(400).json({
                message: "Bad request."
            })
        } else {
            const test = await Recipes.updateRecipe(content, id)
            res.status(200).json(test)
        }
    } catch (error) {
        res.status(500).json({
            message: "There was a server error"
        })
    }
})

// DELETE a recipe
router.delete('/:id', restricted, async (req, res) => {
    try {
        const id = req.params.id;
        const test = await Recipes.deleteRecipe(id)
        res.status(200).json(test)
    } catch (error) {
        res.status(500).json({
            message: "There was a server error"
        })
    }
})



module.exports = router;

/* POST content
{
    "title": "cheese sticks",
    "source": "Uncle Bob",
    "ingredients": "cheese",
    "instructions": "unwrap and eat",
    "category": "snack",
    "user_id": "1"
}

NOTE: all restricted gets/posts/puts/updates need to have the token 
passed with them.  On the client side, tokens will need to be brought in
and put in local storage. 
*/

/* UPDATE cntent
{
    "title": "french toast",
    "source": "Mrs. Franzy",
    "ingredients": "toast, eggs, and milk",
    "instructions": "cook them up",
    "category": "breakfast"
}
*/