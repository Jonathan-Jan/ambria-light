# Ambria-Light


## Installation
Entry point
```
let ambria = require('../ambria-light');
let rekire = require('../ambria-light').require;

const appRootPath = path.resolve(`${__dirname}/..`);

ambria.register({
    'one.module':'test/ressources/one.module',
    'two.module':'test/ressources/subfolder/two.module'
}, appRootPath);
```


```
//module can be required like this :
let rekire = require('../ambria-light').require;
rekire('two.module');
```

## Features 

## Quick exemple

## Contributing

Contributions are welcome as long as you add test. 
Please send separate merge requests and don't combine things.

## License

MIT - see LICENSE.md.