/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    login: async function (req, res) {

        if (req.method == "GET") return res.view('user/login');

        sails.log("login input", req.body);

        if (!req.body.username || !req.body.password) return res.badRequest();

        var user = await User.findOne({ username: req.body.username });

        if (!user) return res.status(401).send("User not found");

        const match = await sails.bcrypt.compare(req.body.password, user.password);

        if (!match) return res.status(401).send("Wrong Password");

        sails.log("login successful");

        req.session.regenerate(function (err) {

            if (err) return res.serverError(err);

            req.session.username = req.body.username;
            req.session.userid = user.id;  

            sails.log("Session: " + JSON.stringify(req.session));

            if (req.wantsJSON) {

                sails.log("in else part");

                return res.json({message: "Login Successfully.", url: '/'});    // for ajax request

            } else {
                return res.ok("Login successfully");
            }

        });

    },

    logout: async function (req, res) {

        req.session.destroy(function (err) {

            if (err) return res.serverError(err);

            return res.redirect('/');

        });
    },

    populate: async function (req, res) {

        var user = await User.findOne(req.session.userid).populate("rents"); 

        if (!user) return res.notFound();

        console.log("Here finished find user");

        if (req.wantsJSON) {
            jsonfile = res.json({ persons: user.rents });
            console.log("Here is req wantJson: " + JSON.stringify(jsonfile));
            return jsonfile;    // for ajax request
        } else {
            return res.view('user/rent', { persons: user.rents }); 
        }

    },

    add: async function (req, res) {

        if (!await User.findOne(req.session.userid)) return res.notFound();

        if (!await Person.findOne(req.params.fk)) return res.notFound();

        var person = await Person.findOne(req.params.fk).populate("includes");

        if (person.includes.length < person.tenants) {
            await User.addToCollection(req.session.userid, 'rents').members(req.params.fk);
            return res.status(200).send('Rent Completed.');
        }
        return res.status(422).send('Quota full.');

    },

    remove: async function (req, res) {
    
        if (!await User.findOne(req.session.userid)) return res.notFound();
    
        if (!await Person.findOne(req.params.fk)) return res.notFound();
    
        await User.removeFromCollection(req.session.userid, 'rents').members(req.params.fk);
    
        return res.status(200).send('Rent Cancelled.');
    
    },
    
};

