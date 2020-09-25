# secret-family-recipe-backend
Coded up the backend for a build-week project.  

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



Endpoints

| Method | Endpoint | Description |
| --------------- | --------------- | --------------- |
| GET | /api/recipes | Gets all recipes |
| GET | /api/recipes/:id | Get recipe by id |
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | User login |
| POST| /api/recipes | Post a new recipe |
| PUT| /api/recipes/:id | Update a recipe |
| DELETE| /api/recipes/:id | Delete a recipe |