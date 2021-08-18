import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

import DocumentPicker from 'react-native-document-picker';

const uploadDocumentUrl = 'https://enf1z5o26le0d6s.m.pipedream.net'; // Change to your own bin request

export class DocumentUploaderScreen extends PureComponent {
  async openFilepicker() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
      });
      const {uri, type, name, size} = res[0];
      const body = {uri, type, name, size};
      await fetch(uploadDocumentUrl, {
        method: 'post',
        body,
      });
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
        <Text onPress={() => this.openFilepicker()}>UPLOAD SOMETHING</Text>
      </View>
    );
  }
}

export default DocumentUploaderScreen;
