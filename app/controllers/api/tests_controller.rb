class Api::TestsController < ApplicationController
  # before_action :set_category, only: [:index, :show, :update, :destroy]

  def index
    @cat_questions = Question.where(category_id: params[:id])
    @cat_answers = @cat_questions.map{|question|
      answerArr = []
      AnswerOption.where(question_id: question.id).each do |a|
        answerArr.push(a)
      end
      answerArr
    }
    
    render :json => {
      questions: @cat_questions,
      answers: @cat_answers
    }
    # render json: @cat_questions
  end

  # private
  # # Use callbacks to share common setup or constraints between actions.
  # def set_category
  #   @category = Category.find_by_id(params[:id])
  # end
  # # Only allow a list of trusted parameters through.
  # # def user_params
  # #   params.fetch(:user, {})
  # # end
end