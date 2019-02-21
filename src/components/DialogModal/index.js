import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Modal, Image, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'native-base';

import styles from './style';

export function DialogImg(props) {
    const { visible, toggle, children, source, style } = props;
    return (
        <View style={styles.imgWrap}>
            <Image
                style={{ ...styles.dialogImg, ...style }}
                source={source}
            />
        </View>
    );
}

export function DialogTitle(props) {
    const { text } = props;
    return (
        <View style={styles.titleItem}>
            <Text style={styles.titleText}>{text}</Text>
        </View>
    );
}

export function DialogContent(props) {
    const { text, textStyle, children, style = {} } = props;
    return (
        <View style={[styles.contentWrap, style]}>
            <Text style={{ ...styles.contentText, ...textStyle }}>{text}</Text>
            {children}
        </View>
    );
}

export function DialogSubContent(props) {
    const { text, children, style } = props;
    return (
        <View>
            <Text style={[styles.subContentText, style]}>{text}</Text>
            {children}
        </View>
    );
}

export function DialogButton(props) {
    const { text = '好的', rightText, children, onPress, onRightPress } = props;
    const borderRight = rightText && styles.borderRight;
    return (
        <View style={styles.btnWrap}>
            <Button
                transparent
                style={[styles.btn, borderRight]}
                onPress={() => onPress()}
            >
                <Text style={styles.btnText}>{text}</Text>
            </Button>
            {
                rightText && (
                    <Button
                        transparent
                        style={styles.btn}
                        onPress={() => onRightPress()}
                    >
                        <Text style={styles.btnText}>{rightText}</Text>
                    </Button>
                )
            }
        </View>
    );
}

export function DialogModal(props) {
    const { visible, toggle, touchShadow, children, imgSrc, style = {} } = props;
    return (
        <View>
            <Modal
                animationType="fade"
                transparent
                visible={visible}
                onRequestClose={() => toggle()}
            >
                <TouchableWithoutFeedback style={{ flex: 1 }} onPress={typeof touchShadow === 'function' ? touchShadow : () => {}}>
                    <View style={styles.container}>
                        <View style={[styles.dialogWrap, style]}>
                            {children}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}
