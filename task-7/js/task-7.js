var Controller = Backbone.Router.extend({
    routes: {
        "": "start", // ������ hash-���
        "!/": "start", // ��������� ��������
        "!/success": "success", // ���� �����
        "!/error": "error" // ���� ������
    },

    start: function () {
        $(".block").hide(); // ������ ��� �����
        $("#start").show(); // ���������� ������ /// why all links are displayed?
    },

    success: function () {
        $(".block").hide();
        $("#success").show();
    },

    error: function () {
        $(".block").hide();
        $("#error").show();
    }
});

var controller = new Controller(); // ������ ����������

var Start = Backbone.View.extend({
    el: $("#start"), // DOM ������� widget'�
    events: {
        "click input:button": "check" // ���������� ����� �� ������ "���������"
    },
    check: function () {
        if (this.$el.find("input:text").val() == "test") // �������� ������
            controller.navigate("!/success", true); // ������� �� �������� success
        else
            controller.navigate("!/error", true); // ������� �� �������� error
    }
});

var start = new Start();

Backbone.history.start();  // ��������� HTML5 History push    

