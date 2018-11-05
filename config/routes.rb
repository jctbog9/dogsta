Rails.application.routes.draw do
  root 'breeds#index'
  devise_for :users

  resources :breeds, only: [:index, :show]
  resources :profile, only: [:index]
  resources :dogs, only: [:show]

  namespace :api do
    namespace :v1 do
      resources :breeds, only: [:index, :show] do
        resources :dogs, only: [:index]
      end
      resources :random_breed, only: [:index]
      resources :current_user, only: [:index]
      resources :current_shelter, only: [:index]
      resources :dogs, only: [:index, :show, :create, :new, :destroy]
    end
  end
end
