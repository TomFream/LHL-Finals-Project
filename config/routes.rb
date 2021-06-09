Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data
    get '/data', to: 'tests#index'   #call test controller index method
    resources :dogs

    resources :playlists
    # resources :answers
    resources :quiz   #related model??//TODO
    resources :categories
    resources :users
  end

  
  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
