Rails.application.routes.draw do
  resources :reviews
  resources :bids
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resources :products
    resources :bids, only: [:create, :destroy, :index]
    resource :session, only: [:create, :destroy]
  end
  root to: "static_pages#root"
end
