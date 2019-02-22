/*
* author: mamingyang@baofeng.com
* date: 2019/2/18
*/

import { scaleSize } from '../utils/screen';

export const fz = size => ({ fontSize: scaleSize(size) });

export const p = size => ({ padding: scaleSize(size) });

export const pt = size => ({ paddingTop: scaleSize(size) });

export const pb = size => ({ paddingBottom: scaleSize(size) });

export const pl = size => ({ paddingLeft: scaleSize(size) });

export const pr = size => ({ paddingRight: scaleSize(size) });

export const m = size => ({ margin: scaleSize(size) });

export const mt = size => ({ marginTop: scaleSize(size) });

export const mb = size => ({ marginBottom: scaleSize(size) });

export const ml = size => ({ marginLeft: scaleSize(size) });

export const mr = size => ({ marginRight: scaleSize(size) });
