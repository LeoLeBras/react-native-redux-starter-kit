# react-native-redux-starter-kit
[![Dependency Status](https://david-dm.org/LeoLeBras/react-native-redux-starter-kit.svg?style=flat)](https://david-dm.org/LeoLeBras/react-native-redux-starter-kit)
[![devDependency Status](https://david-dm.org/LeoLeBras/react-native-redux-starter-kit/dev-status.svg?style=flat)](https://david-dm.org/LeoLeBras/react-native-redux-starter-kit#info=devDependencies)

Get started with React Native and Redux.

## Requirements
- [Node](https://nodejs.org) 4.x or newer
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development (optional)
- [Android SDK](https://developer.android.com/sdk/) for Android development (optional)
- [Android Lollipop](https://www.android.com/versions/lollipop-5-0/) or better for Android device testing (optional)

## Stack
- [React Native](https://facebook.github.io/react-native/) `^0.19.0` for building native apps using react
- [Redux](http://rackt.github.io/redux/index.html) `4.2.x` a predictable state container for Javascript apps
- [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools) use Redux DevTools remotely for React Native apps.
- [Babel](http://babeljs.io/) `6.x.x` for ES6+ support
- [Immutable](https://facebook.github.io/immutable-js/) Immutable persistent data collections for Javascript
- [ExNavigator](https://github.com/exponentjs/ex-navigator) a route-centric navigation built on top of React Native's Navigator    

## Getting started
Just [clone](github-windows://openRepo/https://github.com/LeoLeBras/react-native-redux-starter-kit.git) the repo
and start :
```shell
$ git clone https://github.com/LeoLeBras/react-native-redux-starter-kit.git myAwesomeApp
$ cd myAwesomeApp
$ npm i                         # Install Node.js components listed in ./package.json
```
And see [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

### How to use ?
```shell
$ npm start                     # or: node_modules/react-native/packager/packager.sh
```
This will start a lightweight development server.

###### iOS:
Open `App.xcodeproj` in Xcode, build and run the project.

###### Android:
```shell
$ npm run android-setup-port    # adb reverse tcp:8081 tcp:8080
```
Start your emulator or connect your device.

### Redux DevTools
###### iOS:
Update ```src/scripts/configStore.jsx```:

```diff
+ import devTools from 'remote-redux-devtools';

const enhancer = compose(
+    devTools({
+        name: Platform.OS,
+        hostname: 'localhost',
+        port: 5678
+    }),
    applyMiddleware(thunk)
);
```



```Cmd+D``` from within the Simulator, select ```Debug in Chrome``` from the developer menu and :
```shell
$ npm run remotedev
```

### Bundling for release
```shell
$ npm run build                # or: react-native bundle
```

## Issues
If you run into any issues please see the [Getting Started](http://facebook.github.io/react-native/docs/getting-started.html) guide for React Native before submitting an issue.
