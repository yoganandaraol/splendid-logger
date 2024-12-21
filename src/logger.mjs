function logMessage(level, message) {
    const colors = {
      info: "\x1b[34m", // Blue
      warning: "\x1b[33m", // Yellow
      error: "\x1b[31m", // Red
      reset: "\x1b[0m",  // Reset to default
    };

    const paddedLevel = (level === 'reset' ? 'NORMAL' : level).toUpperCase().padEnd(7, ' ');  // Pad level to make it 7 chars long
    const color = colors[level.toLowerCase()] || colors.reset; // Default color

    process.stdout.write(`${color}[${paddedLevel}]: ${message}${colors.reset}\n`);
  }

export class Logger {

    info(message) {
        logMessage('info', message);
    }

    warning(message) {
        logMessage('warning', message);
    }

    error(message) {
        logMessage('error', message);
    }

    log(message) {
        logMessage('reset', message);
    }
} 