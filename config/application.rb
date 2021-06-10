require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
# require "sprockets/railtie"
require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RailsBackEnd
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    skip_before_action :verify_authenticity_token
    helper_method :login!, :logged_in?, :current_user,     :authorized_user?, :logout!, :set_user
        
    def login!
          session[:user_id] = @user.id
    end
    def logged_in?
          !!session[:user_id]
    end
    def current_user
          @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end
    def authorized_user?
           @user == current_user
    end
    def logout!
           session.clear
    end
    def set_user
        @user = User.find_by(id: session[:user_id])
    end
    
    config.api_only = true
  end
end
