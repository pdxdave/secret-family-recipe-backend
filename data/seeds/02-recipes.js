exports.seed = function (knex) {
  return knex("recipes").insert([
    {
      user_id: 1,
      title: "Bacon, lettuce and tomatoe",
      source: "Sally",
      ingredients:
        "some ingredients",
      instructions:
        "A bunch of directions ",
      category: "Sandwich.",
    },
    {
      user_id: 2,
      title: "Chocolate chip cookie",
      source: "David",
      ingredients:
        "All the stuff that's bad for you",
      instructions:
        "Cook 'em and eat 'em.",
      category: "Dessert",
    },
  ]);
};