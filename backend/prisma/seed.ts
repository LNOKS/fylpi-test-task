import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const properties = [
    {
      id: '10025',
      title: 'JAHRHUNDERTVILLA MIT AUSBAUPOTENZIAL IN KLOSTERNEUBURG',
      location: '3400 Klosterneuburg',
      type: 'Haus',
      rooms: 6,
      bathrooms: 3,
      area: 215.96,
      price: 750000,
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/12794ea38a3ff1c3a6c18344e3f3ebdc95a49ac9dfd4146118e68f02b7e60682?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55',
      views: 171,
    },
    {
      id: '10126',
      title: 'DACHGESCHOSSWOHNUNG MIT BALKON NAHE COTTAGE VIERTEL',
      location: '1180 Wien',
      type: 'Wohnung',
      rooms: 4,
      bathrooms: 1,
      area: 98.51,
      price: 606000,
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/1a90e0c2e575d750117b7c51da616ecae7a381c63206dae76bc3ce1b6b46d642?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55',
      views: 152,
    },
    {
      id: '10506',
      title: 'MODERNE DG-MAISONETTE MIT BALKON AM AUMANNPLATZ',
      location: '1180 Wien',
      type: 'Wohnung',
      rooms: 2,
      bathrooms: 1,
      area: 61.68,
      price: 650000,
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/a06c335fbfbb5fc872396d93ead1b2c4f88a27fb121ee4e6a34be4de6f680e6c?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55',
      views: 95,
    },
    {
      id: '10001',
      title: 'MODERNE DACHGESCHOSSWOHNUNG NÄHE AKH WIEN UND KUTSCHKERMARKT',
      location: '1180 Wien',
      type: 'Wohnung',
      rooms: 4,
      bathrooms: 1,
      area: 111.2,
      price: 690000,
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/eb2c608ebe9e4abeb62ab2c1442e1e292a4b64b91d20fa6f5a66671f18ec2400?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55',
      views: 53,
    },
    {
      id: '10004',
      title: 'GARTEN-MAISONETTE MIT EIGENEM POOL IN DÖBLING',
      location: '1190 Wien',
      type: 'Wohnung',
      rooms: 5,
      bathrooms: 5,
      area: 200.0,
      price: 2300000,
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/3eac552fd43900d421f66cfd53395046a18027a93532c8e6284ba67e564a0511?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55',
      views: 49,
    },
    {
      id: '10023',
      title: 'EXQUISITE VILLA MIT WELLNESSBEREICH UND INDOOR-POOL',
      location: '3400 Klosterneuburg',
      type: 'Haus',
      rooms: 7,
      bathrooms: 4,
      area: 460.07,
      price: 2900000,
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/b293b3f6ed2c2f43e1bdc7cb80b370f3e9d3e92ce1a77eb87ff47bfbb8d5f0e4?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55',
      views: 37,
    },
    {
      id: '10018',
      title:
        'SANIERTE 5 ZIMMER DOPPELHAUSHÄLFTE MITSAMT GARTEN UND GEMAUERTEM KAMINOFEN AUF EIGENGRUND',
      location: '1210 Wien',
      type: 'Doppelhaus',
      rooms: 4,
      bathrooms: 1,
      area: 115.0,
      price: 495000,
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/e840e1d0e4999cc53bf1a2f24af12449511e2b19405eb02f8d9498187d048ce7?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55',
      views: 32,
    },
    {
      id: '10125',
      title: 'HOCHWERTIGE DG-WOHNUNG AUF 2 EBENEN',
      location: '1150 Wien',
      type: 'Wohnung',
      rooms: 4,
      bathrooms: 1,
      area: 98.51,
      price: 548000,
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/83b7a0e8fc246ab61a0823bf7a2d8d4eecceb83e51ca06ae6611a43952dbdfdb?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55',
      views: 26,
    },
    {
      id: '10507',
      title: 'GARTEN-MAISONETTE MIT EIGENEM POOL IN DÖBLING',
      location: '1190 Wien',
      type: 'Wohnung',
      rooms: 5,
      bathrooms: 5,
      area: 200.0,
      price: 2300000,
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d7255875df4dc85dd98f4bf8d6da204e7195b01dd7af9a8c0c9337bbc72b49ac?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55',
      views: 21,
    },
    {
      id: '10128',
      title: 'HOCHWERTIGE DG-WOHNUNG AUF 2 EBENEN',
      location: '1150 Wien',
      type: 'Wohnung',
      rooms: 4,
      bathrooms: 1,
      area: 98.51,
      price: 548000,
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/83b7a0e8fc246ab61a0823bf7a2d8d4eecceb83e51ca06ae6611a43952dbdfdb?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55',
      views: 26,
    },
    {
      id: '10509',
      title: 'GARTEN-MAISONETTE MIT EIGENEM POOL IN DÖBLING',
      location: '1190 Wien',
      type: 'Wohnung',
      rooms: 5,
      bathrooms: 5,
      area: 200.0,
      price: 2300000,
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d7255875df4dc85dd98f4bf8d6da204e7195b01dd7af9a8c0c9337bbc72b49ac?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55',
      views: 21,
    },
    {
      id: '10127',
      title: 'HOCHWERTIGE DG-WOHNUNG AUF 2 EBENEN',
      location: '1150 Wien',
      type: 'Wohnung',
      rooms: 4,
      bathrooms: 1,
      area: 98.51,
      price: 548000,
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/83b7a0e8fc246ab61a0823bf7a2d8d4eecceb83e51ca06ae6611a43952dbdfdb?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55',
      views: 26,
    },
    {
      id: '10508',
      title: 'GARTEN-MAISONETTE MIT EIGENEM POOL IN DÖBLING',
      location: '1190 Wien',
      type: 'Wohnung',
      rooms: 5,
      bathrooms: 5,
      area: 200.0,
      price: 2300000,
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d7255875df4dc85dd98f4bf8d6da204e7195b01dd7af9a8c0c9337bbc72b49ac?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55',
      views: 21,
    },
  ];

  for (const property of properties) {
    await prisma.property.upsert({
      where: { id: property.id },
      update: property,
      create: property,
    });
  }

  console.log('Seed data inserted successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
