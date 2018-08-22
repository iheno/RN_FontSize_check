import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

const DEFAULT_TEXTS = `フォントサイズテスト
폰트 사이즈 테스트
字体尺寸测试
FONT SIZE TEST
font size test
1234567890`.split(/\n/);

let count = 0;

export default class App extends React.Component {
  state = {
    texts: DEFAULT_TEXTS,
  };

  renderPage(fontSize) {
    const { texts } = this.state;
    const style = {
      color: '#000',
      fontSize,
      borderWidth: 0.5,
      borderColor: '#cccccc',
      height: fontSize,
      minHeight: fontSize,
      maxHeight: fontSize,
      marginBottom: 4,
      lineHeight: fontSize,
      textAlignVertical: 'center',
      includeFontPadding: false,
    };
    const views = texts.map(line => (
      <Text key={`id${++count}`} style={style}>
        {line}
      </Text>
    ));
    return (
      <View style={styles.page} key={views}>
        <Text style={styles.title}>{fontSize}</Text>
        {views}
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        <Swiper>
          {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 30].map(e => this.renderPage(e))}
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
});

