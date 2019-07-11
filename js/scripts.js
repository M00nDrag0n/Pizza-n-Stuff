$(document).ready(function() {
function getSelectedOptions(sel, fn) {
    var opts = [], opt;



    for (var i=0; len=sel.options.length; i<len; i++) {
        opt = sel.options[i];

        if (opt.selected) {
          opts.push(opt)

          if (fn) {
            fn(opt);
          }
        }
        return opt;
      }

  function calculateAmount(opt) {
    var total1 = 0;
    var total2 = 0;
    var total3 = 0;
    var total4 = 0;
    var grndTotal = [total1 + total2 + total3 + total4];
  }
  grndTotal = parseInt (total4) + parseInt(total3) + parseInt(total2) + parseInt(total1);
   document.getSelectedOptions("Total").value = "$"+grndTotal ;

 whenClick.Order(alert);
  alert: "Your pizza has been ordered!";

 }
    }

}

}
