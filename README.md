# react-native-redux-starter-kit
[![Dependency Status](https://david-dm.org/LeoLeBras/react-native-redux-starter-kit.svg?style=flat)](https://david-dm.org/LeoLeBras/react-native-redux-starter-kit)
[![devDependency Status](https://david-dm.org/LeoLeBras/react-native-redux-starter-kit/dev-status.svg?style=flat)](https://david-dm.org/LeoLeBras/react-native-redux-starter-kit#info=devDependencies)

`react-native-redux-starter-kit` is a starter boilerplate for mobile apps using React Native, Redux for data management, and a bunch of other cool tools. This starter is compatible with both iOS and Android 👌

## Summary

1. [Requirements](#requirements)
1. [Stack](#stack)
1. [Make the magic happen](#make-the-magic-happen)
1. [Scripts](#Scripts)
1. [Application structure](#application-structure)
1. [Development](#development)
  1. [Navigation](#navigation)
  1. [Middlewares](#middlewares)
  1. [Alias](#alias)
  1. [Flow](#flow)
  1. [.babelrc](#babelrc)
  1. [react-native link](#react-native-link)
1. [Missing doc? ](#missing-doc)
1. [Contributors](#contributors)

## Requirements
- [Node](https://nodejs.org) `5.1.x` or newer
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) `7.3.x` or newer for iOS development
- [Android Studio](https://developer.android.com/studio/index.html) `2.x` or newer for Android development
- [Android SDK](https://developer.android.com/sdk/) `23.0.2` or newer for Android development
- [Genymotion](https://www.genymotion.com/) `2.7.x` or newer for Android emulation
- [Android](https://www.android.com/) `5.0` or newer on your Android device to test properly

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

## Stack
- [React Native](https://facebook.github.io/react-native/) `0.31.0` for building native apps using react
- [Redux](http://redux.js.org/) `3.5.x` a predictable state container for Javascript apps
- [Babel](http://babeljs.io/) `6.x.x` for ES6+ support
- [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) `3.x.x` a router based on ExperimentalNavigation API
- [ESLint](http://eslint.org/) `3.2.2` a pluggable linting utility for JavaScript
- [Flow](http://flowtype.org/) `0.30` a static type checker for JavaScript

## Make the magic happen
Just clone the repo and start :
```shell
$ git clone https://github.com/LeoLeBras/react-native-redux-starter-kit.git myAwesomeApp
$ cd myAwesomeApp
$ npm i              # Install Node.js components listed in your package.json
```

## Scripts

99% of the time you'll just have to run `npm start` to launch the server. However, here are all the scripts that could get you out of an awkward situation:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:8081` or on the IP address you'll set up. Then just start your emulator or switch to your device. |
|`clean`|Clears your cache and removes all the temporary files. |
|`fresh-install`| Same idea as `npm clean` but this one if when you're in some serious troubles. It will unlink and uninstall everything, clear your cache, and then install all your node modules and link all your assets. ⚠️ Use with precaution… |
|`build-ios`|Builds your app for a production release on the AppStore. |
|`build-android`|Builds your app for a production release on the Google Play Store.|
|`reactotron`|Launch [Reactotron](https://github.com/skellock/reactotron) (only in `_DEV_` mode).|

## Application structure

This application structure should just serve as a guide. Feel free to modify it and even send us some PRs if you find a way to improve it.
To explain the how and the why of this, we'll start by stating that this structure aims to be fractal: files are grouped according to their functionalities rather than their type/name.
This led us to a simple structure with `scenes`, wrapping several `containers` connected to your store, which include little naive/UI-only `components` themselves:

```
...
src
├── bundles             
│   └── xxx             
│       ├── components  
│       ├── containers  
│       └── scenes      
├── config              
│   └── index.js        
├── core                
│   ├── index.js        
│   └── scenes.js       
├── shared              
│   ├── assets          
│   ├── components      
│   └── theme           
├── store               
│   ├── middlewares     
│   ├── modules         
│   │   └── xxx         
│   │       ├── index.js
│   │       └── types.js
│   ├── create.js       
│   ├── index.js        
│   └── reducers.js   
└── index.js            
```

## Development

#### Navigation
We're actually using [`react-native-router-flux`](https://github.com/aksonov/react-native-router-flux) latest implementation `(3.x)`, and it seems to be pretty promising.

The router is set up in `src/core/scenes.js` so this is where you'll define the different routes of your app. For instance:

```js
/* @flow */

import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import { LaunchScene } from '@Launch/scenes'
import { WelcomeScene } from '@Welcome/scenes'

export default Actions.create(
  <Scene key="root">
    <Scene key="launch" component={LaunchScene} title="Launch">
      <Scene key="welcome" component={WelcomeScene} title="Welcome" />
    </Scene>
    ...
  </Scene>
)

```
Thus, feel free to make any modification you'd like in this file.

It sometimes happens that you wish to use some links to manage… well: the navigation 😁! You just have to use `Actions` from `react-native-router-flux` with the `key` string you defined into your `scenes.js` file:

```js
/* @flow */

import React from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Button from '@components/Button'

const MyComponent = (): React$Element<any> => {
  return (
    <View>
      <Text>Launch</Text>
      <Button onPress={Actions.welcome}>
        Start
      </Button>
    </View>
  )
}

export default MyComponent
```

We may change this router for something more stable and customizable in the future, but for the time being: in `react-native-router-flux` we trust!

#### Middlewares

Sometimes you need to write some promises in your app, and guess what:  `react-native-redux-starter-kit` support them now!
Here is an example of a pretty simple promise:

```js
export function getFoo() {
 return {
   types: [FOO_FETCH_REQUESTED, FOO_FETCH_SUCCEEDED, FOO_FETCH_FAILED],
   promise: (client) => client.get('/foo'),
 }
}
```

If you need any other middleware right out the box: make us know!
#### Alias

You may have noticed something like this among my several imports:

```js
import Button from '@components/Button'
```

instead of something more like this:

```js
const Button = require(‘../../../shared/components/Button);
```
It's a little something we can use thanks to React Native, to improve the code readability. You just have to add a `package.json` file written like this:

```json
{
  "name": "@components"
}
```

to use aliases in any folder 🤗🎉.

#### Flow

[Flow](http://flowtype.org) is a static type checker for JavaScript from Facebook. It allows you to type check a variable to make sure that its input and output values match the types you defined.

For instance:
```js
Counter = (props: Props): React$Element<any> => {
```

means that your variable `props` should match the type `Props` you defined.

`React$Element<any>` is a rule defined by Flow itself to represent a React element. This should help you to drastically reduce the amount of non-wanted bugs.

#### .babelrc

> Are you generally just confused and frustrating by how hard it is to use the latest and greatest Babel features on React Native? This preset is for you!

[`babel-preset-react-native-stage-0`](https://github.com/skevy/babel-preset-react-native-stage-0) allows you to use Stage 0 preset from Babel and then enjoy all the good features you like. If you need decorators for instance, just add `decorator-support` in your `.babelrc` file:

```js
{
  "presets": ["react-native-stage-0/decorator-support"]
}
```

#### react-native link

You may have heard about [`rnpm`](https://github.com/rnpm/rnpm), a package manager for React Native such as `npm`. Since August 2016, `rnpm` is part of React Native so all its features are now supported by RN.

Simply by running `react-native link <package name>`, you'll link the package in iOS and Android specific files.

One of the coolest feature is the ability to install your fonts, just by adding them in `src/shared/assets ` and running: `react-native link assets` 🤗🎉.

## Missing doc?

Having a trouble? Facing some issues? Need more informations? Just post an issue or send a PR, we'll be happy to help you.

## Contributors

This project is maintained by [Léo Le Bras](https://twitter.com/Leo_LeBras) and [Charles Mangwa](https://twitter.com/Charles_Mangwa), come say hi to us on Twitter whenever you want! 😊
