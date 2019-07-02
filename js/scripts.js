$(document).ready(function() {
function getSelectedOptions(sel, fn) {
    var opts = [], opt;

    for (var i=0, len=sel.options.length; i<len; i++) {
        opt = sel.options[i];

        if (opt.selected) {
          opts.push(opt)

          if (fn) {
            fn(opt);
          }
        }

    }

}

}
