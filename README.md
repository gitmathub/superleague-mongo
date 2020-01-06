
## Instalation

### Mac

Installation instructions for MacOS [MongoDb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install)

```bash
brew tap mongodb/brew
brew install mongodb-community@4.2
```

Start the service

```
brew services start mongodb-community
```

check if the service is running
```bash
ps aux | grep -v grep | grep mongod
```

### Provider Uberspace

Check [installation MongoDB](https://lab.uberspace.de/guide_mongodb.html)

Open ports: https://manual.uberspace.de/basics-ports.html

```bash
uberspace port list
uberspace port add
```

my port: 45900

## CLI

```
mongo
```

try `help` or `show dbs`


## TODOS

- [ ] query & map data
- [ ] cronjob
- [ ] (node:20110) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.