import {fileURLToPath} from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url) //Ruta del archivo
const __dirname = dirname(__filename)

export default __dirname;