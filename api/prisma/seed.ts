import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      id: '9aec71ec-086c-403e-a222-c7485fd78c65',
      name: 'Sneaker 1',
      description: 'Description of Product 1',
      image_url: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      category: 'casual shoes',
      price_in_cents: 20000,
      sales: 10,
      created_at: new Date(),
    },
    {
      id: '9aec71ec-086c-403e-a222-c7485fd78c66',
      name: 'Sneaker 2',
      description: 'Description of Product 2',
      image_url: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      category: 'casual shoes',
      price_in_cents: 15000,
      sales: 5,
      created_at: new Date(),
    },
    {
      id: '9aec71ec-086c-403e-a222-c7485fd78c67',
      name: 'Sneaker 3',
      description: 'Description of Product 3',
      image_url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      category: 'srteetwear',
      price_in_cents: 30000,
      sales: 12,
      created_at: new Date(),
    },
    {
      id: '9aec71ec-086c-403e-a222-c7485fd78c68',
      name: 'Sneaker 4',
      description: 'Description of Product 4',
      image_url: 'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      category: 'srteetwear',
      price_in_cents: 45000,
      sales: 50,
      created_at: new Date(),
    },
    {
      id: '9aec71ec-086c-403e-a222-c7485fd78c69',
      name: 'Sneaker 5',
      description: 'Description of Product 5',
      image_url: 'https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      category: 'srteetwear',
      price_in_cents: 49900,
      sales: 41,
      created_at: new Date(),
    },
    {
      id: '9aec71ec-086c-403e-a222-c7485fd78c70',
      name: 'Sneaker 6',
      description: 'Description of Product 6',
      image_url: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80',
      category: 'srteetwear',
      price_in_cents: 19900,
      sales: 91,
      created_at: new Date(),
    },
    {
      id: '9aec71ec-086c-403e-a222-c7485fd78c71',
      name: 'Sneaker 7',
      description: 'Description of Product 7',
      image_url: 'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      category: 'srteetwear',
      price_in_cents: 29900,
      sales: 81,
      created_at: new Date(),
    },
    {
      id: '9aec71ec-086c-403e-a222-c7485fd78c72',
      name: 'Sneaker 8',
      description: 'Description of Product 8',
      image_url: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      category: 'srteetwear',
      price_in_cents: 19900,
      sales: 101,
      created_at: new Date(),

    }
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log('Seed completed successfully!');
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
