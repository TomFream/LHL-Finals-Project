class PlaylistsController < ApplicationController
  before_action :set_playlist, only: [:show, :update, :destroy]

  # GET /playlists
  def index
    @playlist = Playlist.find_by(name: params[:playlist_name]).playlsit_questions
    
    @questions_ids = [] 
    @playlist.each do |q|
      @question_ids.push(p.question_id)
    }

    @questions = Question.where(id: => @question_ids)

    render json {
      questions: @questions
    }
  end

  # GET /playlists/1
  def show
    render json: @playlist
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

  # PATCH/PUT /playlists/1
  def update
    if @playlist.update(playlist_params)
      render json: @playlist
    else
      render json: @playlist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /playlists/1
  def destroy
    @playlist.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_playlist
      @playlist = Playlist.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def playlist_params
      params.fetch(:playlist, {})
    end
end