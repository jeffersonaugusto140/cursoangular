import {Sandero} from './sandero'
import {Celta} from './celta'

import * as _ from 'lodash'

console.log(_.pad(' Exec ts ', 20, '='))

var san = new Sandero()
var cel = new Celta()

san.andar()
cel.andar()
