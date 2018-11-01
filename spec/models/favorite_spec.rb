require 'rails_helper'

RSpec.describe Favorite, type: :model do
  it { should have_valid(:user_id).when(1) }
  it { should_not have_valid(:user_id).when(nil) }

  it { should have_valid(:dog_id).when(1) }
  it { should_not have_valid(:dog_id).when(nil) }
end
