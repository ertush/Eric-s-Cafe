import tailwind from 'tailwind-rn'
import images from './images'

const dummyData = navigation => [
    {
      id: 1,
      image: images.food,
      title: "Soloi Salad",
      price: 7.90,
      quantity: 1,
      calories: 55,
      navigation,
      description: `Enjoy freshly roasted fish and leafy vegies on the side`,
      ingredients:`Leafy Vegies, Roasted Fish, Red Tomatoe, garlic, olive oil, Served with red wine`,
      imageStyle:tailwind('w-24 h-24')
    },
    {
      id: 2,
      image: images.pasta,
      title: "Pasta Bolongesse",
      price: 2.50,
      quantity: 1,
      calories: 50,
      navigation,
      description: `Enjoy Pasta with fried beef red hot sauce`,
      ingredients:`Chilli, red hot sauce, garlic powder, pasta, Tomatoe sauce, red wine`,
      imageStyle:tailwind('w-20 h-20')
    },
    {
      id: 3,
      image: images.pizza,
      title: "Pepperoni  Pizza",
      price: 5.50,
      quantity: 1,
      calories: 62,
      navigation,
      description: `Enjoy Freshly backed pizza with pinnaple toppings`,
      ingredients:`Cheese, Mayonesse, tomatoe sauce, ketchup ,Onion rings, pinnaple chunks,bacon, beef, corn`,
      imageStyle:tailwind('w-20 h-20')
    },
    {
      id: 4,
      image: images.burger,
      title: "Chicken Burger",
      price: 2.45,
      quantity: 1,
      calories: 45,
      navigation,
      description: `Enjoy a three layered chicken burger with a cold cocacola`,
      ingredients:`Buns, White oninos, Rasted Chicken meat, fresh vegies, Tomatoe, Cheese, Mayonesse, Tomamtoe sauce `,
      imageStyle:tailwind('w-20 h-20')
    },
    {
      id: 5,
      image: images.blackCoffee,
      title: "Black Coffee",
      price: 3.45,
      quantity: 1,
      calories: 12,
      navigation,
      description: `Enjoy a hot beverage of finely roasted coffee beans `,
      ingredients:`Freshly roasted coffebeans, sugar, milk cream, milk, hot water `,
      imageStyle:tailwind('w-24 h-24')
    }
  ]

 

  export default {dummyData}