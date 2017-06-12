class PostsController < ApplicationController
  def index
    # # For search
    # q = params[:q]
    #
    # if q.blank?
    #     render status: 400, json: { error: 'Expected parameter `q` '}
    # else
    #   render (
    #     status: 200,
    #     json: Post.where(["description LIKE ?", "%#{q}"]).limit(100)
    #   )
    # end
    
    render status: 200, json: Post.all
  end

  def show
  end
end
