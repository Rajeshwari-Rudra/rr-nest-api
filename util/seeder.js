/**
 * Seed the database with sample data.
 *
 * During development, drop & recreate the database on startup.
 *
 * Only as we move into production (and the app is stable) will we
 * begin to store real data.
 *
 * *
 */

module.exports = async (db) => {
    const LOG = require('./logger');
    LOG.info('Starting seeder.......................');

    try {
        await db.sync({ force: true });
        LOG.info('Recreated all tables.');
    } catch (err) {
        LOG.error(`ERROR: on sync (recreate) - ${err.message}`);
    }


    try {
        await db.models.User.bulkCreate(
            [
                { id: 1, email: 'dcase@nwmissouri.edu' },
                { id: 2, email: 's538361@nwmissouri.edu' },
            ],
            { validate: true } // add options object to call new model validators
        );
        const numUsers = await db.models.User.count();
        LOG.info(`Seeded ${numUsers} users.`);
    } catch (err) {
        LOG.error(`ERROR: User seeding - ${err.message}`);
    }

    
    try {
        await db.models.Location.bulkCreate(
            [
                { id: 1, latitude:40.3589695,longitude:-94.8831951 },
                { id: 2, latitude:40.3500419,longitude:-94.8851095 },
            ],
            { validate: true } // add options object to call new model validators
        );
        const numLocations = await db.models.Location.count();
        LOG.info(`Seeded ${numLocations} locations.`);
    } catch (err) {
        LOG.error(`ERROR: User seeding - ${err.message}`);
    }

    LOG.info('Done with seeder................');

    return db;
};