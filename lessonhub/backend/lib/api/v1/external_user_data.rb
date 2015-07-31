require 'base64'

module Api::V1::ExternalUserData
  class InvalidBase64String < StandardError; end

  extend self

  def decrypt(data)
    email, first_name, last_name = (data || '').split("&")

    {
      email: decode(email),
      name: "#{decode(first_name)} #{decode(last_name)}"
    }
  end

  def encrypt(data)
    first_name, last_name = data[:name].split(' ')

    "#{encode(data[:email])}&#{encode(first_name)}&#{encode(last_name)}"
  end

  private

    def decode(encoded)
      Base64.decode64(encoded)
    rescue NoMethodError
      raise InvalidBase64String
    end

    def encode(raw)
      Base64.encode64(raw).chomp
    end
end
