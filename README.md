After looking at several libraries for file uploading in react native the best option seems to be **react-native-document-picker**:

https://github.com/rnmods/react-native-document-picker

https://www.npmjs.com/package/react-native-document-picker

Some considerations:

- Requires RN >= 0.63, this is a restriction for us at the moment as we are using RN=0.62.2 so we would have to upgrade it
- Has around 50.000 weekly downloads, seems to be well maintained
- Has 37 issues on github
- It’s possible to upload pdf and images (and other types too)
 
**The idea with this toy program is to test the library and confirm that we could use it before deciding to do a RN upgrade for this purpose.**

Steps to use it:

1) `git clone https://github.com/IPbianco/uploader_v2.git`
2) `cd uploader_v2`
3) `yarn install`
4) `cd ios`
5) `pod install`
6) `cd ..`
7) `npx react-native start` (Starts metro bundler)

For iOS:

8) `npx react-native run-ios` (Runs the app)

For Android:

8) `npx react-native run-android` (Runs the app)
