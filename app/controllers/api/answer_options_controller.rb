class Api::AnswerOptionsController < ApplicationController
  before_action :set_answer_option, only: [:show, :update, :destroy]
  def index
    @answer_options = AnswerOption.all
  
    render json: @answer_options
  end
  # GET /answer_options/1
  def show
    render json: @answer_option
  end
  
  # POST /answer_options
  def create
    @answer_option = AnswerOption.new(question_params)
  
    if @answer_option.save
      render json: @answer_option, status: :created, location: @answer_option
    else
      render json: @answer_option.errors, status: :unprocessable_entity
    end
  end
  
  # PATCH/PUT /answer_options/1
  def update
    if @answer_option.update(question_params)
      render json: @answer_option
    else
      render json: @answer_option.errors, status: :unprocessable_entity
    end
  end
  
  # DELETE /answer_options/1
  def destroy
    @answer_option.destroy
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @answer_option = AnswerOption.find(params[:id])
    end
  
    # Only allow a list of trusted parameters through.
    def question_params
      params.fetch(:answer_option, {})
    end
end
