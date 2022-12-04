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

  def create
    activity = Activity.create(activity_params)
    if activity.valid? 
      render json: activity, status: :created
    else
      render json: { errors: activity.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def find_activity
    Activity.find_by(id: params[:id])
  end

  def activity_params
    params.permit(:name, :location, :address, :image, :completed)
  end

end
