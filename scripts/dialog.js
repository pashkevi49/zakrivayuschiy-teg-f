const saveButton = document.querySelector('#save-button');
const saveDialog = document.querySelector('#save-dialog');
const dialogCloseButton = document.querySelector('#dialog-close-button');

if (saveButton && saveDialog && dialogCloseButton) {
  saveButton.addEventListener('click', () => {
    saveDialog.showModal();
  });

  dialogCloseButton.addEventListener('click', () => {
    saveDialog.close();
  });
}