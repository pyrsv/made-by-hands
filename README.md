**Подготовка**


1. ` npm install yarn -g`  у кого нет глобально yarn  
2. `yarn global add prettier eslint`  установка линтеров глобально

**Клонирование проектов и установка зависимостей**

1. `git clone https://github.com/pyrsv/made-by-hands.git`
2. `cd made-by-hands`
3. `yarn install`
4. `cd client`
5. `yarn install`

**Настройка линтеров в vscode**
1. Создать workspace:  
   Находясь в корне проекта _File >>> Save workspace as... >>>_ сохраняем файл с расширением
   .code-workspace в корне проекта, название любое.  
   В итоге в корне должен появится файл (например) final.code-worksapce
2. Настроить workspace:   
   Нажать комбинацию клавиш ctrl + shift + p, в открывшемся сверху поле поиска написать
   Preferences: Open Workspace Settings (JSON), открыть файл и скопировать в него
   ВЕСЬ код ниже, заменив то что есть :
	
```{
  "folders": [
    {
      "path": "."
    }
  ],
  "settings": {
    "eslint.workingDirectories": [
      {
        "directory": "client",
        "changeProcessCWD": true
      }
    ]
  }
}
```


3. Настроить vscode
   Нажать комбинацию клавиш `ctrl+shift+p`, в открывшемся сверху поле поиска написать
  ` Preferences: Open Settings (JSON)`, открыть файл, в который добавить такой код
   
   ```"editor.defaultFormatter": "esbenp.prettier-vscode", 
   "editor.formatOnSave": true, // форматирование по нажатию на ctrl + s
   "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true,
    }
    ```
4. Установить плагины Prettier - Code formatter и EsLint(самый первый в списке,
   где больше всего скачиваний)

5. Перезапустить vscode и можно перезагрузить компьютер 

6. Проект запускать открывая тот файл, который мы положили в корень проекта,
   двойным кликом по `final.code-worksзфce`, если windows спросит чем открывать, вручную 
   выбрать vscode

Готово!  
P.S Ожидаемое поведение:  
- код форматируется при сохранении
- код подчеркивается при, к примеру, не используемой переменной


работа с ветками
1. `git checkout -b branch-name ` создать новую ветку
2. `yarn add npm-package-name`  установить новый пакет 
   ( пакеты устанавливать после перехода в новую ветку находясь
    в директории `./client/` )

.... // работа с фичей
3.` git add .`  добавить все измененные файлы
4. `git commit -m "commit message"`
5.` git push origin branch-name`  запушить ветку в удаленный репозиторий
6. создать пулл реквест и сообщить об этом в беседу


влитие ветки develop к себе(при необходимости продолжить работу после заведомо известных 
изменениях в ветке develop)
1. `git checkout develop `
2. `git pull origin develop`
3. `git checkout branch-name`
4. `git merge develop `
......
5.` git add .`
6. `git commit -m "commit message"`
7. `git push origin branch-name`

запуск проекта

фронт:
1. `cd client/`
2. `yarn start`
бек :
1. `yarn start`  из корня
фронт + бек:
1. `yarn dev`  из корня


авторизация в postman
0. запустить бек
1. POST запрос на` http://localhost:5000/customers/login`
   во вкладке `BODY`, выбрать `JSON` и вставить это:
   
```
{
  "loginOrEmail": "final.shop.fe12@gmail.com",  
  "password": "1111111"
}
```
   в ответе получите это:
```
{
  success: true,
  token: 'Bearer .....'
}
```
Полученный токен скопировать и положить во вкладке HEADERS в поле Authorization(копировать без кавычек)

все последующие запросы отправлять с этим заголовком(хедером)




