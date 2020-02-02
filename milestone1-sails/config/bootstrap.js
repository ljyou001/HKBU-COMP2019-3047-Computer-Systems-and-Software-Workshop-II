/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
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
    // etc.
  ]);
  // ```

};
