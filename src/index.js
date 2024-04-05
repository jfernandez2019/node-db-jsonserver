import { config } from "dotenv"; //trae la variable de entorno en desarrollo
import env from 'env-var'; //para ejecutar mejor las v. de entorno en desarrollo

config() //el config ejecuta la variable de entorno y trae la informacion que necesitamos
         //en este caso el puerto 3000

//Con la liberia env-var podemos darle mas formato a la informacion obtenida
const PORT = env.get('PORT').required().asPortNumber()
