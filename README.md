ISSUE
=====

This is the serverless 4 aws nodejs sample project, I have some issue in the node module resolution.

I have lamda layers for `nodejs` and `utility` and I have lambda nodejs service called account-service

Folder structure

sls-api/layers/nodejs/
sls-api/layers/utility/
sls-api/services/account-service/

I don't want to maintain the node_modules folder inside every service to avoid growing project size unnecessarily. so I use tsconfig to resolve node js from the lambda layer. it all works other than the utility module.

```import { getAccountModel, IAccount } from 'utility';```

When I try to import I get this error

```Cannot find module 'utility' or its corresponding type declarations```

If I resolve the relative path it works

```import { getAccountModel, IAccount } from '../../../layers/utility';```

tsconfig files are located in the
sls-api/services/account-service/tsconfig.json
sls-api/layers/utility/tsconfig.json

I want both getAccountModel, IAccount import working from utility module without issue.


COMPILE LAYERS
==============

 - FOR DEPLOYMENT without dev dependecies 

   ```(cd utility && npm install  && npm run compile && npm install --omit=dev) && (cd nodejs && npm install --omit=dev )```

 - FOR LOCAL with dev dependecies 

   ```(cd utility && npm install  && npm run compile && npm install) && (cd nodejs && npm install )```
