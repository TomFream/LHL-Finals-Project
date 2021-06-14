class Api::PlaylistsController < ApplicationController
  # before_action :set_playlist, only: [:show, :update, :destroy]

  # GET /playlists
  def index
    @playlists = Playlist.all
    render :json => {
      playlists: @playlists
    }
  end

  # GET /playlists/1
  def show
    @playlist = Playlist.find_by(name: params[:playlist_name]).playlist_questions
    
    @question_ids = [] 
    @playlist.each do |question| 
      @question_ids.push(question.question_id)
    end

    @playlist_questions = Question.where(id: @question_ids)
    @playlist_answers = @playlist_questions.map{|question|
      answerArr = []
      AnswerOption.where(question_id: question.id).each do |a|
        answerArr.push(a)
      end
      answerArr.shuffle
    }

    render :json => {
      questions: @playlist_questions,
      answers: @playlist_answers
    }
  end

  # POST /playlists
  def create
    @playlist = Playlist.new(playlist_params)

    if @playlist.save
      render json: @playlist, status: :created, location: @playlist
    else
      render json: @playlist.errors, status: :unprocessable_entity
    end
  end

#   # PATCH/PUT /playlists/1
  def update
    # if @playlist.update(playlist_params)
    #   render json: @playlist
    # else
    #   render json: @playlist.errors, status: :unprocessable_entity
    # end
    @add_question = PlaylistQuestion.create(playlist_id: params[:playlist], question_id: params[:question])

    render json: "Thanks for sending a POST request with cURL! Payload: #{params[:question]}"
  end

#   # DELETE /playlists/1
#   def destroy
#     @playlist.destroy
#   end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_playlist
#       @playlist = Playlist.find(params[:id])
#     end

#     # Only allow a list of trusted parameters through.
#     def playlist_params
#       params.fetch(:playlist, {})
#     end
end
