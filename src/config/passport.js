const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { User } = require('../models/index'); // Ensure this path is correct

function initialize(passport) {
    const authenticateUser = async (username, password, done) => {
        const normalizeUsername = username.toLowerCase();
        try {
            const user = await User.findOne({ where: { username: normalizeUsername } });
            console.log(user ? `User found: ${user.username}` : `User not found`);

            if (!user) {
                return done(null, false, { message: 'Username not found' });
            }

            const match = await bcrypt.compare(password, user.password);
            console.log(match ? 'Password matched' : 'Invalid Credentials');

            if (match) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Invalid Credentials' });
            }
        } catch (e) {
            console.error(`Error during authentication for user: ${normalizeUsername}`, e);
            return done(e);
        }
    };

    passport.use(new LocalStrategy({ usernameField: 'username' }, authenticateUser));

    passport.serializeUser((user, done) => {
        console.log(`Serializing user: ${user.id}`);
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        console.log(`Deserializing user: ${id}`);
        try {
            User.findByPk(id).then(user => {
                done(null, user);
            });
        } catch (e) {
            console.error(`Error during deserialization for user ID: ${id}`, e);
            done(e, null);
        }
    });
}

module.exports = initialize;
