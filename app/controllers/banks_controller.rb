class BanksController < ApplicationController
    def index
       banks = Bank.all
       render json: banks
    end

    def show
        bank = Bank.find(params[:id])
        render json: bank
    end
end
