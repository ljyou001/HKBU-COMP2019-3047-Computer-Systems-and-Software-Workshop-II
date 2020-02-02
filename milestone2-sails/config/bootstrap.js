module.exports.bootstrap = async function () {

  sails.bcrypt = require('bcryptjs');
  const saltRounds = 10;
  
  if (await Person.count() == 0) {

    await Person.createEach([
      {
        title: '123456',
        image: 'https://images1.apartments.com/i2/P0s3lHrhIIPXfyhkVz0wMZXOqFj2m3Rg_Pa-OdKQIQk/111/the-500-atlanta-ga-refined-apartment-living---elite-upgrade.jpg',
        estate: 'Tin Ma Court',
        bedrooms: '2',
        grossarea: '400',
        tenants: '3',
        rent: '14000',
        highlighted: 'y',
      },
      {
        title: '123457',
        image: 'https://images1.apartments.com/i2/P0s3lHrhIIPXfyhkVz0wMZXOqFj2m3Rg_Pa-OdKQIQk/111/the-500-atlanta-ga-refined-apartment-living---elite-upgrade.jpg',
        estate: 'Broadcast Drive',
        bedrooms: '2',
        grossarea: '550',
        tenants: '5',
        rent: '15000',
        highlighted: 'n',
      },
      {
        title: '123458',
        image: 'https://images1.apartments.com/i2/P0s3lHrhIIPXfyhkVz0wMZXOqFj2m3Rg_Pa-OdKQIQk/111/the-500-atlanta-ga-refined-apartment-living---elite-upgrade.jpg',
        estate: 'Sha Tin',
        bedrooms: '3',
        grossarea: '500',
        tenants: '4',
        rent: '14500',
        highlighted: 'n',
      },
      {
        title: '123459',
        image: 'https://images1.apartments.com/i2/P0s3lHrhIIPXfyhkVz0wMZXOqFj2m3Rg_Pa-OdKQIQk/111/the-500-atlanta-ga-refined-apartment-living---elite-upgrade.jpg',
        estate: 'Shek Kip Mei',
        bedrooms: '2',
        grossarea: '600',
        tenants: '5',
        rent: '15400',
        highlighted: 'n',
      },
    ]);

  }

  if (await User.count() == 0) {



    const hash_admin = await sails.bcrypt.hash('admin', saltRounds)
    const hash_u1 = await sails.bcrypt.hash('u1', saltRounds);
    const hash_u2 = await sails.bcrypt.hash('u2', saltRounds);
    const hash_u3 = await sails.bcrypt.hash('u3', saltRounds);
    const hash_u4 = await sails.bcrypt.hash('u4', saltRounds);

    await User.createEach([
      { username: "admin", password: hash_admin, role: "admin" },
      { username: "u1", password: hash_u1, role: "client" },
      { username: "u2", password: hash_u2, role: "client" },
      { username: "u3", password: hash_u3, role: "client" },
      { username: "u4", password: hash_u4, role: "client" },
    ]);

    const ap1 = await Person.findOne({title: "123456"});
    const ap2 = await Person.findOne({title: "123457"});
    const u1 = await User.findOne({username: "u1"});
    const u2 = await User.findOne({username: "u2"});

    await User.addToCollection(u1.id, 'rents').members(ap1.id);
    await User.addToCollection(u2.id, 'rents').members(ap2.id);

  }



};
