    const assert = require('assert');
    const ganache = require('ganache-cli');
    const Web3 = require('web3');
    const web3 = new Web3(ganache.provider());

    const carProps = {
        movement: {
            park: 'stopped',
            drive: 'vroom',
            fly: 'phewww'
        },
        projectile: {
            fire: 'burn',
            laser: 'beam',
            antimatter: 'begone'
        }
    };

    const {
        park,
        drive,
        fly
    } = carProps.movement;
    const {
        fire,
        laser,
        antimatter
    } = carProps.projectile;

    ////////////////////////////////////////////////////////////////

    const Car = {
        movement: {
            park,
            drive
        }
    };
    let car;

    beforeEach(() => {
        car = Object.assign({}, Car);
    });

    describe('Car', () => {
        it('can move', () => {
            assert.equal(Object.getOwnPropertyNames(car).includes('movement'), true);
        });

        it('can park by default', () => {
            assert.equal(car.movement.park, 'stopped');
        });

        it('can drive by default', () => {
            assert.equal(car.movement.drive, 'vroom');
        });

        it('cannot fly by default', () => {
            assert.notEqual(car.movement.fly, 'phewww');
        });

        it('can fly', () => {
            car.movement.fly = fly;
            assert.equal(car.movement.fly, 'phewww');
        });

        it('cannot shoot by default', () => {
            assert.equal(Object.getOwnPropertyNames(car).includes('projectile'), !true);
        });

        it('can shoot', () => {
            car.projectile = carProps.projectile;
            assert.equal(Object.getOwnPropertyNames(car).includes('projectile'), true);
        });

        it('can shoot lasers only', () => {
            car = { ...Car,
                projectile: {
                    laser
                }
            };
            assert.equal(Object.values(car.projectile).join(' '), 'beam');
        });

        it('can shoot fire, lasers, and anti-matter', () => {
            car.projectile = carProps.projectile;
            assert.equal(Object.values(car.projectile).join(' '), 'burn beam begone');
        });
    });