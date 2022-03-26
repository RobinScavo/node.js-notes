// Display the global object
console.log(global)

//Modules

const people = ['mario', 'luigi']
const ages = [22, 21]

module.exports = {
    people, ages
}

const { people, ages } = require('./people.js')

// operating system core module

const os = require('os');

console.log(os.platform(), os.homedir())

// file system core module (Usefel for smaller files. For larger ones used streams)
    const fs = require('fs')

    // reading files
    fs.readFile('./docs/blog1.txt'), (err, data) => {
        if (err) {
            console.log(err)
        }
        console.log(data.toString())
    }

    // writing files
    fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
        console.log('file was written')
    })

    // directories
    if (!fs.existsSync('./assets')) {
        fs.mkdir('./assets', () => {
            if (err) {
                console.log(err)
            }
            console.log('folder created')
        })
    } else {
        fs.rmdir('./assets', () => {
            if (err) {
                console.log(err)
            }
            console.log('folder deleted')
        })
    }

    // deleting files
    if (fs.existsSync('./docs/deleteme.txt')) {
        fs.unlink('./docs/deleteme.txt', (err) => {
            if (err) {
                console.log(err)
            }
            console.log('file deleted')
        })
    }

// Streams: Start using data before it has finished loading

    // encoding utf8 converts the data to a string
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', (chunk) => {
    console.log('--- NEW CHUNK ----');
    console.log(chunk)
    writeStream.write('\nNew Chunk\n');
    writeStream.write(chunk)

    // A cleaner way to write the above is:
    readStream.pipe(writeStream)
})
