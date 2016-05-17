export default function ignoreYellowBoxes() {
  console.ignoredYellowBox = [
    'Warning: ReactNative.createElement',
    'Warning: ReactNative.Children',
    'Warning: ReactNative.cloneElement',
  ]
}
