import { Logger } from './src/logger.mjs';

console.log('-------- Testing Starts ----------', '\n');

new Logger().error('This is an error');
new Logger().info('This is an info');
new Logger().warning('This is a warning');
new Logger().log('This is a normal message');

console.log('\n', '-------- Testing Ends ----------', '\n');
