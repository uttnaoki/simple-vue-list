# simple-vue-list

# command

## vue
```
# vue インストール
$ npm install vue

# アプリ作成
$ vue create simple-vue-list
❯ Default ([Vue 2] babel, eslint)

$ cd simple-vue-list
$ vue add vuetify
> Default (recommended)

$ npm install vue-router

# サーバー起動
$ npm run serve
```

## firebase
```
$ npm install -g firebase-tools
$ firebase login

# firebaseでプロジェクト作成

$ firebase init
? Are you ready to proceed? (Y/n)
  [Enter]
( ) Hosting: Configure and deploy Firebase Hosting sites
  [space, Enter]
> Use an existing project
  [Enter]
> simple-vue-list (simple-vue-list)
  [Enter]
? What do you want to use as your public directory?
  dist [Enter]
? Configure as a single-page app (rewrite all urls to /index.html)? (y/N)
  y [Enter]
? Set up automatic builds and deploys with GitHub? (y/N)
  [Enter]

$ npm run build

$ firebase deploy
```
- `https://<プロジェクト名>.web.app/`にアクセスします
