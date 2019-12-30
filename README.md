
## Instalation

Installation instructions for MacOS [MongoDb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install)

```bash
brew tap mongodb/brew
brew install mongodb-community@4.2
```

## Start the service

```
brew services start mongodb-community
```

check if the service is running
```bash
ps aux | grep -v grep | grep mongod
```

## CLI

```
mongo
```

try `help` or `show dbs`
