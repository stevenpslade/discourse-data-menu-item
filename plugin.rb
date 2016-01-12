# name: discourse-data-menu-item
# about: shows 'My Data' on navigation bar for professionals only
# version: 0.0.1
# authors: Steven Slade <steven@twobyfore.com>

after_initialize do

  Discourse::Application.routes.prepend do
    get "custom_group_names" => "users#custom_group_names"
  end

  load File.expand_path("../controllers/extended_users_controller.rb", __FILE__)
end