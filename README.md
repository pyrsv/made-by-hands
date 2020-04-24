### Настройка проекта и работа с терминалом ###

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
    в директории `./client/`)  
...
3. `git add .`  добавить все измененные файлы
4. `git commit -m "commit message"`
5. `git push origin branch-name`  запушить ветку в удаленный репозиторий
6. создать пулл реквест и сообщить об этом в беседу


влитие ветки develop к себе(при необходимости продолжить работу после заведомо известных 
изменениях в ветке develop)
1. `git checkout develop `
2. `git pull origin develop`
3. `git checkout branch-name`
4. `git merge develop `  
......
5. `git add .`
6. `git commit -m "commit message"`
7. `git push origin branch-name`

запуск проекта

фронт:  
1. `cd client/`
2. `yarn start`  

бек :  
1. `yarn start` из корня  

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

## Файловая структура проекта ##

```
--- assets
|   |   //  global assets for whole app
|   |   --- img 
|   |   --- fonts ?
--- Components
|   --- ExampleComponent
|   |   --- ExampleComponent.js  
|   |   --- styles.js
|   |   --- img ?
|   --- UI
|       //  interface reusable dumb components (have no logic) and prohibited for editing
--- Pages
|   --- IndexPage.js
|   --- CartPage.js
|   --- etc.
    //  No styles and no logic here, only COMPLETED components please!
--- store
|   --- actions
|   |   --- exampleActions.js
|   |   --- authActions.js
|   --- types
|   |   --- exampleTypes.js
|   |   --- authTypes.js
|   --- middlewares
|   |   --- localStorageMiddleware.js
|   |   --- exampleMiddleware.js
|   --- reducers
|   |   --- exampleReducer.js
|   |   --- authReducer.js
|   |   --- rootReducer.js
|   --- configureStore.js
--- utils
|   --- API
|   |   --- exampleReusableApiFunction.js
|   |   --- anotherReusabeFunctionInteractingWithApi.js
|   |   --- setAuthToken.js
|   --- someReusableFunction.js
```

## Работа с Redux ##

В Redux выносим исколючитено ту логику которая необходима для функционирования нескольких компонентов.

Каждая логическая единица должна быть разбита на 3 структурных. Примеры ниже.

Типы описываем в отдельном файле, который созадем в директории `types`.     
_client/src/store/types/authTypes.js_
```javascript
export const USER_LOGIN_INIT = 'USER_LOGIN_INIT';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
```
Редьюсер описываем в отдельном файле в деректории `reducers`. Аргумент `action` ДОЛЖЕН быть деструризован
как `{ type, payload }`.  
_client/src/store/reducers/authReducer.js_
```javascript
import {
	USER_LOGIN_INIT,
	USER_LOGIN_ERROR,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
} from '../types/authTypes';

const initialState = {
	currentUser: null,
	isLoading: false,
	error: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case USER_LOGIN_INIT:
			return { ...state, isLoading: true };
		case USER_LOGIN_SUCCESS:
			return { ...state, currentUser: payload, error: null, isLoading: false };
		case USER_LOGIN_ERROR:
			return { ...state, error: payload, isLoading: false };
		case USER_LOGOUT:
			return { ...state, currentUser: null };
		default:
			return state;
	}
};

```
Редьюсер необходимо добавить в rootReducer который находится по пути _client/src/store/reducers/rootReducer.js_
ВАЖНО, ключ по которому кладем редьюсер, должен быть сокращением от имени редьюсера, например:
`authReducer => auth, exampleReducer => example`.  
В итоге должно получится так:  
_ _client/src/store/reducers/rootReducer.js__
```javascript
import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { infoCarouselReducer } from './infoCarouselReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	infoCarousel: infoCarouselReducer,
});

export default rootReducer;

```
Actions и ActionCreators описываем в отдельном файле в деректории `actions`.
ActionCreator ДОЛЖЕН быть описан отдельной функцией, даже если имеет только тип и не имеет
 `payload` , и ДОЛЖЕН НАХОДИТСЯ  в начале файла после импортов.  
 Название файла должно быть множественным, то есть `actionS`, даже если экшн один.
 _client/src/store/reducers/authReducer.js_
```javascript
import setAuthToken from '../../utils/setAuthToken';
import { handleUserLogin, handleGetUser } from '../../utils/API';
import {
	USER_LOGIN_INIT,
	USER_LOGIN_ERROR,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
} from '../types/authTypes';



const userLoginInit = () => ({
	type: USER_LOGIN_INIT,
});

const userLoginSuccess = user => ({
	type: USER_LOGIN_SUCCESS,
	payload: user,
});

const userLoginError = error => ({
	type: USER_LOGIN_ERROR,
	payload: error,
});

export const userLogout = () => dispatch => {
	setAuthToken();
	dispatch({ type: USER_LOGOUT });
};

export const getUser = () => dispatch => {
	const token = localStorage.getItem('token');

	if (token) {
		setAuthToken(token);
		handleGetUser(token)
			.then(customer => {
				dispatch(userLoginSuccess(customer.data));
			})
			.catch(err => dispatch(userLoginError(err)));
	}
};

export const userLogin = ({ loginOrEmail, password }) => dispatch => {
	dispatch(userLoginInit());
	handleUserLogin(loginOrEmail, password)
		.then(res => {
			const { token } = res.data;
			setAuthToken(token);
			handleGetUser()
				.then(customer => {
					dispatch(userLoginSuccess(customer.data));
				})
				.catch(err => {
					dispatch(userLoginError(err));
				});
		})
		.catch(err => {
			dispatch(userLoginError(err));
		});
};

export const userRegister = data => async dispatch => {
	dispatch(userLoginInit());
	axios
		.post('/customers', JSON.stringify(data), {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then(customer => {
			const { login, password } = data;
			handleUserLogin(login, password)
				.then(res => {
					setAuthToken(res.data.token);
					dispatch(userLoginSuccess(customer.data));
				})
				.catch(err => {
					dispatch(userLoginError(err));
				});
		})
		.catch(err => {
			dispatch(userLoginError(err));
		});
};
```
 
 ## Товары ##  
 
 Товары берем в магазине [SHIFT](https://shift.ua/).  
 Сайт на русском языке, по этому свойства `description` и `parameters` прогоняем через гугл переводчик.
 
 **Пример объекта товара**   
 _*вопросительным знаком помечены необязательные свойства, но каждый должен создать хотя бы 2 товара
 со скидкой и 4-5 со свойством parameters_
 ```
{
    "name": "Karl Kani Signature corduroy tape waist bag ",
    "currentPrice": 25.00,
  ? "previousPrice": 20, 
    "categories": "waist bags",
    "imageUrls": [
        "https://res.cloudinary.com/dnorz3pyf/image/upload/v1586854755/waist%20bags/13977708-1-camelblack_ncxpsa.jpg",
        "https://res.cloudinary.com/dnorz3pyf/image/upload/v1586854755/waist%20bags/13977708-2_prydxs.jpg",
        "https://res.cloudinary.com/dnorz3pyf/image/upload/v1586854755/waist%20bags/13977708-3_yx1emi.jpg","https://res.cloudinary.com/dnorz3pyf/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1586854755/waist%20bags/13977708-3_yx1emi.jpg",
        "https://res.cloudinary.com/dnorz3pyf/image/upload/v1586854755/waist%20bags/13977708-4_gnqr8z.jpg"
    ],
    "quantity": 50,
    "color": "yellow",
    "productUrl":"/waist-bags",
    "brand":"Karl Kani",
  ? "parameters":[
        "Adjustable body strap",
        "Secure clasp fastening",
        "External pocket",
        "Zip closure"
    ],
    "description":[ 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus ea amet numquam nihil in officiis explicabo pariatur totam nam, veritatis, ratione veniam maiores deserunt vitae voluptas nesciunt sed inventore. "
    ]
}
```

**name** - название товара, ДО 40 символов, больше не позволяет верстка  
**currentPrice** - текущая цена, со скидкой   
**previousPrice** - предыдущая цена, без скидки  
**categories** - пока указывает ту категорию к которой принадлежит наш товар, в дальнейшем возможно все изменится  
**imageUrls** - массив ссылок на фото товара, от 2 до 4  
**quantity** - количество в наличии, пока указывает рандомно, но в рамках разумного
**color** - цвет, одним словом, на английском  
**productUrl** - статическая ссылка на товар, пока указываем так, если категория _bags_, то _/bags_  
**brand** - название бренда, маленькими буквами без подчеркиваний, дефисов и прочего,
если слов несколько, то стввим пробел     
**parameters** - массив параметров, 2-5 свойств, будут выводится списком, по этому и массив  
**description** - описание, массив потому что абзацев у нас может быть много, по этому каждый 
отдельный обзац - элемент массива.

 **Доступные категории**
 
 В каждой категории должно быть 10-20 товаров. Те у кого 2 категории, создают по 7-10
 товаров КАЖДОЙ категории, те у кого 1 - создают 15-20 товаров. Больше - только приветствуется. 
  
 
 Каждый товар можно добавить в базу данных через POSTMAN
 предварительно авторизовавшись и положив токен в заголовок запроса, но скорее всего придумаем что-то более эффективное что бы не делать руками работу ;)   
 Инструкция по авторизации есть выше, инструкция подобавлению товаров есть [тут](https://saribeg.github.io/DAN.IT-API-Documentation/?language=JavaScript#add-new-product).
  
 - рюкзаки - _Вадим_
 - поясные сумки - _Саша_
 - кошельки - _Никита_
 - кепки - _Стас_
 - шапки- _Стас_
 - часы - _Никита_
 - сумки - _Ксюша_
 
 **Цвета**    

Доступны любые цвета, главное не брать много разных, в приоритете:
_белый, черный, желтый, коричневый, красный, синий, зеленый_. 

