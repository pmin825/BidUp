Rails.application.routes.draw do
  resources :reviews
  resources :bids
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resources :products do 
      collection do
        get :search, to: "products#search", as: "search"
      end
    end
    resources :bids, only: [:create, :destroy, :index]
    resources :reviews, only: [:create, :destroy, :show, :index]
    resource :session, only: [:create, :destroy]
  end
  root to: "static_pages#root"
end
