class SoundsController < ApplicationController
    def index
        sounds = Sound.all
        render json: sounds
     end
 
     def show
         sound = Sound.find(params[:id])
         render json: sound
     end
end
