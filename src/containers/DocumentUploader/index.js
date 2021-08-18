import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

import DocumentPicker from 'react-native-document-picker';
import {uploadFile} from './helpers.js';

export class DocumentUploaderScreen extends PureComponent {
  async openFilepicker() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
      });
      const {uri, type, name, size} = res[0];
      uploadFile({uri, type, name, size});
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }

  render() {
    return (
      <View>
        <Text onPress={() => this.openFilepicker()}>Hello world!</Text>
      </View>
    );
  }
}

export default DocumentUploaderScreen;
