# texastoc-client-v5

Version 5 will refactor the [texastoc-v4-client](https://github.com/gpratte/texastoc-v4-client) 
react/redux client to make use of the new 
[texastoc-server-v5](https://github.com/gpratte/texastoc-server-v5)
backend APIs

## Local Development
Using node version 18.x and npm version 8.x

## Production Deployment
Runs on nginx version 1.14.0

## Current Branch:  02-fix-invalid-date

The moment library expects month to be zero based.
