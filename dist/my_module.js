let message = 'Я сообщение из другого модуля';

module.exports.myMessage = message;

module.exports.createMessage = () => {
  let firstPart = "Я функциональное ";
  let secondPart = 'сообщение из другого модуля';
  return firstPart + secondPart;
}