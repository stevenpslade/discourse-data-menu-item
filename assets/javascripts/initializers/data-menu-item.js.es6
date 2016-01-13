export default {
  name: "data-menu-item",

  initialize: function(container) {
    $(document).ready(function() {
      var source                 = $("#data-menu-item").html();
      var template               = Handlebars.compile(source);
      var user                   = Discourse.User.current();
      var pro                    = false;
      var logged_user            = false;
      var data_url               = "";


      $.ajax("/custom_group_names", {
            type: 'GET'
            // data: {custom_group_names: true, group_names: groups}
          }).done(function(res){
            if(res.custom_group_names){
              data_url = res.group_names;
            }
          });

      // if(user) {
      //   logged_user = true;
      //   if(user.total_unread_notifications > 0) {
      //     new_notification_class = "new-notifications"
      //     notification_count = "(" + user.total_unread_notifications + ")";
      //   }
      // }

      var html = template({pro: pro, logged_user: logged_user, data_url: data_url});
      $('body').prepend(html);
    });
  }
}