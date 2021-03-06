var fastn = require('^fastn'),
    app = require('^app');

module.exports = function(){
    return fastn('div', {class: 'appBar'},
        fastn('div',{class:'menuIcon'},fastn('i', {'class': 'mdi mdi-menu'}) )
        .on('click', function(event, scope) {
            event.preventDefault();
            event.stopImmediatePropagation();
            require('../menus').main.show(true);
        }),

        fastn('div',{class:'title'}, 'Mr Sholto Maud' )
        .on('click',function(event, scope) {
            event.preventDefault();
            app.activityRouter.top('home');
        }),
        
        fastn('div',{class:'loginIcon'},fastn('i', {'class': 'mdi mdi-login'}) )
        .on('click',function(event, scope) {
            event.preventDefault();
            app.activityRouter.top('login');
        }))
};