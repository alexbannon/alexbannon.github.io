function navigate() {
  var paths = window.location.pathname.split('/');
  var order = paths[paths.length - 1];

  $('.sales-order-tab-link')[3].click()
  window.setTimeout(() => {
    var numChildren = $('#sales-order-invoices').children('table').children('tbody').children().length;
    if (numChildren > 1) {
      console.log('error too many invoices for order: ' + order);
    } else {
      var invoiceNum = $('#sales-order-invoices').children('table').children('tbody').children().children()[0].innerHTML;
      var url = "/shop/invoices/" + invoiceNum + "/allocation";
      window.open(url);
      window.close();
    }
  }, 500)
}


window.onload=navigate;
