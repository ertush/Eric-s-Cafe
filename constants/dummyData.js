import images from './images'

const dummyData = [
    {
      id: 1,
      image: images.food,
      title: "Soloi Salad",
      price: 7.90,
      quantity: 1,
    },
    {
      id: 2,
      image: images.pasta,
      title: "Pasta Bolongesse",
      price: 2.50,
      quantity: 1,
    },
    {
      id: 3,
      image: images.pizza,
      title: "Pepperoni  Pizza",
      price: 9.50,
      quantity: 1,
    },
    {
      id: 4,
      image: images.burger,
      title: "Chicken Burger",
      price: 5.00,
      quantity: 1,
    },
    {
      id: 5,
      image: images.blackCoffee,
      title: "Black Coffee",
      price: 2.50,
      quantity: 1,
    }
  ]

  const menuData = (navigation) =>  [
    { id:1,
      foodName:'Soloi Salad',
      description: `Enjoy freshly roasted fish and leafy vegies on the side`,
      ingredients:`Leafy Vegies, Roasted Fish, Red Tomatoe, garlic, olive oil, Served with red wine`,
      price: 7.90,
      image:images.food,
      navigation
    },
    {  
      id:2,
      foodName:'Pasta Bolongesse',
      description: `Enjoy Pasta with fried beef red hot sauce`,
      ingredients:`Chilli, red hot sauce, garlic powder, pasta, Tomatoe sauce, red wine`,
      price: 2.50,
      image:images.pasta,
      navigation
    },
     {
       id:3,
      foodName:'Pepperoni  Pizza', 
      description: `Enjoy Freshly backed pizza with pinnaple toppings`,
      ingredients:`Cheese, Mayonesse, tomatoe sauce, ketchup ,Onion rings, pinnaple chunks,bacon, beef, corn`,
      price: 5.50,
      image:images.pizza,
      navigation
    },
      {
        id:4,
      foodName:'Chicken Burger',
      description: `Enjoy a three layered chicken burger with a cold cocacola`,
      ingredients:`Buns, White oninos, Rasted Chicken meat, fresh vegies, Tomatoe, Cheese, Mayonesse, Tomamtoe sauce `,
      price: 2.45,
      image:images.burger,
       navigation
    },

     {
       id:5,
      foodName:'Black Coffee',
      description: `Enjoy a hot beverage of finely roasted coffee beans `,
      ingredients:`Freshly roasted coffebeans, sugar, milk cream, milk, hot water `,
      price: 3.45,
      image:images.blackCoffee,
      navigation
    },
    
  ]

  export default {menuData, dummyData}