import { AuthController } from './controllers/AuthController.js';
import { GiftsController } from './controllers/GiftsController.js';
import { GiphyController } from './controllers/GiphyController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  GiftsController = new GiftsController()
  GiphyController = new GiphyController()

  constructor() {
    if(USE_ROUTER){
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
