# todolist

use npm run


    "start": "react-scripts start",
    "build": "npm run test && react-scripts build",
    "test": "jest",
    "eject": "react-scripts eject",
    "storybook": "start-storybook -p 6006 -s public",
    "prestart": "npm run build:tailwind && lessc src/styles/main.less src/styles/antd.scss --js",
    "prebuild": "npm run build:tailwind",
    "build:tailwind": "postcss src/styles/tailwind.scss -o src/styles/main.scss",
    "build-storybook": "npm run build:tailwind && lessc src/styles/main.less src/styles/antd.scss --js &&build-storybook -s public"
