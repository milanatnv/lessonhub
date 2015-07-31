if defined?(RspecApiDocumentation)
  RspecApiDocumentation.configure do |config|
    config.format = :json
    config.response_headers_to_include = [
      "Content-Type", "Cache-Control", "X-Frame-Options", "X-XSS-Protection",
      "X-Content-Type-Options", "Content-Length"
    ]
  end
end

Raddocs.configure do |config|
  config.api_name = "Lesson Hub API documentation"
end
