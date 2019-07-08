# Time There using Flutter for Webpage

I originally created this app to count how many days it takes for my trip to the USA.

I live in Sydney and the time zone is very different, I use this system to know:

- what time is it now

- what hours were a few hours behind (for example when I received a certain email)

- what hours will be in X hours (in case I need to schedule myself for an appointment)

  

## For Mobile version look at: 

- https://github.com/leodecm3/TimeThereFlutterMobile


  

## Screenshot: 



| ![Screenshot_1562587146.png](https://github.com/leodecm3/time_there_flutter_web/blob/master/Screenshot/Screenshot_1562587146.png)    | ![Screenshot_1562587162.png](https://github.com/leodecm3/time_there_flutter_web/blob/master/Screenshot/Screenshot_1562587162.png)    |
| ---- | ---- |





## Getting Started

Flutter web is under development, so if you run into any problems, simple create a new project, and replace the files:

```
lib\main.dart
lib\contdownpag.dart
web\index.html   <-- to run as a PWA I modified index.html
web\service-worker.js
web\js\vue.min.js
web\img\icon.png
web\img\iconAndroid.png
web\css\style.css
web\assets\fonts\*
web\assets\FontManifest.json
```

Also include it in `pubspec.yaml` :

```yaml

# nothing
# on mobile version it requires `intl: ^0.15.7` , IDK why on fluter-web its not required

``` 

- `intl: ^0.15.7` is used to get date formation



## Running the tests

Same as any flutter code:

```bash

flutter pub global run webdev serve --auto restart
start chrome --new-window --incognito --new-window http://localhost:8080/

```

## Build

```bash

flutter pub global run webdev build

```

## License

This project is licensed see the [LICENSE.md](LICENSE.md) file for details



# time_there_flutter_mobile

""GIT_20190708192944_TimeThereFlutterMobile""   
"TimeThereFlutterMobile"  

<!-- 

A new Flutter project.

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)

For help getting started with Flutter, view our
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

 -->