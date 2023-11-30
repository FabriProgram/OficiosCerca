import express, {Application, Request, Response} from 'express'
import routesPersonas from '../routes/persona';

class Server{
    private app: Application;
    private port: string;
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.routes();
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`La aplicacion esta corriendo en el puerto ${this.port}`);
        });
    }
    routes(){
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: "API Working"
            })
        })
        this.app.use('/api/personas', routesPersonas)
    }
}


export default Server;