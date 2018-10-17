require 'rails_helper'

RSpec.describe Breed, type: :model do
  it { should have_valid(:name).when("Puppy") }
  it { should_not have_valid(:name).when(nil) }

  it { should have_valid(:description).when("This is a description of a cute puppy") }
  it { should_not have_valid(:description).when(nil) }

  it { should have_valid(:img_url).when("http://www.image.com") }
  it { should_not have_valid(:img_url).when(nil) }
end
