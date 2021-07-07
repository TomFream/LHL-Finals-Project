Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do # /api/data
    get '/tests/:id', to: 'tests#index'   #call test controller index method
    
    get '/playlists/:playlist_name', to: 'playlists#show'
    get '/playlists', to: 'playlists#index'
    post '/playlists/update', to: 'playlists#update'
  end
  
  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
