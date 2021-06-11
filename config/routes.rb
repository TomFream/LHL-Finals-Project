Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: 'json'} do # /api/data
    get '/data/:id', to: 'tests#index'   #call test controller index method

    resources :playlists
    # resources :answers
    resources :quiz   #related model??//TODO
    resources :questions, except: [:destroy, :create, :update]
    resources :categories, except: [:destroy, :create, :update]
    resources :answer_options, except: [:destroy, :create, :update]
    
    get '/login', to: 'sessions#login'
    post '/login', to: 'sessions#create'
    post '/logout', to: 'session#destroy'
    get '/logged_in', to: 'session#is_logged_in?'
    get '/logout', to: 'session#destroy'
    
    resources :users, only: [:new, :edit, :update]
    resources :items, only: [:create, :show, :index, :destroy]
    
  end
  
  
  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
