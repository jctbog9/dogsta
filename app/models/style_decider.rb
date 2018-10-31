class StyleDecider

  def self.calculate_class_name(current_user)
    if current_user
      return "class=#{current_user.role}"
    else
      return nil
    end
  end

end
