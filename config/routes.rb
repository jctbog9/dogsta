Rails.application.routes.draw do
  root 'breeds#index'
  devise_for :users

  resources :breeds, only: [:index, :show]
  resources :profile, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :breeds, only: [:index, :show]
      resources :random_breed, only: [:index]
      resources :current_user, only: [:index]
      resources :shelter, only: [:index]
    end
  end
end
