class UIDecider

  def self.calculate_class_name(current_user)
    if current_user
      return "user-ui"
    else
      return "admin-ui"
    end
  end

  def self.logo?(current_user)
    if current_user.role == "shelter"
      return 'Change Logo'
    elsif current_user.role == "member"
      return 'Change Profile Photo'
    else
      return nil
    end
  end

end
