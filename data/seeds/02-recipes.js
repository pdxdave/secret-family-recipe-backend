exports.seed = function (knex) {
  return knex("recipes").insert([
    {
      user_id: 1,
      title: "Crack Chicken",
      source: "Secret Family Recipes Admin",
      ingredients:
        [
          "1/2 cup(s) low-sodium chicken broth",
          "1 tbsp(s) ranch seasoning mix",
          "4 boneless, skinless chicken breasts",
          "8 oz(s) cream cheese",
          "2 cup(s) shredded cheddar cheese",
          "6 slice(s) crispy, chopped bacon",
        ],
      instructions:
        [
          "Pour chicken broth into slow cooker, mix in ranch seasoning",
          "Add chicken to slow cooker, stir around to coat with mixture",
          "Cover with lid and set LOW for 5 hours or HIGH for 2-3 hours",
          "When done, remove lid and shred chicken inside slow cooker with two forks (or shredder claws, those things are fabulous)",
          "Stir in cream cheese and 1 1/2 cups cheddar cheese until completely melted and combined",
          "Top with remaining cheddar cheese, then cover until completely melted",
          "Top with bacon and enjoy!"
        ],
      category: "Entree",
      subcategories:
      [
        "Slow Cooker",
        "Keto",
        "Low Carb"
      ],
      private: "false",
    },
    {
      user_id: 1,
      title: "Mexican Shredded Beef",
      source: "Secret Family Recipes Admin",
      ingredients:
        [
          "3 lb(s) beef chuck roast",
          "1 diced onion",
          "4 minced garlic cloves",
          "2 tbsp(s) tomato paste",
          "1-2 tbsp(s) lime juice",
          "1 tbsp(s) chili powder",
          "1 tsp(s) cumin",
          "1 tsp(s) chili paprika",
          "1 tsp(s) dried oregano",
          "1 tsp(s) kosher salt, plus more to taste",
          "1/4 tsp(s) red chili flakes",
        ],
      instructions:
        [
          "Mix chile powder, cumin, paprika, salt, oregano, and red chili flakes in a bowl, set aside",
          "Add onion, garlic, tomato paste, lime juice and only 1-2tsp of spice mixture to slow cooker, stir until fully mixed",
          "Sprinkle remaining spiced over chick roast, pat in to help them stick",
          "Place meat on top of mixture in slow cooker and set LOW for 7-8 hours",
          "Once meat has cooked, shred meat with two forks inside slow cooker, removing any large pieced of gristle or fat as you find them (if meat is too tough to shred, cook for another 30-60 minutes and try again)",
          "Stir shredded meat to mix well with sauce, cover and cook for an additional 30-60 minutes on LOW",
          "Before serving, stir well to mix meat with sauce, also taste and add more salt, if necessary",
        ],
      category: "Entree",
      subcategories:
      [
        "Slow Cooker",
        "Keto",
        "Low Carb"
      ],
      private: "false",
    },
  ]);
};