import fs from "fs";

import chalk from "chalk";

const LOG_FILE = "logging.log"

const logging_levels = {
    info: chalk.bold.green,
    warning: chalk.magenta,
    error: chalk.bold.red,
    info2: chalk.italic.yellow,
}

class Logger {
    constructor() {
        this.logging_levels = logging_levels
    }

    writeLogs(message, level = "info") {
        fs.writeFile(
            LOG_FILE,
            `${level.toUpperCase()} :: ${message}`,
            { flag: 'a+' },
            (err) => { if (err) console.log(err) }
        )
    };

    color(string, level) {
        const colored_string = this.logging_levels[level](`${string}`)
        return colored_string;
    }

    handle_request(req, _res, _next) {
        let date = Date()
        let new_date = new Date(date)
        const time = `${new_date.getHours()}:${new_date.getMinutes()}:${new_date.getSeconds()}`
        // Console log the message with level and information
        // const consoleMessage = `${this.color("INFO", "info")} :: ${this.color(time, "warning")} :: ${req.method} :: ${req.originalUrl}`
        // Save to logging file
        const loggingMessage = `${time} :: ${req.method} :: ${req.originalUrl} \n`
        // console.log(consoleMessage)
        // this.writeLogs(loggingMessage)
        _next()
    }
}


export { Logger }