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

## Link with your Firebase
Since this app uses Firebase for authentication, you need to set up a Firebase project and supply the proper credentials.

**1**. Go to https://console.firebase.google.com/ and click on 'Add project'. Name your project anything, choose your region and click 'Create Project'. 

**2**. Once your project is created, click the bubble at the top that says 'Add Firebase to your web app'. A JSON object will appear with a bunch of API keys and identifying information.

**3**. Go back to your project and open `/src/App.js`. Now put all of the info supplied from Firebase into the blank spaces at the top of the file respectively.

**4**. Once this is done, go back to the Firebase Console and click 'Develop' then 'Authentication' on the sidebar. Here you will set up the methods for authenticating users from the app.

**5**. Click 'Set up sign-in method', then click 'Email/Password', then enable it and click save.

**6**. Now the authentication should work through Firebase. If a user puts in an email/password combination that doesn't exist already, the app will create an account for them using those credentials. You can also see and manage the users that register accounts under the 'Users' tab.
