Rails.application.routes.draw do
  root 'breeds#index'
  devise_for :users

  resources :breeds, only: [:index]

end
