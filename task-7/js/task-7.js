var AppState = Backbone.Model.extend({
    defaults: {
        username: "",
        state: "start"
    }
});

var appState = new AppState();

var Family = ["Саша", "Юля", "Елизар"]; // Моя семья

var Block = Backbone.View.extend({
    el: $("#block"), // DOM элемент widget'а

    // templates for different states of this view.
    templates: {
        "start": _.template(this.$('#start').html()),
        "success": _.template(this.$('#success').html()),
        "error": _.template(this.$('#error').html())
    },

    initialize: function () { // Подписка на событие модели
        this.model.bind('change', this.render, this);
    },

    render: function () {
        var state = this.model.get("state");
        this.$el.html(this.templates[state](this.model.toJSON()));
    },

    events: {
        "click input:button": "check", // Обработчик клика на кнопке "Проверить"
    },

    check: function () {
            var username = this.$("input:text").val();
            var found = (_.contains(Family, username));
            appState.set({ // Сохранение имени пользователя и состояния
                "state": found ? "success" : "error",
                "username": username
            }); 
    }
});

var block = new Block({ model: appState });
appState.trigger("change");

var AppRouter = Backbone.Router.extend({
    routes: {
        "": "start", // Пустой hash-тэг
        "!/": "start", // Начальная страница
        "!/success": "success", // Блок удачи
        "!/error": "error" // Блок ошибки
    },

    start: function () {
        appState.set({ state: "start" });
    },

    success: function () {
        appState.set({ state: "success" });
    },

    error: function () {
        appState.set({ state: "error" });
    }
});
var router = new AppRouter();

appState.bind("change:state", function () { // подписка на смену состояния для роутера
    var state = this.get("state");
    if (state == "start")
        router.navigate("!/", false); // false потому, что нам не надо 
                                          // вызывать обработчик у Router
    else
        router.navigate("!/" + state, false);
});

Backbone.history.start();