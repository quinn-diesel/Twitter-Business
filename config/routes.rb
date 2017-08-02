Rails.application.routes.draw do

  root to: 'homepage#homepage'

  get    '/login' => 'session#new'
  post   '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  get '/tweets/search' => 'tweets#search'
  put '/tweets/search' => 'tweets#save_searches'

  resources :tweets

  get "/searches" => "searches#results"

  resources :users

  resources :searches

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
