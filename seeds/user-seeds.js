const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: '123'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: '123'
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: '123'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: '123'
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: '123'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: '123'
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: '123'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: '123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
