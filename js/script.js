$(function(){
    var data = [
        { "date": "2019-01-15 17:31:11", "title": "Событие", "description": "Описание событья", "url": "#" },
        { "date": "2019-01-15 18:31:11", "title": "Событие1", "description": "Описание событья1", "url": "#" },
        { "date": "2019-01-18 18:31:11", "title": "Событие2", "description": "Описание событья2", "url": "#" }
    ]; 
    $('#eventCalendar').eventCalendar({
        jsonData: data,
        jsonDateFormat: 'human',
        eventsjson: 'file.json',
        startWeekOnMonday: true,
        openEventInNewWindow: false,
        dateFormat: 'dddd MM-DD-YYYY',
        showDescription: true, 
        eventsScrollable: true,
        locales: {
            locale: "ru",
            txt_noEvents: "На данный день нет событий",
            txt_SpecificEvents_prev: "",
            txt_SpecificEvents_after: "Событие:",
            txt_next: "Следующее событие",
            txt_NextEvents: "Следующее событие",
            txt_GoToEventUrl: "Смотреть",
            moment: {
                "months" : [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
                "monthsShort" : [ "Янв", "Фев", "Мар", "Апт", "Май", "Июн",
                        "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
                "weekdays" : [ "Воскресенье","Понедельник","Вторник","Среда","Четверг",
                        "Пятница","Суббота" ],
                "weekdaysShort" : [ "Вс","Пн","Вт","Ср","Чт",
                        "Пт","Сб" ],
                "weekdaysMin" : [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ]
            }
          }
    });
});