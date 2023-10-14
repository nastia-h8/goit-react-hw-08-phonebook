import toast from 'react-hot-toast';

const checkContactName = (contactList, name) => {
  return contactList.find(
    contact => contact.name.toLowerCase() === name.trim().toLowerCase()
  );
};

const checkContactNumber = (contactList, number) => {
  const regex = /\D/g;
  return contactList.find(
    contact =>
      contact.number.replace(regex, '') === number.trim().replace(regex, '')
  );
};

export function checkExistingName(contactList, contact) {
  const isNameInContactList = checkContactName(contactList, contact.name);

  if (isNameInContactList) {
    toast.error(`${contact.name} is already in contacts`);
    return true;
  } else {
    return false;
  }
}

export function checkExistingNumber(contactList, contact) {
  const isNumberInContactList = checkContactNumber(contactList, contact.number);
  if (isNumberInContactList) {
    toast.error(
      `This number is already saved in contacts as ${isNumberInContactList.name}`
    );
    return true;
  } else {
    return false;
  }
}
