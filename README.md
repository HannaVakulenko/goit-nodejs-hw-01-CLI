# goit-nodejs-hw-01-CLI

$ node index.js --help
Usage: index [options]

Options:
-a, --action <type> choose action: list, get -i, add -n -e -p, remove -i
-i, --id <type> user id
-n, --name <type> user name
-e, --email <type> user email
-p, --phone <type> user phone
-h, --help display help for command

## Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

https://monosnap.com/file/zTqQdPKFhL0kF4FU4efF7Bx2zlXlYq

## Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

https://monosnap.com/file/5muoEHQgIfF1zUcqSPV20AUsC8v6Zn

## Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

https://monosnap.com/file/znG47H6mQFsxyU2ZPOYBdhuiS7IQDk

## Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

https://monosnap.com/file/o0VQWXSbMjIXwCB515uFW2XLlN0tgO
