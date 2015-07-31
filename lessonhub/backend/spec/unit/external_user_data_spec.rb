module Api; module V1; end; end

require './lib/api/v1/external_user_data'

subject = Api::V1::ExternalUserData

describe subject do
  let(:data) {
    { name: 'Walter Smith', email: "walter@jpwynnehighschool.com" }
  }

  it '.encrypt and .decrypt are inverses of each other' do
    expect(subject.decrypt(subject.encrypt(data))).to eq(data)
  end
end

