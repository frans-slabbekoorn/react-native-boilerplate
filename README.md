# React Native TypeScript Boilerplate

## Included Packages

* react-native-rename
* react-native-dotenv

## Instructions

### Basic instructions
To start the development server run:
```bash
npm start
```

To run on android:
```bash
npm run android
```

To run on ios:
```bash
npm run ios
```
### Useful tools

To rename project run: 
```bash
npm run rename newname 
```
It is not recommended to add uppercases/underscores/dashes in the name

Link dependencies:
```bash
npm run link
```

### Fonts

To add a font, place it in `src/assets/fonts` with file name like `Font-Weight.ttf` which can be used in the styling like this:
```javascript
fontFamily: "Font-Weight"
```

### Recommendations when starting this boilerplate

Run: `npm install`
Rename the 'name' property in package.json
Run: `npm run rename newname`