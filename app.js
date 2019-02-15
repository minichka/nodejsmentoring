import json from './config/config';
import {Product, User} from './models/index';
import * as DirWacher from './dirwatcher/DirWacher';

console.log(json.name);
var user = new User();
var product = new Product();
var watcher = new DirWacher('./data',15000);
watcher.watch();