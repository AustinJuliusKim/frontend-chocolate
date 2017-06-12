Rails.application.routes.draw do


  scope '/api' do
    get :posts, to: 'posts#index'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
