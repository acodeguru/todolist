import * as dotenv from "dotenv";
dotenv.config();
import { v4 as uuidv4 } from 'uuid';
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import { buildSchema } from 'graphql';

import typeDefs from './graphql/types/index';
import resolvers from './graphql/resolvers/index';
import * as graphqlHttp from 'express-graphql';

import * as cors from 'cors';
import { configure as configureLog4js, getLogger } from 'log4js';
import { json } from 'body-parser';
import auth from './middleware/auth';
import log4jsConfig from './config/log4js-config'
import { User, Role } from "./models";
import { sign } from 'jsonwebtoken';

const atob = a => Buffer.from(a, 'base64').toString('binary')

const schemaTypes = buildSchema(typeDefs);
const app = express();

configureLog4js(log4jsConfig);

const log = getLogger('app');

app.use(json({ limit: '50mb' }));
app.use(cors());

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
  next();
}).on("error", function (error) {
  log.error(error);
});

app.use(auth);

app.get('/auth', async function (req, res) {
  const token = (req.query.id_token) as string; 
  let email = "";
  let groups = []; 
  let user_name = "";

  console.log("------------------- 1111111111111") 
  try {
    console.log("------------------- 22222222222222222222") 
    console.log(require('url').parse(req.url).hash) 
    const decorded_token = JSON.parse(atob(token.split('.')[1]));

    console.log(decorded_token);
    user_name = decorded_token.name;
    email = decorded_token.email;
    groups = decorded_token.groups;

  } catch (e) {
    console.log("------------------- 33333333333333333") 
    return console.log(e);
  }

  
  console.log("------------------- 1")
  // check user already in system
  const user = await User.findOne({
    where: {
      email: email,
      status : 1
    },
    include: [{
      model: Role
    }]
  });

  console.log(user)

  console.log("-------------------2")
  // if not go for registration
  if (!user) {
    console.log("-------------------")
    const existingRole = await Role.findOne({
      where: {
        name: "User",
      }
    });
    console.log("##################")
    let full_name = user_name.split(" ")

    const user = new User({
      fname: full_name[0],
      lname: full_name[1],
      email: email,
      role_uuid: existingRole.uuid,
      uuid: uuidv4()
    });

    const createdUser = await user.save();

    const error = new Error('User not found.') as any;
    error.code = 401;
    throw error;
  }

  console.log("------------------- 3")
  
  // self app token
  const app_token = sign({
      userId: user.uuid,
      email: user.email
    },

    process.env.AUTH_SECRET, {
      expiresIn: '24h'
    }
  );

  console.log("------------------- 4") 
  return {
    token: token,
    userId: user.uuid,
  };
});

app.use('/graphql', graphqlHttp({
  schema: schemaTypes,
  rootValue: resolvers,
  graphiql: !!process.env.GRAPHIQL_ENABLED
}));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  log.info('Dataservice listening on port 8080')
});