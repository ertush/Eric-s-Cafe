import tailwind from 'tailwind-rn'
import images from './images'
import util from '../utils'

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

  const favouritesData = [
    {
      id: 1,
      title:"Pasta House",
      price: 7.87,
      image: images.food5
    },
    {
      id: 2,
      title:"Eric's Cafe",
      price: 8.90,
      image: images.food4
    },
    {
      id: 3,
      title:"Sochi Cafe",
      price: 9.99,
      image: images.food3
    },
    {
      id: 4,
      title:"Vasachi Inn",
      price: 6.43,
      image: images.food2
    },
    {
      id: 5,
      title:"Martinez hotel",
      price: 5.90,
      image: images.food1
    }
  ]


  const onBoardingData = [
    {
      title: 'Fast delivery, perfect service',
      subTitle: 'Get the best service in the country, we deliver really fast',
    
    },
    {
      title: 'Instant delivery to your home',
      subTitle: 'Our employees handle their work quick and efficiently',

    },
    {
      title: 'We are waiting for your feed back',
      subTitle: 'Which we will take into account for the next order',
    }
  
  ]

  const customMapStyles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]
  
 const markerMapData = [
   {
     coordinates: { latitude: -1.2922668 , longitude: 36.8051594 }
   },
   {
    coordinates: { latitude: -1.289765 , longitude: 36.810258 }
    }
 ]

//  latitude: -1.2945989,
//  longitude: 36.8060376,
 const initialCoordinates = util.getDelta(-1.2945989, 36.8072403, 1000)
 

  export default {dummyData, onBoardingData, customMapStyles, markerMapData, initialCoordinates, favouritesData}