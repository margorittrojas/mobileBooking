# Application Information
(Este proyecto fue ejecutado con apk)
Repository (link) [App-Remesas_Android](https://bitbucket.org/proyectosy/challenge/branch/feature/bookinga)
Commit Date: 23/001/2024

# Mobile, Web and API test automation

Mobile automation framework based on Cucumber - WebdriverIO - NodeJS - TypeScript - Axios - Allure Reports.

## Table of contents

* [Pre-requisites](#Pre-requisites)
+ [Mobile Exclusive](#Mobile-Exclusive)
	+  [Installing Appium - Android Studio](#Installing-Appium-Android-Studio)
	+  [Configure environment variable](#Configure-environment-variable)
	+  [Creating new virtual device](#Creating-new-virtual-device)

+  [First time run](#First-time-run)

*  [Folders structure](#Folders-structure)
	+  [App](#App)
	+  [commons](#commons)
	+  [Config](#Config)
	+  [features](#features)
	+  [pages: Using Page Object Model Pattern](#pages)
	+  [stepDefinitions](#stepDefinitions)
+  [package.json](#package.json)
+  [Page Object Generator (Outdated)](#Page-Object-Generator-Outdated)
*  [Change Log](#change-log)
*  [Contributing](#contributing)

#### Configure environment variable

1. Right click the Computer icon.
2. Choose Properties from the context menu.
3. Click the Advanced system settings link.
4. Click Environment Variables. 
5. In the section System Variables, create or edit **"ANDROID_HOME"** variable and set path of Android sdk. For example
```
Name  : ANDROID_HOME
Value : C:\Users\USERID\AppData\Local\Android\Sdk
```
6. In the section System Variables, create or edit **"JAVA_HOME"** variable and set path of Android sdk. For example
```
Name  : JAVA_HOME
Value : C:\Program Files\Java\jdk1.8.0_241
```

7. In the section System Variables, create or edit **"path"** variable and set path of Android sdk platform-tools. For example
```
Name  : path
Value : C:\Users\USERID\AppData\Local\Android\Sdk\platform-tools
```
8. In the section System Variables, create or edit **"path"** variable and set path of Android emulator. For example
```
Name  : path
Value : C:\Users\USERID\AppData\Local\Android\Sdk\emulator
```  
#### **Creating new virtual device:**

	  - Open **Android Studio** and go to: **Tools** -> **AVD Manager** -> **Create Virtual Device...** 
	  - Select **Nexus 6** - > **Next** -> **API Level 10** -> **Next** -> Then rename device as Nexus 6 -> **Finish**.

	**List of devices connected**

	With this command we can see a list of emualtors available on our local machine.

	```

	$ emulator -list-avds

	```

	**Open an emulator**

	We can open an emulator with the command **emulator** *@device_name* from the list of devices availables on local machine.
	For example:

	```

	$ emulator @Pixel 4 API 31

	```


# First time run

As root or admin.
### Run tests by tag @run

To install dependencies:
```console
$ npm install
```
With an emulator open to execute mobile testing on local machine.

```console
$ npm run start-mobile
```

### Generate Allure-Reports after an execution

```console
$ npm run clean-report
```

To Open an Allure Report

```console
$ npm run open-report
```
# Folders structure
1. Features.
2. stepDefinitions/mobile.
3. Pages/mobile.

