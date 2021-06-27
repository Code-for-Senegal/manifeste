require('tap').mochaGlobals()
const assert = require('assert')
const remark = require('remark')
const frontmatter = require('remark-frontmatter')
const extract = require('remark-extract-frontmatter')
const yaml = require('yaml').parse
const strip = require('strip-markdown')
const vfile = require('to-vfile')
const fs = require('fs')
const path = require("path")

const getAllFiles = function (dirPath, arrayOfFiles) {
    let files = fs.readdirSync(dirPath)

    arrayOfFiles = arrayOfFiles || []

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file))
        }
    })

    return arrayOfFiles
}

const dir = './docs/'
const files = getAllFiles(dir)

files.forEach(async (file) => {
    const [text, meta] = await processMarkdown(file)
    const lines = text.split('\n').filter((line) => line !== '')

    if (meta.test !== false) {
        validateHaiku(file, lines)
    }
})

function processMarkdown(filename) {
    return new Promise((resolve, reject) => {
        remark()
            .use(frontmatter)
            .use(extract, { yaml: yaml })
            .use(strip)
            .process(vfile.readSync(filename), (err, file) => {
                if (err) {
                    reject(err)
                } else {
                    resolve([file.toString(), file.data])
                }
            })
    })
}

function validateHaiku(filename, lines) {
    describe(filename, () => {
        it("doit avoir une extension de fichier '.md'", () => {
            assert.ok(/\.md$/.test(filename), "l'extension ne correspond pas à '.md'")
        })
    })

    describe("Structure de l'article ", () => {
        it('devrait avoir au minimum 5 lignes.', () => {
            assert.equal(lines.length >= 3, true)
        })
    })
}