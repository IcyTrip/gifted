import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
  
  /**@type {import('./models/Gift.js').Gift[]} */
  gifts = [];

  /**@type {import('./models/Gif.js').Gif[]} */
  gifs = [];
}

export const AppState = createObservableProxy(new ObservableAppState())