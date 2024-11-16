const sampleListings=[
    {
      title: "Cozy Urban Studio",
      description: "A small but charming studio apartment in the heart of the city. Perfect for solo travelers or couples.",
      image:"https://images.unsplash.com/photo-1711470623168-885d5b054e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 85,
      location: "Downtown",
      country: "USA"
    },
    {
      title: "Beachfront Villa",
      description: "Luxury villa with stunning ocean views, private pool, and direct beach access. Ideal for a family getaway.",
      image:"https://images.unsplash.com/photo-1464703278390-df5b3f1f61b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 350,
      location: "Malibu",
      country: "USA"
    },
    {
      title: "Charming Countryside Cottage",
      description: "A quaint cottage surrounded by nature, offering a peaceful retreat away from the city.",
      image:"https://images.unsplash.com/photo-1640795360818-0cecedb59a67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 120,
      location: "Greenfield",
      country: "UK"
    },
    {
      title: "Modern Loft in Trendy Neighborhood",
      description: "Spacious loft with modern amenities, located in a vibrant and artistic part of the city.",
      image:"https://images.unsplash.com/photo-1640795361873-58ebe8bba3e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 150,
      location: "Soho",
      country: "UK"
    },
    {
      title: "Traditional Japanese Ryokan",
      description: "Experience authentic Japanese hospitality in this traditional ryokan with tatami mats and a private hot spring.",
      image:"https://images.unsplash.com/photo-1657302157898-eda546941dde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 200,
      location: "Kyoto",
      country: "Japan"
    },
    {
      title: "Ski-in/Ski-out Mountain Lodge",
      description: "Conveniently located lodge with direct access to ski slopes, great for winter sports enthusiasts.",
      image:"https://images.unsplash.com/photo-1605538032404-d7f061325b90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 250,
      location: "Aspen",
      country: "USA"
    },
    {
      title: "Historic Parisian Apartment",
      description: "Elegant apartment in a historic building with classic Parisian charm, located near major landmarks.",
      image:"https://images.unsplash.com/photo-1590172815327-22cbf36dd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 300,
      location: "Le Marais",
      country: "France"
    },
    {
      title: "Eco-Friendly Treehouse",
      description: "Unique treehouse stay with sustainable features, offering a fun and environmentally-conscious experience.",
      image:"https://images.unsplash.com/photo-1603995394003-43f7cc80525f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 180,
      location: "Santa Cruz",
      country: "USA"
    },
    {
    title: "Luxury Penthouse with City" ,
    description: "Opulent penthouse with panoramic views of the city skyline and top-notch amenities.",
    image:"https://images.unsplash.com/photo-1696438553076-6be04c8120a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 500,
    location: "New York City",
    country: "USA"
  },
  {
    title: "Rustic Farmhouse Retreat",
    description: "A beautifully restored farmhouse with modern comforts, perfect for a relaxing stay in the countryside.",
    image:"https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 160,
    location: "Napa Valley",
    country: "USA"
  },
  {
    title: "Chic Loft in Berlin",
    description: "Stylish loft apartment in the heart of Berlin, close to nightlife and cultural attractions.",
    image:"https://images.unsplash.com/photo-1711111038439-5b1953919864?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 140,
    location: "Mitte",
    country: "Germany"
  },
  {
    title: "Seaside Cottage in Bali",
    description: "Charming seaside cottage with a private garden and access to a quiet beach.",
    image:"https://images.unsplash.com/photo-1603995393909-9af9bb3e7617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 110,
    location: "Seminyak",
    country: "Indonesia"
  },
  {
    title: "Historic Castle Stay",
    description: "Stay in a beautifully restored medieval castle with modern amenities and breathtaking views.",
    image:"https://images.unsplash.com/photo-1657302156653-a08a4681f449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 400,
    location: "Edinburgh",
    country: "UK"
  },
  {
    title: "Sunny Studio in Barcelona",
    description: "Bright and airy studio with a terrace, located in a lively neighborhood close to the beach.",
    image:"https://images.unsplash.com/photo-1722934134586-f5478dcf173b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 130,
    location: "Barceloneta",
    country: "Spain"
  },
  {
    title: "Mountain Cabin with Hot Tub",
    description: "Cozy cabin with a private hot tub and stunning mountain views, perfect for a romantic getaway.",
    image:"https://images.unsplash.com/photo-1713892105009-1628c02c4050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 220,
    location: "Lake Tahoe",
    country: "USA"
  },
  {
    title: "Art Deco Apartment in Miami",
    description: "Stylish Art Deco apartment with ocean views, located in the vibrant South Beach area.",
    image:"https://images.unsplash.com/photo-1711111038475-0dc445eeb97e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 250,
    location: "South Beach",
    country: "USA"
  },
  {
    title: "Historic Rome Loft",
    description: "Charming loft in a historic building, walking distance to famous Roman landmarks.",
    image:"https://images.unsplash.com/photo-1671798747357-aa4364af0b72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 220,
    location: "Trastevere",
    country: "Italy"
  },
  {
    title: "Scenic Vineyard Retreat",
    description: "Elegant retreat in the heart of a vineyard, with private wine tastings and beautiful countryside views.",
    image:"https://images.unsplash.com/photo-1657349231094-52e63dd6cc45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 300,
    location: "Sonoma",
    country: "USA"
  },
  {
    title: "Sleek Tokyo Apartment",
    description: "Modern apartment in the bustling Shibuya district, offering cutting-edge amenities and city views.",
    image:"https://images.unsplash.com/photo-1627615736389-00f64b184b26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 270,
    location: "Shibuya",
    country: "Japan"
  },
  {
    title: "Rustic Cabin in the Smoky Mountains",
    description: "Cozy, rustic cabin with a fireplace and stunning views of the Smoky Mountains.",
    image:"https://images.unsplash.com/photo-1711111038517-f5d61fe63008?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 180,
    location: "Gatlinburg",
    country: "USA"
  },
  {
    title: "Chic Loft in Amsterdam",
    description: "Stylish loft with contemporary design, located in a central area close to canals and museums.",
    image:"https://images.unsplash.com/photo-1724947052687-e580b3010aad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 160,
    location: "Jordaan",
    country: "Netherlands"
  },
  {
    title: "Elegant London Townhouse",
    description: "Spacious townhouse with classic British decor, located in a charming neighborhood with easy access to central London.",
    image:"https://images.unsplash.com/photo-1628870970360-aa3afb4c562d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 320,
    location: "Chelsea",
    country: "UK"
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Private beach house surrounded by lush rainforest, perfect for a tranquil getaway.",
    image:"https://images.unsplash.com/photo-1628870571205-7e781523bfbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 250,
    location: "Manuel Antonio",
    country: "Costa Rica"
  },
  {
    title: "Contemporary Sydney Apartment",
    description: "Modern apartment with stunning harbor views and easy access to Sydney’s attractions.",
    image:"https://images.unsplash.com/photo-1724947053227-2335bf21d0ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 280,
    location: "Circular Quay",
    country: "Australia"
  },
  {
    title: "Mountain Retreat in Switzerland",
    description: "Luxurious chalet with breathtaking Alpine views, ideal for skiing and hiking enthusiasts.",
    image:"https://images.unsplash.com/photo-1647845584352-a18e43919355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 450,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Sunset View Villa in Santorini",
    description: "Stunning villa with panoramic views of the Aegean Sea and famous Santorini sunsets. Private pool and terrace.",
    image:"https://images.unsplash.com/photo-1517014609359-827cb2ded0b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 400,
    location: "Oia",
    country: "Greece"
  },
  {
    title: "Historic Charleston Mansion",
    description: "Elegant mansion with classic Southern charm, located in historic downtown Charleston.",
    image:"https://images.unsplash.com/photo-1605538108528-8b9be1168ad8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 350,
    location: "Downtown",
    country: "USA"
  },
  {
    title: "Boutique Hotel in Marrakech",
    description: "Charming boutique hotel with Moroccan decor and a beautiful courtyard, located in the heart of the Medina.",
    image:"https://images.unsplash.com/photo-1605553583851-e2d5df7f28ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 190,
    location: "Medina",
    country: "Morocco"
  },
  {
    title: "Modern Penthouse in Toronto",
    description: "Luxurious penthouse with floor-to-ceiling windows, offering stunning city views and top-of-the-line amenities.",
    image:"https://images.unsplash.com/photo-1712574030534-c6724847acc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 300,
    location: "Downtown",
    country: "Canada"
  },
  {
    title: "Secluded Cabin in Norway",
    description: "Rustic cabin surrounded by pristine nature, ideal for experiencing the Northern Lights and outdoor adventures.",
    image:"https://images.unsplash.com/photo-1584006217404-718bb93a2e89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 220,
    location: "Tromsø",
    country: "Norway"
  },
  {
    title: "Trendy Loft in Buenos Aires",
    description: "Stylish loft with modern decor, located in a vibrant neighborhood with cafes, shops, and nightlife.",
    image:"https://images.unsplash.com/photo-1605538032554-0bbca27068f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 140,
    location: "Palermo",
    country: "Argentina"
  },
  {
    title: "Oceanfront Bungalow in Fiji",
    description: "Exotic bungalow with direct beach access, surrounded by crystal-clear waters and lush tropical gardens.",
    image:"https://images.unsplash.com/photo-1647845584809-b802341d0f17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVscyUyMGFuZCUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 350,
    location: "Denarau Island",
    country: "Fiji"
  },
  {
    title: "Luxury Apartment in Dubai",
    description: "High-end apartment in a skyscraper with breathtaking views of the Burj Khalifa and access to premium amenities.",
    image:"https://images.unsplash.com/photo-1659962911114-5fcd2259aa67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzJTIwYW5kJTIwdmlsbGFzfGVufDB8fDB8fHww",
    price: 400,
    location: "Downtown",
    country: "UAE"
  },
  {
    title: "Charming Cottage in Quebec",
    description: "Cozy cottage with rustic charm, located in a picturesque village near Quebec City.",
    image:"https://images.unsplash.com/photo-1628870776167-b4b684441e10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzJTIwYW5kJTIwdmlsbGFzfGVufDB8fDB8fHww",
    price: 150,
    location: "Mont-Tremblant",
    country: "Canada"
  },
  {
    title: "Spacious Villa in Bali",
    description: "Luxury villa with an infinity pool and lush gardens, situated in a serene part of Bali.",
    image:"https://images.unsplash.com/photo-1722545562652-b152c12e0585?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzJTIwYW5kJTIwdmlsbGFzfGVufDB8fDB8fHww",
    price: 280,
    location: "Ubud",
    country: "Indonesia"
  }
]
  
module.exports={data:sampleListings};
