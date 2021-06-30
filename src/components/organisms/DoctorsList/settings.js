const serviceHours = [
  {
    day: 0,
    open: '08:00',
    close: '18:00',
    isClosed: false,
  },
  {
    day: 1,
    open: '08:00',
    close: '18:00',
    isClosed: false,
  },
  {
    day: 2,
    open: '08:00',
    close: '18:00',
    isClosed: false,
  },
  {
    day: 3,
    open: '08:00',
    close: '18:00',
    isClosed: false,
  },
  {
    day: 4,
    open: '08:00',
    close: '18:00',
    isClosed: false,
  },
  {
    day: 5,
    open: '08:00',
    close: '18:00',
    isClosed: false,
  },
  {
    day: 6,
    open: '10:00',
    close: '14:00',
    isClosed: false,
  },
];

const reviews = [
  {
    id: 0,
    user: {
      name: 'Ralph',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 1,
    user: {
      name: 'Inês',
      image:
        'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    rating: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    user: {
      name: 'Joshua',
      image:
        'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80',
    },
    rating: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    user: {
      name: 'Thiago',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export const MOCK_DATA = [
  {
    id: 0,
    name: 'Dr. Cris',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    specialty: 'Cardiologista',
    rating: 4.5,
    ratingNumber: 12,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus quam porttitor vulputate aliquam et bibendum. Placerat.',
    address: 'Av Getúlio Vargas - 1671 - 8 Andar - Savassi Belo Horizonte',
    serviceHours,
    reviews,
  },
  {
    id: 1,
    name: 'Dr. Gustavo',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    specialty: 'Otorpedista',
    rating: 5,
    ratingNumber: 12,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus quam porttitor vulputate aliquam et bibendum. Placerat.',
    address: 'Av Getúlio Vargas - 1671 - 8 Andar - Savassi Belo Horizonte',
    serviceHours,
    reviews,
  },
  {
    id: 2,
    name: 'Dr. Austin',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    specialty: 'Otorrino',
    rating: 2,
    ratingNumber: 12,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus quam porttitor vulputate aliquam et bibendum. Placerat.',
    address: 'Av Getúlio Vargas - 1671 - 8 Andar - Savassi Belo Horizonte',
    serviceHours,
    reviews,
  },
  {
    id: 3,
    name: 'Dr. Hill',
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    specialty: 'Dentista',
    rating: 4,
    ratingNumber: 12,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus quam porttitor vulputate aliquam et bibendum. Placerat.',
    address: 'Av Getúlio Vargas - 1671 - 8 Andar - Savassi Belo Horizonte',
    serviceHours,
    reviews,
  },
  {
    id: 4,
    name: 'Dr. Lucas',
    image:
      'https://images.unsplash.com/photo-1584467735815-f778f274e296?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    specialty: 'Nutricionista',
    rating: 5,
    ratingNumber: 12,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus quam porttitor vulputate aliquam et bibendum. Placerat.',
    address: 'Av Getúlio Vargas - 1671 - 8 Andar - Savassi Belo Horizonte',
    serviceHours,
    reviews,
  },
];
