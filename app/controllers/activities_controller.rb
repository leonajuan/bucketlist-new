class ActivitiesController < ApplicationController

  def index
    activities = Activity.all 
    render json: activities, status: :ok
  end

  def show
    activity = find_activity
    if activity
      render json: activity, status: :ok
    else
      render json: { error: "Activity not found!" }, status: :not_found
    end
  end

  private

  def find_activity
    Activity.find_by(id: params[:id])
  end

end
