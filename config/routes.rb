Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json }  do

    resources :users, only: [:create, :show, :update] do 
      resources :boards, only: [:index]
      resources :follows, only: [:index]
      resources :board_to_pins, only: [:index]
    end
    
    resource :session, only: [:create, :destroy]

    resources :boards, only: [:create, :show, :update, :destroy]
    
    resources :pins, only: [:create, :index, :show, :update, :destroy]

    resources :follows, only: [:create, :destroy]

    resources :board_to_pins, only: [:create, :destroy]
    
  end

  
end
