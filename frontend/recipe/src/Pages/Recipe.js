import React from 'react';

// Sample data for recipes
const recipes = [
  {
    title: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0346a29a89ef229b1a0ff9697184f944/Derivates/cb5051204f4a4525c8b013c16418ae2904e737b7.jpg',
  },
  {
    title: 'Chicken Tikka Masala',
    description: 'A flavorful Indian curry made with marinated chicken and a creamy tomato sauce.',
    image: 'https://www.effortlessfoodie.com/wp-content/uploads/2022/05/chicken-tikka-masala-4.jpg',
  },
  {
    title: 'Vegetable Stir Fry',
    description: 'A quick and healthy stir fry with mixed vegetables and a savory sauce.',
    image:'https://natashaskitchen.com/wp-content/uploads/2020/08/Vegetable-Stir-Fry-2.jpg',
  },
  {
    title: 'Classic Cheeseburger',
    description: 'A juicy beef burger topped with melted cheese, lettuce, tomato, and pickles.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzqnG45BC5ASuNzAzwnNWzZ9Vw_VJqYLjdA&s',
  },
   {
    title: 'Greek Salad',
    description: 'A refreshing salad with tomatoes, cucumbers, olives, feta cheese, and a lemon-oregano dressing.',
    image: 'https://www.aheadofthyme.com/wp-content/uploads/2016/03/the-perfect-greek-salad-7.jpg',
  },
  {
    title: 'Margherita Pizza',
    description: 'A simple yet delicious pizza with tomato sauce, fresh mozzarella, and basil leaves.',
    image: 'https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067',
  },
  {
    title: 'Chicken Alfredo',
    description: 'Creamy Alfredo sauce served over tender chicken and fettuccine pasta.',
    image: 'https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-3.jpg',
  },
  {
    title: 'Beef Stroganoff',
    description: 'Tender strips of beef cooked in a rich and creamy mushroom sauce, served over noodles or rice.',
    image: 'https://www.kitchensanctuary.com/wp-content/uploads/2020/01/Beef-Stroganoff-square-FS-46-500x500.jpg',
  },
];

const Recipe = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Recipes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
