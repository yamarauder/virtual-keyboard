const body = document.querySelector('body');

const rusLayout = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER',
  'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&#9668;', '&#9660;', '&#9658;',
];

const engLayout = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'ENTER',
  'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&#9668;', '&#9660;', '&#9658;',
];

const rusLayoutCaps = [
  'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'DEL',
  'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER',
  'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#9650;', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&#9668;', '&#9660;', '&#9658;',
];

const engLayoutCaps = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', "'", 'ENTER',
  'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&#9650;', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&#9668;', '&#9660;', '&#9658;',
];

const shiftRusLayout = [
  'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'DEL',
  'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER',
  'Shift', '/', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#9650;', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&#9668;', '&#9660;', '&#9658;',
];
const shiftEngLayout = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'DEL',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'ENTER',
  'Shift', '|', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650;', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&#9668;', '&#9660;', '&#9658;',
];

const amountKey = [
  '"', '№', ';', ':', '?', '=', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
  '<', '>', '?', ',', '/', '.', '`', '-',
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
  '{', '}', '\\', ':', '"', '|', ' ', '▲', '▼', '►', '◄', "'", ']', ']',
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd',
  'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D',
  'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M',
  'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ф',
  'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Я', 'Ч', 'С',
  'М', 'И', 'Т', 'Ь', 'Б', 'Ю', 'й', 'ц', 'у', 'к', 'е', 'н', 'г',
  'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л',
  'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ё', 'Ё',
];
const nameKey = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
];

const letters = [
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
  'Z', 'X', 'C', 'V', 'B', 'N', 'M',
  'Ё',
  'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ',
  'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э',
  'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю',
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd',
  'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
  'й', 'ц', 'у', 'к', 'е', 'н', 'г',
  'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л',
  'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ё',
];

const rusLang = 'ru';
const engLang = 'eng';
const lang = [rusLang, engLang];
const storageLang = 'storageLang';

export {
  body,
  rusLayout,
  engLayout,
  shiftRusLayout,
  shiftEngLayout,
  amountKey,
  nameKey,
  rusLayoutCaps,
  engLayoutCaps,
  lang,
  rusLang,
  engLang,
  storageLang,
  letters,
};
