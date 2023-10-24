import { Chess } from 'chess.js';
import { Chessground }  from 'chessground';
import { Unit } from './unit';
import { toDests, aiPlay } from '../util'


export const vsRandom: Unit = {
  name: 'Play vs random AI',
  run(el) {
    const chess = new Chess();
    const cg = Chessground(el, {
      movable: {
        color: 'white',
        free: false,
        dests: toDests(chess)
      }
    });
    cg.set({
      movable: {
        events: {
          after: aiPlay(cg, chess, 1000, false)
        }
      }
    });
    return cg;
  }
};
