# auth-app
Simple login and authentication screen using React Native in the front and Firebase in the back

## Installation
### Mac
**1**. Installation on Mac is pretty easy. First you should go to the Apple App Store and download XCode if you haven't already as it is required for the iPhone emulator

**2**. Clone the repository and install the required node modules.

   `git clone https://github.com/devyboy/auth-app.git && cd auth-app && npm install`
   
**3**. Then you need to **globally** install the `react-native-cli` tools.

   `npm install -g react-native-gli`
   
   \*Remember to install this globally with the -g flag or else it won't work.
   
**4**. Now you can run the app.

   `react-native run-ios`
   
   After some packaging, an iPhone emulator should open and run the application on it. If this doesn't happen, check to see if XCode is updated to the latest version.

## Windows/Linux
Installation for Windows and Linux is a little bit longer but not too hard.

**1**. Download and install Android Studio here: https://developer.android.com/studio/index.html. This is required for the Android emulator.

**2**. Create an Android Virtual Device (AVD), the instructions are listed here: https://developer.android.com/studio/run/managing-avds.html#createavd. Once the AVD is created, start it up and leave it alone for now.

**3**. Now you can clone the repository and install the node modules.

   `git clone https://github.com/devyboy/auth-app.git && cd auth-app && npm install`

**4**. Then you need to **globally** install the `react-native-cli` tools.

   `npm install -g react-native-gli`
   
   \*Remember to install this globally with the -g flag or else it won't work.
   
**5**. With your Android Emulator running, you can now run the application.

   `react-native run-android`
### Keep in mind that you need to start the Android emulator manually if you want to run the application. It doesn't start automatically like for Mac.

#### Alternatively:

If you have a physical Android device you would rather use instead of a virtual one, you can run the app on that instead. Just plug it in via USB and enable USB Debugging in your device settings. Now when you run `react-native run-android` it should start on your device. Remember to close the emulator if you do this or else it would prioritize that over the physical device.
