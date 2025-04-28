import {resetForm} from './validate.js';

// Функция открытия модального окна
export function openModal(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEsc);
}

// Функция закрытия модального окна
export function closeModal(popup) {
  if (popup.classList.contains('popup_type_edit') || popup.classList.contains('popup_type_new-card') || popup.classList.contains('popup_type_avatar')) {
    resetForm(popup);
  }
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEsc);
}

// Функция закрытия окна нажатием на Escape
export function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}

// // Функция блокировки кнопки
// export function blockSubmitButton(buttonElement, buttonText = 'Сохранение...') {
//   buttonElement.textContent = buttonText; //Изменяем текст кнопки, чтобы показать процесс загрузки
//   buttonElement.classList.add('popup__button_disabled');
//   buttonElement.disabled = true; // Добавляем disabled, чтобы кнопка была неактивна
// }

// // Функция разблокировки кнопки
// export function unblockSubmitButton(buttonElement, buttonText = 'Сохранить') {
//   buttonElement.textContent = buttonText; // Возвращаем исходный текст
//   buttonElement.classList.remove('popup__button_disabled');
//   buttonElement.disabled = false; // Удаляем disabled
// }

// // Функция блокировки полей ввода
// export function disableFormInputs(formElement) {
//   const inputs = Array.from(formElement.querySelectorAll('input')); // Находим все input в форме
//   inputs.forEach(input => {
//     input.disabled = true; // Делаем каждый input неактивным
//   });
// }

// // Функция разблокировки полей ввода
// export function enableFormInputs(formElement) {
//   const inputs = Array.from(formElement.querySelectorAll('input')); // Находим все input в форме
//   inputs.forEach(input => {
//     input.disabled = false; // Делаем каждый input активным
//   });
// }


// // Функция обработки отправки формы (с защитой от повторных запросов)
// export async function submitForm(formElement, apiCall, buttonElement, initialButtonText = 'Сохранить') {
//   let isSaving = false;  // Флаг для отслеживания состояния сохранения

//   if (isSaving) {
//     console.log("Сохранение уже выполняется, запрос игнорируется.");
//     return; // Предотвращаем повторные запросы
//   }

//   isSaving = true; // Устанавливаем флаг, что сохранение в процессе

//   try {
//     blockSubmitButton(buttonElement); // Блокируем кнопку

//     // Блокируем поля ввода
//     disableFormInputs(formElement);

//     const data = getFormData(formElement);  // Функция для получения данных из формы (нужно реализовать)

//     const result = await apiCall(data);  // Вызываем функцию для отправки данных на сервер
//                                         // apiCall должна быть async функцией

//     console.log('Успешно отправлено:', result);

//     // Сброс формы (если нужно)
//     resetForm(formElement.closest('.popup')); // Сброс формы внутри попапа

//     // Закрыть модальное окно после успешной отправки.
//     closeModal(formElement.closest('.popup'));

//   } catch (error) {
//     console.error('Ошибка при отправке данных:', error);
//     // Обработка ошибки (например, отображение сообщения пользователю)

//   } finally {
//     unblockSubmitButton(buttonElement, initialButtonText); // Разблокируем кнопку
//     enableFormInputs(formElement); // Разблокируем поля ввода
//     isSaving = false; // Сбрасываем флаг
//   }
// }
