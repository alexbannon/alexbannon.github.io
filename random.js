function clickForm() {
  $('form[action*="/enable-manual-allocation"]').submit();
}

window.onload = clickForm;
