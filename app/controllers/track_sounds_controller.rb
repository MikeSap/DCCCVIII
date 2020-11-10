class TrackSoundsController < ApplicationController
    def index
        track_sounds = TrackSound.all
        render json: track_sounds
    end

    def show
        track_sound = TrackSound.find(params[:id])
        render json: track_sound
    end
end
