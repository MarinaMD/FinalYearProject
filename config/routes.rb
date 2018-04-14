Rails.application.routes.draw do
  resources :nodes
  resources :diagrams

  root to: 'diagrams#main_page'
end
