Rails.application.routes.draw do
  resources :bids
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :products
    resources :bids, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end
  root to: "static_pages#root"
end
