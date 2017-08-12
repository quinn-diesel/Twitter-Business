Rails.application.routes.draw do

  get 'd3/show'

  mount ActionCable.server => '/cable'

  resources :chatrooms, param: :slug
  resources :messages

  root to: 'homepage#homepage'
  get '/homepage' => 'homepage#homepage'

  get '/charts' => 'd3#show'

  get    '/login' => 'session#new'
  post   '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  get '/tweets/search' => 'tweets#search'
  post '/tweets/search/:user_id' => 'tweets#save_searches', as: 'update_user_searches'

  resources :tweets

  resources :users

  resources :searches

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
