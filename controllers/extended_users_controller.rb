UsersController.class_eval do

  def custom_group_names
    groups = current_user.groups.all.select("name")
    if groups.present?
      render json: {custom_group_names: true, group_names: groups}
    else
      render json: {custom_group_names: false }
    end
  end

end