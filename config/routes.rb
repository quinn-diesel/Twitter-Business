Rails.application.routes.draw do

  resources :tweets

  get "/searches" => "searches#results"

  resources :users

  resources :searches

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
