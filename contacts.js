// імпорт модулів fs (у версії, яка працює з промісами - fs/promises) і path для роботи з файловою системою
const fs = require("node:fs/promises");
const path = require("node:path");
// імпорт модуля crypto
const crypto = require("node:crypto");

//шлях до файлу contacts.json через методи модуля path
const contactsPath = path.join(__dirname, "db/contacts.json");

// Додавання функцій для роботи з колекцією контактів. У функціях використовується модуль fs та його методи readFile() і writeFile().

// Функція, що повторюється - зчитування данних з файлу
async function readContacts() {
  const data = await fs.readFile(contactsPath, "utf-8");

  return JSON.parse(data);
}

// Функція, що повторюється - запис данних в файл
async function writeContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

// Повертає масив контактів.
async function listContacts() {
  const contacts = await readContacts();

  return contacts;
}

// Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
async function getContactById(contactId) {
  const contacts = await readContacts();

  const contact = contacts.find((contact) => contact.id === contactId);

  return contact || null;
}

// Повертає об'єкт доданого контакту.
async function addContact(name, email, phone) {
  const contacts = await readContacts();
  const newContact = { id: crypto.randomUUID(), name, email, phone };

  contacts.push(newContact);

  await writeContacts(contacts);

  return newContact;
}

async function updateContactById(id, name, email, phone) {
  const contacts = await readContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, name, email, phone }; //знайдений по індексу в масиві об'єкт, який оновлюємо
  await writeContacts(contacts);
  return contacts[index]; // повертає оновлений об'єкт
}

// Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
async function removeContact(contactId) {
  const contacts = await readContacts();

  const index = contacts.findIndex((contact) => contact.id === contactId);

  if (index === -1) {
    return null;
  }

  const [res] = contacts.splice(index, 1); // const [res] - деструктурізація елементу масиву

  await writeContacts(contacts);

  return res; // повертає вирізаний об'єкт
}

// експорт створених функцій через module.exports
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
};
