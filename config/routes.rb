Rails.application.routes.draw do
  resources :track_sounds
  resources :tracks
  resources :sounds
  resources :banks
  resources :songs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
