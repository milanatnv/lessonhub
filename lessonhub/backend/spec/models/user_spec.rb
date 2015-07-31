# == Schema Information
#
# Table name: users
#
#  id               :integer          not null, primary key
#  email            :string           not null
#  name             :string           not null
#  status           :string           default("pending"), not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  state            :string
#  crypted_password :string
#  salt             :string
#

require 'rails_helper'

RSpec.describe User, :type => :model do
  before do
    User.create!([
      {id: 1, email: "mary.smith@baileymiddleschool.com", name: "Mary Smith"},
      {id: 2, email: "walter@jpwynnehighschool.com", name: 'Walter Smith' }
    ])
  end

  describe 'validations' do
    it 'checks valid statuses' do
      user = User.first
      expect { user.update!(status: 'foo') }.to raise_error(ActiveRecord::RecordInvalid)
    end
  end

  describe '.active' do
    it 'returns active users' do
      user = User.first
      user.update!(status: User::STATUSES[:active])
      expect(User.active).to eq([user])
    end
  end

  describe '#activate' do
    it 'sets user\'s password' do
      user = User.first
      expect{ user.activate!({password: 'password', password_confirmation: 'password'}) }.to change{ user.crypted_password }.
        from(nil)
    end
  end
end
