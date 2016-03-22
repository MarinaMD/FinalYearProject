Rails.application.routes.draw do
  resources :diagrams

  root to: 'diagrams#index'
end
