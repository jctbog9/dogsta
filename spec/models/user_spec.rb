require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_valid(:email).when("john@aol.com") }
  it { should_not have_valid(:email).when("john") }
  it { should_not have_valid(:email).when(2) }
  it { should_not have_valid(:email).when(nil) }

  it { should have_valid(:password).when("1234567") }
  it { should have_valid(:password).when(1234567) }
  it { should_not have_valid(:password).when(nil) }

  it { should have_valid(:role).when("member") }
  it { should have_valid(:role).when("user") }
  it { should_not have_valid(:role).when(nil) }

  it "role should be a string" do
    expect User.role.to eq(string)
  end
end
