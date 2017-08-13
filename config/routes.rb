Rails.application.routes.draw do

  mount ActionCable.server => '/cable'

  get 'd3/show' => 'd3#show'
  get 'd3/index'
  get 'd3/data', :defaults => { :format => 'json' }


  resources :chatrooms, param: :slug
  resources :messages

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


end
