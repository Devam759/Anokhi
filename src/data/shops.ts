export interface ShopHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface ShopCoordinates {
  lat: number;
  lng: number;
}

export interface Shop {
  id: string;
  name: string;
  location: string;
  address: string;
  coordinates: ShopCoordinates;
  hours: ShopHours;
  phone: string;
  description: string;
  storeName?: string;
  area?: string;
}

export const shopsData: Shop[] = [
  {
    "id": "ahmedabad",
    "name": "ANOKHI Ahmedabad",
    "location": "Ahmedabad, Gujarat",
    "address": "Near Amaltas Bungalows, Sargam Marg, Vastrapur, Ahmedabad – 380054",
    "coordinates": {
      "lat": 23.0225,
      "lng": 72.5714
    },
    "hours": {
      "monday": "10:30 AM - 7:30 PM",
      "tuesday": "10:30 AM - 7:30 PM",
      "wednesday": "10:30 AM - 7:30 PM",
      "thursday": "10:30 AM - 7:30 PM",
      "friday": "10:30 AM - 7:30 PM",
      "saturday": "10:30 AM - 7:30 PM",
      "sunday": "Closed"
    },
    "phone": "079 26841922",
    "description": "ANOKHI Ahmedabad is located in the stand-alone concept store OPTIONS in the bustling Vastrapur area. The smart terracotta walls open to a secluded garden of frangipani flowers and modern stepping-stones which take you to the Anokhi shop on the ground floor.",
    "storeName": "Options",
    "area": "Vastrapur"
  },
  {
    "id": "bengaluru",
    "name": "ANOKHI Bengaluru",
    "location": "Bengaluru, Karnataka",
    "address": "Bengaluru, Karnataka, India",
    "coordinates": {
      "lat": 12.9716,
      "lng": 77.5946
    },
    "hours": {
      "monday": "10:00 AM - 7:00 PM",
      "tuesday": "10:00 AM - 7:00 PM",
      "wednesday": "10:00 AM - 7:00 PM",
      "thursday": "10:00 AM - 7:00 PM",
      "friday": "10:00 AM - 7:00 PM",
      "saturday": "10:00 AM - 7:00 PM",
      "sunday": "10:00 AM - 7:00 PM"
    },
    "phone": "+91-80-XXXX-XXXX",
    "description": "Discover our traditional craftsmanship in India's Silicon Valley, Bengaluru."
  },
  {
    "id": "chandigarh",
    "name": "ANOKHI Chandigarh",
    "location": "Chandigarh",
    "address": "Chandigarh, India",
    "coordinates": {
      "lat": 30.7333,
      "lng": 76.7794
    },
    "hours": {
      "monday": "10:00 AM - 7:00 PM",
      "tuesday": "10:00 AM - 7:00 PM",
      "wednesday": "10:00 AM - 7:00 PM",
      "thursday": "10:00 AM - 7:00 PM",
      "friday": "10:00 AM - 7:00 PM",
      "saturday": "10:00 AM - 7:00 PM",
      "sunday": "10:00 AM - 7:00 PM"
    },
    "phone": "+91-172-XXXX-XXXX",
    "description": "Visit our store in the beautiful planned city of Chandigarh."
  },
  {
    "id": "chennai",
    "name": "ANOKHI Chennai",
    "location": "Chennai, Tamil Nadu",
    "address": "Chennai, Tamil Nadu, India",
    "coordinates": {
      "lat": 13.0827,
      "lng": 80.2707
    },
    "hours": {
      "monday": "10:00 AM - 7:00 PM",
      "tuesday": "10:00 AM - 7:00 PM",
      "wednesday": "10:00 AM - 7:00 PM",
      "thursday": "10:00 AM - 7:00 PM",
      "friday": "10:00 AM - 7:00 PM",
      "saturday": "10:00 AM - 7:00 PM",
      "sunday": "10:00 AM - 7:00 PM"
    },
    "phone": "+91-44-XXXX-XXXX",
    "description": "Explore our heritage collections in the cultural capital of South India."
  },
  {
    "id": "coimbatore",
    "name": "ANOKHI Coimbatore",
    "location": "Coimbatore, Tamil Nadu",
    "address": "Coimbatore, Tamil Nadu, India",
    "coordinates": {
      "lat": 11.0168,
      "lng": 76.9558
    },
    "hours": {
      "monday": "10:00 AM - 7:00 PM",
      "tuesday": "10:00 AM - 7:00 PM",
      "wednesday": "10:00 AM - 7:00 PM",
      "thursday": "10:00 AM - 7:00 PM",
      "friday": "10:00 AM - 7:00 PM",
      "saturday": "10:00 AM - 7:00 PM",
      "sunday": "10:00 AM - 7:00 PM"
    },
    "phone": "+91-422-XXXX-XXXX",
    "description": "Experience traditional craftsmanship in the textile hub of Coimbatore."
  },
  {
    "id": "delhi",
    "name": "ANOKHI Delhi",
    "location": "Delhi",
    "address": "Delhi, India",
    "coordinates": {
      "lat": 28.7041,
      "lng": 77.1025
    },
    "hours": {
      "monday": "10:00 AM - 7:00 PM",
      "tuesday": "10:00 AM - 7:00 PM",
      "wednesday": "10:00 AM - 7:00 PM",
      "thursday": "10:00 AM - 7:00 PM",
      "friday": "10:00 AM - 7:00 PM",
      "saturday": "10:00 AM - 7:00 PM",
      "sunday": "10:00 AM - 7:00 PM"
    },
    "phone": "+91-11-XXXX-XXXX",
    "description": "Visit our flagship store in the heart of India's capital city."
  },
  {
    "id": "gurgaon",
    "name": "ANOKHI Gurgaon",
    "location": "Gurgaon, Haryana",
    "address": "Gurgaon, Haryana, India",
    "coordinates": {
      "lat": 28.4595,
      "lng": 77.0266
    },
    "hours": {
      "monday": "10:00 AM - 7:00 PM",
      "tuesday": "10:00 AM - 7:00 PM",
      "wednesday": "10:00 AM - 7:00 PM",
      "thursday": "10:00 AM - 7:00 PM",
      "friday": "10:00 AM - 7:00 PM",
      "saturday": "10:00 AM - 7:00 PM",
      "sunday": "10:00 AM - 7:00 PM"
    },
    "phone": "+91-124-XXXX-XXXX",
    "description": "Discover our collections in the bustling corporate hub of Gurgaon."
  },
  {
    "id": "hyderabad",
    "name": "ANOKHI Hyderabad",
    "location": "Hyderabad, Telangana",
    "address": "Hyderabad, Telangana, India",
    "coordinates": {
      "lat": 17.3850,
      "lng": 78.4867
    },
    "hours": {
      "monday": "10:00 AM - 7:00 PM",
      "tuesday": "10:00 AM - 7:00 PM",
      "wednesday": "10:00 AM - 7:00 PM",
      "thursday": "10:00 AM - 7:00 PM",
      "friday": "10:00 AM - 7:00 PM",
      "saturday": "10:00 AM - 7:00 PM",
      "sunday": "10:00 AM - 7:00 PM"
    },
    "phone": "+91-40-XXXX-XXXX",
    "description": "Experience our heritage in the City of Pearls, Hyderabad."
  },
  {
    "id": "jaipur-farm",
    "name": "ANOKHI Jaipur",
    "location": "Jaipur, Rajasthan",
    "address": "Anokhi Farm, Todi Ramzanipura, Jagatpura, Jaipur 302017, INDIA",
    "coordinates": {
      "lat": 26.9854,
      "lng": 75.8513
    },
    "hours": {
      "monday": "10:00 AM - 6:00 PM",
      "tuesday": "10:00 AM - 6:00 PM",
      "wednesday": "10:00 AM - 6:00 PM",
      "thursday": "10:00 AM - 6:00 PM",
      "friday": "10:00 AM - 6:00 PM",
      "saturday": "10:00 AM - 6:00 PM",
      "sunday": "10:00 AM - 6:00 PM"
    },
    "phone": "+91-141-4225100",
    "description": "Our flagship location at Anokhi Farm, featuring the complete collection of handcrafted textiles and the renowned design studio in our spacious, verdant workplace."
  },
  {
    "id": "jodhpur",
    "name": "ANOKHI Jodhpur",
    "location": "Jodhpur, Rajasthan",
    "address": "Jodhpur, Rajasthan, India",
    "coordinates": {
      "lat": 26.2389,
      "lng": 73.0243
    },
    "hours": {
      "monday": "10:00 AM - 7:00 PM",
      "tuesday": "10:00 AM - 7:00 PM",
      "wednesday": "10:00 AM - 7:00 PM",
      "thursday": "10:00 AM - 7:00 PM",
      "friday": "10:00 AM - 7:00 PM",
      "saturday": "10:00 AM - 7:00 PM",
      "sunday": "10:00 AM - 7:00 PM"
    },
    "phone": "+91-291-XXXX-XXXX",
    "description": "Visit our store in the Blue City of Jodhpur, Rajasthan."
  },
  {
    "id": "kochi",
    "name": "ANOKHI Kochi",
    "location": "Kochi, Kerala",
    "address": "Kochi, Kerala, India",
    "coordinates": {
      "lat": 9.9312,
      "lng": 76.2673
    },
    "hours": {
      "monday": "10:00 AM - 7:00 PM",
      "tuesday": "10:00 AM - 7:00 PM",
      "wednesday": "10:00 AM - 7:00 PM",
      "thursday": "10:00 AM - 7:00 PM",
      "friday": "10:00 AM - 7:00 PM",
      "saturday": "10:00 AM - 7:00 PM",
      "sunday": "10:00 AM - 7:00 PM"
    },
    "phone": "+91-484-XXXX-XXXX",
    "description": "Discover our collections in the beautiful coastal city of Kochi."
  },
  {
    "id": "kolkata",
    "name": "ANOKHI Kolkata",
    "location": "Kolkata, West Bengal",
    "address": "Kolkata, West Bengal, India",
    "coordinates": {
      "lat": 22.5726,
      "lng": 88.3639
    },
    "hours": {
      "monday": "10:00 AM - 7:00 PM",
      "tuesday": "10:00 AM - 7:00 PM",
      "wednesday": "10:00 AM - 7:00 PM",
      "thursday": "10:00 AM - 7:00 PM",
      "friday": "10:00 AM - 7:00 PM",
      "saturday": "10:00 AM - 7:00 PM",
      "sunday": "10:00 AM - 7:00 PM"
    },
    "phone": "+91-33-XXXX-XXXX",
    "description": "Experience our heritage in the cultural capital of India, Kolkata."
  },
  {
    "id": "lucknow",
    "name": "ANOKHI Lucknow",
    "location": "Lucknow, Uttar Pradesh",
    "address": "Lucknow, Uttar Pradesh, India",
    "coordinates": {
      "lat": 26.8467,
      "lng": 80.9462
    },
    "hours": {
      "monday": "10:00 AM - 7:00 PM",
      "tuesday": "10:00 AM - 7:00 PM",
      "wednesday": "10:00 AM - 7:00 PM",
      "thursday": "10:00 AM - 7:00 PM",
      "friday": "10:00 AM - 7:00 PM",
      "saturday": "10:00 AM - 7:00 PM",
      "sunday": "10:00 AM - 7:00 PM"
    },
    "phone": "+91-522-XXXX-XXXX",
    "description": "Visit our store in the City of Nawabs, Lucknow."
  },
  {
    "id": "mumbai",
    "name": "ANOKHI Mumbai",
    "location": "Mumbai, Maharashtra",
    "address": "Mumbai, Maharashtra, India",
    "coordinates": {
      "lat": 19.0760,
      "lng": 72.8777
    },
    "hours": {
      "monday": "10:00 AM - 7:00 PM",
      "tuesday": "10:00 AM - 7:00 PM",
      "wednesday": "10:00 AM - 7:00 PM",
      "thursday": "10:00 AM - 7:00 PM",
      "friday": "10:00 AM - 7:00 PM",
      "saturday": "10:00 AM - 7:00 PM",
      "sunday": "10:00 AM - 7:00 PM"
    },
    "phone": "+91-22-XXXX-XXXX",
    "description": "Explore our collections in the financial capital of India, Mumbai."
  },
  {
    "id": "noida",
    "name": "ANOKHI Noida",
    "location": "Noida, Uttar Pradesh",
    "address": "Noida, Uttar Pradesh, India",
    "coordinates": {
      "lat": 28.5355,
      "lng": 77.3910
    },
    "hours": {
      "monday": "10:00 AM - 7:00 PM",
      "tuesday": "10:00 AM - 7:00 PM",
      "wednesday": "10:00 AM - 7:00 PM",
      "thursday": "10:00 AM - 7:00 PM",
      "friday": "10:00 AM - 7:00 PM",
      "saturday": "10:00 AM - 7:00 PM",
      "sunday": "10:00 AM - 7:00 PM"
    },
    "phone": "+91-120-XXXX-XXXX",
    "description": "Discover our heritage collections in the planned city of Noida."
  },
  {
    "id": "puducherry",
    "name": "ANOKHI Puducherry",
    "location": "Puducherry",
    "address": "Puducherry, India",
    "coordinates": {
      "lat": 11.9416,
      "lng": 79.8083
    },
    "hours": {
      "monday": "10:00 AM - 7:00 PM",
      "tuesday": "10:00 AM - 7:00 PM",
      "wednesday": "10:00 AM - 7:00 PM",
      "thursday": "10:00 AM - 7:00 PM",
      "friday": "10:00 AM - 7:00 PM",
      "saturday": "10:00 AM - 7:00 PM",
      "sunday": "10:00 AM - 7:00 PM"
    },
    "phone": "+91-413-XXXX-XXXX",
    "description": "Experience our traditional craftsmanship in the charming French colonial city of Puducherry."
  },
  {
    "id": "pune",
    "name": "ANOKHI Pune",
    "location": "Pune, Maharashtra",
    "address": "Pune, Maharashtra, India",
    "coordinates": {
      "lat": 18.5204,
      "lng": 73.8567
    },
    "hours": {
      "monday": "10:00 AM - 7:00 PM",
      "tuesday": "10:00 AM - 7:00 PM",
      "wednesday": "10:00 AM - 7:00 PM",
      "thursday": "10:00 AM - 7:00 PM",
      "friday": "10:00 AM - 7:00 PM",
      "saturday": "10:00 AM - 7:00 PM",
      "sunday": "10:00 AM - 7:00 PM"
    },
    "phone": "+91-20-XXXX-XXXX",
    "description": "Visit our store in the cultural capital of Maharashtra, Pune."
  }
];
