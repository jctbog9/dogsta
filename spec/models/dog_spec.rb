require 'rails_helper'

RSpec.describe Dog, type: :model do
  it { should have_valid(:name).when('pup') }
  it { should_not have_valid(:name).when(nil) }

  it { should have_valid(:story).when('this is a story') }
  it { should_not have_valid(:story).when(nil) }

  it { should have_valid(:age).when(1) }
  it { should_not have_valid(:age).when(nil) }

end
