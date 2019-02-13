import {Dimensions, PixelRatio, Platform} from 'react-native';

export const osName = Platform.OS;
export const deviceWidth = Dimensions.get('window').width; // 设备的宽度
export const deviceHeight = Dimensions.get('window').height; // 设备的高度
export const contentHeight = Dimensions.get('window').height - 80; // 设备的高度
const fontScale = PixelRatio.getFontScale(); // 返回字体大小缩放比例
const pixelRatio = PixelRatio.get(); // 当前设备的像素密度
const defaultPixel = 2; // iphone6的像素密度 //px转换成dp
const w2 = 750 / defaultPixel; const h2 = 1334 / defaultPixel; const scale = Math.min(deviceHeight / h2, deviceWidth / w2); // 获取缩放比例
/**
 * 设置text为sp
 * @param {number} size sp
 * return number dp
 * */
export function setText(size) {
    const sizeNum = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
    alert(sizeNum / defaultPixel);
    return sizeNum / defaultPixel;
}
export function scaleSize(size) {
    const sizeNum = Math.round(size * scale + 0.5);
    return sizeNum / defaultPixel;
}

// 是否iphone流海屏
export function isIphoneX() {
    return osName === 'ios' && (deviceHeight === 812 || deviceWidth === 812 || deviceHeight === 896 || deviceWidth === 896);
}
