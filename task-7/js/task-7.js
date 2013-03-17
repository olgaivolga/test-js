var AppState = { username: "" };
var Family = ["Саша", "Юля", "Елизар"]; // Моя семья

var Start = Backbone.View.extend({
    el: $("#block"), // DOM элемент widget'а
    template: _.template(this.$('#start').html()), //what is _?
    events: {
        "click input:button": "check", // Обработчик клика на кнопке "Проверить"
    },
    check: function () {
        AppState.username = this.$("input:text").val(); // Сохранение имени пользователя
        if (_.contains(Family, AppState.username))  
            router.navigate("!/success", true); // переход на страницу success
        else
            router.navigate("!/error", true); // переход на страницу error
    },
	render: function () {
		this.$el.html(this.template());
    }
});

var Success = Backbone.View.extend({
    el: $("#block"), // DOM элемент widget'а
    template: _.template(this.$('#success').html()),
    render: function () {
        this.$el.html(this.template(AppState));
    }
});

var Error = Backbone.View.extend({
    el: $("#block"), // DOM элемент widget'а
    template: _.template(this.$('#error').html()),
    render: function () {
        this.$el.html(this.template(AppState));
    }
});

Views = { 
    start: new Start(),
    success: new Success(),
    error: new Error()
};

var AppRouter = Backbone.Router.extend({
    routes: {
        "": "start", // Пустой hash-тэг
        "!/": "start", // Начальная страница
        "!/success": "success", // Блок удачи
        "!/error": "error" // Блок ошибки
    },

    start: function () {
        if (Views.start != null) {
            Views.start.render();
        }
    },

    success: function () {
        if (Views.success != null) {
            Views.success.render();
        }
    },

    error: function () {
        if (Views.error != null) {
            Views.error.render();
        }
    }
});
var router = new AppRouter();

Backbone.history.start();