require 'rails_helper'

RSpec.describe Breed, type: :model do

  it { should have_valid(:name).when("Poodle") }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:description).when("This Poodle is amazing!") }
  it { should_not have_valid(:description).when(nil, "") }

  it { should have_valid(:img_url).when("https://cdn1-www.dogtime.com/assets/uploads/2009/05/poodle-dog-names.jpg") }
  it { should_not have_valid(:img_url).when(nil, "") }

end
