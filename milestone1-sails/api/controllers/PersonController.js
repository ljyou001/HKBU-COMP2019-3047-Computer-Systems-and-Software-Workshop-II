/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function (req, res) {

        if (req.method == "GET")
            return res.view('person/create');

        if (!req.body.Person)
            return res.badRequest("Form-data not received.");

        await Person.create(req.body.Person);

        return res.ok("Successfully created!");
    },

    json: async function (req, res) {

        var persons = await Person.find();

        return res.json(persons);
    },

    index: async function (req, res) {

        var models = await Person.find();

        return res.view('person/index', { persons: models });

    },

    admin: async function (req, res) {

        var models = await Person.find();

        return res.view('person/admin', { persons: models });

    },

    search: async function (req, res) {

        var models = await Person.find();

        return res.view('person/search', { persons: models });

    },

    view: async function (req, res) {

        var model = await Person.findOne(req.params.id);

        if (!model) return res.notFound();

        return res.view('person/view', { person: model, });

    },

    // action - delete 
    delete: async function (req, res) {

        if (req.method == "GET") return res.forbidden();

        var models = await Person.destroy(req.params.id).fetch();

        if (models.length == 0) return res.notFound();

        return res.ok("Person Deleted.");

    },

    // action - update
    update: async function (req, res) {

        if (req.method == "GET") {

            var model = await Person.findOne(req.params.id);

            if (!model) return res.notFound();

            return res.view('person/update', { person: model });

        } else {

            if (!req.body.Person)
                return res.badRequest("Form-data not received.");

            var models = await Person.update(req.params.id).set({
                title: req.body.Person.title,
                image: req.body.Person.image,
                estate: req.body.Person.estate,
                bedrooms: req.body.Person.bedrooms,
                grossarea: req.body.Person.grossarea,
                tenants: req.body.Person.tenants,
                rent: req.body.Person.rent,
                highlighted: req.body.Person.highlighted,
            }).fetch();

            if (models.length == 0) return res.notFound();

            return res.ok("Record updated");

        }
    },

    search: async function (req, res) {
        const qEstate = req.query.estate || "";
        const qBedrooms = parseInt(req.query.bedrooms) || 0;
        const qGrossareaMin = parseInt(req.query.grossareaMin) || 0;
        const qGrossareaMax = parseInt(req.query.grossareaMax) || 0;
        const qRentMin = parseInt(req.query.rentMin) || 0;
        const qRentMax = parseInt(req.query.rentMax) || 0 ;

        const qPage = Math.max(req.query.page - 1, 0) || 0;
        const numOfItemsPerPage = 2;

        var w = {};
        
        if (qEstate != "") {
            w.estate = qEstate 
        }

        if (qBedrooms != 0) {
            w.bedrooms = qBedrooms 
        }

        if (qGrossareaMin != 0 && qGrossareaMax != 0) {
            w.grossarea = { '>=': qGrossareaMin, '<=': qGrossareaMax };
        } else {
            if (qGrossareaMin != 0)
                w.grossarea = { '>=': qGrossareaMin };
            if (qGrossareaMax != 0)
                w.grossarea = { '<=': qGrossareaMax };
        }

        if (qRentMin != 0 && qRentMax != 0) {
            w.rent = { '>=': qRentMin, '<=': qRentMax };
        } else {
            if (qRentMin != 0)
                w.rent = { '>=': qRentMin };
            if (qRentMax != 0)
                w.rent = { '<=': qRentMax };
        }

        console.log(w);

        var persons = await Person.find({
            where: w,
            sort: 'createdAt',
        });

        console.log(persons[0]);

        var numOfPage = Math.ceil(await persons.length / numOfItemsPerPage);

        var noSkip = numOfItemsPerPage * qPage;
    
        return res.view('person/search', { persons: persons, count: numOfPage, noSkip: noSkip });
    },

};

