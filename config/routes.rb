Rails.application.routes.draw do
  root 'breeds#index'
  devise_for :users

  resources :breeds, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :breeds, only: [:index, :show]
    end
  end
end
