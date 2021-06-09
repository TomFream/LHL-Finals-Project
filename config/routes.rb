Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data
    get '/data', to: 'tests#index'   #call test controller index method

    resources :playlists
    # resources :answers
    resources :questions, except: [:destroy, :create, :update]
    resources :categories, except: [:destroy, :create, :update]
    resources :users
    resources :answer_options, except: [:destroy, :create, :update]
  end

  
  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
