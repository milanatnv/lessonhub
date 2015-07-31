module RequestHelpers
  def response_json
    JSON.parse(response_body, symbolize_names: true)
  end
end
