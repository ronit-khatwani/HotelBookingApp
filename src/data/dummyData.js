export const DUMMY_PLACES = [
  {
    id: '1',
    name: 'Ivory Coast',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=200&h=200&fit=crop',
  },
  {
    id: '2',
    name: 'Senegal',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=200&h=200&fit=crop',
  },
  {
    id: '3',
    name: 'Ville',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=200&h=200&fit=crop',
  },
  {
    id: '4',
    name: 'Lagos',
    image: 'https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=200&h=200&fit=crop',
  },
  {
    id: '5',
    name: 'Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=200&h=200&fit=crop',
  },
];

export const DUMMY_HOTELS = [
  {
    id: '1',
    name: 'Heden golf',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    rating: 3.9,
    reviews: 200,
    price: 127,
    originalPrice: 150,
    discount: '25% OFF',
    description: 'Set in landscaped gardens overlooking the Ébrié lagoon, this upscale hotel featuring contemporary local art and architectural touches is 3 km from Mosquée de la riviéra and 17 km from Banco National Park.',
    location: 'Abidjan, Côte d\'Ivoire',
    phone: '+225 22 48 26 26',
    checkinTime: '12 PM',
    checkoutTime: '11 AM',
    facilities: ['Free Wi-Fi', 'Fitness Center', 'Free Breakfast', 'Kid Friendly', 'Pool', 'Restaurant'],
    amenities: ['Great dining', 'Pet friendly', 'Great rooms', 'Great breakfast', 'Great pool', 'Luxurious vibe'],
    photos: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop',
    ],
    liked: 85,
    coordinate: { latitude: 5.3364, longitude: -4.0266 },
  },
  {
    id: '2',
    name: 'Onomo',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop',
    rating: 4.3,
    reviews: 150,
    price: 120,
    description: 'Adagio City Aparthotel is a joint venture modern apartment hotel in the heart of the city.',
    location: 'Abidjan, Côte d\'Ivoire',
    facilities: ['Free Wi-Fi', 'Fitness Center', 'Restaurant'],
    coordinate: { latitude: 5.3464, longitude: -4.0366 },
  },
  {
    id: '3',
    name: 'Adagio',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
    rating: 4.5,
    reviews: 20,
    price: 100,
    originalPrice: 115,
    discount: '15% OFF',
    description: 'The ONOMO Hotels chain established...',
    location: 'Abidjan, Côte d\'Ivoire',
    facilities: ['Free Wi-Fi', 'Pool', 'Bar'],
    coordinate: { latitude: 5.3264, longitude: -4.0166 },
  },
  {
    id: '4',
    name: 'Sofitel',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop',
    rating: 4.5,
    reviews: 20,
    price: 127,
    originalPrice: 150,
    discount: '25% OFF',
    description: 'This understated hotel is 5 km from both...',
    location: 'Abidjan, Côte d\'Ivoire',
    facilities: ['Free Wi-Fi', 'Fitness Center', 'Pool', 'Spa'],
    coordinate: { latitude: 5.3164, longitude: -4.0066 },
  },
];

export const LOCATION_SUGGESTIONS = [
  {
    id: '1',
    city: 'Abidjan',
    country: "Côte d'Ivoire",
  },
  {
    id: '2',
    city: 'Abids',
    country: 'Hyderabad, Telangana, India',
  },
  {
    id: '3',
    city: 'Abidos Hotel Apartment Dubai Land',
    country: 'Dubai, Dubai Emirate, United Arab Emirates',
  },
  {
    id: '4',
    city: "Hotel Abi d'Oru",
    country: 'Porto Rotondo, Sardinia, Italy',
  },
  {
    id: '5',
    city: 'Abidos Hotel Apartment Al Barsha',
    country: 'Dubai, Dubai Emirate, United Arab Emirates',
  },
];

export const COUNTRY_CODES = [
  { code: '+225', country: 'CI', flag: '🇨🇮' },
  { code: '+1', country: 'US', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+91', country: 'IN', flag: '🇮🇳' },
  { code: '+971', country: 'AE', flag: '🇦🇪' },
  { code: '+33', country: 'FR', flag: '🇫🇷' },
];

export const TAB_ITEMS = [
  { id: 'rooms', label: 'Rooms', icon: 'office-building' },
  { id: 'booking', label: 'Car booking', icon: 'car' },
  { id: 'washing', label: 'Car washing', icon: 'car-wash' },
  { id: 'profile', label: 'My profile', icon: 'account' },
  { id: 'settings', label: 'Settings', icon: 'tune' },
];

export const AMENITIES = [
  { id: '1', name: 'Free Wi-Fi', icon: 'wifi' },
  { id: '2', name: 'Fitness Center', icon: 'dumbbell' },
  { id: '3', name: 'Free Breakfast', icon: 'food' },
  { id: '4', name: 'Kid Friendly', icon: 'baby-carriage' },
  { id: '5', name: 'Free Parking', icon: 'parking' },
  { id: '6', name: 'Pet Friendly', icon: 'paw' },
  { id: '7', name: 'Air Conditioned', icon: 'air-conditioner' },
  { id: '8', name: 'Pool', icon: 'pool' },
  { id: '9', name: 'Bar', icon: 'glass-mug-variant' },
  { id: '10', name: 'Restaurant', icon: 'silverware-fork-knife' },
];

export const REVIEWS = [
  {
    id: '1',
    name: 'Ayoub ELHOURCH',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 4,
    date: '20 mins ago',
    comment: 'Nice hotel and Great food and have nice things to visit around',
  },
  {
    id: '2',
    name: 'Dzigbodi Hosi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    date: '2 days ago',
    comment: 'Can\'t hate this place. Love the place',
  },
  {
    id: '3',
    name: 'Hanna',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 4.5,
    date: '2 days ago',
    comment: 'Good service',
  },
  {
    id: '4',
    name: 'Kate',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    rating: 4.5,
    date: '3 days ago',
    comment: 'Golf is one of the classic hotels in Cote d\'Ivoire. Great service, wonderful pool area situated next to the lagoon. They have also recently renovated most of the amenities. Lovely hotel.',
  },
];

export const FOOD_CATEGORIES = [
  { id: '1', name: 'Breakfast', icon: 'food-croissant' },
  { id: '2', name: 'Burgers', icon: 'hamburger' },
  { id: '3', name: 'Pizza', icon: 'pizza' },
  { id: '4', name: 'Side items', icon: 'food' },
  { id: '5', name: 'Chinese', icon: 'noodles' },
  { id: '6', name: 'Salads', icon: 'food-apple' },
];

export const FOOD_ITEMS = [
  {
    id: '1',
    name: 'Bagels with turkey and bacon',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=200&h=200&fit=crop',
    rating: 3.9,
    reviews: 200,
    price: 10,
    discount: '25% OFF',
    description: 'A poppy seed bagel is spread with a mixture of cream cheese, parsley and pickles. Subsequently, a slice of crisp lettuce is added, with a slice of tomato, two half slices of turkey and two half slices of pastrami. To top it off, this king feast takes only five minutes to complete and contains less than 400 calories.',
    category: 'Breakfast',
  },
  {
    id: '2',
    name: 'gourmet croissant, scrambled eggs..',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=200&h=200&fit=crop',
    rating: 3.9,
    reviews: 200,
    price: 5,
    discount: '25% OFF',
    description: 'neque, amet blandit tincidunt vulputate',
    category: 'Breakfast',
  },
  {
    id: '3',
    name: 'sandwich',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&h=200&fit=crop',
    rating: 3.9,
    reviews: 200,
    price: 5,
    discount: '25% OFF',
    description: 'neque, amet blandit tincidunt vulputate',
    category: 'Breakfast',
  },
  {
    id: '4',
    name: 'crispy mozza burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop',
    rating: 3.9,
    reviews: 200,
    price: 8,
    discount: '25% OFF',
    description: 'neque, amet blandit tincidunt vulputate',
    category: 'Burgers',
  },
];

export const DRIVERS = [
  {
    id: '1',
    name: 'Winston',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 3.9,
    reviews: 200,
    phone: '+225 22 43 15 89',
  },
  {
    id: '2',
    name: 'Marcus',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    rating: 4.2,
    reviews: 150,
    phone: '+225 22 43 15 90',
  },
];

export const CAR_TYPES = [
  { id: '1', name: 'Saloon', value: 'saloon' },
  { id: '2', name: 'SUV', value: 'suv' },
  { id: '3', name: 'Van', value: 'van' },
  { id: '4', name: 'Luxury', value: 'luxury' },
];

export const LANGUAGES = [
  { id: '1', name: 'English', value: 'en' },
  { id: '2', name: 'French', value: 'fr' },
  { id: '3', name: 'Spanish', value: 'es' },
];

export const BOOKING_HISTORY = [
  {
    id: '1',
    pickup: 'Abidjan, Airport',
    dropoff: 'Abidjan, Côte d\'Ivoire',
    date: '23 july 2019',
    price: 30,
    status: 'completed',
  },
  {
    id: '2',
    pickup: 'Abidjan, city centre',
    dropoff: 'Abidjan, Côte d\'Ivoire',
    date: '24 july 2019',
    price: 20,
    status: 'completed',
  },
  {
    id: '3',
    pickup: 'Abidjan, Maquis',
    dropoff: 'Abidjan, Côte d\'Ivoire',
    date: '24 july 2019',
    price: 15,
    status: 'completed',
  },
  {
    id: '4',
    pickup: 'Abidjan, Côte d\'Ivoire',
    dropoff: 'Abidjan, Airport',
    date: '25 july 2019',
    price: 30,
    status: 'cancelled',
  },
];

export const CANCEL_REASONS = [
  { id: '1', reason: 'Cab not require' },
  { id: '2', reason: 'My trip is cancelled' },
  { id: '3', reason: 'Driver delay' },
  { id: '4', reason: 'Price is more' },
  { id: '5', reason: 'ETA is more' },
  { id: '6', reason: 'Other' },
];

export const PAYMENT_METHODS = [
  { id: '1', name: 'MTN Mobile Money', icon: 'mtn', type: 'mobile', cardNumber: '**** 1234', label: 'Mobile Money' },
  { id: '2', name: 'Moov Money', icon: 'moov', type: 'mobile', cardNumber: '**** 5678', label: 'Mobile Money' },
  { id: '3', name: 'VISA', icon: 'visa', type: 'visa', cardNumber: '**** **** **** 3685', label: 'Credit Card' },
  { id: '4', name: 'Mastercard', icon: 'mastercard', type: 'mastercard', cardNumber: '**** **** **** 9012', label: 'Credit Card' },
];

export const USER_PROFILE = {
  name: 'John Smith',
  email: 'johnsmith@gmail.com',
  phone: '+225 698698966',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
  card: {
    number: '0085 7789 2236 3685',
    holderName: 'John smith',
    expiry: '06/22',
    cvv: '321',
  },
};

export const PROFILE_DATA = {
  name: 'John Smith',
  email: 'johnsmith@gmail.com',
  phone: '+225 698698966',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
  stats: {
    totalBookings: 12,
    reviews: 8,
    wishlist: 5,
  },
};

export const BOOKINGS = [
  {
    id: '1',
    hotelId: '1',
    hotelName: 'Heden Golf Hotel',
    location: 'Abidjan, Côte d\'Ivoire',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    checkIn: 'Dec 15, 2024',
    checkOut: 'Dec 17, 2024',
    roomType: 'Deluxe Room',
    guests: 2,
    totalPrice: 450,
    status: 'upcoming',
  },
  {
    id: '2',
    hotelId: '2',
    hotelName: 'Onomo Hotel',
    location: 'Abidjan, Côte d\'Ivoire',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop',
    checkIn: 'Nov 10, 2024',
    checkOut: 'Nov 12, 2024',
    roomType: 'Standard Room',
    guests: 1,
    totalPrice: 240,
    status: 'completed',
  },
  {
    id: '3',
    hotelId: '3',
    hotelName: 'Adagio Aparthotel',
    location: 'Abidjan, Côte d\'Ivoire',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
    checkIn: 'Oct 5, 2024',
    checkOut: 'Oct 7, 2024',
    roomType: 'Suite',
    guests: 2,
    totalPrice: 320,
    status: 'completed',
  },
];

export const NOTIFICATIONS = [
  {
    id: '1',
    type: 'booking',
    title: 'Booking Confirmed',
    message: 'Your booking at Heden Golf Hotel has been confirmed for Dec 15-17.',
    time: '2 hours ago',
    read: false,
  },
  {
    id: '2',
    type: 'offer',
    title: 'Special Offer!',
    message: 'Get 30% off on your next booking. Use code SAVE30.',
    time: '5 hours ago',
    read: false,
  },
  {
    id: '3',
    type: 'reminder',
    title: 'Check-in Reminder',
    message: 'Your check-in at Heden Golf Hotel is tomorrow at 12 PM.',
    time: '1 day ago',
    read: true,
  },
  {
    id: '4',
    type: 'review',
    title: 'Leave a Review',
    message: 'How was your stay at Onomo Hotel? Share your experience.',
    time: '3 days ago',
    read: true,
  },
];
