// fonction pour mettre le fichier src comme fichier de ref avec le @ dans les appel d'import
const path = require('path')
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    }
}