## Введение в MongoDB, Mongoose

Для начала ознакомьтесь с материалами по ссылкам:

* [How to install mongodb](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-18-04)
* [Working with Mongo Shell](https://docs.mongodb.com/manual/mongo/#working-with-the-mongo-shell)

Установите mongo, затем попробуйте выполнить несколько комманд в коммандной строке, чтобы понять как работать с Mongo через CLI (Command line interface). 

Теперь установите mongoose. Вам предстоит выполнить несколько небольших заданий, чтобы научиться работать с Mongoose и MongoDB. Пишите весь код в одном файле. Вы будете работать с пользователями, продуктами и заказами. Это может быть рабочая модель сайта онлайн-покупок, заказов еды на дом и тд.

### Задания

1. Подключитесь к БД.
2. Создайте 2 схемы, а затем на основе них 2 модели: User, Product.
3. Изучите возможные типы полей в документации MongoDB, затем добавьте каждой модели по 3-7 полей.
4. Свяжите продукты и пользователей. Пока что мы добавим связь(связь может быть и в виде вложенности), отвечающую за любимые продукты пользователей (Например: `Пользователь Петя любит продукты [Бананы, Апельсины, Мандарины]`). Надо добавить пользователю поле favouriteProducts.
5. Добавьте несколько записей в БД.
6. Добавьте модель Order, которая опять же будет связкой между User и Product. Order может содержать часть данных из User и часть из Product, либо просто ссылаться на них.
7. Добавьте несколько заказов (записей Order).
8. Найдите все заказы и выведите в консоль.
9. Найдите заказы определенного пользователя и выведите в консоль
10. Поэкспериментируйте с другими запросами. Вы можете использовать различные методы и свойства, предоставляемые mongoose: `where(), select(), sort, limit и другие`. Чем отличаются запросы с `callbacks` от запросов с использованием `exec()`? 
11. Теперь очистите свою базу (drop).
12. Не забудьте закрыть соединение с БД.

Данный скрипт похож на работу с тестовой БД. Создается новая БД, наполняется данными, тестируем нужные функции, а затем подчищаем БД. Это принцип, по которому в мире реальной разработки работают с БД для тестирования.
