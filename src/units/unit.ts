import { Api } from 'chessground/api';

import * as play from './play';

export interface Unit {
  name: string;
  run: (el: HTMLElement) => Api;
}

export const list: Unit[] = [
  play.vsRandom,
];
