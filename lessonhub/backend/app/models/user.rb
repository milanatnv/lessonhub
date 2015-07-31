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

class User < ActiveRecord::Base
  class PasswordInvalidOrMissing < StandardError; end

  STATUSES = {
    active: 'active',
    pending: 'pending'
  }
  validates :status, inclusion: { in: STATUSES.values }
  validates :email, uniqueness: true

  scope :active, -> { where(status: STATUSES[:active]) }

  authenticates_with_sorcery!

  def activate!(params)
    if params[:password].blank? || params[:password] != params[:password_confirmation]
      raise PasswordInvalidOrMissing
    end

    update!(password: params[:password],
            state: params[:state],
           # status: User::STATUSES[:active] # TODO
           )
  end

  def self.find_by_session(session)
    if session[:user_id] || Rails.env.test?
     User.find(session[:user_id])
    else
      # TODO: this is here only to preserve the current flow of
      #       the registration page, when user goes directly to
      #       /register instead of going to /register/:encrypted-data
      #
      #       remove this once we figure out what happens if users
      #       hit /register directly without providing third-party
      #       data
      #
      User.find_by(email: "mary.smith@baileymiddleschool.com")
    end
  end
end
