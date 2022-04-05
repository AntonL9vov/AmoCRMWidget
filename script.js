define(['jquery'], function ($) {
  var CustomWidget = function () {
    var self = this,
        system = self.system;

    this.get_lcard_ifo = function () {
      if(self.system().area === 'lcard'){
        let fields = $('.linked-form__field__label');
        let summs = fields.filter(e => {
          return (fields[e].outerText === 'Первое' || fields[e].outerText === 'Второе' || fields[e].outerText === 'Сумма')
        })
        let first = Number(summs[0].parentNode.children[1].children[0].value);
        let second = Number(summs[1].parentNode.children[1].children[0].value);
        summs[2].parentNode.children[1].children[0].value = String(first + second);
      }
    }


    this.callbacks = {
      settings: function () {
      },
      dpSettings: function () {
      },
      init: function () {
        if(self.system().area === 'lcard'){
          self.ids = self.get_lcard_ifo();
        }
        return true;
      },
      bind_actions: function () {
        return true;
      },
      render: function () {
        var lang = self.i18n('userLang');
        w_code = self.get_settings().widget_code;
        return true;
      },
      contacts: {
        selected: function () {

        }
      },
      leads: {
        selected: function () {

        }
      },
      onSave: function () {

        return true;
      }
    };
    return this;
  };
  return CustomWidget;
});