/*
* author: mamingyang@baofeng.com
* date: 2019/3/11
*/

import { observable, action } from 'mobx';

class PlayerData {
    @observable isFullScreen = false;

    @action toggleFullScreen = (isFullScreen) => {
        this.isFullScreen = typeof isFullScreen === 'boolean' && isFullScreen;
    }
}

const PlayerStore = new PlayerData();

export default PlayerStore;
