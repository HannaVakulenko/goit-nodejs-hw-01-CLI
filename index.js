const { program } = require("commander"); // Підключення пакету commander для зручного парсу аргументів командного рядка

const contacts = require("./contacts"); // Підключення модуля contacts з функціями для роботи з контактами

//Готова функція invokeAction(), яка отримує тип виконуваної дії і необхідні аргументи.  Функція викликає відповідний метод з файлу contacts.js, передаючи йому необхідні аргументи.
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      return;
    case "get":
      const contactById = await contacts.getContactById(id);
      if (!contactById) {
        throw new Error(`Contact with id ${id} is not found!`);
      }
      console.table(contactById);

      break;
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.table(newContact);
      break;
    case "remove":
      const removedContact = await contacts.removeContact(id);
      console.table(removedContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// Програмні опції - дані, які передаються командеру для запуску команд в терміналі
program
  .option(
    "-a, --action <type>",
    "choose action: list, get -i, add -n -e -p, remove -i"
  )
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv); //парсить вхідні параметри

const argv = program.opts();

invokeAction(argv);
