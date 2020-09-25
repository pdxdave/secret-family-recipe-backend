# secret-family-recipe-backend
Here is the back-end code for a Lambda build-week project called Secret Family Recipes.  This was a project I did on the side. 

### The official project pitch:    
Anyone can go out and buy a cookbook these days, but I want a place to store all my secret family recipes, handed down from generation to generation. The little cards my grandma wrote the recipes on in her beautiful cursive are getting lost or are hard to read. I need somewhere secure to keep my recipes with me at all times!

Users can register to create an account.  They can then create a recipe card that will provide the following information: title, recipe source, ingredients, instructions, and category.  Users have CRUD control over their own recipes, and recipes are protected from other users from changing or deleting them.

Technologies   

- NodeJs
- Express

DB
- SQLite 
- knexjs

Testing    
- Jest
- Supertest




### Tables

Users
|id|username|password|
|:--:|:--:|:--:|
|1|bigdog|asdh978uoasdf0|
|2| bigkitty| 09909sdflaf|

Recipes
|id|user_id|title|source|ingredients|instructions|category|private|
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
|1|1|popcorn|Uncle Fred|Popcord|Put in microwave|snack|true|
|2|1|PBJ|Aunt Ellen|bread, jam, peanut butter|do I really need to say?|lunch|true|
|3|2|beef jerky|Cousin Alice|beef|dry the meat|snack|true|



### Endpoints

| Method | Endpoint | Description |
| --------------- | --------------- | --------------- |
| GET | /api/recipes | Gets all recipes |
| GET | /api/recipes/:id | Get recipe by id |
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | User login |
| POST| /api/recipes | Post a new recipe |
| PUT| /api/recipes/:id | Update a recipe |
| DELETE| /api/recipes/:id | Delete a recipe |