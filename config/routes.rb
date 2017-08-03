Rails.application.routes.draw do

  root to: 'homepage#homepage'
  get '/homepage' => 'homepage#homepage'

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
