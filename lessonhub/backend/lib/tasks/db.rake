Rake::Task["db:setup"].clear

namespace :db do
  task 'setup' do
    exec "./bin/setup #{ARGV.last}"
  end
end
