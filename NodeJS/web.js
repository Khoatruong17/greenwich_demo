const http = require('http');
const fs = require('fs') //file system
const port = process.env.PORT || 3001 //default port for cloud deployed

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile("index.html", (err, data) => {
            // case error(cannot_read_file)
            if (err) {
                console.error("Can't read index.html")
            }
            // case no error
            else {
                res.write(data)
                res.end()
            }
        })
    }

    else if (req.url === '/hanoi') {
        fs.readFile("hanoi.html", (err, data) => {
            // case error(cannot_read_file)
            if (err) {
                console.error("Can't read login.html")
            }
            // case no error
            else {
                res.write(data)
                res.end()
            }
        })
    }
    else if (req.url === '/danang') {
        fs.readFile("danang.html", (err, data) => {
            // case error(cannot_read_file)
            if (err) {
                console.error("Can't read welcome.html")
            }
            // case no error
            else {
                res.write(data)
                res.end()
            }
        })
    }
    else if (req.url === '/cantho') {
        fs.readFile("cantho.html", (err, data) => {
            // case error(cannot_read_file)
            if (err) {
                console.error("Can't read welcome.html")
            }
            // case no error
            else {
                res.write(data)
                res.end()
            }
        })
    }
    else if (req.url === '/hcm') {
        fs.readFile("hcm.html", (err, data) => {
            // case error(cannot_read_file)
            if (err) {
                console.error("Can't read welcome.html")
            }
            // case no error
            else {
                res.write(data)
                res.end()
            }
        })
    }
    else{
        res.write('<h1>404 Not Found !</h1>')
        res.end()
    }
})

server.listen(port, () => {
    console.log('listening on port at http://localhost:' + port);
});